import { Lambda } from "@aws-sdk/client-lambda";
import { Uint8ArrayBlobAdapter } from "@aws-sdk/util-stream";
import { Readable } from "stream";

import { FunctionName, setup } from "./setup";

describe("blob e2e", () => {
  jest.setTimeout(100000);

  const lambda = new Lambda({
    region: "us-west-2",
  });

  beforeAll(async () => {
    await setup();
  });

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
