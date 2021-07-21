import packageInfo from "./package.json";

import { Hash } from "@aws-sdk/hash-node";
import { NODE_MAX_ATTEMPT_CONFIG_OPTIONS, NODE_RETRY_MODE_CONFIG_OPTIONS } from "@aws-sdk/middleware-retry";
import { loadConfig as loadNodeConfig } from "@aws-sdk/node-config-provider";
import { NodeHttpHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-node";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import { RestJsonProtocolClientConfig } from "./RestJsonProtocolClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RestJsonProtocolClientConfig) => {
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    runtime: "node",
    base64Decoder: config.base64Decoder ?? fromBase64,
    base64Encoder: config.base64Encoder ?? toBase64,
    bodyLengthChecker: config.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider:
      config.defaultUserAgentProvider ??
      defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version }),
    maxAttempts: config.maxAttempts ?? loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    requestHandler: config.requestHandler ?? new NodeHttpHandler(),
    retryModeProvider: config.retryModeProvider ?? loadNodeConfig(NODE_RETRY_MODE_CONFIG_OPTIONS),
    sha256: config.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config.streamCollector ?? streamCollector,
    utf8Decoder: config.utf8Decoder ?? fromUtf8,
    utf8Encoder: config.utf8Encoder ?? toUtf8,
  };
};
