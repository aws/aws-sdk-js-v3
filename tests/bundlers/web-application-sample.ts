import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { S3 } from "@aws-sdk/client-s3";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { Upload } from "@aws-sdk/lib-storage";

const s3 = new S3({
  region: "us-west-2",
});

const ddb = new DynamoDB({
  region: "us-west-2",
});

const upload = new Upload({
  client: s3,
  params: {
    Bucket: "b",
    Key: "k",
    Body: "ABCD",
  },
});

const doc = DynamoDBDocument.from(ddb);

export { upload, doc };
