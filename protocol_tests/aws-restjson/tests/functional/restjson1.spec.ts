import { RestJsonProtocolClient } from "../../RestJsonProtocolClient";
import { AllQueryStringTypesCommand } from "../../commands/AllQueryStringTypesCommand";
import { ConstantAndVariableQueryStringCommand } from "../../commands/ConstantAndVariableQueryStringCommand";
import { ConstantQueryStringCommand } from "../../commands/ConstantQueryStringCommand";
import { EmptyInputAndEmptyOutputCommand } from "../../commands/EmptyInputAndEmptyOutputCommand";
import { EndpointOperationCommand } from "../../commands/EndpointOperationCommand";
import { EndpointWithHostLabelOperationCommand } from "../../commands/EndpointWithHostLabelOperationCommand";
import { GreetingWithErrorsCommand } from "../../commands/GreetingWithErrorsCommand";
import { HttpPayloadTraitsCommand } from "../../commands/HttpPayloadTraitsCommand";
import { HttpPayloadTraitsWithMediaTypeCommand } from "../../commands/HttpPayloadTraitsWithMediaTypeCommand";
import { HttpPayloadWithStructureCommand } from "../../commands/HttpPayloadWithStructureCommand";
import { HttpPrefixHeadersCommand } from "../../commands/HttpPrefixHeadersCommand";
import { HttpPrefixHeadersResponseCommand } from "../../commands/HttpPrefixHeadersResponseCommand";
import { HttpRequestWithGreedyLabelInPathCommand } from "../../commands/HttpRequestWithGreedyLabelInPathCommand";
import { HttpRequestWithLabelsAndTimestampFormatCommand } from "../../commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import { HttpRequestWithLabelsCommand } from "../../commands/HttpRequestWithLabelsCommand";
import { HttpResponseCodeCommand } from "../../commands/HttpResponseCodeCommand";
import { IgnoreQueryParamsInResponseCommand } from "../../commands/IgnoreQueryParamsInResponseCommand";
import { InlineDocumentAsPayloadCommand } from "../../commands/InlineDocumentAsPayloadCommand";
import { InlineDocumentCommand } from "../../commands/InlineDocumentCommand";
import { InputAndOutputWithHeadersCommand } from "../../commands/InputAndOutputWithHeadersCommand";
import { JsonBlobsCommand } from "../../commands/JsonBlobsCommand";
import { JsonEnumsCommand } from "../../commands/JsonEnumsCommand";
import { JsonListsCommand } from "../../commands/JsonListsCommand";
import { JsonMapsCommand } from "../../commands/JsonMapsCommand";
import { JsonTimestampsCommand } from "../../commands/JsonTimestampsCommand";
import { JsonUnionsCommand } from "../../commands/JsonUnionsCommand";
import { MediaTypeHeaderCommand } from "../../commands/MediaTypeHeaderCommand";
import { NoInputAndNoOutputCommand } from "../../commands/NoInputAndNoOutputCommand";
import { NoInputAndOutputCommand } from "../../commands/NoInputAndOutputCommand";
import { NullAndEmptyHeadersClientCommand } from "../../commands/NullAndEmptyHeadersClientCommand";
import { OmitsNullSerializesEmptyStringCommand } from "../../commands/OmitsNullSerializesEmptyStringCommand";
import { QueryIdempotencyTokenAutoFillCommand } from "../../commands/QueryIdempotencyTokenAutoFillCommand";
import { RecursiveShapesCommand } from "../../commands/RecursiveShapesCommand";
import { SimpleScalarPropertiesCommand } from "../../commands/SimpleScalarPropertiesCommand";
import { StreamingTraitsCommand } from "../../commands/StreamingTraitsCommand";
import { StreamingTraitsRequireLengthCommand } from "../../commands/StreamingTraitsRequireLengthCommand";
import { StreamingTraitsWithMediaTypeCommand } from "../../commands/StreamingTraitsWithMediaTypeCommand";
import { TimestampFormatHeadersCommand } from "../../commands/TimestampFormatHeadersCommand";
import { ComplexError, FooError, InvalidGreeting } from "../../models/models_0";
import { serializeFrameworkException } from "../../protocols/Aws_restJson1";
import { getRestJsonServiceHandler } from "../../server";
import { RestJsonService, RestJsonServiceHandler, RestJsonServiceOperations } from "../../server/RestJsonService";
import { AllQueryStringTypes } from "../../server/operations/AllQueryStringTypes";
import { ConstantAndVariableQueryString } from "../../server/operations/ConstantAndVariableQueryString";
import { ConstantQueryString } from "../../server/operations/ConstantQueryString";
import {
  EmptyInputAndEmptyOutput,
  EmptyInputAndEmptyOutputSerializer,
  EmptyInputAndEmptyOutputServerOutput,
} from "../../server/operations/EmptyInputAndEmptyOutput";
import { EndpointOperation } from "../../server/operations/EndpointOperation";
import { EndpointWithHostLabelOperation } from "../../server/operations/EndpointWithHostLabelOperation";
import {
  GreetingWithErrorsSerializer,
  GreetingWithErrorsServerOutput,
} from "../../server/operations/GreetingWithErrors";
import {
  HttpPayloadTraits,
  HttpPayloadTraitsSerializer,
  HttpPayloadTraitsServerOutput,
} from "../../server/operations/HttpPayloadTraits";
import {
  HttpPayloadTraitsWithMediaType,
  HttpPayloadTraitsWithMediaTypeSerializer,
  HttpPayloadTraitsWithMediaTypeServerOutput,
} from "../../server/operations/HttpPayloadTraitsWithMediaType";
import {
  HttpPayloadWithStructure,
  HttpPayloadWithStructureSerializer,
  HttpPayloadWithStructureServerOutput,
} from "../../server/operations/HttpPayloadWithStructure";
import {
  HttpPrefixHeaders,
  HttpPrefixHeadersSerializer,
  HttpPrefixHeadersServerOutput,
} from "../../server/operations/HttpPrefixHeaders";
import {
  HttpPrefixHeadersResponseSerializer,
  HttpPrefixHeadersResponseServerOutput,
} from "../../server/operations/HttpPrefixHeadersResponse";
import { HttpRequestWithGreedyLabelInPath } from "../../server/operations/HttpRequestWithGreedyLabelInPath";
import { HttpRequestWithLabels } from "../../server/operations/HttpRequestWithLabels";
import { HttpRequestWithLabelsAndTimestampFormat } from "../../server/operations/HttpRequestWithLabelsAndTimestampFormat";
import { HttpResponseCodeSerializer, HttpResponseCodeServerOutput } from "../../server/operations/HttpResponseCode";
import {
  IgnoreQueryParamsInResponseSerializer,
  IgnoreQueryParamsInResponseServerOutput,
} from "../../server/operations/IgnoreQueryParamsInResponse";
import {
  InlineDocument,
  InlineDocumentSerializer,
  InlineDocumentServerOutput,
} from "../../server/operations/InlineDocument";
import {
  InlineDocumentAsPayload,
  InlineDocumentAsPayloadSerializer,
  InlineDocumentAsPayloadServerOutput,
} from "../../server/operations/InlineDocumentAsPayload";
import {
  InputAndOutputWithHeaders,
  InputAndOutputWithHeadersSerializer,
  InputAndOutputWithHeadersServerOutput,
} from "../../server/operations/InputAndOutputWithHeaders";
import { JsonBlobs, JsonBlobsSerializer, JsonBlobsServerOutput } from "../../server/operations/JsonBlobs";
import { JsonEnums, JsonEnumsSerializer, JsonEnumsServerOutput } from "../../server/operations/JsonEnums";
import { JsonLists, JsonListsSerializer, JsonListsServerOutput } from "../../server/operations/JsonLists";
import { JsonMaps, JsonMapsSerializer, JsonMapsServerOutput } from "../../server/operations/JsonMaps";
import {
  JsonTimestamps,
  JsonTimestampsSerializer,
  JsonTimestampsServerOutput,
} from "../../server/operations/JsonTimestamps";
import { JsonUnions, JsonUnionsSerializer, JsonUnionsServerOutput } from "../../server/operations/JsonUnions";
import {
  MediaTypeHeader,
  MediaTypeHeaderSerializer,
  MediaTypeHeaderServerOutput,
} from "../../server/operations/MediaTypeHeader";
import {
  NoInputAndNoOutput,
  NoInputAndNoOutputSerializer,
  NoInputAndNoOutputServerOutput,
} from "../../server/operations/NoInputAndNoOutput";
import {
  NoInputAndOutput,
  NoInputAndOutputSerializer,
  NoInputAndOutputServerOutput,
} from "../../server/operations/NoInputAndOutput";
import {
  NullAndEmptyHeadersServerSerializer,
  NullAndEmptyHeadersServerServerOutput,
} from "../../server/operations/NullAndEmptyHeadersServer";
import { OmitsNullSerializesEmptyString } from "../../server/operations/OmitsNullSerializesEmptyString";
import {
  RecursiveShapes,
  RecursiveShapesSerializer,
  RecursiveShapesServerOutput,
} from "../../server/operations/RecursiveShapes";
import {
  SimpleScalarProperties,
  SimpleScalarPropertiesSerializer,
  SimpleScalarPropertiesServerOutput,
} from "../../server/operations/SimpleScalarProperties";
import {
  StreamingTraits,
  StreamingTraitsSerializer,
  StreamingTraitsServerOutput,
} from "../../server/operations/StreamingTraits";
import {
  StreamingTraitsRequireLength,
  StreamingTraitsRequireLengthSerializer,
  StreamingTraitsRequireLengthServerOutput,
} from "../../server/operations/StreamingTraitsRequireLength";
import {
  StreamingTraitsWithMediaType,
  StreamingTraitsWithMediaTypeSerializer,
  StreamingTraitsWithMediaTypeServerOutput,
} from "../../server/operations/StreamingTraitsWithMediaType";
import {
  TimestampFormatHeaders,
  TimestampFormatHeadersSerializer,
  TimestampFormatHeadersServerOutput,
} from "../../server/operations/TimestampFormatHeaders";
import { streamCollector as __streamCollector } from "@aws-sdk/node-http-handler";
import { buildQueryString } from "@aws-sdk/querystring-builder";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { Encoder as __Encoder } from "@aws-sdk/types";
import { toUtf8 as __utf8Encoder } from "@aws-sdk/util-utf8-node";
import { OperationSerializer as __OperationSerializer, httpbinding } from "@aws-smithy/server-common";
import { HttpHandlerOptions, HeaderBag } from "@aws-sdk/types";
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { Readable } from "stream";

