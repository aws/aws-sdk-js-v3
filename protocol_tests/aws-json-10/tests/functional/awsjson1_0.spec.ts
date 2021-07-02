import { JSONRPC10Client } from "../../JSONRPC10Client";
import { EmptyInputAndEmptyOutputCommand } from "../../commands/EmptyInputAndEmptyOutputCommand";
import { EndpointOperationCommand } from "../../commands/EndpointOperationCommand";
import { EndpointWithHostLabelOperationCommand } from "../../commands/EndpointWithHostLabelOperationCommand";
import { GreetingWithErrorsCommand } from "../../commands/GreetingWithErrorsCommand";
import { JsonUnionsCommand } from "../../commands/JsonUnionsCommand";
import { NoInputAndNoOutputCommand } from "../../commands/NoInputAndNoOutputCommand";
import { NoInputAndOutputCommand } from "../../commands/NoInputAndOutputCommand";
import { SimpleScalarPropertiesCommand } from "../../commands/SimpleScalarPropertiesCommand";
import { ComplexError, FooError, InvalidGreeting } from "../../models/models_0";
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
 * Clients must always send an empty object if input is modeled.
 */
it("AwsJson10EmptyInputAndEmptyOutput:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.EmptyInputAndEmptyOutput");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{}`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * A service will always return a JSON object for operations with modeled output.
 */
it("AwsJson10EmptyInputAndEmptyOutputSendJsonObject:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
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
 * Operations can prepend to the given host if they define the
 * endpoint trait.
 */
it("AwsJson10EndpointTrait:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.path).toBe("/");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{}`;
    const unequalParts: any = compareEquivalentUnknownTypeBodies(utf8Encoder, bodyString, r.body);
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Operations can prepend to the given host if they define the
 * endpoint trait, and can use the host label trait to define
 * further customization based on user input.
 */
