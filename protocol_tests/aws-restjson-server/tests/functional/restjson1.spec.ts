import { ComplexError, InvalidGreeting } from "../../models/models_0";
import { serializeFrameworkException } from "../../protocols/Aws_restJson1";
import { getRestJsonServiceHandler } from "../../server";
import { RestJsonService, RestJsonServiceHandler, RestJsonServiceOperations } from "../../server/RestJsonService";
import { AllQueryStringTypes } from "../../server/operations/AllQueryStringTypes";
import { ConstantAndVariableQueryString } from "../../server/operations/ConstantAndVariableQueryString";
import { ConstantQueryString } from "../../server/operations/ConstantQueryString";
import { DocumentType, DocumentTypeSerializer, DocumentTypeServerOutput } from "../../server/operations/DocumentType";
import {
  DocumentTypeAsPayload,
  DocumentTypeAsPayloadSerializer,
  DocumentTypeAsPayloadServerOutput,
} from "../../server/operations/DocumentTypeAsPayload";
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
  HttpEnumPayload,
  HttpEnumPayloadSerializer,
  HttpEnumPayloadServerOutput,
} from "../../server/operations/HttpEnumPayload";
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
import { HttpRequestWithFloatLabels } from "../../server/operations/HttpRequestWithFloatLabels";
import { HttpRequestWithGreedyLabelInPath } from "../../server/operations/HttpRequestWithGreedyLabelInPath";
import { HttpRequestWithLabels } from "../../server/operations/HttpRequestWithLabels";
import { HttpRequestWithLabelsAndTimestampFormat } from "../../server/operations/HttpRequestWithLabelsAndTimestampFormat";
import { HttpResponseCodeSerializer, HttpResponseCodeServerOutput } from "../../server/operations/HttpResponseCode";
import {
  HttpStringPayload,
  HttpStringPayloadSerializer,
  HttpStringPayloadServerOutput,
} from "../../server/operations/HttpStringPayload";
import {
  IgnoreQueryParamsInResponseSerializer,
  IgnoreQueryParamsInResponseServerOutput,
} from "../../server/operations/IgnoreQueryParamsInResponse";
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
import { QueryParamsAsStringListMap } from "../../server/operations/QueryParamsAsStringListMap";
import { QueryPrecedence } from "../../server/operations/QueryPrecedence";
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
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { Encoder as __Encoder } from "@aws-sdk/types";
import { toUtf8 as __utf8Encoder } from "@aws-sdk/util-utf8-node";
import {
  OperationSerializer as __OperationSerializer,
  ValidationFailure as __ValidationFailure,
  httpbinding,
} from "@aws-smithy/server-common";
import { HttpHandlerOptions, HeaderBag } from "@aws-sdk/types";
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { Readable } from "stream";

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
it("RestJsonAllQueryStringTypes:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    AllQueryStringTypes: testFunction as AllQueryStringTypes<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/AllQueryStringTypesInput",
    query: {
      Enum: "Foo",
      BooleanList: ["true", "false", "true"],
      StringList: ["a", "b", "c"],
      String: "Hello%20there",
      Timestamp: "1970-01-01T00%3A00%3A01Z",
      Double: "1.1",
      Integer: "3",
      Float: "1.1",
      TimestampList: ["1970-01-01T00%3A00%3A01Z", "1970-01-01T00%3A00%3A02Z", "1970-01-01T00%3A00%3A03Z"],
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
  await handler.handle(request, {});

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
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Handles query string maps
 */
it("RestJsonQueryStringMap:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    AllQueryStringTypes: testFunction as AllQueryStringTypes<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/AllQueryStringTypesInput",
    query: {
      QueryParamsStringKeyA: "Foo",
      QueryParamsStringKeyB: "Bar",
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      queryParamsMapOfStringList: {
        QueryParamsStringKeyA: ["Foo"],

        QueryParamsStringKeyB: ["Bar"],
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Handles escaping all required characters in the query string.
 */
it("RestJsonQueryStringEscaping:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    AllQueryStringTypes: testFunction as AllQueryStringTypes<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/AllQueryStringTypesInput",
    query: {
      String: "%25%3A%2F%3F%23%5B%5D%40%21%24%26%27%28%29%2A%2B%2C%3B%3D%F0%9F%98%B9",
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      queryString: "%:/?#[]@!$&'()*+,;=😹",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling NaN float query values.
 */
it("RestJsonSupportsNaNFloatQueryValues:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    AllQueryStringTypes: testFunction as AllQueryStringTypes<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/AllQueryStringTypesInput",
    query: {
      Float: "NaN",
      Double: "NaN",
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      queryFloat: NaN,

      queryDouble: NaN,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling Infinity float query values.
 */
it("RestJsonSupportsInfinityFloatQueryValues:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    AllQueryStringTypes: testFunction as AllQueryStringTypes<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/AllQueryStringTypesInput",
    query: {
      Float: "Infinity",
      Double: "Infinity",
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      queryFloat: Infinity,

      queryDouble: Infinity,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling -Infinity float query values.
 */
it("RestJsonSupportsNegativeInfinityFloatQueryValues:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    AllQueryStringTypes: testFunction as AllQueryStringTypes<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/AllQueryStringTypesInput",
    query: {
      Float: "-Infinity",
      Double: "-Infinity",
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      queryFloat: -Infinity,

      queryDouble: -Infinity,
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
it("RestJsonConstantAndVariableQueryStringMissingOneValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    ConstantAndVariableQueryString: testFunction as ConstantAndVariableQueryString<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    ConstantAndVariableQueryString: testFunction as ConstantAndVariableQueryString<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
it("RestJsonConstantQueryString:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    ConstantQueryString: testFunction as ConstantQueryString<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
 * Serializes document types as part of the JSON request payload with no escaping.
 */
it("DocumentTypeInputWithObject:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    DocumentType: testFunction as DocumentType<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/DocumentType",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "stringValue": "string",\n    "documentValue": {\n        "foo": "bar"\n    }\n}']),
  });
  await handler.handle(request, {});

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
 * Serializes document types using a string.
 */
it("DocumentInputWithString:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    DocumentType: testFunction as DocumentType<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/DocumentType",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "stringValue": "string",\n    "documentValue": "hello"\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes document types using a number.
 */
it("DocumentInputWithNumber:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    DocumentType: testFunction as DocumentType<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/DocumentType",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "stringValue": "string",\n    "documentValue": 10\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes document types using a boolean.
 */
it("DocumentInputWithBoolean:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    DocumentType: testFunction as DocumentType<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/DocumentType",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "stringValue": "string",\n    "documentValue": true\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      stringValue: "string",

      documentValue: true,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes document types using a list.
 */
it("DocumentInputWithList:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    DocumentType: testFunction as DocumentType<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/DocumentType",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "stringValue": "string",\n    "documentValue": [\n        true,\n        "hi",\n        [\n            1,\n            2\n        ],\n        {\n            "foo": {\n                "baz": [\n                    3,\n                    4\n                ]\n            }\n        }\n    ]\n}',
    ]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
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
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes documents as part of the JSON response payload with no escaping.
 */
it("DocumentOutput:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    DocumentType(input: any, ctx: {}): Promise<DocumentTypeServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "DocumentType">("POST", [], [], {
      service: "RestJson",
      operation: "DocumentType",
    }),
  ]);
  class TestSerializer extends DocumentTypeSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
 * Document types can be JSON scalars too.
 */
it("DocumentOutputString:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    DocumentType(input: any, ctx: {}): Promise<DocumentTypeServerOutput> {
      let response = {
        stringValue: "string",

        documentValue: "hello",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "DocumentType">("POST", [], [], {
      service: "RestJson",
      operation: "DocumentType",
    }),
  ]);
  class TestSerializer extends DocumentTypeSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
          \"stringValue\": \"string\",
          \"documentValue\": \"hello\"
      }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Document types can be JSON scalars too.
 */
it("DocumentOutputNumber:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    DocumentType(input: any, ctx: {}): Promise<DocumentTypeServerOutput> {
      let response = {
        stringValue: "string",

        documentValue: 10,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "DocumentType">("POST", [], [], {
      service: "RestJson",
      operation: "DocumentType",
    }),
  ]);
  class TestSerializer extends DocumentTypeSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
            \"stringValue\": \"string\",
            \"documentValue\": 10
        }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Document types can be JSON scalars too.
 */
it("DocumentOutputBoolean:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    DocumentType(input: any, ctx: {}): Promise<DocumentTypeServerOutput> {
      let response = {
        stringValue: "string",

        documentValue: false,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "DocumentType">("POST", [], [], {
      service: "RestJson",
      operation: "DocumentType",
    }),
  ]);
  class TestSerializer extends DocumentTypeSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
              \"stringValue\": \"string\",
              \"documentValue\": false
          }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Document types can be JSON arrays.
 */
it("DocumentOutputArray:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    DocumentType(input: any, ctx: {}): Promise<DocumentTypeServerOutput> {
      let response = {
        stringValue: "string",

        documentValue: [true, false],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "DocumentType">("POST", [], [], {
      service: "RestJson",
      operation: "DocumentType",
    }),
  ]);
  class TestSerializer extends DocumentTypeSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                \"stringValue\": \"string\",
                \"documentValue\": [
                    true,
                    false
                ]
            }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes a document as the target of the httpPayload trait.
 */
it("DocumentTypeAsPayloadInput:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    DocumentTypeAsPayload: testFunction as DocumentTypeAsPayload<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/DocumentTypeAsPayload",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "foo": "bar"\n}']),
  });
  await handler.handle(request, {});

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
 * Serializes a document as the target of the httpPayload trait using a string.
 */
it("DocumentTypeAsPayloadInputString:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    DocumentTypeAsPayload: testFunction as DocumentTypeAsPayload<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/DocumentTypeAsPayload",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['"hello"']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes a document as the target of the httpPayload trait.
 */
it("DocumentTypeAsPayloadOutput:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    DocumentTypeAsPayload(input: any, ctx: {}): Promise<DocumentTypeAsPayloadServerOutput> {
      let response = {
        documentValue: {
          foo: "bar",
        },
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "DocumentTypeAsPayload">("POST", [], [], {
      service: "RestJson",
      operation: "DocumentTypeAsPayload",
    }),
  ]);
  class TestSerializer extends DocumentTypeAsPayloadSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
 * Serializes a document as a payload string.
 */
it("DocumentTypeAsPayloadOutputString:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    DocumentTypeAsPayload(input: any, ctx: {}): Promise<DocumentTypeAsPayloadServerOutput> {
      let response = {
        documentValue: "hello",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "DocumentTypeAsPayload">("POST", [], [], {
      service: "RestJson",
      operation: "DocumentTypeAsPayload",
    }),
  ]);
  class TestSerializer extends DocumentTypeAsPayloadSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `\"hello\"`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Clients should not serialize a JSON payload when no parameters
 * are given that are sent in the body. A service will tolerate
 * clients that omit a payload or that send a JSON object.
 */
it("RestJsonEmptyInputAndEmptyOutput:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    EmptyInputAndEmptyOutput: testFunction as EmptyInputAndEmptyOutput<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/EmptyInputAndEmptyOutput",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    EmptyInputAndEmptyOutput: testFunction as EmptyInputAndEmptyOutput<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];
});

/**
 * As of January 2021, server implementations are expected to
 * respond with a JSON object regardless of if the output
 * parameters are empty.
 */
it("RestJsonEmptyInputAndEmptyOutput:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    EmptyInputAndEmptyOutput(input: any, ctx: {}): Promise<EmptyInputAndEmptyOutputServerOutput> {
      let response = {} as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
it("RestJsonEndpointTrait:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    EndpointOperation: testFunction as EndpointOperation<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "example.com",
    path: "/EndpointOperation",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];
});

/**
 * Operations can prepend to the given host if they define the
 * endpoint trait, and can use the host label trait to define
 * further customization based on user input.
 */
it("RestJsonEndpointTraitWithHostLabel:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    EndpointWithHostLabelOperation: testFunction as EndpointWithHostLabelOperation<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "example.com",
    path: "/EndpointWithHostLabelOperation",
    query: {},
    headers: {},
    body: Readable.from(['{"label": "bar"}']),
  });
  await handler.handle(request, {});

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
it("RestJsonGreetingWithErrors:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    GreetingWithErrors(input: any, ctx: {}): Promise<GreetingWithErrorsServerOutput> {
      let response = {
        greeting: "Hello",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    GreetingWithErrors(input: any, ctx: {}): Promise<GreetingWithErrorsServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    GreetingWithErrors(input: any, ctx: {}): Promise<GreetingWithErrorsServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    GreetingWithErrors(input: any, ctx: {}): Promise<GreetingWithErrorsServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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

it("EnumPayloadRequest:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpEnumPayload: testFunction as HttpEnumPayload<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/EnumPayload",
    query: {},
    headers: {},
    body: Readable.from(["enumvalue"]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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

it("EnumPayloadResponse:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    HttpEnumPayload(input: any, ctx: {}): Promise<HttpEnumPayloadServerOutput> {
      let response = {
        payload: "enumvalue",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "HttpEnumPayload">("POST", [], [], {
      service: "RestJson",
      operation: "HttpEnumPayload",
    }),
  ]);
  class TestSerializer extends HttpEnumPayloadSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `enumvalue`;
  const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes a blob in the HTTP payload
 */
it("RestJsonHttpPayloadTraitsWithBlob:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpPayloadTraits: testFunction as HttpPayloadTraits<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    HttpPayloadTraits: testFunction as HttpPayloadTraits<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    HttpPayloadTraits(input: any, ctx: {}): Promise<HttpPayloadTraitsServerOutput> {
      let response = {
        foo: "Foo",

        blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `blobby blob blob`;
  const unequalParts: any = compareEquivalentOctetStreamBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonHttpPayloadTraitsWithNoBlobBody:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    HttpPayloadTraits(input: any, ctx: {}): Promise<HttpPayloadTraitsServerOutput> {
      let response = {
        foo: "Foo",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeFalsy();
});

/**
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonHttpPayloadTraitsWithMediaTypeWithBlob:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpPayloadTraitsWithMediaType: testFunction as HttpPayloadTraitsWithMediaType<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    HttpPayloadTraitsWithMediaType(input: any, ctx: {}): Promise<HttpPayloadTraitsWithMediaTypeServerOutput> {
      let response = {
        foo: "Foo",

        blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("text/plain");
  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `blobby blob blob`;
  const unequalParts: any = compareEquivalentOctetStreamBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes a structure in the payload
 */
it("RestJsonHttpPayloadWithStructure:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpPayloadWithStructure: testFunction as HttpPayloadWithStructure<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    HttpPayloadWithStructure(input: any, ctx: {}): Promise<HttpPayloadWithStructureServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
it("RestJsonHttpPrefixHeadersArePresent:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpPrefixHeaders: testFunction as HttpPrefixHeaders<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    HttpPrefixHeaders: testFunction as HttpPrefixHeaders<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    HttpPrefixHeaders(input: any, ctx: {}): Promise<HttpPrefixHeadersServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");
  expect(r.headers["x-foo-abc"]).toBeDefined();
  expect(r.headers["x-foo-abc"]).toBe("Abc value");
  expect(r.headers["x-foo-def"]).toBeDefined();
  expect(r.headers["x-foo-def"]).toBe("Def value");
});

/**
 * (de)serializes all response headers
 */
it("HttpPrefixHeadersResponse:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    HttpPrefixHeadersResponse(input: any, ctx: {}): Promise<HttpPrefixHeadersResponseServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["hello"]).toBeDefined();
  expect(r.headers["hello"]).toBe("Hello");
  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");
});

/**
 * Supports handling NaN float label values.
 */
it("RestJsonSupportsNaNFloatLabels:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpRequestWithFloatLabels: testFunction as HttpRequestWithFloatLabels<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/FloatHttpLabels/NaN/NaN",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      float: NaN,

      double: NaN,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling Infinity float label values.
 */
it("RestJsonSupportsInfinityFloatLabels:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpRequestWithFloatLabels: testFunction as HttpRequestWithFloatLabels<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/FloatHttpLabels/Infinity/Infinity",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      float: Infinity,

      double: Infinity,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Supports handling -Infinity float label values.
 */
it("RestJsonSupportsNegativeInfinityFloatLabels:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpRequestWithFloatLabels: testFunction as HttpRequestWithFloatLabels<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/FloatHttpLabels/-Infinity/-Infinity",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      float: -Infinity,

      double: -Infinity,
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes greedy labels and normal labels
 */
it("RestJsonHttpRequestWithGreedyLabelInPath:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpRequestWithGreedyLabelInPath: testFunction as HttpRequestWithGreedyLabelInPath<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/HttpRequestWithGreedyLabelInPath/foo/hello%2Fescape/baz/there/guy",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      foo: "hello/escape",

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
it("RestJsonInputWithHeadersAndAllParams:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpRequestWithLabels: testFunction as HttpRequestWithLabels<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/HttpRequestWithLabels/string/1/2/3/4.1/5.1/true/2019-12-16T23%3A48%3A18Z",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

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
 * Sends a GET request that uses URI label bindings
 */
it("RestJsonHttpRequestLabelEscaping:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpRequestWithLabels: testFunction as HttpRequestWithLabels<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/HttpRequestWithLabels/%25%3A%2F%3F%23%5B%5D%40%21%24%26%27%28%29%2A%2B%2C%3B%3D%F0%9F%98%B9/1/2/3/4.1/5.1/true/2019-12-16T23%3A48%3A18Z",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      string: "%:/?#[]@!$&'()*+,;=😹",

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
it("RestJsonHttpRequestWithLabelsAndTimestampFormat:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpRequestWithLabelsAndTimestampFormat: testFunction as HttpRequestWithLabelsAndTimestampFormat<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "GET",
    hostname: "foo.example.com",
    path: "/HttpRequestWithLabelsAndTimestampFormat/1576540098/Mon%2C%2016%20Dec%202019%2023%3A48%3A18%20GMT/2019-12-16T23%3A48%3A18Z/2019-12-16T23%3A48%3A18Z/1576540098/Mon%2C%2016%20Dec%202019%2023%3A48%3A18%20GMT/2019-12-16T23%3A48%3A18Z",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

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
it("RestJsonHttpResponseCode:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    HttpResponseCode(input: any, ctx: {}): Promise<HttpResponseCodeServerOutput> {
      let response = {
        Status: 201,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(201);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

it("StringPayloadRequest:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpStringPayload: testFunction as HttpStringPayload<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/StringPayload",
    query: {},
    headers: {},
    body: Readable.from(["rawstring"]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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

it("StringPayloadResponse:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    HttpStringPayload(input: any, ctx: {}): Promise<HttpStringPayloadServerOutput> {
      let response = {
        payload: "rawstring",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "HttpStringPayload">("POST", [], [], {
      service: "RestJson",
      operation: "HttpStringPayload",
    }),
  ]);
  class TestSerializer extends HttpStringPayloadSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `rawstring`;
  const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
});

/**
 * Query parameters must be ignored when serializing the output
 * of an operation. As of January 2021, server implementations
 * are expected to respond with a JSON object regardless of
 * if the output parameters are empty.
 */
it("RestJsonIgnoreQueryParamsInResponse:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    IgnoreQueryParamsInResponse(input: any, ctx: {}): Promise<IgnoreQueryParamsInResponseServerOutput> {
      let response = {} as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
 * Tests requests with string header bindings
 */
it("RestJsonInputAndOutputWithStringHeaders:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
 * Tests requests with boolean header bindings
 */
it("RestJsonInputAndOutputWithBooleanHeaders:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
 * Supports handling NaN float header values.
 */
it("RestJsonSupportsNaNFloatHeaderInputs:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/InputAndOutputWithHeaders",
    query: {},
    headers: {
      "x-float": "NaN",
      "x-double": "NaN",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
it("RestJsonSupportsInfinityFloatHeaderInputs:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/InputAndOutputWithHeaders",
    query: {},
    headers: {
      "x-float": "Infinity",
      "x-double": "Infinity",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
it("RestJsonSupportsNegativeInfinityFloatHeaderInputs:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    InputAndOutputWithHeaders: testFunction as InputAndOutputWithHeaders<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/InputAndOutputWithHeaders",
    query: {},
    headers: {
      "x-float": "-Infinity",
      "x-double": "-Infinity",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Tests responses with string header bindings
 */
it("RestJsonInputAndOutputWithStringHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    InputAndOutputWithHeaders(input: any, ctx: {}): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
        headerString: "Hello",

        headerStringList: ["a", "b", "c"],

        headerStringSet: ["a", "b", "c"],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-string"]).toBeDefined();
  expect(r.headers["x-string"]).toBe("Hello");
  expect(r.headers["x-stringlist"]).toBeDefined();
  expect(r.headers["x-stringlist"]).toBe("a, b, c");
  expect(r.headers["x-stringset"]).toBeDefined();
  expect(r.headers["x-stringset"]).toBe("a, b, c");
});

/**
 * Tests responses with numeric header bindings
 */
it("RestJsonInputAndOutputWithNumericHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    InputAndOutputWithHeaders(input: any, ctx: {}): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
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
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
});

/**
 * Tests responses with boolean header bindings
 */
it("RestJsonInputAndOutputWithBooleanHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    InputAndOutputWithHeaders(input: any, ctx: {}): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
        headerTrueBool: true,

        headerFalseBool: false,

        headerBooleanList: [true, false, true],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-boolean1"]).toBeDefined();
  expect(r.headers["x-boolean1"]).toBe("true");
  expect(r.headers["x-boolean2"]).toBeDefined();
  expect(r.headers["x-boolean2"]).toBe("false");
  expect(r.headers["x-booleanlist"]).toBeDefined();
  expect(r.headers["x-booleanlist"]).toBe("true, false, true");
});

/**
 * Tests responses with timestamp header bindings
 */
it("RestJsonInputAndOutputWithTimestampHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    InputAndOutputWithHeaders(input: any, ctx: {}): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
        headerTimestampList: [new Date(1576540098000), new Date(1576540098000)],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-timestamplist"]).toBeDefined();
  expect(r.headers["x-timestamplist"]).toBe("Mon, 16 Dec 2019 23:48:18 GMT, Mon, 16 Dec 2019 23:48:18 GMT");
});

/**
 * Tests responses with enum header bindings
 */
it("RestJsonInputAndOutputWithEnumHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    InputAndOutputWithHeaders(input: any, ctx: {}): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
        headerEnum: "Foo",

        headerEnumList: ["Foo", "Bar", "Baz"],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-enum"]).toBeDefined();
  expect(r.headers["x-enum"]).toBe("Foo");
  expect(r.headers["x-enumlist"]).toBeDefined();
  expect(r.headers["x-enumlist"]).toBe("Foo, Bar, Baz");
});

/**
 * Supports handling NaN float header values.
 */
it("RestJsonSupportsNaNFloatHeaderOutputs:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    InputAndOutputWithHeaders(input: any, ctx: {}): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
        headerFloat: NaN,

        headerDouble: NaN,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-double"]).toBeDefined();
  expect(r.headers["x-double"]).toBe("NaN");
  expect(r.headers["x-float"]).toBeDefined();
  expect(r.headers["x-float"]).toBe("NaN");
});

/**
 * Supports handling Infinity float header values.
 */
it("RestJsonSupportsInfinityFloatHeaderOutputs:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    InputAndOutputWithHeaders(input: any, ctx: {}): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
        headerFloat: Infinity,

        headerDouble: Infinity,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-double"]).toBeDefined();
  expect(r.headers["x-double"]).toBe("Infinity");
  expect(r.headers["x-float"]).toBeDefined();
  expect(r.headers["x-float"]).toBe("Infinity");
});

/**
 * Supports handling -Infinity float header values.
 */
it("RestJsonSupportsNegativeInfinityFloatHeaderOutputs:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    InputAndOutputWithHeaders(input: any, ctx: {}): Promise<InputAndOutputWithHeadersServerOutput> {
      let response = {
        headerFloat: -Infinity,

        headerDouble: -Infinity,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-double"]).toBeDefined();
  expect(r.headers["x-double"]).toBe("-Infinity");
  expect(r.headers["x-float"]).toBeDefined();
  expect(r.headers["x-float"]).toBe("-Infinity");
});

/**
 * Blobs are base64 encoded
 */
it("RestJsonJsonBlobs:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    JsonBlobs: testFunction as JsonBlobs<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonBlobs(input: any, ctx: {}): Promise<JsonBlobsServerOutput> {
      let response = {
        data: Uint8Array.from("value", (c) => c.charCodeAt(0)),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
it("RestJsonJsonEnums:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    JsonEnums: testFunction as JsonEnums<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonEnums(input: any, ctx: {}): Promise<JsonEnumsServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
it("RestJsonLists:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    JsonLists: testFunction as JsonLists<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonLists: testFunction as JsonLists<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonLists: testFunction as JsonLists<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonLists(input: any, ctx: {}): Promise<JsonListsServerOutput> {
      let response = {
        stringList: ["foo", "bar"],

        stringSet: ["foo", "bar"],

        integerList: [
          1,

          2,
        ],

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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonLists(input: any, ctx: {}): Promise<JsonListsServerOutput> {
      let response = {
        stringList: [],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonLists(input: any, ctx: {}): Promise<JsonListsServerOutput> {
      let response = {
        sparseStringList: [null, "hi"],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
it("RestJsonJsonMaps:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    JsonMaps: testFunction as JsonMaps<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonMaps: testFunction as JsonMaps<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonMaps: testFunction as JsonMaps<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
 * A request that contains a sparse map of sets
 */
it("RestJsonSerializesSparseSetMap:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    JsonMaps: testFunction as JsonMaps<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/JsonMaps",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "sparseSetMap": {\n        "x": [],\n        "y": ["a", "b"]\n    }\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * A request that contains a dense map of sets.
 */
it("RestJsonSerializesDenseSetMap:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    JsonMaps: testFunction as JsonMaps<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/JsonMaps",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "denseSetMap": {\n        "x": [],\n        "y": ["a", "b"]\n    }\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * A request that contains a sparse map of sets.
 */
it("RestJsonSerializesSparseSetMapAndRetainsNull:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    JsonMaps: testFunction as JsonMaps<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/JsonMaps",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "sparseSetMap": {\n        "x": [],\n        "y": ["a", "b"],\n        "z": null\n    }\n}',
    ]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Deserializes JSON maps
 */
it("RestJsonJsonMaps:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    JsonMaps(input: any, ctx: {}): Promise<JsonMapsServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonMaps(input: any, ctx: {}): Promise<JsonMapsServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonMaps(input: any, ctx: {}): Promise<JsonMapsServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
 * A response that contains a sparse map of sets
 */
it("RestJsonDeserializesSparseSetMap:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    JsonMaps(input: any, ctx: {}): Promise<JsonMapsServerOutput> {
      let response = {
        sparseSetMap: {
          x: [],

          y: ["a", "b"],
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                    \"sparseSetMap\": {
                                                                                        \"x\": [],
                                                                                        \"y\": [\"a\", \"b\"]
                                                                                    }
                                                                                }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * A response that contains a dense map of sets.
 */
it("RestJsonDeserializesDenseSetMap:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    JsonMaps(input: any, ctx: {}): Promise<JsonMapsServerOutput> {
      let response = {
        denseSetMap: {
          x: [],

          y: ["a", "b"],
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                      \"denseSetMap\": {
                                                                                          \"x\": [],
                                                                                          \"y\": [\"a\", \"b\"]
                                                                                      }
                                                                                  }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * A response that contains a sparse map of sets.
 */
it("RestJsonDeserializesSparseSetMapAndRetainsNull:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    JsonMaps(input: any, ctx: {}): Promise<JsonMapsServerOutput> {
      let response = {
        sparseSetMap: {
          x: [],

          y: ["a", "b"],

          z: null,
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                        \"sparseSetMap\": {
                                                                                            \"x\": [],
                                                                                            \"y\": [\"a\", \"b\"],
                                                                                            \"z\": null
                                                                                        }
                                                                                    }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Tests how normal timestamps are serialized
 */
it("RestJsonJsonTimestamps:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    JsonTimestamps: testFunction as JsonTimestamps<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonTimestamps: testFunction as JsonTimestamps<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonTimestamps: testFunction as JsonTimestamps<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonTimestamps: testFunction as JsonTimestamps<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonTimestamps(input: any, ctx: {}): Promise<JsonTimestampsServerOutput> {
      let response = {
        normal: new Date(1398796238000),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonTimestamps(input: any, ctx: {}): Promise<JsonTimestampsServerOutput> {
      let response = {
        dateTime: new Date(1398796238000),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonTimestamps(input: any, ctx: {}): Promise<JsonTimestampsServerOutput> {
      let response = {
        epochSeconds: new Date(1398796238000),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonTimestamps(input: any, ctx: {}): Promise<JsonTimestampsServerOutput> {
      let response = {
        httpDate: new Date(1398796238000),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
it("RestJsonSerializeStringUnionValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    JsonUnions: testFunction as JsonUnions<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonUnions: testFunction as JsonUnions<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonUnions: testFunction as JsonUnions<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonUnions: testFunction as JsonUnions<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonUnions: testFunction as JsonUnions<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonUnions: testFunction as JsonUnions<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonUnions: testFunction as JsonUnions<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonUnions: testFunction as JsonUnions<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    JsonUnions: testFunction as JsonUnions<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
 * Serializes a renamed structure union value
 */
it("RestJsonSerializeRenamedStructureUnionValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    JsonUnions: testFunction as JsonUnions<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/JsonUnions",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "contents": {\n        "renamedStructureValue": {\n            "salutation": "hello!"\n        }\n    }\n}',
    ]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      contents: {
        renamedStructureValue: {
          salutation: "hello!",
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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonUnions(input: any, ctx: {}): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          stringValue: "foo",
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonUnions(input: any, ctx: {}): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          booleanValue: true,
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonUnions(input: any, ctx: {}): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          numberValue: 1,
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonUnions(input: any, ctx: {}): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          blobValue: Uint8Array.from("foo", (c) => c.charCodeAt(0)),
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonUnions(input: any, ctx: {}): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          timestampValue: new Date(1398796238000),
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonUnions(input: any, ctx: {}): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          enumValue: "Foo",
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonUnions(input: any, ctx: {}): Promise<JsonUnionsServerOutput> {
      let response = {
        contents: {
          listValue: ["foo", "bar"],
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonUnions(input: any, ctx: {}): Promise<JsonUnionsServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    JsonUnions(input: any, ctx: {}): Promise<JsonUnionsServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
it("MediaTypeHeaderInputBase64:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    MediaTypeHeader: testFunction as MediaTypeHeader<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    MediaTypeHeader(input: any, ctx: {}): Promise<MediaTypeHeaderServerOutput> {
      let response = {
        json: "true",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-json"]).toBeDefined();
  expect(r.headers["x-json"]).toBe("dHJ1ZQ==");
});

/**
 * No input serializes no payload. When clients do not need to
 * serialize any data in the payload, they should omit a payload
 * altogether.
 */
it("RestJsonNoInputAndNoOutput:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    NoInputAndNoOutput: testFunction as NoInputAndNoOutput<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/NoInputAndNoOutput",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];
});

/**
 * When an operation does not define output, the service will respond
 * with an empty payload, and may optionally include the content-type
 * header.
 */
it("RestJsonNoInputAndNoOutput:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    NoInputAndNoOutput(input: any, ctx: {}): Promise<NoInputAndNoOutputServerOutput> {
      return Promise.resolve({ $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.body).toBeFalsy();
});

/**
 * No input serializes no payload. When clients do not need to
 * serialize any data in the payload, they should omit a payload
 * altogether.
 */
it("RestJsonNoInputAndOutput:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    NoInputAndOutput: testFunction as NoInputAndOutput<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/NoInputAndOutputOutput",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];
});

/**
 * Operations that define output and do not bind anything to
 * the payload return a JSON object in the response.
 */
it("RestJsonNoInputAndOutputWithJson:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    NoInputAndOutput(input: any, ctx: {}): Promise<NoInputAndOutputServerOutput> {
      let response = {} as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
 * Do not send null or empty headers
 */
it("RestJsonNullAndEmptyHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    NullAndEmptyHeadersServer(input: any, ctx: {}): Promise<NullAndEmptyHeadersServerServerOutput> {
      let response = {
        a: null,

        b: "",

        c: [],
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-a"]).toBeUndefined();
  expect(r.headers["x-b"]).toBeUndefined();
  expect(r.headers["x-c"]).toBeUndefined();
});

/**
 * Serializes empty query strings
 */
it("RestJsonSerializesEmptyQueryValue:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    OmitsNullSerializesEmptyString: testFunction as OmitsNullSerializesEmptyString<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      emptyString: "",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Servers put all query params in map
 */
it("RestJsonServersQueryParamsStringListMap:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    QueryParamsAsStringListMap: testFunction as QueryParamsAsStringListMap<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/StringListMap",
    query: {
      corge: "named",
      baz: ["bar", "qux"],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      qux: "named",

      foo: {
        corge: ["named"],

        baz: ["bar", "qux"],
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Servers put all query params in map
 */
it("RestJsonServersPutAllQueryParamsInMap:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    QueryPrecedence: testFunction as QueryPrecedence<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "POST",
    hostname: "foo.example.com",
    path: "/Precedence",
    query: {
      bar: "named",
      qux: "fromMap",
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      foo: "named",

      baz: {
        bar: "named",

        qux: "fromMap",
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
  const testService: Partial<RestJsonService<{}>> = {
    RecursiveShapes: testFunction as RecursiveShapes<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    RecursiveShapes(input: any, ctx: {}): Promise<RecursiveShapesServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
it("RestJsonSimpleScalarProperties:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    SimpleScalarProperties: testFunction as SimpleScalarProperties<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
 * Rest Json should not deserialize null structure values
 */
it("RestJsonServersDontSerializeNullStructureValues:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    SimpleScalarProperties: testFunction as SimpleScalarProperties<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/SimpleScalarProperties",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "stringValue": null\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];
});

/**
 * Supports handling NaN float values.
 */
it("RestJsonSupportsNaNFloatInputs:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    SimpleScalarProperties: testFunction as SimpleScalarProperties<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/SimpleScalarProperties",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "floatValue": "NaN",\n    "DoubleDribble": "NaN"\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
it("RestJsonSupportsInfinityFloatInputs:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    SimpleScalarProperties: testFunction as SimpleScalarProperties<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/SimpleScalarProperties",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "floatValue": "Infinity",\n    "DoubleDribble": "Infinity"\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
it("RestJsonSupportsNegativeInfinityFloatInputs:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    SimpleScalarProperties: testFunction as SimpleScalarProperties<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
  const request = new HttpRequest({
    method: "PUT",
    hostname: "foo.example.com",
    path: "/SimpleScalarProperties",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "floatValue": "-Infinity",\n    "DoubleDribble": "-Infinity"\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  let r: any = testFunction.mock.calls[0][0];

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
 * Serializes simple scalar properties
 */
it("RestJsonSimpleScalarProperties:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    SimpleScalarProperties(input: any, ctx: {}): Promise<SimpleScalarPropertiesServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
 * Rest Json should not serialize null structure values
 */
it("RestJsonServersDontSerializeNullStructureValues:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    SimpleScalarProperties(input: any, ctx: {}): Promise<SimpleScalarPropertiesServerOutput> {
      let response = {
        stringValue: null,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
 * Supports handling NaN float values.
 */
it("RestJsonSupportsNaNFloatInputs:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    SimpleScalarProperties(input: any, ctx: {}): Promise<SimpleScalarPropertiesServerOutput> {
      let response = {
        floatValue: NaN,

        doubleValue: NaN,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                                                                  \"floatValue\": \"NaN\",
                                                                                                                                  \"DoubleDribble\": \"NaN\"
                                                                                                                              }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Supports handling Infinity float values.
 */
it("RestJsonSupportsInfinityFloatInputs:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    SimpleScalarProperties(input: any, ctx: {}): Promise<SimpleScalarPropertiesServerOutput> {
      let response = {
        floatValue: Infinity,

        doubleValue: Infinity,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                                                                    \"floatValue\": \"Infinity\",
                                                                                                                                    \"DoubleDribble\": \"Infinity\"
                                                                                                                                }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Supports handling -Infinity float values.
 */
it("RestJsonSupportsNegativeInfinityFloatInputs:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    SimpleScalarProperties(input: any, ctx: {}): Promise<SimpleScalarPropertiesServerOutput> {
      let response = {
        floatValue: -Infinity,

        doubleValue: -Infinity,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                                                                      \"floatValue\": \"-Infinity\",
                                                                                                                                      \"DoubleDribble\": \"-Infinity\"
                                                                                                                                  }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes a blob in the HTTP payload
 */
it("RestJsonStreamingTraitsWithBlob:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    StreamingTraits: testFunction as StreamingTraits<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    StreamingTraits: testFunction as StreamingTraits<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    StreamingTraits(input: any, ctx: {}): Promise<StreamingTraitsServerOutput> {
      let response = {
        foo: "Foo",

        blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/octet-stream");
  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `blobby blob blob`;
  const unequalParts: any = compareEquivalentOctetStreamBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonStreamingTraitsWithNoBlobBody:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    StreamingTraits(input: any, ctx: {}): Promise<StreamingTraitsServerOutput> {
      let response = {
        foo: "Foo",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeFalsy();
});

/**
 * Serializes a blob in the HTTP payload with a required length
 */
it.skip("RestJsonStreamingTraitsRequireLengthWithBlob:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    StreamingTraitsRequireLength: testFunction as StreamingTraitsRequireLength<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  const testService: Partial<RestJsonService<{}>> = {
    StreamingTraitsRequireLength: testFunction as StreamingTraitsRequireLength<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
it.skip("RestJsonStreamingTraitsRequireLengthWithBlob:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    StreamingTraitsRequireLength(input: any, ctx: {}): Promise<StreamingTraitsRequireLengthServerOutput> {
      let response = {
        foo: "Foo",

        blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);
  expect(r.headers["content-length"]).toBeDefined();

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/octet-stream");
  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `blobby blob blob`;
  const unequalParts: any = compareEquivalentOctetStreamBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonStreamingTraitsRequireLengthWithNoBlobBody:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    StreamingTraitsRequireLength(input: any, ctx: {}): Promise<StreamingTraitsRequireLengthServerOutput> {
      let response = {
        foo: "Foo",
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeFalsy();
});

/**
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonStreamingTraitsWithMediaTypeWithBlob:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    StreamingTraitsWithMediaType: testFunction as StreamingTraitsWithMediaType<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    StreamingTraitsWithMediaType(input: any, ctx: {}): Promise<StreamingTraitsWithMediaTypeServerOutput> {
      let response = {
        foo: "Foo",

        blob: Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)),
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("text/plain");
  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `blobby blob blob`;
  const unequalParts: any = compareEquivalentOctetStreamBodies(utf8Encoder, bodyString, r.body);
  expect(unequalParts).toBeUndefined();
});

/**
 * Tests how timestamp request headers are serialized
 */
it("RestJsonTimestampFormatHeaders:ServerRequest", async () => {
  let testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    TimestampFormatHeaders: testFunction as TimestampFormatHeaders<{}>,
  };
  const handler = getRestJsonServiceHandler(
    testService as RestJsonService<{}>,
    (ctx: {}, failures: __ValidationFailure[]) => {
      if (failures) {
        throw failures;
      }
      return undefined;
    }
  );
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
  await handler.handle(request, {});

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
  class TestService implements Partial<RestJsonService<{}>> {
    TimestampFormatHeaders(input: any, ctx: {}): Promise<TimestampFormatHeadersServerOutput> {
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
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __SmithyException> = (op) => {
    return new TestSerializer();
  };
  const handler = new RestJsonServiceHandler(
    service,
    testMux,
    serFn,
    serializeFrameworkException,
    (ctx: {}, f: __ValidationFailure[]) => {
      if (f) {
        throw f;
      }
      return undefined;
    }
  );
  let r = await handler.handle(request, {});

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
