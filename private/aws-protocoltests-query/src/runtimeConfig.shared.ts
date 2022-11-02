// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";

import { defaultRegionInfoProvider } from "./endpoints";
import { QueryProtocolClientConfig } from "./QueryProtocolClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: QueryProtocolClientConfig) => ({
  apiVersion: "2020-01-08",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Query Protocol",
  urlParser: config?.urlParser ?? parseUrl,
});
