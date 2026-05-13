// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { Sha256 } from "@aws-crypto/sha256-browser";
import { createDefaultUserAgentProvider } from "@aws-sdk/core/client";
import { invalidProvider, loadConfigsForDefaultMode } from "@smithy/core/client";
import {
  DEFAULT_USE_DUALSTACK_ENDPOINT,
  DEFAULT_USE_FIPS_ENDPOINT,
  resolveDefaultsModeConfig,
} from "@smithy/core/config";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@smithy/core/retry";
import { calculateBodyLength } from "@smithy/core/serde";
import { FetchHttpHandler as RequestHandler, streamCollector } from "@smithy/fetch-http-handler";
import {
  DEFAULT_DISABLE_REQUEST_COMPRESSION,
  DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES,
} from "@smithy/middleware-compression";

import type { RestXmlProtocolClientConfig } from "./RestXmlProtocolClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RestXmlProtocolClientConfig) => {
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "browser",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_: unknown) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version}),
    disableRequestCompression: config?.disableRequestCompression ?? DEFAULT_DISABLE_REQUEST_COMPRESSION,
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    region: config?.region ?? invalidProvider("Region is missing"),
    requestHandler: RequestHandler.create(config?.requestHandler ?? defaultConfigProvider),
    requestMinCompressionSizeBytes: config?.requestMinCompressionSizeBytes ?? DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES,
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha256: config?.sha256 ?? Sha256,
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT)),
  };
};