/**
 * Throws an expected exception that contains the serialized request.
 */
class EXPECTED_REQUEST_SERIALIZATION_ERROR {
  constructor(readonly request: HttpRequest) {}
}

/**
 * Throws an EXPECTED_REQUEST_SERIALIZATION_ERROR error before sending a
 * request. The thrown exception contains the serialized request.
 */
class RequestSerializationTestHandler implements HttpHandler {
  handle(request: HttpRequest, options?: HttpHandlerOptions): Promise<{ response: HttpResponse }> {
    return Promise.reject(new EXPECTED_REQUEST_SERIALIZATION_ERROR(request));
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
      response: {
        statusCode: this.code,
        headers: this.headers,
        body: Readable.from([this.body]),
      },
    });
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
  let localExpected = expected;

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

    queryIntegerList: [1, 2, 3],

    queryIntegerSet: [1, 2, 3],

    queryLong: 4,

    queryFloat: 1.1,

    queryDouble: 1.1,

    queryDoubleList: [1.1, 2.1, 3.1],

    queryBoolean: true,

    queryBooleanList: [true, false, true],

    queryTimestamp: new Date(1000),

    queryTimestampList: [new Date(1000), new Date(2000), new Date(3000)],

    queryEnum: "Foo",

    queryEnumList: ["Foo", "Baz", "Bar"],
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

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes query string parameters with all supported types
 */
