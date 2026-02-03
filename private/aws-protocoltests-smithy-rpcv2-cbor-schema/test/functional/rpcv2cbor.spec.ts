// smithy-typescript generated code
import { cbor } from "@smithy/core/cbor";
import { expect, test as it } from "vitest";

import { EmptyInputOutputCommand } from "../../src/commands/EmptyInputOutputCommand";
import { Float16Command } from "../../src/commands/Float16Command";
import { FractionalSecondsCommand } from "../../src/commands/FractionalSecondsCommand";
import { GreetingWithErrorsCommand } from "../../src/commands/GreetingWithErrorsCommand";
import { NoInputOutputCommand } from "../../src/commands/NoInputOutputCommand";
import { OperationWithDefaultsCommand } from "../../src/commands/OperationWithDefaultsCommand";
import { OptionalInputOutputCommand } from "../../src/commands/OptionalInputOutputCommand";
import { RecursiveShapesCommand } from "../../src/commands/RecursiveShapesCommand";
import { RpcV2CborDenseMapsCommand } from "../../src/commands/RpcV2CborDenseMapsCommand";
import { RpcV2CborListsCommand } from "../../src/commands/RpcV2CborListsCommand";
import { RpcV2CborSparseMapsCommand } from "../../src/commands/RpcV2CborSparseMapsCommand";
import { SimpleScalarPropertiesCommand } from "../../src/commands/SimpleScalarPropertiesCommand";
import { SparseNullsOperationCommand } from "../../src/commands/SparseNullsOperationCommand";
import { RpcV2ProtocolClient } from "../../src/RpcV2ProtocolClient";
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
  apiKey: { apiKey: "apiKey" },
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
 * When Input structure is empty we write CBOR equivalent of {}
 */
it("empty_input:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new EmptyInputOutputCommand(
    {
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/EmptyInputOutput");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(
      r.headers["x-amz-target"],
      `Header key "x-amz-target" should have been undefined in ${JSON.stringify(r.headers)}`
    ).toBeUndefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v/8=`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * When output structure is empty we write CBOR equivalent of {}
 */
it("empty_output:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v/8=`
    ),
  });

  const params: any = {};
  const command = new EmptyInputOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
});

/**
 * When output structure is empty the client should accept an empty body
 */
it("empty_output_no_body:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new EmptyInputOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
});

/**
 * Ensures that clients can correctly parse float16 +Inf.
 */
it("RpcV2CborFloat16Inf:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `oWV2YWx1Zfl8AA==`
    ),
  });

  const params: any = {};
  const command = new Float16Command(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      value: Infinity,
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
 * Ensures that clients can correctly parse float16 -Inf.
 */
it("RpcV2CborFloat16NegInf:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `oWV2YWx1Zfn8AA==`
    ),
  });

  const params: any = {};
  const command = new Float16Command(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      value: -Infinity,
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
 * Ensures that clients can correctly parse float16 NaN with high LSB.
 */
it("RpcV2CborFloat16LSBNaN:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `oWV2YWx1Zfl8AQ==`
    ),
  });

  const params: any = {};
  const command = new Float16Command(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      value: NaN,
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
 * Ensures that clients can correctly parse float16 NaN with high MSB.
 */
it("RpcV2CborFloat16MSBNaN:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `oWV2YWx1Zfl+AA==`
    ),
  });

  const params: any = {};
  const command = new Float16Command(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      value: NaN,
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
 * Ensures that clients can correctly parse a subnormal float16.
 */
it("RpcV2CborFloat16Subnormal:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `oWV2YWx1ZfkAUA==`
    ),
  });

  const params: any = {};
  const command = new Float16Command(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      value: 4.76837158203125E-6,
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
 * Ensures that clients can correctly parse timestamps with fractional seconds
 */
it("RpcV2CborDateTimeWithFractionalSeconds:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2hkYXRldGltZcH7Qcw32zgPvnf/`
    ),
  });

  const params: any = {};
  const command = new FractionalSecondsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      datetime: new Date(9.46845296123E8 * 1000),
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
 * Parses simple RpcV2 Cbor errors
 */
it.skip("RpcV2CborInvalidGreetingError:Error:GreetingWithErrors", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2ZfX3R5cGV4LnNtaXRoeS5wcm90b2NvbHRlc3RzLnJwY3YyQ2JvciNJbnZhbGlkR3JlZXRpbmdnTWVzc2FnZWJIaf8=`
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "InvalidGreeting") {
      console.log(err);
      fail(`Expected a InvalidGreeting to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r.$metadata.httpStatusCode).toBe(400);
    const paramsToValidate: any = [
      {
        message: "Hi",
      },
    ][0];
    Object.keys(paramsToValidate).forEach((param) => {
      expect(
        r[param],
        `The output field ${param} should have been defined in ${JSON.stringify(r, null, 2)}`
      ).toBeDefined();
      expect(equivalentContents(paramsToValidate[param], r[param])).toBe(true);
    });
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Parses a complex error with no message member
 */
