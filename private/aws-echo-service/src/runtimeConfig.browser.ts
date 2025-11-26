// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { Sha256 } from "@aws-crypto/sha256-browser";
import { createDefaultUserAgentProvider } from "@aws-sdk/util-user-agent-browser";
import { FetchHttpHandler as RequestHandler, streamCollector } from "@smithy/fetch-http-handler";
import { loadConfigsForDefaultMode } from "@smithy/smithy-client";
import { calculateBodyLength } from "@smithy/util-body-length-browser";
import { resolveDefaultsModeConfig } from "@smithy/util-defaults-mode-browser";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@smithy/util-retry";

import type { EchoServiceClientConfig } from "./EchoServiceClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EchoServiceClientConfig) => {
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "browser",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider:
      config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ clientVersion: packageInfo.version }),
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    requestHandler: RequestHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha256: config?.sha256 ?? Sha256,
    streamCollector: config?.streamCollector ?? streamCollector,
  };
};