it("RestJsonAllQueryStringTypes:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    AllQueryStringTypes: testFunction as AllQueryStringTypes,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/AllQueryStringTypesInput",
    query: {
      Enum: "Foo",
      BooleanList: ["true", "false", "true"],
      StringList: ["a", "b", "c"],
      String: "Hello there",
      Timestamp: "1970-01-01T00:00:01Z",
      Double: "1.1",
      Integer: "3",
      Float: "1.1",
      TimestampList: ["1970-01-01T00:00:01Z", "1970-01-01T00:00:02Z", "1970-01-01T00:00:03Z"],
      EnumList: ["Foo", "Baz", "Bar"],
      DoubleList: ["1.1", "2.1", "3.1"],
      Byte: "1",
      Long: "4",
      IntegerList: ["1", "2", "3"],
      StringSet: ["a", "b", "c"],
      IntegerSet: ["1", "2", "3"],
      Boolean: "true",
      Short: "2",
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      queryString: "Hello there",

      queryStringList: ["a", "b", "c"],

      queryStringSet: ["a", "b", "c"],

      queryByte: 1,

      queryShort: 2,

      queryInteger: 3,

      queryIntegerList: [1, 2, 3],

      queryIntegerSet: [1, 2, 3],

      queryLong: 4,

      queryFloat: 1.1,

      queryDouble: 1.1,

      queryDoubleList: [1.1, 2.1, 3.1],

      queryBoolean: true,

      queryBooleanList: [true, false, true],

      queryTimestamp: new Date(1000),

      queryTimestampList: [new Date(1000), new Date(2000), new Date(3000)],

      queryEnum: "Foo",

      queryEnumList: ["Foo", "Baz", "Bar"],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
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
 * Mixes constant and variable query string parameters
 */
it("RestJsonConstantAndVariableQueryStringMissingOneValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    ConstantAndVariableQueryString: testFunction as ConstantAndVariableQueryString,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/ConstantAndVariableQueryString",
    query: {
      foo: "bar",
      baz: "bam",
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      baz: "bam",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Mixes constant and variable query string parameters
 */
it("RestJsonConstantAndVariableQueryStringAllValues:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    ConstantAndVariableQueryString: testFunction as ConstantAndVariableQueryString,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/ConstantAndVariableQueryString",
    query: {
      maybeSet: "yes",
      foo: "bar",
      baz: "bam",
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      baz: "bam",

      maybeSet: "yes",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
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
 * Includes constant query string parameters
 */
it("RestJsonConstantQueryString:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    ConstantQueryString: testFunction as ConstantQueryString,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/ConstantQueryString/hi",
    query: {
      foo: "bar",
      hello: "",
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      hello: "hi",
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * Clients should not serialize a JSON payload when no parameters
 * are given that are sent in the body. A service will tolerate
 * clients that omit a payload or that send a JSON object.
 */
it("RestJsonEmptyInputAndEmptyOutput:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    EmptyInputAndEmptyOutput: testFunction as EmptyInputAndEmptyOutput,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/EmptyInputAndEmptyOutput",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];
});

/**
 * Similar to RestJsonEmptyInputAndEmptyOutput, but ensures that
 * services gracefully handles receiving a JSON object.
 */
it("RestJsonEmptyInputAndEmptyOutputWithJson:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    EmptyInputAndEmptyOutput: testFunction as EmptyInputAndEmptyOutput,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/EmptyInputAndEmptyOutput",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(["{}"]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];
});

/**
 * As of January 2021, server implementations are expected to
 * respond with a JSON object regardless of if the output
 * parameters are empty.
 */
it("RestJsonEmptyInputAndEmptyOutput:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    EmptyInputAndEmptyOutput(input: any, request: HttpRequest): Promise<EmptyInputAndEmptyOutputServerOutput> {
      let response = {} as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "EmptyInputAndEmptyOutput">("POST", [], [], {
      service: "RestJson",
      operation: "EmptyInputAndEmptyOutput",
    }),
  ]);
  class TestSerializer extends EmptyInputAndEmptyOutputSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Operations can prepend to the given host if they define the
 * endpoint trait.
 */
it("RestJsonEndpointTrait:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
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
 * endpoint trait.
 */
it("RestJsonEndpointTrait:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    EndpointOperation: testFunction as EndpointOperation,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "example.com",
    path: "/EndpointOperation",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];
});

/**
 * Operations can prepend to the given host if they define the
 * endpoint trait, and can use the host label trait to define
 * further customization based on user input.
 */
it("RestJsonEndpointTraitWithHostLabel:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
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
 * Operations can prepend to the given host if they define the
 * endpoint trait, and can use the host label trait to define
 * further customization based on user input.
 */
it("RestJsonEndpointTraitWithHostLabel:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    EndpointWithHostLabelOperation: testFunction as EndpointWithHostLabelOperation,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "example.com",
    path: "/EndpointWithHostLabelOperation",
    query: {},
    headers: {},
    body: Readable.from(['{"label": "bar"}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      label: "bar",
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
 * Ensures that operations with errors successfully know how
 * to deserialize a successful response. As of January 2021,
 * server implementations are expected to respond with a
 * JSON object regardless of if the output parameters are
 * empty.
 */
it("RestJsonGreetingWithErrors:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    GreetingWithErrors(input: any, request: HttpRequest): Promise<GreetingWithErrorsServerOutput> {
      let response = {
        greeting: "Hello",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "GreetingWithErrors">("POST", [], [], {
      service: "RestJson",
      operation: "GreetingWithErrors",
    }),
  ]);
  class TestSerializer extends GreetingWithErrorsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-greeting"]).toBeDefined();
  expect(r.headers["x-greeting"]).toBe("Hello");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes a complex error with no message member
 */
it("RestJsonComplexErrorWithNoMessage:ServerErrorResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    GreetingWithErrors(input: any, request: HttpRequest): Promise<GreetingWithErrorsServerOutput> {
      const response = {
        Header: "Header",

        TopLevel: "Top level",

        Nested: {
          Foo: "bar",
        } as any,
      } as any;
      const error: ComplexError = {
        ...response,
        name: "ComplexError",
        $fault: "client",
        $metadata: {},
      };
      throw error;
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "GreetingWithErrors">("POST", [], [], {
      service: "RestJson",
      operation: "GreetingWithErrors",
    }),
  ]);
  class TestSerializer extends GreetingWithErrorsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(403);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ComplexError");
  expect(r.headers["x-header"]).toBeDefined();
  expect(r.headers["x-header"]).toBe("Header");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
            \"TopLevel\": \"Top level\",
            \"Nested\": {
                \"Fooooo\": \"bar\"
            }
        }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

it("RestJsonEmptyComplexErrorWithNoMessage:ServerErrorResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    GreetingWithErrors(input: any, request: HttpRequest): Promise<GreetingWithErrorsServerOutput> {
      const response = {} as any;
      const error: ComplexError = {
        ...response,
        name: "ComplexError",
        $fault: "client",
        $metadata: {},
      };
      throw error;
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "GreetingWithErrors">("POST", [], [], {
      service: "RestJson",
      operation: "GreetingWithErrors",
    }),
  ]);
  class TestSerializer extends GreetingWithErrorsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(403);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("ComplexError");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Parses simple JSON errors
 */
it("RestJsonInvalidGreetingError:ServerErrorResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    GreetingWithErrors(input: any, request: HttpRequest): Promise<GreetingWithErrorsServerOutput> {
      const response = {
        Message: "Hi",
      } as any;
      const error: InvalidGreeting = {
        ...response,
        name: "InvalidGreeting",
        $fault: "client",
        $metadata: {},
      };
      throw error;
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "GreetingWithErrors">("POST", [], [], {
      service: "RestJson",
      operation: "GreetingWithErrors",
    }),
  ]);
  class TestSerializer extends GreetingWithErrorsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(400);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("InvalidGreeting");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                \"Message\": \"Hi\"
            }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
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
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
 * Serializes a blob in the HTTP payload
 */
it("RestJsonHttpPayloadTraitsWithBlob:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    HttpPayloadTraits: testFunction as HttpPayloadTraits,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/HttpPayloadTraits",
    query: {},
    headers: {
      "x-foo": "Foo",
      "content-type": "application/octet-stream",
    },
    body: Readable.from(["blobby blob blob"]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
it("RestJsonHttpPayloadTraitsWithNoBlobBody:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    HttpPayloadTraits: testFunction as HttpPayloadTraits,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/HttpPayloadTraits",
    query: {},
    headers: {
      "x-foo": "Foo",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes a blob in the HTTP payload
 */
it("RestJsonHttpPayloadTraitsWithBlob:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    HttpPayloadTraits(input: any, request: HttpRequest): Promise<HttpPayloadTraitsServerOutput> {
      let response = {
        foo: "Foo",

        blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "HttpPayloadTraits">("POST", [], [], {
      service: "RestJson",
      operation: "HttpPayloadTraits",
    }),
  ]);
  class TestSerializer extends HttpPayloadTraitsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `blobby blob blob`;
  const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonHttpPayloadTraitsWithNoBlobBody:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    HttpPayloadTraits(input: any, request: HttpRequest): Promise<HttpPayloadTraitsServerOutput> {
      let response = {
        foo: "Foo",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "HttpPayloadTraits">("POST", [], [], {
      service: "RestJson",
      operation: "HttpPayloadTraits",
    }),
  ]);
  class TestSerializer extends HttpPayloadTraitsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeFalsy();
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
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
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
    fail("Expected a valid response to be returned, got err.");
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
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonHttpPayloadTraitsWithMediaTypeWithBlob:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    HttpPayloadTraitsWithMediaType: testFunction as HttpPayloadTraitsWithMediaType,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/HttpPayloadTraitsWithMediaType",
    query: {},
    headers: {
      "x-foo": "Foo",
      "content-type": "text/plain",
    },
    body: Readable.from(["blobby blob blob"]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonHttpPayloadTraitsWithMediaTypeWithBlob:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    HttpPayloadTraitsWithMediaType(
      input: any,
      request: HttpRequest
    ): Promise<HttpPayloadTraitsWithMediaTypeServerOutput> {
      let response = {
        foo: "Foo",

        blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "HttpPayloadTraitsWithMediaType">("POST", [], [], {
      service: "RestJson",
      operation: "HttpPayloadTraitsWithMediaType",
    }),
  ]);
  class TestSerializer extends HttpPayloadTraitsWithMediaTypeSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("text/plain");
  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `blobby blob blob`;
  const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
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
    fail("Expected a valid response to be returned, got err.");
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
 * Serializes a structure in the payload
 */
it("RestJsonHttpPayloadWithStructure:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    HttpPayloadWithStructure: testFunction as HttpPayloadWithStructure,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/HttpPayloadWithStructure",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "greeting": "hello",\n    "name": "Phreddy"\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes a structure in the payload
 */
it("RestJsonHttpPayloadWithStructure:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    HttpPayloadWithStructure(input: any, request: HttpRequest): Promise<HttpPayloadWithStructureServerOutput> {
      let response = {
        nested: {
          greeting: "hello",

          name: "Phreddy",
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "HttpPayloadWithStructure">("POST", [], [], {
      service: "RestJson",
      operation: "HttpPayloadWithStructure",
    }),
  ]);
  class TestSerializer extends HttpPayloadWithStructureSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                        \"greeting\": \"hello\",
                        \"name\": \"Phreddy\"
                    }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
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
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
        "x-foo-abc": "Abc value",
        "x-foo-def": "Def value",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new HttpPrefixHeadersCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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
 * Adds headers by prefix
 */
it("RestJsonHttpPrefixHeadersArePresent:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    HttpPrefixHeaders: testFunction as HttpPrefixHeaders,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/HttpPrefixHeaders",
    query: {},
    headers: {
      "x-foo": "Foo",
      "x-foo-abc": "Abc value",
      "x-foo-def": "Def value",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * No prefix headers are serialized because the value is empty
 */
it("RestJsonHttpPrefixHeadersAreNotPresent:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    HttpPrefixHeaders: testFunction as HttpPrefixHeaders,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/HttpPrefixHeaders",
    query: {},
    headers: {
      "x-foo": "Foo",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      foo: "Foo",

      fooMap: {},
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Adds headers by prefix
 */
it("RestJsonHttpPrefixHeadersArePresent:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    HttpPrefixHeaders(input: any, request: HttpRequest): Promise<HttpPrefixHeadersServerOutput> {
      let response = {
        foo: "Foo",

        fooMap: {
          Abc: "Abc value",

          Def: "Def value",
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "HttpPrefixHeaders">("POST", [], [], {
      service: "RestJson",
      operation: "HttpPrefixHeaders",
    }),
  ]);
  class TestSerializer extends HttpPrefixHeadersSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");
  expect(r.headers["x-foo-abc"]).toBeDefined();
  expect(r.headers["x-foo-abc"]).toBe("Abc value");
  expect(r.headers["x-foo-def"]).toBeDefined();
  expect(r.headers["x-foo-def"]).toBe("Def value");

  expect(r.body).toBeFalsy();
});

/**
 * (de)serializes all response headers
 */
it("HttpPrefixHeadersResponse:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
        hello: "Hello",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new HttpPrefixHeadersResponseCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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
 * (de)serializes all response headers
 */
it("HttpPrefixHeadersResponse:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    HttpPrefixHeadersResponse(input: any, request: HttpRequest): Promise<HttpPrefixHeadersResponseServerOutput> {
      let response = {
        prefixHeaders: {
          "X-Foo": "Foo",

          Hello: "Hello",
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "HttpPrefixHeadersResponse">("POST", [], [], {
      service: "RestJson",
      operation: "HttpPrefixHeadersResponse",
    }),
  ]);
  class TestSerializer extends HttpPrefixHeadersResponseSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["hello"]).toBeDefined();
  expect(r.headers["hello"]).toBe("Hello");
  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeFalsy();
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
    foo: "hello",

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
    expect(r.path).toBe("/HttpRequestWithGreedyLabelInPath/foo/hello/baz/there/guy");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes greedy labels and normal labels
 */
it("RestJsonHttpRequestWithGreedyLabelInPath:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    HttpRequestWithGreedyLabelInPath: testFunction as HttpRequestWithGreedyLabelInPath,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/HttpRequestWithGreedyLabelInPath/foo/hello/baz/there/guy",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      foo: "hello",

      baz: "there/guy",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
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
it("RestJsonInputWithHeadersAndAllParams:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    HttpRequestWithLabels: testFunction as HttpRequestWithLabels,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/HttpRequestWithLabels/string/1/2/3/4.1/5.1/true/2019-12-16T23%3A48%3A18Z",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      string: "string",

      short: 1,

      integer: 2,

      long: 3,

      float: 4.1,

      double: 5.1,

      boolean: true,

      timestamp: new Date(1576540098000),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
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
 * Serializes different timestamp formats in URI labels
 */
it("RestJsonHttpRequestWithLabelsAndTimestampFormat:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    HttpRequestWithLabelsAndTimestampFormat: testFunction as HttpRequestWithLabelsAndTimestampFormat,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path:
      "/HttpRequestWithLabelsAndTimestampFormat/1576540098/Mon%2C%2016%20Dec%202019%2023%3A48%3A18%20GMT/2019-12-16T23%3A48%3A18Z/2019-12-16T23%3A48%3A18Z/1576540098/Mon%2C%2016%20Dec%202019%2023%3A48%3A18%20GMT/2019-12-16T23%3A48%3A18Z",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
 * Binds the http response code to an output structure. Note that
 * even though all members are bound outside of the payload, an
 * empty JSON object is serialized in the response. However,
 * clients should be able to handle an empty JSON object or an
 * empty payload without failing to deserialize a response.
 */
it("RestJsonHttpResponseCode:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    HttpResponseCode(input: any, request: HttpRequest): Promise<HttpResponseCodeServerOutput> {
      let response = {
        Status: 201,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "HttpResponseCode">("POST", [], [], {
      service: "RestJson",
      operation: "HttpResponseCode",
    }),
  ]);
  class TestSerializer extends HttpResponseCodeSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(201);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * Query parameters must be ignored when serializing the output
 * of an operation. As of January 2021, server implementations
 * are expected to respond with a JSON object regardless of
 * if the output parameters are empty.
 */
it("RestJsonIgnoreQueryParamsInResponse:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    IgnoreQueryParamsInResponse(input: any, request: HttpRequest): Promise<IgnoreQueryParamsInResponseServerOutput> {
      let response = {} as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "IgnoreQueryParamsInResponse">("POST", [], [], {
      service: "RestJson",
      operation: "IgnoreQueryParamsInResponse",
    }),
  ]);
  class TestSerializer extends IgnoreQueryParamsInResponseSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes inline documents as part of the JSON request payload with no escaping.
 */
it("InlineDocumentInput:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InlineDocumentCommand({
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
    expect(r.path).toBe("/InlineDocument");

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
 * Serializes inline documents as part of the JSON response payload with no escaping.
 */
it("InlineDocumentOutput:Response", async () => {
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
  const command = new InlineDocumentCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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
 * Serializes inline documents as part of the JSON request payload with no escaping.
 */
it("InlineDocumentInput:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    InlineDocument: testFunction as InlineDocument,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/InlineDocument",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "stringValue": "string",\n    "documentValue": {\n        "foo": "bar"\n    }\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes inline documents as part of the JSON response payload with no escaping.
 */
it("InlineDocumentOutput:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    InlineDocument(input: any, request: HttpRequest): Promise<InlineDocumentServerOutput> {
      let response = {
        stringValue: "string",

        documentValue: {
          foo: "bar",
        },
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "InlineDocument">("POST", [], [], {
      service: "RestJson",
      operation: "InlineDocument",
    }),
  ]);
  class TestSerializer extends InlineDocumentSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                  \"stringValue\": \"string\",
                                  \"documentValue\": {
                                      \"foo\": \"bar\"
                                  }
                              }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes an inline document as the target of the httpPayload trait.
 */
it("InlineDocumentAsPayloadInput:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InlineDocumentAsPayloadCommand({
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
    expect(r.path).toBe("/InlineDocumentAsPayload");

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
 * Serializes an inline document as the target of the httpPayload trait.
 */
it("InlineDocumentAsPayloadInputOutput:Response", async () => {
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
  const command = new InlineDocumentAsPayloadCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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
 * Serializes an inline document as the target of the httpPayload trait.
 */
it("InlineDocumentAsPayloadInput:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    InlineDocumentAsPayload: testFunction as InlineDocumentAsPayload,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/InlineDocumentAsPayload",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "foo": "bar"\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes an inline document as the target of the httpPayload trait.
 */
it("InlineDocumentAsPayloadInputOutput:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    InlineDocumentAsPayload(input: any, request: HttpRequest): Promise<InlineDocumentAsPayloadServerOutput> {
      let response = {
        documentValue: {
          foo: "bar",
        },
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "InlineDocumentAsPayload">("POST", [], [], {
      service: "RestJson",
      operation: "InlineDocumentAsPayload",
    }),
  ]);
  class TestSerializer extends InlineDocumentAsPayloadSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                    \"foo\": \"bar\"
                                }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
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

    headerIntegerList: [1, 2, 3],
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
 * Tests responses with string header bindings
 */
it("RestJsonInputAndOutputWithStringHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-stringlist": "a, b, c",
        "x-stringset": "a, b, c",
        "x-string": "Hello",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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
 * Tests responses with numeric header bindings
 */
it("RestJsonInputAndOutputWithNumericHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-float": "1.1",
        "x-byte": "1",
        "x-long": "123",
        "x-integer": "123",
        "x-integerlist": "1, 2, 3",
        "x-double": "1.1",
        "x-short": "123",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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

      headerIntegerList: [1, 2, 3],
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
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-booleanlist": "true, false, true",
        "x-boolean1": "true",
        "x-boolean2": "false",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-timestamplist": "Mon, 16 Dec 2019 23:48:18 GMT, Mon, 16 Dec 2019 23:48:18 GMT",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-enumlist": "Foo, Bar, Baz",
        "x-enum": "Foo",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new InputAndOutputWithHeadersCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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
 * Tests requests with string header bindings
 */
it("RestJsonInputAndOutputWithStringHeaders:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/InputAndOutputWithHeaders",
    query: {},
    headers: {
      "x-stringlist": "a, b, c",
      "x-stringset": "a, b, c",
      "x-string": "Hello",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Tests requests with numeric header bindings
 */
it("RestJsonInputAndOutputWithNumericHeaders:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/InputAndOutputWithHeaders",
    query: {},
    headers: {
      "x-float": "1.1",
      "x-byte": "1",
      "x-long": "123",
      "x-integer": "123",
      "x-integerlist": "1, 2, 3",
      "x-double": "1.1",
      "x-short": "123",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      headerByte: 1,

      headerShort: 123,

      headerInteger: 123,

      headerLong: 123,

      headerFloat: 1.1,

      headerDouble: 1.1,

      headerIntegerList: [1, 2, 3],
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests requests with boolean header bindings
 */
it("RestJsonInputAndOutputWithBooleanHeaders:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/InputAndOutputWithHeaders",
    query: {},
    headers: {
      "x-booleanlist": "true, false, true",
      "x-boolean1": "true",
      "x-boolean2": "false",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Tests requests with timestamp header bindings
 */
it("RestJsonInputAndOutputWithTimestampHeaders:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/InputAndOutputWithHeaders",
    query: {},
    headers: {
      "x-timestamplist": "Mon, 16 Dec 2019 23:48:18 GMT, Mon, 16 Dec 2019 23:48:18 GMT",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Tests requests with enum header bindings
 */
it("RestJsonInputAndOutputWithEnumHeaders:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/InputAndOutputWithHeaders",
    query: {},
    headers: {
      "x-enumlist": "Foo, Bar, Baz",
      "x-enum": "Foo",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Tests responses with string header bindings
 */
it("RestJsonInputAndOutputWithStringHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    InputAndOutputWithHeaders(input: any, request: HttpRequest): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
        headerString: "Hello",

        headerStringList: ["a", "b", "c"],

        headerStringSet: ["a", "b", "c"],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "InputAndOutputWithHeaders">("POST", [], [], {
      service: "RestJson",
      operation: "InputAndOutputWithHeaders",
    }),
  ]);
  class TestSerializer extends InputAndOutputWithHeadersSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-string"]).toBeDefined();
  expect(r.headers["x-string"]).toBe("Hello");
  expect(r.headers["x-stringlist"]).toBeDefined();
  expect(r.headers["x-stringlist"]).toBe("a, b, c");
  expect(r.headers["x-stringset"]).toBeDefined();
  expect(r.headers["x-stringset"]).toBe("a, b, c");

  expect(r.body).toBeFalsy();
});

/**
 * Tests responses with numeric header bindings
 */
it("RestJsonInputAndOutputWithNumericHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    InputAndOutputWithHeaders(input: any, request: HttpRequest): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
        headerByte: 1,

        headerShort: 123,

        headerInteger: 123,

        headerLong: 123,

        headerFloat: 1.1,

        headerDouble: 1.1,

        headerIntegerList: [1, 2, 3],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "InputAndOutputWithHeaders">("POST", [], [], {
      service: "RestJson",
      operation: "InputAndOutputWithHeaders",
    }),
  ]);
  class TestSerializer extends InputAndOutputWithHeadersSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

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
});

/**
 * Tests responses with boolean header bindings
 */
it("RestJsonInputAndOutputWithBooleanHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    InputAndOutputWithHeaders(input: any, request: HttpRequest): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
        headerTrueBool: true,

        headerFalseBool: false,

        headerBooleanList: [true, false, true],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "InputAndOutputWithHeaders">("POST", [], [], {
      service: "RestJson",
      operation: "InputAndOutputWithHeaders",
    }),
  ]);
  class TestSerializer extends InputAndOutputWithHeadersSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-boolean1"]).toBeDefined();
  expect(r.headers["x-boolean1"]).toBe("true");
  expect(r.headers["x-boolean2"]).toBeDefined();
  expect(r.headers["x-boolean2"]).toBe("false");
  expect(r.headers["x-booleanlist"]).toBeDefined();
  expect(r.headers["x-booleanlist"]).toBe("true, false, true");

  expect(r.body).toBeFalsy();
});

/**
 * Tests responses with timestamp header bindings
 */
it("RestJsonInputAndOutputWithTimestampHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    InputAndOutputWithHeaders(input: any, request: HttpRequest): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
        headerTimestampList: [new Date(1576540098000), new Date(1576540098000)],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "InputAndOutputWithHeaders">("POST", [], [], {
      service: "RestJson",
      operation: "InputAndOutputWithHeaders",
    }),
  ]);
  class TestSerializer extends InputAndOutputWithHeadersSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-timestamplist"]).toBeDefined();
  expect(r.headers["x-timestamplist"]).toBe("Mon, 16 Dec 2019 23:48:18 GMT, Mon, 16 Dec 2019 23:48:18 GMT");

  expect(r.body).toBeFalsy();
});

/**
 * Tests responses with enum header bindings
 */
it("RestJsonInputAndOutputWithEnumHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    InputAndOutputWithHeaders(input: any, request: HttpRequest): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
        headerEnum: "Foo",

        headerEnumList: ["Foo", "Bar", "Baz"],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "InputAndOutputWithHeaders">("POST", [], [], {
      service: "RestJson",
      operation: "InputAndOutputWithHeaders",
    }),
  ]);
  class TestSerializer extends InputAndOutputWithHeadersSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-enum"]).toBeDefined();
  expect(r.headers["x-enum"]).toBe("Foo");
  expect(r.headers["x-enumlist"]).toBeDefined();
  expect(r.headers["x-enumlist"]).toBe("Foo, Bar, Baz");

  expect(r.body).toBeFalsy();
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
    fail("Expected a valid response to be returned, got err.");
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
 * Blobs are base64 encoded
 */
it("RestJsonJsonBlobs:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonBlobs: testFunction as JsonBlobs,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/JsonBlobs",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "data": "dmFsdWU="\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Blobs are base64 encoded
 */
it("RestJsonJsonBlobs:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonBlobs(input: any, request: HttpRequest): Promise<JsonBlobsServerOutput> {
      let response = {
        data: Uint8Array.from("value", (c) => c.charCodeAt(0)),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonBlobs">("POST", [], [], {
      service: "RestJson",
      operation: "JsonBlobs",
    }),
  ]);
  class TestSerializer extends JsonBlobsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                \"data\": \"dmFsdWU=\"
                                            }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
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
    fail("Expected a valid response to be returned, got err.");
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
 * Serializes simple scalar properties
 */
it("RestJsonJsonEnums:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonEnums: testFunction as JsonEnums,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonEnums",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "fooEnum1": "Foo",\n    "fooEnum2": "0",\n    "fooEnum3": "1",\n    "fooEnumList": [\n        "Foo",\n        "0"\n    ],\n    "fooEnumSet": [\n        "Foo",\n        "0"\n    ],\n    "fooEnumMap": {\n        "hi": "Foo",\n        "zero": "0"\n    }\n}',
    ]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes simple scalar properties
 */
it("RestJsonJsonEnums:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonEnums(input: any, request: HttpRequest): Promise<JsonEnumsServerOutput> {
      let response = {
        fooEnum1: "Foo",

        fooEnum2: "0",

        fooEnum3: "1",

        fooEnumList: ["Foo", "0"],

        fooEnumSet: ["Foo", "0"],

        fooEnumMap: {
          hi: "Foo",

          zero: "0",
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonEnums">("POST", [], [], {
      service: "RestJson",
      operation: "JsonEnums",
    }),
  ]);
  class TestSerializer extends JsonEnumsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
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

    integerList: [1, 2],

    booleanList: [true, false],

    timestampList: [new Date(1398796238000), new Date(1398796238000)],

    enumList: ["Foo", "0"],

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
    fail("Expected a valid response to be returned, got err.");
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
  const paramsToValidate: any = [
    {
      stringList: ["foo", "bar"],

      stringSet: ["foo", "bar"],

      integerList: [1, 2],

      booleanList: [true, false],

      timestampList: [new Date(1398796238000), new Date(1398796238000)],

      enumList: ["Foo", "0"],

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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
 * Serializes JSON lists
 */
it("RestJsonLists:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonLists: testFunction as JsonLists,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonLists",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "stringList": [\n        "foo",\n        "bar"\n    ],\n    "stringSet": [\n        "foo",\n        "bar"\n    ],\n    "integerList": [\n        1,\n        2\n    ],\n    "booleanList": [\n        true,\n        false\n    ],\n    "timestampList": [\n        1398796238,\n        1398796238\n    ],\n    "enumList": [\n        "Foo",\n        "0"\n    ],\n    "nestedStringList": [\n        [\n            "foo",\n            "bar"\n        ],\n        [\n            "baz",\n            "qux"\n        ]\n    ],\n    "myStructureList": [\n        {\n            "value": "1",\n            "other": "2"\n        },\n        {\n            "value": "3",\n            "other": "4"\n        }\n    ]\n}',
    ]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      stringList: ["foo", "bar"],

      stringSet: ["foo", "bar"],

      integerList: [1, 2],

      booleanList: [true, false],

      timestampList: [new Date(1398796238000), new Date(1398796238000)],

      enumList: ["Foo", "0"],

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
it("RestJsonListsEmpty:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonLists: testFunction as JsonLists,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonLists",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "stringList": []\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes null values in lists
 */
it("RestJsonListsSerializeNull:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonLists: testFunction as JsonLists,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonLists",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "sparseStringList": [\n        null,\n        "hi"\n    ]\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes JSON lists
 */
it("RestJsonLists:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonLists(input: any, request: HttpRequest): Promise<JsonListsServerOutput> {
      let response = {
        stringList: ["foo", "bar"],

        stringSet: ["foo", "bar"],

        integerList: [1, 2],

        booleanList: [true, false],

        timestampList: [new Date(1398796238000), new Date(1398796238000)],

        enumList: ["Foo", "0"],

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
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonLists">("POST", [], [], {
      service: "RestJson",
      operation: "JsonLists",
    }),
  ]);
  class TestSerializer extends JsonListsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
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
});

/**
 * Serializes empty JSON lists
 */
it("RestJsonListsEmpty:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonLists(input: any, request: HttpRequest): Promise<JsonListsServerOutput> {
      let response = {
        stringList: [],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonLists">("POST", [], [], {
      service: "RestJson",
      operation: "JsonLists",
    }),
  ]);
  class TestSerializer extends JsonListsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                      \"stringList\": []
                                                  }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes null values in sparse lists
 */
it("RestJsonListsSerializeNull:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonLists(input: any, request: HttpRequest): Promise<JsonListsServerOutput> {
      let response = {
        sparseStringList: [null, "hi"],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonLists">("POST", [], [], {
      service: "RestJson",
      operation: "JsonLists",
    }),
  ]);
  class TestSerializer extends JsonListsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                        \"sparseStringList\": [
                                                            null,
                                                            \"hi\"
                                                        ]
                                                    }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
 * Serializes JSON maps
 */
it("RestJsonJsonMaps:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonMaps: testFunction as JsonMaps,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/JsonMaps",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "denseStructMap": {\n        "foo": {\n            "hi": "there"\n        },\n        "baz": {\n            "hi": "bye"\n        }\n    },\n    "sparseStructMap": {\n        "foo": {\n            "hi": "there"\n        },\n        "baz": {\n            "hi": "bye"\n        }\n    }\n}',
    ]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes JSON map values in sparse maps
 */
it("RestJsonSerializesNullMapValues:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonMaps: testFunction as JsonMaps,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/JsonMaps",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "sparseBooleanMap": {\n        "x": null\n    },\n    "sparseNumberMap": {\n        "x": null\n    },\n    "sparseStringMap": {\n        "x": null\n    },\n    "sparseStructMap": {\n        "x": null\n    }\n}',
    ]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
it("RestJsonSerializesZeroValuesInMaps:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonMaps: testFunction as JsonMaps,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/JsonMaps",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "denseNumberMap": {\n        "x": 0\n    },\n    "sparseNumberMap": {\n        "x": 0\n    },\n    "denseBooleanMap": {\n        "x": false\n    },\n    "sparseBooleanMap": {\n        "x": false\n    }\n}',
    ]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Deserializes JSON maps
 */
it("RestJsonJsonMaps:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonMaps(input: any, request: HttpRequest): Promise<JsonMapsServerOutput> {
      let response = {
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
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonMaps">("POST", [], [], {
      service: "RestJson",
      operation: "JsonMaps",
    }),
  ]);
  class TestSerializer extends JsonMapsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
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
});

