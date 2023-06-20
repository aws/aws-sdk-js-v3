import { Lambda } from "@aws-sdk/client-lambda";

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
});
