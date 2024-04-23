// smithy-typescript generated code
import { NoOpLogger } from "@smithy/smithy-client";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { defaultRegionInfoProvider } from "./endpoints";
import { JSONRPC10ClientConfig } from "./JSONRPC10Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: JSONRPC10ClientConfig) => {
  return {
    apiVersion: "2020-07-14",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    extensions: config?.extensions ?? [],
    logger: config?.logger ?? new NoOpLogger(),
    regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
    serviceId: config?.serviceId ?? "JSON RPC 10",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
