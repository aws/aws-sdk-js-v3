import { HeadObjectCommand, S3Client, S3ServiceException } from "@aws-sdk/client-s3";
import { HttpResponse } from "@aws-sdk/protocol-http";
import { RequestHandlerOutput } from "@aws-sdk/types";
import { StandardRetryStrategy } from "@aws-sdk/util-retry";
import { Readable } from "stream";

describe("Middleware-retry integration tests", () => {
  const mockThrottled: RequestHandlerOutput<HttpResponse> = {
    response: new HttpResponse({
      statusCode: 429,
      headers: { "x-amzn-errortype": "ThrottledException" },
      body: Readable.from([""]),
    }),
  };
  const mockSuccess: RequestHandlerOutput<HttpResponse> = {
    response: new HttpResponse({
      statusCode: 200,
      body: Readable.from(""),
    }),
  };
  const headObjectCommand = new HeadObjectCommand({
    Bucket: "TEST_BUCKET",
    Key: "TEST_KEY",
  });
  it("should not retry on 200", async () => {
    const client = new S3Client({
      requestHandler: {
        handle: () => Promise.resolve(mockSuccess),
      },
    });
    expect(await client.config.retryStrategy()).toBeInstanceOf(StandardRetryStrategy);
    const response = await client.send(headObjectCommand);
    expect(response.$metadata.httpStatusCode).toBe(200);
    expect(response.$metadata.attempts).toBe(1);
    expect(response.$metadata.totalRetryDelay).toBe(0);
  });
  it("should retry until success", async () => {
    const mockHandle = jest
      .fn()
      .mockResolvedValueOnce(mockThrottled)
      .mockResolvedValueOnce(mockThrottled)
      .mockResolvedValueOnce(mockSuccess);
    const client = new S3Client({
      requestHandler: {
        handle: mockHandle,
      },
    });
    expect(await client.config.retryStrategy()).toBeInstanceOf(StandardRetryStrategy);
    const response = await client.send(headObjectCommand);
    expect(response.$metadata.httpStatusCode).toBe(200);
    expect(mockHandle).toBeCalledTimes(3);
    expect(response.$metadata.attempts).toBe(3);
    expect(response.$metadata.totalRetryDelay).toBeGreaterThan(0);
  });
  it("should retry until attemps are exhausted", async () => {
    const expectedException = new S3ServiceException({
      $metadata: {
        httpStatusCode: 429,
      },
      $fault: "client",
      $retryable: {
        throttling: true,
      },
      message: "UnknownError",
      name: "ThrottlingException",
    });
    const client = new S3Client({
      requestHandler: {
        handle: () => Promise.resolve(mockThrottled),
      },
    });
    expect(await client.config.retryStrategy()).toBeInstanceOf(StandardRetryStrategy);
    try {
      await client.send(headObjectCommand);
    } catch (error) {
      expect(error).toStrictEqual(expectedException);
      expect(error.$metadata.httpStatusCode).toBe(429);
      expect(error.$metadata.attempts).toBe(4);
      expect(error.$metadata.totalRetryDelay).toBeGreaterThan(0);
    }
  });
});
