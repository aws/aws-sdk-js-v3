import { S3Control } from "@aws-sdk/client-s3-control";

import { requireRequestsFrom } from "../../aws-util-test/src";

describe("middleware-apply-body-checksum", () => {
  describe(S3Control.name, () => {
    it("should add body-checksum", async () => {
      const client = new S3Control({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        headers: {
          "content-md5": /^.{22}(==)?$/i,
        },
      });

      await client.createBucket({
        Bucket: "my-test-bucket",
      });

      await client.createMultiRegionAccessPoint({
        AccountId: "1234567890",
        Details: {
          Name: "mine-resistant-ambush-protected",
          Regions: [
            {
              Bucket: "my-test-bucket",
            },
            {
              Bucket: "my-other-test-bucket",
            },
          ],
        },
      });

      await client.putBucketPolicy({
        AccountId: "1234567890",
        Bucket: "my-test-bucket",
        Policy: '{ "my-policy": "" }',
      });

      expect.assertions(3);
    });
  });
});
