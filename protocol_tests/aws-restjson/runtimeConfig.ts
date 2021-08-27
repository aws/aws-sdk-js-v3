import packageInfo from "./package.json";

import { Hash } from "@aws-sdk/hash-node";
import { fileStreamHasher as streamHasher } from "@aws-sdk/hash-stream-node";
import { NODE_MAX_ATTEMPT_CONFIG_OPTIONS, NODE_RETRY_MODE_CONFIG_OPTIONS } from "@aws-sdk/middleware-retry";
import { loadConfig as loadNodeConfig } from "@aws-sdk/node-config-provider";
import { NodeHttpHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { HashConstructor as __HashConstructor } from "@aws-sdk/types";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-node";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import { RestJsonProtocolClientConfig } from "./RestJsonProtocolClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { emitWarningIfUnsupportedVersion } from "@aws-sdk/smithy-client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RestJsonProtocolClientConfig) => {
  emitWarningIfUnsupportedVersion(process.version);
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider:
      config?.defaultUserAgentProvider ??
      defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version }),
    maxAttempts: config?.maxAttempts ?? loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    md5: config?.md5 ?? Hash.bind(null, "md5"),
    requestHandler: config?.requestHandler ?? new NodeHttpHandler(),
    retryMode: config?.retryMode ?? loadNodeConfig(NODE_RETRY_MODE_CONFIG_OPTIONS),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    streamHasher: config?.streamHasher ?? streamHasher,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
