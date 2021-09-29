import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { JsonProtocolClientConfig } from "./JsonProtocolClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: JsonProtocolClientConfig) => ({
  apiVersion: "2018-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Json Protocol",
  urlParser: config?.urlParser ?? parseUrl,
});