it("AwsJson10EndpointTraitWithHostLabel:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.path).toBe("/");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{\"label\": \"bar\"}`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Parses simple JSON errors
 */
it("AwsJson10InvalidGreetingError:Error:GreetingWithErrors", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      `{
          "__type": "aws.protocoltests.json10#InvalidGreeting",
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
 * Serializes the X-Amzn-ErrorType header. For an example service, see Amazon EKS.
 */
it("AwsJson10FooErrorUsingXAmznErrorType:Error:GreetingWithErrors", async () => {
  const client = new JSONRPC10Client({
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
it("AwsJson10FooErrorUsingXAmznErrorTypeWithUri:Error:GreetingWithErrors", async () => {
  const client = new JSONRPC10Client({
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
it("AwsJson10FooErrorUsingXAmznErrorTypeWithUriAndNamespace:Error:GreetingWithErrors", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(false, 500, {
      "x-amzn-errortype":
        "aws.protocoltests.json10#FooError:http://internal.amazon.com/coral/com.amazon.coral.validate/",
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
it("AwsJson10FooErrorUsingCode:Error:GreetingWithErrors", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/x-amz-json-1.0",
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
it("AwsJson10FooErrorUsingCodeAndNamespace:Error:GreetingWithErrors", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      `{
          "code": "aws.protocoltests.json10#FooError"
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
it("AwsJson10FooErrorUsingCodeUriAndNamespace:Error:GreetingWithErrors", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      `{
          "code": "aws.protocoltests.json10#FooError:http://internal.amazon.com/coral/com.amazon.coral.validate/"
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
it("AwsJson10FooErrorWithDunderType:Error:GreetingWithErrors", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/x-amz-json-1.0",
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
it("AwsJson10FooErrorWithDunderTypeAndNamespace:Error:GreetingWithErrors", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      `{
          "__type": "aws.protocoltests.json10#FooError"
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
it("AwsJson10FooErrorWithDunderTypeUriAndNamespace:Error:GreetingWithErrors", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      500,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      `{
          "__type": "aws.protocoltests.json10#FooError:http://internal.amazon.com/coral/com.amazon.coral.validate/"
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
 * Parses a complex error with no message member
 */
it("AwsJson10ComplexError:Error:GreetingWithErrors", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      `{
          "__type": "aws.protocoltests.json10#ComplexError",
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
    expect(r["$metadata"].httpStatusCode).toBe(400);
    const paramsToValidate: any = [
      {
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
 * Parses a complex error with an empty body
 */
it("AwsJson10EmptyComplexError:Error:GreetingWithErrors", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      `{
          "__type": "aws.protocoltests.json10#ComplexError"
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
    expect(r["$metadata"].httpStatusCode).toBe(400);
    return;
  }
  fail("Expected an exception to be thrown from response");
});

/**
 * Serializes a string union value
 */
it("AwsJson10SerializeStringUnionValue:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.JsonUnions");

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
it("AwsJson10SerializeBooleanUnionValue:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.JsonUnions");

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
it("AwsJson10SerializeNumberUnionValue:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.JsonUnions");

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
it("AwsJson10SerializeBlobUnionValue:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.JsonUnions");

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
it("AwsJson10SerializeTimestampUnionValue:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.JsonUnions");

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
it("AwsJson10SerializeEnumUnionValue:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.JsonUnions");

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
it("AwsJson10SerializeListUnionValue:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.JsonUnions");

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
it("AwsJson10SerializeMapUnionValue:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.JsonUnions");

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
it("AwsJson10SerializeStructureUnionValue:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.JsonUnions");

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
it("AwsJson10DeserializeStringUnionValue:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
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
it("AwsJson10DeserializeBooleanUnionValue:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
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
it("AwsJson10DeserializeNumberUnionValue:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
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
it("AwsJson10DeserializeBlobUnionValue:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
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
it("AwsJson10DeserializeTimestampUnionValue:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
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
it("AwsJson10DeserializeEnumUnionValue:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
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
it("AwsJson10DeserializeListUnionValue:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
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
it("AwsJson10DeserializeMapUnionValue:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
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
it("AwsJson10DeserializeStructureUnionValue:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
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
 * Clients must always send an empty JSON object payload for
 * operations with no input (that is, `{}`). While AWS service
 * implementations support requests with no payload or requests
 * that send `{}`, always sending `{}` from the client is
 * preferred for forward compatibility in case input is ever
 * added to an operation.
 */
it("AwsJson10MustAlwaysSendEmptyJsonPayload:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.NoInputAndNoOutput");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{}`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * When no output is defined, the service is expected to return
 * an empty payload, however, client must ignore a JSON payload
 * if one is returned. This ensures that if output is added later,
 * then it will not break the client.
 */
it("AwsJson10HandlesEmptyOutputShape:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      `{}`
    ),
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
 * This client-only test builds on handles_empty_output_shape,
 * by including unexpected fields in the JSON. A client
 * needs to ignore JSON output that is empty or that contains
 * JSON object data.
 */
it("AwsJson10HandlesUnexpectedJsonOutput:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      `{
          "foo": true
      }`
    ),
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
 * When no output is defined, the service is expected to return
 * an empty payload. Despite the lack of a payload, the service
 * is expected to always send a Content-Type header. Clients must
 * handle cases where a service returns a JSON object and where
 * a service returns no JSON at all.
 */
it("AwsJson10ServiceRespondsWithNoPayload:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      ``
    ),
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
 * A client should always send and empty JSON object payload.
 */
it("AwsJson10NoInputAndOutput:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.NoInputAndOutput");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{}`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Empty output always serializes an empty object payload.
 */
it("AwsJson10NoInputAndOutput:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
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
 * Supports handling NaN float values.
 */
it("AwsJson10SupportsNaNFloatInputs:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.SimpleScalarProperties");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"floatValue\": \"NaN\",
        \"doubleValue\": \"NaN\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Supports handling Infinity float values.
 */
it("AwsJson10SupportsInfinityFloatInputs:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.SimpleScalarProperties");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"floatValue\": \"Infinity\",
        \"doubleValue\": \"Infinity\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Supports handling -Infinity float values.
 */
it("AwsJson10SupportsNegativeInfinityFloatInputs:Request", async () => {
  const client = new JSONRPC10Client({
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["content-type"]).toBeDefined();
    expect(r.headers["content-type"]).toBe("application/x-amz-json-1.0");
    expect(r.headers["x-amz-target"]).toBeDefined();
    expect(r.headers["x-amz-target"]).toBe("JsonRpc10.SimpleScalarProperties");

    expect(r.body).toBeDefined();
    const utf8Encoder = client.config.utf8Encoder;
    const bodyString = `{
        \"floatValue\": \"-Infinity\",
        \"doubleValue\": \"-Infinity\"
    }`;
    const unequalParts: any = compareEquivalentJsonBodies(bodyString, r.body.toString());
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Supports handling NaN float values.
 */
it("AwsJson10SupportsNaNFloatInputs:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      `{
          "floatValue": "NaN",
          "doubleValue": "NaN"
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
it("AwsJson10SupportsInfinityFloatInputs:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      `{
          "floatValue": "Infinity",
          "doubleValue": "Infinity"
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
it("AwsJson10SupportsNegativeInfinityFloatInputs:Response", async () => {
  const client = new JSONRPC10Client({
    ...clientParams,
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.0",
      },
      `{
          "floatValue": "-Infinity",
          "doubleValue": "-Infinity"
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
