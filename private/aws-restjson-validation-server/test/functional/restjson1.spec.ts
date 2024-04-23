// smithy-typescript generated code
import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { HeaderBag, HttpHandlerOptions } from "@smithy/types";
import { toUtf8 as __utf8Encoder } from "@smithy/util-utf8";
import { Readable } from "stream";

import { getRestJsonValidationServiceHandler } from "../../src/server";
import { MalformedEnum } from "../../src/server/operations/MalformedEnum";
import { MalformedLength } from "../../src/server/operations/MalformedLength";
import { MalformedLengthOverride } from "../../src/server/operations/MalformedLengthOverride";
import { MalformedLengthQueryString } from "../../src/server/operations/MalformedLengthQueryString";
import { MalformedPattern } from "../../src/server/operations/MalformedPattern";
import { MalformedPatternOverride } from "../../src/server/operations/MalformedPatternOverride";
import { MalformedRange } from "../../src/server/operations/MalformedRange";
import { MalformedRangeOverride } from "../../src/server/operations/MalformedRangeOverride";
import { MalformedRequired } from "../../src/server/operations/MalformedRequired";
import { MalformedUniqueItems } from "../../src/server/operations/MalformedUniqueItems";
import { RecursiveStructures } from "../../src/server/operations/RecursiveStructures";
import { SensitiveValidation } from "../../src/server/operations/SensitiveValidation";
import { RestJsonValidationService } from "../../src/server/RestJsonValidationService";

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
  body: String;

  constructor(isSuccess: boolean, code: number, headers?: HeaderBag, body?: String) {
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
  }

  handle(request: HttpRequest, options?: HttpHandlerOptions): Promise<{ response: HttpResponse }> {
    return Promise.resolve({
      response: new HttpResponse({
        statusCode: this.code,
        headers: this.headers,
        body: Readable.from([this.body]),
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
  const localExpected = expected;

  // Short circuit on equality.
  if (localExpected == generated) {
    return true;
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
};

/**
 * A wrapper function that shadows `fail` from jest-jasmine2
 * (jasmine2 was replaced with circus in > v27 as the default test runner)
 */
const fail = (error?: any): never => {
  throw new Error(error);
};

/**
 * When a string member does not contain a valid enum value,
 * the response should be a 400 ValidationException. Internal-only
 * enum values are excluded from the response message.
 */
it("RestJsonMalformedEnumString_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedEnum: testFunction as MalformedEnum<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedEnum",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "ABC" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/string' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\",
    \"fieldList\" : [{\"message\": \"Value at '/string' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not contain a valid enum value,
 * the response should be a 400 ValidationException. Internal-only
 * enum values are excluded from the response message.
 */
it("RestJsonMalformedEnumString_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedEnum: testFunction as MalformedEnum<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedEnum",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "XYZ" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/string' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\",
    \"fieldList\" : [{\"message\": \"Value at '/string' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not contain a valid enum value,
 * the response should be a 400 ValidationException. Internal-only
 * enum values are excluded from the response message.
 */
it("RestJsonMalformedEnumTraitString_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedEnum: testFunction as MalformedEnum<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedEnum",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "stringWithEnumTrait" : "ABC" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/stringWithEnumTrait' failed to satisfy constraint: Member must satisfy enum value set: [abc, def]\",
    \"fieldList\" : [{\"message\": \"Value at '/stringWithEnumTrait' failed to satisfy constraint: Member must satisfy enum value set: [abc, def]\", \"path\": \"/stringWithEnumTrait\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not contain a valid enum value,
 * the response should be a 400 ValidationException. Internal-only
 * enum values are excluded from the response message.
 */
it("RestJsonMalformedEnumTraitString_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedEnum: testFunction as MalformedEnum<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedEnum",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "stringWithEnumTrait" : "XYZ" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/stringWithEnumTrait' failed to satisfy constraint: Member must satisfy enum value set: [abc, def]\",
    \"fieldList\" : [{\"message\": \"Value at '/stringWithEnumTrait' failed to satisfy constraint: Member must satisfy enum value set: [abc, def]\", \"path\": \"/stringWithEnumTrait\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list member value does not contain a valid enum value,
 * the response should be a 400 ValidationException. Internal-only
 * enum values are excluded from the response message.
 */
it("RestJsonMalformedEnumList_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedEnum: testFunction as MalformedEnum<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedEnum",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "list" : ["ABC"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/list/0' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\",
    \"fieldList\" : [{\"message\": \"Value at '/list/0' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\", \"path\": \"/list/0\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list member value does not contain a valid enum value,
 * the response should be a 400 ValidationException. Internal-only
 * enum values are excluded from the response message.
 */
it("RestJsonMalformedEnumList_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedEnum: testFunction as MalformedEnum<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedEnum",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "list" : ["XYZ"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/list/0' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\",
    \"fieldList\" : [{\"message\": \"Value at '/list/0' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\", \"path\": \"/list/0\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's key does not contain a valid enum value,
 * the response should be a 400 ValidationException. Internal-only
 * enum values are excluded from the response message.
 */
it("RestJsonMalformedEnumMapKey_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedEnum: testFunction as MalformedEnum<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedEnum",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : { "ABC" : "abc" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/map' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\",
    \"fieldList\" : [{\"message\": \"Value at '/map' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\", \"path\": \"/map\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's key does not contain a valid enum value,
 * the response should be a 400 ValidationException. Internal-only
 * enum values are excluded from the response message.
 */
it("RestJsonMalformedEnumMapKey_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedEnum: testFunction as MalformedEnum<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedEnum",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : { "XYZ" : "abc" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/map' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\",
    \"fieldList\" : [{\"message\": \"Value at '/map' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\", \"path\": \"/map\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's value does not contain a valid enum value,
 * the response should be a 400 ValidationException. Internal-only
 * enum values are excluded from the response message.
 */
it("RestJsonMalformedEnumMapValue_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedEnum: testFunction as MalformedEnum<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedEnum",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : { "abc": "ABC" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/map/abc' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\",
    \"fieldList\" : [{\"message\": \"Value at '/map/abc' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\", \"path\": \"/map/abc\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's value does not contain a valid enum value,
 * the response should be a 400 ValidationException. Internal-only
 * enum values are excluded from the response message.
 */
it("RestJsonMalformedEnumMapValue_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedEnum: testFunction as MalformedEnum<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedEnum",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : { "abc": "XYZ" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/map/abc' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\",
    \"fieldList\" : [{\"message\": \"Value at '/map/abc' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\", \"path\": \"/map/abc\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a union member's value does not contain a valid enum value,
 * the response should be a 400 ValidationException. Internal-only
 * enum values are excluded from the response message.
 */
it("RestJsonMalformedEnumUnion_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedEnum: testFunction as MalformedEnum<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedEnum",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "union" : { "first": "ABC" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/union/first' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\",
    \"fieldList\" : [{\"message\": \"Value at '/union/first' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\", \"path\": \"/union/first\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a union member's value does not contain a valid enum value,
 * the response should be a 400 ValidationException. Internal-only
 * enum values are excluded from the response message.
 */
it("RestJsonMalformedEnumUnion_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedEnum: testFunction as MalformedEnum<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedEnum",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "union" : { "first": "XYZ" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/union/first' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\",
    \"fieldList\" : [{\"message\": \"Value at '/union/first' failed to satisfy constraint: Member must satisfy enum value set: [abc, def, jkl]\", \"path\": \"/union/first\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a blob member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthBlob_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : "YQ==" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 1 at '/blob' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 1 at '/blob' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/blob\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a blob member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthBlob_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : "YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXo=" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 26 at '/blob' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 26 at '/blob' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/blob\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthString_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "a" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 1 at '/string' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 1 at '/string' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthString_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "abcdefghijklmnopqrstuvwxyz" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 26 at '/string' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 26 at '/string' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthString_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "👍" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 1 at '/string' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 1 at '/string' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthMinString:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "minString" : "a" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 1 at '/minString' failed to satisfy constraint: Member must have length greater than or equal to 2\",
    \"fieldList\" : [{\"message\": \"Value with length 1 at '/minString' failed to satisfy constraint: Member must have length greater than or equal to 2\", \"path\": \"/minString\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthMaxString:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "maxString" : "abcdefghijklmnopqrstuvwxyz" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 26 at '/maxString' failed to satisfy constraint: Member must have length less than or equal to 8\",
    \"fieldList\" : [{\"message\": \"Value with length 26 at '/maxString' failed to satisfy constraint: Member must have length less than or equal to 8\", \"path\": \"/maxString\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthList_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "list" : ["abc"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 1 at '/list' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 1 at '/list' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/list\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthList_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "list" : ["abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 10 at '/list' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 10 at '/list' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/list\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list member's value does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthListValue_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "list" : ["a", "abc"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 1 at '/list/0' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 1 at '/list/0' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/list/0\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list member's value does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthListValue_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "list" : ["abcdefghijklmnopqrstuvwxyz", "abc"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 26 at '/list/0' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 26 at '/list/0' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/list/0\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthMap_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : {"abc": ["def", "efg", "fgh"]} }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 1 at '/map' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 1 at '/map' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/map\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthMap_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{ "map" : {"abc": ["abc", "def", "efg"], "bcd": ["abc", "def", "efg"],\n "cde": ["abc", "def", "efg"], "def": ["abc", "def", "efg"],\n "efg": ["abc", "def", "efg"], "fgh": ["abc", "def", "efg"],\n "ghi": ["abc", "def", "efg"], "jkl": ["abc", "def", "efg"],\n "klm": ["abc", "def", "efg"], "lmn": ["abc", "def", "efg"] } }',
    ]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 10 at '/map' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 10 at '/map' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/map\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's key does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthMapKey_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{ "map" : {"a": ["abc", "def", "efg"], "bcd": ["abc", "def", "efg"], "cde": ["abc", "def", "efg"]} }',
    ]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 1 at '/map' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 1 at '/map' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/map\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's key does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthMapKey_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{ "map" : {"abcdefghijklmnopqrstuvwxyz": ["abc", "def", "efg"], "bcd": ["abc", "def", "efg"], "cde": ["abc", "def", "efg"]} }',
    ]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 26 at '/map' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 26 at '/map' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/map\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's value does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthMapValue_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : {"abc": ["def"], "bcd": ["abc", "def", "efg"], "cde": ["abc", "def", "efg"]} }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 1 at '/map/abc' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 1 at '/map/abc' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/map/abc\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's value does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthMapValue_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLength: testFunction as MalformedLength<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLength",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{ "map" : {"abc": ["def", "efg", "fgh", "def", "efg", "fgh", "def", "efg", "fgh", "def"],\n "bcd": ["abc", "def", "efg"],\n "cde": ["abc", "def", "efg"]} }',
    ]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 10 at '/map/abc' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 10 at '/map/abc' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/map/abc\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a blob member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthBlobOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLengthOverride: testFunction as MalformedLengthOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLengthOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : "YWJj" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 3 at '/blob' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 3 at '/blob' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\", \"path\": \"/blob\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a blob member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthBlobOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLengthOverride: testFunction as MalformedLengthOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLengthOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : "YWJjZGVmZw==" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 7 at '/blob' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 7 at '/blob' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\", \"path\": \"/blob\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthStringOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLengthOverride: testFunction as MalformedLengthOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLengthOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "abc" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 3 at '/string' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 3 at '/string' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthStringOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLengthOverride: testFunction as MalformedLengthOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLengthOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "abcdefg" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 7 at '/string' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 7 at '/string' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthStringOverride_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLengthOverride: testFunction as MalformedLengthOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLengthOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "👍👍👍" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 3 at '/string' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 3 at '/string' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthMinStringOverride:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLengthOverride: testFunction as MalformedLengthOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLengthOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "minString" : "abc" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 3 at '/minString' failed to satisfy constraint: Member must have length greater than or equal to 4\",
    \"fieldList\" : [{\"message\": \"Value with length 3 at '/minString' failed to satisfy constraint: Member must have length greater than or equal to 4\", \"path\": \"/minString\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthMaxStringOverride:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLengthOverride: testFunction as MalformedLengthOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLengthOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "maxString" : "abcdefg" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 7 at '/maxString' failed to satisfy constraint: Member must have length less than or equal to 6\",
    \"fieldList\" : [{\"message\": \"Value with length 7 at '/maxString' failed to satisfy constraint: Member must have length less than or equal to 6\", \"path\": \"/maxString\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthListOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLengthOverride: testFunction as MalformedLengthOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLengthOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "list" : ["abc", "def", "ghi"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 3 at '/list' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 3 at '/list' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\", \"path\": \"/list\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthListOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLengthOverride: testFunction as MalformedLengthOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLengthOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "list" : ["abc", "abc", "abc", "abc", "abc", "abc", "abc"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 7 at '/list' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 7 at '/list' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\", \"path\": \"/list\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthMapOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLengthOverride: testFunction as MalformedLengthOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLengthOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{ "map" : {"abc": ["def", "efg", "fgh"], "bcd": ["abc", "def", "efg"], "def": ["abc", "def", "efg"]} }',
    ]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 3 at '/map' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 3 at '/map' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\", \"path\": \"/map\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member does not fit within length bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthMapOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLengthOverride: testFunction as MalformedLengthOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLengthOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{ "map" : {"abc": ["abc", "def", "efg"], "bcd": ["abc", "def", "efg"],\n "cde": ["abc", "def", "efg"], "def": ["abc", "def", "efg"],\n "efg": ["abc", "def", "efg"], "fgh": ["abc", "def", "efg"],\n "ghi": ["abc", "def", "efg"] } }',
    ]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 7 at '/map' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 7 at '/map' failed to satisfy constraint: Member must have length between 4 and 6, inclusive\", \"path\": \"/map\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a required member has no value in the query string,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedLengthQueryStringNoValue:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedLengthQueryString: testFunction as MalformedLengthQueryString<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedLengthQueryString",
    query: {
      string: [""],
    },
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(["{}"]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value with length 0 at '/string' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value with length 0 at '/string' failed to satisfy constraint: Member must have length between 2 and 8, inclusive\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternString_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPattern: testFunction as MalformedPattern<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPattern",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "ABC" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/string' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/string' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternString_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPattern: testFunction as MalformedPattern<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPattern",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "xyz" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/string' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/string' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When the specified pattern is susceptible to ReDOS, the service will not
 * hang indefinitely while evaluating the pattern
 */
it.skip("RestJsonMalformedPatternReDOSString:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPattern: testFunction as MalformedPattern<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPattern",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{ "evilString" : "000000000000000000000000000000000000000000000000000000000000000000000000000000000000!" }',
    ]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value 000000000000000000000000000000000000000000000000000000000000000000000000000000000000! at '/evilString' failed to satisfy constraint: Member must satisfy regular expression pattern: ^([0-9]+)+$$\",
    \"fieldList\" : [{\"message\": \"Value 000000000000000000000000000000000000000000000000000000000000000000000000000000000000! at '/evilString' failed to satisfy constraint: Member must satisfy regular expression pattern: ^([0-9]+)+$$\", \"path\": \"/evilString\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list member value does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternList_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPattern: testFunction as MalformedPattern<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPattern",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "list" : ["ABC"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/list/0' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/list/0' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\", \"path\": \"/list/0\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list member value does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternList_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPattern: testFunction as MalformedPattern<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPattern",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "list" : ["xyz"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/list/0' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/list/0' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\", \"path\": \"/list/0\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's key does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternMapKey_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPattern: testFunction as MalformedPattern<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPattern",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : { "ABC" : "abc" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/map' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/map' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\", \"path\": \"/map\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's key does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternMapKey_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPattern: testFunction as MalformedPattern<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPattern",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : { "xyz" : "abc" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/map' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/map' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\", \"path\": \"/map\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's value does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternMapValue_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPattern: testFunction as MalformedPattern<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPattern",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : { "abc": "ABC" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/map/abc' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/map/abc' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\", \"path\": \"/map/abc\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's value does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternMapValue_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPattern: testFunction as MalformedPattern<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPattern",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : { "abc": "xyz" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/map/abc' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/map/abc' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\", \"path\": \"/map/abc\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a union member's value does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternUnion_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPattern: testFunction as MalformedPattern<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPattern",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "union" : { "first": "ABC" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/union/first' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/union/first' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\", \"path\": \"/union/first\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a union member's value does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternUnion_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPattern: testFunction as MalformedPattern<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPattern",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "union" : { "first": "xyz" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/union/first' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/union/first' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\", \"path\": \"/union/first\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternStringOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPatternOverride: testFunction as MalformedPatternOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPatternOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "abc" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/string' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/string' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string member does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternStringOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPatternOverride: testFunction as MalformedPatternOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPatternOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "xyz" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/string' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/string' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list member value does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternListOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPatternOverride: testFunction as MalformedPatternOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPatternOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "list" : ["abc"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/list/0' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/list/0' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\", \"path\": \"/list/0\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list member value does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternListOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPatternOverride: testFunction as MalformedPatternOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPatternOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "list" : ["xyz"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/list/0' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/list/0' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\", \"path\": \"/list/0\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's key does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternMapKeyOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPatternOverride: testFunction as MalformedPatternOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPatternOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : { "abc" : "ghi" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/map' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/map' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\", \"path\": \"/map\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's key does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternMapKeyOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPatternOverride: testFunction as MalformedPatternOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPatternOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : { "xyz" : "ghi" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/map' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/map' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\", \"path\": \"/map\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's value does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternMapValueOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPatternOverride: testFunction as MalformedPatternOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPatternOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : { "ghi": "abc" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/map/ghi' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/map/ghi' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\", \"path\": \"/map/ghi\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a map member's value does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternMapValueOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPatternOverride: testFunction as MalformedPatternOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPatternOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "map" : { "ghi": "xyz" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/map/ghi' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/map/ghi' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\", \"path\": \"/map/ghi\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a union member's value does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternUnionOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPatternOverride: testFunction as MalformedPatternOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPatternOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "union" : { "first": "abc" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/union/first' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/union/first' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\", \"path\": \"/union/first\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a union member's value does not match the specified pattern,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedPatternUnionOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedPatternOverride: testFunction as MalformedPatternOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedPatternOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "union" : { "first": "xyz" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/union/first' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/union/first' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[g-m]+$\", \"path\": \"/union/first\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a byte member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeByte_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byte" : 1 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/byte' failed to satisfy constraint: Member must be between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/byte' failed to satisfy constraint: Member must be between 2 and 8, inclusive\", \"path\": \"/byte\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a byte member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeByte_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byte" : 9 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/byte' failed to satisfy constraint: Member must be between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/byte' failed to satisfy constraint: Member must be between 2 and 8, inclusive\", \"path\": \"/byte\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a byte member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMinByte:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "minByte" : 1 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/minByte' failed to satisfy constraint: Member must be greater than or equal to 2\",
    \"fieldList\" : [{\"message\": \"Value at '/minByte' failed to satisfy constraint: Member must be greater than or equal to 2\", \"path\": \"/minByte\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a byte member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMaxByte:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "maxByte" : 9 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/maxByte' failed to satisfy constraint: Member must be less than or equal to 8\",
    \"fieldList\" : [{\"message\": \"Value at '/maxByte' failed to satisfy constraint: Member must be less than or equal to 8\", \"path\": \"/maxByte\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a float member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeFloat_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "float" : 2.1 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/float' failed to satisfy constraint: Member must be between 2.2 and 8.8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/float' failed to satisfy constraint: Member must be between 2.2 and 8.8, inclusive\", \"path\": \"/float\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a float member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeFloat_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "float" : 8.9 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/float' failed to satisfy constraint: Member must be between 2.2 and 8.8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/float' failed to satisfy constraint: Member must be between 2.2 and 8.8, inclusive\", \"path\": \"/float\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a float member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMinFloat:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "minFloat" : 2.1 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/minFloat' failed to satisfy constraint: Member must be greater than or equal to 2.2\",
    \"fieldList\" : [{\"message\": \"Value at '/minFloat' failed to satisfy constraint: Member must be greater than or equal to 2.2\", \"path\": \"/minFloat\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a float member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMaxFloat:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "maxFloat" : 8.9 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/maxFloat' failed to satisfy constraint: Member must be less than or equal to 8.8\",
    \"fieldList\" : [{\"message\": \"Value at '/maxFloat' failed to satisfy constraint: Member must be less than or equal to 8.8\", \"path\": \"/maxFloat\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a short member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeShort_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "short" : 1 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/short' failed to satisfy constraint: Member must be between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/short' failed to satisfy constraint: Member must be between 2 and 8, inclusive\", \"path\": \"/short\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a short member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeShort_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "short" : 9 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/short' failed to satisfy constraint: Member must be between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/short' failed to satisfy constraint: Member must be between 2 and 8, inclusive\", \"path\": \"/short\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a short member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMinShort:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "minShort" : 1 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/minShort' failed to satisfy constraint: Member must be greater than or equal to 2\",
    \"fieldList\" : [{\"message\": \"Value at '/minShort' failed to satisfy constraint: Member must be greater than or equal to 2\", \"path\": \"/minShort\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a short member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMaxShort:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "maxShort" : 9 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/maxShort' failed to satisfy constraint: Member must be less than or equal to 8\",
    \"fieldList\" : [{\"message\": \"Value at '/maxShort' failed to satisfy constraint: Member must be less than or equal to 8\", \"path\": \"/maxShort\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a integer member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeInteger_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integer" : 1 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/integer' failed to satisfy constraint: Member must be between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/integer' failed to satisfy constraint: Member must be between 2 and 8, inclusive\", \"path\": \"/integer\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a integer member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeInteger_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integer" : 9 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/integer' failed to satisfy constraint: Member must be between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/integer' failed to satisfy constraint: Member must be between 2 and 8, inclusive\", \"path\": \"/integer\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a integer member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMinInteger:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "minInteger" : 1 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/minInteger' failed to satisfy constraint: Member must be greater than or equal to 2\",
    \"fieldList\" : [{\"message\": \"Value at '/minInteger' failed to satisfy constraint: Member must be greater than or equal to 2\", \"path\": \"/minInteger\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a integer member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMaxInteger:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "maxInteger" : 9 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/maxInteger' failed to satisfy constraint: Member must be less than or equal to 8\",
    \"fieldList\" : [{\"message\": \"Value at '/maxInteger' failed to satisfy constraint: Member must be less than or equal to 8\", \"path\": \"/maxInteger\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a long member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeLong_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "long" : 1 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/long' failed to satisfy constraint: Member must be between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/long' failed to satisfy constraint: Member must be between 2 and 8, inclusive\", \"path\": \"/long\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a long member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeLong_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "long" : 9 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/long' failed to satisfy constraint: Member must be between 2 and 8, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/long' failed to satisfy constraint: Member must be between 2 and 8, inclusive\", \"path\": \"/long\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a long member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMinLong:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "minLong" : 1 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/minLong' failed to satisfy constraint: Member must be greater than or equal to 2\",
    \"fieldList\" : [{\"message\": \"Value at '/minLong' failed to satisfy constraint: Member must be greater than or equal to 2\", \"path\": \"/minLong\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a long member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMaxLong:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRange: testFunction as MalformedRange<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRange",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "maxLong" : 9 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/maxLong' failed to satisfy constraint: Member must be less than or equal to 8\",
    \"fieldList\" : [{\"message\": \"Value at '/maxLong' failed to satisfy constraint: Member must be less than or equal to 8\", \"path\": \"/maxLong\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a byte member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeByteOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byte" : 3 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/byte' failed to satisfy constraint: Member must be between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/byte' failed to satisfy constraint: Member must be between 4 and 6, inclusive\", \"path\": \"/byte\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a byte member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeByteOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byte" : 7 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/byte' failed to satisfy constraint: Member must be between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/byte' failed to satisfy constraint: Member must be between 4 and 6, inclusive\", \"path\": \"/byte\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a byte member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMinByteOverride:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "minByte" : 3 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/minByte' failed to satisfy constraint: Member must be greater than or equal to 4\",
    \"fieldList\" : [{\"message\": \"Value at '/minByte' failed to satisfy constraint: Member must be greater than or equal to 4\", \"path\": \"/minByte\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a byte member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMaxByteOverride:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "maxByte" : 7 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/maxByte' failed to satisfy constraint: Member must be less than or equal to 6\",
    \"fieldList\" : [{\"message\": \"Value at '/maxByte' failed to satisfy constraint: Member must be less than or equal to 6\", \"path\": \"/maxByte\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a float member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeFloatOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "float" : 4.3 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/float' failed to satisfy constraint: Member must be between 4.4 and 6.6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/float' failed to satisfy constraint: Member must be between 4.4 and 6.6, inclusive\", \"path\": \"/float\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a float member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeFloatOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "float" : 6.7 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/float' failed to satisfy constraint: Member must be between 4.4 and 6.6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/float' failed to satisfy constraint: Member must be between 4.4 and 6.6, inclusive\", \"path\": \"/float\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a float member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMinFloatOverride:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "minFloat" : 4.3 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/minFloat' failed to satisfy constraint: Member must be greater than or equal to 4.4\",
    \"fieldList\" : [{\"message\": \"Value at '/minFloat' failed to satisfy constraint: Member must be greater than or equal to 4.4\", \"path\": \"/minFloat\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a float member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMaxFloatOverride:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "maxFloat" : 6.7 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/maxFloat' failed to satisfy constraint: Member must be less than or equal to 6.6\",
    \"fieldList\" : [{\"message\": \"Value at '/maxFloat' failed to satisfy constraint: Member must be less than or equal to 6.6\", \"path\": \"/maxFloat\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a short member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeShortOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "short" : 3 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/short' failed to satisfy constraint: Member must be between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/short' failed to satisfy constraint: Member must be between 4 and 6, inclusive\", \"path\": \"/short\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a short member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeShortOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "short" : 7 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/short' failed to satisfy constraint: Member must be between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/short' failed to satisfy constraint: Member must be between 4 and 6, inclusive\", \"path\": \"/short\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a short member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMinShortOverride:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "minShort" : 3 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/minShort' failed to satisfy constraint: Member must be greater than or equal to 4\",
    \"fieldList\" : [{\"message\": \"Value at '/minShort' failed to satisfy constraint: Member must be greater than or equal to 4\", \"path\": \"/minShort\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a short member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMaxShortOverride:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "maxShort" : 7 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/maxShort' failed to satisfy constraint: Member must be less than or equal to 6\",
    \"fieldList\" : [{\"message\": \"Value at '/maxShort' failed to satisfy constraint: Member must be less than or equal to 6\", \"path\": \"/maxShort\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a integer member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeIntegerOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integer" : 3 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/integer' failed to satisfy constraint: Member must be between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/integer' failed to satisfy constraint: Member must be between 4 and 6, inclusive\", \"path\": \"/integer\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a integer member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeIntegerOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integer" : 7 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/integer' failed to satisfy constraint: Member must be between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/integer' failed to satisfy constraint: Member must be between 4 and 6, inclusive\", \"path\": \"/integer\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a integer member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMinIntegerOverride:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "minInteger" : 3 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/minInteger' failed to satisfy constraint: Member must be greater than or equal to 4\",
    \"fieldList\" : [{\"message\": \"Value at '/minInteger' failed to satisfy constraint: Member must be greater than or equal to 4\", \"path\": \"/minInteger\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a integer member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMaxIntegerOverride:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "maxInteger" : 7 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/maxInteger' failed to satisfy constraint: Member must be less than or equal to 6\",
    \"fieldList\" : [{\"message\": \"Value at '/maxInteger' failed to satisfy constraint: Member must be less than or equal to 6\", \"path\": \"/maxInteger\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a long member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeLongOverride_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "long" : 3 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/long' failed to satisfy constraint: Member must be between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/long' failed to satisfy constraint: Member must be between 4 and 6, inclusive\", \"path\": \"/long\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a long member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeLongOverride_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "long" : 7 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/long' failed to satisfy constraint: Member must be between 4 and 6, inclusive\",
    \"fieldList\" : [{\"message\": \"Value at '/long' failed to satisfy constraint: Member must be between 4 and 6, inclusive\", \"path\": \"/long\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a long member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMinLongOverride:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "minLong" : 3 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/minLong' failed to satisfy constraint: Member must be greater than or equal to 4\",
    \"fieldList\" : [{\"message\": \"Value at '/minLong' failed to satisfy constraint: Member must be greater than or equal to 4\", \"path\": \"/minLong\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a long member does not fit within range bounds,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRangeMaxLongOverride:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRangeOverride: testFunction as MalformedRangeOverride<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRangeOverride",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "maxLong" : 7 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/maxLong' failed to satisfy constraint: Member must be less than or equal to 6\",
    \"fieldList\" : [{\"message\": \"Value at '/maxLong' failed to satisfy constraint: Member must be less than or equal to 6\", \"path\": \"/maxLong\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a required member is not set in the message body,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRequiredBodyUnset:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRequired: testFunction as MalformedRequired<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRequired",
    query: {
      stringInQuery: ["abc"],
    },
    headers: {
      "content-type": "application/json",
      "string-in-headers": "abc",
    },
    body: Readable.from(["{  }"]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/string' failed to satisfy constraint: Member must not be null\",
    \"fieldList\" : [{\"message\": \"Value at '/string' failed to satisfy constraint: Member must not be null\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a required member is set to null in the message body,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRequiredBodyExplicitNull:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRequired: testFunction as MalformedRequired<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRequired",
    query: {
      stringInQuery: ["abc"],
    },
    headers: {
      "content-type": "application/json",
      "string-in-headers": "abc",
    },
    body: Readable.from(['{ "string": null }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/string' failed to satisfy constraint: Member must not be null\",
    \"fieldList\" : [{\"message\": \"Value at '/string' failed to satisfy constraint: Member must not be null\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a required member is not set in headers,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedRequiredHeaderUnset:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedRequired: testFunction as MalformedRequired<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedRequired",
    query: {
      stringInQuery: ["abc"],
    },
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string": "abc" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/stringInHeader' failed to satisfy constraint: Member must not be null\",
    \"fieldList\" : [{\"message\": \"Value at '/stringInHeader' failed to satisfy constraint: Member must not be null\", \"path\": \"/stringInHeader\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a blob list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsBlobList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blobList" : ["YQ==", "YQ=="] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/blobList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/blobList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/blobList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a boolean list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsBooleanList_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanList" : [true, true] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/booleanList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/booleanList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/booleanList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a boolean list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsBooleanList_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanList" : [false, false] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/booleanList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/booleanList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/booleanList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a string list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsStringList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "stringList" : ["abc", "abc"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/stringList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/stringList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/stringList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a byte list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsByteList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteList" : [1, 1] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/byteList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/byteList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/byteList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a short list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsShortList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortList" : [2, 2] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/shortList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/shortList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/shortList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When an integer list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsIntegerList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerList" : [3, 3] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/integerList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/integerList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/integerList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When an integer list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsLongList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longList" : [4, 4] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/longList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/longList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/longList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a timestamp list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsTimestampList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestampList" : [1676660607, 1676660607] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/timestampList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/timestampList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/timestampList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a date-time timestamp list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsDateTimeList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "dateTimeList" : ["1985-04-12T23:20:50.52Z", "1985-04-12T23:20:50.52Z"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/dateTimeList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/dateTimeList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/dateTimeList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a http-date timestamp list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsHttpDateList_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "httpDateList" : ["Tue, 29 Apr 2014 18:30:38 GMT", "Tue, 29 Apr 2014 18:30:38 GMT"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/httpDateList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/httpDateList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/httpDateList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When an enum list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsEnumList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "enumList" : ["Foo", "Foo"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/enumList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/enumList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/enumList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When an intEnum list contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsIntEnumList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "intEnumList" : [3, 3] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/intEnumList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/intEnumList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/intEnumList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When an list of lists contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsListList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "listList" : [["foo","bar"], ["foo","bar"]] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/listList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/listList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/listList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When an list of structures contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsStructureList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "structureList" : [{"hi": "hello"}, {"hi": "hello"}] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/structureList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/structureList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/structureList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a list of structures does not contain required keys,
 * the response should be a 400 ValidationException and not
 * a 500 error.
 */
it("RestJsonMalformedUniqueItemsStructureMissingKeyList:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "structureListWithNoKey" : [{"hi2": "bar"}] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/structureListWithNoKey/0/hi' failed to satisfy constraint: Member must not be null\",
    \"fieldList\" : [{\"message\": \"Value at '/structureListWithNoKey/0/hi' failed to satisfy constraint: Member must not be null\", \"path\": \"/structureListWithNoKey/0/hi\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When an list of unions contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsUnionList_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "unionList" : [{"string": "foo"}, {"string": "foo"}] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/unionList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/unionList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/unionList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When an list of unions contains non-unique values,
 * the response should be a 400 ValidationException.
 */
it("RestJsonMalformedUniqueItemsUnionList_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    MalformedUniqueItems: testFunction as MalformedUniqueItems<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/MalformedUniqueItems",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "unionList" : [{"integer": 1}, {"integer": 1}] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/unionList' failed to satisfy constraint: Member must have unique values\",
    \"fieldList\" : [{\"message\": \"Value at '/unionList' failed to satisfy constraint: Member must have unique values\", \"path\": \"/unionList\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Validation should work with recursive structures.
 */
it("RestJsonRecursiveStructuresValidate:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonValidationService<{}>> = {
    RecursiveStructures: testFunction as RecursiveStructures<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/RecursiveStructures",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "union" : {\n    "union" : {\n        "union" : { "string" : "abc" }\n    }\n  }\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      union: {
        union: {
          union: {
            string: "abc",
          },
        },
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * When a value deeply nested in a recursive structure does not meet constraints,
 * a 400 ValidationException is returned.
 */
it("RestJsonMalformedRecursiveStructures:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    RecursiveStructures: testFunction as RecursiveStructures<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/RecursiveStructures",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "union" : {\n    "union" : {\n        "union" : { "string" : "XYZ" }\n     }\n  }\n}']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/union/union/union/string' failed to satisfy constraint: Member must satisfy enum value set: [abc, def]\",
    \"fieldList\" : [{\"message\": \"Value at '/union/union/union/string' failed to satisfy constraint: Member must satisfy enum value set: [abc, def]\", \"path\": \"/union/union/union/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * When a sensitive member fails validation, the resultant
 * ValidationException will omit the value of the input.
 */
it("RestJsonMalformedPatternSensitiveString:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonValidationService<{}>> = {
    SensitiveValidation: testFunction as SensitiveValidation<{}>,
  };
  const handler = getRestJsonValidationServiceHandler(testService as RestJsonValidationService<{}>);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/SensitiveValidation",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "string" : "ABC" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ValidationException");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{ \"message\" : \"1 validation error detected. Value at '/string' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\",
    \"fieldList\" : [{\"message\": \"Value at '/string' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[a-m]+$\", \"path\": \"/string\"}]}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Returns a map of key names that were un-equal to value objects showing the
 * discrepancies between the components.
 */
const compareEquivalentJsonBodies = (expectedBody: string, generatedBody: string): Object => {
  const expectedParts = JSON.parse(expectedBody);
  const generatedParts = JSON.parse(generatedBody);

  return compareParts(expectedParts, generatedParts);
};
