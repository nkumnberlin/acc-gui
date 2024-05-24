import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { APIGatewayProxyHandler } from "aws-lambda";
import * as crypto from "crypto";

const s3 = new S3Client({ region: process.env.AWS_REGION });

export const main: APIGatewayProxyHandler = async (event) => {
    if(!event.body) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'No Body' }),
        };
    }
    console.log('___ ', event.body)
    const body = JSON.parse(event.body);
    const { fileName, fileType } = body;

    const bucketName = process.env.BUCKET_NAME;
    const key = `${crypto.randomUUID()}-${fileName}`;

    const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        ContentType: fileType,
    });

    try {
        await s3.send(command);
        return {
            statusCode: 200,
            body: JSON.stringify({
                key,
                url: `https://${bucketName}.s3.amazonaws.com/${key}`,
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'error.message' }),
        };
    }
};
