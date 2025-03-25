import { describe, test as it, expect } from "vitest";
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

describe("client config object custody", () => {
  it("should maintain a consistent object reference throughout the client resolver stack lifecycle (the constructor)", () => {
    const clients = [
      new S3(),
      new S3Control(),
      new DynamoDB(),
      new EC2(),
      new Glacier(),
      new RDS(),
      new Route53(),
      new SQS(),
      new STS(),
      new TranscribeStreaming(),
    ];
    for (const client of clients) {
      try {
        expect(Object.keys(client.config)).toEqual(Object.keys(client.initConfig ?? {}));
      } catch (e) {
        throw new Error(`MismatchedObjectKeys - config object custody error for ${client.constructor.name}`);
      }

      // reference equality assertion
      try {
        expect(client.config).toBe(client.initConfig);
      } catch (e) {
        throw new Error(`ReferenceEqualityError - config object custody error for ${client.constructor.name}`);
      }
    }
  });
});
