import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { QueryProtocolClientConfig } from "./QueryProtocolClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: QueryProtocolClientConfig) => ({
  apiVersion: "2020-01-08",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Query Protocol"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
