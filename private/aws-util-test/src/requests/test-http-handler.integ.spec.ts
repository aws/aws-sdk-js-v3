import { describe, expect, test as it } from "vitest";

// import { JsonProtocol } from "@aws-sdk/aws-protocoltests-json";
// CI has difficult importing a named private client from the workspace.
// This file remains as a code sample.
import { TestHttpHandler } from "./test-http-handler";

describe(TestHttpHandler.name, () => {
  it("checks requests using matchers", async () => {
    // const client = new JsonProtocol({});
    // expect.assertions(15);
    // new TestHttpHandler({
    //   method: "POST",
    //   hostname: /jsonprotocol\.(.*?)\.amazonaws\.com/,
    //   protocol: "https:",
    //   // port: void 0, // entries are optional
    //   query: {},
    //   headers: {
    //     "content-type": /./,
    //     "x-amz-target": "JsonProtocol.KitchenSinkOperation",
    //     "content-length": "573",
    //     host: /jsonprotocol\.(.*?)\.amazonaws\.com/,
    //     "/x-amz-user-.+/": /aws-sdk-js\/3\.\d+\.\d+/,
    //     "user-agent": /aws-sdk-js\/3\.\d+\.\d+/,
    //     "amz-sdk-invocation-id": /.{32}$/,
    //     "amz-sdk-request": "attempt=1; max=3",
    //     "x-amz-date": /\d{4}\d{4}T/ || "20230420T170708Z",
    //     "x-amz-content-sha256": /^.{50,}$/,
    //     authorization: /AWS4-HMAC-SHA256 Credential=.{100,}$/,
    //   },
    //   body: (body) => {
    //     const parse = JSON.parse(body);
    //     expect(parse.Blob).toEqual("");
    //     expect(parse.Boolean).toBe(false);
    //   },
    // }).watch(client);
    // await client.kitchenSinkOperation({
    //   Blob: new Uint8Array(),
    //   Boolean: false,
    //   Double: 0,
    //   EmptyStruct: {},
    //   Float: 0.0,
    //   HttpdateTimestamp: new Date(),
    //   Integer: 0,
    //   Iso8601Timestamp: new Date(),
    //   JsonValue: "{}",
    //   ListOfLists: [[]],
    //   ListOfMapsOfStrings: [{}],
    //   ListOfStrings: ["hey"],
    //   ListOfStructs: [{}],
    //   Long: 0,
    //   MapOfListsOfStrings: {
    //     a: [],
    //   },
    //   MapOfMaps: {
    //     a: {
    //       a: "hey",
    //     },
    //   },
    //   MapOfStrings: {
    //     a: "hey",
    //   },
    //   MapOfStructs: {
    //     a: {},
    //   },
    //   RecursiveList: [],
    //   RecursiveMap: {
    //     a: {},
    //   },
    //   RecursiveStruct: {},
    //   SimpleStruct: {},
    //   String: "hello",
    //   StructWithJsonName: {},
    //   Timestamp: new Date(),
    //   UnixTimestamp: new Date(),
    // });
  });
});
