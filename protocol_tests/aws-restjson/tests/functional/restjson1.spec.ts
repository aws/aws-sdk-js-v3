import { RestJsonProtocolClient } from "../../RestJsonProtocolClient";
import { AllQueryStringTypesCommand } from "../../commands/AllQueryStringTypesCommand";
import { ConstantAndVariableQueryStringCommand } from "../../commands/ConstantAndVariableQueryStringCommand";
import { ConstantQueryStringCommand } from "../../commands/ConstantQueryStringCommand";
import { DocumentTypeAsPayloadCommand } from "../../commands/DocumentTypeAsPayloadCommand";
import { DocumentTypeCommand } from "../../commands/DocumentTypeCommand";
import { EmptyInputAndEmptyOutputCommand } from "../../commands/EmptyInputAndEmptyOutputCommand";
import { EndpointOperationCommand } from "../../commands/EndpointOperationCommand";
import { EndpointWithHostLabelOperationCommand } from "../../commands/EndpointWithHostLabelOperationCommand";
import { GreetingWithErrorsCommand } from "../../commands/GreetingWithErrorsCommand";
import { HostWithPathOperationCommand } from "../../commands/HostWithPathOperationCommand";
import { HttpChecksumRequiredCommand } from "../../commands/HttpChecksumRequiredCommand";
import { HttpEnumPayloadCommand } from "../../commands/HttpEnumPayloadCommand";
import { HttpPayloadTraitsCommand } from "../../commands/HttpPayloadTraitsCommand";
import { HttpPayloadTraitsWithMediaTypeCommand } from "../../commands/HttpPayloadTraitsWithMediaTypeCommand";
import { HttpPayloadWithStructureCommand } from "../../commands/HttpPayloadWithStructureCommand";
import { HttpPrefixHeadersCommand } from "../../commands/HttpPrefixHeadersCommand";
import { HttpPrefixHeadersResponseCommand } from "../../commands/HttpPrefixHeadersResponseCommand";
import { HttpRequestWithFloatLabelsCommand } from "../../commands/HttpRequestWithFloatLabelsCommand";
import { HttpRequestWithGreedyLabelInPathCommand } from "../../commands/HttpRequestWithGreedyLabelInPathCommand";
import { HttpRequestWithLabelsAndTimestampFormatCommand } from "../../commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import { HttpRequestWithLabelsCommand } from "../../commands/HttpRequestWithLabelsCommand";
import { HttpResponseCodeCommand } from "../../commands/HttpResponseCodeCommand";
import { HttpStringPayloadCommand } from "../../commands/HttpStringPayloadCommand";
import { IgnoreQueryParamsInResponseCommand } from "../../commands/IgnoreQueryParamsInResponseCommand";
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
import { QueryParamsAsStringListMapCommand } from "../../commands/QueryParamsAsStringListMapCommand";
import { QueryPrecedenceCommand } from "../../commands/QueryPrecedenceCommand";
import { RecursiveShapesCommand } from "../../commands/RecursiveShapesCommand";
import { SimpleScalarPropertiesCommand } from "../../commands/SimpleScalarPropertiesCommand";
import { StreamingTraitsCommand } from "../../commands/StreamingTraitsCommand";
import { StreamingTraitsRequireLengthCommand } from "../../commands/StreamingTraitsRequireLengthCommand";
import { StreamingTraitsWithMediaTypeCommand } from "../../commands/StreamingTraitsWithMediaTypeCommand";
import { TimestampFormatHeadersCommand } from "../../commands/TimestampFormatHeadersCommand";
import { ComplexError, FooError, InvalidGreeting } from "../../models/models_0";
import { buildQueryString } from "@aws-sdk/querystring-builder";
import { Encoder as __Encoder } from "@aws-sdk/types";
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
    queryString: "%:/?#[]@!$&'()*+,;=😹",
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
    expect(queryString).toContain("String=%25%3A%2F%3F%23%5B%5D%40%21%24%26%27%28%29%2A%2B%2C%3B%3D%F0%9F%98%B9");

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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    string: "%:/?#[]@!$&'()*+,;=😹",

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
      "/HttpRequestWithLabels/%25%3A%2F%3F%23%5B%5D%40%21%24%26%27%28%29%2A%2B%2C%3B%3D%F0%9F%98%B9/1/2/3/4.1/5.1/true/2019-12-16T23%3A48%3A18Z"
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
it.skip("RestJsonNoInputAndOutput:Request", async () => {
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
    fail("Expected a valid response to be returned, got err.");
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
