import { EC2ProtocolClient } from "../../EC2ProtocolClient";
import { EmptyInputAndEmptyOutputCommand } from "../../commands/EmptyInputAndEmptyOutputCommand";
import { GreetingWithErrorsCommand } from "../../commands/GreetingWithErrorsCommand";
import { IgnoresWrappingXmlNameCommand } from "../../commands/IgnoresWrappingXmlNameCommand";
import { NestedStructuresCommand } from "../../commands/NestedStructuresCommand";
import { NoInputAndOutputCommand } from "../../commands/NoInputAndOutputCommand";
import { QueryIdempotencyTokenAutoFillCommand } from "../../commands/QueryIdempotencyTokenAutoFillCommand";
import { QueryListsCommand } from "../../commands/QueryListsCommand";
import { QueryTimestampsCommand } from "../../commands/QueryTimestampsCommand";
import { RecursiveXmlShapesCommand } from "../../commands/RecursiveXmlShapesCommand";
import { SimpleInputParamsCommand } from "../../commands/SimpleInputParamsCommand";
import { SimpleScalarXmlPropertiesCommand } from "../../commands/SimpleScalarXmlPropertiesCommand";
import { XmlBlobsCommand } from "../../commands/XmlBlobsCommand";
import { XmlEnumsCommand } from "../../commands/XmlEnumsCommand";
import { XmlListsCommand } from "../../commands/XmlListsCommand";
import { XmlNamespacesCommand } from "../../commands/XmlNamespacesCommand";
import { XmlTimestampsCommand } from "../../commands/XmlTimestampsCommand";
import { ComplexError, InvalidGreeting } from "../../models/index";
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
 * Empty input serializes no extra query params
 */
