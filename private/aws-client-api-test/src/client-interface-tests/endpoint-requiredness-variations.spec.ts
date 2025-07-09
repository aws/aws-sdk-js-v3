import { EC2ProtocolClient } from "@aws-sdk/aws-protocoltests-ec2";
import { S3Client } from "@aws-sdk/client-s3";
import { WeatherClient } from "@aws-sdk/weather";
import { describe, expect, test as it } from "vitest";

describe("variations in the config endpoint property", () => {
  describe("for an official AWS SDK client", () => {
    it("endpoint is not required", async () => {
      const client = new S3Client({});
      expect(client.config.endpoint).toBeUndefined();
      expect(await client.config.endpoint?.()).toBeUndefined();
    });

    it("endpoint can be set, but must be queried with an undef-check", async () => {
      const client = new S3Client({
        endpoint: "https://localhost",
        forcePathStyle: true,
      });
      expect(await client.config.endpoint?.()).toEqual({
        hostname: "localhost",
        path: "/",
        port: undefined,
        protocol: "https:",
        query: undefined,
      });
    });
  });

  describe("for a Smithy client SDK outside the context of AWS", () => {
    it("requires an endpoint if using the default endpointRuleSet", async () => {
      const client = new WeatherClient({
        endpoint: "https://localhost",
      });
    });

    it("config.endpoint may be queried without undef-check since it was required on input", async () => {
      const client = new WeatherClient({
        endpoint: "https://localhost",
      });
      expect(await client.config.endpoint()).toEqual({
        hostname: "localhost",
        path: "/",
        port: undefined,
        protocol: "https:",
        query: undefined,
      });
    });
  });

  describe("for an internal generated client that uses default AWS regional endpoints", () => {
    // EC2ProtocolClient is a protocol test client that has the aws.api#Service trait,
    // and here it represents generated clients outside the AWS SDK but still an "AWS Service" as far as the
    // code generator can tell.

    it("endpoint is not required", async () => {
      const client = new EC2ProtocolClient({});
      expect(client.config.endpoint).toBeInstanceOf(Function);
    });

    it("endpoint may be set", async () => {
      const client = new EC2ProtocolClient({
        endpoint: "https://localhost",
      });
      expect(await client.config.endpoint()).toEqual({
        hostname: "localhost",
        path: "/",
        port: undefined,
        protocol: "https:",
        query: undefined,
      });
    });

    it("config.endpoint may be queried without undef-check", async () => {
      const client = new EC2ProtocolClient({});
      expect(await client.config.endpoint()).toEqual({
        hostname: "awsec2.us-west-2.amazonaws.com",
        path: "/",
        port: undefined,
        protocol: "https:",
        query: undefined,
      });
    });

    it("fips", async () => {
      const client = new EC2ProtocolClient({
        useFipsEndpoint: true,
      });
      expect(await client.config.endpoint()).toEqual({
        hostname: "awsec2-fips.us-west-2.amazonaws.com",
        path: "/",
        port: undefined,
        protocol: "https:",
        query: undefined,
      });
    });

    it("dualstack", async () => {
      const client = new EC2ProtocolClient({ useDualstackEndpoint: true });
      expect(await client.config.endpoint()).toEqual({
        hostname: "awsec2.us-west-2.api.aws",
        path: "/",
        port: undefined,
        protocol: "https:",
        query: undefined,
      });
    });
  });
});
