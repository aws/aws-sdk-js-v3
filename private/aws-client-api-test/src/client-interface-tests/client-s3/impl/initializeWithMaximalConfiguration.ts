import { S3Client } from "@aws-sdk/client-s3";
import { decorateDefaultCredentialProvider } from "@aws-sdk/client-sts";
import {
  NODE_REGION_CONFIG_FILE_OPTIONS,
  NODE_REGION_CONFIG_OPTIONS,
  NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS,
  NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS,
} from "@aws-sdk/config-resolver";
import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";
import { eventStreamSerdeProvider } from "@aws-sdk/eventstream-serde-node";
import { Hash } from "@aws-sdk/hash-node";
import { readableStreamHasher as streamHasher } from "@aws-sdk/hash-stream-node";
import { NODE_USE_ARN_REGION_CONFIG_OPTIONS } from "@aws-sdk/middleware-bucket-endpoint";
import { NODE_MAX_ATTEMPT_CONFIG_OPTIONS, NODE_RETRY_MODE_CONFIG_OPTIONS } from "@aws-sdk/middleware-retry";
import { loadConfig as loadNodeConfig } from "@aws-sdk/node-config-provider";
import { NodeHttpHandler as RequestHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { loadConfigsForDefaultMode } from "@aws-sdk/smithy-client";
import { EndpointV2 } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { resolveDefaultsModeConfig } from "@aws-sdk/util-defaults-mode-node";
import { DEFAULT_RETRY_MODE } from "@aws-sdk/util-retry";
import { getAwsChunkedEncodingStream, sdkStreamMixin } from "@aws-sdk/util-stream-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8";

/**
 * Successful compilation indicates the client can be initialized
 * with maximal configuration.
 */
export const initializeWithMaximalConfiguration = () => {
  const defaultsMode = resolveDefaultsModeConfig({});
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);

  const s3 = new S3Client({
    endpoint: "endpoint",
    customUserAgent: "aws-client-api-test-user-agent",
    apiVersion: "2006-03-01",
    base64Decoder: fromBase64,
    base64Encoder: toBase64,
    disableHostPrefix: false,
    endpointProvider: () => null as unknown as EndpointV2,
    logger: {
      trace() {},
      debug() {},
      info() {},
      warn() {},
      error() {},
    },
    serviceId: "S3",
    signerConstructor: SignatureV4MultiRegion,
    signingEscapePath: false,
    urlParser: parseUrl,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: calculateBodyLength,
    credentialDefaultProvider: decorateDefaultCredentialProvider(credentialDefaultProvider),
    defaultUserAgentProvider: defaultUserAgent({ serviceId: "S3", clientVersion: "3.0.0-client-s3-interface-test" }),
    eventStreamSerdeProvider: eventStreamSerdeProvider,
    getAwsChunkedEncodingStream: getAwsChunkedEncodingStream,
    maxAttempts: loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    md5: Hash.bind(null, "md5"),
    region: loadNodeConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    requestHandler: new RequestHandler(defaultConfigProvider),
    retryMode: loadNodeConfig({
      ...NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
    }),
    sdkStreamMixin: sdkStreamMixin,
    sha1: Hash.bind(null, "sha1"),
    sha256: Hash.bind(null, "sha256"),
    streamCollector: streamCollector,
    streamHasher: streamHasher,
    useArnRegion: loadNodeConfig(NODE_USE_ARN_REGION_CONFIG_OPTIONS),
    useDualstackEndpoint: loadNodeConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
    useFipsEndpoint: loadNodeConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    utf8Decoder: fromUtf8,
    utf8Encoder: toUtf8,
  });

  return s3;
};
