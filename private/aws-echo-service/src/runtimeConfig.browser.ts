// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { Sha256 } from "@aws-crypto/sha256-browser";
import { FetchHttpHandler as RequestHandler, streamCollector } from "@aws-sdk/fetch-http-handler";
import { calculateBodyLength } from "@aws-sdk/util-body-length-browser";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@aws-sdk/util-retry";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { EchoServiceClientConfig } from "./EchoServiceClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@aws-sdk/smithy-client";
import { resolveDefaultsModeConfig } from "@aws-sdk/util-defaults-mode-browser";

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
      config?.defaultUserAgentProvider ?? defaultUserAgent({ clientVersion: packageInfo.version }),
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    requestHandler: config?.requestHandler ?? new RequestHandler(defaultConfigProvider),
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha256: config?.sha256 ?? Sha256,
    streamCollector: config?.streamCollector ?? streamCollector,
  };
};
