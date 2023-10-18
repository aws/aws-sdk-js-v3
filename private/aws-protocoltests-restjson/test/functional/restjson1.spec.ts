// smithy-typescript generated code
import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { buildQueryString } from "@smithy/querystring-builder";
import { Encoder as __Encoder } from "@smithy/types";
import { HeaderBag, HttpHandlerOptions } from "@smithy/types";
import { Readable } from "stream";

import { AllQueryStringTypesCommand } from "../../src/commands/AllQueryStringTypesCommand";
import { ConstantAndVariableQueryStringCommand } from "../../src/commands/ConstantAndVariableQueryStringCommand";
import { ConstantQueryStringCommand } from "../../src/commands/ConstantQueryStringCommand";
import { DatetimeOffsetsCommand } from "../../src/commands/DatetimeOffsetsCommand";
import { DocumentTypeAsPayloadCommand } from "../../src/commands/DocumentTypeAsPayloadCommand";
import { DocumentTypeCommand } from "../../src/commands/DocumentTypeCommand";
import { EmptyInputAndEmptyOutputCommand } from "../../src/commands/EmptyInputAndEmptyOutputCommand";
import { EndpointOperationCommand } from "../../src/commands/EndpointOperationCommand";
import { EndpointWithHostLabelOperationCommand } from "../../src/commands/EndpointWithHostLabelOperationCommand";
import { FractionalSecondsCommand } from "../../src/commands/FractionalSecondsCommand";
import { GreetingWithErrorsCommand } from "../../src/commands/GreetingWithErrorsCommand";
import { HostWithPathOperationCommand } from "../../src/commands/HostWithPathOperationCommand";
import { HttpChecksumRequiredCommand } from "../../src/commands/HttpChecksumRequiredCommand";
import { HttpEnumPayloadCommand } from "../../src/commands/HttpEnumPayloadCommand";
import { HttpPayloadTraitsCommand } from "../../src/commands/HttpPayloadTraitsCommand";
import { HttpPayloadTraitsWithMediaTypeCommand } from "../../src/commands/HttpPayloadTraitsWithMediaTypeCommand";
import { HttpPayloadWithStructureCommand } from "../../src/commands/HttpPayloadWithStructureCommand";
import { HttpPayloadWithUnionCommand } from "../../src/commands/HttpPayloadWithUnionCommand";
import { HttpPrefixHeadersCommand } from "../../src/commands/HttpPrefixHeadersCommand";
import { HttpPrefixHeadersInResponseCommand } from "../../src/commands/HttpPrefixHeadersInResponseCommand";
import { HttpRequestWithFloatLabelsCommand } from "../../src/commands/HttpRequestWithFloatLabelsCommand";
import { HttpRequestWithGreedyLabelInPathCommand } from "../../src/commands/HttpRequestWithGreedyLabelInPathCommand";
import { HttpRequestWithLabelsAndTimestampFormatCommand } from "../../src/commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import { HttpRequestWithLabelsCommand } from "../../src/commands/HttpRequestWithLabelsCommand";
import { HttpRequestWithRegexLiteralCommand } from "../../src/commands/HttpRequestWithRegexLiteralCommand";
import { HttpResponseCodeCommand } from "../../src/commands/HttpResponseCodeCommand";
import { HttpStringPayloadCommand } from "../../src/commands/HttpStringPayloadCommand";
import { IgnoreQueryParamsInResponseCommand } from "../../src/commands/IgnoreQueryParamsInResponseCommand";
import { InputAndOutputWithHeadersCommand } from "../../src/commands/InputAndOutputWithHeadersCommand";
import { JsonBlobsCommand } from "../../src/commands/JsonBlobsCommand";
import { JsonEnumsCommand } from "../../src/commands/JsonEnumsCommand";
import { JsonIntEnumsCommand } from "../../src/commands/JsonIntEnumsCommand";
import { JsonListsCommand } from "../../src/commands/JsonListsCommand";
import { JsonMapsCommand } from "../../src/commands/JsonMapsCommand";
import { JsonTimestampsCommand } from "../../src/commands/JsonTimestampsCommand";
import { JsonUnionsCommand } from "../../src/commands/JsonUnionsCommand";
import { MediaTypeHeaderCommand } from "../../src/commands/MediaTypeHeaderCommand";
import { NoInputAndNoOutputCommand } from "../../src/commands/NoInputAndNoOutputCommand";
import { NoInputAndOutputCommand } from "../../src/commands/NoInputAndOutputCommand";
import { NullAndEmptyHeadersClientCommand } from "../../src/commands/NullAndEmptyHeadersClientCommand";
import { OmitsNullSerializesEmptyStringCommand } from "../../src/commands/OmitsNullSerializesEmptyStringCommand";
import { OmitsSerializingEmptyListsCommand } from "../../src/commands/OmitsSerializingEmptyListsCommand";
import { PostPlayerActionCommand } from "../../src/commands/PostPlayerActionCommand";
import { PostUnionWithJsonNameCommand } from "../../src/commands/PostUnionWithJsonNameCommand";
import { PutWithContentEncodingCommand } from "../../src/commands/PutWithContentEncodingCommand";
import { QueryIdempotencyTokenAutoFillCommand } from "../../src/commands/QueryIdempotencyTokenAutoFillCommand";
import { QueryParamsAsStringListMapCommand } from "../../src/commands/QueryParamsAsStringListMapCommand";
import { QueryPrecedenceCommand } from "../../src/commands/QueryPrecedenceCommand";
import { RecursiveShapesCommand } from "../../src/commands/RecursiveShapesCommand";
import { SimpleScalarPropertiesCommand } from "../../src/commands/SimpleScalarPropertiesCommand";
import { StreamingTraitsCommand } from "../../src/commands/StreamingTraitsCommand";
import { StreamingTraitsRequireLengthCommand } from "../../src/commands/StreamingTraitsRequireLengthCommand";
import { StreamingTraitsWithMediaTypeCommand } from "../../src/commands/StreamingTraitsWithMediaTypeCommand";
import { TestBodyStructureCommand } from "../../src/commands/TestBodyStructureCommand";
import { TestNoPayloadCommand } from "../../src/commands/TestNoPayloadCommand";
import { TestPayloadBlobCommand } from "../../src/commands/TestPayloadBlobCommand";
import { TestPayloadStructureCommand } from "../../src/commands/TestPayloadStructureCommand";
import { TimestampFormatHeadersCommand } from "../../src/commands/TimestampFormatHeadersCommand";
import { UnitInputAndOutputCommand } from "../../src/commands/UnitInputAndOutputCommand";
import { RestJsonProtocolClient } from "../../src/RestJsonProtocolClient";

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
 * Serializes query string parameters with all supported types
 */
