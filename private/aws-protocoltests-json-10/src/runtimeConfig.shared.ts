// smithy-typescript generated code
import { NoOpLogger } from "@aws-sdk/smithy-client";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";

import { defaultRegionInfoProvider } from "./endpoints";
import { JSONRPC10ClientConfig } from "./JSONRPC10Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: JSONRPC10ClientConfig) => ({
  apiVersion: "2020-07-14",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? new NoOpLogger(),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "JSON RPC 10",
  urlParser: config?.urlParser ?? parseUrl,
});
