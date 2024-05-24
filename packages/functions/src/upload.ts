import { S3 } from '@aws-sdk/client-s3'
import { APIGatewayProxyHandler } from 'aws-lambda'

const s3 = new S3

export const main: APIGatewayProxyHandler = async (event) => {
  if (!event.body) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'No Body' })
    }
  }
  const jsonBody = JSON.parse(event.body)
  const { fileName, body } = jsonBody


  const bucketName = process.env.BUCKET_NAME
  const key = `${fileName}.json`
  console.log('les go',
    key,
    'bucket ,',
    bucketName,
    body)
  const command = {
    Bucket: bucketName,
    Key: key,
    Body: body,
    ContentType: 'application/json'
  }


  try {
    await s3.putObject(command)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'File uploaded successfully' })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'error.message' })
    }
  }
}
