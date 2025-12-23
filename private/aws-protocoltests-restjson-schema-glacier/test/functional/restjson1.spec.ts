// smithy-typescript generated code
import type { Encoder as __Encoder } from "@smithy/types";
import { expect, test as it } from "vitest";

import { UploadArchiveCommand } from "../../src/commands/UploadArchiveCommand";
import { UploadMultipartPartCommand } from "../../src/commands/UploadMultipartPartCommand";
import { GlacierClient } from "../../src/GlacierClient";
import type { HttpHandlerOptions, HeaderBag, Endpoint } from "@smithy/types";
import { type HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { Readable } from "node:stream";

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

  let localExpected = expected;

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
  for (var index = 0; index < expectedProperties.length; index++) {
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
 * Glacier requires that a version header be set on all requests.
 */
it("GlacierVersionHeader:Request", async () => {
  const client = new GlacierClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new UploadArchiveCommand(
    {
      accountId: "foo",
      vaultName: "bar",
    } as any,
  );
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/foo/vaults/bar/archives");

    expect(r.headers["x-amz-glacier-version"]).toBe("2012-06-01");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 * Glacier requires checksum headers that are cumbersome to provide.
 */
it("GlacierChecksums:Request", async () => {
  const client = new GlacierClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new UploadArchiveCommand(
    {
      accountId: "foo",
      vaultName: "bar",
      body: Uint8Array.from("hello world", (c) => c.charCodeAt(0)),
    } as any,
  );
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/foo/vaults/bar/archives");

    expect(r.headers["x-amz-content-sha256"]).toBe("b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9");
    expect(r.headers["x-amz-glacier-version"]).toBe("2012-06-01");
    expect(r.headers["x-amz-sha256-tree-hash"]).toBe("b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `hello world`;
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Glacier requires that the account id be set, but you can just use a
 * hyphen (-) to indicate the current account. This should be default
 * behavior if the customer provides a null or empty string.
 */
it("GlacierAccountId:Request", async () => {
  const client = new GlacierClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new UploadArchiveCommand(
    {
      accountId: "",
      vaultName: "bar",
    } as any,
  );
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/-/vaults/bar/archives");

    expect(r.headers["x-amz-glacier-version"]).toBe("2012-06-01");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 * Glacier requires checksum headers that are cumbersome to provide.
 */
it("GlacierMultipartChecksums:Request", async () => {
  const client = new GlacierClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new UploadMultipartPartCommand(
    {
      accountId: "foo",
      vaultName: "bar",
      uploadId: "baz",
      body: Uint8Array.from("hello world", (c) => c.charCodeAt(0)),
    } as any,
  );
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/foo/vaults/bar/multipart-uploads/baz");

    expect(r.headers["x-amz-content-sha256"]).toBe("b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9");
    expect(r.headers["x-amz-glacier-version"]).toBe("2012-06-01");
    expect(r.headers["x-amz-sha256-tree-hash"]).toBe("b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `hello world`;
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Returns a map of key names that were un-equal to value objects showing the
 * discrepancies between the components.
 */
const compareEquivalentUnknownTypeBodies = (
  utf8Encoder: __Encoder,
  expectedBody: string,
  generatedBody: string | Uint8Array
): Object => {
  const expectedParts = {Value: expectedBody};
  const generatedParts = {
    Value: generatedBody instanceof Uint8Array ? utf8Encoder(generatedBody) : generatedBody
  };

  return compareParts(expectedParts, generatedParts);
}
