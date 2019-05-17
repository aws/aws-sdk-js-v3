import { createRequest } from "./index";
import {
  GetObjectCommand,
  S3Client,
  InputTypesUnion,
  OutputTypesUnion,
  GetObjectInput,
  GetObjectOutput
} from "@aws-sdk/client-s3-node";
import { AWSClient, MetadataBearer } from "@aws-sdk/types";
// import { S3Client } from '@aws-sdk/client-s3-browser';

// describe("create-request", () => {
//   const clientStack = new MiddlewareStack();
//   const client = {
//     middlewareStack: clientStack
//   };
//   it("should concat initialize and serialize middlewares from client and command", () => {});
// });

// const client: AWSClient<object, MetadataBearer, any> = new S3Client({});

(async () => {
  try {
    const request = await createRequest(
      new S3Client({
        credentials: { accessKeyId: "key", secretAccessKey: "secret" },
        region: "us-east-2"
      }),
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
