import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { QueryProtocolClientConfig } from "./QueryProtocolClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: QueryProtocolClientConfig) => ({
  apiVersion: "2020-01-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Query Protocol",
  urlParser: config?.urlParser ?? parseUrl,
});
