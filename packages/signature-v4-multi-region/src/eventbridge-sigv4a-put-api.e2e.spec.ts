// eventbridge global endpoints: https://aws.amazon.com/blogs/compute/introducing-global-endpoints-for-amazon-eventbridge/
import "@smithy/signature-v4a";

import { Sha256 } from "@aws-crypto/sha256-js";
import {
  CreateEndpointCommand,
  CreateEventBusCommand,
  DeleteEndpointCommand,
  DeleteEventBusCommand,
  DescribeEndpointCommand,
  EndpointState,
  EventBridgeClient,
  PutEventsCommand,
  PutEventsCommandInput,
  PutEventsCommandOutput,
  ReplicationState,
} from "@aws-sdk/client-eventbridge";
import { CreateHealthCheckCommand, DeleteHealthCheckCommand, Route53Client } from "@aws-sdk/client-route-53";
import { GetCallerIdentityCommand, STSClient } from "@aws-sdk/client-sts";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { HttpRequest } from "@smithy/protocol-http";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

const LONG_TIMEOUT = 5 * 60 * 1000;
const POLLING_DELAY = 5000;
const MAX_POLLING_ATTEMPTS = 40;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getSubdomainFromUrl = (url: string | undefined): string | undefined => {
  if (!url) return undefined;
  try {
    const parsedUrl = new URL(url);
    // Hostname will be like abcde.xyz.endpoint.events.amazonaws.com
    const hostnameParts = parsedUrl.hostname.split(".");
    // We can expect at least 5 parts: subdomain[0].subdomain[1].endpoint.events.amazonaws.com
    // Check if the 3rd part from the end is 'events'
    if (hostnameParts.length >= 5 && hostnameParts[hostnameParts.length - 3] === "events") {
      return `${hostnameParts[0]}.${hostnameParts[1]}`;
    }
  } catch (e) {
    console.error(`Error parsing EndpointUrl: ${url}`, e);
  }
  return undefined;
};

