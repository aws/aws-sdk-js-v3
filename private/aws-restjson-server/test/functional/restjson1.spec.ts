// smithy-typescript generated code
import {
  httpbinding,
  OperationSerializer as __OperationSerializer,
  ServiceException as __BaseException,
  ServiceException as __ServiceException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { streamCollector as __streamCollector } from "@smithy/node-http-handler";
import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { Encoder as __Encoder } from "@smithy/types";
import { HeaderBag, HttpHandlerOptions } from "@smithy/types";
import { toUtf8 as __utf8Encoder } from "@smithy/util-utf8";
import { Readable } from "stream";

import { ComplexError, InvalidGreeting } from "../../src/models/models_0";
import { serializeFrameworkException } from "../../src/protocols/Aws_restJson1";
import { getRestJsonServiceHandler } from "../../src/server";
import { AllQueryStringTypes } from "../../src/server/operations/AllQueryStringTypes";
import { ConstantAndVariableQueryString } from "../../src/server/operations/ConstantAndVariableQueryString";
import { ConstantQueryString } from "../../src/server/operations/ConstantQueryString";
import {
  DocumentType,
  DocumentTypeSerializer,
  DocumentTypeServerOutput,
} from "../../src/server/operations/DocumentType";
import {
  DocumentTypeAsPayload,
  DocumentTypeAsPayloadSerializer,
  DocumentTypeAsPayloadServerOutput,
} from "../../src/server/operations/DocumentTypeAsPayload";
import {
  EmptyInputAndEmptyOutput,
  EmptyInputAndEmptyOutputSerializer,
  EmptyInputAndEmptyOutputServerOutput,
} from "../../src/server/operations/EmptyInputAndEmptyOutput";
import { EndpointOperation } from "../../src/server/operations/EndpointOperation";
import { EndpointWithHostLabelOperation } from "../../src/server/operations/EndpointWithHostLabelOperation";
import {
  GreetingWithErrorsSerializer,
  GreetingWithErrorsServerOutput,
} from "../../src/server/operations/GreetingWithErrors";
import { HttpChecksumRequired } from "../../src/server/operations/HttpChecksumRequired";
import {
  HttpEnumPayload,
  HttpEnumPayloadSerializer,
  HttpEnumPayloadServerOutput,
} from "../../src/server/operations/HttpEnumPayload";
import {
  HttpPayloadTraits,
  HttpPayloadTraitsSerializer,
  HttpPayloadTraitsServerOutput,
} from "../../src/server/operations/HttpPayloadTraits";
import {
  HttpPayloadTraitsWithMediaType,
  HttpPayloadTraitsWithMediaTypeSerializer,
  HttpPayloadTraitsWithMediaTypeServerOutput,
} from "../../src/server/operations/HttpPayloadTraitsWithMediaType";
import {
  HttpPayloadWithStructure,
  HttpPayloadWithStructureSerializer,
  HttpPayloadWithStructureServerOutput,
} from "../../src/server/operations/HttpPayloadWithStructure";
import {
  HttpPayloadWithUnion,
  HttpPayloadWithUnionSerializer,
  HttpPayloadWithUnionServerOutput,
} from "../../src/server/operations/HttpPayloadWithUnion";
import {
  HttpPrefixHeaders,
  HttpPrefixHeadersSerializer,
  HttpPrefixHeadersServerOutput,
} from "../../src/server/operations/HttpPrefixHeaders";
import {
  HttpPrefixHeadersInResponseSerializer,
  HttpPrefixHeadersInResponseServerOutput,
} from "../../src/server/operations/HttpPrefixHeadersInResponse";
import { HttpRequestWithFloatLabels } from "../../src/server/operations/HttpRequestWithFloatLabels";
import { HttpRequestWithGreedyLabelInPath } from "../../src/server/operations/HttpRequestWithGreedyLabelInPath";
import { HttpRequestWithLabels } from "../../src/server/operations/HttpRequestWithLabels";
import { HttpRequestWithLabelsAndTimestampFormat } from "../../src/server/operations/HttpRequestWithLabelsAndTimestampFormat";
import { HttpRequestWithRegexLiteral } from "../../src/server/operations/HttpRequestWithRegexLiteral";
import { HttpResponseCodeSerializer, HttpResponseCodeServerOutput } from "../../src/server/operations/HttpResponseCode";
import {
  HttpStringPayload,
  HttpStringPayloadSerializer,
  HttpStringPayloadServerOutput,
} from "../../src/server/operations/HttpStringPayload";
import {
  IgnoreQueryParamsInResponseSerializer,
  IgnoreQueryParamsInResponseServerOutput,
} from "../../src/server/operations/IgnoreQueryParamsInResponse";
import {
  InputAndOutputWithHeaders,
  InputAndOutputWithHeadersSerializer,
  InputAndOutputWithHeadersServerOutput,
} from "../../src/server/operations/InputAndOutputWithHeaders";
import { JsonBlobs, JsonBlobsSerializer, JsonBlobsServerOutput } from "../../src/server/operations/JsonBlobs";
import { JsonEnums, JsonEnumsSerializer, JsonEnumsServerOutput } from "../../src/server/operations/JsonEnums";
import {
  JsonIntEnums,
  JsonIntEnumsSerializer,
  JsonIntEnumsServerOutput,
} from "../../src/server/operations/JsonIntEnums";
import { JsonLists, JsonListsSerializer, JsonListsServerOutput } from "../../src/server/operations/JsonLists";
import { JsonMaps, JsonMapsSerializer, JsonMapsServerOutput } from "../../src/server/operations/JsonMaps";
import {
  JsonTimestamps,
  JsonTimestampsSerializer,
  JsonTimestampsServerOutput,
} from "../../src/server/operations/JsonTimestamps";
import { JsonUnions, JsonUnionsSerializer, JsonUnionsServerOutput } from "../../src/server/operations/JsonUnions";
import { MalformedAcceptWithBody } from "../../src/server/operations/MalformedAcceptWithBody";
import { MalformedAcceptWithGenericString } from "../../src/server/operations/MalformedAcceptWithGenericString";
import { MalformedAcceptWithPayload } from "../../src/server/operations/MalformedAcceptWithPayload";
import { MalformedBlob } from "../../src/server/operations/MalformedBlob";
import { MalformedBoolean } from "../../src/server/operations/MalformedBoolean";
import { MalformedByte } from "../../src/server/operations/MalformedByte";
import { MalformedContentTypeWithBody } from "../../src/server/operations/MalformedContentTypeWithBody";
import { MalformedContentTypeWithoutBody } from "../../src/server/operations/MalformedContentTypeWithoutBody";
import { MalformedContentTypeWithPayload } from "../../src/server/operations/MalformedContentTypeWithPayload";
import { MalformedDouble } from "../../src/server/operations/MalformedDouble";
import { MalformedFloat } from "../../src/server/operations/MalformedFloat";
import { MalformedInteger } from "../../src/server/operations/MalformedInteger";
import { MalformedList } from "../../src/server/operations/MalformedList";
import { MalformedLong } from "../../src/server/operations/MalformedLong";
import { MalformedMap } from "../../src/server/operations/MalformedMap";
import { MalformedRequestBody } from "../../src/server/operations/MalformedRequestBody";
import { MalformedShort } from "../../src/server/operations/MalformedShort";
import { MalformedString } from "../../src/server/operations/MalformedString";
import { MalformedTimestampBodyDateTime } from "../../src/server/operations/MalformedTimestampBodyDateTime";
import { MalformedTimestampBodyDefault } from "../../src/server/operations/MalformedTimestampBodyDefault";
import { MalformedTimestampBodyHttpDate } from "../../src/server/operations/MalformedTimestampBodyHttpDate";
import { MalformedTimestampHeaderDateTime } from "../../src/server/operations/MalformedTimestampHeaderDateTime";
import { MalformedTimestampHeaderDefault } from "../../src/server/operations/MalformedTimestampHeaderDefault";
import { MalformedTimestampHeaderEpoch } from "../../src/server/operations/MalformedTimestampHeaderEpoch";
import { MalformedTimestampPathDefault } from "../../src/server/operations/MalformedTimestampPathDefault";
import { MalformedTimestampPathEpoch } from "../../src/server/operations/MalformedTimestampPathEpoch";
import { MalformedTimestampPathHttpDate } from "../../src/server/operations/MalformedTimestampPathHttpDate";
import { MalformedTimestampQueryDefault } from "../../src/server/operations/MalformedTimestampQueryDefault";
import { MalformedTimestampQueryEpoch } from "../../src/server/operations/MalformedTimestampQueryEpoch";
import { MalformedTimestampQueryHttpDate } from "../../src/server/operations/MalformedTimestampQueryHttpDate";
import { MalformedUnion } from "../../src/server/operations/MalformedUnion";
import {
  MediaTypeHeader,
  MediaTypeHeaderSerializer,
  MediaTypeHeaderServerOutput,
} from "../../src/server/operations/MediaTypeHeader";
import {
  NoInputAndNoOutput,
  NoInputAndNoOutputSerializer,
  NoInputAndNoOutputServerOutput,
} from "../../src/server/operations/NoInputAndNoOutput";
import {
  NoInputAndOutput,
  NoInputAndOutputSerializer,
  NoInputAndOutputServerOutput,
} from "../../src/server/operations/NoInputAndOutput";
import {
  NullAndEmptyHeadersServerSerializer,
  NullAndEmptyHeadersServerServerOutput,
} from "../../src/server/operations/NullAndEmptyHeadersServer";
import { OmitsNullSerializesEmptyString } from "../../src/server/operations/OmitsNullSerializesEmptyString";
import {
  PostPlayerAction,
  PostPlayerActionSerializer,
  PostPlayerActionServerOutput,
} from "../../src/server/operations/PostPlayerAction";
import {
  PostUnionWithJsonName,
  PostUnionWithJsonNameSerializer,
  PostUnionWithJsonNameServerOutput,
} from "../../src/server/operations/PostUnionWithJsonName";
import { PutWithContentEncoding } from "../../src/server/operations/PutWithContentEncoding";
import { QueryParamsAsStringListMap } from "../../src/server/operations/QueryParamsAsStringListMap";
import { QueryPrecedence } from "../../src/server/operations/QueryPrecedence";
import {
  RecursiveShapes,
  RecursiveShapesSerializer,
  RecursiveShapesServerOutput,
} from "../../src/server/operations/RecursiveShapes";
import {
  SimpleScalarProperties,
  SimpleScalarPropertiesSerializer,
  SimpleScalarPropertiesServerOutput,
} from "../../src/server/operations/SimpleScalarProperties";
import {
  StreamingTraits,
  StreamingTraitsSerializer,
  StreamingTraitsServerOutput,
} from "../../src/server/operations/StreamingTraits";
import { StreamingTraitsRequireLength } from "../../src/server/operations/StreamingTraitsRequireLength";
import {
  StreamingTraitsWithMediaType,
  StreamingTraitsWithMediaTypeSerializer,
  StreamingTraitsWithMediaTypeServerOutput,
} from "../../src/server/operations/StreamingTraitsWithMediaType";
import { TestBodyStructure } from "../../src/server/operations/TestBodyStructure";
import { TestNoPayload } from "../../src/server/operations/TestNoPayload";
import { TestPayloadBlob } from "../../src/server/operations/TestPayloadBlob";
import { TestPayloadStructure } from "../../src/server/operations/TestPayloadStructure";
import {
  TimestampFormatHeaders,
  TimestampFormatHeadersSerializer,
  TimestampFormatHeadersServerOutput,
} from "../../src/server/operations/TimestampFormatHeaders";
import {
  UnitInputAndOutput,
  UnitInputAndOutputSerializer,
  UnitInputAndOutputServerOutput,
} from "../../src/server/operations/UnitInputAndOutput";
import { RestJsonService, RestJsonServiceHandler, RestJsonServiceOperations } from "../../src/server/RestJsonService";

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
it("RestJsonAllQueryStringTypes:ServerRequest", async () => {
  const testFunction = jest.fn();
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
      Enum: ["Foo"],
      BooleanList: ["true", "false", "true"],
      StringList: ["a", "b", "c"],
      String: ["Hello there"],
      Timestamp: ["1970-01-01T00:00:01Z"],
      Double: ["1.1"],
      IntegerEnumList: ["1", "2", "3"],
      Integer: ["3"],
      Float: ["1.1"],
      TimestampList: ["1970-01-01T00:00:01Z", "1970-01-01T00:00:02Z", "1970-01-01T00:00:03Z"],
      EnumList: ["Foo", "Baz", "Bar"],
      DoubleList: ["1.1", "2.1", "3.1"],
      Byte: ["1"],
      Long: ["4"],
      IntegerList: ["1", "2", "3"],
      StringSet: ["a", "b", "c"],
      IntegerSet: ["1", "2", "3"],
      Boolean: ["true"],
      IntegerEnum: ["1"],
      Short: ["2"],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
      },
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
  const testFunction = jest.fn();
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
      QueryParamsStringKeyA: ["Foo"],
      QueryParamsStringKeyB: ["Bar"],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
      String: [" %:/?#[]@!$&'()*+,;=😹"],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      queryString: " %:/?#[]@!$&'()*+,;=😹",

      queryParamsMapOfStringList: {
        String: [" %:/?#[]@!$&'()*+,;=😹"],
      },
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
  const testFunction = jest.fn();
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
      Float: ["NaN"],
      Double: ["NaN"],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      queryFloat: NaN,

      queryDouble: NaN,

      queryParamsMapOfStringList: {
        Float: ["NaN"],

        Double: ["NaN"],
      },
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
  const testFunction = jest.fn();
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
      Float: ["Infinity"],
      Double: ["Infinity"],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      queryFloat: Infinity,

      queryDouble: Infinity,

      queryParamsMapOfStringList: {
        Float: ["Infinity"],

        Double: ["Infinity"],
      },
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
  const testFunction = jest.fn();
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
      Float: ["-Infinity"],
      Double: ["-Infinity"],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      queryFloat: -Infinity,

      queryDouble: -Infinity,

      queryParamsMapOfStringList: {
        Float: ["-Infinity"],

        Double: ["-Infinity"],
      },
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
  const testFunction = jest.fn();
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
      foo: ["bar"],
      baz: ["bam"],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
      maybeSet: ["yes"],
      foo: ["bar"],
      baz: ["bam"],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
      foo: ["bar"],
      hello: [""],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * Similar to RestJsonEmptyInputAndEmptyOutput, but ensures that
 * services gracefully handles receiving a JSON object.
 */
it("RestJsonEmptyInputAndEmptyOutputWithJson:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * As of January 2021, server implementations are expected to
 * respond with a JSON object regardless of if the output
 * parameters are empty.
 */
it("RestJsonEmptyInputAndEmptyOutput:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    EmptyInputAndEmptyOutput(input: any, ctx: {}): Promise<EmptyInputAndEmptyOutputServerOutput> {
      const response = {} as any;
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * Operations can prepend to the given host if they define the
 * endpoint trait, and can use the host label trait to define
 * further customization based on user input.
 */
it("RestJsonEndpointTraitWithHostLabel:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
 * Adds Content-MD5 header
 */
it("RestJsonHttpChecksumRequired:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpChecksumRequired: testFunction as HttpChecksumRequired<{}>,
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
    path: "/HttpChecksumRequired",
    query: {},
    headers: {
      "content-md5": "iB0/3YSo7maijL0IGOgA9g==",
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "foo":"base64 encoded md5 checksum"\n}\n']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      foo: "base64 encoded md5 checksum",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

it("EnumPayloadRequest:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
 * Servers must accept any content type for blob inputs
 * without the media type trait.
 */
it("RestJsonHttpPayloadTraitsWithBlobAcceptsAllContentTypes:ServerRequest", async () => {
  const testFunction = jest.fn();
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
      "content-type": "image/jpeg",
    },
    body: Readable.from(["This is definitely a jpeg"]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      foo: "Foo",

      blob: Uint8Array.from("This is definitely a jpeg", (c) => c.charCodeAt(0)),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Servers must accept any accept header for blob inputs
 * without the media type trait.
 */
it("RestJsonHttpPayloadTraitsWithBlobAcceptsAllAccepts:ServerRequest", async () => {
  const testFunction = jest.fn();
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
      accept: "image/jpeg",
    },
    body: Readable.from(["This is definitely a jpeg"]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      foo: "Foo",

      blob: Uint8Array.from("This is definitely a jpeg", (c) => c.charCodeAt(0)),
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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeFalsy();
});

/**
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonHttpPayloadTraitsWithMediaTypeWithBlob:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
 * Serializes a union in the payload.
 */
it("RestJsonHttpPayloadWithUnion:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpPayloadWithUnion: testFunction as HttpPayloadWithUnion<{}>,
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
    path: "/HttpPayloadWithUnion",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "greeting": "hello"\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
it.skip("RestJsonHttpPayloadWithUnsetUnion:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpPayloadWithUnion: testFunction as HttpPayloadWithUnion<{}>,
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
    path: "/HttpPayloadWithUnion",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * Serializes a union in the payload.
 */
it("RestJsonHttpPayloadWithUnion:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    HttpPayloadWithUnion(input: any, ctx: {}): Promise<HttpPayloadWithUnionServerOutput> {
      const response = {
        nested: {
          greeting: "hello",
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "HttpPayloadWithUnion">("POST", [], [], {
      service: "RestJson",
      operation: "HttpPayloadWithUnion",
    }),
  ]);
  class TestSerializer extends HttpPayloadWithUnionSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                          \"greeting\": \"hello\"
                                      }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * No payload is sent if the union has no value.
 */
it.skip("RestJsonHttpPayloadWithUnsetUnion:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    HttpPayloadWithUnion(input: any, ctx: {}): Promise<HttpPayloadWithUnionServerOutput> {
      const response = {} as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "HttpPayloadWithUnion">("POST", [], [], {
      service: "RestJson",
      operation: "HttpPayloadWithUnion",
    }),
  ]);
  class TestSerializer extends HttpPayloadWithUnionSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-length"]).toBeDefined();
  expect(r.headers["content-length"]).toBe("0");

  expect(r.body).toBeFalsy();
});

/**
 * Adds headers by prefix
 */
it("RestJsonHttpPrefixHeadersArePresent:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
it("RestJsonHttpPrefixHeadersArePresent:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    HttpPrefixHeaders(input: any, ctx: {}): Promise<HttpPrefixHeadersServerOutput> {
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
    HttpPrefixHeadersInResponse(input: any, ctx: {}): Promise<HttpPrefixHeadersInResponseServerOutput> {
      const response = {
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
    new httpbinding.UriSpec<"RestJson", "HttpPrefixHeadersInResponse">("POST", [], [], {
      service: "RestJson",
      operation: "HttpPrefixHeadersInResponse",
    }),
  ]);
  class TestSerializer extends HttpPrefixHeadersInResponseSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
    path: "/HttpRequestWithLabels/%20%25%3A%2F%3F%23%5B%5D%40%21%24%26%27%28%29%2A%2B%2C%3B%3D%F0%9F%98%B9/1/2/3/4.1/5.1/true/2019-12-16T23%3A48%3A18Z",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      string: " %:/?#[]@!$&'()*+,;=😹",

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
 * Path matching is not broken by regex expressions in literal segments
 */
it("RestJsonToleratesRegexCharsInSegments:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    HttpRequestWithRegexLiteral: testFunction as HttpRequestWithRegexLiteral<{}>,
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
    path: "/ReDosLiteral/abc/(a+)+",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      str: "abc",
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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
 * Binds the http response code to the http trait's code if the
 * code isn't explicitly set. A client would be parsing the
 * http response code, so this would always be present, but
 * a server doesn't require it to be set to serialize a request.
 */
it("RestJsonHttpResponseCodeDefaultsToModeledCode:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    HttpResponseCode(input: any, ctx: {}): Promise<HttpResponseCodeServerOutput> {
      const response = {} as any;
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{}`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

it("StringPayloadRequest:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {} as any;
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
 * Tests requests with string list header bindings that require quoting
 */
it.skip("RestJsonInputAndOutputWithQuotedStringHeaders:ServerRequest", async () => {
  const testFunction = jest.fn();
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
      "x-stringlist": '"b,c", "\\"def\\"", a',
    },
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
 * Tests requests with numeric header bindings
 */
it("RestJsonInputAndOutputWithNumericHeaders:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
 * Tests requests with intEnum header bindings
 */
it("RestJsonInputAndOutputWithIntEnumHeaders:ServerRequest", async () => {
  const testFunction = jest.fn();
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
      "x-integerenum": "1",
      "x-integerenumlist": "1, 2, 3",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
it("RestJsonSupportsNaNFloatHeaderInputs:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-string"]).toBeDefined();
  expect(r.headers["x-string"]).toBe("Hello");
  expect(r.headers["x-stringlist"]).toBeDefined();
  expect(r.headers["x-stringlist"]).toBe("a, b, c");
  expect(r.headers["x-stringset"]).toBeDefined();
  expect(r.headers["x-stringset"]).toBe("a, b, c");
});

/**
 * Tests responses with string list header bindings that require quoting
 */
it.skip("RestJsonInputAndOutputWithQuotedStringHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    InputAndOutputWithHeaders(input: any, ctx: {}): Promise<InputAndOutputWithHeadersServerOutput> {
      const response = {
        headerStringList: ["b,c", '"def"', "a"],
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-stringlist"]).toBeDefined();
  expect(r.headers["x-stringlist"]).toBe('"b,c", "\\"def\\"", a');
});

/**
 * Tests responses with numeric header bindings
 */
it("RestJsonInputAndOutputWithNumericHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    InputAndOutputWithHeaders(input: any, ctx: {}): Promise<InputAndOutputWithHeadersServerOutput> {
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-enum"]).toBeDefined();
  expect(r.headers["x-enum"]).toBe("Foo");
  expect(r.headers["x-enumlist"]).toBeDefined();
  expect(r.headers["x-enumlist"]).toBe("Foo, Bar, Baz");
});

/**
 * Tests responses with intEnum header bindings
 */
it("RestJsonInputAndOutputWithIntEnumHeaders:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    InputAndOutputWithHeaders(input: any, ctx: {}): Promise<InputAndOutputWithHeadersServerOutput> {
      const response = {
        headerIntegerEnum: 1,

        headerIntegerEnumList: [
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-integerenum"]).toBeDefined();
  expect(r.headers["x-integerenum"]).toBe("1");
  expect(r.headers["x-integerenumlist"]).toBeDefined();
  expect(r.headers["x-integerenumlist"]).toBe("1, 2, 3");
});

/**
 * Supports handling NaN float header values.
 */
it("RestJsonSupportsNaNFloatHeaderOutputs:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    InputAndOutputWithHeaders(input: any, ctx: {}): Promise<InputAndOutputWithHeadersServerOutput> {
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
 * Serializes intEnums as integers
 */
it("RestJsonJsonIntEnums:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    JsonIntEnums: testFunction as JsonIntEnums<{}>,
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
    path: "/JsonIntEnums",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([
      '{\n    "integerEnum1": 1,\n    "integerEnum2": 2,\n    "integerEnum3": 3,\n    "integerEnumList": [\n        1,\n        2,\n        3\n    ],\n    "integerEnumSet": [\n        1,\n        2\n    ],\n    "integerEnumMap": {\n        "abc": 1,\n        "def": 2\n    }\n}',
    ]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
 * Serializes intEnums as integers
 */
it("RestJsonJsonIntEnums:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    JsonIntEnums(input: any, ctx: {}): Promise<JsonIntEnumsServerOutput> {
      const response = {
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
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "JsonIntEnums">("POST", [], [], {
      service: "RestJson",
      operation: "JsonIntEnums",
    }),
  ]);
  class TestSerializer extends JsonIntEnumsSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
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
});

/**
 * Serializes JSON lists
 */
it("RestJsonLists:ServerRequest", async () => {
  const testFunction = jest.fn();
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
      '{\n    "stringList": [\n        "foo",\n        "bar"\n    ],\n    "stringSet": [\n        "foo",\n        "bar"\n    ],\n    "integerList": [\n        1,\n        2\n    ],\n    "booleanList": [\n        true,\n        false\n    ],\n    "timestampList": [\n        1398796238,\n        1398796238\n    ],\n    "enumList": [\n        "Foo",\n        "0"\n    ],\n    "intEnumList": [\n        1,\n        2\n    ],\n    "nestedStringList": [\n        [\n            "foo",\n            "bar"\n        ],\n        [\n            "baz",\n            "qux"\n        ]\n    ],\n    "myStructureList": [\n        {\n            "value": "1",\n            "other": "2"\n        },\n        {\n            "value": "3",\n            "other": "4"\n        }\n    ]\n}',
    ]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
it("RestJsonListsEmpty:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
});

/**
 * Serializes empty JSON lists
 */
it("RestJsonListsEmpty:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    JsonLists(input: any, ctx: {}): Promise<JsonListsServerOutput> {
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
it("RestJsonJsonTimestampsWithDateTimeOnTargetFormat:ServerRequest", async () => {
  const testFunction = jest.fn();
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
    body: Readable.from(['{\n    "dateTimeOnTarget": "2014-04-29T18:30:38Z"\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
it("RestJsonJsonTimestampsWithEpochSecondsFormat:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
it("RestJsonJsonTimestampsWithEpochSecondsOnTargetFormat:ServerRequest", async () => {
  const testFunction = jest.fn();
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
    body: Readable.from(['{\n    "epochSecondsOnTarget": 1398796238\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
it("RestJsonJsonTimestampsWithHttpDateFormat:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
it("RestJsonJsonTimestampsWithHttpDateOnTargetFormat:ServerRequest", async () => {
  const testFunction = jest.fn();
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
    body: Readable.from(['{\n    "httpDateOnTarget": "Tue, 29 Apr 2014 18:30:38 GMT"\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
 * Tests how normal timestamps are serialized
 */
it("RestJsonJsonTimestamps:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    JsonTimestamps(input: any, ctx: {}): Promise<JsonTimestampsServerOutput> {
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
 * Ensures that the timestampFormat of date-time on the target shape works like normal timestamps
 */
it("RestJsonJsonTimestampsWithDateTimeOnTargetFormat:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    JsonTimestamps(input: any, ctx: {}): Promise<JsonTimestampsServerOutput> {
      const response = {
        dateTimeOnTarget: new Date(1398796238000),
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                                          \"dateTimeOnTarget\": \"2014-04-29T18:30:38Z\"
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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
 * Ensures that the timestampFormat of epoch-seconds on the target shape works
 */
it("RestJsonJsonTimestampsWithEpochSecondsOnTargetFormat:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    JsonTimestamps(input: any, ctx: {}): Promise<JsonTimestampsServerOutput> {
      const response = {
        epochSecondsOnTarget: new Date(1398796238000),
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                                              \"epochSecondsOnTarget\": 1398796238
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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
 * Ensures that the timestampFormat of http-date on the target shape works
 */
it("RestJsonJsonTimestampsWithHttpDateOnTargetFormat:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    JsonTimestamps(input: any, ctx: {}): Promise<JsonTimestampsServerOutput> {
      const response = {
        httpDateOnTarget: new Date(1398796238000),
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                                                  \"httpDateOnTarget\": \"Tue, 29 Apr 2014 18:30:38 GMT\"
                                                                                                              }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Serializes a string union value
 */
it("RestJsonSerializeStringUnionValue:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
 * When there is modeled output, the accept must be application/json
 */
it("RestJsonWithBodyExpectsApplicationJsonAccept:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedAcceptWithBody: testFunction as MalformedAcceptWithBody<{}>,
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
    path: "/MalformedAcceptWithBody",
    query: {},
    headers: {
      accept: "application/hal+json",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(406);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("NotAcceptableException");
});

/**
 * When there is a payload without a mediaType trait, the accept must match the
 * implied content type of the shape.
 */
it("RestJsonWithPayloadExpectsImpliedAccept:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedAcceptWithGenericString: testFunction as MalformedAcceptWithGenericString<{}>,
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
    path: "/MalformedAcceptWithGenericString",
    query: {},
    headers: {
      accept: "application/json",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(406);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("NotAcceptableException");
});

/**
 * When there is a payload with a mediaType trait, the accept must match.
 */
it("RestJsonWithPayloadExpectsModeledAccept:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedAcceptWithPayload: testFunction as MalformedAcceptWithPayload<{}>,
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
    path: "/MalformedAcceptWithPayload",
    query: {},
    headers: {
      accept: "application/json",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(406);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("NotAcceptableException");
});

/**
 * When a blob member is not properly base64 encoded, or not encoded at
 * all, the response should be a 400 SerializationException.
 */
it("RestJsonBodyMalformedBlobInvalidBase64_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBlob: testFunction as MalformedBlob<{}>,
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
    path: "/MalformedBlob",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : blob }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When a blob member is not properly base64 encoded, or not encoded at
 * all, the response should be a 400 SerializationException.
 */
it("RestJsonBodyMalformedBlobInvalidBase64_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBlob: testFunction as MalformedBlob<{}>,
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
    path: "/MalformedBlob",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : "xyz" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When a blob member is not properly base64 encoded, or not encoded at
 * all, the response should be a 400 SerializationException.
 */
it("RestJsonBodyMalformedBlobInvalidBase64_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBlob: testFunction as MalformedBlob<{}>,
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
    path: "/MalformedBlob",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : "YmxvYg=" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When a blob member is not properly base64 encoded, or not encoded at
 * all, the response should be a 400 SerializationException.
 */
it("RestJsonBodyMalformedBlobInvalidBase64_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBlob: testFunction as MalformedBlob<{}>,
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
    path: "/MalformedBlob",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : [98, 108, 11, 98] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When a blob member is not properly base64 encoded, or not encoded at
 * all, the response should be a 400 SerializationException.
 */
it("RestJsonBodyMalformedBlobInvalidBase64_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBlob: testFunction as MalformedBlob<{}>,
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
    path: "/MalformedBlob",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : ["b", "l","o","b"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When a blob member is not properly base64 encoded, or not encoded at
 * all, the response should be a 400 SerializationException.
 */
it("RestJsonBodyMalformedBlobInvalidBase64_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBlob: testFunction as MalformedBlob<{}>,
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
    path: "/MalformedBlob",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : 981081198 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When a blob member is not properly base64 encoded, or not encoded at
 * all, the response should be a 400 SerializationException.
 */
it("RestJsonBodyMalformedBlobInvalidBase64_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBlob: testFunction as MalformedBlob<{}>,
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
    path: "/MalformedBlob",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : true }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When a blob member is not properly base64 encoded, or not encoded at
 * all, the response should be a 400 SerializationException.
 */
it("RestJsonBodyMalformedBlobInvalidBase64_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBlob: testFunction as MalformedBlob<{}>,
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
    path: "/MalformedBlob",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : [][] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When a blob member is not properly base64 encoded, or not encoded at
 * all, the response should be a 400 SerializationException.
 */
it("RestJsonBodyMalformedBlobInvalidBase64_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBlob: testFunction as MalformedBlob<{}>,
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
    path: "/MalformedBlob",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "blob" : -_== }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it.skip("RestJsonBodyBooleanStringCoercion_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "true" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it.skip("RestJsonBodyBooleanStringCoercion_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "True" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it.skip("RestJsonBodyBooleanStringCoercion_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "TRUE" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "y" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "Y" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "yes" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "Yes" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "YES" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "1" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "on" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "On" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case11:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "ON" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it.skip("RestJsonBodyBooleanStringCoercion_case12:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "false" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it.skip("RestJsonBodyBooleanStringCoercion_case13:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "False" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it.skip("RestJsonBodyBooleanStringCoercion_case14:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "FALSE" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case15:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "n" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case16:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "N" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case17:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "no" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case18:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "No" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case19:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "NO" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case20:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "0" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case21:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "off" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case22:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "Off" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonBodyBooleanStringCoercion_case23:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : "OFF" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : True }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : TRUE }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : y }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : Y }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : yes }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : Yes }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : YES }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it.skip("RestJsonBodyBooleanBadLiteral_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : 1 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : on }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : On }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : ON }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case11:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : False }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case12:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : FALSE }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case13:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : n }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case14:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : N }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case15:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : no }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case16:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : No }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case17:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : NO }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it.skip("RestJsonBodyBooleanBadLiteral_case18:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : 0 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case19:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : off }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case20:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : Off }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * YAML-style alternate boolean literals should result in SerializationException
 */
it("RestJsonBodyBooleanBadLiteral_case21:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "booleanInBody" : OFF }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/True",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/TRUE",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/y",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/Y",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/yes",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/Yes",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/YES",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/1",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/on",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/On",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/ON",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case11:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/False",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case12:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/FALSE",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case13:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/n",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case14:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/N",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case15:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/no",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case16:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/No",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case17:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/NO",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case18:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/0",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case19:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/off",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case20:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/Off",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonPathBooleanStringCoercion_case21:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/OFF",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["True"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["TRUE"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["y"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["Y"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["yes"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["Yes"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["YES"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["1"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["on"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["On"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["ON"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case11:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["False"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case12:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["FALSE"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case13:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["n"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case14:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["N"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case15:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["no"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case16:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["No"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case17:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["NO"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case18:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["0"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case19:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["off"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case20:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["Off"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonQueryBooleanStringCoercion_case21:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {
      booleanInQuery: ["OFF"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "True",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "TRUE",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "y",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "Y",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "yes",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "Yes",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "YES",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "1",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "on",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "On",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "ON",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case11:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "False",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case12:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "FALSE",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case13:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "n",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case14:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "N",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case15:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "no",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case16:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "No",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case17:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "NO",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case18:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "0",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case19:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "off",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case20:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "Off",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Attempted string coercion should result in SerializationException
 */
it("RestJsonHeaderBooleanStringCoercion_case21:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedBoolean: testFunction as MalformedBoolean<{}>,
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
    path: "/MalformedBoolean/true",
    query: {},
    headers: {
      booleaninheader: "OFF",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyByteUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : 256 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyByteUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : -256 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyByteUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : -9223372000000000000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyByteUnderflowOverflow_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : 9223372000000000000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyByteUnderflowOverflow_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : 123000000000000000000000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathByteUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/256",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathByteUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/-256",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathByteUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/-9223372000000000000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathByteUnderflowOverflow_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/9223372000000000000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathByteUnderflowOverflow_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/123000000000000000000000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryByteUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {
      byteInQuery: ["256"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryByteUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {
      byteInQuery: ["-256"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryByteUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {
      byteInQuery: ["-9223372000000000000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryByteUnderflowOverflow_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {
      byteInQuery: ["9223372000000000000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryByteUnderflowOverflow_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {
      byteInQuery: ["123000000000000000000000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderByteUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      byteinheader: "256",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderByteUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      byteinheader: "-256",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderByteUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      byteinheader: "-9223372000000000000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderByteUnderflowOverflow_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      byteinheader: "9223372000000000000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderByteUnderflowOverflow_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      byteinheader: "123000000000000000000000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyByteMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : "123" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyByteMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : true }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyByteMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : 1.001 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyByteMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : 2ABC }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyByteMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : 0x42 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyByteMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyByteMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : "Infinity" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyByteMalformedValueRejected_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : -Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyByteMalformedValueRejected_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : "-Infinity" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyByteMalformedValueRejected_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : NaN }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyByteMalformedValueRejected_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "byteInBody" : "NaN" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathByteMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/true",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathByteMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1.001",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathByteMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/2ABC",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathByteMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/0x42",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathByteMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/Infinity",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathByteMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/-Infinity",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathByteMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/NaN",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryByteMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {
      byteInQuery: ["true"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryByteMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {
      byteInQuery: ["1.001"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryByteMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {
      byteInQuery: ["2ABC"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryByteMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {
      byteInQuery: ["0x42"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryByteMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {
      byteInQuery: ["Infinity"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryByteMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {
      byteInQuery: ["-Infinity"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryByteMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {
      byteInQuery: ["NaN"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderByteMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      byteinheader: "true",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderByteMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      byteinheader: "1.001",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderByteMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      byteinheader: "2ABC",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderByteMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      byteinheader: "0x42",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderByteMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      byteinheader: "Infinity",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderByteMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      byteinheader: "-Infinity",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderByteMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedByte: testFunction as MalformedByte<{}>,
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
    path: "/MalformedByte/1",
    query: {},
    headers: {
      byteinheader: "NaN",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When there is modeled input, they content type must be application/json
 */
it("RestJsonWithBodyExpectsApplicationJsonContentType:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedContentTypeWithBody: testFunction as MalformedContentTypeWithBody<{}>,
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
    path: "/MalformedContentTypeWithBody",
    query: {},
    headers: {
      "content-type": "application/hal+json",
    },
    body: Readable.from(["{}"]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(415);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("UnsupportedMediaTypeException");
});

/**
 * When there is no modeled input, content type must not be set and the body must be empty.
 */
it("RestJsonWithoutBodyExpectsEmptyContentType:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedContentTypeWithoutBody: testFunction as MalformedContentTypeWithoutBody<{}>,
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
    path: "/MalformedContentTypeWithoutBody",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(["{}"]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(415);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("UnsupportedMediaTypeException");
});

/**
 * When there is a payload with a mediaType trait, the content type must match.
 */
it("RestJsonWithPayloadExpectsModeledContentType:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedContentTypeWithPayload: testFunction as MalformedContentTypeWithPayload<{}>,
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
    path: "/MalformedContentTypeWithPayload",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(["{}"]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(415);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("UnsupportedMediaTypeException");
});

/**
 * When there is a payload without a mediaType trait, the content type must match the
 * implied content type of the shape.
 */
it("RestJsonWithPayloadExpectsImpliedContentType:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedContentTypeWithPayload: testFunction as MalformedContentTypeWithPayload<{}>,
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
    path: "/MalformedContentTypeWithPayload",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(["{}"]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(415);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("UnsupportedMediaTypeException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyDoubleMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "doubleInBody" : "123" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyDoubleMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "doubleInBody" : true }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyDoubleMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "doubleInBody" : 2ABC }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyDoubleMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "doubleInBody" : 0x42 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyDoubleMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "doubleInBody" : Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyDoubleMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "doubleInBody" : -Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyDoubleMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "doubleInBody" : NaN }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathDoubleMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/true",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathDoubleMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/2ABC",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathDoubleMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/0x42",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryDoubleMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {
      doubleInQuery: ["true"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryDoubleMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {
      doubleInQuery: ["2ABC"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryDoubleMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {
      doubleInQuery: ["0x42"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderDoubleMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {},
    headers: {
      doubleinheader: "true",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderDoubleMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {},
    headers: {
      doubleinheader: "2ABC",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderDoubleMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedDouble: testFunction as MalformedDouble<{}>,
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
    path: "/MalformedDouble/1",
    query: {},
    headers: {
      doubleinheader: "0x42",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyFloatMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "floatInBody" : "123" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyFloatMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "floatInBody" : true }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyFloatMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "floatInBody" : 2ABC }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyFloatMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "floatInBody" : 0x42 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyFloatMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "floatInBody" : Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyFloatMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "floatInBody" : -Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyFloatMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "floatInBody" : NaN }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathFloatMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/true",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathFloatMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/2ABC",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathFloatMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/0x42",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryFloatMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {
      floatInQuery: ["true"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryFloatMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {
      floatInQuery: ["2ABC"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryFloatMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {
      floatInQuery: ["0x42"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderFloatMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {},
    headers: {
      floatinheader: "true",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderFloatMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {},
    headers: {
      floatinheader: "2ABC",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderFloatMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedFloat: testFunction as MalformedFloat<{}>,
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
    path: "/MalformedFloat/1",
    query: {},
    headers: {
      floatinheader: "0x42",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyIntegerUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : -9223372000000000000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyIntegerUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : 9223372000000000000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyIntegerUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : 123000000000000000000000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathIntegerUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/-9223372000000000000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathIntegerUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/9223372000000000000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathIntegerUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/123000000000000000000000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryIntegerUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {
      integerInQuery: ["-9223372000000000000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryIntegerUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {
      integerInQuery: ["9223372000000000000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryIntegerUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {
      integerInQuery: ["123000000000000000000000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderIntegerUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      integerinheader: "-9223372000000000000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderIntegerUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      integerinheader: "9223372000000000000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderIntegerUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      integerinheader: "123000000000000000000000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyIntegerMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : "123" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyIntegerMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : true }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyIntegerMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : 1.001 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyIntegerMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : 2ABC }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyIntegerMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : 0x42 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyIntegerMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyIntegerMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : "Infinity" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyIntegerMalformedValueRejected_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : -Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyIntegerMalformedValueRejected_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : "-Infinity" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyIntegerMalformedValueRejected_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : NaN }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyIntegerMalformedValueRejected_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "integerInBody" : "NaN" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathIntegerMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/true",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathIntegerMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1.001",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathIntegerMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/2ABC",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathIntegerMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/0x42",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathIntegerMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/Infinity",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathIntegerMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/-Infinity",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathIntegerMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/NaN",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryIntegerMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {
      integerInQuery: ["true"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryIntegerMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {
      integerInQuery: ["1.001"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryIntegerMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {
      integerInQuery: ["2ABC"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryIntegerMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {
      integerInQuery: ["0x42"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryIntegerMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {
      integerInQuery: ["Infinity"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryIntegerMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {
      integerInQuery: ["-Infinity"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryIntegerMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {
      integerInQuery: ["NaN"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderIntegerMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      integerinheader: "true",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderIntegerMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      integerinheader: "1.001",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderIntegerMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      integerinheader: "2ABC",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderIntegerMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      integerinheader: "0x42",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderIntegerMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      integerinheader: "Infinity",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderIntegerMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      integerinheader: "-Infinity",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderIntegerMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedInteger: testFunction as MalformedInteger<{}>,
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
    path: "/MalformedInteger/1",
    query: {},
    headers: {
      integerinheader: "NaN",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When a dense list contains null, the response should be a 400
 * SerializationException.
 */
it("RestJsonBodyMalformedListNullItem:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedList: testFunction as MalformedList<{}>,
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
    path: "/MalformedList",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "bodyList" : ["a", null, "b", "c"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When a list does not have a closing bracket, the response should be
 * a 400 SerializationException.
 */
it("RestJsonBodyMalformedListUnclosed:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedList: testFunction as MalformedList<{}>,
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
    path: "/MalformedList",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "bodyList" : ["a", "b", "c" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it.skip("RestJsonBodyLongUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : -184467440737095500000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it.skip("RestJsonBodyLongUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : 184467440737095500000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it.skip("RestJsonBodyLongUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : 123000000000000000000000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it.skip("RestJsonPathLongUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/-184467440737095500000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it.skip("RestJsonPathLongUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/184467440737095500000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it.skip("RestJsonPathLongUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/123000000000000000000000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it.skip("RestJsonQueryLongUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {
      longInQuery: ["-184467440737095500000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it.skip("RestJsonQueryLongUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {
      longInQuery: ["184467440737095500000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it.skip("RestJsonQueryLongUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {
      longInQuery: ["123000000000000000000000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it.skip("RestJsonHeaderLongUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      longinheader: "-184467440737095500000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it.skip("RestJsonHeaderLongUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      longinheader: "184467440737095500000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it.skip("RestJsonHeaderLongUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      longinheader: "123000000000000000000000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyLongMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : "123" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyLongMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : true }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyLongMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : 1.001 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyLongMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : 2ABC }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyLongMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : 0x42 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyLongMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyLongMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : "Infinity" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyLongMalformedValueRejected_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : -Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyLongMalformedValueRejected_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : "-Infinity" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyLongMalformedValueRejected_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : NaN }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyLongMalformedValueRejected_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "longInBody" : "NaN" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathLongMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/true",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathLongMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1.001",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathLongMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/2ABC",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathLongMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/0x42",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathLongMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/Infinity",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathLongMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/-Infinity",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathLongMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/NaN",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryLongMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {
      longInQuery: ["true"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryLongMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {
      longInQuery: ["1.001"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryLongMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {
      longInQuery: ["2ABC"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryLongMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {
      longInQuery: ["0x42"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryLongMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {
      longInQuery: ["Infinity"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryLongMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {
      longInQuery: ["-Infinity"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryLongMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {
      longInQuery: ["NaN"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderLongMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      longinheader: "true",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderLongMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      longinheader: "1.001",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderLongMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      longinheader: "2ABC",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderLongMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      longinheader: "0x42",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderLongMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      longinheader: "Infinity",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderLongMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      longinheader: "-Infinity",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderLongMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedLong: testFunction as MalformedLong<{}>,
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
    path: "/MalformedLong/1",
    query: {},
    headers: {
      longinheader: "NaN",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When a map contains a null key, the response should be a 400
 * SerializationException.
 */
it("RestJsonBodyMalformedMapNullKey:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedMap: testFunction as MalformedMap<{}>,
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
    path: "/MalformedMap",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "bodyMap" : { null: "abc" }  }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When a dense map contains a null value, the response should be a 400
 * SerializationException.
 */
it.skip("RestJsonBodyMalformedMapNullValue:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedMap: testFunction as MalformedMap<{}>,
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
    path: "/MalformedMap",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "bodyMap" : { "abc": null }  }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the request body is not valid JSON, the response should be a 400
 * SerializationException.
 */
it("RestJsonInvalidJsonBody_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedRequestBody: testFunction as MalformedRequestBody<{}>,
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
    path: "/MalformedRequestBody",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(["{["]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the request body is not valid JSON, the response should be a 400
 * SerializationException.
 */
it("RestJsonInvalidJsonBody_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedRequestBody: testFunction as MalformedRequestBody<{}>,
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
    path: "/MalformedRequestBody",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "int": 10 }abc']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the request body is not valid JSON, the response should be a 400
 * SerializationException.
 */
it("RestJsonInvalidJsonBody_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedRequestBody: testFunction as MalformedRequestBody<{}>,
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
    path: "/MalformedRequestBody",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['abc{ "int": 10 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the request body is not valid JSON, the response should be a 400
 * SerializationException.
 */
it("RestJsonInvalidJsonBody_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedRequestBody: testFunction as MalformedRequestBody<{}>,
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
    path: "/MalformedRequestBody",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "int": 10 // the integer should be 10\n}']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the request body is not valid JSON, the response should be a 400
 * SerializationException.
 */
it("RestJsonInvalidJsonBody_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedRequestBody: testFunction as MalformedRequestBody<{}>,
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
    path: "/MalformedRequestBody",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "int": 10 /* the integer should be 10 */\n}']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the request body is not valid JSON, the response should be a 400
 * SerializationException.
 */
it("RestJsonInvalidJsonBody_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedRequestBody: testFunction as MalformedRequestBody<{}>,
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
    path: "/MalformedRequestBody",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{"int" :\f10}']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the request body is not valid JSON, the response should be a 400
 * SerializationException.
 */
it("RestJsonInvalidJsonBody_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedRequestBody: testFunction as MalformedRequestBody<{}>,
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
    path: "/MalformedRequestBody",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(["{'int': 10}"]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the request body is not valid JSON, the response should be a 400
 * SerializationException.
 */
it("RestJsonInvalidJsonBody_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedRequestBody: testFunction as MalformedRequestBody<{}>,
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
    path: "/MalformedRequestBody",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{"int": 10,}']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the request body is technically valid, but cannot map to a Smithy structure,
 * the response should be a 400 SerializationException.
 */
it("RestJsonTechnicallyValidJsonBody_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedRequestBody: testFunction as MalformedRequestBody<{}>,
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
    path: "/MalformedRequestBody",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['[{ "int": 10}]']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the request body is technically valid, but cannot map to a Smithy structure,
 * the response should be a 400 SerializationException.
 */
it("RestJsonTechnicallyValidJsonBody_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedRequestBody: testFunction as MalformedRequestBody<{}>,
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
    path: "/MalformedRequestBody",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(["10"]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the request body is technically valid, but cannot map to a Smithy structure,
 * the response should be a 400 SerializationException.
 */
it("RestJsonTechnicallyValidJsonBody_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedRequestBody: testFunction as MalformedRequestBody<{}>,
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
    path: "/MalformedRequestBody",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(["null"]),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyShortUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : 40000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyShortUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : -40000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyShortUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : -9223372000000000000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyShortUnderflowOverflow_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : 9223372000000000000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonBodyShortUnderflowOverflow_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : 123000000000000000000000 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathShortUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/40000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathShortUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/-40000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathShortUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/-9223372000000000000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathShortUnderflowOverflow_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/9223372000000000000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonPathShortUnderflowOverflow_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/123000000000000000000000",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryShortUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {
      shortInQuery: ["40000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryShortUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {
      shortInQuery: ["-40000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryShortUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {
      shortInQuery: ["-9223372000000000000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryShortUnderflowOverflow_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {
      shortInQuery: ["9223372000000000000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonQueryShortUnderflowOverflow_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {
      shortInQuery: ["123000000000000000000000"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderShortUnderflowOverflow_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      shortinheader: "40000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderShortUnderflowOverflow_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      shortinheader: "-40000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderShortUnderflowOverflow_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      shortinheader: "-9223372000000000000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderShortUnderflowOverflow_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      shortinheader: "9223372000000000000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Underflow or overflow should result in SerializationException
 */
it("RestJsonHeaderShortUnderflowOverflow_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      shortinheader: "123000000000000000000000",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyShortMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : "123" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyShortMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : true }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyShortMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : 1.001 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyShortMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : 2ABC }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyShortMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : 0x42 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyShortMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyShortMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : "Infinity" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyShortMalformedValueRejected_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : -Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyShortMalformedValueRejected_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : "-Infinity" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyShortMalformedValueRejected_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : NaN }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the body should be rejected
 */
it("RestJsonBodyShortMalformedValueRejected_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "shortInBody" : "NaN" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathShortMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/true",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathShortMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1.001",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathShortMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/2ABC",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathShortMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/0x42",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathShortMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/Infinity",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathShortMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/-Infinity",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in the path should be rejected
 */
it("RestJsonPathShortMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/NaN",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryShortMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {
      shortInQuery: ["true"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryShortMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {
      shortInQuery: ["1.001"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryShortMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {
      shortInQuery: ["2ABC"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryShortMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {
      shortInQuery: ["0x42"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryShortMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {
      shortInQuery: ["Infinity"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryShortMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {
      shortInQuery: ["-Infinity"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in query parameters should be rejected
 */
it("RestJsonQueryShortMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {
      shortInQuery: ["NaN"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderShortMalformedValueRejected_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      shortinheader: "true",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderShortMalformedValueRejected_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      shortinheader: "1.001",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderShortMalformedValueRejected_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      shortinheader: "2ABC",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderShortMalformedValueRejected_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      shortinheader: "0x42",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderShortMalformedValueRejected_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      shortinheader: "Infinity",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderShortMalformedValueRejected_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      shortinheader: "-Infinity",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Malformed values in headers should be rejected
 */
it("RestJsonHeaderShortMalformedValueRejected_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedShort: testFunction as MalformedShort<{}>,
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
    path: "/MalformedShort/1",
    query: {},
    headers: {
      shortinheader: "NaN",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When string with the mediaType trait is bound to a header, its value
 * must be base64 encoded. The server should reject values that aren't
 * valid base64 out of hand.
 */
it("RestJsonHeaderMalformedStringInvalidBase64MediaType_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedString: testFunction as MalformedString<{}>,
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
    path: "/MalformedString",
    query: {},
    headers: {
      "content-type": "application/json",
      "amz-media-typed-header": "xyz",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When string with the mediaType trait is bound to a header, its value
 * must be base64 encoded. The server should reject values that aren't
 * valid base64 out of hand.
 */
it("RestJsonHeaderMalformedStringInvalidBase64MediaType_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedString: testFunction as MalformedString<{}>,
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
    path: "/MalformedString",
    query: {},
    headers: {
      "content-type": "application/json",
      "amz-media-typed-header": "YmxvYg=",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When string with the mediaType trait is bound to a header, its value
 * must be base64 encoded. The server should reject values that aren't
 * valid base64 out of hand.
 */
it("RestJsonHeaderMalformedStringInvalidBase64MediaType_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedString: testFunction as MalformedString<{}>,
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
    path: "/MalformedString",
    query: {},
    headers: {
      "content-type": "application/json",
      "amz-media-typed-header": "[][]",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When string with the mediaType trait is bound to a header, its value
 * must be base64 encoded. The server should reject values that aren't
 * valid base64 out of hand.
 */
it("RestJsonHeaderMalformedStringInvalidBase64MediaType_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedString: testFunction as MalformedString<{}>,
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
    path: "/MalformedString",
    query: {},
    headers: {
      "content-type": "application/json",
      "amz-media-typed-header": "-_==",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, IMF-fixdate timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsHttpDate_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "Tue, 29 Apr 2014 18:30:38 GMT" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, epoch-seconds timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsEpochSeconds_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": 1515531081.1234 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, epoch-seconds timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsEpochSeconds_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": 1515531081 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, RFC 3339 timestamps with a UTC offset are rejected with a
 * 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsUTCOffsets_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19T16:39:57-08:00" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19T16:39:57+00" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19T16:39:57+00Z" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19T16:39:57" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19T163957" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "19961219T163957Z" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "19961219T163957" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "19961219T16:39:57Z" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "19961219T16:39:57" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19T16:39Z" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19T16:39" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19T1639" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case11:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19T16Z" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case12:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19T16" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case13:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19 16:39:57Z" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDateTimeRejectsDifferent8601Formats_case14:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDateTime: testFunction as MalformedTimestampBodyDateTime<{}>,
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
    path: "/MalformedTimestampBodyDateTime",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "2011-12-03T10:15:30+01:00[Europe/Paris]" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it.skip("RestJsonBodyTimestampDefaultRejectsDateTime_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1985-04-12T23:20:50.52Z" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it.skip("RestJsonBodyTimestampDefaultRejectsDateTime_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1985-04-12T23:20:50Z" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it.skip("RestJsonBodyTimestampDefaultRejectsDateTime_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19T16:39:57-08:00" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, epoch second timestamps as strings are rejected with a
 * 400 SerializationException
 */
it.skip("RestJsonBodyTimestampDefaultRejectsStringifiedEpochSeconds_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1515531081.1234" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, epoch second timestamps as strings are rejected with a
 * 400 SerializationException
 */
it.skip("RestJsonBodyTimestampDefaultRejectsStringifiedEpochSeconds_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1515531081" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDefaultRejectsMalformedEpochSeconds_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": true }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDefaultRejectsMalformedEpochSeconds_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": 1515531081ABC }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDefaultRejectsMalformedEpochSeconds_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": 0x42 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDefaultRejectsMalformedEpochSeconds_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": 1515531081.123.456 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDefaultRejectsMalformedEpochSeconds_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDefaultRejectsMalformedEpochSeconds_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "Infinity" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDefaultRejectsMalformedEpochSeconds_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": -Infinity }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDefaultRejectsMalformedEpochSeconds_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "-Infinity" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDefaultRejectsMalformedEpochSeconds_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": NaN }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonBodyTimestampDefaultRejectsMalformedEpochSeconds_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "NaN" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, IMF-fixdate timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonBodyTimestampDefaultRejectsHttpDate_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyDefault: testFunction as MalformedTimestampBodyDefault<{}>,
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
    path: "/MalformedTimestampBodyDefault",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "Tue, 29 Apr 2014 18:30:38 GMT" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonBodyTimestampHttpDateRejectsDateTime_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyHttpDate: testFunction as MalformedTimestampBodyHttpDate<{}>,
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
    path: "/MalformedTimestampBodyHttpDate",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1985-04-12T23:20:50.52Z" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonBodyTimestampHttpDateRejectsDateTime_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyHttpDate: testFunction as MalformedTimestampBodyHttpDate<{}>,
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
    path: "/MalformedTimestampBodyHttpDate",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1985-04-12T23:20:50Z" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonBodyTimestampHttpDateRejectsDateTime_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyHttpDate: testFunction as MalformedTimestampBodyHttpDate<{}>,
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
    path: "/MalformedTimestampBodyHttpDate",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": "1996-12-19T16:39:57-08:00" }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, epoch-seconds timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonBodyTimestampHttpDateRejectsEpoch_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyHttpDate: testFunction as MalformedTimestampBodyHttpDate<{}>,
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
    path: "/MalformedTimestampBodyHttpDate",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": 1515531081.1234 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, epoch-seconds timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonBodyTimestampHttpDateRejectsEpoch_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampBodyHttpDate: testFunction as MalformedTimestampBodyHttpDate<{}>,
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
    path: "/MalformedTimestampBodyHttpDate",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "timestamp": 1515531081 }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, IMF-fixdate timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsHttpDate_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "Tue, 29 Apr 2014 18:30:38 GMT",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, epoch-seconds timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsEpochSeconds_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "1515531081.1234",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, epoch-seconds timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsEpochSeconds_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "1515531081",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "1996-12-19T16:39:57+00",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "1996-12-19T16:39:57+00Z",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "1996-12-19T16:39:57",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "1996-12-19T163957",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "19961219T163957Z",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "19961219T163957",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "19961219T16:39:57Z",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "19961219T16:39:57",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "1996-12-19T16:39Z",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "1996-12-19T16:39",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "1996-12-19T1639",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case11:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "1996-12-19T16Z",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case12:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "1996-12-19T16",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case13:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "1996-12-19 16:39:57Z",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is date-time, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampDateTimeRejectsDifferent8601Formats_case14:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDateTime: testFunction as MalformedTimestampHeaderDateTime<{}>,
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
    path: "/MalformedTimestampHeaderDateTime",
    query: {},
    headers: {
      timestamp: "2011-12-03T10:15:30+01:00[Europe/Paris]",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonHeaderTimestampDefaultRejectsDateTime_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDefault: testFunction as MalformedTimestampHeaderDefault<{}>,
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
    path: "/MalformedTimestampHeaderDefault",
    query: {},
    headers: {
      timestamp: "1985-04-12T23:20:50.52Z",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonHeaderTimestampDefaultRejectsDateTime_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDefault: testFunction as MalformedTimestampHeaderDefault<{}>,
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
    path: "/MalformedTimestampHeaderDefault",
    query: {},
    headers: {
      timestamp: "1985-04-12T23:20:50Z",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonHeaderTimestampDefaultRejectsDateTime_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDefault: testFunction as MalformedTimestampHeaderDefault<{}>,
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
    path: "/MalformedTimestampHeaderDefault",
    query: {},
    headers: {
      timestamp: "1996-12-19T16:39:57-08:00",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, epoch second timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonHeaderTimestampDefaultRejectsEpochSeconds_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDefault: testFunction as MalformedTimestampHeaderDefault<{}>,
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
    path: "/MalformedTimestampHeaderDefault",
    query: {},
    headers: {
      timestamp: "1515531081.1234",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, epoch second timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonHeaderTimestampDefaultRejectsEpochSeconds_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderDefault: testFunction as MalformedTimestampHeaderDefault<{}>,
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
    path: "/MalformedTimestampHeaderDefault",
    query: {},
    headers: {
      timestamp: "1515531081",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonHeaderTimestampEpochRejectsDateTime_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderEpoch: testFunction as MalformedTimestampHeaderEpoch<{}>,
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
    path: "/MalformedTimestampHeaderEpoch",
    query: {},
    headers: {
      timestamp: "1985-04-12T23:20:50.52Z",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonHeaderTimestampEpochRejectsDateTime_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderEpoch: testFunction as MalformedTimestampHeaderEpoch<{}>,
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
    path: "/MalformedTimestampHeaderEpoch",
    query: {},
    headers: {
      timestamp: "1985-04-12T23:20:50Z",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonHeaderTimestampEpochRejectsDateTime_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderEpoch: testFunction as MalformedTimestampHeaderEpoch<{}>,
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
    path: "/MalformedTimestampHeaderEpoch",
    query: {},
    headers: {
      timestamp: "1996-12-19T16:39:57-08:00",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, IMF-fixdate timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonHeaderTimestampEpochRejectsHttpDate_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderEpoch: testFunction as MalformedTimestampHeaderEpoch<{}>,
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
    path: "/MalformedTimestampHeaderEpoch",
    query: {},
    headers: {
      timestamp: "Tue, 29 Apr 2014 18:30:38 GMT",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampEpochRejectsMalformedValues_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderEpoch: testFunction as MalformedTimestampHeaderEpoch<{}>,
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
    path: "/MalformedTimestampHeaderEpoch",
    query: {},
    headers: {
      timestamp: "true",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampEpochRejectsMalformedValues_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderEpoch: testFunction as MalformedTimestampHeaderEpoch<{}>,
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
    path: "/MalformedTimestampHeaderEpoch",
    query: {},
    headers: {
      timestamp: "1515531081ABC",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampEpochRejectsMalformedValues_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderEpoch: testFunction as MalformedTimestampHeaderEpoch<{}>,
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
    path: "/MalformedTimestampHeaderEpoch",
    query: {},
    headers: {
      timestamp: "0x42",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampEpochRejectsMalformedValues_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderEpoch: testFunction as MalformedTimestampHeaderEpoch<{}>,
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
    path: "/MalformedTimestampHeaderEpoch",
    query: {},
    headers: {
      timestamp: "1515531081.123.456",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampEpochRejectsMalformedValues_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderEpoch: testFunction as MalformedTimestampHeaderEpoch<{}>,
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
    path: "/MalformedTimestampHeaderEpoch",
    query: {},
    headers: {
      timestamp: "Infinity",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampEpochRejectsMalformedValues_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderEpoch: testFunction as MalformedTimestampHeaderEpoch<{}>,
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
    path: "/MalformedTimestampHeaderEpoch",
    query: {},
    headers: {
      timestamp: "-Infinity",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonHeaderTimestampEpochRejectsMalformedValues_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampHeaderEpoch: testFunction as MalformedTimestampHeaderEpoch<{}>,
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
    path: "/MalformedTimestampHeaderEpoch",
    query: {},
    headers: {
      timestamp: "NaN",
    },
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, IMF-fixdate timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsHttpDate_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/Tue%2C%2029%20Apr%202014%2018%3A30%3A38%20GMT",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, IMF-fixdate timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsHttpDate_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/Sun%2C%2002%20Jan%202000%2020%3A34%3A56.000%20GMT",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, epoch second timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsEpochSeconds_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1515531081.1234",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, epoch second timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsEpochSeconds_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1515531081",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * UTC offsets must be rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsUTCOffsets:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1996-12-19T16%3A39%3A57-08%3A00",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1996-12-19T16%3A39%3A57%2B00",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1996-12-19T16%3A39%3A57%2B00Z",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1996-12-19T16%3A39%3A57",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1996-12-19T163957",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/19961219T163957Z",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/19961219T163957",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/19961219T16%3A39%3A57Z",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/19961219T16%3A39%3A57",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1996-12-19T16%3A39Z",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1996-12-19T16%3A39",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1996-12-19T1639",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case11:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1996-12-19T16Z",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case12:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1996-12-19T16",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case13:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/1996-12-19%2016%3A39%3A57Z",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampDefaultRejectsDifferent8601Formats_case14:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathDefault: testFunction as MalformedTimestampPathDefault<{}>,
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
    path: "/MalformedTimestampPathDefault/2011-12-03T10%3A15%3A30%2B01%3A00%5BEurope%2FParis%5D",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampEpochRejectsDateTime_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathEpoch: testFunction as MalformedTimestampPathEpoch<{}>,
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
    path: "/MalformedTimestampPathEpoch/1985-04-12T23%3A20%3A50.52Z",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampEpochRejectsDateTime_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathEpoch: testFunction as MalformedTimestampPathEpoch<{}>,
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
    path: "/MalformedTimestampPathEpoch/1985-04-12T23%3A20%3A50Z",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampEpochRejectsDateTime_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathEpoch: testFunction as MalformedTimestampPathEpoch<{}>,
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
    path: "/MalformedTimestampPathEpoch/1996-12-19T16%3A39%3A57-08%3A00",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, IMF-fixdate timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampEpochRejectsHttpDate_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathEpoch: testFunction as MalformedTimestampPathEpoch<{}>,
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
    path: "/MalformedTimestampPathEpoch/Tue%2C%2029%20Apr%202014%2018%3A30%3A38%20GMT",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, IMF-fixdate timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampEpochRejectsHttpDate_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathEpoch: testFunction as MalformedTimestampPathEpoch<{}>,
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
    path: "/MalformedTimestampPathEpoch/Sun%2C%2002%20Jan%202000%2020%3A34%3A56.000%20GMT",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampEpochRejectsMalformedValues_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathEpoch: testFunction as MalformedTimestampPathEpoch<{}>,
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
    path: "/MalformedTimestampPathEpoch/true",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampEpochRejectsMalformedValues_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathEpoch: testFunction as MalformedTimestampPathEpoch<{}>,
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
    path: "/MalformedTimestampPathEpoch/1515531081ABC",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampEpochRejectsMalformedValues_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathEpoch: testFunction as MalformedTimestampPathEpoch<{}>,
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
    path: "/MalformedTimestampPathEpoch/0x42",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampEpochRejectsMalformedValues_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathEpoch: testFunction as MalformedTimestampPathEpoch<{}>,
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
    path: "/MalformedTimestampPathEpoch/1515531081.123.456",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampEpochRejectsMalformedValues_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathEpoch: testFunction as MalformedTimestampPathEpoch<{}>,
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
    path: "/MalformedTimestampPathEpoch/Infinity",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampEpochRejectsMalformedValues_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathEpoch: testFunction as MalformedTimestampPathEpoch<{}>,
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
    path: "/MalformedTimestampPathEpoch/-Infinity",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonPathTimestampEpochRejectsMalformedValues_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathEpoch: testFunction as MalformedTimestampPathEpoch<{}>,
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
    path: "/MalformedTimestampPathEpoch/NaN",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampHttpDateRejectsDateTime_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathHttpDate: testFunction as MalformedTimestampPathHttpDate<{}>,
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
    path: "/MalformedTimestampPathHttpDate/1985-04-12T23%3A20%3A50.52Z",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampHttpDateRejectsDateTime_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathHttpDate: testFunction as MalformedTimestampPathHttpDate<{}>,
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
    path: "/MalformedTimestampPathHttpDate/1985-04-12T23%3A20%3A50Z",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampHttpDateRejectsDateTime_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathHttpDate: testFunction as MalformedTimestampPathHttpDate<{}>,
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
    path: "/MalformedTimestampPathHttpDate/1996-12-19T16%3A39%3A57-08%3A00",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date,  epoch second timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampHttpDateRejectsEpochSeconds_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathHttpDate: testFunction as MalformedTimestampPathHttpDate<{}>,
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
    path: "/MalformedTimestampPathHttpDate/1515531081.1234",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date,  epoch second timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonPathTimestampHttpDateRejectsEpochSeconds_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampPathHttpDate: testFunction as MalformedTimestampPathHttpDate<{}>,
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
    path: "/MalformedTimestampPathHttpDate/1515531081",
    query: {},
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, IMF-fixdate timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsHttpDate_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["Tue, 29 Apr 2014 18:30:38 GMT"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, IMF-fixdate timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsHttpDate_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["Sun, 02 Jan 2000 20:34:56.000 GMT"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, epoch second timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsEpochSeconds_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["1515531081.1234"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, epoch second timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsEpochSeconds_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["1515531081"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * UTC offsets must be rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsUTCOffsets:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["$value:L"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["1996-12-19T16:39:57 00"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["1996-12-19T16:39:57 00Z"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["1996-12-19T16:39:57"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["1996-12-19T163957"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["19961219T163957Z"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["19961219T163957"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["19961219T16:39:57Z"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case7:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["19961219T16:39:57"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case8:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["1996-12-19T16:39Z"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case9:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["1996-12-19T16:39"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case10:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["1996-12-19T1639"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case11:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["1996-12-19T16Z"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case12:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["1996-12-19T16"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case13:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["1996-12-19 16:39:57Z"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * By default, maybe-valid ISO-8601 date-times not conforming to RFC 3339
 * are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampDefaultRejectsDifferent8601Formats_case14:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryDefault: testFunction as MalformedTimestampQueryDefault<{}>,
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
    path: "/MalformedTimestampQueryDefault",
    query: {
      timestamp: ["2011-12-03T10:15:30 01:00[Europe/Paris]"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampEpochRejectsDateTime_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryEpoch: testFunction as MalformedTimestampQueryEpoch<{}>,
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
    path: "/MalformedTimestampQueryEpoch",
    query: {
      timestamp: ["1985-04-12T23:20:50.52Z"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampEpochRejectsDateTime_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryEpoch: testFunction as MalformedTimestampQueryEpoch<{}>,
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
    path: "/MalformedTimestampQueryEpoch",
    query: {
      timestamp: ["1985-04-12T23:20:50Z"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampEpochRejectsDateTime_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryEpoch: testFunction as MalformedTimestampQueryEpoch<{}>,
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
    path: "/MalformedTimestampQueryEpoch",
    query: {
      timestamp: ["1996-12-19T16:39:57-08:00"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, IMF-fixdate timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampEpochRejectsHttpDate_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryEpoch: testFunction as MalformedTimestampQueryEpoch<{}>,
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
    path: "/MalformedTimestampQueryEpoch",
    query: {
      timestamp: ["Tue, 29 Apr 2014 18:30:38 GMT"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is epoch-seconds, IMF-fixdate timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampEpochRejectsHttpDate_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryEpoch: testFunction as MalformedTimestampQueryEpoch<{}>,
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
    path: "/MalformedTimestampQueryEpoch",
    query: {
      timestamp: ["Sun, 02 Jan 2000 20:34:56.000 GMT"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampEpochRejectsMalformedValues_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryEpoch: testFunction as MalformedTimestampQueryEpoch<{}>,
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
    path: "/MalformedTimestampQueryEpoch",
    query: {
      timestamp: ["true"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampEpochRejectsMalformedValues_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryEpoch: testFunction as MalformedTimestampQueryEpoch<{}>,
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
    path: "/MalformedTimestampQueryEpoch",
    query: {
      timestamp: ["1515531081ABC"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampEpochRejectsMalformedValues_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryEpoch: testFunction as MalformedTimestampQueryEpoch<{}>,
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
    path: "/MalformedTimestampQueryEpoch",
    query: {
      timestamp: ["0x42"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampEpochRejectsMalformedValues_case3:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryEpoch: testFunction as MalformedTimestampQueryEpoch<{}>,
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
    path: "/MalformedTimestampQueryEpoch",
    query: {
      timestamp: ["1515531081.123.456"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampEpochRejectsMalformedValues_case4:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryEpoch: testFunction as MalformedTimestampQueryEpoch<{}>,
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
    path: "/MalformedTimestampQueryEpoch",
    query: {
      timestamp: ["Infinity"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampEpochRejectsMalformedValues_case5:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryEpoch: testFunction as MalformedTimestampQueryEpoch<{}>,
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
    path: "/MalformedTimestampQueryEpoch",
    query: {
      timestamp: ["-Infinity"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Invalid values for epoch seconds are rejected with a 400 SerializationException
 */
it("RestJsonQueryTimestampEpochRejectsMalformedValues_case6:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryEpoch: testFunction as MalformedTimestampQueryEpoch<{}>,
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
    path: "/MalformedTimestampQueryEpoch",
    query: {
      timestamp: ["NaN"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampHttpDateRejectsDateTime_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryHttpDate: testFunction as MalformedTimestampQueryHttpDate<{}>,
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
    path: "/MalformedTimestampQueryHttpDate",
    query: {
      timestamp: ["1985-04-12T23:20:50.52Z"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampHttpDateRejectsDateTime_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryHttpDate: testFunction as MalformedTimestampQueryHttpDate<{}>,
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
    path: "/MalformedTimestampQueryHttpDate",
    query: {
      timestamp: ["1985-04-12T23:20:50Z"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, RFC3339 timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampHttpDateRejectsDateTime_case2:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryHttpDate: testFunction as MalformedTimestampQueryHttpDate<{}>,
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
    path: "/MalformedTimestampQueryHttpDate",
    query: {
      timestamp: ["1996-12-19T16:39:57-08:00"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, epoch second timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampHttpDateRejectsEpochSeconds_case0:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryHttpDate: testFunction as MalformedTimestampQueryHttpDate<{}>,
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
    path: "/MalformedTimestampQueryHttpDate",
    query: {
      timestamp: ["1515531081.1234"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the format is http-date, epoch second timestamps are rejected with a
 * 400 SerializationException
 */
it("RestJsonQueryTimestampHttpDateRejectsEpochSeconds_case1:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedTimestampQueryHttpDate: testFunction as MalformedTimestampQueryHttpDate<{}>,
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
    path: "/MalformedTimestampQueryHttpDate",
    query: {
      timestamp: ["1515531081"],
    },
    headers: {},
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the union has multiple fields set, the response should be a 400
 * SerializationException.
 */
it("RestJsonMalformedUnionMultipleFieldsSet:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedUnion: testFunction as MalformedUnion<{}>,
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
    path: "/MalformedUnion",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "union" : { "int": 2, "string": "three" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the union has multiple fields set, even when only one is modeled,
 * the response should be a 400 SerializationException.
 */
it("RestJsonMalformedUnionKnownAndUnknownFieldsSet:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedUnion: testFunction as MalformedUnion<{}>,
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
    path: "/MalformedUnion",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "union" : { "int": 2, "unknownField": "three" } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the union has no fields set, the response should be a 400
 * SerializationException.
 */
it("RestJsonMalformedUnionNoFieldsSet:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedUnion: testFunction as MalformedUnion<{}>,
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
    path: "/MalformedUnion",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "union" : { "int": null } }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * When the union value is actually an array, the response should be a 400
 * SerializationException.
 */
it("RestJsonMalformedUnionValueIsArray:MalformedRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockImplementation(() => {
    throw new Error("This request should have been rejected.");
  });
  const testService: Partial<RestJsonService<{}>> = {
    MalformedUnion: testFunction as MalformedUnion<{}>,
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
    path: "/MalformedUnion",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{ "union" : ["int"] }']),
  });
  const r = await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(0);
  expect(r.statusCode).toBe(400);
  expect(r.headers["x-amzn-errortype"]).toBeDefined();
  expect(r.headers["x-amzn-errortype"]).toBe("SerializationException");
});

/**
 * Headers that target strings with a mediaType are base64 encoded
 */
it("MediaTypeHeaderInputBase64:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * Servers should allow the accept header to be set to the
 * default content-type.
 */
it("RestJsonNoInputAllowsAccept:ServerRequest", async () => {
  const testFunction = jest.fn();
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
    headers: {
      accept: "application/json",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.body).toBeFalsy();
});

/**
 * No input serializes no payload. When clients do not need to
 * serialize any data in the payload, they should omit a payload
 * altogether.
 */
it("RestJsonNoInputAndOutput:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * Servers should allow the accept header to be set to the
 * default content-type.
 */
it("RestJsonNoInputAndOutputAllowsAccept:ServerRequest", async () => {
  const testFunction = jest.fn();
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
    headers: {
      accept: "application/json",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * Operations that define output and do not bind anything to
 * the payload return a JSON object in the response.
 */
it("RestJsonNoInputAndOutputWithJson:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    NoInputAndOutput(input: any, ctx: {}): Promise<NoInputAndOutputServerOutput> {
      const response = {} as any;
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-a"]).toBeUndefined();
  expect(r.headers["x-b"]).toBeUndefined();
  expect(r.headers["x-c"]).toBeUndefined();
});

/**
 * Serializes empty query strings
 */
it("RestJsonSerializesEmptyQueryValue:ServerRequest", async () => {
  const testFunction = jest.fn();
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
      Empty: [""],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
 * Servers accept static query params as empty strings.
 */
it("RestJsonServersAcceptStaticQueryParamAsEmptyString:ServerRequest", async () => {
  const testFunction = jest.fn();
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
      Empty: [""],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
 * Unit types in unions are serialized like normal structures in requests.
 */
it("RestJsonInputUnionWithUnitMember:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    PostPlayerAction: testFunction as PostPlayerAction<{}>,
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
    path: "/PostPlayerAction",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "action": {\n        "quit": {}\n    }\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
 * Unit types in unions are serialized like normal structures in responses.
 */
it("RestJsonOutputUnionWithUnitMember:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    PostPlayerAction(input: any, ctx: {}): Promise<PostPlayerActionServerOutput> {
      const response = {
        action: {
          quit: {} as any,
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "PostPlayerAction">("POST", [], [], {
      service: "RestJson",
      operation: "PostPlayerAction",
    }),
  ]);
  class TestSerializer extends PostPlayerActionSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                                                                              \"action\": {
                                                                                                                                                  \"quit\": {}
                                                                                                                                              }
                                                                                                                                          }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Tests that jsonName works with union members.
 */
it("PostUnionWithJsonNameRequest1:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    PostUnionWithJsonName: testFunction as PostUnionWithJsonName<{}>,
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
    path: "/PostUnionWithJsonName",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "value": {\n        "FOO": "hi"\n    }\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
it("PostUnionWithJsonNameRequest2:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    PostUnionWithJsonName: testFunction as PostUnionWithJsonName<{}>,
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
    path: "/PostUnionWithJsonName",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "value": {\n        "_baz": "hi"\n    }\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
it("PostUnionWithJsonNameRequest3:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    PostUnionWithJsonName: testFunction as PostUnionWithJsonName<{}>,
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
    path: "/PostUnionWithJsonName",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{\n    "value": {\n        "bar": "hi"\n    }\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
 * Tests that jsonName works with union members.
 */
it("PostUnionWithJsonNameResponse1:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    PostUnionWithJsonName(input: any, ctx: {}): Promise<PostUnionWithJsonNameServerOutput> {
      const response = {
        value: {
          foo: "hi",
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "PostUnionWithJsonName">("POST", [], [], {
      service: "RestJson",
      operation: "PostUnionWithJsonName",
    }),
  ]);
  class TestSerializer extends PostUnionWithJsonNameSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                                                                                \"value\": {
                                                                                                                                                    \"FOO\": \"hi\"
                                                                                                                                                }
                                                                                                                                            }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Tests that jsonName works with union members.
 */
it("PostUnionWithJsonNameResponse2:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    PostUnionWithJsonName(input: any, ctx: {}): Promise<PostUnionWithJsonNameServerOutput> {
      const response = {
        value: {
          baz: "hi",
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "PostUnionWithJsonName">("POST", [], [], {
      service: "RestJson",
      operation: "PostUnionWithJsonName",
    }),
  ]);
  class TestSerializer extends PostUnionWithJsonNameSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                                                                                  \"value\": {
                                                                                                                                                      \"_baz\": \"hi\"
                                                                                                                                                  }
                                                                                                                                              }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Tests that jsonName works with union members.
 */
it("PostUnionWithJsonNameResponse3:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    PostUnionWithJsonName(input: any, ctx: {}): Promise<PostUnionWithJsonNameServerOutput> {
      const response = {
        value: {
          bar: "hi",
        } as any,
      } as any;
      return Promise.resolve({ ...response, $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "PostUnionWithJsonName">("POST", [], [], {
      service: "RestJson",
      operation: "PostUnionWithJsonName",
    }),
  ]);
  class TestSerializer extends PostUnionWithJsonNameSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["content-type"]).toBeDefined();
  expect(r.headers["content-type"]).toBe("application/json");

  expect(r.body).toBeDefined();
  const utf8Encoder = __utf8Encoder;
  const bodyString = `{
                                                                                                                                                    \"value\": {
                                                                                                                                                        \"bar\": \"hi\"
                                                                                                                                                    }
                                                                                                                                                }`;
  const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
  expect(unequalParts).toBeUndefined();
});

/**
 * Compression algorithm encoding is appended to the Content-Encoding header.
 */
it.skip("SDKAppliedContentEncoding_restJson1:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    PutWithContentEncoding: testFunction as PutWithContentEncoding<{}>,
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
    path: "/requestcompression/putcontentwithencoding",
    query: {},
    headers: {
      "content-encoding": "gzip",
    },
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      data: "RjCEL3kBwqPivZUXGiyA5JCujtWgJAkKRlnTEsNYfBRGOS0f7LT6R3bCSOXeJ4auSHzQ4BEZZTklUyj5\n1HEojihShQC2jkQJrNdGOZNSW49yRO0XbnGmeczUHbZqZRelLFKW4xjru9uTuB8lFCtwoGgciFsgqTF8\n5HYcoqINTRxuAwGuRUMoNO473QT0BtCQoKUkAyVaypG0hBZdGNoJhunBfW0d3HWTYlzz9pXElyZhq3C1\n2PDB17GEoOYXmTxDecysmPOdo5z6T0HFhujfeJFIQQ8dirmXcG4F3v0bZdf6AZ3jsiVh6RnEXIPxPbOi\ngIXDWTMUr4Pg3f2LdYCM01eAb2qTdgsEN0MUDhEIfn68I2tnWvcozyUFpg1ez6pyWP8ssWVfFrckREIM\nMb0cTUVqSVSM8bnFiF9SoXM6ZoGMKfX1mT708OYk7SqZ1JlCTkecDJDoR5ED2q2MWKUGR6jjnEV0GtD8\nWJO6AcF0DptY9Hk16Bav3z6c5FeBvrGDrxTFVgRUk8SychzjrcqJ4qskwN8rL3zslC0oqobQRnLFOvwJ\nprSzBIwdH2yAuxokXAdVRa1u9NGNRvfWJfKkwbbVz8yV76RUF9KNhAUmwyYDrLnxNj8ROl8B7dv8Gans\n7Bit52wcdiJyjBW1pAodB7zqqVwtBx5RaSpF7kEMXexYXp9N0J1jlXzdeg5Wgg4pO7TJNr2joiPVAiFf\nefwMMCNBkYx2z7cRxVxCJZMXXzxSKMGgdTN24bJ5UgE0TxyV52RC0wGWG49S1x5jGrvmxKCIgYPs0w3Z\n0I3XcdB0WEj4x4xRztB9Cx2Mc4qFYQdzS9kOioAgNBti1rBySZ8lFZM2zqxvBsJTTJsmcKPr1crqiXjM\noVWdM4ObOO6QA7Pu4c1hT68CrTmbcecjFcxHkgsqdixnFtN6keMGL9Z2YMjZOjYYzbUEwLJqUVWalkIB\nBkgBRqZpzxx5nB5t0qDH35KjsfKM5cinQaFoRq9y9Z82xdCoKZOsUbxZkk1kVmy1jPDCBhkhixkc5PKS\nFoSKTbeK7kuCEZCtR9OfF2k2MqbygGFsFu2sgb1Zn2YdDbaRwRGeaLhswta09UNSMUo8aTixgoYVHxwy\nvraLB6olPSPegeLOnmBeWyKmEfPdbpdGm4ev4vA2AUFuLIeFz0LkCSN0NgQMrr8ALEm1UNpJLReg1ZAX\nzZh7gtQTZUaBVdMJokaJpLk6FPxSA6zkwB5TegSqhrFIsmvpY3VNWmTUq7H0iADdh3dRQ8Is97bTsbwu\nvAEOjh4FQ9wPSFzEtcSJeYQft5GfWYPisDImjjvHVFshFFkNy2nN18pJmhVPoJc456tgbdfEIdGhIADC\n6UPcSSzE1FxlPpILqZrp3i4NvvKoiOa4a8tnALd2XRHHmsvALn2Wmfu07b86gZlu4yOyuUFNoWI6tFvd\nbHnqSJYNQlFESv13gJw609DBzNnrIgBGYBAcDRrIGAnflRKwVDUnDFrUQmE8xNG6jRlyb1p2Y2RrfBtG\ncKqhuGNiT2DfxpY89ektZ98waPhJrFEPJToNH8EADzBorh3T0h4YP1IeLmaI7SOxeuVrk1kjRqMK0rUB\nlUJgJNtCE35jCyoHMwPQlyi78ZaVv8COVQ24zcGpw0MTy6JUsDzAC3jLNY6xCb40SZV9XzG7nWvXA5Ej\nYC1gTXxF4AtFexIdDZ4RJbtYMyXt8LsEJerwwpkfqvDwsiFuqYC6vIn9RoZO5kI0F35XtUITDQYKZ4eq\nWBV0itxTyyR5Rp6g30pZEmEqOusDaIh96CEmHpOBYAQZ7u1QTfzRdysIGMpzbx5gj9Dxm2PO1glWzY7P\nlVqQiBlXSGDOkBkrB6SkiAxknt9zsPdTTsf3r3nid4hdiPrZmGWNgjOO1khSxZSzBdltrCESNnQmlnP5\nZOHA0eSYXwy8j4od5ZmjA3IpFOEPW2MutMbxIbJpg5dIx2x7WxespftenRLgl3CxcpPDcnb9w8LCHBg7\nSEjrEer6Y8wVLFWsQiv6nTdCPZz9cGqwgtCaiHRy8lTWFgdfWd397vw9rduGld3uUFeFRGjYrphqEmHi\nhiG0GhE6wRFVUsGJtvOCYkVREvbEdxPFeJvlAvOcs9HKbtptlTusvYB86vR2bNcIY4f5JZu2X6sGa354\n7LRk0ps2zqYjat3hMR7XDC8KiKceBteFsXoDjfVxTYKelpedTxqWAafrKhaoAVuNM98PSnkuIWGzjSUC\nNsDJTt6vt1D1afBVPWVmnQ7ZQdtEtLIEwAWYjemAztreELIr1E9fPEILm1Ke4KctP9I0I72Dh4eylNZD\n0DEr2Hg7cWFckuZ0Av5d0IPRARXikEGDHl8uh12TXL9v2Uh0ZVSJMEYvxGSbZvkWz8TjWSk3hKA2a7GL\nJm3Ho7e1C34gE1XRGcEthxvURxt4OKBqN3ZNaMIuDTWinoQAutMcUqtm4MoL7RGPiCHUrvTwQPSirsmA\nQmOEu8nOpnP77Fivh9jLGx5ta7nL6jrsWUsBqiN1lzpdPYLRR4mUIAj6sNWiDEk4pkbHSMEcqbWw6Zl7\npsEyPDHalCNhWMA3RSK3skURzQDZ0oBV5W7vjVIZ4d3uCKsk6zrzEI9u5mx7p9RdNKodXfzqYt0ULdtc\n3RW0hIfw2KvrO3BD2QrtgAkfrFBGVvlJSUoh0MvLz8DeXxfuiuq9Ttu7wvsqVI4Piah6WNEXtHHGPJO3\nGhc75Bnv2To4VS2v8rmyKAPIIVTuYBHZN6sZ4FhFzbrslCIdk0eadaU60naqiNWU3CsxplIYGyeThmJ7\n9u4h6Y2OmiPZjFPS2bAzwgAozYTVefII9aEaWZ0hxHZeu1FW7r79dkdO73ZqRfas9u8Z7LLBPCw5pV0F\n5I0pHDgNb6MogoxF4NZJfVtIX1vCHhhVLrXjrYNJU2fD9Fw8kT8Ie2HDBJnqAvYKmryQ1r9ulo3Me3rH\nq9s2Y5uCDxu9iQNhnpwIm57WYGFeqd2fnQeY2IziD3Jgx0KSrmOH0jgi0RwJyfGXaORPq3bQQqljuACo\nkO6io9t5VI8PbNxSHTRbtYiPciUslbT0g7SpCLrRPOBRJ4DDk56pjghpeoUagJ5xJ4wjBzBuXnAGkNnP\nTfpiuz2r3oSBAi8sB9wiYK2z9sp4gZyQsqdVNzAEgKatOxBRBmJCBYpjO98ZQrF83XApPpfFg0ujB2PW\n1iYF9NkgwIKB5oB6KVTOmSKJk11mVermPgeugHbzdd2zUP6fP8fWbhseqk2t8ahGvqjs2CDHFIWXl5jc\nfCknbykE3ANt7lnAfJQ2ddduLGiqrX4HWx6jcWw08Es6BkleO0IDbaWrb95d5isvFlzJsf0TyDIXF4uq\nbBDCi0XPWqtRJ2iqmnJa2GbBe9GmAOWMkBFSilMyC4sR395WSDpD56fx0NGoU6cHrRu9xF2Bgh7RGSfl\nch2GXEeE02fDpSHFNvJBlOEqqfkIX6oCa6KY9NThqeIjYsT184XR2ZI7akXRaw1gMOGpk4FmUxk6WIuX\n4ei1SLQgSdl7OEdRtJklZ76eFrMbkJQ2TDhu8f7mVuiy53GUMIvCrP9xYGZGmCIDm2e4U2BDi3F7C5xK\n3bDZXwlQp6z4BSqTy2OVEWxXUJfjPMOL5Mc7AvDeKtxAS73pVIv0HgHIa4NBAdC7uLG0zXuu1FF6z2XY\nyUhk03fMZhYe7vVxsul3WE7U01fuN8z2y0eKwBW1RFBE1eKIaR9Y01sIWQWbSrfHfDrdZiElhmhHehfs\n0EfrR4sLYdQshJuvhTeKGJDaEhtPQwwJ9mUYGtuCL9RozWx1XI4bHNlzBTW0BVokYiJGlPe7wdxNzJD7\nJgS7Lwv6jGKngVf86imGZyzqwiteWFPdNUoWdTvUPSMO5xIUK9mo5QpwbBOAmyYzVq42o3Qs90N9khEV\nU36LB99fw8PtGHH5wsCHshfauwnNPj0blGXzke0kQ4JNCVH7Jtn0Y0aeejkSxFtwtxoYs6zHl1Lxxpsd\nsw5vBy49CEtoltDW367lVAwDjWdx20msGB7qJCkEDrzu7EXSO22782QX9NBRcN9ppX0C25I0FMA4Wnhz\n9zIpiXRrsTH35jzM8Cjt4EVLGNU3O0HuEvAer3cENnMJtngdrT86ox3fihMQbiuy4Bh4DEcP5in2VjbT\n3qbnoCNvOi8Fmmf7KlGlWAOceL5OHVE5lljjQEMzEQOCEgrk5mDKgwSBJQBNauIDSC1a5iEQjB8Xxp4C\nqeKyyWY9IOntNrtU5ny4lNprHJd36dKFeBLKcGCOvgHBXdOZloMF0YTRExw7hreEO9IoTGVHJ4teWsNr\nHdtagUHjkeZkdMMfnUGNv5aBNtFMqhcZH6EitEa9lGPkKBbJpoom3u8D8EHSIF1H5EZqqx9TLY5hWAIG\nPwJ4qwkpCGw5rCLVrjw7ARKukIFzNULANqjHUMcJ002TlUosJM4xJ4aAgckpLVGOGuPDhGAAexEcQmbg\nUsZdmqQrtuVUyyLteLbLbqtR6CTlcAIwY3xyMCmPgyefE0FEUODBoxQtRUuYTL9RC5o1sYb2PvcxUQfb\niJFi2CAl99pAzcckU2qVCxniARslIxM5pmMRGsQX9ZzYAfZrbg6ce6S74I8UMlgRQ2QVyvUjKKOE6IrJ\nLng370emHfe5m6LZULD5YiZutkD5ipjL2Bz77DvTE5kNPUhuoKBcTJcUgytfXAKUTWOcRKNlq0GImrxM\nJfr7AWbLFFNKGLeTrVDBwpcokJCv0zcOKWe8fd2xkeXkZTdmM66IgM27cyYmtQ6YF26Kd0qrWJeVZJV9\n3fyLYYvKN5csbRY2BHoYE5ERARRW65IrpkXMf48OrCXMtDIP0Z7wxI9DiTeKKeH4uuguhCJnwzR3WxLA\nVU6eBJEd7ZjS6JA83w7decq8uDI7LGKjcz1FySp3B7fE9DkHRGXxbsL7Fjar6vW2mAv8CuvI20B6jctp\n2yLDs24sPfB3sSxrrlhbuT1m6DZqiN0dl6umKx7NGZhmOTVGr20jfcxhqPQwTJfd7kel4rvxip4BqkvT\n7STy8knJ2BXGyJeNgwo1PXUZRDVy0LCTsSF1RFuRZe8cktHl9lgw8ntdPn1pVFL0MwJkJfdXBNUp5gNv\n50FTkrpo1t6wq4CVbcfj2XOrOzvBUzNH26sXGABI1gGxCdp2jEZrHgqQaWIaTJVTuguZhxqDvdYsrwFW\nYN58uuNcKHIrGdRSigyZInwQDYk0pjcqdSeU0WVU3Y9htzZBR7XRaCJr5YTZvq7fwermb5tuwb37lPLq\nB2IGg0iftkVbXaSyfCwVaRbfLBb88so0QqpmJGirFu8FcDiXOV1zTr8yW9XLdYQuUjh43xrXLdgsuYff\nCagInUk1eU1aLjVZoJRsNmStmOEpAqlYMwTvx7w6j2f421Cxr5cNZBIVlAxlXN2QiDqJ9v3sHhHkTanc\nlQuH8ptUyX8qncpBuXXBn7cSez9N0EoxCBl1GHUagbjstgJo4gzLvTmVIY6MiWYOBitzNUHfyqKwtKUr\nVoSCdZcGeA9lHUPA7PUprRRaT3m1hGKPyshtVS2ikG48w3oVerln1N1qGdtz46gZCrndw3LZ1B362RfW\nzDPuXbpsyLsRMTt1Rz1oKHRXp3iE41hkhQH6pxlvyCW2INnHt5XU8zRamOB3oW0udOhMpQFDjRkOcy06\nb4t0QTHvoRqmBna3WXzIMZyeK3GChF5eF8oDXRbjhk7BB6YKCgqwWUzEJ5K47HMSlhFkBUjaPRjdGM0z\nzOMwhW6b1NvSwP7XM1P5yi1oPvOspts1vr29SXqrMMrBhVogeodWyd69NqrO4jkyBxKmlXifoTowpfiY\n2cUCE0XMZqxUN39LCP09JqZifaEcBEo3mgtm1tWu5QR2GNq7UyQf4RIPSDOpDCAtwoPhRgdT1lJdcj4U\nlnH0wrJ8Uwu7c08L7ErnIrDATqCrOjpSbzGP1xHENABYONC4TknFPrJ8pe40A8fzGT0qBw9mAM1SKcHO\nfoiLcMC9AjHTqJzDG3xplSLPG9or2rMeq7Fzp9r0y7uJRMxgg51EbjfvYlH466A3ggvL2WQlDXjJqPW3\nBJGWAWDNN9LK8f46bADKPxakpkx23S9O47rGSXfDhVSIZsDympxWX1UOzWwMZRHkofVeKqizgbKkGgUT\nWykE9gRoRAOd9wfHZDYKa9i0LaPDiaUMvnU1gdBIqIoiVsdJ9swX47oxvMtOxtcS0zlD6llDkBuIiU5g\nPwRCYmtkkb25c8iRJXwGFPjI1wJ34I1z1ENicPdosPiUe9ZC2jnXIKzEdv01x2ER7DNDF3yxOwOhxNxI\nGqsmC92j25UQQFu9ZstOZ28AoCkuOYs0Uycm5u8jR1T39dMBwrko09rC65ENLnsxM8oebmyFCPiGJ1ED\n5Xqc9qZ237f1OnETAoEOwqUSvrdPTv56U7hV91EMTyC812MLQpr2710E3VVpsUCUMNhIxdt7UXZ1UNFb\njgzpZLXnf4DHrv6B7kq6UI50KMxcw1HZE2GpODfUTzNFLaqdrvzxKe5eUWdcojBaRbD4fFdVYJTElYDH\nNNVh6ofkoeWcs9CWGFmSBe0T4K8phFeygQg0prKMELNEy6qENzVtG9ZDcqj3a7L6ZLtvq50anWp7fAVu\nfwz55g4iM2Z2fA0pnwHDL7tt67zTxGITvsnJsZSpeq1EQsZcwtkBV9liu7Rl7jiVT1IIRtchB8TsTiaA\nwVHIQQ9RIOTiPQdKNqi1kC9iGlUqWK93gblNWlBw1eYB9Wk8FQogutwTf0caNMx8D4nPbANcmOOlskIy\nzALh15OlTrWnhP95rf08AN2J026zDE2DUF9k0eCevYBQIDjqKNW4XCZnjbHoIcKzbY5VzPbMs3ZyMz8K\nSucBmgPg6wrSK5ykbkapS5vuqvXc9GbjQJ8bPNzoxoWGyjbZvDs2OBrIqBmcQb2DLJ8v38McQ4mC4UsS\njf4PyfSCtpk274QZjvLCZbLiCBxQegk7jUU0NmTFJAcYCxd9xMWdlFkiszcltT2YzwuFFz7iA6aa4n5L\nHpBNfUA01GcAi1aCMYhmooS4zSlYcSOZkovMz36U3Fd9WtqIEOJLi7HMgHQDgNMdK6DTzAdHQtxerxVF\nHJnPrfNVG7270r3bp0bPnLNYLhObbAn6zqSAUeLtI2Y4KJDjBKCAh2vvYGbu0e2REYJWRj7MkGevsSSy\nb1kCXLt6tKGWAb7lt5c0xyJgUIJW7pdtnwgT0ZCa24BecCAwNnG5U2EwQbcjZGsFxqNGfaemd3oFEhES\nBaE0Fxms9UKTnMafu8wvZ2xymMrUduuRzOjDeX7oD5YsLC88V8CGMLxbbxIpt94KGykbr6e7L0R4oZl1\ntKMgFwQ2p9Txdbp0Y293LcsJymKizqI0F2xEp7y4SmWOJqHZtsbz80wVV9nv41CvtfxuSoGZJ5cNB7pI\nBgzNcQCeH3Jt0RaGGwboxxpuFbzilmkMFXxJm87tD4WNgu01nHfGCKeQcySEBZpVfJgi6sDFJ8uWnvKm\n9mPLHurtWzEfKqUEa1iC71bXjw5wrvhv9BYW8JSUELHmDquftQyKdq0DZXhULMHGQLf4e95WIaoA14LL\nbThz77kuhKULPTu2MNrBUKGorurhGugo5gs4ZUezSsUOe3KxYdrFMdGgny1GgTxMSMTp2RAZytKjv4kQ\nVx7XgzvpQLIbDjUPAkJv6lScwIRq1W3Ne0Rh0V6Bmn6U5uIuWnJjULmbaQiSODj3z0mAZvak0mSWIGwT\nTX83HztcC4W7e1f6a1thmcc5K61Icehla2hBELWPpixTkyC4eEVmk9Rq0m0ZXtx0JX2ZQXqXDEyePyMe\nJ70sdSzXk72zusqhY4yuOMGgbYNHqxOToK6NxujR7e4dV3Wk5JnSUthym8scjcPeCiKDNY4cHfTMnDXJ\n9zLVy01LtNKYpJ1s8FxVxigmxQNKEbIamxhx6yqwGC4aiISVOOUEjvNOdaUfXfUsE6jEwtwxyGxjlRK1\ncLyxXttq4QWN6PehgHv7jXykzPjInbEysebFvvPOOMdunmJvcCNMSvjUda8fL6xfGo0FDrLg8XZipd6S\noPVdYtyIM1Dg40KbBA3JuumPYtXuJaHrZnjZmdnM5OVo4ZNxktfCVT0c6bnD4bAeyn4bYt1ZPaX6hQHh\nJtvNYfpD0ONYlmqKuToQAMlz52Fh6bj45EbX89L5eLlSpWeyBlGotzriB0EPlclrGi5l2B5oPb1aB1ag\nyyYuu44l0F1oOVYnBIZsxIsHVITxi9lEuVPFkWASOUNuVQXfM4n5hxWR9qtuKnIcPsvbJsv1U10XlKh3\nKisqPhHU15xrCLr5gwFxPUKiNTLUBrkzgBOHXPVsHcLCiSD0YU56TRGfvEom43TWUKPPfl9Z54tgVQuT\njCRlaljAzeniQIcbbHZnn3f0HxbDG3DFYqWSxNrXabHhRsIOhhUHSPENyhGSTVO5t0XX5CdMspJPCd02\n3Oqv32ccbUK4O3YH6LEvp0WO3kSl5n50odVkI9B0i0iq4UPFGMkM8bEQJbgJoOH71P10vtdevJFQE4g2\nyhimiM53ZJRWgSZveHtENZc0Gjo0F9eioak9BnPpY1QxAFPC817svuhEstcU69bLCA4D1rO5R8AuIIBq\nyQJcifFLvbpAEYTLKJqysZrU8EEl3TSdC13A9hZvk4NC8VGEDAxcNrKw313dZp17kZPO5HSd1y6sljAW\nA9M1d6FMYV5SlBWf3WZNCUPS7qKNlda2YBsC6IUVB363f5RLGQOQHwbaijBSRCkrVoRxBHtc0Bd5J9V9\nP5uMTXkpZOxRcCQvImGgcmGuxxLb5zTqfS2xu7v3Sf3IIesSt9tVzcEcdbEvLGVJkLk4mb3G30DbIbri\nPZ09JkweDvMaQ3bxT2nfkz3Ilihkw9jqikkCCCz7E8h6z6KbhQErEW9VzJZzMCgJsyPjFam6iNwpe07S\nhyOvNVw2t9wpzL5xM11DvVzQwDaWEytNRHzDBs4KwEtpI2IpjUyVZHSwA0UGqqkzoCgrJFlNOvPlXqcS\nIcREouUIBmuttkrhPWJtSxOOgpsdvBR3kTOzAXNzSKxoaBAb0c5SDMUc6FIyGA8x5wg5DkUgjFUUodEt\nOYaB2VHVePW9mxHeBTdKWLzJow4ZZvjnoBuVigXljKCNh137ckV2y3Yg3Xi4UzJEI2V5Rw9AfnMs7xUw\nVHOFCg189maD3bmZAe7b4eaGZhyy4HVKjqCXmIH7vsEjRvbnfB0SQxxpuqBDJbHNCtW4vM643ZQQBVPP\na7oXSQIq9w2dHp0A7dtkocCZdQp9FKR9XdJAFIbVSHzIF1ZogeZlc0pXuNE0tagvD57xwDRFkAuoQyMu\nYDdZasXrpSmEE5UjHVkyYsISn8QsfXurzDybX468aoRoks654jjmRY5zi1oB8TcMdC2c3sicNaqfeuhd\nH1nPX7l4RpdqWMR7gGx9slXtG8S3KxpOi4qCD7yg3saD66nun4dzksQURoTUdXyrJR5UpHsfIlTF1aJa\nMdXyQtQnrkl00TeghQd00rRFZsCnhi0qrCSKiBfB2EVrd9RPpbgwJGZHuIQecdBmNetc2ylSEClqVBPR\nGOPPIxrnswEZjmnS0jxKW9VSM1QVxSPJnPFswCqT95SoKD6CP4xdX28WIUGiNaIKodXXJHEIsXBCxLsr\nPwWPCtoplC6hhpKmW5dQo92iCTyY2KioKzO8XR6FKm6qonMKVEwQNtlYE9c97KMtEnp25VOdMP46SQXS\nYsSVp7vm8LP87VYI8SOKcW3s2oedYFtt45rvDzoTF0GmS6wELQ9uo98HhjQAI1Dt91cgjJOwygNmLoZE\nX5K2zQiNA163uMCl5xzaBqY4YTL0wgALg3IFdYSp0RFYLWdt6IxoGI1tnoxcjlUEPo5eGIc3mS3SmaLn\nOdumfUQQ4Jgmgaa5anUVQsfBDrlAN5oaX7O0JO71SSPSWiHBsT9WIPy2J1Cace9ZZLRxblFPSXcvsuHh\nhvnhWQltEDAe7MgvkFQ8lGVFa8jhzijoF9kLmMhMILSzYnfXnZPNP7TlAAwlLHK1RqlpHskJqb6CPpGP\nQvOAhEMsM3zJ2KejZx0esxkjxA0ZufVvGAMN3vTUMplQaF4RiQkp9fzBXf3CMk01dWjOMMIEXTeKzIQe\nEcffzjixWU9FpAyGp2rVl4ETRgqljOGw4UgK31r0ZIEGnH0xGz1FtbW1OcQM008JVujRqulCucEMmntr\n",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Compression algorithm encoding is appended to the Content-Encoding header, and the
 * user-provided content-encoding is in the Content-Encoding header before the
 * request compression encoding from the HTTP binding.
 *
 */
it.skip("SDKAppendedGzipAfterProvidedEncoding_restJson1:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    PutWithContentEncoding: testFunction as PutWithContentEncoding<{}>,
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
    path: "/requestcompression/putcontentwithencoding",
    query: {},
    headers: {
      "content-encoding": "custom, gzip",
    },
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      encoding: "custom",

      data: "RjCEL3kBwqPivZUXGiyA5JCujtWgJAkKRlnTEsNYfBRGOS0f7LT6R3bCSOXeJ4auSHzQ4BEZZTklUyj5\n1HEojihShQC2jkQJrNdGOZNSW49yRO0XbnGmeczUHbZqZRelLFKW4xjru9uTuB8lFCtwoGgciFsgqTF8\n5HYcoqINTRxuAwGuRUMoNO473QT0BtCQoKUkAyVaypG0hBZdGNoJhunBfW0d3HWTYlzz9pXElyZhq3C1\n2PDB17GEoOYXmTxDecysmPOdo5z6T0HFhujfeJFIQQ8dirmXcG4F3v0bZdf6AZ3jsiVh6RnEXIPxPbOi\ngIXDWTMUr4Pg3f2LdYCM01eAb2qTdgsEN0MUDhEIfn68I2tnWvcozyUFpg1ez6pyWP8ssWVfFrckREIM\nMb0cTUVqSVSM8bnFiF9SoXM6ZoGMKfX1mT708OYk7SqZ1JlCTkecDJDoR5ED2q2MWKUGR6jjnEV0GtD8\nWJO6AcF0DptY9Hk16Bav3z6c5FeBvrGDrxTFVgRUk8SychzjrcqJ4qskwN8rL3zslC0oqobQRnLFOvwJ\nprSzBIwdH2yAuxokXAdVRa1u9NGNRvfWJfKkwbbVz8yV76RUF9KNhAUmwyYDrLnxNj8ROl8B7dv8Gans\n7Bit52wcdiJyjBW1pAodB7zqqVwtBx5RaSpF7kEMXexYXp9N0J1jlXzdeg5Wgg4pO7TJNr2joiPVAiFf\nefwMMCNBkYx2z7cRxVxCJZMXXzxSKMGgdTN24bJ5UgE0TxyV52RC0wGWG49S1x5jGrvmxKCIgYPs0w3Z\n0I3XcdB0WEj4x4xRztB9Cx2Mc4qFYQdzS9kOioAgNBti1rBySZ8lFZM2zqxvBsJTTJsmcKPr1crqiXjM\noVWdM4ObOO6QA7Pu4c1hT68CrTmbcecjFcxHkgsqdixnFtN6keMGL9Z2YMjZOjYYzbUEwLJqUVWalkIB\nBkgBRqZpzxx5nB5t0qDH35KjsfKM5cinQaFoRq9y9Z82xdCoKZOsUbxZkk1kVmy1jPDCBhkhixkc5PKS\nFoSKTbeK7kuCEZCtR9OfF2k2MqbygGFsFu2sgb1Zn2YdDbaRwRGeaLhswta09UNSMUo8aTixgoYVHxwy\nvraLB6olPSPegeLOnmBeWyKmEfPdbpdGm4ev4vA2AUFuLIeFz0LkCSN0NgQMrr8ALEm1UNpJLReg1ZAX\nzZh7gtQTZUaBVdMJokaJpLk6FPxSA6zkwB5TegSqhrFIsmvpY3VNWmTUq7H0iADdh3dRQ8Is97bTsbwu\nvAEOjh4FQ9wPSFzEtcSJeYQft5GfWYPisDImjjvHVFshFFkNy2nN18pJmhVPoJc456tgbdfEIdGhIADC\n6UPcSSzE1FxlPpILqZrp3i4NvvKoiOa4a8tnALd2XRHHmsvALn2Wmfu07b86gZlu4yOyuUFNoWI6tFvd\nbHnqSJYNQlFESv13gJw609DBzNnrIgBGYBAcDRrIGAnflRKwVDUnDFrUQmE8xNG6jRlyb1p2Y2RrfBtG\ncKqhuGNiT2DfxpY89ektZ98waPhJrFEPJToNH8EADzBorh3T0h4YP1IeLmaI7SOxeuVrk1kjRqMK0rUB\nlUJgJNtCE35jCyoHMwPQlyi78ZaVv8COVQ24zcGpw0MTy6JUsDzAC3jLNY6xCb40SZV9XzG7nWvXA5Ej\nYC1gTXxF4AtFexIdDZ4RJbtYMyXt8LsEJerwwpkfqvDwsiFuqYC6vIn9RoZO5kI0F35XtUITDQYKZ4eq\nWBV0itxTyyR5Rp6g30pZEmEqOusDaIh96CEmHpOBYAQZ7u1QTfzRdysIGMpzbx5gj9Dxm2PO1glWzY7P\nlVqQiBlXSGDOkBkrB6SkiAxknt9zsPdTTsf3r3nid4hdiPrZmGWNgjOO1khSxZSzBdltrCESNnQmlnP5\nZOHA0eSYXwy8j4od5ZmjA3IpFOEPW2MutMbxIbJpg5dIx2x7WxespftenRLgl3CxcpPDcnb9w8LCHBg7\nSEjrEer6Y8wVLFWsQiv6nTdCPZz9cGqwgtCaiHRy8lTWFgdfWd397vw9rduGld3uUFeFRGjYrphqEmHi\nhiG0GhE6wRFVUsGJtvOCYkVREvbEdxPFeJvlAvOcs9HKbtptlTusvYB86vR2bNcIY4f5JZu2X6sGa354\n7LRk0ps2zqYjat3hMR7XDC8KiKceBteFsXoDjfVxTYKelpedTxqWAafrKhaoAVuNM98PSnkuIWGzjSUC\nNsDJTt6vt1D1afBVPWVmnQ7ZQdtEtLIEwAWYjemAztreELIr1E9fPEILm1Ke4KctP9I0I72Dh4eylNZD\n0DEr2Hg7cWFckuZ0Av5d0IPRARXikEGDHl8uh12TXL9v2Uh0ZVSJMEYvxGSbZvkWz8TjWSk3hKA2a7GL\nJm3Ho7e1C34gE1XRGcEthxvURxt4OKBqN3ZNaMIuDTWinoQAutMcUqtm4MoL7RGPiCHUrvTwQPSirsmA\nQmOEu8nOpnP77Fivh9jLGx5ta7nL6jrsWUsBqiN1lzpdPYLRR4mUIAj6sNWiDEk4pkbHSMEcqbWw6Zl7\npsEyPDHalCNhWMA3RSK3skURzQDZ0oBV5W7vjVIZ4d3uCKsk6zrzEI9u5mx7p9RdNKodXfzqYt0ULdtc\n3RW0hIfw2KvrO3BD2QrtgAkfrFBGVvlJSUoh0MvLz8DeXxfuiuq9Ttu7wvsqVI4Piah6WNEXtHHGPJO3\nGhc75Bnv2To4VS2v8rmyKAPIIVTuYBHZN6sZ4FhFzbrslCIdk0eadaU60naqiNWU3CsxplIYGyeThmJ7\n9u4h6Y2OmiPZjFPS2bAzwgAozYTVefII9aEaWZ0hxHZeu1FW7r79dkdO73ZqRfas9u8Z7LLBPCw5pV0F\n5I0pHDgNb6MogoxF4NZJfVtIX1vCHhhVLrXjrYNJU2fD9Fw8kT8Ie2HDBJnqAvYKmryQ1r9ulo3Me3rH\nq9s2Y5uCDxu9iQNhnpwIm57WYGFeqd2fnQeY2IziD3Jgx0KSrmOH0jgi0RwJyfGXaORPq3bQQqljuACo\nkO6io9t5VI8PbNxSHTRbtYiPciUslbT0g7SpCLrRPOBRJ4DDk56pjghpeoUagJ5xJ4wjBzBuXnAGkNnP\nTfpiuz2r3oSBAi8sB9wiYK2z9sp4gZyQsqdVNzAEgKatOxBRBmJCBYpjO98ZQrF83XApPpfFg0ujB2PW\n1iYF9NkgwIKB5oB6KVTOmSKJk11mVermPgeugHbzdd2zUP6fP8fWbhseqk2t8ahGvqjs2CDHFIWXl5jc\nfCknbykE3ANt7lnAfJQ2ddduLGiqrX4HWx6jcWw08Es6BkleO0IDbaWrb95d5isvFlzJsf0TyDIXF4uq\nbBDCi0XPWqtRJ2iqmnJa2GbBe9GmAOWMkBFSilMyC4sR395WSDpD56fx0NGoU6cHrRu9xF2Bgh7RGSfl\nch2GXEeE02fDpSHFNvJBlOEqqfkIX6oCa6KY9NThqeIjYsT184XR2ZI7akXRaw1gMOGpk4FmUxk6WIuX\n4ei1SLQgSdl7OEdRtJklZ76eFrMbkJQ2TDhu8f7mVuiy53GUMIvCrP9xYGZGmCIDm2e4U2BDi3F7C5xK\n3bDZXwlQp6z4BSqTy2OVEWxXUJfjPMOL5Mc7AvDeKtxAS73pVIv0HgHIa4NBAdC7uLG0zXuu1FF6z2XY\nyUhk03fMZhYe7vVxsul3WE7U01fuN8z2y0eKwBW1RFBE1eKIaR9Y01sIWQWbSrfHfDrdZiElhmhHehfs\n0EfrR4sLYdQshJuvhTeKGJDaEhtPQwwJ9mUYGtuCL9RozWx1XI4bHNlzBTW0BVokYiJGlPe7wdxNzJD7\nJgS7Lwv6jGKngVf86imGZyzqwiteWFPdNUoWdTvUPSMO5xIUK9mo5QpwbBOAmyYzVq42o3Qs90N9khEV\nU36LB99fw8PtGHH5wsCHshfauwnNPj0blGXzke0kQ4JNCVH7Jtn0Y0aeejkSxFtwtxoYs6zHl1Lxxpsd\nsw5vBy49CEtoltDW367lVAwDjWdx20msGB7qJCkEDrzu7EXSO22782QX9NBRcN9ppX0C25I0FMA4Wnhz\n9zIpiXRrsTH35jzM8Cjt4EVLGNU3O0HuEvAer3cENnMJtngdrT86ox3fihMQbiuy4Bh4DEcP5in2VjbT\n3qbnoCNvOi8Fmmf7KlGlWAOceL5OHVE5lljjQEMzEQOCEgrk5mDKgwSBJQBNauIDSC1a5iEQjB8Xxp4C\nqeKyyWY9IOntNrtU5ny4lNprHJd36dKFeBLKcGCOvgHBXdOZloMF0YTRExw7hreEO9IoTGVHJ4teWsNr\nHdtagUHjkeZkdMMfnUGNv5aBNtFMqhcZH6EitEa9lGPkKBbJpoom3u8D8EHSIF1H5EZqqx9TLY5hWAIG\nPwJ4qwkpCGw5rCLVrjw7ARKukIFzNULANqjHUMcJ002TlUosJM4xJ4aAgckpLVGOGuPDhGAAexEcQmbg\nUsZdmqQrtuVUyyLteLbLbqtR6CTlcAIwY3xyMCmPgyefE0FEUODBoxQtRUuYTL9RC5o1sYb2PvcxUQfb\niJFi2CAl99pAzcckU2qVCxniARslIxM5pmMRGsQX9ZzYAfZrbg6ce6S74I8UMlgRQ2QVyvUjKKOE6IrJ\nLng370emHfe5m6LZULD5YiZutkD5ipjL2Bz77DvTE5kNPUhuoKBcTJcUgytfXAKUTWOcRKNlq0GImrxM\nJfr7AWbLFFNKGLeTrVDBwpcokJCv0zcOKWe8fd2xkeXkZTdmM66IgM27cyYmtQ6YF26Kd0qrWJeVZJV9\n3fyLYYvKN5csbRY2BHoYE5ERARRW65IrpkXMf48OrCXMtDIP0Z7wxI9DiTeKKeH4uuguhCJnwzR3WxLA\nVU6eBJEd7ZjS6JA83w7decq8uDI7LGKjcz1FySp3B7fE9DkHRGXxbsL7Fjar6vW2mAv8CuvI20B6jctp\n2yLDs24sPfB3sSxrrlhbuT1m6DZqiN0dl6umKx7NGZhmOTVGr20jfcxhqPQwTJfd7kel4rvxip4BqkvT\n7STy8knJ2BXGyJeNgwo1PXUZRDVy0LCTsSF1RFuRZe8cktHl9lgw8ntdPn1pVFL0MwJkJfdXBNUp5gNv\n50FTkrpo1t6wq4CVbcfj2XOrOzvBUzNH26sXGABI1gGxCdp2jEZrHgqQaWIaTJVTuguZhxqDvdYsrwFW\nYN58uuNcKHIrGdRSigyZInwQDYk0pjcqdSeU0WVU3Y9htzZBR7XRaCJr5YTZvq7fwermb5tuwb37lPLq\nB2IGg0iftkVbXaSyfCwVaRbfLBb88so0QqpmJGirFu8FcDiXOV1zTr8yW9XLdYQuUjh43xrXLdgsuYff\nCagInUk1eU1aLjVZoJRsNmStmOEpAqlYMwTvx7w6j2f421Cxr5cNZBIVlAxlXN2QiDqJ9v3sHhHkTanc\nlQuH8ptUyX8qncpBuXXBn7cSez9N0EoxCBl1GHUagbjstgJo4gzLvTmVIY6MiWYOBitzNUHfyqKwtKUr\nVoSCdZcGeA9lHUPA7PUprRRaT3m1hGKPyshtVS2ikG48w3oVerln1N1qGdtz46gZCrndw3LZ1B362RfW\nzDPuXbpsyLsRMTt1Rz1oKHRXp3iE41hkhQH6pxlvyCW2INnHt5XU8zRamOB3oW0udOhMpQFDjRkOcy06\nb4t0QTHvoRqmBna3WXzIMZyeK3GChF5eF8oDXRbjhk7BB6YKCgqwWUzEJ5K47HMSlhFkBUjaPRjdGM0z\nzOMwhW6b1NvSwP7XM1P5yi1oPvOspts1vr29SXqrMMrBhVogeodWyd69NqrO4jkyBxKmlXifoTowpfiY\n2cUCE0XMZqxUN39LCP09JqZifaEcBEo3mgtm1tWu5QR2GNq7UyQf4RIPSDOpDCAtwoPhRgdT1lJdcj4U\nlnH0wrJ8Uwu7c08L7ErnIrDATqCrOjpSbzGP1xHENABYONC4TknFPrJ8pe40A8fzGT0qBw9mAM1SKcHO\nfoiLcMC9AjHTqJzDG3xplSLPG9or2rMeq7Fzp9r0y7uJRMxgg51EbjfvYlH466A3ggvL2WQlDXjJqPW3\nBJGWAWDNN9LK8f46bADKPxakpkx23S9O47rGSXfDhVSIZsDympxWX1UOzWwMZRHkofVeKqizgbKkGgUT\nWykE9gRoRAOd9wfHZDYKa9i0LaPDiaUMvnU1gdBIqIoiVsdJ9swX47oxvMtOxtcS0zlD6llDkBuIiU5g\nPwRCYmtkkb25c8iRJXwGFPjI1wJ34I1z1ENicPdosPiUe9ZC2jnXIKzEdv01x2ER7DNDF3yxOwOhxNxI\nGqsmC92j25UQQFu9ZstOZ28AoCkuOYs0Uycm5u8jR1T39dMBwrko09rC65ENLnsxM8oebmyFCPiGJ1ED\n5Xqc9qZ237f1OnETAoEOwqUSvrdPTv56U7hV91EMTyC812MLQpr2710E3VVpsUCUMNhIxdt7UXZ1UNFb\njgzpZLXnf4DHrv6B7kq6UI50KMxcw1HZE2GpODfUTzNFLaqdrvzxKe5eUWdcojBaRbD4fFdVYJTElYDH\nNNVh6ofkoeWcs9CWGFmSBe0T4K8phFeygQg0prKMELNEy6qENzVtG9ZDcqj3a7L6ZLtvq50anWp7fAVu\nfwz55g4iM2Z2fA0pnwHDL7tt67zTxGITvsnJsZSpeq1EQsZcwtkBV9liu7Rl7jiVT1IIRtchB8TsTiaA\nwVHIQQ9RIOTiPQdKNqi1kC9iGlUqWK93gblNWlBw1eYB9Wk8FQogutwTf0caNMx8D4nPbANcmOOlskIy\nzALh15OlTrWnhP95rf08AN2J026zDE2DUF9k0eCevYBQIDjqKNW4XCZnjbHoIcKzbY5VzPbMs3ZyMz8K\nSucBmgPg6wrSK5ykbkapS5vuqvXc9GbjQJ8bPNzoxoWGyjbZvDs2OBrIqBmcQb2DLJ8v38McQ4mC4UsS\njf4PyfSCtpk274QZjvLCZbLiCBxQegk7jUU0NmTFJAcYCxd9xMWdlFkiszcltT2YzwuFFz7iA6aa4n5L\nHpBNfUA01GcAi1aCMYhmooS4zSlYcSOZkovMz36U3Fd9WtqIEOJLi7HMgHQDgNMdK6DTzAdHQtxerxVF\nHJnPrfNVG7270r3bp0bPnLNYLhObbAn6zqSAUeLtI2Y4KJDjBKCAh2vvYGbu0e2REYJWRj7MkGevsSSy\nb1kCXLt6tKGWAb7lt5c0xyJgUIJW7pdtnwgT0ZCa24BecCAwNnG5U2EwQbcjZGsFxqNGfaemd3oFEhES\nBaE0Fxms9UKTnMafu8wvZ2xymMrUduuRzOjDeX7oD5YsLC88V8CGMLxbbxIpt94KGykbr6e7L0R4oZl1\ntKMgFwQ2p9Txdbp0Y293LcsJymKizqI0F2xEp7y4SmWOJqHZtsbz80wVV9nv41CvtfxuSoGZJ5cNB7pI\nBgzNcQCeH3Jt0RaGGwboxxpuFbzilmkMFXxJm87tD4WNgu01nHfGCKeQcySEBZpVfJgi6sDFJ8uWnvKm\n9mPLHurtWzEfKqUEa1iC71bXjw5wrvhv9BYW8JSUELHmDquftQyKdq0DZXhULMHGQLf4e95WIaoA14LL\nbThz77kuhKULPTu2MNrBUKGorurhGugo5gs4ZUezSsUOe3KxYdrFMdGgny1GgTxMSMTp2RAZytKjv4kQ\nVx7XgzvpQLIbDjUPAkJv6lScwIRq1W3Ne0Rh0V6Bmn6U5uIuWnJjULmbaQiSODj3z0mAZvak0mSWIGwT\nTX83HztcC4W7e1f6a1thmcc5K61Icehla2hBELWPpixTkyC4eEVmk9Rq0m0ZXtx0JX2ZQXqXDEyePyMe\nJ70sdSzXk72zusqhY4yuOMGgbYNHqxOToK6NxujR7e4dV3Wk5JnSUthym8scjcPeCiKDNY4cHfTMnDXJ\n9zLVy01LtNKYpJ1s8FxVxigmxQNKEbIamxhx6yqwGC4aiISVOOUEjvNOdaUfXfUsE6jEwtwxyGxjlRK1\ncLyxXttq4QWN6PehgHv7jXykzPjInbEysebFvvPOOMdunmJvcCNMSvjUda8fL6xfGo0FDrLg8XZipd6S\noPVdYtyIM1Dg40KbBA3JuumPYtXuJaHrZnjZmdnM5OVo4ZNxktfCVT0c6bnD4bAeyn4bYt1ZPaX6hQHh\nJtvNYfpD0ONYlmqKuToQAMlz52Fh6bj45EbX89L5eLlSpWeyBlGotzriB0EPlclrGi5l2B5oPb1aB1ag\nyyYuu44l0F1oOVYnBIZsxIsHVITxi9lEuVPFkWASOUNuVQXfM4n5hxWR9qtuKnIcPsvbJsv1U10XlKh3\nKisqPhHU15xrCLr5gwFxPUKiNTLUBrkzgBOHXPVsHcLCiSD0YU56TRGfvEom43TWUKPPfl9Z54tgVQuT\njCRlaljAzeniQIcbbHZnn3f0HxbDG3DFYqWSxNrXabHhRsIOhhUHSPENyhGSTVO5t0XX5CdMspJPCd02\n3Oqv32ccbUK4O3YH6LEvp0WO3kSl5n50odVkI9B0i0iq4UPFGMkM8bEQJbgJoOH71P10vtdevJFQE4g2\nyhimiM53ZJRWgSZveHtENZc0Gjo0F9eioak9BnPpY1QxAFPC817svuhEstcU69bLCA4D1rO5R8AuIIBq\nyQJcifFLvbpAEYTLKJqysZrU8EEl3TSdC13A9hZvk4NC8VGEDAxcNrKw313dZp17kZPO5HSd1y6sljAW\nA9M1d6FMYV5SlBWf3WZNCUPS7qKNlda2YBsC6IUVB363f5RLGQOQHwbaijBSRCkrVoRxBHtc0Bd5J9V9\nP5uMTXkpZOxRcCQvImGgcmGuxxLb5zTqfS2xu7v3Sf3IIesSt9tVzcEcdbEvLGVJkLk4mb3G30DbIbri\nPZ09JkweDvMaQ3bxT2nfkz3Ilihkw9jqikkCCCz7E8h6z6KbhQErEW9VzJZzMCgJsyPjFam6iNwpe07S\nhyOvNVw2t9wpzL5xM11DvVzQwDaWEytNRHzDBs4KwEtpI2IpjUyVZHSwA0UGqqkzoCgrJFlNOvPlXqcS\nIcREouUIBmuttkrhPWJtSxOOgpsdvBR3kTOzAXNzSKxoaBAb0c5SDMUc6FIyGA8x5wg5DkUgjFUUodEt\nOYaB2VHVePW9mxHeBTdKWLzJow4ZZvjnoBuVigXljKCNh137ckV2y3Yg3Xi4UzJEI2V5Rw9AfnMs7xUw\nVHOFCg189maD3bmZAe7b4eaGZhyy4HVKjqCXmIH7vsEjRvbnfB0SQxxpuqBDJbHNCtW4vM643ZQQBVPP\na7oXSQIq9w2dHp0A7dtkocCZdQp9FKR9XdJAFIbVSHzIF1ZogeZlc0pXuNE0tagvD57xwDRFkAuoQyMu\nYDdZasXrpSmEE5UjHVkyYsISn8QsfXurzDybX468aoRoks654jjmRY5zi1oB8TcMdC2c3sicNaqfeuhd\nH1nPX7l4RpdqWMR7gGx9slXtG8S3KxpOi4qCD7yg3saD66nun4dzksQURoTUdXyrJR5UpHsfIlTF1aJa\nMdXyQtQnrkl00TeghQd00rRFZsCnhi0qrCSKiBfB2EVrd9RPpbgwJGZHuIQecdBmNetc2ylSEClqVBPR\nGOPPIxrnswEZjmnS0jxKW9VSM1QVxSPJnPFswCqT95SoKD6CP4xdX28WIUGiNaIKodXXJHEIsXBCxLsr\nPwWPCtoplC6hhpKmW5dQo92iCTyY2KioKzO8XR6FKm6qonMKVEwQNtlYE9c97KMtEnp25VOdMP46SQXS\nYsSVp7vm8LP87VYI8SOKcW3s2oedYFtt45rvDzoTF0GmS6wELQ9uo98HhjQAI1Dt91cgjJOwygNmLoZE\nX5K2zQiNA163uMCl5xzaBqY4YTL0wgALg3IFdYSp0RFYLWdt6IxoGI1tnoxcjlUEPo5eGIc3mS3SmaLn\nOdumfUQQ4Jgmgaa5anUVQsfBDrlAN5oaX7O0JO71SSPSWiHBsT9WIPy2J1Cace9ZZLRxblFPSXcvsuHh\nhvnhWQltEDAe7MgvkFQ8lGVFa8jhzijoF9kLmMhMILSzYnfXnZPNP7TlAAwlLHK1RqlpHskJqb6CPpGP\nQvOAhEMsM3zJ2KejZx0esxkjxA0ZufVvGAMN3vTUMplQaF4RiQkp9fzBXf3CMk01dWjOMMIEXTeKzIQe\nEcffzjixWU9FpAyGp2rVl4ETRgqljOGw4UgK31r0ZIEGnH0xGz1FtbW1OcQM008JVujRqulCucEMmntr\n",
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
  const testFunction = jest.fn();
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
      corge: ["named"],
      baz: ["bar", "qux"],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
      bar: ["named"],
      qux: ["fromMap"],
    },
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * Supports handling NaN float values.
 */
it("RestJsonSupportsNaNFloatInputs:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

  expect(r.headers["x-foo"]).toBeDefined();
  expect(r.headers["x-foo"]).toBe("Foo");

  expect(r.body).toBeFalsy();
});

/**
 * Serializes a blob in the HTTP payload with a required length
 */
it("RestJsonStreamingTraitsRequireLengthWithBlob:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonStreamingTraitsWithMediaTypeWithBlob:ServerRequest", async () => {
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
 * Serializes a structure
 */
it("RestJsonTestBodyStructure:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    TestBodyStructure: testFunction as TestBodyStructure<{}>,
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
    path: "/body",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{"testConfig":\n    {"timeout": 10}\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      testConfig: {
        timeout: 10,
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes an empty structure in the body
 */
it("RestJsonHttpWithEmptyBody:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    TestBodyStructure: testFunction as TestBodyStructure<{}>,
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
    path: "/body",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(["{}"]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * Serializes a GET request with no modeled body
 */
it("RestJsonHttpWithNoModeledBody:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    TestNoPayload: testFunction as TestNoPayload<{}>,
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
    path: "/no_payload",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * Serializes a GET request with header member but no modeled body
 */
it("RestJsonHttpWithHeaderMemberNoModeledBody:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    TestNoPayload: testFunction as TestNoPayload<{}>,
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
    path: "/no_payload",
    query: {},
    headers: {
      "x-amz-test-id": "t-12345",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      testId: "t-12345",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes a payload targeting an empty blob
 */
it("RestJsonHttpWithEmptyBlobPayload:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    TestPayloadBlob: testFunction as TestPayloadBlob<{}>,
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
    path: "/blob_payload",
    query: {},
    headers: {
      "content-type": "application/octet-stream",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * Serializes a payload targeting a blob
 */
it("RestJsonTestPayloadBlob:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    TestPayloadBlob: testFunction as TestPayloadBlob<{}>,
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
    path: "/blob_payload",
    query: {},
    headers: {
      "content-type": "image/jpg",
    },
    body: Readable.from(["1234"]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      contentType: "image/jpg",

      data: Uint8Array.from("1234", (c) => c.charCodeAt(0)),
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes a payload targeting an empty structure
 */
it("RestJsonHttpWithEmptyStructurePayload:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    TestPayloadStructure: testFunction as TestPayloadStructure<{}>,
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
    path: "/payload",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(["{}"]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * Serializes a payload targeting a structure
 */
it("RestJsonTestPayloadStructure:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    TestPayloadStructure: testFunction as TestPayloadStructure<{}>,
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
    path: "/payload",
    query: {},
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from(['{"data": 25\n}']),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      payloadConfig: {
        data: 25,
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes an request with header members but no payload
 */
it("RestJsonHttpWithHeadersButNoPayload:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    TestPayloadStructure: testFunction as TestPayloadStructure<{}>,
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
    path: "/payload",
    query: {},
    headers: {
      "x-amz-test-id": "t-12345",
      "content-type": "application/json",
    },
    body: Readable.from(["{}"]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];

  const paramsToValidate: any = [
    {
      testId: "t-12345",
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
  const testFunction = jest.fn();
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
  const r: any = testFunction.mock.calls[0][0];

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
      const response = {
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
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

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
 * A unit type input serializes no payload. When clients do not
 * need to serialize any data in the payload, they should omit
 * a payload altogether.
 */
it("RestJsonUnitInputAndOutput:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    UnitInputAndOutput: testFunction as UnitInputAndOutput<{}>,
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
    path: "/UnitInputAndOutput",
    query: {},
    headers: {},
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * Servers should allow the accept header to be set to the
 * default content-type.
 */
it("RestJsonUnitInputAllowsAccept:ServerRequest", async () => {
  const testFunction = jest.fn();
  testFunction.mockReturnValue(Promise.resolve({}));
  const testService: Partial<RestJsonService<{}>> = {
    UnitInputAndOutput: testFunction as UnitInputAndOutput<{}>,
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
    path: "/UnitInputAndOutput",
    query: {},
    headers: {
      accept: "application/json",
    },
    body: Readable.from([""]),
  });
  await handler.handle(request, {});

  expect(testFunction.mock.calls.length).toBe(1);
  const r: any = testFunction.mock.calls[0][0];
});

/**
 * When an operation defines Unit output, the service will respond
 * with an empty payload, and may optionally include the content-type
 * header.
 */
it("RestJsonUnitInputAndOutputNoOutput:ServerResponse", async () => {
  class TestService implements Partial<RestJsonService<{}>> {
    UnitInputAndOutput(input: any, ctx: {}): Promise<UnitInputAndOutputServerOutput> {
      return Promise.resolve({ $metadata: {} });
    }
  }
  const service: any = new TestService();
  const testMux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<{}>>([
    new httpbinding.UriSpec<"RestJson", "UnitInputAndOutput">("POST", [], [], {
      service: "RestJson",
      operation: "UnitInputAndOutput",
    }),
  ]);
  class TestSerializer extends UnitInputAndOutputSerializer {
    deserialize = (output: any, context: any): Promise<any> => {
      return Promise.resolve({});
    };
  }
  const request = new HttpRequest({ method: "POST", hostname: "example.com" });
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<{}>, RestJsonServiceOperations, __ServiceException> = (op) => {
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
  const r = await handler.handle(request, {});

  expect(r.statusCode).toBe(200);

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
