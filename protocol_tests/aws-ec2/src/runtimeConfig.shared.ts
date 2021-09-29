import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EC2ProtocolClientConfig } from "./EC2ProtocolClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EC2ProtocolClientConfig) => ({
  apiVersion: "2020-01-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "EC2 Protocol",
  urlParser: config?.urlParser ?? parseUrl,
});