it.skip("RpcV2CborComplexError:Error:GreetingWithErrors", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2ZfX3R5cGV4K3NtaXRoeS5wcm90b2NvbHRlc3RzLnJwY3YyQ2JvciNDb21wbGV4RXJyb3JoVG9wTGV2ZWxpVG9wIGxldmVsZk5lc3RlZL9jRm9vY2Jhcv//`
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "ComplexError") {
      console.log(err);
      fail(`Expected a ComplexError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r.$metadata.httpStatusCode).toBe(400);
    const paramsToValidate: any = [
      {
        TopLevel: "Top level",
        Nested: {
          Foo: "bar",
        },
      },
    ][0];
    Object.keys(paramsToValidate).forEach((param) => {
      expect(
        r[param],
        `The output field ${param} should have been defined in ${JSON.stringify(r, null, 2)}`
      ).toBeDefined();
      expect(equivalentContents(paramsToValidate[param], r[param])).toBe(true);
    });
    return;
  }
  fail("Expected an exception to be thrown from response");
});

it.skip("RpcV2CborEmptyComplexError:Error:GreetingWithErrors", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2ZfX3R5cGV4K3NtaXRoeS5wcm90b2NvbHRlc3RzLnJwY3YyQ2JvciNDb21wbGV4RXJyb3L/`
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "ComplexError") {
      console.log(err);
      fail(`Expected a ComplexError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r.$metadata.httpStatusCode).toBe(400);
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Body is empty and no Content-Type header if no input
 */
it("no_input:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new NoInputOutputCommand({});
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/NoInputOutput");

    expect(
      r.headers["content-type"],
      `Header key "content-type" should have been undefined in ${JSON.stringify(r.headers)}`
    ).toBeUndefined();
    expect(
      r.headers["x-amz-target"],
      `Header key "x-amz-target" should have been undefined in ${JSON.stringify(r.headers)}`
    ).toBeUndefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(!r.body || r.body === `{}`).toBeTruthy();
  }
});

/**
 * A `Content-Type` header should not be set if the response body is empty.
 */
it("no_output:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new NoInputOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
});

/**
 * Clients should accept a CBOR empty struct if there is no output.
 */
it("NoOutputClientAllowsEmptyCbor:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v/8=`
    ),
  });

  const params: any = {};
  const command = new NoInputOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
});

/**
 * Clients should accept an empty body if there is no output and
 * should not raise an error if the `Content-Type` header is set.
 */
it("NoOutputClientAllowsEmptyBody:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new NoInputOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
});

/**
 * Client populates default values in input.
 */
