// smithy-typescript generated code
import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { buildQueryString } from "@smithy/querystring-builder";
import { Endpoint, HeaderBag, HttpHandlerOptions } from "@smithy/types";
import { Readable } from "stream";
import { expect, test as it } from "vitest";

import { DeleteObjectTaggingCommand } from "../../src/commands/DeleteObjectTaggingCommand";
import { GetBucketLocationCommand } from "../../src/commands/GetBucketLocationCommand";
import { GetObjectCommand } from "../../src/commands/GetObjectCommand";
import { ListObjectsV2Command } from "../../src/commands/ListObjectsV2Command";
import { S3Client } from "../../src/S3Client";

/**
 * Throws an expected exception that contains the serialized request.
 */
class EXPECTED_REQUEST_SERIALIZATION_ERROR extends Error {
  constructor(readonly request: HttpRequest) {
    super();
  }
}

/**
 * Throws an EXPECTED_REQUEST_SERIALIZATION_ERROR error before sending a
 * request. The thrown exception contains the serialized request.
 */
class RequestSerializationTestHandler implements HttpHandler {
  handle(request: HttpRequest, options?: HttpHandlerOptions): Promise<{ response: HttpResponse }> {
    return Promise.reject(new EXPECTED_REQUEST_SERIALIZATION_ERROR(request));
  }
  updateHttpClientConfig(key: never, value: never): void {}
  httpHandlerConfigs() {
    return {};
  }
}

/**
 * Returns a resolved Promise of the specified response contents.
 */
class ResponseDeserializationTestHandler implements HttpHandler {
  isSuccess: boolean;
  code: number;
  headers: HeaderBag;
  body: string | Uint8Array;
  isBase64Body: boolean;

  constructor(isSuccess: boolean, code: number, headers?: HeaderBag, body?: string) {
    this.isSuccess = isSuccess;
    this.code = code;
    if (headers === undefined) {
      this.headers = {};
    } else {
      this.headers = headers;
    }
    if (body === undefined) {
      body = "";
    }
    this.body = body;
    this.isBase64Body = String(body).length > 0 && Buffer.from(String(body), "base64").toString("base64") === body;
  }

  handle(request: HttpRequest, options?: HttpHandlerOptions): Promise<{ response: HttpResponse }> {
    return Promise.resolve({
      response: new HttpResponse({
        statusCode: this.code,
        headers: this.headers,
        body: this.isBase64Body ? toBytes(this.body as string) : Readable.from([this.body]),
      }),
    });
  }

  updateHttpClientConfig(key: never, value: never): void {}

  httpHandlerConfigs() {
    return {};
  }
}

interface comparableParts {
  [key: string]: string;
}

/**
 * Generates a standard map of un-equal values given input parts.
 */
const compareParts = (expectedParts: comparableParts, generatedParts: comparableParts) => {
  const unequalParts: any = {};
  Object.keys(expectedParts).forEach((key) => {
    if (generatedParts[key] === undefined) {
      unequalParts[key] = { exp: expectedParts[key], gen: undefined };
    } else if (!equivalentContents(expectedParts[key], generatedParts[key])) {
      unequalParts[key] = { exp: expectedParts[key], gen: generatedParts[key] };
    }
  });

  Object.keys(generatedParts).forEach((key) => {
    if (expectedParts[key] === undefined) {
      unequalParts[key] = { exp: undefined, gen: generatedParts[key] };
    }
  });

  if (Object.keys(unequalParts).length !== 0) {
    return unequalParts;
  }
  return undefined;
};

/**
 * Compares all types for equivalent contents, doing nested
 * equality checks based on non-`$metadata`
 * properties that have defined values.
 */
const equivalentContents = (expected: any, generated: any): boolean => {
  if (typeof (global as any).expect === "function") {
    expect(normalizeByteArrayType(generated)).toEqual(normalizeByteArrayType(expected));
    return true;
  }

  const localExpected = expected;

  // Short circuit on equality.
  if (localExpected == generated) {
    return true;
  }

  if (typeof expected !== "object") {
    return expected === generated;
  }

  // If a test fails with an issue in the below 6 lines, it's likely
  // due to an issue in the nestedness or existence of the property
  // being compared.
  delete localExpected["$metadata"];
  delete generated["$metadata"];
  Object.keys(localExpected).forEach((key) => localExpected[key] === undefined && delete localExpected[key]);
  Object.keys(generated).forEach((key) => generated[key] === undefined && delete generated[key]);

  const expectedProperties = Object.getOwnPropertyNames(localExpected);
  const generatedProperties = Object.getOwnPropertyNames(generated);

  // Short circuit on different property counts.
  if (expectedProperties.length != generatedProperties.length) {
    return false;
  }

  // Compare properties directly.
  for (let index = 0; index < expectedProperties.length; index++) {
    const propertyName = expectedProperties[index];
    if (!equivalentContents(localExpected[propertyName], generated[propertyName])) {
      return false;
    }
  }

  return true;
};

