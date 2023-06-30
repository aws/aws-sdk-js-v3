import { Lambda } from "@aws-sdk/client-lambda";

import { requireRequestsFrom } from "../../aws-util-test/src";

describe("middleware-retry", () => {
  describe(Lambda.name, () => {
    it("should set retry headers", async () => {
      const client = new Lambda({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        hostname: "lambda.us-west-2.amazonaws.com",
        headers: {
          "amz-sdk-invocation-id":
            /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
          "amz-sdk-request": "attempt=1; max=3",
        },
      });

      await client.invoke({
        FunctionName: "my-function",
      });

      expect.hasAssertions();
    });
  });
});
