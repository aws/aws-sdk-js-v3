import type { S3ClientConfigType } from "@aws-sdk/client-s3";
import { S3Client } from "@aws-sdk/client-s3";
import { defaultUserAgent } from "@aws-sdk/core/client";
import { AwsRestXmlProtocol } from "@aws-sdk/core/protocols";
import { defaultProvider as credentialDefaultProvider, defaultProvider } from "@aws-sdk/credential-provider-node";
import { NODE_USE_ARN_REGION_CONFIG_OPTIONS } from "@aws-sdk/middleware-sdk-s3/s3";
import {
  DEFAULT_REQUEST_CHECKSUM_CALCULATION,
  DEFAULT_RESPONSE_CHECKSUM_VALIDATION,
} from "@aws-sdk/middleware-flexible-checksums";
import { S3ExpressIdentityProviderImpl } from "@aws-sdk/middleware-sdk-s3/s3";
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { readableStreamHasher as streamHasher } from "@smithy/core/checksum";
import { loadConfigsForDefaultMode } from "@smithy/core/client";
import {
  loadConfig as loadNodeConfig,
  NODE_REGION_CONFIG_FILE_OPTIONS,
  NODE_REGION_CONFIG_OPTIONS,
  NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS,
  NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS,
  resolveDefaultsModeConfig,
} from "@smithy/core/config";
import { eventStreamSerdeProvider } from "@smithy/core/event-streams";
import { parseUrl } from "@smithy/core/protocols";
import {
  ConfiguredRetryStrategy,
  DEFAULT_RETRY_MODE,
  NODE_MAX_ATTEMPT_CONFIG_OPTIONS,
  NODE_RETRY_MODE_CONFIG_OPTIONS,
  StandardRetryStrategy,
} from "@smithy/core/retry";
import {
  calculateBodyLength,
  fromBase64,
  fromUtf8,
  getAwsChunkedEncodingStream,
  Hash,
  sdkStreamMixin,
  toBase64,
  toUtf8,
} from "@smithy/core/serde";
import { NodeHttpHandler, streamCollector } from "@smithy/node-http-handler";
import type { EndpointV2, HttpAuthSchemeProvider } from "@smithy/types";
import https from "https";

/**
 * Successful compilation indicates the client can be initialized
 * with maximal configuration.
 */
export const initializeWithMaximalConfiguration = () => {
  const defaultsMode = resolveDefaultsModeConfig({});
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);

  const config: Required<S3ClientConfigType> = {
    // BEGIN user options
    profile: "default",
    region: loadNodeConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    credentials: defaultProvider({}),
    endpoint: "endpoint",
    cacheMiddleware: true,
    requestHandler: new NodeHttpHandler({
      httpsAgent: new https.Agent({
        maxSockets: 200,
        keepAlive: true,
      }),
      requestTimeout: 15000,
      connectionTimeout: 6000,
    }),
    retryStrategy:
      new StandardRetryStrategy(3) ||
      new ConfiguredRetryStrategy(3, (attempt) => {
        return attempt * 1_000;
      }),
    retryMode: loadNodeConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
    }),
    maxAttempts: loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    logger: {
      trace() {},
      debug() {},
      info() {},
      warn() {},
      error() {},
    },
    signer: new SignatureV4MultiRegion({
      service: "s3",
      region: "us-west-2",
      credentials: defaultProvider({}),
      sha256: Hash.bind(null, "sha256"),
    }),
    useDualstackEndpoint: loadNodeConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: loadNodeConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    customUserAgent: "aws-client-api-test-user-agent",
    extensions: [],
    tls: true,
    disableHostPrefix: false,
    signingRegion: "us-west-2",
    sigv4aSigningRegionSet: [],
    authSchemePreference: [],
    userAgentAppId: "testApp",
    protocol:
      Math.random() < 0.5
        ? AwsRestXmlProtocol
        : new AwsRestXmlProtocol({
            defaultNamespace: "com.amazonaws.s3",
            xmlNamespace: "http://s3.amazonaws.com/doc/2006-03-01/",
          }),
    protocolSettings: {
      defaultNamespace: "com.amazonaws.s3",
      xmlNamespace: "http://s3.amazonaws.com/doc/2006-03-01/",
    },
    // END user options

    // BEGIN internal options
    apiVersion: "2006-03-01",
    serviceId: "S3",
    runtime: "node",
    systemClockOffset: 0,
    signerConstructor: SignatureV4MultiRegion,
    endpointProvider: () => null as unknown as EndpointV2,
    urlParser: parseUrl,
    base64Decoder: fromBase64,
    base64Encoder: toBase64,
    defaultsMode,
    bodyLengthChecker: calculateBodyLength,
    credentialDefaultProvider: credentialDefaultProvider,
    defaultUserAgentProvider: defaultUserAgent({ serviceId: "S3", clientVersion: "3.0.0-client-s3-interface-test" }),
    eventStreamSerdeProvider: eventStreamSerdeProvider,
    getAwsChunkedEncodingStream: getAwsChunkedEncodingStream,
    md5: Hash.bind(null, "md5"),
    sdkStreamMixin: sdkStreamMixin,
    sha1: Hash.bind(null, "sha1"),
    sha256: Hash.bind(null, "sha256"),
    streamCollector: streamCollector,
    streamHasher: streamHasher,
    utf8Decoder: fromUtf8,
    utf8Encoder: toUtf8,
    httpAuthSchemes: [],
    httpAuthSchemeProvider: (() => null) as unknown as HttpAuthSchemeProvider<any>,
    serviceConfiguredEndpoint: null as never,
    clientContextParams: {},
    // END internal options

    // S3 specific options below
    useAccelerateEndpoint: false,
    useArnRegion: loadNodeConfig(NODE_USE_ARN_REGION_CONFIG_OPTIONS),
    forcePathStyle: false,
    disableMultiregionAccessPoints: false,
    followRegionRedirects: false,
    s3ExpressIdentityProvider: new S3ExpressIdentityProviderImpl("createSessionFn" as any),
    disableS3ExpressSessionAuth: false,
    useGlobalEndpoint: false,
    signingEscapePath: false,
    bucketEndpoint: false,
    requestChecksumCalculation: DEFAULT_REQUEST_CHECKSUM_CALCULATION,
    responseChecksumValidation: DEFAULT_RESPONSE_CHECKSUM_VALIDATION,
    checksumAlgorithms: {
      SHA256: class {
        update() {}
        reset() {}
        async digest() {
          return new Uint8Array();
        }
      },
      CRC64NVME: class {
        update() {}
        reset() {}
        async digest() {
          return new Uint8Array();
        }
      },
      unknown: class {
        update() {}
        reset() {}
        async digest() {
          return new Uint8Array();
        }
      },
    },
    requestStreamBufferSize: 8 * 1024,
    expectContinueHeader: 8 * 1024 * 1024,
  };

  const s3 = new S3Client(config);

  return s3;
};
