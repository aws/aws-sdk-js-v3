import packageInfo from "./package.json";

import { Sha256 } from "@aws-crypto/sha256-browser";
import { FetchHttpHandler, streamCollector } from "@aws-sdk/fetch-http-handler";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@aws-sdk/middleware-retry";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-browser";
import { calculateBodyLength } from "@aws-sdk/util-body-length-browser";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-browser";
import { RestXmlProtocolClientConfig } from "./RestXmlProtocolClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RestXmlProtocolClientConfig) => {
  const clientSharedValues = getSharedRuntimeConfig(config);
  return {
    ...clientSharedValues,
    runtime: "browser",
    base64Decoder: coalesce(config.base64Decoder, fromBase64),
    base64Encoder: coalesce(config.base64Encoder, toBase64),
    bodyLengthChecker: coalesce(config.bodyLengthChecker, calculateBodyLength),
    defaultUserAgentProvider: coalesce(
      config.defaultUserAgentProvider,
      defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version })
    ),
    maxAttempts: coalesce(config.maxAttempts, DEFAULT_MAX_ATTEMPTS),
    requestHandler: coalesce(config.requestHandler, new FetchHttpHandler()),
    retryModeProvider: coalesce(config.retryModeProvider, () => Promise.resolve(DEFAULT_RETRY_MODE)),
    sha256: coalesce(config.sha256, Sha256),
    streamCollector: coalesce(config.streamCollector, streamCollector),
    utf8Decoder: coalesce(config.utf8Decoder, fromUtf8),
    utf8Encoder: coalesce(config.utf8Encoder, toUtf8),
  };
};