it("Ec2QueryEmptyInputAndEmptyOutput:Request", async () => {
  const client = new EC2ProtocolClient({
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
    expect(r.path).toBe("/");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=EmptyInputAndEmptyOutput
    &Version=2020-01-08`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Empty output
 */
it("Ec2QueryEmptyInputAndEmptyOutput:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<EmptyInputAndEmptyOutputResponse xmlns="https://example.com/">
          <RequestId>requestid</RequestId>
      </EmptyInputAndEmptyOutputResponse>
      `
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
it("Ec2GreetingWithErrors:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<GreetingWithErrorsResponse xmlns="https://example.com/">
          <greeting>Hello</greeting>
          <RequestId>requestid</RequestId>
      </GreetingWithErrorsResponse>
      `
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
 * Parses simple XML errors
 */
it("Ec2InvalidGreetingError:Error:GreetingWithErrors", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<Response>
          <Errors>
              <Error>
                  <Code>InvalidGreeting</Code>
                  <Message>Hi</Message>
              </Error>
          </Errors>
          <RequestId>foo-id</RequestId>
      </Response>
      `
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

it("Ec2ComplexError:Error:GreetingWithErrors", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<Response>
          <Errors>
              <Error>
                  <Code>ComplexError</Code>
                  <Message>Hi</Message>
                  <TopLevel>Top level</TopLevel>
                  <Nested>
                      <Foo>bar</Foo>
                  </Nested>
              </Error>
          </Errors>
          <RequestId>foo-id</RequestId>
      </Response>
      `
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
    expect(r["$metadata"].httpStatusCode).toBe(400);
    const paramsToValidate: any = [
      {
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

/**
 * The xmlName trait on the output structure is ignored in the ec2 protocol
 */
it("Ec2IgnoresWrappingXmlName:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<IgnoresWrappingXmlNameResponse xmlns="http://foo.com" xmlns="https://example.com/">
          <foo>bar</foo>
          <RequestId>requestid</RequestId>
      </IgnoresWrappingXmlNameResponse>
      `
    )
  });

  const params: any = {};
  const command = new IgnoresWrappingXmlNameCommand(params);

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
      foo: "bar"
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes nested structures using dots
 */
it("Ec2NestedStructures:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new NestedStructuresCommand({
    Nested: {
      StringArg: "foo",

      OtherArg: true,

      RecursiveArg: {
        StringArg: "baz"
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
    expect(r.path).toBe("/");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=NestedStructures
    &Version=2020-01-08
    &Nested.StringArg=foo
    &Nested.OtherArg=true
    &Nested.RecursiveArg.StringArg=baz`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * No input serializes no payload
 */
it("Ec2QueryNoInputAndOutput:Request", async () => {
  const client = new EC2ProtocolClient({
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
    expect(r.path).toBe("/");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=NoInputAndOutput
    &Version=2020-01-08`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Empty output
 */
it("Ec2QueryNoInputAndOutput:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<NoInputAndOutputResponse xmlns="https://example.com/">
          <RequestId>requestid</RequestId>
      </NoInputAndOutputResponse>
      `
    )
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
 * Automatically adds idempotency token when not set
 */
it("Ec2ProtocolIdempotencyTokenAutoFill:Request", async () => {
  const client = new EC2ProtocolClient({
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
    expect(r.path).toBe("/");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=QueryIdempotencyTokenAutoFill
    &Version=2020-01-08
    &Token=00000000-0000-4000-8000-000000000000`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Uses the given idempotency token as-is
 */
it("Ec2ProtocolIdempotencyTokenAutoFillIsSet:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryIdempotencyTokenAutoFillCommand({
    token: "00000000-0000-4000-8000-000000000123"
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=QueryIdempotencyTokenAutoFill
    &Version=2020-01-08
    &Token=00000000-0000-4000-8000-000000000123`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes query lists. All EC2 lists are flattened.
 */
it("Ec2Lists:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryListsCommand({
    ListArg: ["foo", "bar", "baz"],

    ComplexListArg: [
      {
        hi: "hello"
      } as any,

      {
        hi: "hola"
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=QueryLists
    &Version=2020-01-08
    &ListArg.1=foo
    &ListArg.2=bar
    &ListArg.3=baz
    &ComplexListArg.1.Hi=hello
    &ComplexListArg.2.Hi=hola`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Does not serialize empty query lists
 */
it("Ec2EmptyQueryLists:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryListsCommand({
    ListArg: []
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=QueryLists
    &Version=2020-01-08`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * An xmlName trait in the member of a list has no effect on the list serialization.
 */
it("Ec2ListArgWithXmlNameMember:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryListsCommand({
    ListArgWithXmlNameMember: ["A", "B"]
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=QueryLists
    &Version=2020-01-08
    &ListArgWithXmlNameMember.1=A
    &ListArgWithXmlNameMember.2=B`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Changes the name of the list using the xmlName trait
 */
it("Ec2ListMemberWithXmlName:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryListsCommand({
    ListArgWithXmlName: ["A", "B"]
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=QueryLists
    &Version=2020-01-08
    &Hi.1=A
    &Hi.2=B`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes timestamps
 */
it("Ec2TimestampsInput:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryTimestampsCommand({
    normalFormat: new Date(1422172800000),

    epochMember: new Date(1422172800000),

    epochTarget: new Date(1422172800000)
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=QueryTimestamps
    &Version=2020-01-08
    &NormalFormat=2015-01-25T08%3A00%3A00Z
    &EpochMember=1422172800
    &EpochTarget=1422172800`;
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
it("Ec2RecursiveShapes:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<RecursiveXmlShapesResponse xmlns="https://example.com/">
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
          <RequestId>requestid</RequestId>
      </RecursiveXmlShapesResponse>
      `
    )
  });

  const params: any = {};
  const command = new RecursiveXmlShapesCommand(params);

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
 * Serializes strings
 */
it("Ec2SimpleInputParamsStrings:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new SimpleInputParamsCommand({
    Foo: "val1",

    Bar: "val2"
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=SimpleInputParams
    &Version=2020-01-08
    &Foo=val1
    &Bar=val2`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes booleans that are true
 */
it("Ec2SimpleInputParamsStringAndBooleanTrue:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new SimpleInputParamsCommand({
    Foo: "val1",

    Baz: true
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=SimpleInputParams
    &Version=2020-01-08
    &Foo=val1
    &Baz=true`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes booleans that are false
 */
it("Ec2SimpleInputParamsStringsAndBooleanFalse:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new SimpleInputParamsCommand({
    Baz: false
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=SimpleInputParams
    &Version=2020-01-08
    &Baz=false`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes integers
 */
it("Ec2SimpleInputParamsInteger:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new SimpleInputParamsCommand({
    Bam: 10
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=SimpleInputParams
    &Version=2020-01-08
    &Bam=10`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes floats
 */
it("Ec2SimpleInputParamsFloat:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new SimpleInputParamsCommand({
    Boo: 10.8
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=SimpleInputParams
    &Version=2020-01-08
    &Boo=10.8`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Blobs are base64 encoded in the query string
 */
it("Ec2SimpleInputParamsBlob:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new SimpleInputParamsCommand({
    Qux: Uint8Array.from("value", c => c.charCodeAt(0))
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=SimpleInputParams
    &Version=2020-01-08
    &Qux=dmFsdWU%3D`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes enums in the query string
 */
it("Ec2Enums:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new SimpleInputParamsCommand({
    FooEnum: "Foo"
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=SimpleInputParams
    &Version=2020-01-08
    &FooEnum=Foo`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes query using ec2QueryName trait.
 */
it("Ec2Query:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new SimpleInputParamsCommand({
    HasQueryName: "Hi"
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=SimpleInputParams
    &Version=2020-01-08
    &A=Hi`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * ec2QueryName trait is preferred over xmlName.
 */
it("Ec2QueryIsPreferred:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new SimpleInputParamsCommand({
    HasQueryAndXmlName: "Hi"
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=SimpleInputParams
    &Version=2020-01-08
    &B=Hi`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * xmlName is used with the ec2 protocol, but the first character is uppercased
 */
it("Ec2XmlNameIsUppercased:Request", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new SimpleInputParamsCommand({
    UsesXmlName: "Hi"
  } as any);
  try {
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

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=SimpleInputParams
    &Version=2020-01-08
    &C=Hi`;
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
it("Ec2SimpleScalarProperties:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<SimpleScalarXmlPropertiesResponse xmlns="https://example.com/">
          <stringValue>string</stringValue>
          <emptyStringValue/>
          <trueBooleanValue>true</trueBooleanValue>
          <falseBooleanValue>false</falseBooleanValue>
          <byteValue>1</byteValue>
          <shortValue>2</shortValue>
          <integerValue>3</integerValue>
          <longValue>4</longValue>
          <floatValue>5.5</floatValue>
          <DoubleDribble>6.5</DoubleDribble>
          <RequestId>requestid</RequestId>
      </SimpleScalarXmlPropertiesResponse>
      `
    )
  });

  const params: any = {};
  const command = new SimpleScalarXmlPropertiesCommand(params);

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

      emptyStringValue: "",

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
 * Blobs are base64 encoded
 */
it("Ec2XmlBlobs:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<XmlBlobsResponse xmlns="https://example.com/">
          <data>dmFsdWU=</data>
          <RequestId>requestid</RequestId>
      </XmlBlobsResponse>
      `
    )
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
it("Ec2XmlEnums:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<XmlEnumsResponse xmlns="https://example.com/">
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
          <RequestId>requestid</RequestId>
      </XmlEnumsResponse>
      `
    )
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
 * Serializes XML lists
 */
it("Ec2XmlLists:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<XmlListsResponse xmlns="https://example.com/">
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
          <RequestId>requestid</RequestId>
      </XmlListsResponse>
      `
    )
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

        ["baz", "qux"]
      ],

      renamedListMembers: ["foo", "bar"],

      flattenedList: ["hi", "bye"],

      flattenedList2: ["yep", "nope"],

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
 * Serializes XML namespaces
 */
it("Ec2XmlNamespaces:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<XmlNamespacesResponse xmlns="http://foo.com" xmlns="https://example.com/">
          <nested>
              <foo xmlns:baz="http://baz.com">Foo</foo>
              <values xmlns="http://qux.com">
                  <member xmlns="http://bux.com">Bar</member>
                  <member xmlns="http://bux.com">Baz</member>
              </values>
          </nested>
          <RequestId>requestid</RequestId>
      </XmlNamespacesResponse>
      `
    )
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

        values: ["Bar", "Baz"]
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
it("Ec2XmlTimestamps:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <normal>2014-04-29T18:30:38Z</normal>
          <RequestId>requestid</RequestId>
      </XmlTimestampsResponse>
      `
    )
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
it("Ec2XmlTimestampsWithDateTimeFormat:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <dateTime>2014-04-29T18:30:38Z</dateTime>
          <RequestId>requestid</RequestId>
      </XmlTimestampsResponse>
      `
    )
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
it("Ec2XmlTimestampsWithEpochSecondsFormat:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <epochSeconds>1398796238</epochSeconds>
          <RequestId>requestid</RequestId>
      </XmlTimestampsResponse>
      `
    )
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
it("Ec2XmlTimestampsWithHttpDateFormat:Response", async () => {
  const client = new EC2ProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml;charset=UTF-8"
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <httpDate>Tue, 29 Apr 2014 18:30:38 GMT</httpDate>
          <RequestId>requestid</RequestId>
      </XmlTimestampsResponse>
      `
    )
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
      httpDate: new Date(1398796238000)
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
  const fromEntries = (components: string[][]): { [key: string]: string } => {
    const parts: { [key: string]: string } = {};

    components.forEach(component => {
      parts[component[0]] = component[1];
    });

    return parts;
  };

  // Generate to k:v maps from query components
  const expectedParts = fromEntries(
    expectedBody.split("&").map(part => part.trim().split("="))
  );
  const generatedParts = fromEntries(
    generatedBody.split("&").map(part => part.trim().split("="))
  );

  return compareParts(expectedParts, generatedParts);
};
