import { S3Client } from "@aws-sdk/client-s3";

/**
 * Successful compilation indicates the client can be initialized
 * with minimal configuration.
 */
export const initializeWithMinimalConfiguration = () => {
  return new S3Client({});
};
