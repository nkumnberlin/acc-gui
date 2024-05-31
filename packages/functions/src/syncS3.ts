import AWS, { SNS } from 'aws-sdk'

const s3 = new AWS.S3();
const ec2 = new AWS.EC2();
const ssm = new AWS.SSM();
const sns = new SNS();


export const main = async (event: any) => {
  const instanceId = process.env.EC2_INSTANCE_ID!;
  const bucketName = process.env.BUCKET_NAME!;
  const objectKey = event.Records[0].s3.object.key;




  try {
    console.log('_moment buckett',bucketName)
    console.log('_moment object',instanceId)
    console.log('_moment instance',objectKey)

    const message = {
      default: JSON.stringify({ bucket: bucketName, key: objectKey }),
    };
    const params = {
      Message: JSON.stringify(message),
      TopicArn: 'arn:aws:sns:eu-central-1:851725375448:trigger_on_s3_update'
    };

    const data = await sns.publish(params).promise();
    console.log('Message sent:', data);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Successfully processed EC2 and S3!",
        s3Data: "s3Response",
        ec2Data: "ec2Response"
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