it("RestJsonAllQueryStringTypes:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new AllQueryStringTypesCommand({
    queryString: "Hello there",

    queryStringList: ["a", "b", "c"],

    queryStringSet: ["a", "b", "c"],

    queryByte: 1,

    queryShort: 2,

    queryInteger: 3,

    queryIntegerList: [
      1,

      2,

      3,
    ],

    queryIntegerSet: [
      1,

      2,

      3,
    ],

    queryLong: 4,

    queryFloat: 1.1,

    queryDouble: 1.1,

    queryDoubleList: [
      1.1,

      2.1,

      3.1,
    ],

    queryBoolean: true,

    queryBooleanList: [true, false, true],

    queryTimestamp: new Date(1000),

    queryTimestampList: [new Date(1000), new Date(2000), new Date(3000)],

    queryEnum: "Foo",

    queryEnumList: ["Foo", "Baz", "Bar"],

    queryIntegerEnum: 1,

    queryIntegerEnumList: [
      1,

      2,

      3,
    ],

    queryParamsMapOfStringList: {
      String: ["Hello there"],

      StringList: ["a", "b", "c"],

      StringSet: ["a", "b", "c"],

      Byte: ["1"],

      Short: ["2"],

      Integer: ["3"],

      IntegerList: ["1", "2", "3"],

      IntegerSet: ["1", "2", "3"],

      Long: ["4"],

      Float: ["1.1"],

      Double: ["1.1"],

      DoubleList: ["1.1", "2.1", "3.1"],

      Boolean: ["true"],

      BooleanList: ["true", "false", "true"],

      Timestamp: ["1970-01-01T00:00:01Z"],

      TimestampList: ["1970-01-01T00:00:01Z", "1970-01-01T00:00:02Z", "1970-01-01T00:00:03Z"],

      Enum: ["Foo"],

      EnumList: ["Foo", "Baz", "Bar"],

      IntegerEnum: ["1"],

      IntegerEnumList: ["1", "2", "3"],
    } as any,
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
    expect(r.path).toBe("/AllQueryStringTypesInput");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("String=Hello%20there");
    expect(queryString).toContain("StringList=a");
    expect(queryString).toContain("StringList=b");
    expect(queryString).toContain("StringList=c");
    expect(queryString).toContain("StringSet=a");
    expect(queryString).toContain("StringSet=b");
    expect(queryString).toContain("StringSet=c");
    expect(queryString).toContain("Byte=1");
    expect(queryString).toContain("Short=2");
    expect(queryString).toContain("Integer=3");
    expect(queryString).toContain("IntegerList=1");
    expect(queryString).toContain("IntegerList=2");
    expect(queryString).toContain("IntegerList=3");
    expect(queryString).toContain("IntegerSet=1");
    expect(queryString).toContain("IntegerSet=2");
    expect(queryString).toContain("IntegerSet=3");
    expect(queryString).toContain("Long=4");
    expect(queryString).toContain("Float=1.1");
    expect(queryString).toContain("Double=1.1");
    expect(queryString).toContain("DoubleList=1.1");
    expect(queryString).toContain("DoubleList=2.1");
    expect(queryString).toContain("DoubleList=3.1");
    expect(queryString).toContain("Boolean=true");
    expect(queryString).toContain("BooleanList=true");
    expect(queryString).toContain("BooleanList=false");
    expect(queryString).toContain("BooleanList=true");
    expect(queryString).toContain("Timestamp=1970-01-01T00%3A00%3A01Z");
    expect(queryString).toContain("TimestampList=1970-01-01T00%3A00%3A01Z");
    expect(queryString).toContain("TimestampList=1970-01-01T00%3A00%3A02Z");
    expect(queryString).toContain("TimestampList=1970-01-01T00%3A00%3A03Z");
    expect(queryString).toContain("Enum=Foo");
    expect(queryString).toContain("EnumList=Foo");
    expect(queryString).toContain("EnumList=Baz");
    expect(queryString).toContain("EnumList=Bar");
    expect(queryString).toContain("IntegerEnum=1");
    expect(queryString).toContain("IntegerEnumList=1");
    expect(queryString).toContain("IntegerEnumList=2");
    expect(queryString).toContain("IntegerEnumList=3");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Handles query string maps
 */
it("RestJsonQueryStringMap:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new AllQueryStringTypesCommand({
    queryParamsMapOfStringList: {
      QueryParamsStringKeyA: ["Foo"],

      QueryParamsStringKeyB: ["Bar"],
    } as any,
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
    expect(r.path).toBe("/AllQueryStringTypesInput");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("QueryParamsStringKeyA=Foo");
    expect(queryString).toContain("QueryParamsStringKeyB=Bar");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Handles escaping all required characters in the query string.
 */
it("RestJsonQueryStringEscaping:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new AllQueryStringTypesCommand({
    queryString: " %:/?#[]@!$&'()*+,;=😹",

    queryParamsMapOfStringList: {
      String: [" %:/?#[]@!$&'()*+,;=😹"],
    } as any,
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
    expect(r.path).toBe("/AllQueryStringTypesInput");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("String=%20%25%3A%2F%3F%23%5B%5D%40%21%24%26%27%28%29%2A%2B%2C%3B%3D%F0%9F%98%B9");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Supports handling NaN float query values.
 */
it("RestJsonSupportsNaNFloatQueryValues:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new AllQueryStringTypesCommand({
    queryFloat: NaN,

    queryDouble: NaN,

    queryParamsMapOfStringList: {
      Float: ["NaN"],

      Double: ["NaN"],
    } as any,
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
    expect(r.path).toBe("/AllQueryStringTypesInput");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("Float=NaN");
    expect(queryString).toContain("Double=NaN");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Supports handling Infinity float query values.
 */
it("RestJsonSupportsInfinityFloatQueryValues:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new AllQueryStringTypesCommand({
    queryFloat: Infinity,

    queryDouble: Infinity,

    queryParamsMapOfStringList: {
      Float: ["Infinity"],

      Double: ["Infinity"],
    } as any,
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
    expect(r.path).toBe("/AllQueryStringTypesInput");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("Float=Infinity");
    expect(queryString).toContain("Double=Infinity");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Supports handling -Infinity float query values.
 */
it("RestJsonSupportsNegativeInfinityFloatQueryValues:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new AllQueryStringTypesCommand({
    queryFloat: -Infinity,

    queryDouble: -Infinity,

    queryParamsMapOfStringList: {
      Float: ["-Infinity"],

      Double: ["-Infinity"],
    } as any,
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
    expect(r.path).toBe("/AllQueryStringTypesInput");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("Float=-Infinity");
    expect(queryString).toContain("Double=-Infinity");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Mixes constant and variable query string parameters
 */
it("RestJsonConstantAndVariableQueryStringMissingOneValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new ConstantAndVariableQueryStringCommand({
    baz: "bam",
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
    expect(r.path).toBe("/ConstantAndVariableQueryString");

    expect(r.query["maybeSet"]).toBeUndefined();

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("foo=bar");
    expect(queryString).toContain("baz=bam");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Mixes constant and variable query string parameters
 */
it("RestJsonConstantAndVariableQueryStringAllValues:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new ConstantAndVariableQueryStringCommand({
    baz: "bam",

    maybeSet: "yes",
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
    expect(r.path).toBe("/ConstantAndVariableQueryString");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("foo=bar");
    expect(queryString).toContain("baz=bam");
    expect(queryString).toContain("maybeSet=yes");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Includes constant query string parameters
 */
it("RestJsonConstantQueryString:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new ConstantQueryStringCommand({
    hello: "hi",
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
    expect(r.path).toBe("/ConstantQueryString/hi");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("foo=bar");
    expect(queryString).toContain("hello");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Ensures that clients can correctly parse datetime (timestamps) with offsets
 */
it("RestJsonDateTimeWithNegativeOffset:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `      {
                "datetime": "2019-12-16T22:48:18-01:00"
            }
      `
    ),
  });

  const params: any = {};
  const command = new DatetimeOffsetsCommand(params);

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
      datetime: new Date(1576540098000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that clients can correctly parse datetime (timestamps) with offsets
 */
it("RestJsonDateTimeWithPositiveOffset:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `      {
                "datetime": "2019-12-17T00:48:18+01:00"
            }
      `
    ),
  });

  const params: any = {};
  const command = new DatetimeOffsetsCommand(params);

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
      datetime: new Date(1576540098000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes document types as part of the JSON request payload with no escaping.
 */
it("DocumentTypeInputWithObject:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new DocumentTypeCommand({
    stringValue: "string",

    documentValue: {
      foo: "bar",
    },
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/DocumentType");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"stringValue\": \"string\",
        \"documentValue\": {
            \"foo\": \"bar\"
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes document types using a string.
 */
it("DocumentInputWithString:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new DocumentTypeCommand({
    stringValue: "string",

    documentValue: "hello",
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/DocumentType");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"stringValue\": \"string\",
        \"documentValue\": \"hello\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes document types using a number.
 */
it("DocumentInputWithNumber:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new DocumentTypeCommand({
    stringValue: "string",

    documentValue: 10,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/DocumentType");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"stringValue\": \"string\",
        \"documentValue\": 10
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes document types using a boolean.
 */
it("DocumentInputWithBoolean:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new DocumentTypeCommand({
    stringValue: "string",

    documentValue: true,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/DocumentType");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"stringValue\": \"string\",
        \"documentValue\": true
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes document types using a list.
 */
it("DocumentInputWithList:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new DocumentTypeCommand({
    stringValue: "string",

    documentValue: [
      true,

      "hi",

      [
        1,

        2,
      ],

      {
        foo: {
          baz: [3, 4],
        },
      },
    ],
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/DocumentType");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"stringValue\": \"string\",
        \"documentValue\": [
            true,
            \"hi\",
            [
                1,
                2
            ],
            {
                \"foo\": {
                    \"baz\": [
                        3,
                        4
                    ]
                }
            }
        ]
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes documents as part of the JSON response payload with no escaping.
 */
it("DocumentOutput:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "stringValue": "string",
          "documentValue": {
              "foo": "bar"
          }
      }`
    ),
  });

  const params: any = {};
  const command = new DocumentTypeCommand(params);

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
      stringValue: "string",

      documentValue: {
        foo: "bar",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Document types can be JSON scalars too.
 */
it("DocumentOutputString:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "stringValue": "string",
          "documentValue": "hello"
      }`
    ),
  });

  const params: any = {};
  const command = new DocumentTypeCommand(params);

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
      stringValue: "string",

      documentValue: "hello",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Document types can be JSON scalars too.
 */
it("DocumentOutputNumber:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "stringValue": "string",
          "documentValue": 10
      }`
    ),
  });

  const params: any = {};
  const command = new DocumentTypeCommand(params);

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
      stringValue: "string",

      documentValue: 10,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Document types can be JSON scalars too.
 */
it("DocumentOutputBoolean:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "stringValue": "string",
          "documentValue": false
      }`
    ),
  });

  const params: any = {};
  const command = new DocumentTypeCommand(params);

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
      stringValue: "string",

      documentValue: false,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Document types can be JSON arrays.
 */
it("DocumentOutputArray:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "stringValue": "string",
          "documentValue": [
              true,
              false
          ]
      }`
    ),
  });

  const params: any = {};
  const command = new DocumentTypeCommand(params);

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
      stringValue: "string",

      documentValue: [true, false],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes a document as the target of the httpPayload trait.
 */
it("DocumentTypeAsPayloadInput:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new DocumentTypeAsPayloadCommand({
    documentValue: {
      foo: "bar",
    },
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/DocumentTypeAsPayload");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"foo\": \"bar\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a document as the target of the httpPayload trait using a string.
 */
it("DocumentTypeAsPayloadInputString:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new DocumentTypeAsPayloadCommand({
    documentValue: "hello",
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/DocumentTypeAsPayload");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `\"hello\"`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a document as the target of the httpPayload trait.
 */
it("DocumentTypeAsPayloadOutput:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "foo": "bar"
      }`
    ),
  });

  const params: any = {};
  const command = new DocumentTypeAsPayloadCommand(params);

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
      documentValue: {
        foo: "bar",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes a document as a payload string.
 */
it("DocumentTypeAsPayloadOutputString:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `"hello"`
    ),
  });

  const params: any = {};
  const command = new DocumentTypeAsPayloadCommand(params);

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
      documentValue: "hello",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Clients should not serialize a JSON payload when no parameters
 * are given that are sent in the body. A service will tolerate
 * clients that omit a payload or that send a JSON object.
 */
it("RestJsonEmptyInputAndEmptyOutput:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new EmptyInputAndEmptyOutputCommand({} as any);
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
    expect(r.path).toBe("/EmptyInputAndEmptyOutput");

    expect(r.body).toBeFalsy();
  }
});

/**
 * As of January 2021, server implementations are expected to
 * respond with a JSON object regardless of if the output
 * parameters are empty.
 */
it("RestJsonEmptyInputAndEmptyOutput:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{}`
    ),
  });

  const params: any = {};
  const command = new EmptyInputAndEmptyOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * This test ensures that clients can gracefully handle
 * situations where a service omits a JSON payload entirely.
 */
it("RestJsonEmptyInputAndEmptyOutputJsonObjectOutput:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined, ``),
  });

  const params: any = {};
  const command = new EmptyInputAndEmptyOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * Operations can prepend to the given host if they define the
 * endpoint trait.
 */
