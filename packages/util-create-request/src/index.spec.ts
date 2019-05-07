import { createRequest } from "./index";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3-node";
import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import { Command, Handler, HandlerExecutionContext } from "@aws-sdk/types";

describe("create-request", () => {
  const clientStack = new MiddlewareStack();
  clientStack.add();
  const client = {
    middlewareStack: clientStack
  };
  it("should concat initialize and serialize middlewares from client and command", () => {});
});

(async () => {
  try {
    const request = await createRequest(
      new S3Client({ region: "us-west-2" }),
      new GetObjectCommand({
        Bucket: "js-sdk-test-bucket",
        Key: "key"
      })
    );
    console.log(request);
  } catch (e) {
    console.log(e);
  }
})();
