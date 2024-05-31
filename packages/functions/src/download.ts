import { S3Client, S3, GetObjectCommand } from "@aws-sdk/client-s3";
import { APIGatewayProxyHandler } from "aws-lambda";

const s3Client = new S3Client({ region: "eu-central-1" });
const s3 = new S3();

export const main: APIGatewayProxyHandler = async (event) => {
  const bucketName = process.env.BUCKET_NAME;

  try {
    const contents = await s3.listObjectsV2({ Bucket: bucketName });
    const keys = contents.Contents?.map((content) => content.Key);
    let content: any[] = [];
    let returnToClient: any = [];
    const oldFilesWithBuffer = await Promise.allSettled(
      keys.map(async (key) => {
        const input = {
          // GetObjectRequest
          Bucket: bucketName, // required
          Key: key,
        };

        const command = new GetObjectCommand(input);
        const response = await s3Client.send(command);
        if (!response.Body) throw new Error("body is empty");
        const stream = response.Body;

        const chunks = [];
        for await (const chunk of stream) {
          chunks.push(chunk);
        }
        const data = JSON.parse(Buffer.concat(chunks).toString());
        const noJson = key.split(".")[0];
        const setting = {
          [noJson]: data,
        };
        console.log("fuer mei ngewissen", setting);
        return setting;
      }),
    );
    const onlyFulfilled = oldFilesWithBuffer.filter(
      (promise) => promise.status === "fulfilled",
    );
    const onlyValues = onlyFulfilled.map((promise) => promise.value);
    console.log("_only values", onlyValues);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: onlyValues }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