it("RestJsonEndpointTrait:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    endpoint: "https://example.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new EndpointOperationCommand({});
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
    expect(r.path).toBe("/EndpointOperation");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Operations can prepend to the given host if they define the
 * endpoint trait, and can use the host label trait to define
 * further customization based on user input.
 */
it("RestJsonEndpointTraitWithHostLabel:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    endpoint: "https://example.com",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new EndpointWithHostLabelOperationCommand({
    label: "bar",
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/EndpointWithHostLabelOperation");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{\"label\": \"bar\"}`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that clients can correctly parse datetime timestamps with fractional seconds
 */
it("RestJsonDateTimeWithFractionalSeconds:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `      {
                "datetime": "2000-01-02T20:34:56.123Z"
            }
      `
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
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      datetime: new Date(9.46845296123e8000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that operations with errors successfully know how
 * to deserialize a successful response. As of January 2021,
 * server implementations are expected to respond with a
 * JSON object regardless of if the output parameters are
 * empty.
 */
it("RestJsonGreetingWithErrors:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-greeting": "Hello",
      },
      `{}`
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

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
      greeting: "Hello",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * This test is similar to RestJsonGreetingWithErrors, but it
 * ensures that clients can gracefully deal with a server
 * omitting a response payload.
 */
it("RestJsonGreetingWithErrorsNoPayload:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-greeting": "Hello",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

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
      greeting: "Hello",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes the X-Amzn-ErrorType header. For an example service, see Amazon EKS.
 */
it("RestJsonFooErrorUsingXAmznErrorType:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(false, 500, {
      "x-amzn-errortype": "FooError",
    }),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "FooError") {
      console.log(err);
      fail(`Expected a FooError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(500);
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Some X-Amzn-Errortype headers contain URLs. Clients need to split the URL on ':' and take only the first half of the string. For example, 'ValidationException:http://internal.amazon.com/coral/com.amazon.coral.validate/'
 * is to be interpreted as 'ValidationException'.
 *
 * For an example service see Amazon Polly.
 */
it("RestJsonFooErrorUsingXAmznErrorTypeWithUri:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(false, 500, {
      "x-amzn-errortype": "FooError:http://internal.amazon.com/coral/com.amazon.coral.validate/",
    }),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "FooError") {
      console.log(err);
      fail(`Expected a FooError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(500);
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * X-Amzn-Errortype might contain a URL and a namespace. Client should extract only the shape name. This is a pathalogical case that might not actually happen in any deployed AWS service.
 */
it("RestJsonFooErrorUsingXAmznErrorTypeWithUriAndNamespace:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(false, 500, {
      "x-amzn-errortype":
        "aws.protocoltests.restjson#FooError:http://internal.amazon.com/coral/com.amazon.coral.validate/",
    }),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "FooError") {
      console.log(err);
      fail(`Expected a FooError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(500);
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * This example uses the 'code' property in the output rather than X-Amzn-Errortype. Some services do this though it's preferable to send the X-Amzn-Errortype. Client implementations must first check for the X-Amzn-Errortype and then check for a top-level 'code' property.
 *
 * For example service see Amazon S3 Glacier.
 */
it("RestJsonFooErrorUsingCode:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/json",
      },
      `{
          "code": "FooError"
      }`
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "FooError") {
      console.log(err);
      fail(`Expected a FooError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(500);
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Some services serialize errors using code, and it might contain a namespace. Clients should just take the last part of the string after '#'.
 */
it("RestJsonFooErrorUsingCodeAndNamespace:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/json",
      },
      `{
          "code": "aws.protocoltests.restjson#FooError"
      }`
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "FooError") {
      console.log(err);
      fail(`Expected a FooError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(500);
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Some services serialize errors using code, and it might contain a namespace. It also might contain a URI. Clients should just take the last part of the string after '#' and before ":". This is a pathalogical case that might not occur in any deployed AWS service.
 */
it("RestJsonFooErrorUsingCodeUriAndNamespace:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/json",
      },
      `{
          "code": "aws.protocoltests.restjson#FooError:http://internal.amazon.com/coral/com.amazon.coral.validate/"
      }`
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "FooError") {
      console.log(err);
      fail(`Expected a FooError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(500);
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Some services serialize errors using __type.
 */
it("RestJsonFooErrorWithDunderType:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/json",
      },
      `{
          "__type": "FooError"
      }`
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "FooError") {
      console.log(err);
      fail(`Expected a FooError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(500);
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Some services serialize errors using __type, and it might contain a namespace. Clients should just take the last part of the string after '#'.
 */
it("RestJsonFooErrorWithDunderTypeAndNamespace:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/json",
      },
      `{
          "__type": "aws.protocoltests.restjson#FooError"
      }`
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "FooError") {
      console.log(err);
      fail(`Expected a FooError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(500);
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Some services serialize errors using __type, and it might contain a namespace. It also might contain a URI. Clients should just take the last part of the string after '#' and before ":". This is a pathalogical case that might not occur in any deployed AWS service.
 */
it("RestJsonFooErrorWithDunderTypeUriAndNamespace:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/json",
      },
      `{
          "__type": "aws.protocoltests.restjson#FooError:http://internal.amazon.com/coral/com.amazon.coral.validate/"
      }`
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (err.name !== "FooError") {
      console.log(err);
      fail(`Expected a FooError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(500);
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Serializes a complex error with no message member
 */
it("RestJsonComplexErrorWithNoMessage:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      403,
      {
        "x-amzn-errortype": "ComplexError",
        "x-header": "Header",
        "content-type": "application/json",
      },
      `{
          "TopLevel": "Top level",
          "Nested": {
              "Fooooo": "bar"
          }
      }`
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
    expect(r["$metadata"].httpStatusCode).toBe(403);
    const paramsToValidate: any = [
      {
        Header: "Header",

        TopLevel: "Top level",

        Nested: {
          Foo: "bar",
        },
      },
    ][0];
    Object.keys(paramsToValidate).forEach((param) => {
      expect(r[param]).toBeDefined();
      expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
    });
    return;
  }
  fail("Expected an exception to be thrown from response");
});

it("RestJsonEmptyComplexErrorWithNoMessage:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      403,
      {
        "x-amzn-errortype": "ComplexError",
        "content-type": "application/json",
      },
      `{}`
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
    expect(r["$metadata"].httpStatusCode).toBe(403);
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Parses simple JSON errors
 */
it("RestJsonInvalidGreetingError:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "x-amzn-errortype": "InvalidGreeting",
        "content-type": "application/json",
      },
      `{
          "Message": "Hi"
      }`
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
    expect(r["$metadata"].httpStatusCode).toBe(400);
    const paramsToValidate: any = [
      {
        message: "Hi",
      },
    ][0];
    Object.keys(paramsToValidate).forEach((param) => {
      expect(r[param]).toBeDefined();
      expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
    });
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Custom endpoints supplied by users can have paths
 */
it("RestJsonHostWithPath:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    endpoint: "https://example.com/custom",
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HostWithPathOperationCommand({});
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
    expect(r.path).toBe("/custom/HostWithPathOperation");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Adds Content-MD5 header
 */
it("RestJsonHttpChecksumRequired:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpChecksumRequiredCommand({
    foo: "base64 encoded md5 checksum",
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/HttpChecksumRequired");

    expect(r.headers["content-md5"]).toBeDefined();
    expect(r.headers["content-md5"]).toBe("iB0/3YSo7maijL0IGOgA9g==");
    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"foo\":\"base64 encoded md5 checksum\"
    }
    `;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

it("EnumPayloadRequest:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpEnumPayloadCommand({
    payload: "enumvalue",
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/EnumPayload");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `enumvalue`;
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

it("EnumPayloadResponse:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined, `enumvalue`),
  });

  const params: any = {};
  const command = new HttpEnumPayloadCommand(params);

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
      payload: "enumvalue",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes a blob in the HTTP payload
 */
it("RestJsonHttpPayloadTraitsWithBlob:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpPayloadTraitsCommand({
    foo: "Foo",

    blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/HttpPayloadTraits");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/octet-stream");
    expect(r.headers["x-foo"]).toBeDefined();
    expect(r.headers["x-foo"]).toBe("Foo");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `blobby blob blob`;
    const unequalParts: any = compareEquivalentOctetStreamBodies(utf8Encoder, bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonHttpPayloadTraitsWithNoBlobBody:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpPayloadTraitsCommand({
    foo: "Foo",
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/HttpPayloadTraits");

    expect(r.headers["x-foo"]).toBeDefined();
    expect(r.headers["x-foo"]).toBe("Foo");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes a blob in the HTTP payload
 */
it("RestJsonHttpPayloadTraitsWithBlob:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
      },
      `blobby blob blob`
    ),
  });

  const params: any = {};
  const command = new HttpPayloadTraitsCommand(params);

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
      foo: "Foo",

      blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonHttpPayloadTraitsWithNoBlobBody:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new HttpPayloadTraitsCommand(params);

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
      foo: "Foo",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonHttpPayloadTraitsWithMediaTypeWithBlob:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpPayloadTraitsWithMediaTypeCommand({
    foo: "Foo",

    blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/HttpPayloadTraitsWithMediaType");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("text/plain");
    expect(r.headers["x-foo"]).toBeDefined();
    expect(r.headers["x-foo"]).toBe("Foo");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `blobby blob blob`;
    const unequalParts: any = compareEquivalentOctetStreamBodies(utf8Encoder, bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonHttpPayloadTraitsWithMediaTypeWithBlob:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
        "content-type": "text/plain",
      },
      `blobby blob blob`
    ),
  });

  const params: any = {};
  const command = new HttpPayloadTraitsWithMediaTypeCommand(params);

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
      foo: "Foo",

      blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes a structure in the payload
 */
it("RestJsonHttpPayloadWithStructure:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpPayloadWithStructureCommand({
    nested: {
      greeting: "hello",

      name: "Phreddy",
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/HttpPayloadWithStructure");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"greeting\": \"hello\",
        \"name\": \"Phreddy\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a structure in the payload
 */
it("RestJsonHttpPayloadWithStructure:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "greeting": "hello",
          "name": "Phreddy"
      }`
    ),
  });

  const params: any = {};
  const command = new HttpPayloadWithStructureCommand(params);

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
      nested: {
        greeting: "hello",

        name: "Phreddy",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes a union in the payload.
 */
it("RestJsonHttpPayloadWithUnion:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpPayloadWithUnionCommand({
    nested: {
      greeting: "hello",
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/HttpPayloadWithUnion");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"greeting\": \"hello\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * No payload is sent if the union has no value.
 */
it.skip("RestJsonHttpPayloadWithUnsetUnion:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpPayloadWithUnionCommand({} as any);
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
    expect(r.path).toBe("/HttpPayloadWithUnion");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes a union in the payload.
 */
it("RestJsonHttpPayloadWithUnion:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "greeting": "hello"
      }`
    ),
  });

  const params: any = {};
  const command = new HttpPayloadWithUnionCommand(params);

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
      nested: {
        greeting: "hello",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * No payload is sent if the union has no value.
 */
it.skip("RestJsonHttpPayloadWithUnsetUnion:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-length": "0",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new HttpPayloadWithUnionCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * Adds headers by prefix
 */
it("RestJsonHttpPrefixHeadersArePresent:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpPrefixHeadersCommand({
    foo: "Foo",

    fooMap: {
      Abc: "Abc value",

      Def: "Def value",
    } as any,
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
    expect(r.path).toBe("/HttpPrefixHeaders");

    expect(r.headers["x-foo"]).toBeDefined();
    expect(r.headers["x-foo"]).toBe("Foo");
    expect(r.headers["x-foo-abc"]).toBeDefined();
    expect(r.headers["x-foo-abc"]).toBe("Abc value");
    expect(r.headers["x-foo-def"]).toBeDefined();
    expect(r.headers["x-foo-def"]).toBe("Def value");

    expect(r.body).toBeFalsy();
  }
});

/**
 * No prefix headers are serialized because the value is empty
 */
it("RestJsonHttpPrefixHeadersAreNotPresent:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpPrefixHeadersCommand({
    foo: "Foo",

    fooMap: {} as any,
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
    expect(r.path).toBe("/HttpPrefixHeaders");

    expect(r.headers["x-foo"]).toBeDefined();
    expect(r.headers["x-foo"]).toBe("Foo");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Adds headers by prefix
 */
it("RestJsonHttpPrefixHeadersArePresent:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-foo": "Foo",
      "x-foo-abc": "Abc value",
      "x-foo-def": "Def value",
    }),
  });

  const params: any = {};
  const command = new HttpPrefixHeadersCommand(params);

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
      foo: "Foo",

      fooMap: {
        abc: "Abc value",

        def: "Def value",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * (de)serializes all response headers
 */
it("HttpPrefixHeadersResponse:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-foo": "Foo",
      hello: "Hello",
    }),
  });

  const params: any = {};
  const command = new HttpPrefixHeadersInResponseCommand(params);

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
      prefixHeaders: {
        "x-foo": "Foo",

        hello: "Hello",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling NaN float label values.
 */
it("RestJsonSupportsNaNFloatLabels:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpRequestWithFloatLabelsCommand({
    float: NaN,

    double: NaN,
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
    expect(r.path).toBe("/FloatHttpLabels/NaN/NaN");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Supports handling Infinity float label values.
 */
it("RestJsonSupportsInfinityFloatLabels:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpRequestWithFloatLabelsCommand({
    float: Infinity,

    double: Infinity,
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
    expect(r.path).toBe("/FloatHttpLabels/Infinity/Infinity");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Supports handling -Infinity float label values.
 */
it("RestJsonSupportsNegativeInfinityFloatLabels:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpRequestWithFloatLabelsCommand({
    float: -Infinity,

    double: -Infinity,
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
    expect(r.path).toBe("/FloatHttpLabels/-Infinity/-Infinity");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes greedy labels and normal labels
 */
it("RestJsonHttpRequestWithGreedyLabelInPath:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpRequestWithGreedyLabelInPathCommand({
    foo: "hello/escape",

    baz: "there/guy",
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
    expect(r.path).toBe("/HttpRequestWithGreedyLabelInPath/foo/hello%2Fescape/baz/there/guy");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Sends a GET request that uses URI label bindings
 */
it("RestJsonInputWithHeadersAndAllParams:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpRequestWithLabelsCommand({
    string: "string",

    short: 1,

    integer: 2,

    long: 3,

    float: 4.1,

    double: 5.1,

    boolean: true,

    timestamp: new Date(1576540098000),
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
    expect(r.path).toBe("/HttpRequestWithLabels/string/1/2/3/4.1/5.1/true/2019-12-16T23%3A48%3A18Z");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Sends a GET request that uses URI label bindings
 */
it("RestJsonHttpRequestLabelEscaping:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpRequestWithLabelsCommand({
    string: " %:/?#[]@!$&'()*+,;=😹",

    short: 1,

    integer: 2,

    long: 3,

    float: 4.1,

    double: 5.1,

    boolean: true,

    timestamp: new Date(1576540098000),
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
    expect(r.path).toBe(
      "/HttpRequestWithLabels/%20%25%3A%2F%3F%23%5B%5D%40%21%24%26%27%28%29%2A%2B%2C%3B%3D%F0%9F%98%B9/1/2/3/4.1/5.1/true/2019-12-16T23%3A48%3A18Z"
    );

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes different timestamp formats in URI labels
 */
it("RestJsonHttpRequestWithLabelsAndTimestampFormat:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpRequestWithLabelsAndTimestampFormatCommand({
    memberEpochSeconds: new Date(1576540098000),

    memberHttpDate: new Date(1576540098000),

    memberDateTime: new Date(1576540098000),

    defaultFormat: new Date(1576540098000),

    targetEpochSeconds: new Date(1576540098000),

    targetHttpDate: new Date(1576540098000),

    targetDateTime: new Date(1576540098000),
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
    expect(r.path).toBe(
      "/HttpRequestWithLabelsAndTimestampFormat/1576540098/Mon%2C%2016%20Dec%202019%2023%3A48%3A18%20GMT/2019-12-16T23%3A48%3A18Z/2019-12-16T23%3A48%3A18Z/1576540098/Mon%2C%2016%20Dec%202019%2023%3A48%3A18%20GMT/2019-12-16T23%3A48%3A18Z"
    );

    expect(r.body).toBeFalsy();
  }
});

/**
 * Path matching is not broken by regex expressions in literal segments
 */
it("RestJsonToleratesRegexCharsInSegments:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpRequestWithRegexLiteralCommand({
    str: "abc",
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
    expect(r.path).toBe("/ReDosLiteral/abc/(a+)+");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Binds the http response code to an output structure. Note that
 * even though all members are bound outside of the payload, an
 * empty JSON object is serialized in the response. However,
 * clients should be able to handle an empty JSON object or an
 * empty payload without failing to deserialize a response.
 */
it("RestJsonHttpResponseCode:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      201,
      {
        "content-type": "application/json",
      },
      `{}`
    ),
  });

  const params: any = {};
  const command = new HttpResponseCodeCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(201);
  const paramsToValidate: any = [
    {
      Status: 201,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * This test ensures that clients gracefully handle cases where
 * the service responds with no payload rather than an empty JSON
 * object.
 */
it("RestJsonHttpResponseCodeWithNoPayload:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 201, undefined, ``),
  });

  const params: any = {};
  const command = new HttpResponseCodeCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(201);
  const paramsToValidate: any = [
    {
      Status: 201,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

it("StringPayloadRequest:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpStringPayloadCommand({
    payload: "rawstring",
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/StringPayload");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `rawstring`;
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

it("StringPayloadResponse:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined, `rawstring`),
  });

  const params: any = {};
  const command = new HttpStringPayloadCommand(params);

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
      payload: "rawstring",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Query parameters must be ignored when serializing the output
 * of an operation. As of January 2021, server implementations
 * are expected to respond with a JSON object regardless of
 * if the output parameters are empty.
 */
it("RestJsonIgnoreQueryParamsInResponse:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{}`
    ),
  });

  const params: any = {};
  const command = new IgnoreQueryParamsInResponseCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * This test is similar to RestJsonIgnoreQueryParamsInResponse,
 * but it ensures that clients gracefully handle responses from
 * the server that do not serialize an empty JSON object.
 */
it("RestJsonIgnoreQueryParamsInResponseNoPayload:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined, ``),
  });

  const params: any = {};
  const command = new IgnoreQueryParamsInResponseCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * Tests requests with string header bindings
 */
it("RestJsonInputAndOutputWithStringHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerString: "Hello",

    headerStringList: ["a", "b", "c"],

    headerStringSet: ["a", "b", "c"],
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/InputAndOutputWithHeaders");

    expect(r.headers["x-string"]).toBeDefined();
    expect(r.headers["x-string"]).toBe("Hello");
    expect(r.headers["x-stringlist"]).toBeDefined();
    expect(r.headers["x-stringlist"]).toBe("a, b, c");
    expect(r.headers["x-stringset"]).toBeDefined();
    expect(r.headers["x-stringset"]).toBe("a, b, c");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests requests with string list header bindings that require quoting
 */
it.skip("RestJsonInputAndOutputWithQuotedStringHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerStringList: ["b,c", '"def"', "a"],
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/InputAndOutputWithHeaders");

    expect(r.headers["x-stringlist"]).toBeDefined();
    expect(r.headers["x-stringlist"]).toBe('"b,c", "\\"def\\"", a');

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests requests with numeric header bindings
 */
it("RestJsonInputAndOutputWithNumericHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerByte: 1,

    headerShort: 123,

    headerInteger: 123,

    headerLong: 123,

    headerFloat: 1.1,

    headerDouble: 1.1,

    headerIntegerList: [
      1,

      2,

      3,
    ],
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/InputAndOutputWithHeaders");

    expect(r.headers["x-byte"]).toBeDefined();
    expect(r.headers["x-byte"]).toBe("1");
    expect(r.headers["x-double"]).toBeDefined();
    expect(r.headers["x-double"]).toBe("1.1");
    expect(r.headers["x-float"]).toBeDefined();
    expect(r.headers["x-float"]).toBe("1.1");
    expect(r.headers["x-integer"]).toBeDefined();
    expect(r.headers["x-integer"]).toBe("123");
    expect(r.headers["x-integerlist"]).toBeDefined();
    expect(r.headers["x-integerlist"]).toBe("1, 2, 3");
    expect(r.headers["x-long"]).toBeDefined();
    expect(r.headers["x-long"]).toBe("123");
    expect(r.headers["x-short"]).toBeDefined();
    expect(r.headers["x-short"]).toBe("123");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests requests with boolean header bindings
 */
it("RestJsonInputAndOutputWithBooleanHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerTrueBool: true,

    headerFalseBool: false,

    headerBooleanList: [true, false, true],
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/InputAndOutputWithHeaders");

    expect(r.headers["x-boolean1"]).toBeDefined();
    expect(r.headers["x-boolean1"]).toBe("true");
    expect(r.headers["x-boolean2"]).toBeDefined();
    expect(r.headers["x-boolean2"]).toBe("false");
    expect(r.headers["x-booleanlist"]).toBeDefined();
    expect(r.headers["x-booleanlist"]).toBe("true, false, true");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests requests with timestamp header bindings
 */
it("RestJsonInputAndOutputWithTimestampHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerTimestampList: [new Date(1576540098000), new Date(1576540098000)],
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/InputAndOutputWithHeaders");

    expect(r.headers["x-timestamplist"]).toBeDefined();
    expect(r.headers["x-timestamplist"]).toBe("Mon, 16 Dec 2019 23:48:18 GMT, Mon, 16 Dec 2019 23:48:18 GMT");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests requests with enum header bindings
 */
it("RestJsonInputAndOutputWithEnumHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerEnum: "Foo",

    headerEnumList: ["Foo", "Bar", "Baz"],
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/InputAndOutputWithHeaders");

    expect(r.headers["x-enum"]).toBeDefined();
    expect(r.headers["x-enum"]).toBe("Foo");
    expect(r.headers["x-enumlist"]).toBeDefined();
    expect(r.headers["x-enumlist"]).toBe("Foo, Bar, Baz");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests requests with intEnum header bindings
 */
it("RestJsonInputAndOutputWithIntEnumHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerIntegerEnum: 1,

    headerIntegerEnumList: [
      1,

      2,

      3,
    ],
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/InputAndOutputWithHeaders");

    expect(r.headers["x-integerenum"]).toBeDefined();
    expect(r.headers["x-integerenum"]).toBe("1");
    expect(r.headers["x-integerenumlist"]).toBeDefined();
    expect(r.headers["x-integerenumlist"]).toBe("1, 2, 3");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Supports handling NaN float header values.
 */
it("RestJsonSupportsNaNFloatHeaderInputs:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerFloat: NaN,

    headerDouble: NaN,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/InputAndOutputWithHeaders");

    expect(r.headers["x-double"]).toBeDefined();
    expect(r.headers["x-double"]).toBe("NaN");
    expect(r.headers["x-float"]).toBeDefined();
    expect(r.headers["x-float"]).toBe("NaN");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Supports handling Infinity float header values.
 */
it("RestJsonSupportsInfinityFloatHeaderInputs:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerFloat: Infinity,

    headerDouble: Infinity,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/InputAndOutputWithHeaders");

    expect(r.headers["x-double"]).toBeDefined();
    expect(r.headers["x-double"]).toBe("Infinity");
    expect(r.headers["x-float"]).toBeDefined();
    expect(r.headers["x-float"]).toBe("Infinity");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Supports handling -Infinity float header values.
 */
it("RestJsonSupportsNegativeInfinityFloatHeaderInputs:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerFloat: -Infinity,

    headerDouble: -Infinity,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/InputAndOutputWithHeaders");

    expect(r.headers["x-double"]).toBeDefined();
    expect(r.headers["x-double"]).toBe("-Infinity");
    expect(r.headers["x-float"]).toBeDefined();
    expect(r.headers["x-float"]).toBe("-Infinity");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests responses with string header bindings
 */
it("RestJsonInputAndOutputWithStringHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-stringlist": "a, b, c",
      "x-stringset": "a, b, c",
      "x-string": "Hello",
    }),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

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
      headerString: "Hello",

      headerStringList: ["a", "b", "c"],

      headerStringSet: ["a", "b", "c"],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests responses with string list header bindings that require quoting
 */
it.skip("RestJsonInputAndOutputWithQuotedStringHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-stringlist": '"b,c", "\\"def\\"", a',
    }),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

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
      headerStringList: ["b,c", '"def"', "a"],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests responses with numeric header bindings
 */
it("RestJsonInputAndOutputWithNumericHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-float": "1.1",
      "x-byte": "1",
      "x-long": "123",
      "x-integer": "123",
      "x-integerlist": "1, 2, 3",
      "x-double": "1.1",
      "x-short": "123",
    }),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

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
      headerByte: 1,

      headerShort: 123,

      headerInteger: 123,

      headerLong: 123,

      headerFloat: 1.1,

      headerDouble: 1.1,

      headerIntegerList: [
        1,

        2,

        3,
      ],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests responses with boolean header bindings
 */
it("RestJsonInputAndOutputWithBooleanHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-booleanlist": "true, false, true",
      "x-boolean1": "true",
      "x-boolean2": "false",
    }),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

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
      headerTrueBool: true,

      headerFalseBool: false,

      headerBooleanList: [true, false, true],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests responses with timestamp header bindings
 */
it("RestJsonInputAndOutputWithTimestampHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-timestamplist": "Mon, 16 Dec 2019 23:48:18 GMT, Mon, 16 Dec 2019 23:48:18 GMT",
    }),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

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
      headerTimestampList: [new Date(1576540098000), new Date(1576540098000)],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests responses with enum header bindings
 */
it("RestJsonInputAndOutputWithEnumHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-enumlist": "Foo, Bar, Baz",
      "x-enum": "Foo",
    }),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

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
      headerEnum: "Foo",

      headerEnumList: ["Foo", "Bar", "Baz"],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests responses with intEnum header bindings
 */
it("RestJsonInputAndOutputWithIntEnumHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-integerenum": "1",
      "x-integerenumlist": "1, 2, 3",
    }),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

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
      headerIntegerEnum: 1,

      headerIntegerEnumList: [
        1,

        2,

        3,
      ],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling NaN float header values.
 */
it("RestJsonSupportsNaNFloatHeaderOutputs:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-float": "NaN",
      "x-double": "NaN",
    }),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

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
      headerFloat: NaN,

      headerDouble: NaN,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling Infinity float header values.
 */
it("RestJsonSupportsInfinityFloatHeaderOutputs:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-float": "Infinity",
      "x-double": "Infinity",
    }),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

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
      headerFloat: Infinity,

      headerDouble: Infinity,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling -Infinity float header values.
 */
it("RestJsonSupportsNegativeInfinityFloatHeaderOutputs:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-float": "-Infinity",
      "x-double": "-Infinity",
    }),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

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
      headerFloat: -Infinity,

      headerDouble: -Infinity,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Blobs are base64 encoded
 */
it("RestJsonJsonBlobs:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonBlobsCommand({
    data: Uint8Array.from("value", (c) => c.charCodeAt(0)),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonBlobs");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"data\": \"dmFsdWU=\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Blobs are base64 encoded
 */
it("RestJsonJsonBlobs:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "data": "dmFsdWU="
      }`
    ),
  });

  const params: any = {};
  const command = new JsonBlobsCommand(params);

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
      data: Uint8Array.from("value", (c) => c.charCodeAt(0)),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes simple scalar properties
 */
it("RestJsonJsonEnums:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonEnumsCommand({
    fooEnum1: "Foo",

    fooEnum2: "0",

    fooEnum3: "1",

    fooEnumList: ["Foo", "0"],

    fooEnumSet: ["Foo", "0"],

    fooEnumMap: {
      hi: "Foo",

      zero: "0",
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonEnums");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"fooEnum1\": \"Foo\",
        \"fooEnum2\": \"0\",
        \"fooEnum3\": \"1\",
        \"fooEnumList\": [
            \"Foo\",
            \"0\"
        ],
        \"fooEnumSet\": [
            \"Foo\",
            \"0\"
        ],
        \"fooEnumMap\": {
            \"hi\": \"Foo\",
            \"zero\": \"0\"
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes simple scalar properties
 */
it("RestJsonJsonEnums:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "fooEnum1": "Foo",
          "fooEnum2": "0",
          "fooEnum3": "1",
          "fooEnumList": [
              "Foo",
              "0"
          ],
          "fooEnumSet": [
              "Foo",
              "0"
          ],
          "fooEnumMap": {
              "hi": "Foo",
              "zero": "0"
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonEnumsCommand(params);

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
      fooEnum1: "Foo",

      fooEnum2: "0",

      fooEnum3: "1",

      fooEnumList: ["Foo", "0"],

      fooEnumSet: ["Foo", "0"],

      fooEnumMap: {
        hi: "Foo",

        zero: "0",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes intEnums as integers
 */
it("RestJsonJsonIntEnums:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonIntEnumsCommand({
    integerEnum1: 1,

    integerEnum2: 2,

    integerEnum3: 3,

    integerEnumList: [
      1,

      2,

      3,
    ],

    integerEnumSet: [
      1,

      2,
    ],

    integerEnumMap: {
      abc: 1,

      def: 2,
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonIntEnums");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"integerEnum1\": 1,
        \"integerEnum2\": 2,
        \"integerEnum3\": 3,
        \"integerEnumList\": [
            1,
            2,
            3
        ],
        \"integerEnumSet\": [
            1,
            2
        ],
        \"integerEnumMap\": {
            \"abc\": 1,
            \"def\": 2
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes intEnums as integers
 */
it("RestJsonJsonIntEnums:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "integerEnum1": 1,
          "integerEnum2": 2,
          "integerEnum3": 3,
          "integerEnumList": [
              1,
              2,
              3
          ],
          "integerEnumSet": [
              1,
              2
          ],
          "integerEnumMap": {
              "abc": 1,
              "def": 2
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonIntEnumsCommand(params);

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
      integerEnum1: 1,

      integerEnum2: 2,

      integerEnum3: 3,

      integerEnumList: [
        1,

        2,

        3,
      ],

      integerEnumSet: [
        1,

        2,
      ],

      integerEnumMap: {
        abc: 1,

        def: 2,
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes JSON lists
 */
it("RestJsonLists:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonListsCommand({
    stringList: ["foo", "bar"],

    stringSet: ["foo", "bar"],

    integerList: [
      1,

      2,
    ],

    booleanList: [true, false],

    timestampList: [new Date(1398796238000), new Date(1398796238000)],

    enumList: ["Foo", "0"],

    intEnumList: [
      1,

      2,
    ],

    nestedStringList: [
      ["foo", "bar"],

      ["baz", "qux"],
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonLists");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"stringList\": [
            \"foo\",
            \"bar\"
        ],
        \"stringSet\": [
            \"foo\",
            \"bar\"
        ],
        \"integerList\": [
            1,
            2
        ],
        \"booleanList\": [
            true,
            false
        ],
        \"timestampList\": [
            1398796238,
            1398796238
        ],
        \"enumList\": [
            \"Foo\",
            \"0\"
        ],
        \"intEnumList\": [
            1,
            2
        ],
        \"nestedStringList\": [
            [
                \"foo\",
                \"bar\"
            ],
            [
                \"baz\",
                \"qux\"
            ]
        ],
        \"myStructureList\": [
            {
                \"value\": \"1\",
                \"other\": \"2\"
            },
            {
                \"value\": \"3\",
                \"other\": \"4\"
            }
        ]
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes empty JSON lists
 */
it("RestJsonListsEmpty:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonListsCommand({
    stringList: [],
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonLists");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"stringList\": []
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes null values in lists
 */
it("RestJsonListsSerializeNull:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonListsCommand({
    sparseStringList: [null, "hi"],
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonLists");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"sparseStringList\": [
            null,
            \"hi\"
        ]
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes JSON lists
 */
it("RestJsonLists:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "stringList": [
              "foo",
              "bar"
          ],
          "stringSet": [
              "foo",
              "bar"
          ],
          "integerList": [
              1,
              2
          ],
          "booleanList": [
              true,
              false
          ],
          "timestampList": [
              1398796238,
              1398796238
          ],
          "enumList": [
              "Foo",
              "0"
          ],
          "intEnumList": [
              1,
              2
          ],
          "nestedStringList": [
              [
                  "foo",
                  "bar"
              ],
              [
                  "baz",
                  "qux"
              ]
          ],
          "myStructureList": [
              {
                  "value": "1",
                  "other": "2"
              },
              {
                  "value": "3",
                  "other": "4"
              }
          ]
      }`
    ),
  });

  const params: any = {};
  const command = new JsonListsCommand(params);

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
      stringList: ["foo", "bar"],

      stringSet: ["foo", "bar"],

      integerList: [
        1,

        2,
      ],

      booleanList: [true, false],

      timestampList: [new Date(1398796238000), new Date(1398796238000)],

      enumList: ["Foo", "0"],

      intEnumList: [
        1,

        2,
      ],

      nestedStringList: [
        ["foo", "bar"],

        ["baz", "qux"],
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
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes empty JSON lists
 */
it("RestJsonListsEmpty:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "stringList": []
      }`
    ),
  });

  const params: any = {};
  const command = new JsonListsCommand(params);

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
      stringList: [],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes null values in sparse lists
 */
it("RestJsonListsSerializeNull:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "sparseStringList": [
              null,
              "hi"
          ]
      }`
    ),
  });

  const params: any = {};
  const command = new JsonListsCommand(params);

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
      sparseStringList: [null, "hi"],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes JSON maps
 */
