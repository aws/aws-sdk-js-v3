import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { Bedrock } from "@aws-sdk/client-bedrock";
import { BedrockRuntime } from "@aws-sdk/client-bedrock-runtime";
import { afterEach, beforeEach, describe, it } from "vitest";

describe("from env signing name integration", () => {
  const mockBearerToken = "mock-bearer-token";
  const credentials = {
    accessKeyId: "INTEG",
    secretAccessKey: "INTEG",
  };
  const region = "us-west-2";

  beforeEach(() => {
    delete process.env.AWS_BEARER_TOKEN_BEDROCK;
  });

  afterEach(() => {
    delete process.env.AWS_BEARER_TOKEN_BEDROCK;
  });

  function expectBearerToken(client: Bedrock | BedrockRuntime) {
    requireRequestsFrom(client).toMatch({
      headers: {
        authorization: `Bearer ${mockBearerToken}`,
      },
    });
  }

  function expectSigV4(client: Bedrock | BedrockRuntime) {
    requireRequestsFrom(client).toMatch({
      hostname: /bedrock/,
      headers: {
        authorization: /AWS4-HMAC-SHA256 Credential/,
      },
    });
  }

  describe("when environment bearer token is set", () => {
    it("bedrock", async () => {
      process.env.AWS_BEARER_TOKEN_BEDROCK = mockBearerToken;
      const client = new Bedrock({ region, credentials });
      expectBearerToken(client);
      await client.listCustomModels();
    });

    it("bedrock runtime", async () => {
      process.env.AWS_BEARER_TOKEN_BEDROCK = mockBearerToken;
      const client = new BedrockRuntime({
        region,
        credentials,
      });
      expectBearerToken(client);
      await client.listAsyncInvokes();
    });
  });

  describe("when environment bearer token is not set", () => {
    it("bedrock", async () => {
      const client = new Bedrock({ region, credentials });
      expectSigV4(client);
      await client.listCustomModels();
    });

    it("bedrock runtime", async () => {
      const client = new BedrockRuntime({
        region,
        credentials,
      });
      expectSigV4(client);
      await client.listAsyncInvokes();
    });
  });
});
