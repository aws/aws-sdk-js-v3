import { describe, test as it, expect, vi } from "vitest";
import { S3 } from "@aws-sdk/client-s3";
import { S3Control } from "@aws-sdk/client-s3-control";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { EC2 } from "@aws-sdk/client-ec2";
import { SQS } from "@aws-sdk/client-sqs";
import { Glacier } from "@aws-sdk/client-glacier";
import { STS } from "@aws-sdk/client-sts";
import { TranscribeStreaming } from "@aws-sdk/client-transcribe-streaming";
import { Route53 } from "@aws-sdk/client-route-53";
import { RDS } from "@aws-sdk/client-rds";

describe("client credentials forceRefresh", () => {
  describe("should force refresh the credentials if requested in code", () => {
    const credentials = vi.fn().mockReturnValue({
      accessKeyId: "accessKeyId",
      secretAccessKey: "secretAccessKey",
      sessionToken: "sessionToken",
      expiration: new Date(Date.now() + 3600 * 1000), // 1 hour from now
    });
    const config = { credentials };

    afterEach(() => {
      vi.clearAllMocks();
    });

    it.each([S3, S3Control, DynamoDB, EC2, Glacier, RDS, Route53, SQS, STS, TranscribeStreaming])(
      "%o",
      async (ClientCtr) => {
        const client = new ClientCtr(config);
        await client.config.credentials();
        expect(credentials).toHaveBeenCalledTimes(1);

        // Returns the cached credentials for the second time.
        await client.config.credentials();
        expect(credentials).toHaveBeenCalledTimes(1);

        // Calls the function, if forceRefresh is set to true.
        await client.config.credentials({ forceRefresh: true });
        expect(credentials).toHaveBeenCalledTimes(2);

        // Doesn't call the function, if forceRefresh is set to false.
        await client.config.credentials({ forceRefresh: false });
        expect(credentials).toHaveBeenCalledTimes(2);

        // Doesn't call the function, if forceRefresh is not set.
        await client.config.credentials();
        expect(credentials).toHaveBeenCalledTimes(2);
      }
    );
  });
});
