import { Lambda } from "@aws-sdk/client-lambda";
import { HttpResponse } from "@aws-sdk/protocol-http";
import { HttpRequest as IHttpRequest } from "@aws-sdk/types";
import { Uint8ArrayBlobAdapter } from "@aws-sdk/util-stream";
import { fromUtf8 } from "@aws-sdk/util-utf8";
import { Readable } from "stream";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("util-stream", () => {
  describe(Lambda.name, () => {
    it("should be uniform between string and Uint8Array payloads", async () => {
      const client = new Lambda({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        method: "POST",
        hostname: "lambda.us-west-2.amazonaws.com",
        query: {},
        headers: {
          "content-type": "application/octet-stream",
          "content-length": "17",
          host: "lambda.us-west-2.amazonaws.com",
        },
        body(raw) {
          expect(raw.toString("utf-8")).toEqual('{"hello":"world"}');
        },
        protocol: "https:",
        path: "/2015-03-31/functions/echo/invocations",
      });

      // string
      await client.invoke({
        FunctionName: "echo",
        Payload: JSON.stringify({
          hello: "world",
        }),
      });

      // Uint8Array
      await client.invoke({
        FunctionName: "echo",
        Payload: Buffer.from(
          JSON.stringify({
            hello: "world",
          })
        ),
      });
    });
  });

  describe("blob helper integration", () => {
    const FunctionName = "echo";

    const lambda = new Lambda({
      region: "us-west-2",
    });

    requireRequestsFrom(lambda).toMatch({
      method: "POST",
      hostname: "lambda.us-west-2.amazonaws.com",
      query: {},
      headers: {
        "content-type": "application/octet-stream",
        host: "lambda.us-west-2.amazonaws.com",
      },
      protocol: "https:",
      path: "/2015-03-31/functions/echo/invocations",
    });

    lambda.config.requestHandler = new (class {
      async handle(request: IHttpRequest) {
        return {
          response: new HttpResponse({
            statusCode: 200,
            body: typeof request.body === "string" ? fromUtf8(request.body) : Uint8Array.from(request.body),
          }),
        };
      }
    })();

    it("should allow string as payload blob and allow conversion of output payload blob to string", async () => {
      const payload = JSON.stringify({ hello: "world" });
      const invoke = await lambda.invoke({ FunctionName, Payload: payload });
      expect(JSON.parse(invoke?.Payload?.transformToString() ?? "{}")).toEqual({ hello: "world" });
    });

    it("should allow Uint8Array as payload blob", async () => {
      const payload = Uint8ArrayBlobAdapter.fromString(JSON.stringify({ hello: "world" }));
      const invoke = await lambda.invoke({ FunctionName, Payload: payload });
      expect(JSON.parse(invoke?.Payload?.transformToString() ?? "{}")).toEqual({ hello: "world" });
    });

    it("should allow buffer as payload blob", async () => {
      // note: Buffer extends Uint8Array
      const payload = Buffer.from(Uint8ArrayBlobAdapter.fromString(JSON.stringify({ hello: "world" })));
      const invoke = await lambda.invoke({ FunctionName, Payload: payload });
      expect(JSON.parse(invoke?.Payload?.transformToString() ?? "{}")).toEqual({ hello: "world" });
    });

    it("should allow stream as payload blob but not be able to sign it", async () => {
      const payload = Readable.from(Buffer.from(Uint8ArrayBlobAdapter.fromString(JSON.stringify({ hello: "world" }))), {
        encoding: "utf-8",
      });
      expect(JSON.parse(await streamToString(payload))).toEqual({ hello: "world" });
      await lambda.invoke({ FunctionName, Payload: payload }).catch((e) => {
        expect(e.toString()).toContain("InvalidSignatureException");
      });
      expect.hasAssertions();
    });
  });

  function streamToString(stream: Readable): Promise<string> {
    const chunks: any[] = [];
    return new Promise((resolve, reject) => {
      stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
      stream.on("error", (err) => reject(err));
      stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    });
  }
});