/**
 * Deserializes null JSON map values
 */
it("RestJsonDeserializesNullMapValues:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonMaps(input: any, request: HttpRequest): Promise<JsonMapsServerOutput> {
      let response = {
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
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonMaps">("POST", [], [], {
      service: "RestJson",
      operation: "JsonMaps",
    }),
  ]);
  class TestSerializer extends JsonMapsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
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
});

/**
 * Ensure that 0 and false are sent over the wire in all maps and lists
 */
it("RestJsonDeserializesZeroValuesInMaps:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonMaps(input: any, request: HttpRequest): Promise<JsonMapsServerOutput> {
      let response = {
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
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonMaps">("POST", [], [], {
      service: "RestJson",
      operation: "JsonMaps",
    }),
  ]);
  class TestSerializer extends JsonMapsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
 * Tests how normal timestamps are serialized
 */
it("RestJsonJsonTimestamps:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonTimestamps: testFunction as JsonTimestamps,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/JsonTimestamps",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "normal": 1398796238\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
it("RestJsonJsonTimestampsWithDateTimeFormat:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonTimestamps: testFunction as JsonTimestamps,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/JsonTimestamps",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "dateTime": "2014-04-29T18:30:38Z"\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Ensures that the timestampFormat of epoch-seconds works
 */
it("RestJsonJsonTimestampsWithEpochSecondsFormat:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonTimestamps: testFunction as JsonTimestamps,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/JsonTimestamps",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "epochSeconds": 1398796238\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Ensures that the timestampFormat of http-date works
 */
it("RestJsonJsonTimestampsWithHttpDateFormat:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonTimestamps: testFunction as JsonTimestamps,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/JsonTimestamps",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "httpDate": "Tue, 29 Apr 2014 18:30:38 GMT"\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Tests how normal timestamps are serialized
 */
it("RestJsonJsonTimestamps:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonTimestamps(input: any, request: HttpRequest): Promise<JsonTimestampsServerOutput> {
      let response = {
        normal: new Date(1398796238000),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonTimestamps">("POST", [], [], {
      service: "RestJson",
      operation: "JsonTimestamps",
    }),
  ]);
  class TestSerializer extends JsonTimestampsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                \"normal\": 1398796238
                                                            }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Ensures that the timestampFormat of date-time works like normal timestamps
 */
it("RestJsonJsonTimestampsWithDateTimeFormat:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonTimestamps(input: any, request: HttpRequest): Promise<JsonTimestampsServerOutput> {
      let response = {
        dateTime: new Date(1398796238000),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonTimestamps">("POST", [], [], {
      service: "RestJson",
      operation: "JsonTimestamps",
    }),
  ]);
  class TestSerializer extends JsonTimestampsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                  \"dateTime\": \"2014-04-29T18:30:38Z\"
                                                              }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Ensures that the timestampFormat of epoch-seconds works
 */
