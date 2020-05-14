import { RestJsonProtocolClient } from "../../RestJsonProtocolClient";
import { AllQueryStringTypesCommand } from "../../commands/AllQueryStringTypesCommand";
import { ConstantAndVariableQueryStringCommand } from "../../commands/ConstantAndVariableQueryStringCommand";
import { ConstantQueryStringCommand } from "../../commands/ConstantQueryStringCommand";
import { EmptyInputAndEmptyOutputCommand } from "../../commands/EmptyInputAndEmptyOutputCommand";
import { GreetingWithErrorsCommand } from "../../commands/GreetingWithErrorsCommand";
import { HttpPayloadTraitsCommand } from "../../commands/HttpPayloadTraitsCommand";
import { HttpPayloadTraitsWithMediaTypeCommand } from "../../commands/HttpPayloadTraitsWithMediaTypeCommand";
import { HttpPayloadWithStructureCommand } from "../../commands/HttpPayloadWithStructureCommand";
import { HttpPrefixHeadersCommand } from "../../commands/HttpPrefixHeadersCommand";
import { HttpRequestWithGreedyLabelInPathCommand } from "../../commands/HttpRequestWithGreedyLabelInPathCommand";
import { HttpRequestWithLabelsAndTimestampFormatCommand } from "../../commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import { HttpRequestWithLabelsCommand } from "../../commands/HttpRequestWithLabelsCommand";
import { IgnoreQueryParamsInResponseCommand } from "../../commands/IgnoreQueryParamsInResponseCommand";
import { InputAndOutputWithHeadersCommand } from "../../commands/InputAndOutputWithHeadersCommand";
import { JsonBlobsCommand } from "../../commands/JsonBlobsCommand";
import { JsonEnumsCommand } from "../../commands/JsonEnumsCommand";
import { JsonListsCommand } from "../../commands/JsonListsCommand";
import { JsonMapsCommand } from "../../commands/JsonMapsCommand";
import { JsonTimestampsCommand } from "../../commands/JsonTimestampsCommand";
import { NoInputAndNoOutputCommand } from "../../commands/NoInputAndNoOutputCommand";
import { NoInputAndOutputCommand } from "../../commands/NoInputAndOutputCommand";
import { NullAndEmptyHeadersClientCommand } from "../../commands/NullAndEmptyHeadersClientCommand";
import { OmitsNullSerializesEmptyStringCommand } from "../../commands/OmitsNullSerializesEmptyStringCommand";
import { QueryIdempotencyTokenAutoFillCommand } from "../../commands/QueryIdempotencyTokenAutoFillCommand";
import { RecursiveShapesCommand } from "../../commands/RecursiveShapesCommand";
import { SimpleScalarPropertiesCommand } from "../../commands/SimpleScalarPropertiesCommand";
import { TimestampFormatHeadersCommand } from "../../commands/TimestampFormatHeadersCommand";
import { ComplexError, FooError, InvalidGreeting } from "../../models/index";
import { buildQueryString } from "@aws-sdk/querystring-builder";
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
  handle(
    request: HttpRequest,
    options: HttpHandlerOptions
  ): Promise<{ response: HttpResponse }> {
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

  constructor(
    isSuccess: boolean,
    code: number,
    headers?: HeaderBag,
    body?: String
  ) {
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

  handle(
    request: HttpRequest,
    options: HttpHandlerOptions
  ): Promise<{ response: HttpResponse }> {
    return Promise.resolve({
      response: {
        statusCode: this.code,
        headers: this.headers,
        body: Readable.from([this.body])
      }
    });
  }
}

interface comparableParts {
  [key: string]: string;
}

/**
 * Generates a standard map of un-equal values given input parts.
 */
const compareParts = (
  expectedParts: comparableParts,
  generatedParts: comparableParts
) => {
  const unequalParts: any = {};
  Object.keys(expectedParts).forEach(key => {
    if (generatedParts[key] === undefined) {
      unequalParts[key] = { exp: expectedParts[key], gen: undefined };
    } else if (!equivalentContents(expectedParts[key], generatedParts[key])) {
      unequalParts[key] = { exp: expectedParts[key], gen: generatedParts[key] };
    }
  });

  Object.keys(generatedParts).forEach(key => {
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
  Object.keys(localExpected).forEach(
    key => localExpected[key] === undefined && delete localExpected[key]
  );
  Object.keys(generated).forEach(
    key => generated[key] === undefined && delete generated[key]
  );

  const expectedProperties = Object.getOwnPropertyNames(localExpected);
  const generatedProperties = Object.getOwnPropertyNames(generated);

  // Short circuit on different property counts.
  if (expectedProperties.length != generatedProperties.length) {
    return false;
  }

  // Compare properties directly.
  for (var index = 0; index < expectedProperties.length; index++) {
    const propertyName = expectedProperties[index];
    if (
      !equivalentContents(localExpected[propertyName], generated[propertyName])
    ) {
      return false;
    }
  }

  return true;
};

/**
 * Serializes query string parameters with all supported types
 */
it("RestJsonAllQueryStringTypes:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
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

    queryEnumList: ["Foo", "Baz", "Bar"]
  } as any);
  try {
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
it("RestJsonConstantAndVariableQueryStringMissingOneValue:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new ConstantAndVariableQueryStringCommand({
    baz: "bam"
  } as any);
  try {
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
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new ConstantAndVariableQueryStringCommand({
    baz: "bam",

    maybeSet: "yes"
  } as any);
  try {
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
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new ConstantQueryStringCommand({
    hello: "hi"
  } as any);
  try {
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
it("RestJsonEmptyInputAndEmptyOutput:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
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

    expect(r.body).toBeDefined();
    const bodyString = `{}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Empty output serializes no payload
 */
it("RestJsonEmptyInputAndEmptyOutput:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{}`
    )
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
 * Ensures that operations with errors successfully know how to deserialize the successful response
 */
it("RestJsonGreetingWithErrors:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json",
        "x-greeting": "Hello"
      },
      `{
          "greeting": "Hello"
      }`
    )
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
      greeting: "Hello"
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes the X-Amzn-ErrorType header. For an example service, see Amazon EKS.
 */
it("RestJsonFooErrorUsingXAmznErrorType:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(false, 500, {
      "x-amzn-errortype": "FooError"
    })
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (!FooError.isa(err)) {
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
    requestHandler: new ResponseDeserializationTestHandler(false, 500, {
      "x-amzn-errortype":
        "FooError:http://internal.amazon.com/coral/com.amazon.coral.validate/"
    })
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (!FooError.isa(err)) {
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
    requestHandler: new ResponseDeserializationTestHandler(false, 500, {
      "x-amzn-errortype":
        "aws.protocoltests.restjson#FooError:http://internal.amazon.com/coral/com.amazon.coral.validate/"
    })
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (!FooError.isa(err)) {
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
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/json"
      },
      `{
          "code": "FooError"
      }`
    )
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (!FooError.isa(err)) {
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
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/json"
      },
      `{
          "code": "aws.protocoltests.restjson#FooError"
      }`
    )
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (!FooError.isa(err)) {
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
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/json"
      },
      `{
          "code": "aws.protocoltests.restjson#FooError:http://internal.amazon.com/coral/com.amazon.coral.validate/"
      }`
    )
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (!FooError.isa(err)) {
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
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/json"
      },
      `{
          "__type": "FooError"
      }`
    )
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (!FooError.isa(err)) {
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
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/json"
      },
      `{
          "__type": "aws.protocoltests.restjson#FooError"
      }`
    )
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (!FooError.isa(err)) {
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
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/json"
      },
      `{
          "__type": "aws.protocoltests.restjson#FooError:http://internal.amazon.com/coral/com.amazon.coral.validate/"
      }`
    )
  });

  const params: any = {};
  const command = new GreetingWithErrorsCommand(params);

  try {
    await client.send(command);
  } catch (err) {
    if (!FooError.isa(err)) {
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
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      403,
      {
        "x-amzn-errortype": "ComplexError",
        "x-header": "Header",
        "content-type": "application/json"
      },
      `{
          "TopLevel": "Top level",
          "Nested": {
              "Fooooo": "bar"
          }
      }`
    )
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
    expect(r["$metadata"].httpStatusCode).toBe(403);
    const paramsToValidate: any = [
      {
        Header: "Header",

        TopLevel: "Top level",

        Nested: {
          Foo: "bar"
        }
      }
    ][0];
    Object.keys(paramsToValidate).forEach(param => {
      expect(r[param]).toBeDefined();
      expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
    });
    return;
  }
  fail("Expected an exception to be thrown from response");
});

