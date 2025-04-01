import "@smithy/signature-v4a";

import { Sha256 } from "@aws-crypto/sha256-js";
import {
  CreateBucketCommand,
  DeleteBucketCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import {
  CreateMultiRegionAccessPointCommand,
  DeleteMultiRegionAccessPointCommand,
  DescribeMultiRegionAccessPointOperationCommand,
  GetMultiRegionAccessPointCommand,
  S3ControlClient,
} from "@aws-sdk/client-s3-control";
import { GetCallerIdentityCommand, STSClient } from "@aws-sdk/client-sts";
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { HttpRequest } from "@smithy/protocol-http";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

// Setting timeout for long-running tests
const LONG_TIMEOUT = 1800000; // 30 minutes

describe("S3 Multi-Region Access Point with SignatureV4a (JS Implementation)", () => {
  let s3Client: S3Client;
  let s3ControlClient: S3ControlClient;
  let accountId: string;
  let signer: SignatureV4MultiRegion;
  let mrapName: string;
  let bucketName1: string;
  let bucketName2: string;
  let mrapArn: string;

  beforeAll(async () => {
    // Set timeout for setup
    vi.setConfig({ testTimeout: LONG_TIMEOUT });

    const stsClient = new STSClient({});
    const { Account } = await stsClient.send(new GetCallerIdentityCommand({}));
    accountId = Account!;
    const timestamp = Date.now();
    mrapName = `test-mrap-${timestamp}`;
    bucketName1 = `test-bucket1-${timestamp}`;
    bucketName2 = `test-bucket2-${timestamp}`;

    signer = new SignatureV4MultiRegion({
      service: "s3",
      region: "*",
      sha256: Sha256,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
        sessionToken: process.env.AWS_SESSION_TOKEN,
      },
    });

    s3Client = new S3Client({
      region: "*",
      useArnRegion: true,
      signer,
    });

    s3ControlClient = new S3ControlClient({
      region: "*",
      signer,
    });

    // Create buckets
    await s3Client.send(
      new CreateBucketCommand({ Bucket: bucketName1, CreateBucketConfiguration: { LocationConstraint: "us-west-2" } })
    );
    await s3Client.send(
      new CreateBucketCommand({ Bucket: bucketName2, CreateBucketConfiguration: { LocationConstraint: "us-east-2" } })
    );

    // Create MRAP
    const createResponse = await s3ControlClient.send(
      new CreateMultiRegionAccessPointCommand({
        AccountId: accountId,
        ClientToken: `create-${timestamp}`,
        Details: {
          Name: mrapName,
          PublicAccessBlock: {
            BlockPublicAcls: true,
            BlockPublicPolicy: true,
            IgnorePublicAcls: true,
            RestrictPublicBuckets: true,
          },
          Regions: [
            { Bucket: bucketName1, BucketAccountId: accountId },
            { Bucket: bucketName2, BucketAccountId: accountId },
          ],
        },
      })
    );

    // Wait for MRAP to be created
    let mrapReady = false;
    let retries = 0;
    while (!mrapReady && retries < 60) {
      const describeResponse = await s3ControlClient.send(
        new DescribeMultiRegionAccessPointOperationCommand({
          AccountId: accountId,
          RequestTokenARN: createResponse.RequestTokenARN,
        })
      );

      if (describeResponse.AsyncOperation?.RequestStatus === "SUCCESS") {
        mrapReady = true;
      } else {
        await new Promise((resolve) => setTimeout(resolve, 30000)); // Wait for 30 seconds before retrying
        retries++;
      }
    }

    if (!mrapReady) {
      throw new Error("MRAP creation timed out");
    }

    // Get MRAP ARN
    const getResponse = await s3ControlClient.send(
      new GetMultiRegionAccessPointCommand({
        AccountId: accountId,
        Name: mrapName,
      })
    );
    mrapArn = getResponse.AccessPoint!.Alias!;

    // Upload a small file to one of the buckets
    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucketName1,
        Key: "testfile",
        Body: Buffer.from("test", "utf-8"),
      })
    );
  });

  afterAll(async () => {
    // Set timeout for teardown
    vi.setConfig({ testTimeout: LONG_TIMEOUT });

    // Delete MRAP
    try {
      await s3ControlClient.send(
        new DeleteMultiRegionAccessPointCommand({
          AccountId: accountId,
          ClientToken: `delete-${Date.now()}`,
          Details: {
            Name: mrapName,
          },
        })
      );
    } catch (error) {
      console.error("Failed to initiate deletion of Multi-Region Access Point:", error);
    }

    // Delete buckets
    try {
      await s3Client.send(new DeleteBucketCommand({ Bucket: bucketName1 }));
      await s3Client.send(new DeleteBucketCommand({ Bucket: bucketName2 }));
    } catch (error) {
      console.error("Failed to delete buckets:", error);
    }
  });

  it("should use SignatureV4a JS implementation", async () => {
    const mockRequest = new HttpRequest({
      method: "GET",
      protocol: "https:",
      hostname: "s3-global.amazonaws.com",
      headers: {
        host: "s3-global.amazonaws.com",
      },
      path: "/",
    });

    const signSpy = vi.spyOn(signer, "sign");

    await signer.sign(mockRequest, { signingRegion: "*" });

    expect(signSpy).toHaveBeenCalled();
    const signArgs = signSpy.mock.calls[0];
    expect(signArgs[1]?.signingRegion).toBe("*");

    // verify that signed request has the expected SigV4a headers
    const signedRequest = await signSpy.mock.results[0].value;
    expect(signedRequest.headers["x-amz-region-set"]).toBe("*");
    expect(signedRequest.headers["authorization"]).toContain("AWS4-ECDSA-P256-SHA256");

    signSpy.mockRestore();
  });

  it("should list objects through MRAP using SignatureV4a", async () => {
    const command = new ListObjectsV2Command({
      Bucket: mrapArn,
    });

    const response = await s3Client.send(command);

    expect(response.Contents).toBeDefined();
    expect(response.Contents?.length).toBeGreaterThan(0);
    expect(response.Contents?.some((object) => object.Key === "testfile")).toBe(true);
  });
});