describe("EventBridge Client with SignatureV4a", () => {
  let stsClient: STSClient;
  let primaryEbClient: EventBridgeClient;
  let secondaryEbClient: EventBridgeClient;
  let route53Client: Route53Client;
  let signer: SignatureV4MultiRegion;
  let globalEbClient: EventBridgeClient;

  let accountId: string;
  let timestamp: number;
  let primaryRegion: string;
  let secondaryRegion: string;
  let eventBusName: string;
  let primaryEventBusArn: string | undefined;
  let secondaryEventBusArn: string | undefined;
  let healthCheckId: string | undefined;
  let endpointName: string;
  let endpointArn: string | undefined;

  const cleanupResources = async () => {
    try {
      if (endpointArn) {
        const managementClient = new EventBridgeClient({ region: primaryRegion });
        await managementClient.send(new DeleteEndpointCommand({ Name: endpointName }));
        managementClient.destroy();
        endpointArn = undefined; // Mark as deleted
      }
    } catch (error) {
      console.error(`Error deleting endpoint ${endpointName}:`, error);
    }

    try {
      if (healthCheckId) {
        await route53Client.send(new DeleteHealthCheckCommand({ HealthCheckId: healthCheckId }));
        healthCheckId = undefined;
      }
    } catch (error) {
      console.error(`Error deleting health check ${healthCheckId}:`, error);
    }

    try {
      if (primaryEventBusArn) {
        await primaryEbClient.send(new DeleteEventBusCommand({ Name: eventBusName }));
        primaryEventBusArn = undefined;
      }
    } catch (error) {
      console.error(`Error deleting event bus ${eventBusName} from ${primaryRegion}:`, error);
    }

    try {
      if (secondaryEventBusArn) {
        await secondaryEbClient.send(new DeleteEventBusCommand({ Name: eventBusName }));
        secondaryEventBusArn = undefined;
      }
    } catch (error) {
      console.error(`Error deleting event bus ${eventBusName} from ${secondaryRegion}:`, error);
    }
  };

  beforeAll(async () => {
    vi.setConfig({ hookTimeout: LONG_TIMEOUT });

    primaryRegion = "us-west-2";
    secondaryRegion = "us-east-1";

    stsClient = new STSClient({ region: primaryRegion });
    primaryEbClient = new EventBridgeClient({ region: primaryRegion });
    secondaryEbClient = new EventBridgeClient({ region: secondaryRegion });
    route53Client = new Route53Client({ region: "us-west-2" });

    signer = new SignatureV4MultiRegion({
      service: "events",
      region: "*",
      sha256: Sha256,
      credentials: defaultProvider(),
    });

    globalEbClient = new EventBridgeClient({
      region: primaryRegion,
      signer,
    });

    // Account ID & Timestamp for Unique Names
    try {
      const identity = await stsClient.send(new GetCallerIdentityCommand({}));
      accountId = identity.Account!;
      timestamp = Date.now();

      eventBusName = `test-global-bus-${accountId}-${timestamp}`;
      endpointName = `test-global-endpoint-${accountId}-${timestamp}`;

      const primaryBus = await primaryEbClient.send(new CreateEventBusCommand({ Name: eventBusName }));
      primaryEventBusArn = primaryBus.EventBusArn;
      expect(primaryEventBusArn).toBeDefined();

      const secondaryBus = await secondaryEbClient.send(new CreateEventBusCommand({ Name: eventBusName }));
      secondaryEventBusArn = secondaryBus.EventBusArn;
      expect(secondaryEventBusArn).toBeDefined();

      // Create Route 53 Health Check: a basic one against a dummy target.
      const healthCheckCallerReference = `eb-putevents-test-${timestamp}`;
      const healthCheck = await route53Client.send(
        new CreateHealthCheckCommand({
          CallerReference: healthCheckCallerReference,
          HealthCheckConfig: {
            Type: "HTTP",
            FullyQualifiedDomainName: "example.com",
            Port: 80,
            ResourcePath: "/",
            RequestInterval: 30,
            FailureThreshold: 3,
          },
        })
      );
      healthCheckId = healthCheck.HealthCheck?.Id;
      expect(healthCheckId).toBeDefined();
      await wait(10000);

      let managementClient: EventBridgeClient | undefined;
      try {
        managementClient = new EventBridgeClient({ region: primaryRegion });
        const createInput = {
          Name: endpointName,
          RoutingConfig: {
            FailoverConfig: {
              Primary: { HealthCheck: `arn:aws:route53:::healthcheck/${healthCheckId}` },
              Secondary: { Route: secondaryRegion },
            },
          },
          ReplicationConfig: { State: ReplicationState.DISABLED },
          EventBuses: [{ EventBusArn: primaryEventBusArn }, { EventBusArn: secondaryEventBusArn }],
        };
        const createResponse = await managementClient.send(new CreateEndpointCommand(createInput));

        expect(createResponse.$metadata.httpStatusCode).toBe(200);
        expect(createResponse.Name).toBe(endpointName);
        expect(createResponse.Arn).toBeDefined();

        endpointArn = createResponse.Arn!;
      } catch (error) {
        console.error("Error during prerequisite resource creation:", error);
        await cleanupResources();
        throw error;
      } finally {
        managementClient?.destroy();
      }
    } catch (error) {
      console.error("Error during prerequisite resource creation:", error);
      await cleanupResources();
      throw error;
    }
  }, LONG_TIMEOUT);

  afterAll(async () => {
    vi.setConfig({ hookTimeout: LONG_TIMEOUT });
    await cleanupResources();
    // Clean up SDK clients
    stsClient?.destroy();
    primaryEbClient?.destroy();
    secondaryEbClient?.destroy();
    route53Client?.destroy();
    globalEbClient?.destroy();
  }, LONG_TIMEOUT);

  it("should add SigV4a headers when signing an EventBridge request (mocked)", async () => {
    expect(signer).toBeDefined();

    const mockRequest = new HttpRequest({
      method: "POST",
      protocol: "https:",
      hostname: "events.amazonaws.com",
      path: "/",
      headers: {
        host: "events.amazonaws.com",
      },
      body: JSON.stringify({ Entries: [] }),
    });

    const signSpy = vi.spyOn(signer, "sign");

    await signer.sign(mockRequest, { signingRegion: "*" });

    expect(signSpy).toHaveBeenCalled();
    const signArgs = signSpy.mock.calls[0];
    expect(signArgs[1]?.signingRegion).toBe("*");

    const signedRequest = await signSpy.mock.results[0].value;

    expect(signedRequest).toBeDefined();
    const authHeader = signedRequest?.headers["authorization"];
    const regionSetHeader = signedRequest?.headers["x-amz-region-set"];

    expect(authHeader).toBeDefined();
    expect(authHeader).toContain("AWS4-ECDSA-P256-SHA256");
    expect(authHeader).toContain("SignedHeaders=");
    expect(authHeader).toContain("Signature=");

    expect(regionSetHeader).toBeDefined();
    expect(regionSetHeader).toBe("*");

    signSpy.mockRestore();
  });

  it(
    "should send an event to an EventBridge Global Endpoint using SignatureV4a",
    async () => {
      expect(endpointArn).toBeDefined();

      let attempts = 0;
      let currentState: EndpointState | string | undefined;
      let endpointUrl: string | undefined;
      const managementClient = new EventBridgeClient({ region: primaryRegion });

      while (attempts < MAX_POLLING_ATTEMPTS) {
        attempts++;
        try {
          const describeResponse = await managementClient.send(new DescribeEndpointCommand({ Name: endpointName }));
          currentState = describeResponse.State;
          if (currentState === EndpointState.ACTIVE) {
            endpointUrl = describeResponse.EndpointUrl;
            break;
          }
          if (currentState === EndpointState.CREATE_FAILED || currentState === EndpointState.UPDATE_FAILED) {
            throw new Error(`Endpoint entered failed state: ${currentState}`);
          }
        } catch (error) {
          console.warn(`DescribeEndpoint failed (attempt ${attempts}):`, error);
          // Continue polling unless it's a definitive failure state
        }
        await wait(POLLING_DELAY);
      }
      managementClient.destroy();

      if (currentState !== EndpointState.ACTIVE) {
        throw new Error(`Endpoint ${endpointName} did not become ACTIVE after ${attempts} attempts.`);
      }
      expect(endpointUrl).toBeDefined();

      const endpointSubdomain = getSubdomainFromUrl(endpointUrl);
      if (!endpointSubdomain) {
        throw new Error(`Failed to extract subdomain from Endpoint URL: ${endpointUrl}`);
      }

      const putEventsInput: PutEventsCommandInput = {
        Entries: [
          {
            Source: "com.hello.myapp.sigv4a-e2e",
            DetailType: "GlobalEndpointTest",
            Detail: JSON.stringify({ message: "Hello from JSv3 SigV4a E2E test!", timestamp: Date.now() }),
            EventBusName: eventBusName,
          },
        ],
        EndpointId: endpointSubdomain,
      };

      const putEventsResponse: PutEventsCommandOutput = await globalEbClient.send(new PutEventsCommand(putEventsInput));

      expect(putEventsResponse.$metadata.httpStatusCode).toBe(200);
      expect(putEventsResponse.FailedEntryCount).toBe(0);
      expect(putEventsResponse.Entries).toHaveLength(1);
      expect(putEventsResponse.Entries?.[0]?.EventId).toBeDefined();

      // Note: Verifying the event *arrived* in the target bus (primary or secondary)
      // would require additional setup and is omitted
      // here to focus on the PutEvents call itself succeeding with SigV4a.
    },
    LONG_TIMEOUT
  );
});
