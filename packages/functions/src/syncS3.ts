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
  // const record = event?.Records[0];
  // const bucketName = record.s3.bucket.name;
  // const objectKey = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));
  // console.log('___ bucketname', bucketName, objectKey)
  // console.log('___ record', record)
  // // Get the object from S3
  // const params = {
  //   Bucket: bucketName,
  //   Key: objectKey
  // };
  //
  // try {
  //   const data = await s3.getObject(params).promise();
  //   const fileContent = data.Body;
  // console.log('___ ', fileContent)
  //   // Send the file to the EC2 instance
  //   const ec2InstanceIp = 'YOUR_EC2_INSTANCE_IP'; // replace with your EC2 instance IP
  //   const ec2InstancePort = 80; // replace with the port your server is listening on
  //
  //   const options = {
  //     hostname: ec2InstanceIp,
  //     port: ec2InstancePort,
  //     path: '/upload', // the path on your EC2 instance that handles the file upload
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/octet-stream',
  //       'Content-Length': fileContent.length
  //     }
  //   };
  //
  //   const req = https.request(options, (res) => {
  //     console.log(`STATUS: ${res.statusCode}`);
  //     res.setEncoding('utf8');
  //     res.on('data', (chunk) => {
  //       console.log(`BODY: ${chunk}`);
  //     });
  //     res.on('end', () => {
  //       console.log('No more data in response.');
  //     });
  //   });
  //
  //   req.on('error', (e) => {
  //     console.error(`problem with request: ${e.message}`);
  //   });
  //
  //   // Write data to request body
  //   req.write(fileContent);
  //   req.end();
  //
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify('File forwarded to EC2 instance successfully!')
  //   };
  // } catch (error) {
  //   console.error(error);
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify('Error forwarding file to EC2 instance')
  //   };
  // }
};
