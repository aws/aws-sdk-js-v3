import "@smithy/signature-v4a";

import { Sha256 } from "@aws-crypto/sha256-js";
import { DeleteRuleCommand, DescribeRuleCommand, EventBridgeClient, PutRuleCommand } from "@aws-sdk/client-eventbridge";
import { GetCallerIdentityCommand, STSClient } from "@aws-sdk/client-sts";
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { HttpRequest } from "@smithy/protocol-http";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

// Setting timeout for tests
const TEST_TIMEOUT = 300000;

describe("EventBridge with SignatureV4a (JS Implementation)", () => {
  let ebClient: EventBridgeClient;
  let ruleName: string;
  let signer: SignatureV4MultiRegion;

  beforeAll(async () => {
    // Set timeout for setup
    vi.setConfig({ testTimeout: TEST_TIMEOUT });

    const stsClient = new STSClient({});
    const { Account } = await stsClient.send(new GetCallerIdentityCommand({}));
    const timestamp = Date.now();
    ruleName = `test-rule-${Account}-${timestamp}`;

    signer = new SignatureV4MultiRegion({
      service: "events",
      region: "*",
      sha256: Sha256,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
        sessionToken: process.env.AWS_SESSION_TOKEN,
      },
    });

    ebClient = new EventBridgeClient({
      region: "*",
      signer,
    });
  });

  afterAll(async () => {
    // Set timeout for teardown
    vi.setConfig({ testTimeout: TEST_TIMEOUT });

    try {
      await ebClient.send(
        new DeleteRuleCommand({
          Name: ruleName,
        })
      );
    } catch (error) {
      console.error("Failed to delete EventBridge rule:", error);
    }
  });

  it("should use SignatureV4a JS implementation", async () => {
    const mockRequest = new HttpRequest({
      method: "POST",
      protocol: "https:",
      hostname: "events.amazonaws.com",
      headers: {
        host: "events.amazonaws.com",
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

  it("should create, describe, and delete an EventBridge rule using SignatureV4a", async () => {
    const createResponse = await ebClient.send(
      new PutRuleCommand({
        Name: ruleName,
        ScheduleExpression: "rate(5 minutes)",
        State: "DISABLED",
      })
    );
    expect(createResponse.RuleArn).toBeDefined();

    const describeResponse = await ebClient.send(
      new DescribeRuleCommand({
        Name: ruleName,
      })
    );
    expect(describeResponse.Name).toBe(ruleName);
    expect(describeResponse.ScheduleExpression).toBe("rate(5 minutes)");
    expect(describeResponse.State).toBe("DISABLED");

    // delete is handled in afterAll
  });
});