const clientParams = {
  region: "us-west-2",
  credentials: { accessKeyId: "key", secretAccessKey: "secret" },
  endpoint: () => {
    const url = new URL("https://localhost/");
    return Promise.resolve({
      hostname: url.hostname,
      protocol: url.protocol,
      path: url.pathname,
    }) as Promise<Endpoint>;
  },
};

/**
 * A wrapper function that shadows `fail` from jest-jasmine2
 * (jasmine2 was replaced with circus in > v27 as the default test runner)
 */
const fail = (error?: any): never => {
  throw new Error(error);
};

/**
 * Hexadecimal to byteArray.
 */
const toBytes = (hex: string) => {
  return Buffer.from(hex, "base64");
};

function normalizeByteArrayType(data: any) {
  // normalize float32 errors
  if (typeof data === "number") {
    const u = new Uint8Array(4);
    const dv = new DataView(u.buffer, u.byteOffset, u.byteLength);
    dv.setFloat32(0, data);
    return dv.getFloat32(0);
  }
  if (!data || typeof data !== "object") {
    return data;
  }
  if (data instanceof Uint8Array) {
    return Uint8Array.from(data);
  }
  if (data instanceof String || data instanceof Boolean || data instanceof Number) {
    return data.valueOf();
  }
  const output = {} as any;
  for (const key of Object.getOwnPropertyNames(data)) {
    output[key] = normalizeByteArrayType(data[key]);
  }
  return output;
}

/**
 *     S3 clients should escape special characters in Object Keys
 *     when the Object Key is used as a URI label binding.
 *
 */
