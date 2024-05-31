import { S3Client, S3,GetObjectCommand } from '@aws-sdk/client-s3'
import { APIGatewayProxyHandler } from 'aws-lambda'

const s3Client = new S3Client({ region: 'eu-central-1' })
const s3 = new S3();

export const main: APIGatewayProxyHandler = async (event) => {
  const bucketName = process.env.BUCKET_NAME

  try {
    console.log('__weeu weeuu ', bucketName)
    const contents = await s3.listObjectsV2({ Bucket: bucketName })
    console.log('_henlo cont', contents)
    const keys = contents.Contents?.map((content) => content.Key)
    let content: any[] = [];
    try{
    for (const key of keys) {
      console.log('__ keys?', keys, 'key', key)
      const input = { // GetObjectRequest
        Bucket: bucketName, // required
        Key: key
      }

      const command = new GetObjectCommand(input);
      const response = await s3Client.send(command);
      if(!response.Body) throw new Error('body is empty')
      console.log('to string', response.Body);
      const stream = response.Body;

      const chunks = [];
      for await (const chunk of stream) {
        console.log('chunk ', chunk)
        chunks.push(chunk);
      }
      console.log('chunken ', chunks)
      const data = Buffer.concat(chunks).toString('utf-8');
      content.push(data)
    }
    }catch(e){
      console.log('_ brick the wall', e);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: e })
      }
    }
    console.log('___', content);
    return {
      statusCode: 200,
      body: { message: content }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    }
  }
}
