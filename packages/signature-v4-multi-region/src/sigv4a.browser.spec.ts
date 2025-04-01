import { Sha256 } from "@aws-crypto/sha256-js";
import { CloudFrontKeyValueStoreClient, DescribeKeyValueStoreCommand } from "@aws-sdk/client-cloudfront-keyvaluestore";
import { EventBridgeClient, ListRulesCommand } from "@aws-sdk/client-eventbridge";
import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { HttpRequest } from "@smithy/protocol-http";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { describe, expect, it } from "vitest";

chai.use(chaiAsPromised);
const { expect: chaiExpect } = chai;

const region = "*";
const credentials = {
  accessKeyId: (window as any).__env__.AWS_ACCESS_KEY_ID,
  secretAccessKey: (window as any).__env__.AWS_SECRET_ACCESS_KEY,
  sessionToken: (window as any).__env__.AWS_SESSION_TOKEN,
};

const s3MrapArn = (window as any).__env__.AWS_SMOKE_TEST_MRAP_ARN;
const cfKvsArn = (window as any).__env__.AWS_SMOKE_TEST_CF_KVS_ARN;

describe("SignatureV4a Browser Tests", () => {
  // Set timeout to 30 seconds
  const TIMEOUT = 30000;

  const signer = new SignatureV4MultiRegion({
    credentials,
    sha256: Sha256,
    region: region,
    service: "s3",
  });

  describe("S3 Multi-Region Access Point", () => {
    const s3Client = new S3Client({
      region: region,
      credentials,
      signer,
    });

    it("should successfully list objects using MRAP", async () => {
      // Using longer timeout for this test
      vi.setConfig({ testTimeout: TIMEOUT });

      const command = new ListObjectsV2Command({
        Bucket: s3MrapArn,
      });

      const response = await s3Client.send(command);
      chaiExpect(response.$metadata.httpStatusCode).to.equal(200);
      chaiExpect(response.Contents).to.be.an("array");
    });
  });

  describe("EventBridge Global Endpoint", () => {
    const ebClient = new EventBridgeClient({
      region: region,
      credentials,
      signer,
    });

    it("should successfully list rules using global endpoint", async () => {
      // Using longer timeout for this test
      vi.setConfig({ testTimeout: TIMEOUT });

      const command = new ListRulesCommand({});

      const response = await ebClient.send(command);
      chaiExpect(response.$metadata.httpStatusCode).to.equal(200);
      chaiExpect(response.Rules).to.be.an("array");
    });
  });

  describe("CloudFront Key-Value Store", () => {
    const cfKvsClient = new CloudFrontKeyValueStoreClient({
      region: region,
      credentials,
      signer,
    });

    it("should successfully describe a key-value store", async () => {
      // Using longer timeout for this test
      vi.setConfig({ testTimeout: TIMEOUT });

      const command = new DescribeKeyValueStoreCommand({
        KvsARN: cfKvsArn,
      });

      const response = await cfKvsClient.send(command);
      chaiExpect(response.$metadata.httpStatusCode).to.equal(200);
      chaiExpect(response.KvsARN).to.equal(cfKvsArn);
    });
  });

  describe("SignatureV4MultiRegion", () => {
    it("should use SignatureV4a for '*' region", async () => {
      // Using longer timeout for this test
      vi.setConfig({ testTimeout: TIMEOUT });

      const mockRequest = new HttpRequest({
        method: "GET",
        protocol: "https:",
        hostname: "s3-global.amazonaws.com",
        headers: {
          host: "s3-global.amazonaws.com",
        },
        path: "/",
      });

      const signedRequest = await signer.sign(mockRequest, { signingRegion: "*" });
      chaiExpect(signedRequest.headers["x-amz-region-set"]).to.equal("*");
      chaiExpect(signedRequest.headers["authorization"]).to.include("AWS4-ECDSA-P256-SHA256");
    });
  });
});
