import { ListFunctionsCommand, Lambda, LambdaClient, LambdaServiceException } from "@aws-sdk/client-lambda";
import { HttpHandler, HttpResponse } from "@smithy/protocol-http";
import { AwsCredentialIdentity, RequestHandlerOutput } from "@smithy/types";
import { ConfiguredRetryStrategy, StandardRetryStrategy } from "@smithy/util-retry";
import { Readable } from "stream";
import { describe, expect, test as it, vi } from "vitest";

const MOCK_REGION = "us-west-2";

class MockRequestHandler implements HttpHandler {
  async handle() {
    return {
      response: new HttpResponse({
        statusCode: 429,
        body: Buffer.from(""),
      }),
    };
  }
  updateHttpClientConfig(key: never, value: never): void {}
  httpHandlerConfigs() {
    return {};
  }
}

describe("util-retry integration tests", () => {
  const credentials: AwsCredentialIdentity = {
    accessKeyId: "test",
    secretAccessKey: "test",
    sessionToken: "test",
  };

  const mockThrottled: RequestHandlerOutput<HttpResponse> = {
    response: new HttpResponse({
      statusCode: 429,
      headers: { "x-amzn-errortype": "ThrottlingException" },
      body: Readable.from([""]),
    }),
  };
  const mockSuccess: RequestHandlerOutput<HttpResponse> = {
    response: new HttpResponse({
      statusCode: 200,
      body: Readable.from(""),
    }),
  };
  const command = new ListFunctionsCommand();

  it("should not retry on 200", async () => {
    const client = new LambdaClient({
      requestHandler: {
        handle: () => Promise.resolve(mockSuccess),
        updateHttpClientConfig: () => {},
        httpHandlerConfigs: () => ({}),
      },
      region: MOCK_REGION,
      credentials,
    });
    expect(await client.config.retryStrategy()).toBeInstanceOf(StandardRetryStrategy);
    const response = await client.send(command);
    expect(response.$metadata.httpStatusCode).toBe(200);
    expect(response.$metadata.attempts).toBe(1);
    expect(response.$metadata.totalRetryDelay).toBe(0);
  });

  it("should retry until success", async () => {
    const mockHandle = vi
      .fn()
      .mockResolvedValueOnce(mockThrottled)
      .mockResolvedValueOnce(mockThrottled)
      .mockResolvedValueOnce(mockSuccess);
    const client = new LambdaClient({
      requestHandler: {
        handle: mockHandle,
        httpHandlerConfigs: () => ({}),
        updateHttpClientConfig: () => {},
      },
      region: MOCK_REGION,
      credentials,
    });
    expect(await client.config.retryStrategy()).toBeInstanceOf(StandardRetryStrategy);
    const response = await client.send(command);
    expect(response.$metadata.httpStatusCode).toBe(200);
    expect(mockHandle).toBeCalledTimes(3);
    expect(response.$metadata.attempts).toBe(3);
    expect(response.$metadata.totalRetryDelay).toBeGreaterThan(0);
  });

  it("should retry until attempts are exhausted", async () => {
    const expectedException = new LambdaServiceException({
      $metadata: {
        httpStatusCode: 429,
        attempts: 3,
      },
      $fault: "client",
      $retryable: {
        throttling: true,
      },
      message: "UnknownError",
      name: "ThrottlingException",
    });
    const client = new LambdaClient({
      requestHandler: {
        handle: () => Promise.resolve(mockThrottled),
        httpHandlerConfigs: () => ({}),
        updateHttpClientConfig: () => {},
      },
      region: MOCK_REGION,
      credentials,
    });
    expect(await client.config.retryStrategy()).toBeInstanceOf(StandardRetryStrategy);
    try {
      await client.send(command);
    } catch (error) {
      expect(error.name).toBe(expectedException.name);
      expect(error.message).toBe(expectedException.message);
      expect(error.$fault).toBe(expectedException.$fault);
      expect(error.$metadata.httpStatusCode).toBe(expectedException.$metadata.httpStatusCode);
      expect(error.$metadata.attempts).toBe(expectedException.$metadata.attempts);
      expect(error.$metadata.totalRetryDelay).toBeGreaterThan(0);
      expect(error).toMatchObject({
        $metadata: {
          httpStatusCode: 429,
        },
        $fault: "client",
      });
    }
  });

  it("should use a shared capacity for retries", async () => {
    const expectedInitialCapacity = 500;
    const expectedDrainPerAttempt = 5;
    const expectedRetryAttemptsPerRequest = 6;
    // Set maxAttempts to one more than the number of retries (initial request + retries)
    const maxAttempts = 7;
    const delayPerRetry = 1;
    const expectedRequests = 4;
    const expectedRemainingCapacity =
      expectedInitialCapacity - expectedDrainPerAttempt * expectedRetryAttemptsPerRequest * expectedRequests;

    const retryStrategy = new ConfiguredRetryStrategy(maxAttempts, delayPerRetry);
    const client = new Lambda({
      requestHandler: new MockRequestHandler(),
      retryStrategy,
      region: MOCK_REGION,
      credentials,
    });

    expect(retryStrategy.getCapacity()).toEqual(expectedInitialCapacity);

    await Promise.all([
      client.listFunctions(),
      client.listFunctions(),
      client.listFunctions(),
      client.listFunctions(),
    ]).catch((e) => {
      expect(e.$metadata.attempts).toBe(1 + expectedRetryAttemptsPerRequest);
      expect(e.$metadata.totalRetryDelay).toBe(expectedRetryAttemptsPerRequest * delayPerRetry);
    });

    expect(retryStrategy.getCapacity()).toEqual(expectedRemainingCapacity);
  });
});
