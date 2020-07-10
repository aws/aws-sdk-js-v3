import { RestXmlProtocolClient } from "../../RestXmlProtocolClient";
import { AllQueryStringTypesCommand } from "../../commands/AllQueryStringTypesCommand";
import { ConstantAndVariableQueryStringCommand } from "../../commands/ConstantAndVariableQueryStringCommand";
import { ConstantQueryStringCommand } from "../../commands/ConstantQueryStringCommand";
import { EmptyInputAndEmptyOutputCommand } from "../../commands/EmptyInputAndEmptyOutputCommand";
import { FlattenedXmlMapCommand } from "../../commands/FlattenedXmlMapCommand";
import { FlattenedXmlMapWithXmlNameCommand } from "../../commands/FlattenedXmlMapWithXmlNameCommand";
import { GreetingWithErrorsCommand } from "../../commands/GreetingWithErrorsCommand";
import { HttpPayloadTraitsCommand } from "../../commands/HttpPayloadTraitsCommand";
import { HttpPayloadTraitsWithMediaTypeCommand } from "../../commands/HttpPayloadTraitsWithMediaTypeCommand";
import { HttpPayloadWithStructureCommand } from "../../commands/HttpPayloadWithStructureCommand";
import { HttpPayloadWithXmlNameCommand } from "../../commands/HttpPayloadWithXmlNameCommand";
import { HttpPayloadWithXmlNamespaceAndPrefixCommand } from "../../commands/HttpPayloadWithXmlNamespaceAndPrefixCommand";
import { HttpPayloadWithXmlNamespaceCommand } from "../../commands/HttpPayloadWithXmlNamespaceCommand";
import { HttpPrefixHeadersCommand } from "../../commands/HttpPrefixHeadersCommand";
import { HttpRequestWithGreedyLabelInPathCommand } from "../../commands/HttpRequestWithGreedyLabelInPathCommand";
import { HttpRequestWithLabelsAndTimestampFormatCommand } from "../../commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import { HttpRequestWithLabelsCommand } from "../../commands/HttpRequestWithLabelsCommand";
import { IgnoreQueryParamsInResponseCommand } from "../../commands/IgnoreQueryParamsInResponseCommand";
import { InputAndOutputWithHeadersCommand } from "../../commands/InputAndOutputWithHeadersCommand";
import { NoInputAndNoOutputCommand } from "../../commands/NoInputAndNoOutputCommand";
import { NoInputAndOutputCommand } from "../../commands/NoInputAndOutputCommand";
import { NullAndEmptyHeadersClientCommand } from "../../commands/NullAndEmptyHeadersClientCommand";
import { OmitsNullSerializesEmptyStringCommand } from "../../commands/OmitsNullSerializesEmptyStringCommand";
import { QueryIdempotencyTokenAutoFillCommand } from "../../commands/QueryIdempotencyTokenAutoFillCommand";
import { RecursiveShapesCommand } from "../../commands/RecursiveShapesCommand";
import { SimpleScalarPropertiesCommand } from "../../commands/SimpleScalarPropertiesCommand";
import { TimestampFormatHeadersCommand } from "../../commands/TimestampFormatHeadersCommand";
import { XmlAttributesCommand } from "../../commands/XmlAttributesCommand";
import { XmlAttributesOnPayloadCommand } from "../../commands/XmlAttributesOnPayloadCommand";
import { XmlBlobsCommand } from "../../commands/XmlBlobsCommand";
import { XmlEnumsCommand } from "../../commands/XmlEnumsCommand";
import { XmlListsCommand } from "../../commands/XmlListsCommand";
import { XmlMapsCommand } from "../../commands/XmlMapsCommand";
import { XmlMapsXmlNameCommand } from "../../commands/XmlMapsXmlNameCommand";
import { XmlNamespacesCommand } from "../../commands/XmlNamespacesCommand";
import { XmlTimestampsCommand } from "../../commands/XmlTimestampsCommand";
import { ComplexError, InvalidGreeting } from "../../models/index";
import { buildQueryString } from "@aws-sdk/querystring-builder";
import { parse as xmlParse } from "fast-xml-parser";
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
  handle(request: HttpRequest, options: HttpHandlerOptions): Promise<{ response: HttpResponse }> {
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

  handle(request: HttpRequest, options: HttpHandlerOptions): Promise<{ response: HttpResponse }> {
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
 * equality checks based on non-'__type', non-`$metadata`
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
  delete localExpected["__type"];
  delete generated["__type"];
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

/**
 * Serializes query string parameters with all supported types
 */
it("AllQueryStringTypes:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    queryFloat: 1,

    queryDouble: 1,

    queryDoubleList: [1.0, 2.0, 3.0],

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
    expect(queryString).toContain("Float=1");
    expect(queryString).toContain("Double=1");
    expect(queryString).toContain("DoubleList=1.0");
    expect(queryString).toContain("DoubleList=2.0");
    expect(queryString).toContain("DoubleList=3.0");
    expect(queryString).toContain("Boolean=true");
    expect(queryString).toContain("BooleanList=true");
    expect(queryString).toContain("BooleanList=false");
    expect(queryString).toContain("BooleanList=true");
    expect(queryString).toContain("Timestamp=1");
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
 * Mixes constant and variable query string parameters
 */
it("ConstantAndVariableQueryStringMissingOneValue:Request", async () => {
  const client = new RestXmlProtocolClient({
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
it("ConstantAndVariableQueryStringAllValues:Request", async () => {
  const client = new RestXmlProtocolClient({
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
it("ConstantQueryString:Request", async () => {
  const client = new RestXmlProtocolClient({
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
 * Empty input serializes no payload
 */
it("EmptyInputAndEmptyOutput:Request", async () => {
  const client = new RestXmlProtocolClient({
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
 * Empty output serializes no payload
 */
it("EmptyInputAndEmptyOutput:Response", async () => {
  const client = new RestXmlProtocolClient({
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
 * Serializes flattened XML maps in requests
 */
it("FlattenedXmlMap:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new FlattenedXmlMapCommand({
    myMap: {
      foo: "Foo",

      baz: "Baz",
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
    expect(r.path).toBe("/FlattenedXmlMap");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<FlattenedXmlMapInputOutput>
        <myMap>
            <key>foo</key>
            <value>Foo</value>
        </myMap>
        <myMap>
            <key>baz</key>
            <value>Baz</value>
        </myMap>
    </FlattenedXmlMapInputOutput>`;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes flattened XML maps in responses
 */
it("FlattenedXmlMap:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<FlattenedXmlMapInputOutput>
          <myMap>
              <key>foo</key>
              <value>Foo</value>
          </myMap>
          <myMap>
              <key>baz</key>
              <value>Baz</value>
          </myMap>
      </FlattenedXmlMapInputOutput>`
    ),
  });

  const params: any = {};
  const command = new FlattenedXmlMapCommand(params);

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
      myMap: {
        foo: "Foo",

        baz: "Baz",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes flattened XML maps in requests that have xmlName on members
 */
it("FlattenedXmlMapWithXmlName:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new FlattenedXmlMapWithXmlNameCommand({
    myMap: {
      a: "A",

      b: "B",
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
    expect(r.path).toBe("/FlattenedXmlMapWithXmlName");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<FlattenedXmlMapWithXmlNameInputOutput>
        <KVP>
            <K>a</K>
            <V>A</V>
        </KVP>
        <KVP>
            <K>b</K>
            <V>B</V>
        </KVP>
    </FlattenedXmlMapWithXmlNameInputOutput>`;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes flattened XML maps in responses that have xmlName on members
 */
it("FlattenedXmlMapWithXmlName:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<FlattenedXmlMapWithXmlNameInputOutput>
          <KVP>
              <K>a</K>
              <V>A</V>
          </KVP>
          <KVP>
              <K>b</K>
              <V>B</V>
          </KVP>
      </FlattenedXmlMapWithXmlNameInputOutput>`
    ),
  });

  const params: any = {};
  const command = new FlattenedXmlMapWithXmlNameCommand(params);

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
      myMap: {
        a: "A",

        b: "B",
      },
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that operations with errors successfully know how to deserialize the successful response
 */
it("GreetingWithErrors:Response", async () => {
  const client = new RestXmlProtocolClient({
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
 * Parses simple XML errors
 */
it("InvalidGreetingError:Error:GreetingWithErrors", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "content-type": "application/xml",
      },
      `<ErrorResponse>
         <Error>
            <Type>Sender</Type>
            <Code>InvalidGreeting</Code>
            <Message>Hi</Message>
            <AnotherSetting>setting</Message>
         </Error>
         <RequestId>foo-id</RequestId>
      </ErrorResponse>
      `
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (!InvalidGreeting.isa(err)) {
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

it("ComplexError:Error:GreetingWithErrors", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "x-header": "Header",
        "content-type": "application/xml",
      },
      `<ErrorResponse>
         <Error>
            <Type>Sender</Type>
            <Code>ComplexError</Code>
            <Message>Hi</Message>
            <TopLevel>Top level</TopLevel>
            <Nested>
                <Foo>bar</Foo>
            </Nested>
         </Error>
         <RequestId>foo-id</RequestId>
      </ErrorResponse>
      `
    ),
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (!ComplexError.isa(err)) {
      console.log(err);
      fail(`Expected a ComplexError to be thrown, got ${err.name} instead`);
      return;
    }
    const r: any = err;
    expect(r["$metadata"].httpStatusCode).toBe(400);
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

/**
 * Serializes a blob in the HTTP payload
 */
it("HttpPayloadTraitsWithBlob:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["X-Foo"]).toBeDefined();
    expect(r.headers["X-Foo"]).toBe("Foo");

    expect(r.body).toBeDefined();
    expect(r.body).toMatchObject(Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)));
  }
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("HttpPayloadTraitsWithNoBlobBody:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["X-Foo"]).toBeDefined();
    expect(r.headers["X-Foo"]).toBe("Foo");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes a blob in the HTTP payload
 */
it("HttpPayloadTraitsWithBlob:Response", async () => {
  const client = new RestXmlProtocolClient({
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
it("HttpPayloadTraitsWithNoBlobBody:Response", async () => {
  const client = new RestXmlProtocolClient({
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
it("HttpPayloadTraitsWithMediaTypeWithBlob:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("text/plain");
    expect(r.headers["X-Foo"]).toBeDefined();
    expect(r.headers["X-Foo"]).toBe("Foo");

    expect(r.body).toBeDefined();
    expect(r.body).toMatchObject(Uint8Array.from("blobby blob blob", (c) => c.charCodeAt(0)));
  }
});

/**
 * Serializes a blob in the HTTP payload with a content-type
 */
it("HttpPayloadTraitsWithMediaTypeWithBlob:Response", async () => {
  const client = new RestXmlProtocolClient({
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
it("HttpPayloadWithStructure:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<NestedPayload>
        <greeting>hello</greeting>
        <name>Phreddy</name>
    </NestedPayload>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a structure in the payload
 */
it("HttpPayloadWithStructure:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<NestedPayload>
          <greeting>hello</greeting>
          <name>Phreddy</name>
      </NestedPayload>
      `
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
 * Serializes a structure in the payload using a wrapper name based on xmlName
 */
it("HttpPayloadWithXmlName:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpPayloadWithXmlNameCommand({
    nested: {
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
    expect(r.path).toBe("/HttpPayloadWithXmlName");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<Hello><name>Phreddy</name></Hello>`;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a structure in the payload using a wrapper name based on xmlName
 */
it("HttpPayloadWithXmlName:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<Hello><name>Phreddy</name></Hello>`
    ),
  });

  const params: any = {};
  const command = new HttpPayloadWithXmlNameCommand(params);

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
 * Serializes a structure in the payload using a wrapper with an XML namespace
 */
it("HttpPayloadWithXmlNamespace:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpPayloadWithXmlNamespaceCommand({
    nested: {
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
    expect(r.path).toBe("/HttpPayloadWithXmlNamespace");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<PayloadWithXmlNamespace xmlns=\"http://foo.com\">
        <name>Phreddy</name>
    </PayloadWithXmlNamespace>`;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a structure in the payload using a wrapper with an XML namespace
 */
it("HttpPayloadWithXmlNamespace:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<PayloadWithXmlNamespace xmlns="http://foo.com">
          <name>Phreddy</name>
      </PayloadWithXmlNamespace>`
    ),
  });

  const params: any = {};
  const command = new HttpPayloadWithXmlNamespaceCommand(params);

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
 * Serializes a structure in the payload using a wrapper with an XML namespace
 */
it("HttpPayloadWithXmlNamespaceAndPrefix:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpPayloadWithXmlNamespaceAndPrefixCommand({
    nested: {
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
    expect(r.path).toBe("/HttpPayloadWithXmlNamespaceAndPrefix");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<PayloadWithXmlNamespaceAndPrefix xmlns:baz=\"http://foo.com\">
        <name>Phreddy</name>
    </PayloadWithXmlNamespaceAndPrefix>`;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a structure in the payload using a wrapper with an XML namespace
 */
it("HttpPayloadWithXmlNamespaceAndPrefix:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<PayloadWithXmlNamespaceAndPrefix xmlns:baz="http://foo.com">
          <name>Phreddy</name>
      </PayloadWithXmlNamespaceAndPrefix>`
    ),
  });

  const params: any = {};
  const command = new HttpPayloadWithXmlNamespaceAndPrefixCommand(params);

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
it("HttpPrefixHeadersArePresent:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["X-Foo"]).toBeDefined();
    expect(r.headers["X-Foo"]).toBe("Foo");
    expect(r.headers["X-Foo-Abc"]).toBeDefined();
    expect(r.headers["X-Foo-Abc"]).toBe("Abc value");
    expect(r.headers["X-Foo-Def"]).toBeDefined();
    expect(r.headers["X-Foo-Def"]).toBe("Def value");

    expect(r.body).toBeFalsy();
  }
});

/**
 * No prefix headers are serialized because the value is empty
 */
it("HttpPrefixHeadersAreNotPresent:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["X-Foo"]).toBeDefined();
    expect(r.headers["X-Foo"]).toBe("Foo");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Adds headers by prefix
 */
it("HttpPrefixHeadersArePresent:Response", async () => {
  const client = new RestXmlProtocolClient({
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
 * No prefix headers are serialized because the value is empty
 */
it("HttpPrefixHeadersAreNotPresent:Response", async () => {
  const client = new RestXmlProtocolClient({
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

      fooMap: {},
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
it("HttpRequestWithGreedyLabelInPath:Request", async () => {
  const client = new RestXmlProtocolClient({
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
 * Sends a GET request that uses URI label bindings
 */
it("InputWithHeadersAndAllParams:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new HttpRequestWithLabelsCommand({
    string: "string",

    short: 1,

    integer: 2,

    long: 3,

    float: 4.0,

    double: 5.0,

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
    expect(r.path).toBe("/HttpRequestWithLabels/string/1/2/3/4.0/5.0/true/2019-12-16T23%3A48%3A18Z");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes different timestamp formats in URI labels
 */
it("HttpRequestWithLabelsAndTimestampFormat:Request", async () => {
  const client = new RestXmlProtocolClient({
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
 * Query parameters must be ignored when serializing the output of an operation
 */
it("IgnoreQueryParamsInResponse:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<IgnoreQueryParamsInResponseInputOutput><baz>bam</baz></IgnoreQueryParamsInResponseInputOutput>`
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
 * Tests requests with string header bindings
 */
it("InputAndOutputWithStringHeaders:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["X-String"]).toBeDefined();
    expect(r.headers["X-String"]).toBe("Hello");
    expect(r.headers["X-StringList"]).toBeDefined();
    expect(r.headers["X-StringList"]).toBe("a, b, c");
    expect(r.headers["X-StringSet"]).toBeDefined();
    expect(r.headers["X-StringSet"]).toBe("a, b, c");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests requests with numeric header bindings
 */
it("InputAndOutputWithNumericHeaders:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerByte: 1,

    headerShort: 123,

    headerInteger: 123,

    headerLong: 123,

    headerFloat: 1.0,

    headerDouble: 1.0,

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

    expect(r.headers["X-Byte"]).toBeDefined();
    expect(r.headers["X-Byte"]).toBe("1");
    expect(r.headers["X-Double"]).toBeDefined();
    expect(r.headers["X-Double"]).toBe("1.0");
    expect(r.headers["X-Float"]).toBeDefined();
    expect(r.headers["X-Float"]).toBe("1.0");
    expect(r.headers["X-Integer"]).toBeDefined();
    expect(r.headers["X-Integer"]).toBe("123");
    expect(r.headers["X-IntegerList"]).toBeDefined();
    expect(r.headers["X-IntegerList"]).toBe("1, 2, 3");
    expect(r.headers["X-Long"]).toBeDefined();
    expect(r.headers["X-Long"]).toBe("123");
    expect(r.headers["X-Short"]).toBeDefined();
    expect(r.headers["X-Short"]).toBe("123");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests requests with boolean header bindings
 */
it("InputAndOutputWithBooleanHeaders:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["X-Boolean1"]).toBeDefined();
    expect(r.headers["X-Boolean1"]).toBe("true");
    expect(r.headers["X-Boolean2"]).toBeDefined();
    expect(r.headers["X-Boolean2"]).toBe("false");
    expect(r.headers["X-BooleanList"]).toBeDefined();
    expect(r.headers["X-BooleanList"]).toBe("true, false, true");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests requests with timestamp header bindings
 */
it("InputAndOutputWithTimestampHeaders:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["X-TimestampList"]).toBeDefined();
    expect(r.headers["X-TimestampList"]).toBe("Mon, 16 Dec 2019 23:48:18 GMT, Mon, 16 Dec 2019 23:48:18 GMT");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests requests with enum header bindings
 */
it("InputAndOutputWithEnumHeaders:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["X-Enum"]).toBeDefined();
    expect(r.headers["X-Enum"]).toBe("Foo");
    expect(r.headers["X-EnumList"]).toBeDefined();
    expect(r.headers["X-EnumList"]).toBe("Foo, Bar, Baz");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests responses with string header bindings
 */
it("InputAndOutputWithStringHeaders:Response", async () => {
  const client = new RestXmlProtocolClient({
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
it("InputAndOutputWithNumericHeaders:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-float": "1.0",
        "x-byte": "1",
        "x-long": "123",
        "x-integer": "123",
        "x-integerlist": "1, 2, 3",
        "x-double": "1.0",
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

      headerFloat: 1.0,

      headerDouble: 1.0,

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
it("InputAndOutputWithBooleanHeaders:Response", async () => {
  const client = new RestXmlProtocolClient({
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
it("InputAndOutputWithTimestampHeaders:Response", async () => {
  const client = new RestXmlProtocolClient({
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
it("InputAndOutputWithEnumHeaders:Response", async () => {
  const client = new RestXmlProtocolClient({
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
 * No input serializes no payload
 */
it("NoInputAndNoOutput:Request", async () => {
  const client = new RestXmlProtocolClient({
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
 * No output serializes no payload
 */
it("NoInputAndNoOutput:Response", async () => {
  const client = new RestXmlProtocolClient({
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
 * No input serializes no payload
 */
it("NoInputAndOutput:Request", async () => {
  const client = new RestXmlProtocolClient({
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
 * Empty output serializes no payload
 */
it("NoInputAndOutput:Response", async () => {
  const client = new RestXmlProtocolClient({
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
it("NullAndEmptyHeaders:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new NullAndEmptyHeadersClientCommand({
    a: undefined,

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

    expect(r.headers["X-A"]).toBeUndefined();
    expect(r.headers["X-B"]).toBeUndefined();
    expect(r.headers["X-C"]).toBeUndefined();

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes empty query strings but omits null
 */
it("OmitsNullSerializesEmptyString:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new OmitsNullSerializesEmptyStringCommand({
    nullValue: undefined,

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
it("QueryIdempotencyTokenAutoFill:Request", async () => {
  const client = new RestXmlProtocolClient({
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
it("QueryIdempotencyTokenAutoFillIsSet:Request", async () => {
  const client = new RestXmlProtocolClient({
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
it("RecursiveShapes:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<RecursiveShapesInputOutput>
        <nested>
            <foo>Foo1</foo>
            <nested>
                <bar>Bar1</bar>
                <recursiveMember>
                    <foo>Foo2</foo>
                    <nested>
                        <bar>Bar2</bar>
                    </nested>
                </recursiveMember>
            </nested>
        </nested>
    </RecursiveShapesInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes recursive structures
 */
it("RecursiveShapes:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<RecursiveShapesInputOutput>
          <nested>
              <foo>Foo1</foo>
              <nested>
                  <bar>Bar1</bar>
                  <recursiveMember>
                      <foo>Foo2</foo>
                      <nested>
                          <bar>Bar2</bar>
                      </nested>
                  </recursiveMember>
              </nested>
          </nested>
      </RecursiveShapesInputOutput>
      `
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
it("SimpleScalarProperties:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");
    expect(r.headers["X-Foo"]).toBeDefined();
    expect(r.headers["X-Foo"]).toBe("Foo");

    expect(r.body).toBeDefined();
    const bodyString = `<SimpleScalarPropertiesInputOutput>
        <stringValue>string</stringValue>
        <trueBooleanValue>true</trueBooleanValue>
        <falseBooleanValue>false</falseBooleanValue>
        <byteValue>1</byteValue>
        <shortValue>2</shortValue>
        <integerValue>3</integerValue>
        <longValue>4</longValue>
        <floatValue>5.5</floatValue>
        <DoubleDribble>6.5</DoubleDribble>
    </SimpleScalarPropertiesInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes simple scalar properties
 */
it("SimpleScalarProperties:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
        "content-type": "application/xml",
      },
      `<SimpleScalarPropertiesInputOutput>
          <stringValue>string</stringValue>
          <trueBooleanValue>true</trueBooleanValue>
          <falseBooleanValue>false</falseBooleanValue>
          <byteValue>1</byteValue>
          <shortValue>2</shortValue>
          <integerValue>3</integerValue>
          <longValue>4</longValue>
          <floatValue>5.5</floatValue>
          <DoubleDribble>6.5</DoubleDribble>
      </SimpleScalarPropertiesInputOutput>
      `
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
 * Tests how timestamp request headers are serialized
 */
it("TimestampFormatHeaders:Request", async () => {
  const client = new RestXmlProtocolClient({
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

    expect(r.headers["X-defaultFormat"]).toBeDefined();
    expect(r.headers["X-defaultFormat"]).toBe("Mon, 16 Dec 2019 23:48:18 GMT");
    expect(r.headers["X-memberDateTime"]).toBeDefined();
    expect(r.headers["X-memberDateTime"]).toBe("2019-12-16T23:48:18Z");
    expect(r.headers["X-memberEpochSeconds"]).toBeDefined();
    expect(r.headers["X-memberEpochSeconds"]).toBe("1576540098");
    expect(r.headers["X-memberHttpDate"]).toBeDefined();
    expect(r.headers["X-memberHttpDate"]).toBe("Mon, 16 Dec 2019 23:48:18 GMT");
    expect(r.headers["X-targetDateTime"]).toBeDefined();
    expect(r.headers["X-targetDateTime"]).toBe("2019-12-16T23:48:18Z");
    expect(r.headers["X-targetEpochSeconds"]).toBeDefined();
    expect(r.headers["X-targetEpochSeconds"]).toBe("1576540098");
    expect(r.headers["X-targetHttpDate"]).toBeDefined();
    expect(r.headers["X-targetHttpDate"]).toBe("Mon, 16 Dec 2019 23:48:18 GMT");

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests how timestamp response headers are serialized
 */
it("TimestampFormatHeaders:Response", async () => {
  const client = new RestXmlProtocolClient({
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
 * Serializes XML attributes on the synthesized document
 */
it("XmlAttributes:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new XmlAttributesCommand({
    foo: "hi",

    attr: "test",
  } as any);
  try {
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
    expect(r.path).toBe("/XmlAttributes");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<XmlAttributesInputOutput test=\"test\">
        <foo>hi</foo>
    </XmlAttributesInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes simple scalar properties
 */
it("XmlAttributes:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<XmlAttributesInputOutput test="test">
          <foo>hi</foo>
      </XmlAttributesInputOutput>
      `
    ),
  });

  const params: any = {};
  const command = new XmlAttributesCommand(params);

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
      foo: "hi",

      attr: "test",
    },
  ][0];
  Object.keys(paramsToValidate).forEach((param) => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes XML attributes on the synthesized document
 */
it("XmlAttributesOnPayload:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new XmlAttributesOnPayloadCommand({
    payload: {
      foo: "hi",

      attr: "test",
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
    expect(r.path).toBe("/XmlAttributesOnPayload");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<XmlAttributesInputOutput test=\"test\">
        <foo>hi</foo>
    </XmlAttributesInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes simple scalar properties
 */
it("XmlAttributesOnPayload:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<XmlAttributesInputOutput test="test">
          <foo>hi</foo>
      </XmlAttributesInputOutput>
      `
    ),
  });

  const params: any = {};
  const command = new XmlAttributesOnPayloadCommand(params);

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
      payload: {
        foo: "hi",

        attr: "test",
      },
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
it("XmlBlobs:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new XmlBlobsCommand({
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
    expect(r.path).toBe("/XmlBlobs");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<XmlBlobsInputOutput>
        <data>dmFsdWU=</data>
    </XmlBlobsInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Blobs are base64 encoded
 */
it("XmlBlobs:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<XmlBlobsInputOutput>
          <data>dmFsdWU=</data>
      </XmlBlobsInputOutput>
      `
    ),
  });

  const params: any = {};
  const command = new XmlBlobsCommand(params);

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
it("XmlEnums:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new XmlEnumsCommand({
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
    expect(r.path).toBe("/XmlEnums");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<XmlEnumsInputOutput>
        <fooEnum1>Foo</fooEnum1>
        <fooEnum2>0</fooEnum2>
        <fooEnum3>1</fooEnum3>
        <fooEnumList>
            <member>Foo</member>
            <member>0</member>
        </fooEnumList>
        <fooEnumSet>
            <member>Foo</member>
            <member>0</member>
        </fooEnumSet>
        <fooEnumMap>
            <entry>
                <key>hi</key>
                <value>Foo</value>
            </entry>
            <entry>
                <key>zero</key>
                <value>0</value>
            </entry>
        </fooEnumMap>
    </XmlEnumsInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes simple scalar properties
 */
it("XmlEnums:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<XmlEnumsInputOutput>
          <fooEnum1>Foo</fooEnum1>
          <fooEnum2>0</fooEnum2>
          <fooEnum3>1</fooEnum3>
          <fooEnumList>
              <member>Foo</member>
              <member>0</member>
          </fooEnumList>
          <fooEnumSet>
              <member>Foo</member>
              <member>0</member>
          </fooEnumSet>
          <fooEnumMap>
              <entry>
                  <key>hi</key>
                  <value>Foo</value>
              </entry>
              <entry>
                  <key>zero</key>
                  <value>0</value>
              </entry>
          </fooEnumMap>
      </XmlEnumsInputOutput>
      `
    ),
  });

  const params: any = {};
  const command = new XmlEnumsCommand(params);

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
 * Serializes XML lists
 */
it("XmlLists:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new XmlListsCommand({
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

    renamedListMembers: ["foo", "bar"],

    flattenedList: ["hi", "bye"],

    flattenedList2: ["yep", "nope"],

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
    expect(r.path).toBe("/XmlLists");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<XmlListsInputOutput>
        <stringList>
            <member>foo</member>
            <member>bar</member>
        </stringList>
        <stringSet>
            <member>foo</member>
            <member>bar</member>
        </stringSet>
        <integerList>
            <member>1</member>
            <member>2</member>
        </integerList>
        <booleanList>
            <member>true</member>
            <member>false</member>
        </booleanList>
        <timestampList>
            <member>2014-04-29T18:30:38Z</member>
            <member>2014-04-29T18:30:38Z</member>
        </timestampList>
        <enumList>
            <member>Foo</member>
            <member>0</member>
        </enumList>
        <nestedStringList>
            <member>
                <member>foo</member>
                <member>bar</member>
            </member>
            <member>
                <member>baz</member>
                <member>qux</member>
            </member>
        </nestedStringList>
        <renamed>
            <item>foo</item>
            <item>bar</item>
        </renamed>
        <flattenedList>hi</flattenedList>
        <flattenedList>bye</flattenedList>
        <customName>yep</customName>
        <customName>nope</customName>
        <myStructureList>
            <item>
                <value>1</value>
                <other>2</other>
            </item>
            <item>
                <value>3</value>
                <other>4</other>
            </item>
        </myStructureList>
    </XmlListsInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes XML lists
 */
it("XmlLists:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<XmlListsInputOutput>
          <stringList>
              <member>foo</member>
              <member>bar</member>
          </stringList>
          <stringSet>
              <member>foo</member>
              <member>bar</member>
          </stringSet>
          <integerList>
              <member>1</member>
              <member>2</member>
          </integerList>
          <booleanList>
              <member>true</member>
              <member>false</member>
          </booleanList>
          <timestampList>
              <member>2014-04-29T18:30:38Z</member>
              <member>2014-04-29T18:30:38Z</member>
          </timestampList>
          <enumList>
              <member>Foo</member>
              <member>0</member>
          </enumList>
          <nestedStringList>
              <member>
                  <member>foo</member>
                  <member>bar</member>
              </member>
              <member>
                  <member>baz</member>
                  <member>qux</member>
              </member>
          </nestedStringList>
          <renamed>
              <item>foo</item>
              <item>bar</item>
          </renamed>
          <flattenedList>hi</flattenedList>
          <flattenedList>bye</flattenedList>
          <customName>yep</customName>
          <customName>nope</customName>
          <myStructureList>
              <item>
                  <value>1</value>
                  <other>2</other>
              </item>
              <item>
                  <value>3</value>
                  <other>4</other>
              </item>
          </myStructureList>
      </XmlListsInputOutput>
      `
    ),
  });

  const params: any = {};
  const command = new XmlListsCommand(params);

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

      renamedListMembers: ["foo", "bar"],

      flattenedList: ["hi", "bye"],

      flattenedList2: ["yep", "nope"],

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
 * Serializes XML maps
 */
it("XmlMaps:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new XmlMapsCommand({
    myMap: {
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
    expect(r.path).toBe("/XmlMaps");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<XmlMapsInputOutput>
        <myMap>
            <entry>
                <key>foo</key>
                <value>
                    <hi>there</hi>
                </value>
            </entry>
            <entry>
                <key>baz</key>
                <value>
                    <hi>bye</hi>
                </value>
            </entry>
        </myMap>
    </XmlMapsInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes XML maps
 */
it("XmlMaps:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<XmlMapsInputOutput>
          <myMap>
              <entry>
                  <key>foo</key>
                  <value>
                      <hi>there</hi>
                  </value>
              </entry>
              <entry>
                  <key>baz</key>
                  <value>
                      <hi>bye</hi>
                  </value>
              </entry>
          </myMap>
      </XmlMapsInputOutput>
      `
    ),
  });

  const params: any = {};
  const command = new XmlMapsCommand(params);

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
      myMap: {
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
 * Serializes XML maps that have xmlName on members
 */
it("XmlMapsXmlName:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new XmlMapsXmlNameCommand({
    myMap: {
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
    expect(r.path).toBe("/XmlMapsXmlName");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<XmlMapsXmlNameInputOutput>
        <myMap>
            <entry>
                <Attribute>foo</Attribute>
                <Setting>
                    <hi>there</hi>
                </Setting>
            </entry>
            <entry>
                <Attribute>baz</Attribute>
                <Setting>
                    <hi>bye</hi>
                </Setting>
            </entry>
        </myMap>
    </XmlMapsXmlNameInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes XML lists
 */
it("XmlMapsXmlName:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<XmlMapsXmlNameInputOutput>
          <myMap>
              <entry>
                  <Attribute>foo</Attribute>
                  <Setting>
                      <hi>there</hi>
                  </Setting>
              </entry>
              <entry>
                  <Attribute>baz</Attribute>
                  <Setting>
                      <hi>bye</hi>
                  </Setting>
              </entry>
          </myMap>
      </XmlMapsXmlNameInputOutput>
      `
    ),
  });

  const params: any = {};
  const command = new XmlMapsXmlNameCommand(params);

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
      myMap: {
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
 * Serializes XML namespaces
 */
it("XmlNamespaces:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new XmlNamespacesCommand({
    nested: {
      foo: "Foo",

      values: ["Bar", "Baz"],
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
    expect(r.path).toBe("/XmlNamespaces");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<XmlNamespacesInputOutput xmlns=\"http://foo.com\">
        <nested>
            <foo xmlns:baz=\"http://baz.com\">Foo</foo>
            <values xmlns=\"http://qux.com\">
                <member xmlns=\"http://bux.com\">Bar</member>
                <member xmlns=\"http://bux.com\">Baz</member>
            </values>
        </nested>
    </XmlNamespacesInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes XML namespaces
 */
it("XmlNamespaces:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<XmlNamespacesInputOutput xmlns="http://foo.com">
          <nested>
              <foo xmlns:baz="http://baz.com">Foo</foo>
              <values xmlns="http://qux.com">
                  <member xmlns="http://bux.com">Bar</member>
                  <member xmlns="http://bux.com">Baz</member>
              </values>
          </nested>
      </XmlNamespacesInputOutput>
      `
    ),
  });

  const params: any = {};
  const command = new XmlNamespacesCommand(params);

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
        foo: "Foo",

        values: ["Bar", "Baz"],
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
it("XmlTimestamps:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new XmlTimestampsCommand({
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
    expect(r.path).toBe("/XmlTimestamps");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<XmlTimestampsInputOutput>
        <normal>2014-04-29T18:30:38Z</normal>
    </XmlTimestampsInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that the timestampFormat of date-time works like normal timestamps
 */
it("XmlTimestampsWithDateTimeFormat:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new XmlTimestampsCommand({
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
    expect(r.path).toBe("/XmlTimestamps");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<XmlTimestampsInputOutput>
        <dateTime>2014-04-29T18:30:38Z</dateTime>
    </XmlTimestampsInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that the timestampFormat of epoch-seconds works
 */
it("XmlTimestampsWithEpochSecondsFormat:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new XmlTimestampsCommand({
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
    expect(r.path).toBe("/XmlTimestamps");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<XmlTimestampsInputOutput>
        <epochSeconds>1398796238</epochSeconds>
    </XmlTimestampsInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that the timestampFormat of http-date works
 */
it("XmlTimestampsWithHttpDateFormat:Request", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new RequestSerializationTestHandler(),
  });

  const command = new XmlTimestampsCommand({
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
    expect(r.path).toBe("/XmlTimestamps");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/xml");

    expect(r.body).toBeDefined();
    const bodyString = `<XmlTimestampsInputOutput>
        <httpDate>Tue, 29 Apr 2014 18:30:38 GMT</httpDate>
    </XmlTimestampsInputOutput>
    `;
    const unequalParts: any = compareEquivalentBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Tests how normal timestamps are serialized
 */
it("XmlTimestamps:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<XmlTimestampsInputOutput>
          <normal>2014-04-29T18:30:38Z</normal>
      </XmlTimestampsInputOutput>
      `
    ),
  });

  const params: any = {};
  const command = new XmlTimestampsCommand(params);

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
it("XmlTimestampsWithDateTimeFormat:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<XmlTimestampsInputOutput>
          <dateTime>2014-04-29T18:30:38Z</dateTime>
      </XmlTimestampsInputOutput>
      `
    ),
  });

  const params: any = {};
  const command = new XmlTimestampsCommand(params);

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
it("XmlTimestampsWithEpochSecondsFormat:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<XmlTimestampsInputOutput>
          <epochSeconds>1398796238</epochSeconds>
      </XmlTimestampsInputOutput>
      `
    ),
  });

  const params: any = {};
  const command = new XmlTimestampsCommand(params);

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
it("XmlTimestampsWithHttpDateFormat:Response", async () => {
  const client = new RestXmlProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/xml",
      },
      `<XmlTimestampsInputOutput>
          <httpDate>Tue, 29 Apr 2014 18:30:38 GMT</httpDate>
      </XmlTimestampsInputOutput>
      `
    ),
  });

  const params: any = {};
  const command = new XmlTimestampsCommand(params);

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
 * Returns a map of key names that were un-equal to value objects showing the
 * discrepancies between the components.
 */
const compareEquivalentBodies = (expectedBody: string, generatedBody: string): Object => {
  const decodeEscapedXml = (str: string) => {
    return str
      .replace(/&amp;/g, "&")
      .replace(/&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<");
  };

  const parseConfig = {
    attributeNamePrefix: "",
    ignoreAttributes: false,
    parseNodeValue: false,
    tagValueProcessor: (val: any, tagName: any) => decodeEscapedXml(val),
  };

  const parseXmlBody = (body: string) => {
    const parsedObj = xmlParse(body, parseConfig);
    const textNodeName = "#text";
    const key = Object.keys(parsedObj)[0];
    const parsedObjToReturn = parsedObj[key];
    if (parsedObjToReturn[textNodeName]) {
      parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
      delete parsedObjToReturn[textNodeName];
    }
    return parsedObjToReturn;
  };

  const expectedParts = parseXmlBody(expectedBody);
  const generatedParts = parseXmlBody(generatedBody);

  return compareParts(expectedParts, generatedParts);
};