it("RestJsonJsonMaps:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonMapsCommand({
    denseStructMap: {
      foo: {
        hi: "there",
      } as any,

      baz: {
        hi: "bye",
      } as any,
    } as any,

    sparseStructMap: {
      foo: {
        hi: "there",
      } as any,

      baz: {
        hi: "bye",
      } as any,
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonMaps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"denseStructMap\": {
            \"foo\": {
                \"hi\": \"there\"
            },
            \"baz\": {
                \"hi\": \"bye\"
            }
        },
        \"sparseStructMap\": {
            \"foo\": {
                \"hi\": \"there\"
            },
            \"baz\": {
                \"hi\": \"bye\"
            }
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes JSON map values in sparse maps
 */
it("RestJsonSerializesNullMapValues:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonMapsCommand({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonMaps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"sparseBooleanMap\": {
            \"x\": null
        },
        \"sparseNumberMap\": {
            \"x\": null
        },
        \"sparseStringMap\": {
            \"x\": null
        },
        \"sparseStructMap\": {
            \"x\": null
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensure that 0 and false are sent over the wire in all maps and lists
 */
it("RestJsonSerializesZeroValuesInMaps:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonMapsCommand({
    denseNumberMap: {
      x: 0,
    } as any,

    sparseNumberMap: {
      x: 0,
    } as any,

    denseBooleanMap: {
      x: false,
    } as any,

    sparseBooleanMap: {
      x: false,
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonMaps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"denseNumberMap\": {
            \"x\": 0
        },
        \"sparseNumberMap\": {
            \"x\": 0
        },
        \"denseBooleanMap\": {
            \"x\": false
        },
        \"sparseBooleanMap\": {
            \"x\": false
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * A request that contains a sparse map of sets
 */
