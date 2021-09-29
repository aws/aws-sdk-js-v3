import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { JSONRPC10ClientConfig } from "./JSONRPC10Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: JSONRPC10ClientConfig) => ({
  apiVersion: "2020-07-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "JSON RPC 10",
  urlParser: config?.urlParser ?? parseUrl,
});
