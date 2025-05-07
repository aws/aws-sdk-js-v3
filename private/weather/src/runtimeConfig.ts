// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { NODE_AUTH_SCHEME_PREFERENCE_OPTIONS } from "@aws-sdk/core";
import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";
import { NODE_APP_ID_CONFIG_OPTIONS, createDefaultUserAgentProvider } from "@aws-sdk/util-user-agent-node";
import { NODE_REGION_CONFIG_FILE_OPTIONS, NODE_REGION_CONFIG_OPTIONS } from "@smithy/config-resolver";
import { Hash } from "@smithy/hash-node";
import { NODE_MAX_ATTEMPT_CONFIG_OPTIONS, NODE_RETRY_MODE_CONFIG_OPTIONS } from "@smithy/middleware-retry";
import { loadConfig as loadNodeConfig } from "@smithy/node-config-provider";
import { NodeHttpHandler as RequestHandler, streamCollector } from "@smithy/node-http-handler";
import { calculateBodyLength } from "@smithy/util-body-length-node";
import { DEFAULT_RETRY_MODE } from "@smithy/util-retry";
import { WeatherClientConfig } from "./WeatherClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@smithy/smithy-client";
import { resolveDefaultsModeConfig } from "@smithy/util-defaults-mode-node";
import { emitWarningIfUnsupportedVersion } from "@smithy/smithy-client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WeatherClientConfig) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
  const loaderConfig = { profile: config?.profile, logger: clientSharedValues.logger };
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    authSchemePreference:
      config?.authSchemePreference ?? loadNodeConfig(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentials: config?.credentials ?? credentialDefaultProvider(),
    defaultUserAgentProvider:
      config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ clientVersion: packageInfo.version }),
    maxAttempts: config?.maxAttempts ?? loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
    region:
      config?.region ??
      loadNodeConfig(NODE_REGION_CONFIG_OPTIONS, { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
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
