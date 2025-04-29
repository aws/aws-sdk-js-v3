// eventbridge global endpoints: https://aws.amazon.com/blogs/compute/introducing-global-endpoints-for-amazon-eventbridge/
import "@aws-sdk/signature-v4a";

import { Sha256 } from "@aws-crypto/sha256-js";
import {
  CreateEndpointCommand,
  CreateEventBusCommand,
  DescribeEndpointCommand,
  EndpointState,
  EventBridgeClient,
  PutEventsCommand,
  PutEventsCommandInput,
  PutEventsCommandOutput,
  ReplicationState,
} from "@aws-sdk/client-eventbridge";
import { CreateHealthCheckCommand, Route53Client } from "@aws-sdk/client-route-53";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { HttpRequest } from "@smithy/protocol-http";
import { beforeAll, describe, expect, it, vi } from "vitest";

const LONG_TIMEOUT = 5 * 60 * 1000;
const POLLING_DELAY = 5000;
const MAX_POLLING_ATTEMPTS = 40;

// long-lived resources
const RESOURCE_PREFIX = "jsv3-e2e-global";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getSubdomainFromUrl = (url: string | undefined): string | undefined => {
  if (!url) return undefined;
  try {
    const parsedUrl = new URL(url);
    const hostnameParts = parsedUrl.hostname.split(".");
    if (hostnameParts.length >= 5 && hostnameParts[hostnameParts.length - 3] === "events") {
      return `${hostnameParts[0]}.${hostnameParts[1]}`;
    }
  } catch (e) {
    console.error(`Error parsing EndpointUrl: ${url}`, e);
  }
  return undefined;
};

describe("EventBridge Client with SignatureV4a", () => {
  let primaryEbClient: EventBridgeClient;
  let secondaryEbClient: EventBridgeClient;
  let route53Client: Route53Client;
  let signer: SignatureV4MultiRegion;
  let globalEbClient: EventBridgeClient;
  let primaryRegion: string;
  let secondaryRegion: string;
  let eventBusName: string;
  let endpointName: string;
  let primaryEventBusArn: string | undefined;
  let secondaryEventBusArn: string | undefined;
  let healthCheckId: string | undefined;

  beforeAll(async () => {
    vi.setConfig({ hookTimeout: LONG_TIMEOUT });

    primaryRegion = "us-west-2";
    secondaryRegion = "us-east-1";

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

    try {
      eventBusName = `${RESOURCE_PREFIX}-bus`;
      endpointName = `${RESOURCE_PREFIX}-endpoint`;

      const managementClient = new EventBridgeClient({ region: primaryRegion });
      try {
        await managementClient.send(new DescribeEndpointCommand({ Name: endpointName }));
      } catch (error: any) {
        if (error.name === "ResourceNotFoundException") {
          // Create resources if they don't exist
          const primaryBus = await primaryEbClient.send(new CreateEventBusCommand({ Name: eventBusName }));
          primaryEventBusArn = primaryBus.EventBusArn;

          const secondaryBus = await secondaryEbClient.send(new CreateEventBusCommand({ Name: eventBusName }));
          secondaryEventBusArn = secondaryBus.EventBusArn;

          const healthCheck = await route53Client.send(
            new CreateHealthCheckCommand({
              CallerReference: `${RESOURCE_PREFIX}-${Date.now()}`,
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
          await wait(10000);

          const createEndpointResponse = await managementClient.send(
            new CreateEndpointCommand({
              Name: endpointName,
              RoutingConfig: {
                FailoverConfig: {
                  Primary: { HealthCheck: `arn:aws:route53:::healthcheck/${healthCheckId}` },
                  Secondary: { Route: secondaryRegion },
                },
              },
              ReplicationConfig: { State: ReplicationState.DISABLED },
              EventBuses: [{ EventBusArn: primaryEventBusArn }, { EventBusArn: secondaryEventBusArn }],
            })
          );
        } else {
          throw error;
        }
      } finally {
        managementClient.destroy();
      }
    } catch (error) {
      console.error("Error during setup:", error);
      throw error;
    }
  }, LONG_TIMEOUT);

  beforeAll(async () => {
    primaryEbClient?.destroy();
    secondaryEbClient?.destroy();
    route53Client?.destroy();
    globalEbClient?.destroy();
  });

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
    },
    LONG_TIMEOUT
  );
});
