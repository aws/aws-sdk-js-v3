import "@smithy/signature-v4a";

import { Sha256 } from "@aws-crypto/sha256-js";
import { CloudFrontClient, CreateKeyValueStoreCommand, DeleteKeyValueStoreCommand } from "@aws-sdk/client-cloudfront";
import { CloudFrontKeyValueStoreClient, DescribeKeyValueStoreCommand } from "@aws-sdk/client-cloudfront-keyvaluestore";
import { GetCallerIdentityCommand, STSClient } from "@aws-sdk/client-sts";
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { HttpRequest } from "@smithy/protocol-http";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

// Setting timeout for tests
const TEST_TIMEOUT = 300000;

describe("CloudFront KeyValue Store with SignatureV4a (JS Implementation)", () => {
  let cfClient: CloudFrontClient;
  let kvsClient: CloudFrontKeyValueStoreClient;
  let keyValueStoreName: string;
  let keyValueStoreARN: string;
  let keyValueStoreETag: string;
  let signer: SignatureV4MultiRegion;

  beforeAll(async () => {
    // Set timeout for setup
    vi.setConfig({ testTimeout: TEST_TIMEOUT });

    const stsClient = new STSClient({});
    const { Account } = await stsClient.send(new GetCallerIdentityCommand({}));
    const timestamp = Date.now();
    keyValueStoreName = `test-store-${Account}-${timestamp}`;

    signer = new SignatureV4MultiRegion({
      service: "cloudfront-keyvaluestore",
      region: "*",
      sha256: Sha256,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
        sessionToken: process.env.AWS_SESSION_TOKEN,
      },
    });

    cfClient = new CloudFrontClient({
      region: "us-east-1",
    });

    kvsClient = new CloudFrontKeyValueStoreClient({
      region: "*",
      signer,
    });

    const createResponse = await cfClient.send(
      new CreateKeyValueStoreCommand({
        Name: keyValueStoreName,
      })
    );
    keyValueStoreARN = createResponse.KeyValueStore!.ARN!;
    keyValueStoreETag = createResponse.ETag!;
  });

  afterAll(async () => {
    // Set timeout for teardown
    vi.setConfig({ testTimeout: TEST_TIMEOUT });

    try {
      await cfClient.send(
        new DeleteKeyValueStoreCommand({
          Name: keyValueStoreName,
          IfMatch: keyValueStoreETag,
        })
      );
    } catch (error) {
      console.error("Failed to delete key-value store:", error);
    }
  });

  it("should use SignatureV4a JS implementation", async () => {
    const mockRequest = new HttpRequest({
      method: "POST",
      protocol: "https:",
      hostname: "cloudfront-keyvaluestore.amazonaws.com",
      headers: {
        host: "cloudfront-keyvaluestore.amazonaws.com",
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

  it("should describe the key-value store using SignatureV4a", async () => {
    const response = await kvsClient.send(new DescribeKeyValueStoreCommand({ KvsARN: keyValueStoreARN }));
    expect(response.KvsARN).toBe(keyValueStoreARN);
    expect(response.Status).toBe("Deployed");
  });
});