it("RestJsonJsonTimestampsWithEpochSecondsFormat:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonTimestamps(input: any, request: HttpRequest): Promise<JsonTimestampsServerOutput> {
      let response = {
        epochSeconds: new Date(1398796238000),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonTimestamps">("POST", [], [], {
      service: "RestJson",
      operation: "JsonTimestamps",
    }),
  ]);
  class TestSerializer extends JsonTimestampsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                    \"epochSeconds\": 1398796238
                                                                }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Ensures that the timestampFormat of http-date works
 */
it("RestJsonJsonTimestampsWithHttpDateFormat:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonTimestamps(input: any, request: HttpRequest): Promise<JsonTimestampsServerOutput> {
      let response = {
        httpDate: new Date(1398796238000),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonTimestamps">("POST", [], [], {
      service: "RestJson",
      operation: "JsonTimestamps",
    }),
  ]);
  class TestSerializer extends JsonTimestampsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                      \"httpDate\": \"Tue, 29 Apr 2014 18:30:38 GMT\"
                                                                  }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
 * Serializes a string union value
 */
it("RestJsonSerializeStringUnionValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonUnions: testFunction as JsonUnions,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonUnions",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "contents": {\n        "stringValue": "foo"\n    }\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes a boolean union value
 */
it("RestJsonSerializeBooleanUnionValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonUnions: testFunction as JsonUnions,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonUnions",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "contents": {\n        "booleanValue": true\n    }\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes a number union value
 */
it("RestJsonSerializeNumberUnionValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonUnions: testFunction as JsonUnions,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonUnions",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "contents": {\n        "numberValue": 1\n    }\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes a blob union value
 */
it("RestJsonSerializeBlobUnionValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonUnions: testFunction as JsonUnions,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonUnions",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "contents": {\n        "blobValue": "Zm9v"\n    }\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes a timestamp union value
 */
it("RestJsonSerializeTimestampUnionValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonUnions: testFunction as JsonUnions,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonUnions",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "contents": {\n        "timestampValue": 1398796238\n    }\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes an enum union value
 */
it("RestJsonSerializeEnumUnionValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonUnions: testFunction as JsonUnions,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonUnions",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "contents": {\n        "enumValue": "Foo"\n    }\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes a list union value
 */
it("RestJsonSerializeListUnionValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonUnions: testFunction as JsonUnions,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonUnions",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "contents": {\n        "listValue": ["foo", "bar"]\n    }\n}']),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes a map union value
 */
it("RestJsonSerializeMapUnionValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonUnions: testFunction as JsonUnions,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonUnions",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "contents": {\n        "mapValue": {\n            "foo": "bar",\n            "spam": "eggs"\n        }\n    }\n}',
    ]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes a structure union value
 */
it("RestJsonSerializeStructureUnionValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    JsonUnions: testFunction as JsonUnions,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonUnions",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "contents": {\n        "structureValue": {\n            "hi": "hello"\n        }\n    }\n}',
    ]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Deserializes a string union value
 */
it("RestJsonDeserializeStringUnionValue:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonUnions(input: any, request: HttpRequest): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          stringValue: "foo",
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonUnions">("POST", [], [], {
      service: "RestJson",
      operation: "JsonUnions",
    }),
  ]);
  class TestSerializer extends JsonUnionsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                        \"contents\": {
                                                                            \"stringValue\": \"foo\"
                                                                        }
                                                                    }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Deserializes a boolean union value
 */
