import { StackContext, Function, use } from 'sst/constructs'
import { Storage } from './Storage'
import { aws_iam } from 'aws-cdk-lib'

export function Functions({ stack }: StackContext) {
  const { bucket } = use(Storage)

  const func = new Function(stack, 'syncs3', {
    handler: 'packages/functions/src/syncS3.main',
    environment: {
      BUCKET_NAME: bucket.bucketName,
      EC2_INSTANCE_ID: process.env.EC2_INSTANCE_ID!,
    },
  })
  bucket.attachPermissions([func]);

  // Allow the Lambda function to interact with EC2
  func.attachPermissions([
    bucket,
    new aws_iam.PolicyStatement({
      actions: ["ec2:DescribeInstances", "ec2:StartInstances", "ec2:StopInstances", "ssm:SendCommand"],
      resources: ["*"],
    }),
  ]);

  // manuelles event triggern von bucket x lambda
  return { func}
}
