import { S3ClientResolvedConfig } from "@aws-sdk/client-s3";

import { initializeWithMaximalConfiguration, initializeWithMinimalConfiguration } from "./client-s3-interface";

export type FIELD_INIT_TYPE = "resolvedByConfigResolver" | "resolvedOnlyIfProvided" | "neverResolved";

const expectedResolvedFields: Record<keyof S3ClientResolvedConfig, FIELD_INIT_TYPE> = {
  requestHandler: "resolvedByConfigResolver",
  apiVersion: "resolvedByConfigResolver",
  sha256: "resolvedByConfigResolver",
  urlParser: "resolvedByConfigResolver",
  bodyLengthChecker: "resolvedByConfigResolver",
  streamCollector: "resolvedByConfigResolver",
  base64Decoder: "resolvedByConfigResolver",
  base64Encoder: "resolvedByConfigResolver",
  utf8Decoder: "resolvedByConfigResolver",
  utf8Encoder: "resolvedByConfigResolver",
  runtime: "resolvedByConfigResolver",
  disableHostPrefix: "resolvedByConfigResolver",
  maxAttempts: "resolvedByConfigResolver",
  retryMode: "resolvedByConfigResolver",
  logger: "resolvedByConfigResolver",
  useDualstackEndpoint: "resolvedByConfigResolver",
  useFipsEndpoint: "resolvedByConfigResolver",
  serviceId: "resolvedByConfigResolver",
  region: "resolvedByConfigResolver",
  credentialDefaultProvider: "resolvedByConfigResolver",
  signingEscapePath: "resolvedByConfigResolver",
  useArnRegion: "resolvedByConfigResolver",
  defaultUserAgentProvider: "resolvedByConfigResolver",
  streamHasher: "resolvedByConfigResolver",
  md5: "resolvedByConfigResolver",
  sha1: "resolvedByConfigResolver",
  getAwsChunkedEncodingStream: "resolvedByConfigResolver",
  eventStreamSerdeProvider: "resolvedByConfigResolver",
  defaultsMode: "resolvedByConfigResolver",
  sdkStreamMixin: "resolvedByConfigResolver",
  endpointProvider: "resolvedByConfigResolver",
  tls: "resolvedByConfigResolver",
  isCustomEndpoint: "resolvedByConfigResolver",
  retryStrategy: "resolvedByConfigResolver",
  credentials: "resolvedByConfigResolver",
  signer: "resolvedByConfigResolver",
  systemClockOffset: "resolvedByConfigResolver",
  forcePathStyle: "resolvedByConfigResolver",
  useAccelerateEndpoint: "resolvedByConfigResolver",
  disableMultiregionAccessPoints: "resolvedByConfigResolver",
  customUserAgent: "resolvedOnlyIfProvided",
  eventStreamMarshaller: "resolvedByConfigResolver",
  endpoint: "resolvedOnlyIfProvided",
  defaultSigningName: "resolvedByConfigResolver",
  useGlobalEndpoint: "resolvedByConfigResolver",
};

describe("Client config interface should be stable", () => {
  describe("S3", () => {
    describe("initialization with minimal configuration", () => {
      const client = initializeWithMinimalConfiguration();
      for (const [field, configType] of Object.entries(expectedResolvedFields)) {
        if (configType === "resolvedByConfigResolver") {
          it(`should resolve the field [${field}] after minimal client init`, () => {
            expect(client.config[field as keyof typeof client.config]).toBeDefined();
          });
        } else {
          it(`should not resolve the field [${field}] after minimal client init`, () => {
            expect(client.config[field as keyof typeof client.config]).not.toBeDefined();
          });
        }
      }
    });
    describe("initialization with maximal configuration", () => {
      const client = initializeWithMaximalConfiguration();
      for (const [field, configType] of Object.entries(expectedResolvedFields)) {
        if (configType === "resolvedByConfigResolver" || configType === "resolvedOnlyIfProvided") {
          it(`should resolve the field [${field}] after maximally configured client init`, () => {
            expect(client.config[field as keyof typeof client.config]).toBeDefined();
          });
        } else {
          it(`should not resolve the field [${field}] after maximally configured client init`, () => {
            expect(client.config[field as keyof typeof client.config]).not.toBeDefined();
          });
        }
      }
    });
  });
});