it("RestJsonDeserializeBooleanUnionValue:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonUnions(input: any, request: HttpRequest): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          booleanValue: true,
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonUnions">("POST", [], [], {
      service: "RestJson",
      operation: "JsonUnions",
    }),
  ]);
  class TestSerializer extends JsonUnionsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                          \"contents\": {
                                                                              \"booleanValue\": true
                                                                          }
                                                                      }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Deserializes a number union value
 */
it("RestJsonDeserializeNumberUnionValue:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonUnions(input: any, request: HttpRequest): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          numberValue: 1,
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonUnions">("POST", [], [], {
      service: "RestJson",
      operation: "JsonUnions",
    }),
  ]);
  class TestSerializer extends JsonUnionsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                            \"contents\": {
                                                                                \"numberValue\": 1
                                                                            }
                                                                        }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Deserializes a blob union value
 */
it("RestJsonDeserializeBlobUnionValue:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonUnions(input: any, request: HttpRequest): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          blobValue: Uint8Array.from("foo", (c) => c.charCodeAt(0)),
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonUnions">("POST", [], [], {
      service: "RestJson",
      operation: "JsonUnions",
    }),
  ]);
  class TestSerializer extends JsonUnionsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                              \"contents\": {
                                                                                  \"blobValue\": \"Zm9v\"
                                                                              }
                                                                          }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Deserializes a timestamp union value
 */
