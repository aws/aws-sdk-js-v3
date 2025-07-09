import type { EC2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-ec2";
import { EC2ProtocolClient } from "@aws-sdk/aws-protocoltests-ec2";
import type { S3ClientConfig } from "@aws-sdk/client-s3";
import { S3Client } from "@aws-sdk/client-s3";
import type { WeatherClientConfig } from "@aws-sdk/weather";
import { WeatherClient } from "@aws-sdk/weather";
import type { Endpoint, EndpointV2, Exact, Provider } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

describe("variations in the config endpoint property", () => {
  describe("for an official AWS SDK client", () => {
    it("endpoint is not required", async () => {
      const client = new S3Client({});
      expect(client.config.endpoint).toBeUndefined();
      expect(await client.config.endpoint?.()).toBeUndefined();

      const endpointNotRequired: true = true as Exact<
        S3ClientConfig["endpoint"],
        undefined | string | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>
      >;
      void endpointNotRequired;
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

      const endpointNotGuaranteed: true = true as Exact<typeof client.config.endpoint, undefined | Provider<Endpoint>>;
      void endpointNotGuaranteed;
    });
  });

  describe("for a Smithy client SDK outside the context of AWS", () => {
    it("requires an endpoint if using the default endpointRuleSet", async () => {
      const client = new WeatherClient({
        endpoint: "https://localhost",
      });

      const endpointIsRequired: true = true as Exact<
        WeatherClientConfig["endpoint"],
        string | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>
      >;
      void endpointIsRequired;
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

      const endpointIsGuaranteed: true = true as Exact<typeof client.config.endpoint, Provider<Endpoint>>;
      void endpointIsGuaranteed;
    });
  });

  describe("for an internal generated client that uses default AWS regional endpoints", () => {
    // EC2ProtocolClient is a protocol test client that has the aws.api#Service trait,
    // and here it represents generated clients outside the AWS SDK but still an "AWS Service" as far as the
    // code generator can tell.

    it("endpoint is not required", async () => {
      const client = new EC2ProtocolClient({});
      expect(client.config.endpoint).toBeInstanceOf(Function);

      const endpointNotRequired: true = true as Exact<
        EC2ProtocolClientConfig["endpoint"],
        undefined | string | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>
      >;
      void endpointNotRequired;
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

      const endpointIsGuaranteed: true = true as Exact<typeof client.config.endpoint, Provider<Endpoint>>;
      void endpointIsGuaranteed;
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