it("RestJsonEmptyComplexErrorWithNoMessage:Error:GreetingWithErrors", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      403,
      {
        "x-amzn-errortype": "ComplexError",
        "content-type": "application/json"
      },
      `{}`
    )
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
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "x-amzn-errortype": "InvalidGreeting",
        "content-type": "application/json"
      },
      `{
          "Message": "Hi"
      }`
    )
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
        message: "Hi"
      }
    ][0];
    Object.keys(paramsToValidate).forEach(param => {
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
it("RestJsonHttpPayloadTraitsWithBlob:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new HttpPayloadTraitsCommand({
    foo: "Foo",

    blob: Uint8Array.from("blobby blob blob", c => c.charCodeAt(0))
  } as any);
  try {
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
    expect(r.body).toMatchObject(
      Uint8Array.from("blobby blob blob", c => c.charCodeAt(0))
    );
  }
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonHttpPayloadTraitsWithNoBlobBody:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new HttpPayloadTraitsCommand({
    foo: "Foo"
  } as any);
  try {
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
it("RestJsonHttpPayloadTraitsWithBlob:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo"
      },
      `blobby blob blob`
    )
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

      blob: Uint8Array.from("blobby blob blob", c => c.charCodeAt(0))
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes an empty blob in the HTTP payload
 */
it("RestJsonHttpPayloadTraitsWithNoBlobBody:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo"
      },
      ``
    )
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
      foo: "Foo"
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonHttpPayloadTraitsWithMediaTypeWithBlob:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new HttpPayloadTraitsWithMediaTypeCommand({
    foo: "Foo",

    blob: Uint8Array.from("blobby blob blob", c => c.charCodeAt(0))
  } as any);
  try {
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
    expect(r.body).toMatchObject(
      Uint8Array.from("blobby blob blob", c => c.charCodeAt(0))
    );
  }
});