it("S3EscapeObjectKeyInUriLabel:Request", async () => {
  const client = new S3Client({
    ...clientParams,
    endpoint: "https://s3.us-west-2.amazonaws.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new DeleteObjectTaggingCommand({
    Bucket: "mybucket",
    Key: "my key.txt",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("DELETE");
    expect(r.path).toBe("/my%20key.txt");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("tagging");

    expect(r.headers["host"]).toBe("mybucket.s3.us-west-2.amazonaws.com");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 *     S3 clients should preserve an Object Key representing a path
 *     when the Object Key is used as a URI label binding, but still
 *     escape special characters.
 *
 */
it("S3EscapePathObjectKeyInUriLabel:Request", async () => {
  const client = new S3Client({
    ...clientParams,
    endpoint: "https://s3.us-west-2.amazonaws.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new DeleteObjectTaggingCommand({
    Bucket: "mybucket",
    Key: "foo/bar/my key.txt",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("DELETE");
    expect(r.path).toBe("/foo/bar/my%20key.txt");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("tagging");

    expect(r.headers["host"]).toBe("mybucket.s3.us-west-2.amazonaws.com");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 *     S3 clients should use the @s3UnwrappedXmlOutput trait to determine
 *     that the response shape is not wrapped in a restxml operation-level XML node.
 *
 */
it("GetBucketLocationUnwrappedOutput:Response", async () => {
  const client = new S3Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `<?xml version="1.0" encoding="UTF-8"?>
      <LocationConstraint xmlns="http://s3.amazonaws.com/doc/2006-03-01/">us-west-2</LocationConstraint>`
    ),
  });

  const params: any = {};
  const command = new GetBucketLocationCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      LocationConstraint: "us-west-2",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(
      r[param],
      `The output field ${param} should have been defined in ${JSON.stringify(r, null, 2)}`
    ).toBeDefined();
    expect(equivalentContents(paramsToValidate[param], r[param])).toBe(true);
  });
});

/**
 *     S3 clients should not remove dot segments from request paths.
 *
 */
it("S3PreservesLeadingDotSegmentInUriLabel:Request", async () => {
  const client = new S3Client({
    ...clientParams,
    endpoint: "https://s3.us-west-2.amazonaws.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new GetObjectCommand({
    Bucket: "mybucket",
    Key: "../key.txt",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("GET");
    expect(r.path).toBe("/../key.txt");

    expect(r.headers["host"]).toBe("mybucket.s3.us-west-2.amazonaws.com");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 *     S3 clients should not remove dot segments from request paths.
 *
 */
it("S3PreservesEmbeddedDotSegmentInUriLabel:Request", async () => {
  const client = new S3Client({
    ...clientParams,
    endpoint: "https://s3.us-west-2.amazonaws.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new GetObjectCommand({
    Bucket: "mybucket",
    Key: "foo/../key.txt",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("GET");
    expect(r.path).toBe("/foo/../key.txt");

    expect(r.headers["host"]).toBe("mybucket.s3.us-west-2.amazonaws.com");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 * S3 clients should map the default addressing style to virtual host.
 */
it("S3DefaultAddressing:Request", async () => {
  const client = new S3Client({
    ...clientParams,
    endpoint: "https://s3.us-west-2.amazonaws.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new ListObjectsV2Command({
    Bucket: "mybucket",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("GET");
    expect(r.path).toBe("/");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("list-type=2");

    expect(r.headers["host"]).toBe("mybucket.s3.us-west-2.amazonaws.com");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 * S3 clients should support the explicit virtual host addressing style.
 */
it("S3VirtualHostAddressing:Request", async () => {
  const client = new S3Client({
    ...clientParams,
    endpoint: "https://s3.us-west-2.amazonaws.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new ListObjectsV2Command({
    Bucket: "mybucket",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("GET");
    expect(r.path).toBe("/");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("list-type=2");

    expect(r.headers["host"]).toBe("mybucket.s3.us-west-2.amazonaws.com");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 * S3 clients should support the explicit path addressing style.
 */
it("S3PathAddressing:Request", async () => {
  const client = new S3Client({
    ...clientParams,
    endpoint: "https://s3.us-west-2.amazonaws.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new ListObjectsV2Command({
    Bucket: "mybucket",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("GET");
    expect(r.path).toBe("/mybucket");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("list-type=2");

    expect(r.headers["host"]).toBe("s3.us-west-2.amazonaws.com");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 * S3 clients should support the explicit virtual host
 * addressing style with Dualstack.
 */
it("S3VirtualHostDualstackAddressing:Request", async () => {
  const client = new S3Client({
    ...clientParams,
    endpoint: "https://s3.us-west-2.amazonaws.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new ListObjectsV2Command({
    Bucket: "mybucket",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("GET");
    expect(r.path).toBe("/");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("list-type=2");

    expect(r.headers["host"]).toBe("mybucket.s3.dualstack.us-west-2.amazonaws.com");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 * S3 clients should support the explicit virtual host
 * addressing style with S3 Accelerate.
 */
it("S3VirtualHostAccelerateAddressing:Request", async () => {
  const client = new S3Client({
    ...clientParams,
    endpoint: "https://s3.us-west-2.amazonaws.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new ListObjectsV2Command({
    Bucket: "mybucket",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("GET");
    expect(r.path).toBe("/");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("list-type=2");

    expect(r.headers["host"]).toBe("mybucket.s3-accelerate.amazonaws.com");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 * S3 clients should support the explicit virtual host
 * addressing style with Dualstack and S3 Accelerate.
 */
it("S3VirtualHostDualstackAccelerateAddressing:Request", async () => {
  const client = new S3Client({
    ...clientParams,
    endpoint: "https://s3.us-west-2.amazonaws.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new ListObjectsV2Command({
    Bucket: "mybucket",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("GET");
    expect(r.path).toBe("/");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("list-type=2");

    expect(r.headers["host"]).toBe("mybucket.s3-accelerate.dualstack.amazonaws.com");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 * S3 clients should resolve to the addressing style of the
 * operation if defined on both the client and operation.
 */
it("S3OperationAddressingPreferred:Request", async () => {
  const client = new S3Client({
    ...clientParams,
    endpoint: "https://s3.us-west-2.amazonaws.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new ListObjectsV2Command({
    Bucket: "mybucket",
  } as any);
  try {
    await client.send(command);
    fail("Expected an EXPECTED_REQUEST_SERIALIZATION_ERROR to be thrown");
    return;
  } catch (err) {
    if (!(err instanceof EXPECTED_REQUEST_SERIALIZATION_ERROR)) {
      fail(err);
      return;
    }
    const r = err.request;
    expect(r.method).toBe("GET");
    expect(r.path).toBe("/");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("list-type=2");

    expect(r.headers["host"]).toBe("mybucket.s3.us-west-2.amazonaws.com");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 *     S3 operations return Error XML nodes unwrapped by
 *     the ErrorResponse XML node.
 *
 */
it("S3OperationNoErrorWrappingResponse:Error:ListObjectsV2", async () => {
  const client = new S3Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "content-type": "application/xml",
      },
      `<?xml version="1.0" encoding="UTF-8"?>
      <Error>
      	<Type>Sender</Type>
      	<Code>NoSuchBucket</Code>
      </Error>`
    ),
  });

  const params: any = {};
  const command = new ListObjectsV2Command(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "NoSuchBucket") {
      console.log(err);
      fail(`Expected a NoSuchBucket to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(400);
    return;
  }
  fail("Expected an exception to be thrown from response");
});
