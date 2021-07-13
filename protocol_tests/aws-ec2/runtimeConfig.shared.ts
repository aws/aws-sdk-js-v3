import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EC2ProtocolClientConfig } from "./EC2ProtocolClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EC2ProtocolClientConfig) => ({
  apiVersion: "2020-01-08",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "EC2 Protocol"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