it.skip("RpcV2CborClientPopulatesDefaultValuesInInput:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new OperationWithDefaultsCommand(
    {
      defaults: {
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/OperationWithDefaults");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v2hkZWZhdWx0c79tZGVmYXVsdFN0cmluZ2JoaW5kZWZhdWx0Qm9vbGVhbvVrZGVmYXVsdExpc3Sf/3BkZWZhdWx0VGltZXN0YW1wwQBrZGVmYXVsdEJsb2JDYWJja2RlZmF1bHRCeXRlAWxkZWZhdWx0U2hvcnQBbmRlZmF1bHRJbnRlZ2VyCmtkZWZhdWx0TG9uZxhkbGRlZmF1bHRGbG9hdPo/gAAAbWRlZmF1bHREb3VibGX6P4AAAGpkZWZhdWx0TWFwv/9rZGVmYXVsdEVudW1jRk9PbmRlZmF1bHRJbnRFbnVtAWtlbXB0eVN0cmluZ2BsZmFsc2VCb29sZWFu9GllbXB0eUJsb2JAaHplcm9CeXRlAGl6ZXJvU2hvcnQAa3plcm9JbnRlZ2VyAGh6ZXJvTG9uZwBpemVyb0Zsb2F0+gAAAABqemVyb0RvdWJsZfoAAAAA//8=`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Client skips top level default values in input.
 */
it.skip("RpcV2CborClientSkipsTopLevelDefaultValuesInInput:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new OperationWithDefaultsCommand(
    {
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/OperationWithDefaults");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v/8=`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Client uses explicitly provided member values over defaults
 */
it.skip("RpcV2CborClientUsesExplicitlyProvidedMemberValuesOverDefaults:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new OperationWithDefaultsCommand(
    {
      defaults: {
        defaultString: "bye",
        defaultBoolean: true,
        defaultList: [
          "a",
        ],
        defaultTimestamp: new Date(1000),
        defaultBlob: Uint8Array.from("hi", (c) => c.charCodeAt(0)),
        defaultByte: 2,
        defaultShort: 2,
        defaultInteger: 20,
        defaultLong: 200,
        defaultFloat: 2.0,
        defaultDouble: 2.0,
        defaultMap: {
          name: "Jack",
        } as any,
        defaultEnum: "BAR",
        defaultIntEnum: 2,
        emptyString: "foo",
        falseBoolean: true,
        emptyBlob: Uint8Array.from("hi", (c) => c.charCodeAt(0)),
        zeroByte: 1,
        zeroShort: 1,
        zeroInteger: 1,
        zeroLong: 1,
        zeroFloat: 1.0,
        zeroDouble: 1.0,
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/OperationWithDefaults");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v2hkZWZhdWx0c7dtZGVmYXVsdFN0cmluZ2NieWVuZGVmYXVsdEJvb2xlYW71a2RlZmF1bHRMaXN0gWFhcGRlZmF1bHRUaW1lc3RhbXDB+z/wAAAAAAAAa2RlZmF1bHRCbG9iQmhpa2RlZmF1bHRCeXRlAmxkZWZhdWx0U2hvcnQCbmRlZmF1bHRJbnRlZ2VyFGtkZWZhdWx0TG9uZxjIbGRlZmF1bHRGbG9hdPpAAAAAbWRlZmF1bHREb3VibGX7QAAAAAAAAABqZGVmYXVsdE1hcKFkbmFtZWRKYWNra2RlZmF1bHRFbnVtY0JBUm5kZWZhdWx0SW50RW51bQJrZW1wdHlTdHJpbmdjZm9vbGZhbHNlQm9vbGVhbvVpZW1wdHlCbG9iQmhpaHplcm9CeXRlAWl6ZXJvU2hvcnQBa3plcm9JbnRlZ2VyAWh6ZXJvTG9uZwFpemVyb0Zsb2F0+j+AAABqemVyb0RvdWJsZfs/8AAAAAAAAP8=`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Any time a value is provided for a member in the top level of input, it is used, regardless of if its the default.
 */
it.skip("RpcV2CborClientUsesExplicitlyProvidedValuesInTopLevel:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new OperationWithDefaultsCommand(
    {
      topLevelDefault: "hi",
      otherTopLevelDefault: 0,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/OperationWithDefaults");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v290b3BMZXZlbERlZmF1bHRiaGl0b3RoZXJUb3BMZXZlbERlZmF1bHQA/w==`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Typically, non top-level members would have defaults filled in, but if they have the clientOptional trait, the defaults should be ignored.
 */
it.skip("RpcV2CborClientIgnoresNonTopLevelDefaultsOnMembersWithClientOptional:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new OperationWithDefaultsCommand(
    {
      clientOptionalDefaults: {
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/OperationWithDefaults");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v3ZjbGllbnRPcHRpb25hbERlZmF1bHRzoP8=`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Client populates default values when missing in response.
 */
it.skip("RpcV2CborClientPopulatesDefaultsValuesWhenMissingInResponse:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v/8=`
    ),
  });

  const params: any = {};
  const command = new OperationWithDefaultsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      defaultString: "hi",
      defaultBoolean: true,
      defaultList: [
      ],
      defaultTimestamp: new Date(0 * 1000),
      defaultBlob: Uint8Array.from("abc", (c) => c.charCodeAt(0)),
      defaultByte: 1,
      defaultShort: 1,
      defaultInteger: 10,
      defaultLong: 100,
      defaultFloat: 1.0,
      defaultDouble: 1.0,
      defaultMap: {
      },
      defaultEnum: "FOO",
      defaultIntEnum: 1,
      emptyString: "",
      falseBoolean: false,
      emptyBlob: Uint8Array.from("", (c) => c.charCodeAt(0)),
      zeroByte: 0,
      zeroShort: 0,
      zeroInteger: 0,
      zeroLong: 0,
      zeroFloat: 0.0,
      zeroDouble: 0.0,
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
 * Client ignores default values if member values are present in the response.
 */
it.skip("RpcV2CborClientIgnoresDefaultValuesIfMemberValuesArePresentInResponse:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v21kZWZhdWx0U3RyaW5nY2J5ZW5kZWZhdWx0Qm9vbGVhbvRrZGVmYXVsdExpc3SBYWFwZGVmYXVsdFRpbWVzdGFtcMH7QAAAAAAAAABrZGVmYXVsdEJsb2JCaGlrZGVmYXVsdEJ5dGUCbGRlZmF1bHRTaG9ydAJuZGVmYXVsdEludGVnZXIUa2RlZmF1bHRMb25nGMhsZGVmYXVsdEZsb2F0+kAAAABtZGVmYXVsdERvdWJsZftAAAAAAAAAAGpkZWZhdWx0TWFwoWRuYW1lZEphY2trZGVmYXVsdEVudW1jQkFSbmRlZmF1bHRJbnRFbnVtAmtlbXB0eVN0cmluZ2Nmb29sZmFsc2VCb29sZWFu9WllbXB0eUJsb2JCaGloemVyb0J5dGUBaXplcm9TaG9ydAFremVyb0ludGVnZXIBaHplcm9Mb25nAWl6ZXJvRmxvYXT6P4AAAGp6ZXJvRG91Ymxl+z/wAAAAAAAA/w==`
    ),
  });

  const params: any = {};
  const command = new OperationWithDefaultsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      defaultString: "bye",
      defaultBoolean: false,
      defaultList: [
        "a",
      ],
      defaultTimestamp: new Date(2 * 1000),
      defaultBlob: Uint8Array.from("hi", (c) => c.charCodeAt(0)),
      defaultByte: 2,
      defaultShort: 2,
      defaultInteger: 20,
      defaultLong: 200,
      defaultFloat: 2.0,
      defaultDouble: 2.0,
      defaultMap: {
        name: "Jack",
      },
      defaultEnum: "BAR",
      defaultIntEnum: 2,
      emptyString: "foo",
      falseBoolean: true,
      emptyBlob: Uint8Array.from("hi", (c) => c.charCodeAt(0)),
      zeroByte: 1,
      zeroShort: 1,
      zeroInteger: 1,
      zeroLong: 1,
      zeroFloat: 1.0,
      zeroDouble: 1.0,
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
 * When input is empty we write CBOR equivalent of {}
 */
it("optional_input:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new OptionalInputOutputCommand(
    {
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/OptionalInputOutput");

    expect(
      r.headers["x-amz-target"],
      `Header key "x-amz-target" should have been undefined in ${JSON.stringify(r.headers)}`
    ).toBeUndefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v/8=`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * When output is empty we write CBOR equivalent of {}
 */
it("optional_output:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v/8=`
    ),
  });

  const params: any = {};
  const command = new OptionalInputOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
});

/**
 * Serializes recursive structures
 */
it("RpcV2CborRecursiveShapes:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RecursiveShapesCommand(
    {
      nested: {
        foo: "Foo1",
        nested: {
          bar: "Bar1",
          recursiveMember: {
            foo: "Foo2",
            nested: {
              bar: "Bar2",
            } as any,
          } as any,
        } as any,
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/RecursiveShapes");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v2ZuZXN0ZWS/Y2Zvb2RGb28xZm5lc3RlZL9jYmFyZEJhcjFvcmVjdXJzaXZlTWVtYmVyv2Nmb29kRm9vMmZuZXN0ZWS/Y2JhcmRCYXIy//////8=`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes recursive structures
 */
it("RpcV2CborRecursiveShapes:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2ZuZXN0ZWS/Y2Zvb2RGb28xZm5lc3RlZL9jYmFyZEJhcjFvcmVjdXJzaXZlTWVtYmVyv2Nmb29kRm9vMmZuZXN0ZWS/Y2JhcmRCYXIy//////8=`
    ),
  });

  const params: any = {};
  const command = new RecursiveShapesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      nested: {
        foo: "Foo1",
        nested: {
          bar: "Bar1",
          recursiveMember: {
            foo: "Foo2",
            nested: {
              bar: "Bar2",
            },
          },
        },
      },
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
 * Deserializes recursive structures encoded using a map with definite length
 */
it("RpcV2CborRecursiveShapesUsingDefiniteLength:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `oWZuZXN0ZWSiY2Zvb2RGb28xZm5lc3RlZKJjYmFyZEJhcjFvcmVjdXJzaXZlTWVtYmVyomNmb29kRm9vMmZuZXN0ZWShY2JhcmRCYXIy`
    ),
  });

  const params: any = {};
  const command = new RecursiveShapesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      nested: {
        foo: "Foo1",
        nested: {
          bar: "Bar1",
          recursiveMember: {
            foo: "Foo2",
            nested: {
              bar: "Bar2",
            },
          },
        },
      },
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
 * Serializes maps
 */
it("RpcV2CborMaps:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RpcV2CborDenseMapsCommand(
    {
      denseStructMap: {
        foo: {
          hi: "there",
        } as any,
        baz: {
          hi: "bye",
        } as any,
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/RpcV2CborDenseMaps");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `oW5kZW5zZVN0cnVjdE1hcKJjZm9voWJoaWV0aGVyZWNiYXqhYmhpY2J5ZQ==`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensure that 0 and false are sent over the wire in all maps and lists
 */
it("RpcV2CborSerializesZeroValuesInMaps:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RpcV2CborDenseMapsCommand(
    {
      denseNumberMap: {
        x: 0,
      } as any,
      denseBooleanMap: {
        x: false,
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/RpcV2CborDenseMaps");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `om5kZW5zZU51bWJlck1hcKFheABvZGVuc2VCb29sZWFuTWFwoWF49A==`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * A request that contains a dense map of sets.
 */
it("RpcV2CborSerializesDenseSetMap:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RpcV2CborDenseMapsCommand(
    {
      denseSetMap: {
        x: [
        ],
        y: [
          "a",
          "b",
        ],
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/RpcV2CborDenseMaps");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `oWtkZW5zZVNldE1hcKJheIBheYJhYWFi`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Deserializes maps
 */
it("RpcV2CborMaps:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `oW5kZW5zZVN0cnVjdE1hcKJjZm9voWJoaWV0aGVyZWNiYXqhYmhpY2J5ZQ==`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborDenseMapsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      denseStructMap: {
        foo: {
          hi: "there",
        },
        baz: {
          hi: "bye",
        },
      },
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
 * Ensure that 0 and false are sent over the wire in all maps and lists
 */
it("RpcV2CborDeserializesZeroValuesInMaps:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `om5kZW5zZU51bWJlck1hcKFheABvZGVuc2VCb29sZWFuTWFwoWF49A==`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborDenseMapsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      denseNumberMap: {
        x: 0,
      },
      denseBooleanMap: {
        x: false,
      },
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
 * A response that contains a dense map of sets
 */
it("RpcV2CborDeserializesDenseSetMap:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `oWtkZW5zZVNldE1hcKJheIBheYJhYWFi`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborDenseMapsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      denseSetMap: {
        x: [
        ],
        y: [
          "a",
          "b",
        ],
      },
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
 * Clients SHOULD tolerate seeing a null value in a dense map, and they SHOULD
 * drop the null key-value pair.
 */
it.skip("RpcV2CborDeserializesDenseSetMapAndSkipsNull:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `oWtkZW5zZVNldE1hcKNheIBheYJhYWFiYXr2`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborDenseMapsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      denseSetMap: {
        x: [
        ],
        y: [
          "a",
          "b",
        ],
      },
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
 * Serializes RpcV2 Cbor lists
 */
it("RpcV2CborLists:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RpcV2CborListsCommand(
    {
      stringList: [
        "foo",
        "bar",
      ],
      stringSet: [
        "foo",
        "bar",
      ],
      integerList: [
        1,
        2,
      ],
      booleanList: [
        true,
        false,
      ],
      timestampList: [
        new Date(1398796238000),
        new Date(1398796238000),
      ],
      enumList: [
        "Foo",
        "0",
      ],
      intEnumList: [
        1,
        2,
      ],
      nestedStringList: [
        [
          "foo",
          "bar",
        ],
        [
          "baz",
          "qux",
        ],
      ],
      structureList: [
        {
          a: "1",
          b: "2",
        } as any,
        {
          a: "3",
          b: "4",
        } as any,
      ],
      blobList: [
        Uint8Array.from("foo", (c) => c.charCodeAt(0)),
        Uint8Array.from("bar", (c) => c.charCodeAt(0)),
      ],
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/RpcV2CborLists");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v2pzdHJpbmdMaXN0gmNmb29jYmFyaXN0cmluZ1NldIJjZm9vY2JhcmtpbnRlZ2VyTGlzdIIBAmtib29sZWFuTGlzdIL19G10aW1lc3RhbXBMaXN0gsH7QdTX+/OAAADB+0HU1/vzgAAAaGVudW1MaXN0gmNGb29hMGtpbnRFbnVtTGlzdIIBAnBuZXN0ZWRTdHJpbmdMaXN0goJjZm9vY2JhcoJjYmF6Y3F1eG1zdHJ1Y3R1cmVMaXN0gqJhYWExYWJhMqJhYWEzYWJhNGhibG9iTGlzdIJDZm9vQ2Jhcv8=`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes empty JSON lists
 */
it("RpcV2CborListsEmpty:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RpcV2CborListsCommand(
    {
      stringList: [
      ],
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/RpcV2CborLists");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v2pzdHJpbmdMaXN0n///`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes empty JSON definite length lists
 */
it("RpcV2CborListsEmptyUsingDefiniteLength:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RpcV2CborListsCommand(
    {
      stringList: [
      ],
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/RpcV2CborLists");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `oWpzdHJpbmdMaXN0gA==`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes RpcV2 Cbor lists
 */
it("RpcV2CborLists:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2pzdHJpbmdMaXN0n2Nmb29jYmFy/2lzdHJpbmdTZXSfY2Zvb2NiYXL/a2ludGVnZXJMaXN0nwEC/2tib29sZWFuTGlzdJ/19P9tdGltZXN0YW1wTGlzdJ/B+0HU1/vzgAAAwftB1Nf784AAAP9oZW51bUxpc3SfY0Zvb2Ew/2tpbnRFbnVtTGlzdJ8BAv9wbmVzdGVkU3RyaW5nTGlzdJ+fY2Zvb2NiYXL/n2NiYXpjcXV4//9tc3RydWN0dXJlTGlzdJ+/YWFhMWFiYTL/v2FhYTNhYmE0//9oYmxvYkxpc3SfQ2Zvb0NiYXL//w==`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborListsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      stringList: [
        "foo",
        "bar",
      ],
      stringSet: [
        "foo",
        "bar",
      ],
      integerList: [
        1,
        2,
      ],
      booleanList: [
        true,
        false,
      ],
      timestampList: [
        new Date(1398796238 * 1000),
        new Date(1398796238 * 1000),
      ],
      enumList: [
        "Foo",
        "0",
      ],
      intEnumList: [
        1,
        2,
      ],
      nestedStringList: [
        [
          "foo",
          "bar",
        ],
        [
          "baz",
          "qux",
        ],
      ],
      structureList: [
        {
          a: "1",
          b: "2",
        },
        {
          a: "3",
          b: "4",
        },
      ],
      blobList: [
        Uint8Array.from("foo", (c) => c.charCodeAt(0)),
        Uint8Array.from("bar", (c) => c.charCodeAt(0)),
      ],
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
 * Serializes empty RpcV2 Cbor lists
 */
it("RpcV2CborListsEmpty:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2pzdHJpbmdMaXN0n///`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborListsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      stringList: [
      ],
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
 * Can deserialize indefinite length text strings inside an indefinite length list
 */
it("RpcV2CborIndefiniteStringInsideIndefiniteListCanDeserialize:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2pzdHJpbmdMaXN0n394HUFuIGV4YW1wbGUgaW5kZWZpbml0ZSBzdHJpbmcsdyB3aGljaCB3aWxsIGJlIGNodW5rZWQsbiBvbiBlYWNoIGNvbW1h/394NUFub3RoZXIgZXhhbXBsZSBpbmRlZmluaXRlIHN0cmluZyB3aXRoIG9ubHkgb25lIGNodW5r/3ZUaGlzIGlzIGEgcGxhaW4gc3RyaW5n//8=`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborListsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      stringList: [
        "An example indefinite string, which will be chunked, on each comma",
        "Another example indefinite string with only one chunk",
        "This is a plain string",
      ],
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
 * Can deserialize indefinite length text strings inside a definite length list
 */
it("RpcV2CborIndefiniteStringInsideDefiniteListCanDeserialize:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `oWpzdHJpbmdMaXN0g394HUFuIGV4YW1wbGUgaW5kZWZpbml0ZSBzdHJpbmcsdyB3aGljaCB3aWxsIGJlIGNodW5rZWQsbiBvbiBlYWNoIGNvbW1h/394NUFub3RoZXIgZXhhbXBsZSBpbmRlZmluaXRlIHN0cmluZyB3aXRoIG9ubHkgb25lIGNodW5r/3ZUaGlzIGlzIGEgcGxhaW4gc3RyaW5n`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborListsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      stringList: [
        "An example indefinite string, which will be chunked, on each comma",
        "Another example indefinite string with only one chunk",
        "This is a plain string",
      ],
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
 * Serializes sparse maps
 */
it("RpcV2CborSparseMaps:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RpcV2CborSparseMapsCommand(
    {
      sparseStructMap: {
        foo: {
          hi: "there",
        } as any,
        baz: {
          hi: "bye",
        } as any,
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/RpcV2CborSparseMaps");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v29zcGFyc2VTdHJ1Y3RNYXC/Y2Zvb79iaGlldGhlcmX/Y2Jher9iaGljYnll////`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes null map values in sparse maps
 */
it("RpcV2CborSerializesNullMapValues:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RpcV2CborSparseMapsCommand(
    {
      sparseBooleanMap: {
        x: null,
      } as any,
      sparseNumberMap: {
        x: null,
      } as any,
      sparseStringMap: {
        x: null,
      } as any,
      sparseStructMap: {
        x: null,
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/RpcV2CborSparseMaps");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v3BzcGFyc2VCb29sZWFuTWFwv2F49v9vc3BhcnNlTnVtYmVyTWFwv2F49v9vc3BhcnNlU3RyaW5nTWFwv2F49v9vc3BhcnNlU3RydWN0TWFwv2F49v//`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * A request that contains a sparse map of sets
 */
it("RpcV2CborSerializesSparseSetMap:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RpcV2CborSparseMapsCommand(
    {
      sparseSetMap: {
        x: [
        ],
        y: [
          "a",
          "b",
        ],
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/RpcV2CborSparseMaps");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v2xzcGFyc2VTZXRNYXC/YXif/2F5n2FhYWL///8=`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * A request that contains a sparse map of sets.
 */
it("RpcV2CborSerializesSparseSetMapAndRetainsNull:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RpcV2CborSparseMapsCommand(
    {
      sparseSetMap: {
        x: [
        ],
        y: [
          "a",
          "b",
        ],
        z: null,
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/RpcV2CborSparseMaps");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v2xzcGFyc2VTZXRNYXC/YXif/2F5n2FhYWL/YXr2//8=`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensure that 0 and false are sent over the wire in all maps and lists
 */
it("RpcV2CborSerializesZeroValuesInSparseMaps:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RpcV2CborSparseMapsCommand(
    {
      sparseNumberMap: {
        x: 0,
      } as any,
      sparseBooleanMap: {
        x: false,
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/RpcV2CborSparseMaps");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v29zcGFyc2VOdW1iZXJNYXC/YXgA/3BzcGFyc2VCb29sZWFuTWFwv2F49P//`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Deserializes sparse maps
 */
it("RpcV2CborSparseJsonMaps:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v29zcGFyc2VTdHJ1Y3RNYXC/Y2Zvb79iaGlldGhlcmX/Y2Jher9iaGljYnll////`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborSparseMapsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      sparseStructMap: {
        foo: {
          hi: "there",
        },
        baz: {
          hi: "bye",
        },
      },
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
 * Deserializes null map values
 */
it("RpcV2CborDeserializesNullMapValues:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v3BzcGFyc2VCb29sZWFuTWFwv2F49v9vc3BhcnNlTnVtYmVyTWFwv2F49v9vc3BhcnNlU3RyaW5nTWFwv2F49v9vc3BhcnNlU3RydWN0TWFwv2F49v//`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborSparseMapsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      sparseBooleanMap: {
        x: null,
      },
      sparseNumberMap: {
        x: null,
      },
      sparseStringMap: {
        x: null,
      },
      sparseStructMap: {
        x: null,
      },
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
 * A response that contains a sparse map of sets
 */
it("RpcV2CborDeserializesSparseSetMap:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2xzcGFyc2VTZXRNYXC/YXmfYWFhYv9heJ////8=`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborSparseMapsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      sparseSetMap: {
        x: [
        ],
        y: [
          "a",
          "b",
        ],
      },
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
 * A response that contains a sparse map of sets with a null
 */
it("RpcV2CborDeserializesSparseSetMapAndRetainsNull:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2xzcGFyc2VTZXRNYXC/YXif/2F5n2FhYWL/YXr2//8=`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborSparseMapsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      sparseSetMap: {
        x: [
        ],
        y: [
          "a",
          "b",
        ],
        z: null,
      },
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
 * Ensure that 0 and false are sent over the wire in all maps and lists
 */
it("RpcV2CborDeserializesZeroValuesInSparseMaps:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v29zcGFyc2VOdW1iZXJNYXC/YXgA/3BzcGFyc2VCb29sZWFuTWFwv2F49P//`
    ),
  });

  const params: any = {};
  const command = new RpcV2CborSparseMapsCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      sparseNumberMap: {
        x: 0,
      },
      sparseBooleanMap: {
        x: false,
      },
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
 * Serializes simple scalar properties
 */
it("RpcV2CborSimpleScalarProperties:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleScalarPropertiesCommand(
    {
      byteValue: 5,
      doubleValue: 1.889,
      falseBooleanValue: false,
      floatValue: 7.625,
      integerValue: 256,
      longValue: 9873,
      shortValue: 9898,
      stringValue: "simple",
      trueBooleanValue: true,
      blobValue: Uint8Array.from("foo", (c) => c.charCodeAt(0)),
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/SimpleScalarProperties");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v2lieXRlVmFsdWUFa2RvdWJsZVZhbHVl+z/+OVgQYk3TcWZhbHNlQm9vbGVhblZhbHVl9GpmbG9hdFZhbHVl+kD0AABsaW50ZWdlclZhbHVlGQEAaWxvbmdWYWx1ZRkmkWpzaG9ydFZhbHVlGSaqa3N0cmluZ1ZhbHVlZnNpbXBsZXB0cnVlQm9vbGVhblZhbHVl9WlibG9iVmFsdWVDZm9v/w==`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * RpcV2 Cbor should not serialize null structure values
 */
it("RpcV2CborClientDoesntSerializeNullStructureValues:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleScalarPropertiesCommand(
    {
      stringValue: null,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/SimpleScalarProperties");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v/8=`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Supports handling NaN float values.
 */
it("RpcV2CborSupportsNaNFloatInputs:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleScalarPropertiesCommand(
    {
      doubleValue: NaN,
      floatValue: NaN,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/SimpleScalarProperties");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v2tkb3VibGVWYWx1Zft/+AAAAAAAAGpmbG9hdFZhbHVl+n/AAAD/`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Supports handling Infinity float values.
 */
it("RpcV2CborSupportsInfinityFloatInputs:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleScalarPropertiesCommand(
    {
      doubleValue: Infinity,
      floatValue: Infinity,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/SimpleScalarProperties");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v2tkb3VibGVWYWx1Zft/8AAAAAAAAGpmbG9hdFZhbHVl+n+AAAD/`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Supports handling Infinity float values.
 */
it("RpcV2CborSupportsNegativeInfinityFloatInputs:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleScalarPropertiesCommand(
    {
      doubleValue: -Infinity,
      floatValue: -Infinity,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/SimpleScalarProperties");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v2tkb3VibGVWYWx1Zfv/8AAAAAAAAGpmbG9hdFZhbHVl+v+AAAD/`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes simple scalar properties
 */
it("RpcV2CborSimpleScalarProperties:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v3B0cnVlQm9vbGVhblZhbHVl9XFmYWxzZUJvb2xlYW5WYWx1ZfRpYnl0ZVZhbHVlBWtkb3VibGVWYWx1Zfs//jlYEGJN02pmbG9hdFZhbHVl+kD0AABsaW50ZWdlclZhbHVlGQEAanNob3J0VmFsdWUZJqprc3RyaW5nVmFsdWVmc2ltcGxlaWJsb2JWYWx1ZUNmb2//`
    ),
  });

  const params: any = {};
  const command = new SimpleScalarPropertiesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      trueBooleanValue: true,
      falseBooleanValue: false,
      byteValue: 5,
      doubleValue: 1.889,
      floatValue: 7.625,
      integerValue: 256,
      shortValue: 9898,
      stringValue: "simple",
      blobValue: Uint8Array.from("foo", (c) => c.charCodeAt(0)),
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
 * Deserializes simple scalar properties encoded using a map with definite length
 */
it("RpcV2CborSimpleScalarPropertiesUsingDefiniteLength:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `qXB0cnVlQm9vbGVhblZhbHVl9XFmYWxzZUJvb2xlYW5WYWx1ZfRpYnl0ZVZhbHVlBWtkb3VibGVWYWx1Zfs//jlYEGJN02pmbG9hdFZhbHVl+kD0AABsaW50ZWdlclZhbHVlGQEAanNob3J0VmFsdWUZJqprc3RyaW5nVmFsdWVmc2ltcGxlaWJsb2JWYWx1ZUNmb28=`
    ),
  });

  const params: any = {};
  const command = new SimpleScalarPropertiesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      trueBooleanValue: true,
      falseBooleanValue: false,
      byteValue: 5,
      doubleValue: 1.889,
      floatValue: 7.625,
      integerValue: 256,
      shortValue: 9898,
      stringValue: "simple",
      blobValue: Uint8Array.from("foo", (c) => c.charCodeAt(0)),
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
 * RpcV2 Cbor should not deserialize null structure values
 */
it("RpcV2CborClientDoesntDeserializeNullStructureValues:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2tzdHJpbmdWYWx1Zfb/`
    ),
  });

  const params: any = {};
  const command = new SimpleScalarPropertiesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
});

/**
 * Supports handling NaN float values.
 */
it("RpcV2CborSupportsNaNFloatOutputs:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2tkb3VibGVWYWx1Zft/+AAAAAAAAGpmbG9hdFZhbHVl+n/AAAD/`
    ),
  });

  const params: any = {};
  const command = new SimpleScalarPropertiesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      doubleValue: NaN,
      floatValue: NaN,
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
 * Supports handling Infinity float values.
 */
it("RpcV2CborSupportsInfinityFloatOutputs:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2tkb3VibGVWYWx1Zft/8AAAAAAAAGpmbG9hdFZhbHVl+n+AAAD/`
    ),
  });

  const params: any = {};
  const command = new SimpleScalarPropertiesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      doubleValue: Infinity,
      floatValue: Infinity,
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
 * Supports handling Negative Infinity float values.
 */
it("RpcV2CborSupportsNegativeInfinityFloatOutputs:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2tkb3VibGVWYWx1Zfv/8AAAAAAAAGpmbG9hdFZhbHVl+v+AAAD/`
    ),
  });

  const params: any = {};
  const command = new SimpleScalarPropertiesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      doubleValue: -Infinity,
      floatValue: -Infinity,
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
 * Supports upcasting from a smaller byte representation of the same data type.
 */
it("RpcV2CborSupportsUpcastingDataOnDeserialize:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2tkb3VibGVWYWx1Zfk+AGpmbG9hdFZhbHVl+UegbGludGVnZXJWYWx1ZRg4aWxvbmdWYWx1ZRkBAGpzaG9ydFZhbHVlCv8=`
    ),
  });

  const params: any = {};
  const command = new SimpleScalarPropertiesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      doubleValue: 1.5,
      floatValue: 7.625,
      integerValue: 56,
      longValue: 256,
      shortValue: 10,
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
 * The client should skip over additional fields that are not part of the structure. This allows a
 * client generated against an older Smithy model to be able to communicate with a server that is
 * generated against a newer Smithy model.
 */
it("RpcV2CborExtraFieldsInTheBodyShouldBeSkippedByClients:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v2lieXRlVmFsdWUFa2RvdWJsZVZhbHVl+z/+OVgQYk3TcWZhbHNlQm9vbGVhblZhbHVl9GpmbG9hdFZhbHVl+kD0AABrZXh0cmFPYmplY3S/c2luZGVmaW5pdGVMZW5ndGhNYXC/a3dpdGhBbkFycmF5nwECA///cWRlZmluaXRlTGVuZ3RoTWFwo3J3aXRoQURlZmluaXRlQXJyYXmDAQIDeB1hbmRTb21lSW5kZWZpbml0ZUxlbmd0aFN0cmluZ3gfdGhhdCBoYXMsIGJlZW4gY2h1bmtlZCBvbiBjb21tYWxub3JtYWxTdHJpbmdjZm9vanNob3J0VmFsdWUZJw9uc29tZU90aGVyRmllbGR2dGhpcyBzaG91bGQgYmUgc2tpcHBlZP9saW50ZWdlclZhbHVlGQEAaWxvbmdWYWx1ZRkmkWpzaG9ydFZhbHVlGSaqa3N0cmluZ1ZhbHVlZnNpbXBsZXB0cnVlQm9vbGVhblZhbHVl9WlibG9iVmFsdWVDZm9v/w==`
    ),
  });

  const params: any = {};
  const command = new SimpleScalarPropertiesCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      byteValue: 5,
      doubleValue: 1.889,
      falseBooleanValue: false,
      floatValue: 7.625,
      integerValue: 256,
      longValue: 9873,
      shortValue: 9898,
      stringValue: "simple",
      trueBooleanValue: true,
      blobValue: Uint8Array.from("foo", (c) => c.charCodeAt(0)),
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
 * Serializes null values in maps
 */
it("RpcV2CborSparseMapsSerializeNullValues:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SparseNullsOperationCommand(
    {
      sparseStringMap: {
        foo: null,
      } as any,
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/SparseNullsOperation");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v29zcGFyc2VTdHJpbmdNYXC/Y2Zvb/b//w==`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes null values in lists
 */
it("RpcV2CborSparseListsSerializeNull:Request", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SparseNullsOperationCommand(
    {
      sparseStringList: [
        null,
      ],
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
    expect(r.path).toBe("/service/RpcV2Protocol/operation/SparseNullsOperation");
    expect(
      r.headers["content-length"],
      `Header key "content-length" should have been defined in ${JSON.stringify(r.headers)}`
    ).toBeDefined();

    expect(r.headers["accept"]).toBe("application/cbor");
    expect(r.headers["content-type"]).toBe("application/cbor");
    expect(r.headers["smithy-protocol"]).toBe("rpc-v2-cbor");

    expect(r.body, `Body was undefined.`).toBeDefined();
    const bodyString = `v3BzcGFyc2VTdHJpbmdMaXN0n/b//w==`;
    const unequalParts: any = compareEquivalentCborBodies(bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Deserializes null values in maps
 */
it("RpcV2CborSparseMapsDeserializeNullValues:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v29zcGFyc2VTdHJpbmdNYXC/Y2Zvb/b//w==`
    ),
  });

  const params: any = {};
  const command = new SparseNullsOperationCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      sparseStringMap: {
        foo: null,
      },
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
 * Deserializes null values in lists
 */
it("RpcV2CborSparseListsDeserializeNull:Response", async () => {
  const client = new RpcV2ProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "smithy-protocol": "rpc-v2-cbor",
        "content-type": "application/cbor",
      },
      `v3BzcGFyc2VTdHJpbmdMaXN0n/b//w==`
    ),
  });

  const params: any = {};
  const command = new SparseNullsOperationCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r.$metadata.httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      sparseStringList: [
        null,
      ],
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

const compareEquivalentCborBodies = (expectedBody: string, generatedBody: string | Uint8Array): undefined => {
  expect(
    normalizeByteArrayType(cbor.deserialize(typeof generatedBody === "string" ? toBytes(generatedBody) : generatedBody))
  ).toEqual(normalizeByteArrayType(cbor.deserialize(toBytes(expectedBody))));
  return undefined;
};
