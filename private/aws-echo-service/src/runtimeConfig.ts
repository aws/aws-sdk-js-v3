// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { createDefaultUserAgentProvider, NODE_APP_ID_CONFIG_OPTIONS } from "@aws-sdk/core/client";
import { emitWarningIfUnsupportedVersion, loadConfigsForDefaultMode } from "@smithy/core/client";
import { loadConfig as loadNodeConfig, resolveDefaultsModeConfig } from "@smithy/core/config";
import {
  DEFAULT_RETRY_MODE,
  NODE_MAX_ATTEMPT_CONFIG_OPTIONS,
  NODE_RETRY_MODE_CONFIG_OPTIONS,
} from "@smithy/core/retry";
import { calculateBodyLength, Hash } from "@smithy/core/serde";
import { NodeHttpHandler as RequestHandler, streamCollector } from "@smithy/node-http-handler";

import type { EchoServiceClientConfig } from "./EchoServiceClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EchoServiceClientConfig) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
    const loaderConfig = {
    profile: config?.profile,
    logger: clientSharedValues.logger,
  };
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({clientVersion: packageInfo.version}),
    maxAttempts: config?.maxAttempts ?? loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
    requestHandler: RequestHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode:
      config?.retryMode ??
      loadNodeConfig(
        {
          ...NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
        },
        config
      ),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
    userAgentAppId: config?.userAgentAppId ?? loadNodeConfig(NODE_APP_ID_CONFIG_OPTIONS, loaderConfig),
  };
};
