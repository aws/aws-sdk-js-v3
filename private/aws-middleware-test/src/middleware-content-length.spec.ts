import { AccessAnalyzer } from "@aws-sdk/client-accessanalyzer";
import { S3 } from "@aws-sdk/client-s3";
import { XRay } from "@aws-sdk/client-xray";

import { requireRequestsFrom } from "../../aws-util-test/src";

describe("middleware-content-length", () => {
  describe(AccessAnalyzer.name, () => {
    it("should not add content-length if no body", async () => {
      const client = new AccessAnalyzer({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        headers: {
          "content-length": /undefined/,
        },
      });

      await client.getAnalyzer({
        analyzerName: "my-analyzer",
      });

      expect.assertions(1);
    });

    it("should add content-length if body present", async () => {
      const client = new AccessAnalyzer({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        headers: {
          "content-length": /106/,
        },
      });

      await client.createAccessPreview({
        configurations: {},
        analyzerArn: "my-analyzer-arn",
      });

      expect.assertions(1);
    });
  });

  describe(S3.name, () => {
    it("should not add content-length if no body", async () => {
      const client = new S3({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        headers: {
          "content-length": /undefined/,
        },
      });

      await client.getObject({
        Bucket: "b",
        Key: "k",
      });

      expect.assertions(1);
    });

    it("should add content-length if body present", async () => {
      const client = new S3({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        headers: {
          "content-length": /4/,
        },
      });

      await client.putObject({
        Bucket: "b",
        Key: "k",
        Body: Buffer.from("abcd"),
      });

      expect.assertions(1);
    });
  });

  describe(XRay.name, () => {
    it("should add content-length if body present", async () => {
      const client = new XRay({ region: "us-west-2" });
      requireRequestsFrom(client).toMatch({
        headers: {
          "content-length": /24/,
        },
      });

      await client.getGroup({
        GroupName: "my-group",
      });

      expect.assertions(1);
    });
  });
});
