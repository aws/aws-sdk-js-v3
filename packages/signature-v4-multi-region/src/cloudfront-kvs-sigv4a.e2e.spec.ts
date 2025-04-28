import "@aws-sdk/signature-v4a";

import { Sha256 } from "@aws-crypto/sha256-js";
import { CloudFrontClient, CreateKeyValueStoreCommand, DeleteKeyValueStoreCommand } from "@aws-sdk/client-cloudfront";
import { CloudFrontKeyValueStoreClient, DescribeKeyValueStoreCommand } from "@aws-sdk/client-cloudfront-keyvaluestore";
import { GetCallerIdentityCommand, STSClient } from "@aws-sdk/client-sts";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { HttpRequest } from "@smithy/protocol-http";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

const LONG_TIMEOUT = 300000;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper util to poll until KVS is ready
async function waitForKeyValueStoreReady(
  client: CloudFrontKeyValueStoreClient,
  arn: string,
  timeoutMs = 180000,
  intervalMs = 5000
) {
  const startTime = Date.now();
  while (Date.now() - startTime < timeoutMs) {
    try {
      const response = await client.send(new DescribeKeyValueStoreCommand({ KvsARN: arn }));
      // if describe doesn't throw ResourceNotFound, it's ready enough for the test
      if (response.KvsARN === arn) {
        // Optionally wait for 'Deployed' status if needed, but findable is often enough
        // if (response.Status === "Deployed") {
        //   return;
        // }
        return;
      }
    } catch (error: any) {
      // Continue polling if the store is not found or if it's in a conflicting state (e.g., still creating)
      if (error.name === "ResourceNotFoundException" || error.name === "ConflictException") {
        process.stdout.write("."); // Indicate polling progress
      } else {
        console.error(`\nError describing KeyValueStore ${arn}:`, error);
        throw error;
      }
    }
    await wait(intervalMs);
  }
  throw new Error(`\nKeyValueStore ${arn} did not become ready within ${timeoutMs / 1000} seconds.`);
}

describe("CloudFront KeyValue Store with SignatureV4a (JS Implementation)", () => {
  let cfClient: CloudFrontClient;
  let kvsClient: CloudFrontKeyValueStoreClient;
  let keyValueStoreName: string;
  let keyValueStoreARN: string;
  let keyValueStoreETag: string;
  let signer: SignatureV4MultiRegion;

  beforeAll(async () => {
    vi.setConfig({ testTimeout: LONG_TIMEOUT, hookTimeout: LONG_TIMEOUT });

    const stsClient = new STSClient({ region: "us-west-2" });
    const { Account } = await stsClient.send(new GetCallerIdentityCommand({}));
    const timestamp = Date.now();
    keyValueStoreName = `test-store-${Account}-${timestamp}`;

    signer = new SignatureV4MultiRegion({
      service: "cloudfront-keyvaluestore",
      region: "*",
      sha256: Sha256,
      credentials: defaultProvider(),
    });

    cfClient = new CloudFrontClient({
      region: "us-west-2",
      disableHostPrefix: true,
    });

    kvsClient = new CloudFrontKeyValueStoreClient({
      region: "us-west-2",
      signer,
      disableHostPrefix: true,
    });

    const createResponse = await cfClient.send(
      new CreateKeyValueStoreCommand({
        Name: keyValueStoreName,
      })
    );
    keyValueStoreARN = createResponse.KeyValueStore!.ARN!;
    keyValueStoreETag = createResponse.ETag!;

    await waitForKeyValueStoreReady(kvsClient, keyValueStoreARN);
  }, LONG_TIMEOUT);

  afterAll(async () => {
    vi.setConfig({ testTimeout: LONG_TIMEOUT });

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

  it("should use SignatureV4a JS implementation for CFKVS (mocked)", async () => {
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
    const signedRequest = await signSpy.mock.results[0].value;
    expect(signedRequest.headers["x-amz-region-set"]).toBe("*");
    expect(signedRequest.headers["authorization"]).toContain("AWS4-ECDSA-P256-SHA256");

    signSpy.mockRestore();
  });

  it("should describe the key-value store using SignatureV4a", async () => {
    const response = await kvsClient.send(new DescribeKeyValueStoreCommand({ KvsARN: keyValueStoreARN }));
    expect(response.KvsARN).toBe(keyValueStoreARN);
    expect(["READY", "Deployed"]).toContain(response.Status);
  });
});