it("RestJsonSerializesSparseSetMap:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonMapsCommand({
    sparseSetMap: {
      x: [],

      y: ["a", "b"],
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonMaps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"sparseSetMap\": {
            \"x\": [],
            \"y\": [\"a\", \"b\"]
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * A request that contains a dense map of sets.
 */
it("RestJsonSerializesDenseSetMap:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonMapsCommand({
    denseSetMap: {
      x: [],

      y: ["a", "b"],
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonMaps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"denseSetMap\": {
            \"x\": [],
            \"y\": [\"a\", \"b\"]
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * A request that contains a sparse map of sets.
 */
it("RestJsonSerializesSparseSetMapAndRetainsNull:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonMapsCommand({
    sparseSetMap: {
      x: [],

      y: ["a", "b"],

      z: null,
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonMaps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"sparseSetMap\": {
            \"x\": [],
            \"y\": [\"a\", \"b\"],
            \"z\": null
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Deserializes JSON maps
 */
it("RestJsonJsonMaps:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "denseStructMap": {
              "foo": {
                  "hi": "there"
              },
              "baz": {
                  "hi": "bye"
              }
          },
          "sparseStructMap": {
              "foo": {
                  "hi": "there"
              },
              "baz": {
                  "hi": "bye"
              }
         }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonMapsCommand(params);

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
      denseStructMap: {
        foo: {
          hi: "there",
        },

        baz: {
          hi: "bye",
        },
      },

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
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Deserializes null JSON map values
 */
it("RestJsonDeserializesNullMapValues:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "sparseBooleanMap": {
              "x": null
          },
          "sparseNumberMap": {
              "x": null
          },
          "sparseStringMap": {
              "x": null
          },
          "sparseStructMap": {
              "x": null
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonMapsCommand(params);

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
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensure that 0 and false are sent over the wire in all maps and lists
 */
it("RestJsonDeserializesZeroValuesInMaps:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "denseNumberMap": {
              "x": 0
          },
          "sparseNumberMap": {
              "x": 0
          },
          "denseBooleanMap": {
              "x": false
          },
          "sparseBooleanMap": {
              "x": false
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonMapsCommand(params);

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
      denseNumberMap: {
        x: 0,
      },

      sparseNumberMap: {
        x: 0,
      },

      denseBooleanMap: {
        x: false,
      },

      sparseBooleanMap: {
        x: false,
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * A response that contains a sparse map of sets
 */
it("RestJsonDeserializesSparseSetMap:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "sparseSetMap": {
              "x": [],
              "y": ["a", "b"]
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonMapsCommand(params);

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
      sparseSetMap: {
        x: [],

        y: ["a", "b"],
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * A response that contains a dense map of sets.
 */
it("RestJsonDeserializesDenseSetMap:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "denseSetMap": {
              "x": [],
              "y": ["a", "b"]
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonMapsCommand(params);

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
      denseSetMap: {
        x: [],

        y: ["a", "b"],
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * A response that contains a sparse map of sets.
 */
it("RestJsonDeserializesSparseSetMapAndRetainsNull:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "sparseSetMap": {
              "x": [],
              "y": ["a", "b"],
              "z": null
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonMapsCommand(params);

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
      sparseSetMap: {
        x: [],

        y: ["a", "b"],

        z: null,
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Clients SHOULD tolerate seeing a null value in a dense map, and they SHOULD
 * drop the null key-value pair.
 */
it("RestJsonDeserializesDenseSetMapAndSkipsNull:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "denseSetMap": {
              "x": [],
              "y": ["a", "b"],
              "z": null
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonMapsCommand(params);

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
      denseSetMap: {
        x: [],

        y: ["a", "b"],
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests how normal timestamps are serialized
 */
it("RestJsonJsonTimestamps:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonTimestampsCommand({
    normal: new Date(1398796238000),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonTimestamps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"normal\": 1398796238
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that the timestampFormat of date-time works like normal timestamps
 */
it("RestJsonJsonTimestampsWithDateTimeFormat:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonTimestampsCommand({
    dateTime: new Date(1398796238000),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonTimestamps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"dateTime\": \"2014-04-29T18:30:38Z\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that the timestampFormat of date-time on the target shape works like normal timestamps
 */
it("RestJsonJsonTimestampsWithDateTimeOnTargetFormat:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonTimestampsCommand({
    dateTimeOnTarget: new Date(1398796238000),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonTimestamps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"dateTimeOnTarget\": \"2014-04-29T18:30:38Z\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that the timestampFormat of epoch-seconds works
 */
it("RestJsonJsonTimestampsWithEpochSecondsFormat:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonTimestampsCommand({
    epochSeconds: new Date(1398796238000),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonTimestamps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"epochSeconds\": 1398796238
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that the timestampFormat of epoch-seconds on the target shape works
 */
it("RestJsonJsonTimestampsWithEpochSecondsOnTargetFormat:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonTimestampsCommand({
    epochSecondsOnTarget: new Date(1398796238000),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonTimestamps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"epochSecondsOnTarget\": 1398796238
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that the timestampFormat of http-date works
 */
it("RestJsonJsonTimestampsWithHttpDateFormat:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonTimestampsCommand({
    httpDate: new Date(1398796238000),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonTimestamps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"httpDate\": \"Tue, 29 Apr 2014 18:30:38 GMT\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that the timestampFormat of http-date on the target shape works
 */
it("RestJsonJsonTimestampsWithHttpDateOnTargetFormat:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonTimestampsCommand({
    httpDateOnTarget: new Date(1398796238000),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/JsonTimestamps");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"httpDateOnTarget\": \"Tue, 29 Apr 2014 18:30:38 GMT\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Tests how normal timestamps are serialized
 */
it("RestJsonJsonTimestamps:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "normal": 1398796238
      }`
    ),
  });

  const params: any = {};
  const command = new JsonTimestampsCommand(params);

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
      normal: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of date-time works like normal timestamps
 */
it("RestJsonJsonTimestampsWithDateTimeFormat:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "dateTime": "2014-04-29T18:30:38Z"
      }`
    ),
  });

  const params: any = {};
  const command = new JsonTimestampsCommand(params);

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
      dateTime: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of date-time on the target shape works like normal timestamps
 */
it("RestJsonJsonTimestampsWithDateTimeOnTargetFormat:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "dateTimeOnTarget": "2014-04-29T18:30:38Z"
      }`
    ),
  });

  const params: any = {};
  const command = new JsonTimestampsCommand(params);

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
      dateTimeOnTarget: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of epoch-seconds works
 */
it("RestJsonJsonTimestampsWithEpochSecondsFormat:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "epochSeconds": 1398796238
      }`
    ),
  });

  const params: any = {};
  const command = new JsonTimestampsCommand(params);

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
      epochSeconds: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of epoch-seconds on the target shape works
 */
it("RestJsonJsonTimestampsWithEpochSecondsOnTargetFormat:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "epochSecondsOnTarget": 1398796238
      }`
    ),
  });

  const params: any = {};
  const command = new JsonTimestampsCommand(params);

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
      epochSecondsOnTarget: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of http-date works
 */
it("RestJsonJsonTimestampsWithHttpDateFormat:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "httpDate": "Tue, 29 Apr 2014 18:30:38 GMT"
      }`
    ),
  });

  const params: any = {};
  const command = new JsonTimestampsCommand(params);

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
      httpDate: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of http-date on the target shape works
 */
it("RestJsonJsonTimestampsWithHttpDateOnTargetFormat:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "httpDateOnTarget": "Tue, 29 Apr 2014 18:30:38 GMT"
      }`
    ),
  });

  const params: any = {};
  const command = new JsonTimestampsCommand(params);

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
      httpDateOnTarget: new Date(1398796238000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes a string union value
 */
it("RestJsonSerializeStringUnionValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonUnionsCommand({
    contents: {
      stringValue: "foo",
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonUnions");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"contents\": {
            \"stringValue\": \"foo\"
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a boolean union value
 */
it("RestJsonSerializeBooleanUnionValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonUnionsCommand({
    contents: {
      booleanValue: true,
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonUnions");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"contents\": {
            \"booleanValue\": true
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a number union value
 */
it("RestJsonSerializeNumberUnionValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonUnionsCommand({
    contents: {
      numberValue: 1,
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonUnions");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"contents\": {
            \"numberValue\": 1
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a blob union value
 */
it("RestJsonSerializeBlobUnionValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonUnionsCommand({
    contents: {
      blobValue: Uint8Array.from("foo", (c) => c.charCodeAt(0)),
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonUnions");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"contents\": {
            \"blobValue\": \"Zm9v\"
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a timestamp union value
 */
it("RestJsonSerializeTimestampUnionValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonUnionsCommand({
    contents: {
      timestampValue: new Date(1398796238000),
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonUnions");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"contents\": {
            \"timestampValue\": 1398796238
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes an enum union value
 */
it("RestJsonSerializeEnumUnionValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonUnionsCommand({
    contents: {
      enumValue: "Foo",
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonUnions");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"contents\": {
            \"enumValue\": \"Foo\"
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a list union value
 */
it("RestJsonSerializeListUnionValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonUnionsCommand({
    contents: {
      listValue: ["foo", "bar"],
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonUnions");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"contents\": {
            \"listValue\": [\"foo\", \"bar\"]
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a map union value
 */
it("RestJsonSerializeMapUnionValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonUnionsCommand({
    contents: {
      mapValue: {
        foo: "bar",

        spam: "eggs",
      } as any,
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonUnions");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"contents\": {
            \"mapValue\": {
                \"foo\": \"bar\",
                \"spam\": \"eggs\"
            }
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a structure union value
 */
it("RestJsonSerializeStructureUnionValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonUnionsCommand({
    contents: {
      structureValue: {
        hi: "hello",
      } as any,
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonUnions");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"contents\": {
            \"structureValue\": {
                \"hi\": \"hello\"
            }
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a renamed structure union value
 */
it("RestJsonSerializeRenamedStructureUnionValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new JsonUnionsCommand({
    contents: {
      renamedStructureValue: {
        salutation: "hello!",
      } as any,
    } as any,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/JsonUnions");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"contents\": {
            \"renamedStructureValue\": {
                \"salutation\": \"hello!\"
            }
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Deserializes a string union value
 */
it("RestJsonDeserializeStringUnionValue:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "contents": {
              "stringValue": "foo"
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonUnionsCommand(params);

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
      contents: {
        stringValue: "foo",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Deserializes a boolean union value
 */
it("RestJsonDeserializeBooleanUnionValue:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "contents": {
              "booleanValue": true
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonUnionsCommand(params);

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
      contents: {
        booleanValue: true,
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Deserializes a number union value
 */
it("RestJsonDeserializeNumberUnionValue:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "contents": {
              "numberValue": 1
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonUnionsCommand(params);

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
      contents: {
        numberValue: 1,
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Deserializes a blob union value
 */
it("RestJsonDeserializeBlobUnionValue:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "contents": {
              "blobValue": "Zm9v"
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonUnionsCommand(params);

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
      contents: {
        blobValue: Uint8Array.from("foo", (c) => c.charCodeAt(0)),
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Deserializes a timestamp union value
 */
it("RestJsonDeserializeTimestampUnionValue:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "contents": {
              "timestampValue": 1398796238
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonUnionsCommand(params);

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
      contents: {
        timestampValue: new Date(1398796238000),
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Deserializes an enum union value
 */
it("RestJsonDeserializeEnumUnionValue:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "contents": {
              "enumValue": "Foo"
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonUnionsCommand(params);

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
      contents: {
        enumValue: "Foo",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Deserializes a list union value
 */
it("RestJsonDeserializeListUnionValue:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "contents": {
              "listValue": ["foo", "bar"]
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonUnionsCommand(params);

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
      contents: {
        listValue: ["foo", "bar"],
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Deserializes a map union value
 */
it("RestJsonDeserializeMapUnionValue:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "contents": {
              "mapValue": {
                  "foo": "bar",
                  "spam": "eggs"
              }
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonUnionsCommand(params);

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
      contents: {
        mapValue: {
          foo: "bar",

          spam: "eggs",
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
 * Deserializes a structure union value
 */
it("RestJsonDeserializeStructureUnionValue:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "contents": {
              "structureValue": {
                  "hi": "hello"
              }
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonUnionsCommand(params);

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
      contents: {
        structureValue: {
          hi: "hello",
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
 * Ignores an unrecognized __type property
 */
it("RestJsonDeserializeIgnoreType:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "contents": {
              "__type": "aws.protocoltests.json10#MyUnion",
              "structureValue": {
                  "hi": "hello"
              }
          }
      }`
    ),
  });

  const params: any = {};
  const command = new JsonUnionsCommand(params);

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
      contents: {
        structureValue: {
          hi: "hello",
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
 * Headers that target strings with a mediaType are base64 encoded
 */
it("MediaTypeHeaderInputBase64:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new MediaTypeHeaderCommand({
    json: "true",
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
    expect(r.path).toBe("/MediaTypeHeader");

    expect(r.headers["x-json"]).toBeDefined();
    expect(r.headers["x-json"]).toBe("dHJ1ZQ==");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Headers that target strings with a mediaType are base64 encoded
 */
it("MediaTypeHeaderOutputBase64:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-json": "dHJ1ZQ==",
    }),
  });

  const params: any = {};
  const command = new MediaTypeHeaderCommand(params);

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
      json: "true",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * No input serializes no payload. When clients do not need to
 * serialize any data in the payload, they should omit a payload
 * altogether.
 */
it("RestJsonNoInputAndNoOutput:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new NoInputAndNoOutputCommand({});
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
    expect(r.path).toBe("/NoInputAndNoOutput");

    expect(r.body).toBeFalsy();
  }
});

/**
 * When an operation does not define output, the service will respond
 * with an empty payload, and may optionally include the content-type
 * header.
 */
it("RestJsonNoInputAndNoOutput:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined, ``),
  });

  const params: any = {};
  const command = new NoInputAndNoOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * No input serializes no payload. When clients do not need to
 * serialize any data in the payload, they should omit a payload
 * altogether.
 */
it("RestJsonNoInputAndOutput:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new NoInputAndOutputCommand({});
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
    expect(r.path).toBe("/NoInputAndOutputOutput");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Operations that define output and do not bind anything to
 * the payload return a JSON object in the response.
 */
it("RestJsonNoInputAndOutputWithJson:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{}`
    ),
  });

  const params: any = {};
  const command = new NoInputAndOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * This test is similar to RestJsonNoInputAndOutputWithJson, but
 * it ensures that clients can gracefully handle responses that
 * omit a JSON payload.
 */
it("RestJsonNoInputAndOutputNoPayload:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined, ``),
  });

  const params: any = {};
  const command = new NoInputAndOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * Do not send null values, empty strings, or empty lists over the wire in headers
 */
it("RestJsonNullAndEmptyHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new NullAndEmptyHeadersClientCommand({
    a: null,

    b: "",

    c: [],
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
    expect(r.path).toBe("/NullAndEmptyHeadersClient");

    expect(r.headers["x-a"]).toBeUndefined();
    expect(r.headers["x-b"]).toBeUndefined();
    expect(r.headers["x-c"]).toBeUndefined();

    expect(r.body).toBeFalsy();
  }
});

/**
 * Omits null query values
 */
it("RestJsonOmitsNullQuery:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new OmitsNullSerializesEmptyStringCommand({
    nullValue: null,
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
    expect(r.path).toBe("/OmitsNullSerializesEmptyString");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes empty query strings
 */
it("RestJsonSerializesEmptyQueryValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new OmitsNullSerializesEmptyStringCommand({
    emptyString: "",
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
    expect(r.path).toBe("/OmitsNullSerializesEmptyString");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("Empty=");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Supports omitting empty lists.
 */
it("RestJsonOmitsEmptyListQueryValues:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new OmitsSerializingEmptyListsCommand({
    queryStringList: [],

    queryIntegerList: [],

    queryDoubleList: [],

    queryBooleanList: [],

    queryTimestampList: [],

    queryEnumList: [],

    queryIntegerEnumList: [],
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/OmitsSerializingEmptyLists");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Unit types in unions are serialized like normal structures in requests.
 */
it("RestJsonInputUnionWithUnitMember:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new PostPlayerActionCommand({
    action: {
      quit: {} as any,
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/PostPlayerAction");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"action\": {
            \"quit\": {}
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Unit types in unions are serialized like normal structures in responses.
 */
it("RestJsonOutputUnionWithUnitMember:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "action": {
              "quit": {}
          }
      }`
    ),
  });

  const params: any = {};
  const command = new PostPlayerActionCommand(params);

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
      action: {
        quit: {},
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests that jsonName works with union members.
 */
it("PostUnionWithJsonNameRequest1:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new PostUnionWithJsonNameCommand({
    value: {
      foo: "hi",
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/PostUnionWithJsonName");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"value\": {
            \"FOO\": \"hi\"
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Tests that jsonName works with union members.
 */
it("PostUnionWithJsonNameRequest2:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new PostUnionWithJsonNameCommand({
    value: {
      baz: "hi",
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/PostUnionWithJsonName");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"value\": {
            \"_baz\": \"hi\"
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Tests that jsonName works with union members.
 */
it("PostUnionWithJsonNameRequest3:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new PostUnionWithJsonNameCommand({
    value: {
      bar: "hi",
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/PostUnionWithJsonName");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"value\": {
            \"bar\": \"hi\"
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Tests that jsonName works with union members.
 */
it("PostUnionWithJsonNameResponse1:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "value": {
              "FOO": "hi"
          }
      }`
    ),
  });

  const params: any = {};
  const command = new PostUnionWithJsonNameCommand(params);

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
      value: {
        foo: "hi",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests that jsonName works with union members.
 */
it("PostUnionWithJsonNameResponse2:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "value": {
              "_baz": "hi"
          }
      }`
    ),
  });

  const params: any = {};
  const command = new PostUnionWithJsonNameCommand(params);

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
      value: {
        baz: "hi",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests that jsonName works with union members.
 */
it("PostUnionWithJsonNameResponse3:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "value": {
              "bar": "hi"
          }
      }`
    ),
  });

  const params: any = {};
  const command = new PostUnionWithJsonNameCommand(params);

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
      value: {
        bar: "hi",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Compression algorithm encoding is appended to the Content-Encoding header.
 */
it.skip("SDKAppliedContentEncoding_restJson1:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new PutWithContentEncodingCommand({
    data: "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\n",
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/requestcompression/putcontentwithencoding");

    expect(r.headers["content-encoding"]).toBeDefined();
    expect(r.headers["content-encoding"]).toBe("gzip");
  }
});

/**
 * Compression algorithm encoding is appended to the Content-Encoding header, and the
 * user-provided content-encoding is in the Content-Encoding header before the
 * request compression encoding from the HTTP binding.
 *
 */
it.skip("SDKAppendedGzipAfterProvidedEncoding_restJson1:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new PutWithContentEncodingCommand({
    encoding: "custom",

    data: "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\n",
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/requestcompression/putcontentwithencoding");

    expect(r.headers["content-encoding"]).toBeDefined();
    expect(r.headers["content-encoding"]).toBe("custom, gzip");
  }
});