it("RestJsonDeserializeTimestampUnionValue:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonUnions(input: any, request: HttpRequest): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          timestampValue: new Date(1398796238000),
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonUnions">("POST", [], [], {
      service: "RestJson",
      operation: "JsonUnions",
    }),
  ]);
  class TestSerializer extends JsonUnionsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                \"contents\": {
                                                                                    \"timestampValue\": 1398796238
                                                                                }
                                                                            }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Deserializes an enum union value
 */
it("RestJsonDeserializeEnumUnionValue:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonUnions(input: any, request: HttpRequest): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          enumValue: "Foo",
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonUnions">("POST", [], [], {
      service: "RestJson",
      operation: "JsonUnions",
    }),
  ]);
  class TestSerializer extends JsonUnionsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                  \"contents\": {
                                                                                      \"enumValue\": \"Foo\"
                                                                                  }
                                                                              }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Deserializes a list union value
 */
it("RestJsonDeserializeListUnionValue:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonUnions(input: any, request: HttpRequest): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          listValue: ["foo", "bar"],
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonUnions">("POST", [], [], {
      service: "RestJson",
      operation: "JsonUnions",
    }),
  ]);
  class TestSerializer extends JsonUnionsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                    \"contents\": {
                                                                                        \"listValue\": [\"foo\", \"bar\"]
                                                                                    }
                                                                                }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Deserializes a map union value
 */
it("RestJsonDeserializeMapUnionValue:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonUnions(input: any, request: HttpRequest): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          mapValue: {
            foo: "bar",

            spam: "eggs",
          } as any,
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonUnions">("POST", [], [], {
      service: "RestJson",
      operation: "JsonUnions",
    }),
  ]);
  class TestSerializer extends JsonUnionsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
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
});

/**
 * Deserializes a structure union value
 */
it("RestJsonDeserializeStructureUnionValue:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    JsonUnions(input: any, request: HttpRequest): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          structureValue: {
            hi: "hello",
          } as any,
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "JsonUnions">("POST", [], [], {
      service: "RestJson",
      operation: "JsonUnions",
    }),
  ]);
  class TestSerializer extends JsonUnionsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                        \"contents\": {
                                                                                            \"structureValue\": {
                                                                                                \"hi\": \"hello\"
                                                                                            }
                                                                                        }
                                                                                    }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
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
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-json": "dHJ1ZQ==",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new MediaTypeHeaderCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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
 * Headers that target strings with a mediaType are base64 encoded
 */
it("MediaTypeHeaderInputBase64:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    MediaTypeHeader: testFunction as MediaTypeHeader,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/MediaTypeHeader",
    query: {},
    headers: {
      "x-json": "dHJ1ZQ==",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Headers that target strings with a mediaType are base64 encoded
 */
it("MediaTypeHeaderOutputBase64:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    MediaTypeHeader(input: any, request: HttpRequest): Promise<MediaTypeHeaderServerOutput> {
      let response = {
        json: "true",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "MediaTypeHeader">("POST", [], [], {
      service: "RestJson",
      operation: "MediaTypeHeader",
    }),
  ]);
  class TestSerializer extends MediaTypeHeaderSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-json"]).toBeDefined();
  expect(r.headers["x-json"]).toBe("dHJ1ZQ==");

  expect(r.body).toBeFalsy();
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
    fail("Expected a valid response to be returned, got err.");
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * No input serializes no payload. When clients do not need to
 * serialize any data in the payload, they should omit a payload
 * altogether.
 */
it("RestJsonNoInputAndNoOutput:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    NoInputAndNoOutput: testFunction as NoInputAndNoOutput,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/NoInputAndNoOutput",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];
});

/**
 * When an operation does not define output, the service will respond
 * with an empty payload, and may optionally include the content-type
 * header.
 */
it("RestJsonNoInputAndNoOutput:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    NoInputAndNoOutput(input: any, request: HttpRequest): Promise<NoInputAndNoOutputServerOutput> {
      return Promise.resolve({ $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "NoInputAndNoOutput">("POST", [], [], {
      service: "RestJson",
      operation: "NoInputAndNoOutput",
    }),
  ]);
  class TestSerializer extends NoInputAndNoOutputSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.body).toBeFalsy();
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * No input serializes no payload. When clients do not need to
 * serialize any data in the payload, they should omit a payload
 * altogether.
 */
it("RestJsonNoInputAndOutput:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    NoInputAndOutput: testFunction as NoInputAndOutput,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/NoInputAndOutputOutput",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];
});

/**
 * Operations that define output and do not bind anything to
 * the payload return a JSON object in the response.
 */
it("RestJsonNoInputAndOutputWithJson:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    NoInputAndOutput(input: any, request: HttpRequest): Promise<NoInputAndOutputServerOutput> {
      let response = {} as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "NoInputAndOutput">("POST", [], [], {
      service: "RestJson",
      operation: "NoInputAndOutput",
    }),
  ]);
  class TestSerializer extends NoInputAndOutputSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
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
 * Do not send null or empty headers
 */
it("RestJsonNullAndEmptyHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    NullAndEmptyHeadersServer(input: any, request: HttpRequest): Promise<NullAndEmptyHeadersServerServerOutput> {
      let response = {
        a: null,

        b: "",

        c: [],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "NullAndEmptyHeadersServer">("POST", [], [], {
      service: "RestJson",
      operation: "NullAndEmptyHeadersServer",
    }),
  ]);
  class TestSerializer extends NullAndEmptyHeadersServerSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-a"]).toBeUndefined();
  expect(r.headers["x-b"]).toBeUndefined();
  expect(r.headers["x-c"]).toBeUndefined();

  expect(r.body).toBeFalsy();
});

/**
 * Serializes empty query strings but omits null
 */
