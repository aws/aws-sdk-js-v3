import { S3 } from "@aws-sdk/client-s3";
import { S3Control } from "@aws-sdk/client-s3-control";

import { requireRequestsFrom } from "../../aws-util-test/src";

describe("middleware-endpoint", () => {
  // these are token examples because most endpoint
  // resolution scenarios are covered by a different integration test.

  describe(S3.name, () => {
    it("should resolve endpoints", async () => {
      const client = new S3({
        region: "us-west-2",
        useFipsEndpoint: true,
        useDualstackEndpoint: true,
        useArnRegion: true,
      });
      requireRequestsFrom(client).toMatch({
        hostname: /mrap-name-1234567890.s3-accesspoint-fips.dualstack.us-east-1.amazonaws.com$/,
      });

      await client.headBucket({
        Bucket: "arn:aws:s3:us-east-1:1234567890:accesspoint:mrap-name",
      });

      expect.assertions(1);
    });
  });

  describe(S3Control.name, () => {
    it("should resolve endpoints", async () => {
      const client = new S3Control({
        region: "us-west-2",
        useFipsEndpoint: true,
        useDualstackEndpoint: true,
        useArnRegion: true,
      });
      requireRequestsFrom(client).toMatch({
        hostname: /1234567890.s3-control-fips.dualstack.us-west-2.amazonaws.com$/,
      });

      await client.getBucketReplication({
        AccountId: "1234567890",
        Bucket: "b",
      });

      expect.assertions(1);
    });
  });
});