/**
 * Automatically adds idempotency token when not set
 */
it("RestJsonQueryIdempotencyTokenAutoFill:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryIdempotencyTokenAutoFillCommand({
    token: "00000000-0000-4000-8000-000000000000",
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/QueryIdempotencyTokenAutoFill");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("token=00000000-0000-4000-8000-000000000000");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Uses the given idempotency token as-is
 */
it("RestJsonQueryIdempotencyTokenAutoFillIsSet:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryIdempotencyTokenAutoFillCommand({
    token: "00000000-0000-4000-8000-000000000000",
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/QueryIdempotencyTokenAutoFill");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("token=00000000-0000-4000-8000-000000000000");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serialize query params from map of list strings
 */
it("RestJsonQueryParamsStringListMap:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryParamsAsStringListMapCommand({
    qux: "named",

    foo: {
      baz: ["bar", "qux"],
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/StringListMap");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("corge=named");
    expect(queryString).toContain("baz=bar");
    expect(queryString).toContain("baz=qux");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Prefer named query parameters when serializing
 */
it("RestJsonQueryPrecedence:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new QueryPrecedenceCommand({
    foo: "named",

    baz: {
      bar: "fromMap",

      qux: "alsoFromMap",
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/Precedence");

    const queryString = buildQueryString(r.query);
    expect(queryString).toContain("bar=named");
    expect(queryString).toContain("qux=alsoFromMap");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes recursive structures
 */
it("RestJsonRecursiveShapes:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new RecursiveShapesCommand({
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/RecursiveShapes");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"nested\": {
            \"foo\": \"Foo1\",
            \"nested\": {
                \"bar\": \"Bar1\",
                \"recursiveMember\": {
                    \"foo\": \"Foo2\",
                    \"nested\": {
                        \"bar\": \"Bar2\"
                    }
                }
            }
        }
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes recursive structures
 */
it("RestJsonRecursiveShapes:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "nested": {
              "foo": "Foo1",
              "nested": {
                  "bar": "Bar1",
                  "recursiveMember": {
                      "foo": "Foo2",
                      "nested": {
                          "bar": "Bar2"
                      }
                  }
              }
          }
      }`
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
  expect(r["$metadata"].httpStatusCode).toBe(200);
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
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes simple scalar properties
 */
it("RestJsonSimpleScalarProperties:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleScalarPropertiesCommand({
    foo: "Foo",

    stringValue: "string",

    trueBooleanValue: true,

    falseBooleanValue: false,

    byteValue: 1,

    shortValue: 2,

    integerValue: 3,

    longValue: 4,

    floatValue: 5.5,

    doubleValue: 6.5,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/SimpleScalarProperties");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");
    expect(r.headers["x-foo"]).toBeDefined();
    expect(r.headers["x-foo"]).toBe("Foo");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"stringValue\": \"string\",
        \"trueBooleanValue\": true,
        \"falseBooleanValue\": false,
        \"byteValue\": 1,
        \"shortValue\": 2,
        \"integerValue\": 3,
        \"longValue\": 4,
        \"floatValue\": 5.5,
        \"DoubleDribble\": 6.5
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Rest Json should not serialize null structure values
 */
it("RestJsonDoesntSerializeNullStructureValues:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleScalarPropertiesCommand({
    stringValue: null,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/SimpleScalarProperties");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{}`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Supports handling NaN float values.
 */
it("RestJsonSupportsNaNFloatInputs:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleScalarPropertiesCommand({
    floatValue: NaN,

    doubleValue: NaN,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/SimpleScalarProperties");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"floatValue\": \"NaN\",
        \"DoubleDribble\": \"NaN\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Supports handling Infinity float values.
 */
it("RestJsonSupportsInfinityFloatInputs:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleScalarPropertiesCommand({
    floatValue: Infinity,

    doubleValue: Infinity,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/SimpleScalarProperties");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"floatValue\": \"Infinity\",
        \"DoubleDribble\": \"Infinity\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Supports handling -Infinity float values.
 */
it("RestJsonSupportsNegativeInfinityFloatInputs:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new SimpleScalarPropertiesCommand({
    floatValue: -Infinity,

    doubleValue: -Infinity,
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
    expect(r.method).toBe("PUT");
    expect(r.path).toBe("/SimpleScalarProperties");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"floatValue\": \"-Infinity\",
        \"DoubleDribble\": \"-Infinity\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes simple scalar properties
 */
it("RestJsonSimpleScalarProperties:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
        "content-type": "application/json",
      },
      `{
          "stringValue": "string",
          "trueBooleanValue": true,
          "falseBooleanValue": false,
          "byteValue": 1,
          "shortValue": 2,
          "integerValue": 3,
          "longValue": 4,
          "floatValue": 5.5,
          "DoubleDribble": 6.5
      }`
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
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      foo: "Foo",

      stringValue: "string",

      trueBooleanValue: true,

      falseBooleanValue: false,

      byteValue: 1,

      shortValue: 2,

      integerValue: 3,

      longValue: 4,

      floatValue: 5.5,

      doubleValue: 6.5,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Rest Json should not deserialize null structure values
 */
it("RestJsonDoesntDeserializeNullStructureValues:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "stringValue": null
      }`
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
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * Supports handling NaN float values.
 */
it("RestJsonSupportsNaNFloatInputs:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "floatValue": "NaN",
          "DoubleDribble": "NaN"
      }`
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
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      floatValue: NaN,

      doubleValue: NaN,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling Infinity float values.
 */
it("RestJsonSupportsInfinityFloatInputs:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "floatValue": "Infinity",
          "DoubleDribble": "Infinity"
      }`
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
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      floatValue: Infinity,

      doubleValue: Infinity,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling -Infinity float values.
 */
it("RestJsonSupportsNegativeInfinityFloatInputs:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
      },
      `{
          "floatValue": "-Infinity",
          "DoubleDribble": "-Infinity"
      }`
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
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      floatValue: -Infinity,

      doubleValue: -Infinity,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes a blob in the HTTP payload
 */
it("RestJsonStreamingTraitsWithBlob:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new StreamingTraitsCommand({
    foo: "Foo",

    blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/StreamingTraits");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/octet-stream");
    expect(r.headers["x-foo"]).toBeDefined();
    expect(r.headers["x-foo"]).toBe("Foo");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `blobby blob blob`;
    const unequalParts: any = compareEquivalentOctetStreamBodies(utf8Encoder, bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonStreamingTraitsWithNoBlobBody:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new StreamingTraitsCommand({
    foo: "Foo",
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/StreamingTraits");

    expect(r.headers["x-foo"]).toBeDefined();
    expect(r.headers["x-foo"]).toBe("Foo");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes a blob in the HTTP payload
 */
it("RestJsonStreamingTraitsWithBlob:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
        "content-type": "application/octet-stream",
      },
      `blobby blob blob`
    ),
  });

  const params: any = {};
  const command = new StreamingTraitsCommand(params);

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
      foo: "Foo",

      blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
    },
  ][0];
  const comparableBlob = await client.config.streamCollector(r["blob"]);
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    if (param === "blob") {
      expect(equivalentContents(comparableBlob, paramsToValidate[param])).toBe(true);
    } else {
      expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
    }
  });
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonStreamingTraitsWithNoBlobBody:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new StreamingTraitsCommand(params);

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
      foo: "Foo",
    },
  ][0];
  const comparableBlob = await client.config.streamCollector(r["blob"]);
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    if (param === "blob") {
      expect(equivalentContents(comparableBlob, paramsToValidate[param])).toBe(true);
    } else {
      expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
    }
  });
});

/**
 * Serializes a blob in the HTTP payload with a required length
 */
it("RestJsonStreamingTraitsRequireLengthWithBlob:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new StreamingTraitsRequireLengthCommand({
    foo: "Foo",

    blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/StreamingTraitsRequireLength");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/octet-stream");
    expect(r.headers["x-foo"]).toBeDefined();
    expect(r.headers["x-foo"]).toBe("Foo");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `blobby blob blob`;
    const unequalParts: any = compareEquivalentOctetStreamBodies(utf8Encoder, bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonStreamingTraitsRequireLengthWithNoBlobBody:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new StreamingTraitsRequireLengthCommand({
    foo: "Foo",
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/StreamingTraitsRequireLength");

    expect(r.headers["x-foo"]).toBeDefined();
    expect(r.headers["x-foo"]).toBe("Foo");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonStreamingTraitsWithMediaTypeWithBlob:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new StreamingTraitsWithMediaTypeCommand({
    foo: "Foo",

    blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/StreamingTraitsWithMediaType");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("text/plain");
    expect(r.headers["x-foo"]).toBeDefined();
    expect(r.headers["x-foo"]).toBe("Foo");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `blobby blob blob`;
    const unequalParts: any = compareEquivalentOctetStreamBodies(utf8Encoder, bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonStreamingTraitsWithMediaTypeWithBlob:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
        "content-type": "text/plain",
      },
      `blobby blob blob`
    ),
  });

  const params: any = {};
  const command = new StreamingTraitsWithMediaTypeCommand(params);

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
      foo: "Foo",

      blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
    },
  ][0];
  const comparableBlob = await client.config.streamCollector(r["blob"]);
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    if (param === "blob") {
      expect(equivalentContents(comparableBlob, paramsToValidate[param])).toBe(true);
    } else {
      expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
    }
  });
});

/**
 * Serializes a structure
 */
it("RestJsonTestBodyStructure:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new TestBodyStructureCommand({
    testConfig: {
      timeout: 10,
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/body");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{\"testConfig\":
        {\"timeout\": 10}
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes an empty structure in the body
 */
it("RestJsonHttpWithEmptyBody:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new TestBodyStructureCommand({} as any);
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
    expect(r.path).toBe("/body");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{}`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a GET request with no modeled body
 */
it("RestJsonHttpWithNoModeledBody:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new TestNoPayloadCommand({} as any);
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
    expect(r.path).toBe("/no_payload");

    expect(r.headers["content-length"]).toBeUndefined();
    expect(r.headers["content-type"]).toBeUndefined();

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes a GET request with header member but no modeled body
 */
it("RestJsonHttpWithHeaderMemberNoModeledBody:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new TestNoPayloadCommand({
    testId: "t-12345",
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
    expect(r.path).toBe("/no_payload");

    expect(r.headers["content-length"]).toBeUndefined();
    expect(r.headers["content-type"]).toBeUndefined();

    expect(r.headers["x-amz-test-id"]).toBeDefined();
    expect(r.headers["x-amz-test-id"]).toBe("t-12345");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes a payload targeting an empty blob
 */
it("RestJsonHttpWithEmptyBlobPayload:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new TestPayloadBlobCommand({} as any);
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
    expect(r.path).toBe("/blob_payload");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/octet-stream");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes a payload targeting a blob
 */
it("RestJsonTestPayloadBlob:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new TestPayloadBlobCommand({
    contentType: "image/jpg",

    data: Uint8Array.from("1234", (c) => c.charCodeAt(0)),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/blob_payload");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("image/jpg");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `1234`;
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a payload targeting an empty structure
 */
it("RestJsonHttpWithEmptyStructurePayload:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new TestPayloadStructureCommand({} as any);
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
    expect(r.path).toBe("/payload");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{}`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a payload targeting a structure
 */
it("RestJsonTestPayloadStructure:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new TestPayloadStructureCommand({
    payloadConfig: {
      data: 25,
    } as any,
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/payload");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{\"data\": 25
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes an request with header members but no payload
 */
it("RestJsonHttpWithHeadersButNoPayload:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new TestPayloadStructureCommand({
    testId: "t-12345",
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/payload");
    expect(r.headers["content-length"]).toBeDefined();

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/json");
    expect(r.headers["x-amz-test-id"]).toBeDefined();
    expect(r.headers["x-amz-test-id"]).toBe("t-12345");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{}`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Tests how timestamp request headers are serialized
 */
it("RestJsonTimestampFormatHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new TimestampFormatHeadersCommand({
    memberEpochSeconds: new Date(1576540098000),

    memberHttpDate: new Date(1576540098000),

    memberDateTime: new Date(1576540098000),

    defaultFormat: new Date(1576540098000),

    targetEpochSeconds: new Date(1576540098000),

    targetHttpDate: new Date(1576540098000),

    targetDateTime: new Date(1576540098000),
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/TimestampFormatHeaders");

    expect(r.headers["x-defaultformat"]).toBeDefined();
    expect(r.headers["x-defaultformat"]).toBe("Mon, 16 Dec 2019 23:48:18 GMT");
    expect(r.headers["x-memberdatetime"]).toBeDefined();
    expect(r.headers["x-memberdatetime"]).toBe("2019-12-16T23:48:18Z");
    expect(r.headers["x-memberepochseconds"]).toBeDefined();
    expect(r.headers["x-memberepochseconds"]).toBe("1576540098");
    expect(r.headers["x-memberhttpdate"]).toBeDefined();
    expect(r.headers["x-memberhttpdate"]).toBe("Mon, 16 Dec 2019 23:48:18 GMT");
    expect(r.headers["x-targetdatetime"]).toBeDefined();
    expect(r.headers["x-targetdatetime"]).toBe("2019-12-16T23:48:18Z");
    expect(r.headers["x-targetepochseconds"]).toBeDefined();
    expect(r.headers["x-targetepochseconds"]).toBe("1576540098");
    expect(r.headers["x-targethttpdate"]).toBeDefined();
    expect(r.headers["x-targethttpdate"]).toBe("Mon, 16 Dec 2019 23:48:18 GMT");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests how timestamp response headers are serialized
 */
it("RestJsonTimestampFormatHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, {
      "x-targetepochseconds": "1576540098",
      "x-memberdatetime": "2019-12-16T23:48:18Z",
      "x-defaultformat": "Mon, 16 Dec 2019 23:48:18 GMT",
      "x-memberepochseconds": "1576540098",
      "x-targethttpdate": "Mon, 16 Dec 2019 23:48:18 GMT",
      "x-memberhttpdate": "Mon, 16 Dec 2019 23:48:18 GMT",
      "x-targetdatetime": "2019-12-16T23:48:18Z",
    }),
  });

  const params: any = {};
  const command = new TimestampFormatHeadersCommand(params);

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
      memberEpochSeconds: new Date(1576540098000),

      memberHttpDate: new Date(1576540098000),

      memberDateTime: new Date(1576540098000),

      defaultFormat: new Date(1576540098000),

      targetEpochSeconds: new Date(1576540098000),

      targetHttpDate: new Date(1576540098000),

      targetDateTime: new Date(1576540098000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * A unit type input serializes no payload. When clients do not
 * need to serialize any data in the payload, they should omit
 * a payload altogether.
 */
it("RestJsonUnitInputAndOutput:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new UnitInputAndOutputCommand({});
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
    expect(r.path).toBe("/UnitInputAndOutput");

    expect(r.body).toBeFalsy();
  }
});

/**
 * When an operation defines Unit output, the service will respond
 * with an empty payload, and may optionally include the content-type
 * header.
 */
it("RestJsonUnitInputAndOutputNoOutput:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined, ``),
  });

  const params: any = {};
  const command = new UnitInputAndOutputCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got " + err);
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
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

/**
 * Returns a map of key names that were un-equal to value objects showing the
 * discrepancies between the components.
 */
const compareEquivalentOctetStreamBodies = (
  utf8Encoder: __Encoder,
  expectedBody: string,
  generatedBody: Uint8Array
): Object => {
  const expectedParts = { Value: expectedBody };
  const generatedParts = { Value: utf8Encoder(generatedBody) };

  return compareParts(expectedParts, generatedParts);
};

/**
 * Returns a map of key names that were un-equal to value objects showing the
 * discrepancies between the components.
 */
const compareEquivalentUnknownTypeBodies = (
  utf8Encoder: __Encoder,
  expectedBody: string,
  generatedBody: string | Uint8Array
): Object => {
  const expectedParts = { Value: expectedBody };
  const generatedParts = {
    Value: generatedBody instanceof Uint8Array ? utf8Encoder(generatedBody) : generatedBody,
  };

  return compareParts(expectedParts, generatedParts);
};
