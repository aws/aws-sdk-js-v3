// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { Hash } from "@aws-sdk/hash-node";
import { NODE_MAX_ATTEMPT_CONFIG_OPTIONS, NODE_RETRY_MODE_CONFIG_OPTIONS } from "@aws-sdk/middleware-retry";
import { loadConfig as loadNodeConfig } from "@aws-sdk/node-config-provider";
import { NodeHttpHandler as RequestHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { DEFAULT_RETRY_MODE } from "@aws-sdk/util-retry";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { EchoServiceClientConfig } from "./EchoServiceClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@aws-sdk/smithy-client";
import { resolveDefaultsModeConfig } from "@aws-sdk/util-defaults-mode-node";
import { emitWarningIfUnsupportedVersion } from "@aws-sdk/smithy-client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EchoServiceClientConfig) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider:
      config?.defaultUserAgentProvider ?? defaultUserAgent({ clientVersion: packageInfo.version }),
    maxAttempts: config?.maxAttempts ?? loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    requestHandler: config?.requestHandler ?? new RequestHandler(defaultConfigProvider),
    retryMode:
      config?.retryMode ??
      loadNodeConfig({
        ...NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
      }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
  };
};
