// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { Sha256 } from "@aws-crypto/sha256-browser";
import { createDefaultUserAgentProvider } from "@aws-sdk/core/client";
import { loadConfigsForDefaultMode } from "@smithy/core/client";
import { resolveDefaultsModeConfig } from "@smithy/core/config";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@smithy/core/retry";
import { calculateBodyLength } from "@smithy/core/serde";
import { FetchHttpHandler as RequestHandler, streamCollector } from "@smithy/fetch-http-handler";

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
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({clientVersion: packageInfo.version}),
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    requestHandler: RequestHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha256: config?.sha256 ?? Sha256,
    streamCollector: config?.streamCollector ?? streamCollector,
  };
};
