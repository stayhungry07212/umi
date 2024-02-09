import { S3Client } from '@aws-sdk/client-s3';
import { UmiPlugin } from '@stay.hungry07212/umi';
import { createAwsUploader } from './createAwsUploader';

export const awsUploader = (
  client: S3Client,
  bucketName: string
): UmiPlugin => ({
  install(umi) {
    umi.uploader = createAwsUploader(client, bucketName);
  },
});
