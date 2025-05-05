import "@aws-sdk/signature-v4a";

import { Sha256 } from "@aws-crypto/sha256-js";
import { CloudFrontClient, CreateKeyValueStoreCommand, DescribeKeyValueStoreCommand } from "@aws-sdk/client-cloudfront";
import {
  CloudFrontKeyValueStoreClient,
  DescribeKeyValueStoreCommand as KVSDescribeCommand,
} from "@aws-sdk/client-cloudfront-keyvaluestore";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { HttpRequest } from "@smithy/protocol-http";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

const LONG_TIMEOUT = 300000;

// Long-lived resource name
const KEY_VALUE_STORE_NAME = "jsv3-e2e-cfkvs-sigv4a";

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
      const response = await client.send(new KVSDescribeCommand({ KvsARN: arn }));
      // if describe doesn't throw ResourceNotFound, it's ready enough for the test
      if (response.KvsARN === arn) {
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
  let keyValueStoreARN: string;
  let signer: SignatureV4MultiRegion;
  let keyValueStoreETag: string;

  beforeAll(async () => {
    vi.setConfig({ testTimeout: LONG_TIMEOUT, hookTimeout: LONG_TIMEOUT });

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

    // Try to get the existing key value store
    try {
      const describeResponse = await cfClient.send(
        new DescribeKeyValueStoreCommand({
          Name: KEY_VALUE_STORE_NAME,
        })
      );
      keyValueStoreARN = describeResponse.KeyValueStore!.ARN!;
      keyValueStoreETag = describeResponse.ETag!;
      console.log(`Using existing KeyValueStore: ${keyValueStoreARN}`);
    } catch (error: any) {
      if (error.name === "EntityNotFound") {
        console.log(`KeyValueStore ${KEY_VALUE_STORE_NAME} does not exist. Creating it now...`);
        // Create the key value store if it doesn't exist
        const createResponse = await cfClient.send(
          new CreateKeyValueStoreCommand({
            Name: KEY_VALUE_STORE_NAME,
          })
        );
        keyValueStoreARN = createResponse.KeyValueStore!.ARN!;
        keyValueStoreETag = createResponse.ETag!;
        console.log(`Created new KeyValueStore: ${keyValueStoreARN}`);
      } else {
        throw error;
      }
    }

    // Make sure the key-value store is ready
    await waitForKeyValueStoreReady(kvsClient, keyValueStoreARN);
  }, LONG_TIMEOUT);

  afterAll(async () => {
    vi.setConfig({ testTimeout: LONG_TIMEOUT });

    // key-value store is a long-lived resource, so we don't delete it
    cfClient?.destroy?.();
    kvsClient?.destroy?.();
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
    const response = await kvsClient.send(new KVSDescribeCommand({ KvsARN: keyValueStoreARN }));
    expect(response.KvsARN).toBe(keyValueStoreARN);
    expect(["READY", "Deployed"]).toContain(response.Status);
  });
});
