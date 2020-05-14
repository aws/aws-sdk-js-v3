import { JsonProtocolClient } from "../../JsonProtocolClient";
import { EmptyOperationCommand } from "../../commands/EmptyOperationCommand";
import { KitchenSinkOperationCommand } from "../../commands/KitchenSinkOperationCommand";
import { OperationWithOptionalInputOutputCommand } from "../../commands/OperationWithOptionalInputOutputCommand";
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
 * Sends requests to /
 */
it("sends_requests_to_slash:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new EmptyOperationCommand({});
  try {
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
  }
});

/**
 * Includes X-Amz-Target header and Content-Type
 */
it("includes_x_amz_target_and_content_type:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new EmptyOperationCommand({});
  try {
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
    expect(r.headers["Content-Type"]).toBe("application/x-amz-json-1.1");
    expect(r.headers["X-Amz-Target"]).toBeDefined();
    expect(r.headers["X-Amz-Target"]).toBe("JsonProtocol.EmptyOperation");
  }
});

/**
 * Handles empty output shapes
 */
it("handles_empty_output_shape:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "content-type": "application/x-amz-json-1.1"
      },
      `{}`
    )
  });

  const params: any = {};
  const command = new EmptyOperationCommand(params);

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
 * Serializes string shapes
 */
it("serializes_string_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    String: "abc xyz"
  } as any);
  try {
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
    const bodyString = `{\"String\":\"abc xyz\"}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes string shapes with jsonvalue trait
 */
it("serializes_string_shapes_with_jsonvalue_trait:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    JsonValue:
      '{"string":"value","number":1234.5,"boolTrue":true,"boolFalse":false,"array":[1,2,3,4],"object":{"key":"value"},"null":null}'
  } as any);
  try {
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
    const bodyString = `{\"JsonValue\":\"{\\"string\\":\\"value\\",\\"number\\":1234.5,\\"boolTrue\\":true,\\"boolFalse\\":false,\\"array\\":[1,2,3,4],\\"object\\":{\\"key\\":\\"value\\"},\\"null\\":null}\"}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes integer shapes
 */
it("serializes_integer_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    Integer: 1234
  } as any);
  try {
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
    const bodyString = `{\"Integer\":1234}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes long shapes
 */
it("serializes_long_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    Long: 999999999999
  } as any);
  try {
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
    const bodyString = `{\"Long\":999999999999}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes float shapes
 */
it("serializes_float_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    Float: 1234.5
  } as any);
  try {
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
    const bodyString = `{\"Float\":1234.5}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes double shapes
 */
it("serializes_double_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    Double: 1234.5
  } as any);
  try {
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
    const bodyString = `{\"Double\":1234.5}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes blob shapes
 */
it("serializes_blob_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    Blob: Uint8Array.from("binary-value", c => c.charCodeAt(0))
  } as any);
  try {
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
    const bodyString = `{\"Blob\":\"YmluYXJ5LXZhbHVl\"}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes boolean shapes (true)
 */
it("serializes_boolean_shapes_true:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    Boolean: true
  } as any);
  try {
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
    const bodyString = `{\"Boolean\":true}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes boolean shapes (false)
 */
it("serializes_boolean_shapes_false:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    Boolean: false
  } as any);
  try {
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
    const bodyString = `{\"Boolean\":false}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes timestamp shapes
 */
it("serializes_timestamp_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    Timestamp: new Date(946845296000)
  } as any);
  try {
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
    const bodyString = `{\"Timestamp\":946845296}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes timestamp shapes with iso8601 timestampFormat
 */
it("serializes_timestamp_shapes_with_iso8601_timestampformat:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    Iso8601Timestamp: new Date(946845296000)
  } as any);
  try {
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
    const bodyString = `{\"Iso8601Timestamp\":\"2000-01-02T20:34:56Z\"}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes timestamp shapes with httpdate timestampFormat
 */
it("serializes_timestamp_shapes_with_httpdate_timestampformat:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    HttpdateTimestamp: new Date(946845296000)
  } as any);
  try {
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
    const bodyString = `{\"HttpdateTimestamp\":\"Sun, 02 Jan 2000 20:34:56 GMT\"}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes timestamp shapes with unixTimestamp timestampFormat
 */
it("serializes_timestamp_shapes_with_unixtimestamp_timestampformat:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    UnixTimestamp: new Date(946845296000)
  } as any);
  try {
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
    const bodyString = `{\"UnixTimestamp\":946845296}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes list shapes
 */
it("serializes_list_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    ListOfStrings: ["abc", "mno", "xyz"]
  } as any);
  try {
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
    const bodyString = `{\"ListOfStrings\":[\"abc\",\"mno\",\"xyz\"]}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes empty list shapes
 */
it("serializes_empty_list_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    ListOfStrings: []
  } as any);
  try {
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
    const bodyString = `{\"ListOfStrings\":[]}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes list of map shapes
 */
it("serializes_list_of_map_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    ListOfMapsOfStrings: [
      {
        foo: "bar"
      } as any,

      {
        abc: "xyz"
      } as any,

      {
        red: "blue"
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

    expect(r.body).toBeDefined();
    const bodyString = `{\"ListOfMapsOfStrings\":[{\"foo\":\"bar\"},{\"abc\":\"xyz\"},{\"red\":\"blue\"}]}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes list of structure shapes
 */
it("serializes_list_of_structure_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    ListOfStructs: [
      {
        Value: "abc"
      } as any,

      {
        Value: "mno"
      } as any,

      {
        Value: "xyz"
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

    expect(r.body).toBeDefined();
    const bodyString = `{\"ListOfStructs\":[{\"Value\":\"abc\"},{\"Value\":\"mno\"},{\"Value\":\"xyz\"}]}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes list of recursive structure shapes
 */
it("serializes_list_of_recursive_structure_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    RecursiveList: [
      {
        RecursiveList: [
          {
            RecursiveList: [
              {
                Integer: 123
              } as any
            ]
          } as any
        ]
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

    expect(r.body).toBeDefined();
    const bodyString = `{\"RecursiveList\":[{\"RecursiveList\":[{\"RecursiveList\":[{\"Integer\":123}]}]}]}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes map shapes
 */
it("serializes_map_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    MapOfStrings: {
      abc: "xyz",

      mno: "hjk"
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

    expect(r.body).toBeDefined();
    const bodyString = `{\"MapOfStrings\":{\"abc\":\"xyz\",\"mno\":\"hjk\"}}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes empty map shapes
 */
it("serializes_empty_map_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    MapOfStrings: {} as any
  } as any);
  try {
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
    const bodyString = `{\"MapOfStrings\":{}}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes map of list shapes
 */
it("serializes_map_of_list_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    MapOfListsOfStrings: {
      abc: ["abc", "xyz"],

      mno: ["xyz", "abc"]
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

    expect(r.body).toBeDefined();
    const bodyString = `{\"MapOfListsOfStrings\":{\"abc\":[\"abc\",\"xyz\"],\"mno\":[\"xyz\",\"abc\"]}}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes map of structure shapes
 */
it("serializes_map_of_structure_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    MapOfStructs: {
      key1: {
        Value: "value-1"
      } as any,

      key2: {
        Value: "value-2"
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

    expect(r.body).toBeDefined();
    const bodyString = `{\"MapOfStructs\":{\"key1\":{\"Value\":\"value-1\"},\"key2\":{\"Value\":\"value-2\"}}}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes map of recursive structure shapes
 */
it("serializes_map_of_recursive_structure_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    RecursiveMap: {
      key1: {
        RecursiveMap: {
          key2: {
            RecursiveMap: {
              key3: {
                Boolean: false
              } as any
            } as any
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
    expect(r.method).toBe("POST");
    expect(r.path).toBe("/");

    expect(r.body).toBeDefined();
    const bodyString = `{\"RecursiveMap\":{\"key1\":{\"RecursiveMap\":{\"key2\":{\"RecursiveMap\":{\"key3\":{\"Boolean\":false}}}}}}}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes structure shapes
 */
it("serializes_structure_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    SimpleStruct: {
      Value: "abc"
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

    expect(r.body).toBeDefined();
    const bodyString = `{\"SimpleStruct\":{\"Value\":\"abc\"}}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes structure members with locationName traits
 */
it("serializes_structure_members_with_locationname_traits:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    StructWithLocationName: {
      Value: "some-value"
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

    expect(r.body).toBeDefined();
    const bodyString = `{\"StructWithLocationName\":{\"RenamedMember\":\"some-value\"}}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes empty structure shapes
 */
it("serializes_empty_structure_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    SimpleStruct: {} as any
  } as any);
  try {
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
    const bodyString = `{\"SimpleStruct\":{}}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes structure which have no members
 */
it("serializes_structure_which_have_no_members:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    EmptyStruct: {} as any
  } as any);
  try {
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
    const bodyString = `{\"EmptyStruct\":{}}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Serializes recursive structure shapes
 */
it("serializes_recursive_structure_shapes:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new KitchenSinkOperationCommand({
    String: "top-value",

    Boolean: false,

    RecursiveStruct: {
      String: "nested-value",

      Boolean: true,

      RecursiveList: [
        {
          String: "string-only"
        } as any,

        {
          RecursiveStruct: {
            MapOfStrings: {
              color: "red",

              size: "large"
            } as any
          } as any
        } as any
      ]
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

    expect(r.body).toBeDefined();
    const bodyString = `{\"String\":\"top-value\",\"Boolean\":false,\"RecursiveStruct\":{\"String\":\"nested-value\",\"Boolean\":true,\"RecursiveList\":[{\"String\":\"string-only\"},{\"RecursiveStruct\":{\"MapOfStrings\":{\"color\":\"red\",\"size\":\"large\"}}}]}}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
});

/**
 * Parses operations with empty JSON bodies
 */
it("parses_operations_with_empty_json_bodies:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
 * Parses string shapes
 */
it("parses_string_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"String":"string-value"}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      String: "string-value"
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses integer shapes
 */
it("parses_integer_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"Integer":1234}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      Integer: 1234
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses long shapes
 */
it("parses_long_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"Long":1234567890123456789}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      Long: 1234567890123456789
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses float shapes
 */
it("parses_float_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"Float":1234.5}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      Float: 1234.5
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses double shapes
 */
it("parses_double_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"Double":123456789.12345679}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      Double: 123456789.12345679
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses boolean shapes (true)
 */
it("parses_boolean_shapes_true:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"Boolean":true}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      Boolean: true
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses boolean (false)
 */
it("parses_boolean_false:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"Boolean":false}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      Boolean: false
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses blob shapes
 */
it("parses_blob_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"Blob":"YmluYXJ5LXZhbHVl"}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      Blob: Uint8Array.from("binary-value", c => c.charCodeAt(0))
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses timestamp shapes
 */
it("parses_timestamp_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"Timestamp":946845296}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      Timestamp: new Date(946845296000)
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses iso8601 timestamps
 */
it("parses_iso8601_timestamps:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"Timestamp":"2000-01-02T20:34:56.000Z"}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      Timestamp: new Date(946845296000)
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses httpdate timestamps
 */
it("parses_httpdate_timestamps:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"Timestamp":"Sun, 02 Jan 2000 20:34:56.000 GMT"}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      Timestamp: new Date(946845296000)
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses list shapes
 */
it("parses_list_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"ListOfStrings":["abc","mno","xyz"]}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      ListOfStrings: ["abc", "mno", "xyz"]
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses list of map shapes
 */
it("parses_list_of_map_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"ListOfMapsOfStrings":[{"size":"large"},{"color":"red"}]}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      ListOfMapsOfStrings: [
        {
          size: "large"
        },

        {
          color: "red"
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
 * Parses list of list shapes
 */
it("parses_list_of_list_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"ListOfLists":[["abc","mno","xyz"],["hjk","qrs","tuv"]]}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      ListOfLists: [
        ["abc", "mno", "xyz"],

        ["hjk", "qrs", "tuv"]
      ]
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses list of structure shapes
 */
it("parses_list_of_structure_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"ListOfStructs":[{"Value":"value-1"},{"Value":"value-2"}]}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      ListOfStructs: [
        {
          Value: "value-1"
        },

        {
          Value: "value-2"
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
 * Parses list of recursive structure shapes
 */
it("parses_list_of_recursive_structure_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"RecursiveList":[{"RecursiveList":[{"RecursiveList":[{"String":"value"}]}]}]}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      RecursiveList: [
        {
          RecursiveList: [
            {
              RecursiveList: [
                {
                  String: "value"
                }
              ]
            }
          ]
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
 * Parses map shapes
 */
it("parses_map_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"MapOfStrings":{"size":"large","color":"red"}}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      MapOfStrings: {
        size: "large",

        color: "red"
      }
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses map of list shapes
 */
it("parses_map_of_list_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"MapOfListsOfStrings":{"sizes":["large","small"],"colors":["red","green"]}}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      MapOfListsOfStrings: {
        sizes: ["large", "small"],

        colors: ["red", "green"]
      }
    }
  ][0];
  Object.keys(paramsToValidate).forEach(param => {
    expect(r[param]).toBeDefined();
    expect(equivalentContents(r[param], paramsToValidate[param])).toBe(true);
  });
});

/**
 * Parses map of map shapes
 */
it("parses_map_of_map_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"MapOfMaps":{"sizes":{"large":"L","medium":"M"},"colors":{"red":"R","blue":"B"}}}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      MapOfMaps: {
        sizes: {
          large: "L",

          medium: "M"
        },

        colors: {
          red: "R",

          blue: "B"
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
 * Parses map of structure shapes
 */
it("parses_map_of_structure_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"MapOfStructs":{"size":{"Value":"small"},"color":{"Value":"red"}}}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      MapOfStructs: {
        size: {
          Value: "small"
        },

        color: {
          Value: "red"
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
 * Parses map of recursive structure shapes
 */
it("parses_map_of_recursive_structure_shapes:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      undefined,
      `{"RecursiveMap":{"key-1":{"RecursiveMap":{"key-2":{"RecursiveMap":{"key-3":{"String":"value"}}}}}}}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
      RecursiveMap: {
        "key-1": {
          RecursiveMap: {
            "key-2": {
              RecursiveMap: {
                "key-3": {
                  String: "value"
                }
              }
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
 * Parses the request id from the response
 */
it("parses_the_request_id_from_the_response:Response", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new ResponseDeserializationTestHandler(
      true,
      200,
      {
        "x-amzn-requestid": "amazon-uniq-request-id"
      },
      `{}`
    )
  });

  const params: any = {};
  const command = new KitchenSinkOperationCommand(params);

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
 * Can call operations with no input or output
 */
it("can_call_operation_with_no_input_or_output:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new OperationWithOptionalInputOutputCommand({} as any);
  try {
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
    expect(r.headers["Content-Type"]).toBe("application/x-amz-json-1.1");
    expect(r.headers["X-Amz-Target"]).toBeDefined();
    expect(r.headers["X-Amz-Target"]).toBe(
      "JsonProtocol.OperationWithOptionalInputOutput"
    );

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
 * Can invoke operations with optional input
 */
it("can_call_operation_with_optional_input:Request", async () => {
  const client = new JsonProtocolClient({
    requestHandler: new RequestSerializationTestHandler()
  });

  const command = new OperationWithOptionalInputOutputCommand({
    Value: "Hi"
  } as any);
  try {
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
    expect(r.headers["Content-Type"]).toBe("application/x-amz-json-1.1");
    expect(r.headers["X-Amz-Target"]).toBeDefined();
    expect(r.headers["X-Amz-Target"]).toBe(
      "JsonProtocol.OperationWithOptionalInputOutput"
    );

    expect(r.body).toBeDefined();
    const bodyString = `{\"Value\":\"Hi\"}`;
    const unequalParts: any = compareEquivalentBodies(
      bodyString,
      r.body.toString()
    );
    expect(unequalParts).toBeUndefined();
  }
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
