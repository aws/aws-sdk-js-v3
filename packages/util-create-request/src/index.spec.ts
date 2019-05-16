import { createRequest } from "./index";
import {
  GetObjectCommand,
  S3Client,
  InputTypesUnion,
  OutputTypesUnion,
  GetObjectInput,
  GetObjectOutput
} from "@aws-sdk/client-s3-node";

// describe("create-request", () => {
//   const clientStack = new MiddlewareStack();
//   const client = {
//     middlewareStack: clientStack
//   };
//   it("should concat initialize and serialize middlewares from client and command", () => {});
// });

(async () => {
  try {
    const request = await createRequest<
      InputTypesUnion,
      GetObjectInput,
      OutputTypesUnion,
      GetObjectOutput
    >(
      new S3Client({}),
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