it("RestJsonOmitsNullSerializesEmptyString:Request", async () => {
  const client = new RestJsonProtocolClient({
    ...clientParams,
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new OmitsNullSerializesEmptyStringCommand({
    nullValue: null,

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
 * Serializes empty query strings but omits null
 */
it("RestJsonOmitsNullSerializesEmptyString:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    OmitsNullSerializesEmptyString: testFunction as OmitsNullSerializesEmptyString,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/OmitsNullSerializesEmptyString",
    query: {
      Empty: "",
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      nullValue: null,

      emptyString: "",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
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
    fail("Expected a valid response to be returned, got err.");
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
 * Serializes recursive structures
 */
it("RestJsonRecursiveShapes:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    RecursiveShapes: testFunction as RecursiveShapes,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/RecursiveShapes",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "nested": {\n        "foo": "Foo1",\n        "nested": {\n            "bar": "Bar1",\n            "recursiveMember": {\n                "foo": "Foo2",\n                "nested": {\n                    "bar": "Bar2"\n                }\n            }\n        }\n    }\n}',
    ]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes recursive structures
 */
it("RestJsonRecursiveShapes:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    RecursiveShapes(input: any, request: HttpRequest): Promise<RecursiveShapesServerOutput> {
      let response = {
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
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "RecursiveShapes">("POST", [], [], {
      service: "RestJson",
      operation: "RecursiveShapes",
    }),
  ]);
  class TestSerializer extends RecursiveShapesSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
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
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
    return;
  }
  expect(r["$metadata"].httpStatusCode).toBe(200);
});

/**
 * Serializes simple scalar properties
 */
it("RestJsonSimpleScalarProperties:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    SimpleScalarProperties: testFunction as SimpleScalarProperties,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/SimpleScalarProperties",
    query: {},
    headers: {
      "x-foo": "Foo",
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "stringValue": "string",\n    "trueBooleanValue": true,\n    "falseBooleanValue": false,\n    "byteValue": 1,\n    "shortValue": 2,\n    "integerValue": 3,\n    "longValue": 4,\n    "floatValue": 5.5,\n    "DoubleDribble": 6.5\n}',
    ]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Rest Json should not serialize null structure values
 */
it("RestJsonDoesntSerializeNullStructureValues:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    SimpleScalarProperties: testFunction as SimpleScalarProperties,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/SimpleScalarProperties",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(["{}"]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      stringValue: null,
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
it("RestJsonSimpleScalarProperties:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    SimpleScalarProperties(input: any, request: HttpRequest): Promise<SimpleScalarPropertiesServerOutput> {
      let response = {
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
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "SimpleScalarProperties">("POST", [], [], {
      service: "RestJson",
      operation: "SimpleScalarProperties",
    }),
  ]);
  class TestSerializer extends SimpleScalarPropertiesSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");
  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
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
});

/**
 * Rest Json should not deserialize null structure values
 */
it("RestJsonDoesntDeserializeNullStructureValues:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    SimpleScalarProperties(input: any, request: HttpRequest): Promise<SimpleScalarPropertiesServerOutput> {
      let response = {} as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "SimpleScalarProperties">("POST", [], [], {
      service: "RestJson",
      operation: "SimpleScalarProperties",
    }),
  ]);
  class TestSerializer extends SimpleScalarPropertiesSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                                      \"stringValue\": null
                                                                                                  }`;
  const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
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
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
 * Serializes a blob in the HTTP payload
 */
it("RestJsonStreamingTraitsWithBlob:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    StreamingTraits: testFunction as StreamingTraits,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/StreamingTraits",
    query: {},
    headers: {
      "x-foo": "Foo",
      "content-type": "application/octet-stream",
    },
    body: Readable.from(["blobby blob blob"]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      foo: "Foo",

      blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
    },
  ][0];
  const comparableBlob = await __streamCollector(r["blob"]);
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
it("RestJsonStreamingTraitsWithNoBlobBody:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    StreamingTraits: testFunction as StreamingTraits,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/StreamingTraits",
    query: {},
    headers: {
      "x-foo": "Foo",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      foo: "Foo",
    },
  ][0];
  const comparableBlob = await __streamCollector(r["blob"]);
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
 * Serializes a blob in the HTTP payload
 */
it("RestJsonStreamingTraitsWithBlob:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    StreamingTraits(input: any, request: HttpRequest): Promise<StreamingTraitsServerOutput> {
      let response = {
        foo: "Foo",

        blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "StreamingTraits">("POST", [], [], {
      service: "RestJson",
      operation: "StreamingTraits",
    }),
  ]);
  class TestSerializer extends StreamingTraitsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/octet-stream");
  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `blobby blob blob`;
  const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonStreamingTraitsWithNoBlobBody:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    StreamingTraits(input: any, request: HttpRequest): Promise<StreamingTraitsServerOutput> {
      let response = {
        foo: "Foo",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "StreamingTraits">("POST", [], [], {
      service: "RestJson",
      operation: "StreamingTraits",
    }),
  ]);
  class TestSerializer extends StreamingTraitsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeFalsy();
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
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
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
 * Serializes a blob in the HTTP payload with a required length
 */
it("RestJsonStreamingTraitsRequireLengthWithBlob:Response", async () => {
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
  const command = new StreamingTraitsRequireLengthCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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
it("RestJsonStreamingTraitsRequireLengthWithNoBlobBody:Response", async () => {
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
  const command = new StreamingTraitsRequireLengthCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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
it("RestJsonStreamingTraitsRequireLengthWithBlob:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    StreamingTraitsRequireLength: testFunction as StreamingTraitsRequireLength,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/StreamingTraitsRequireLength",
    query: {},
    headers: {
      "x-foo": "Foo",
      "content-type": "application/octet-stream",
    },
    body: Readable.from(["blobby blob blob"]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      foo: "Foo",

      blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
    },
  ][0];
  const comparableBlob = await __streamCollector(r["blob"]);
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
it("RestJsonStreamingTraitsRequireLengthWithNoBlobBody:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    StreamingTraitsRequireLength: testFunction as StreamingTraitsRequireLength,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/StreamingTraitsRequireLength",
    query: {},
    headers: {
      "x-foo": "Foo",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      foo: "Foo",
    },
  ][0];
  const comparableBlob = await __streamCollector(r["blob"]);
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
it("RestJsonStreamingTraitsRequireLengthWithBlob:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    StreamingTraitsRequireLength(input: any, request: HttpRequest): Promise<StreamingTraitsRequireLengthServerOutput> {
      let response = {
        foo: "Foo",

        blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "StreamingTraitsRequireLength">("POST", [], [], {
      service: "RestJson",
      operation: "StreamingTraitsRequireLength",
    }),
  ]);
  class TestSerializer extends StreamingTraitsRequireLengthSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);
  expect(r.headers["content-length"]).toBeDefined();

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/octet-stream");
  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `blobby blob blob`;
  const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonStreamingTraitsRequireLengthWithNoBlobBody:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    StreamingTraitsRequireLength(input: any, request: HttpRequest): Promise<StreamingTraitsRequireLengthServerOutput> {
      let response = {
        foo: "Foo",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "StreamingTraitsRequireLength">("POST", [], [], {
      service: "RestJson",
      operation: "StreamingTraitsRequireLength",
    }),
  ]);
  class TestSerializer extends StreamingTraitsRequireLengthSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeFalsy();
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
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
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
    fail("Expected a valid response to be returned, got err.");
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
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonStreamingTraitsWithMediaTypeWithBlob:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    StreamingTraitsWithMediaType: testFunction as StreamingTraitsWithMediaType,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/StreamingTraitsWithMediaType",
    query: {},
    headers: {
      "x-foo": "Foo",
      "content-type": "text/plain",
    },
    body: Readable.from(["blobby blob blob"]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      foo: "Foo",

      blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
    },
  ][0];
  const comparableBlob = await __streamCollector(r["blob"]);
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
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonStreamingTraitsWithMediaTypeWithBlob:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    StreamingTraitsWithMediaType(input: any, request: HttpRequest): Promise<StreamingTraitsWithMediaTypeServerOutput> {
      let response = {
        foo: "Foo",

        blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "StreamingTraitsWithMediaType">("POST", [], [], {
      service: "RestJson",
      operation: "StreamingTraitsWithMediaType",
    }),
  ]);
  class TestSerializer extends StreamingTraitsWithMediaTypeSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("text/plain");
  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `blobby blob blob`;
  const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
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
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-targetepochseconds": "1576540098",
        "x-memberdatetime": "2019-12-16T23:48:18Z",
        "x-defaultformat": "Mon, 16 Dec 2019 23:48:18 GMT",
        "x-memberepochseconds": "1576540098",
        "x-targethttpdate": "Mon, 16 Dec 2019 23:48:18 GMT",
        "x-memberhttpdate": "Mon, 16 Dec 2019 23:48:18 GMT",
        "x-targetdatetime": "2019-12-16T23:48:18Z",
      },
      ``
    ),
  });

  const params: any = {};
  const command = new TimestampFormatHeadersCommand(params);

  let r: any;
  try {
    r = await client.send(command);
  } catch (err) {
    fail("Expected a valid response to be returned, got err.");
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
 * Tests how timestamp request headers are serialized
 */
it("RestJsonTimestampFormatHeaders:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService> = {
    TimestampFormatHeaders: testFunction as TimestampFormatHeaders,
  };
  const handler = getRestJsonServiceHandler(testService as RestJsonService);
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/TimestampFormatHeaders",
    query: {},
    headers: {
      "x-targetepochseconds": "1576540098",
      "x-memberdatetime": "2019-12-16T23:48:18Z",
      "x-defaultformat": "Mon, 16 Dec 2019 23:48:18 GMT",
      "x-memberepochseconds": "1576540098",
      "x-targethttpdate": "Mon, 16 Dec 2019 23:48:18 GMT",
      "x-memberhttpdate": "Mon, 16 Dec 2019 23:48:18 GMT",
      "x-targetdatetime": "2019-12-16T23:48:18Z",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request);

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Tests how timestamp response headers are serialized
 */
it("RestJsonTimestampFormatHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService> {
    TimestampFormatHeaders(input: any, request: HttpRequest): Promise<TimestampFormatHeadersServerOutput> {
      let response = {
        memberEpochSeconds: new Date(1576540098000),

        memberHttpDate: new Date(1576540098000),

        memberDateTime: new Date(1576540098000),

        defaultFormat: new Date(1576540098000),

        targetEpochSeconds: new Date(1576540098000),

        targetHttpDate: new Date(1576540098000),

        targetDateTime: new Date(1576540098000),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
    new httpbinding.UriSpec<"RestJson", "TimestampFormatHeaders">("POST", [], [], {
      service: "RestJson",
      operation: "TimestampFormatHeaders",
    }),
  ]);
  class TestSerializer extends TimestampFormatHeadersSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(service, testMux, serFn, serializeFrameworkException);
  let r = await handler.handle(request);

  expect(r.statusCode).toBe(200);

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