/**
 * Serializes a blob in the HTTP payload with a content-type
 */
it("RestJsonHttpPayloadTraitsWithMediaTypeWithBlob:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
        "content-type": "text/plain"
      },
      `blobby blob blob`
    )
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

      blob: Uint8Array.from("blobby blob blob", c => c.charCodeAt(0))
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes a structure in the payload
 */
it("RestJsonHttpPayloadWithStructure:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new HttpPayloadWithStructureCommand({
    nested: {
      greeting: "hello",

      name: "Phreddy"
    } as any
  } as any);
  try {
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
    expect(r.headers["Content-Type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const bodyString = `{
        \"greeting\": \"hello\",
        \"name\": \"Phreddy\"
    }`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes a structure in the payload
 */
it("RestJsonHttpPayloadWithStructure:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
      },
      `{
          "greeting": "hello",
          "name": "Phreddy"
      }`
    )
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

        name: "Phreddy"
      }
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Adds headers by prefix
 */
it("RestJsonHttpPrefixHeadersArePresent:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new HttpPrefixHeadersCommand({
    foo: "Foo",

    fooMap: {
      Abc: "Abc value",

      Def: "Def value"
    } as any
  } as any);
  try {
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
it("RestJsonHttpPrefixHeadersAreNotPresent:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new HttpPrefixHeadersCommand({
    foo: "Foo",

    fooMap: {} as any
  } as any);
  try {
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
it("RestJsonHttpPrefixHeadersArePresent:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
        "x-foo-abc": "Abc value",
        "x-foo-def": "Def value"
      },
      ``
    )
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

        def: "Def value"
      }
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * No prefix headers are serialized because the value is empty
 */
it("RestJsonHttpPrefixHeadersAreNotPresent:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo"
      },
      ``
    )
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

      fooMap: {}
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes greedy labels and normal labels
 */
it("RestJsonHttpRequestWithGreedyLabelInPath:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new HttpRequestWithGreedyLabelInPathCommand({
    foo: "hello",

    baz: "there/guy"
  } as any);
  try {
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
      "/HttpRequestWithGreedyLabelInPath/foo/hello/baz/there/guy"
    );

    expect(r.body).toBeFalsy();
  }
});

/**
 * Sends a GET request that uses URI label bindings
 */
it("RestJsonInputWithHeadersAndAllParams:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new HttpRequestWithLabelsCommand({
    string: "string",

    short: 1,

    integer: 2,

    long: 3,

    float: 4.0,

    double: 5.0,

    boolean: true,

    timestamp: new Date(1576540098000)
  } as any);
  try {
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
      "/HttpRequestWithLabels/string/1/2/3/4.0/5.0/true/2019-12-16T23%3A48%3A18Z"
    );

    expect(r.body).toBeFalsy();
  }
});

/**
 * Serializes different timestamp formats in URI labels
 */
it("RestJsonHttpRequestWithLabelsAndTimestampFormat:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new HttpRequestWithLabelsAndTimestampFormatCommand({
    memberEpochSeconds: new Date(1576540098000),

    memberHttpDate: new Date(1576540098000),

    memberDateTime: new Date(1576540098000),

    defaultFormat: new Date(1576540098000),

    targetEpochSeconds: new Date(1576540098000),

    targetHttpDate: new Date(1576540098000),

    targetDateTime: new Date(1576540098000)
  } as any);
  try {
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
it("RestJsonIgnoreQueryParamsInResponse:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
      },
      ``
    )
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
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerString: "Hello",

    headerStringList: ["a", "b", "c"],

    headerStringSet: ["a", "b", "c"]
  } as any);
  try {
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
it("RestJsonInputAndOutputWithNumericHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerByte: 1,

    headerShort: 123,

    headerInteger: 123,

    headerLong: 123,

    headerFloat: 1.0,

    headerDouble: 1.0,

    headerIntegerList: [1, 2, 3]
  } as any);
  try {
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
it("RestJsonInputAndOutputWithBooleanHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerTrueBool: true,

    headerFalseBool: false,

    headerBooleanList: [true, false, true]
  } as any);
  try {
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
it("RestJsonInputAndOutputWithTimestampHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerTimestampList: [new Date(1576540098000), new Date(1576540098000)]
  } as any);
  try {
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
    expect(r.headers["X-TimestampList"]).toBe(
      "Mon, 16 Dec 2019 23:48:18 GMT, Mon, 16 Dec 2019 23:48:18 GMT"
    );

    expect(r.body).toBeFalsy();
  }
});

/**
 * Tests requests with enum header bindings
 */
it("RestJsonInputAndOutputWithEnumHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new InputAndOutputWithHeadersCommand({
    headerEnum: "Foo",

    headerEnumList: ["Foo", "Bar", "Baz"]
  } as any);
  try {
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
it("RestJsonInputAndOutputWithStringHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-stringlist": "a, b, c",
        "x-stringset": "a, b, c",
        "x-string": "Hello"
      },
      ``
    )
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

      headerStringSet: ["a", "b", "c"]
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests responses with numeric header bindings
 */
it("RestJsonInputAndOutputWithNumericHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
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
        "x-short": "123"
      },
      ``
    )
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

      headerIntegerList: [1, 2, 3]
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests responses with boolean header bindings
 */
it("RestJsonInputAndOutputWithBooleanHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-booleanlist": "true, false, true",
        "x-boolean1": "true",
        "x-boolean2": "false"
      },
      ``
    )
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

      headerBooleanList: [true, false, true]
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests responses with timestamp header bindings
 */
it("RestJsonInputAndOutputWithTimestampHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-timestamplist":
          "Mon, 16 Dec 2019 23:48:18 GMT, Mon, 16 Dec 2019 23:48:18 GMT"
      },
      ``
    )
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
      headerTimestampList: [new Date(1576540098000), new Date(1576540098000)]
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests responses with enum header bindings
 */
it("RestJsonInputAndOutputWithEnumHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-enumlist": "Foo, Bar, Baz",
        "x-enum": "Foo"
      },
      ``
    )
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

      headerEnumList: ["Foo", "Bar", "Baz"]
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Blobs are base64 encoded
 */
it("RestJsonJsonBlobs:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new JsonBlobsCommand({
    data: Uint8Array.from("value", c => c.charCodeAt(0))
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const bodyString = `{
        \"data\": \"dmFsdWU=\"
    }`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Blobs are base64 encoded
 */
it("RestJsonJsonBlobs:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
      },
      `{
          "data": "dmFsdWU="
      }`
    )
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
      data: Uint8Array.from("value", c => c.charCodeAt(0))
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes simple scalar properties
 */
it("RestJsonJsonEnums:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new JsonEnumsCommand({
    fooEnum1: "Foo",

    fooEnum2: "0",

    fooEnum3: "1",

    fooEnumList: ["Foo", "0"],

    fooEnumSet: ["Foo", "0"],

    fooEnumMap: {
      hi: "Foo",

      zero: "0"
    } as any
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/json");

    expect(r.body).toBeDefined();
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
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes simple scalar properties
 */
it("RestJsonJsonEnums:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
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
    )
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

        zero: "0"
      }
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes JSON lists
 */
it("RestJsonLists:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
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

      ["baz", "qux"]
    ],

    structureList: [
      {
        a: "1",

        b: "2"
      } as any,

      {
        a: "3",

        b: "4"
      } as any
    ]
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/json");

    expect(r.body).toBeDefined();
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
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes empty JSON lists
 */
it("RestJsonListsEmpty:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new JsonListsCommand({
    stringList: []
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const bodyString = `{
        \"stringList\": []
    }`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes null values in lists
 */
it("RestJsonListsSerializeNull:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new JsonListsCommand({
    stringList: [undefined]
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const bodyString = `{
        \"stringList\": [
            null
        ]
    }`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes JSON lists
 */
it("RestJsonLists:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
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
    )
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

        ["baz", "qux"]
      ],

      structureList: [
        {
          a: "1",

          b: "2"
        },

        {
          a: "3",

          b: "4"
        }
      ]
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes empty JSON lists
 */
it("RestJsonListsEmpty:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
      },
      `{
          "stringList": []
      }`
    )
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
      stringList: []
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes null values in lists
 */
it("RestJsonListsSerializeNull:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
      },
      `{
          "stringList": [
              null
          ]
      }`
    )
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
      stringList: [null]
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes JSON maps
 */
it("RestJsonJsonMaps:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new JsonMapsCommand({
    myMap: {
      foo: {
        hi: "there"
      } as any,

      baz: {
        hi: "bye"
      } as any
    } as any
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const bodyString = `{
        \"myMap\": {
            \"foo\": {
                \"hi\": \"there\"
            },
            \"baz\": {
                \"hi\": \"bye\"
            }
        }
    }`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes JSON maps
 */
it("RestJsonJsonMaps:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
      },
      `{
          "myMap": {
              "foo": {
                  "hi": "there"
              },
              "baz": {
                  "hi": "bye"
              }
          }
      }`
    )
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
      myMap: {
        foo: {
          hi: "there"
        },

        baz: {
          hi: "bye"
        }
      }
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests how normal timestamps are serialized
 */
it("RestJsonJsonTimestamps:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new JsonTimestampsCommand({
    normal: new Date(1398796238000)
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const bodyString = `{
        \"normal\": 1398796238
    }`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that the timestampFormat of date-time works like normal timestamps
 */
it("RestJsonJsonTimestampsWithDateTimeFormat:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new JsonTimestampsCommand({
    dateTime: new Date(1398796238000)
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const bodyString = `{
        \"dateTime\": \"2014-04-29T18:30:38Z\"
    }`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that the timestampFormat of epoch-seconds works
 */
it("RestJsonJsonTimestampsWithEpochSecondsFormat:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new JsonTimestampsCommand({
    epochSeconds: new Date(1398796238000)
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const bodyString = `{
        \"epochSeconds\": 1398796238
    }`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Ensures that the timestampFormat of http-date works
 */
it("RestJsonJsonTimestampsWithHttpDateFormat:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new JsonTimestampsCommand({
    httpDate: new Date(1398796238000)
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/json");

    expect(r.body).toBeDefined();
    const bodyString = `{
        \"httpDate\": \"Tue, 29 Apr 2014 18:30:38 GMT\"
    }`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Tests how normal timestamps are serialized
 */
it("RestJsonJsonTimestamps:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
      },
      `{
          "normal": 1398796238
      }`
    )
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
      normal: new Date(1398796238000)
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of date-time works like normal timestamps
 */
it("RestJsonJsonTimestampsWithDateTimeFormat:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
      },
      `{
          "dateTime": "2014-04-29T18:30:38Z"
      }`
    )
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
      dateTime: new Date(1398796238000)
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of epoch-seconds works
 */
it("RestJsonJsonTimestampsWithEpochSecondsFormat:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
      },
      `{
          "epochSeconds": 1398796238
      }`
    )
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
      epochSeconds: new Date(1398796238000)
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that the timestampFormat of http-date works
 */
it("RestJsonJsonTimestampsWithHttpDateFormat:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
      },
      `{
          "httpDate": "Tue, 29 Apr 2014 18:30:38 GMT"
      }`
    )
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
      httpDate: new Date(1398796238000)
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * No input serializes no payload
 */
it("RestJsonNoInputAndNoOutput:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
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
  }
});

/**
 * No output serializes no payload
 */
it("RestJsonNoInputAndNoOutput:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined)
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
it("RestJsonNoInputAndOutput:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
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
  }
});

/**
 * Empty output serializes no payload
 */
it("RestJsonNoInputAndOutput:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined)
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
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new NullAndEmptyHeadersClientCommand({
    a: undefined,

    b: "",

    c: []
  } as any);
  try {
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
it("RestJsonOmitsNullSerializesEmptyString:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new OmitsNullSerializesEmptyStringCommand({
    nullValue: undefined,

    emptyString: ""
  } as any);
  try {
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
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryIdempotencyTokenAutoFillCommand({
    token: "00000000-0000-4000-8000-000000000000"
  } as any);
  try {
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
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryIdempotencyTokenAutoFillCommand({
    token: "00000000-0000-4000-8000-000000000000"
  } as any);
  try {
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
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new RecursiveShapesCommand({
    nested: {
      foo: "Foo1",

      nested: {
        bar: "Bar1",

        recursiveMember: {
          foo: "Foo2",

          nested: {
            bar: "Bar2"
          } as any
        } as any
      } as any
    } as any
  } as any);
  try {
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
    expect(r.headers["Content-Type"]).toBe("application/json");

    expect(r.body).toBeDefined();
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
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes recursive structures
 */
it("RestJsonRecursiveShapes:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/json"
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
    )
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
              bar: "Bar2"
            }
          }
        }
      }
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes simple scalar properties
 */
it("RestJsonSimpleScalarProperties:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
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

    doubleValue: 6.5
  } as any);
  try {
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
    expect(r.headers["Content-Type"]).toBe("application/json");
    expect(r.headers["X-Foo"]).toBeDefined();
    expect(r.headers["X-Foo"]).toBe("Foo");

    expect(r.body).toBeDefined();
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
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes simple scalar properties
 */
it("RestJsonSimpleScalarProperties:Response", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-foo": "Foo",
        "content-type": "application/json"
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
    )
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

      doubleValue: 6.5
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Tests how timestamp request headers are serialized
 */
it("RestJsonTimestampFormatHeaders:Request", async () => {
  const client = new RestJsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new TimestampFormatHeadersCommand({
    memberEpochSeconds: new Date(1576540098000),

    memberHttpDate: new Date(1576540098000),

    memberDateTime: new Date(1576540098000),

    defaultFormat: new Date(1576540098000),

    targetEpochSeconds: new Date(1576540098000),

    targetHttpDate: new Date(1576540098000),

    targetDateTime: new Date(1576540098000)
  } as any);
  try {
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
it("RestJsonTimestampFormatHeaders:Response", async () => {
  const client = new RestJsonProtocolClient({
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
        "x-targetdatetime": "2019-12-16T23:48:18Z"
      },
      ``
    )
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

      targetDateTime: new Date(1576540098000)
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Returns a map of key names that were un-equal to value objects showing the
 * discrepancies between the components.
 */
const compareEquivalentBodies = (
  expectedBody: string,
  generatedBody: string
): Object => {
  const expectedParts = JSON.parse(expectedBody);
  const generatedParts = JSON.parse(generatedBody);

  return compareParts(expectedParts, generatedParts);
};
