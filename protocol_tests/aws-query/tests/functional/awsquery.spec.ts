import { QueryProtocolClient } from "../../QueryProtocolClient";
import { EmptyInputAndEmptyOutputCommand } from "../../commands/EmptyInputAndEmptyOutputCommand";
import { FlattenedXmlMapCommand } from "../../commands/FlattenedXmlMapCommand";
import { FlattenedXmlMapWithXmlNameCommand } from "../../commands/FlattenedXmlMapWithXmlNameCommand";
import { GreetingWithErrorsCommand } from "../../commands/GreetingWithErrorsCommand";
import { IgnoresWrappingXmlNameCommand } from "../../commands/IgnoresWrappingXmlNameCommand";
import { NestedStructuresCommand } from "../../commands/NestedStructuresCommand";
import { NoInputAndNoOutputCommand } from "../../commands/NoInputAndNoOutputCommand";
import { NoInputAndOutputCommand } from "../../commands/NoInputAndOutputCommand";
import { QueryIdempotencyTokenAutoFillCommand } from "../../commands/QueryIdempotencyTokenAutoFillCommand";
import { QueryListsCommand } from "../../commands/QueryListsCommand";
import { QueryMapsCommand } from "../../commands/QueryMapsCommand";
import { QueryTimestampsCommand } from "../../commands/QueryTimestampsCommand";
import { RecursiveXmlShapesCommand } from "../../commands/RecursiveXmlShapesCommand";
import { SimpleInputParamsCommand } from "../../commands/SimpleInputParamsCommand";
import { SimpleScalarXmlPropertiesCommand } from "../../commands/SimpleScalarXmlPropertiesCommand";
import { XmlBlobsCommand } from "../../commands/XmlBlobsCommand";
import { XmlEnumsCommand } from "../../commands/XmlEnumsCommand";
import { XmlListsCommand } from "../../commands/XmlListsCommand";
import { XmlMapsCommand } from "../../commands/XmlMapsCommand";
import { XmlMapsXmlNameCommand } from "../../commands/XmlMapsXmlNameCommand";
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
it("QueryEmptyInputAndEmptyOutput:Request", async () => {
  const client = new QueryProtocolClient({
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
it("QueryEmptyInputAndEmptyOutput:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(true, 200, undefined)
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
 * Serializes flattened XML maps in responses
 */
it("QueryQueryFlattenedXmlMap:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<FlattenedXmlMapResponse xmlns="https://example.com/">
          <FlattenedXmlMapResult>
              <myMap>
                  <key>foo</key>
                  <value>Foo</value>
              </myMap>
              <myMap>
                  <key>baz</key>
                  <value>Baz</value>
              </myMap>
          </FlattenedXmlMapResult>
      </FlattenedXmlMapResponse>`
    )
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

        baz: "Baz"
      }
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Serializes flattened XML maps in responses that have xmlName on members
 */
it("QueryQueryFlattenedXmlMapWithXmlName:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<FlattenedXmlMapWithXmlNameResponse xmlns="https://example.com/">
          <FlattenedXmlMapWithXmlNameResult>
              <KVP>
                  <K>a</K>
                  <V>A</V>
              </KVP>
              <KVP>
                  <K>b</K>
                  <V>B</V>
              </KVP>
          </FlattenedXmlMapWithXmlNameResult>
      </FlattenedXmlMapWithXmlNameResponse>`
    )
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

        b: "B"
      }
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Ensures that operations with errors successfully know how to deserialize the successful response
 */
it("QueryGreetingWithErrors:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<GreetingWithErrorsResponse xmlns="https://example.com/">
          <GreetingWithErrorsResult>
              <greeting>Hello</greeting>
          </GreetingWithErrorsResult>
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
it("QueryInvalidGreetingError:Error:GreetingWithErrors", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "content-type": "text/xml"
      },
      `<ErrorResponse>
         <Error>
            <Type>Sender</Type>
            <Code>InvalidGreeting</Code>
            <Message>Hi</Message>
         </Error>
         <RequestId>foo-id</RequestId>
      </ErrorResponse>
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

it("QueryComplexError:Error:GreetingWithErrors", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      false,
      400,
      {
        "content-type": "text/xml"
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
 * The xmlName trait on the output structure is ignored in AWS Query
 */
it("QueryIgnoresWrappingXmlName:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<IgnoresWrappingXmlNameResponse xmlns="http://foo.com" xmlns="https://example.com/">
          <IgnoresWrappingXmlNameResult>
              <foo>bar</foo>
          </IgnoresWrappingXmlNameResult>
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
it("NestedStructures:Request", async () => {
  const client = new QueryProtocolClient({
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
 * No input serializes no additional query params
 */
it("QueryNoInputAndNoOutput:Request", async () => {
  const client = new QueryProtocolClient({
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
    expect(r.path).toBe("/");

    expect(r.headers["Content-Type"]).toBeDefined();
    expect(r.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    expect(r.body).toBeDefined();
    const bodyString = `Action=NoInputAndNoOutput
    &Version=2020-01-08`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Empty output. Note that no assertion is made on the output body itself.
 */
it("QueryNoInputAndNoOutput:Response", async () => {
  const client = new QueryProtocolClient({
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
it("QueryNoInputAndOutput:Request", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new NoInputAndOutputCommand({} as any);
  try {
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
it("QueryNoInputAndOutput:Response", async () => {
  const client = new QueryProtocolClient({
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
 * Automatically adds idempotency token when not set
 */
it("QueryProtocolIdempotencyTokenAutoFill:Request", async () => {
  const client = new QueryProtocolClient({
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
    &token=00000000-0000-4000-8000-000000000000`;
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
it("QueryProtocolIdempotencyTokenAutoFillIsSet:Request", async () => {
  const client = new QueryProtocolClient({
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
    &token=00000000-0000-4000-8000-000000000123`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes query lists
 */
it("QueryLists:Request", async () => {
  const client = new QueryProtocolClient({
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
    &ListArg.member.1=foo
    &ListArg.member.2=bar
    &ListArg.member.3=baz
    &ComplexListArg.member.1.hi=hello
    &ComplexListArg.member.2.hi=hola`;
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
it("EmptyQueryLists:Request", async () => {
  const client = new QueryProtocolClient({
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
 * Flattens query lists by repeating the member name and removing the member element
 */
it("FlattenedQueryLists:Request", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryListsCommand({
    FlattenedListArg: ["A", "B"]
  } as any);
  try {
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
    &FlattenedListArg.1=A
    &FlattenedListArg.2=B`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Changes the member of lists using xmlName trait
 */
it("QueryListArgWithXmlNameMember:Request", async () => {
  const client = new QueryProtocolClient({
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
    &ListArgWithXmlNameMember.item.1=A
    &ListArgWithXmlNameMember.item.2=B`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Changes the name of flattened lists using xmlName trait on the structure member
 */
it("QueryFlattenedListArgWithXmlName:Request", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryListsCommand({
    FlattenedListArgWithXmlName: ["A", "B"]
  } as any);
  try {
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
 * Serializes query maps
 */
it("QuerySimpleQueryMaps:Request", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryMapsCommand({
    MapArg: {
      foo: "Foo",

      bar: "Bar"
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
    const bodyString = `Action=QueryMaps
    &Version=2020-01-08
    &MapArg.entry.1.key=foo
    &MapArg.entry.1.value=Foo
    &MapArg.entry.2.key=bar
    &MapArg.entry.2.value=Bar`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes query maps and uses xmlName
 */
it("QuerySimpleQueryMapsWithXmlName:Request", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryMapsCommand({
    RenamedMapArg: {
      foo: "Foo"
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
    const bodyString = `Action=QueryMaps
    &Version=2020-01-08
    &Foo.entry.1.key=foo
    &Foo.entry.1.value=Foo`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes complex query maps
 */
it("QueryComplexQueryMaps:Request", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryMapsCommand({
    ComplexMapArg: {
      foo: {
        hi: "Foo"
      } as any,

      bar: {
        hi: "Bar"
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
    const bodyString = `Action=QueryMaps
    &Version=2020-01-08
    &ComplexMapArg.entry.1.key=foo
    &ComplexMapArg.entry.1.value.hi=Foo
    &ComplexMapArg.entry.2.key=bar
    &ComplexMapArg.entry.2.value.hi=Bar`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Does not serialize empty query maps
 */
it("QueryEmptyQueryMaps:Request", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryMapsCommand({
    MapArg: {} as any
  } as any);
  try {
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
    const bodyString = `Action=QueryMaps
    &Version=2020-01-08`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes query maps where the member has an xmlName trait
 */
it("QueryQueryMapWithMemberXmlName:Request", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryMapsCommand({
    MapWithXmlMemberName: {
      foo: "Foo",

      bar: "Bar"
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
    const bodyString = `Action=QueryMaps
    &Version=2020-01-08
    &MapWithXmlMemberName.entry.1.K=foo
    &MapWithXmlMemberName.entry.1.V=Foo
    &MapWithXmlMemberName.entry.2.K=bar
    &MapWithXmlMemberName.entry.2.V=Bar`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes flattened query maps
 */
it("QueryFlattenedQueryMaps:Request", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryMapsCommand({
    FlattenedMap: {
      foo: "Foo",

      bar: "Bar"
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
    const bodyString = `Action=QueryMaps
    &Version=2020-01-08
    &FlattenedMap.1.key=foo
    &FlattenedMap.1.value=Foo
    &FlattenedMap.2.key=bar
    &FlattenedMap.2.value=Bar`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes flattened query maps that use an xmlName
 */
it("QueryFlattenedQueryMapsWithXmlName:Request", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryMapsCommand({
    FlattenedMapWithXmlName: {
      foo: "Foo",

      bar: "Bar"
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
    const bodyString = `Action=QueryMaps
    &Version=2020-01-08
    &Hi.1.K=foo
    &Hi.1.V=Foo
    &Hi.2.K=bar
    &Hi.2.V=Bar`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes query map of lists
 */
it("QueryQueryMapOfLists:Request", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new QueryMapsCommand({
    MapOfLists: {
      foo: ["A", "B"],

      bar: ["C", "D"]
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
    const bodyString = `Action=QueryMaps
    &Version=2020-01-08
    &MapOfLists.entry.1.key=foo
    &MapOfLists.entry.1.value.member.1=A
    &MapOfLists.entry.1.value.member.2=B
    &MapOfLists.entry.2.key=bar
    &MapOfLists.entry.2.value.member.1=C
    &MapOfLists.entry.2.value.member.2=D`;
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
it("QueryTimestampsInput:Request", async () => {
  const client = new QueryProtocolClient({
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
    &normalFormat=2015-01-25T08%3A00%3A00Z
    &epochMember=1422172800
    &epochTarget=1422172800`;
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
it("QueryRecursiveShapes:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<RecursiveXmlShapesResponse xmlns="https://example.com/">
          <RecursiveXmlShapesResult>
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
          </RecursiveXmlShapesResult>
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
it("QuerySimpleInputParamsStrings:Request", async () => {
  const client = new QueryProtocolClient({
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
it("QuerySimpleInputParamsStringAndBooleanTrue:Request", async () => {
  const client = new QueryProtocolClient({
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
it("QuerySimpleInputParamsStringsAndBooleanFalse:Request", async () => {
  const client = new QueryProtocolClient({
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
it("QuerySimpleInputParamsInteger:Request", async () => {
  const client = new QueryProtocolClient({
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
it("QuerySimpleInputParamsFloat:Request", async () => {
  const client = new QueryProtocolClient({
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
it("QuerySimpleInputParamsBlob:Request", async () => {
  const client = new QueryProtocolClient({
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
it("QueryEnums:Request", async () => {
  const client = new QueryProtocolClient({
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
 * Serializes simple scalar properties
 */
it("QuerySimpleScalarProperties:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<SimpleScalarXmlPropertiesResponse xmlns="https://example.com/">
          <SimpleScalarXmlPropertiesResult>
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
          </SimpleScalarXmlPropertiesResult>
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
it("QueryXmlBlobs:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<XmlBlobsResponse xmlns="https://example.com/">
          <XmlBlobsResult>
              <data>dmFsdWU=</data>
          </XmlBlobsResult>
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
it("QueryXmlEnums:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<XmlEnumsResponse xmlns="https://example.com/">
          <XmlEnumsResult>
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
          </XmlEnumsResult>
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
it("QueryXmlLists:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<XmlListsResponse xmlns="https://example.com/">
          <XmlListsResult>
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
          </XmlListsResult>
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
 * Serializes XML maps
 */
it("QueryXmlMaps:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<XmlMapsResponse xmlns="https://example.com/">
          <XmlMapsResult>
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
          </XmlMapsResult>
      </XmlMapsResponse>
      `
    )
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
 * Serializes XML lists
 */
it("QueryQueryXmlMapsXmlName:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<XmlMapsXmlNameResponse xmlns="https://example.com/">
          <XmlMapsXmlNameResult>
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
          </XmlMapsXmlNameResult>
      </XmlMapsXmlNameResponse>
      `
    )
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
 * Serializes XML namespaces
 */
it("QueryXmlNamespaces:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<XmlNamespacesResponse xmlns="http://foo.com" xmlns="https://example.com/">
          <XmlNamespacesResult>
              <nested>
                  <foo xmlns:baz="http://baz.com">Foo</foo>
                  <values xmlns="http://qux.com">
                      <member xmlns="http://bux.com">Bar</member>
                      <member xmlns="http://bux.com">Baz</member>
                  </values>
              </nested>
          </XmlNamespacesResult>
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
it("QueryXmlTimestamps:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <XmlTimestampsResult>
              <normal>2014-04-29T18:30:38Z</normal>
          </XmlTimestampsResult>
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
it("QueryXmlTimestampsWithDateTimeFormat:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <XmlTimestampsResult>
              <dateTime>2014-04-29T18:30:38Z</dateTime>
          </XmlTimestampsResult>
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
it("QueryXmlTimestampsWithEpochSecondsFormat:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <XmlTimestampsResult>
              <epochSeconds>1398796238</epochSeconds>
          </XmlTimestampsResult>
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
it("QueryXmlTimestampsWithHttpDateFormat:Response", async () => {
  const client = new QueryProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "text/xml"
      },
      `<XmlTimestampsResponse xmlns="https://example.com/">
          <XmlTimestampsResult>
              <httpDate>Tue, 29 Apr 2014 18:30:38 GMT</httpDate>
          </XmlTimestampsResult>
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
