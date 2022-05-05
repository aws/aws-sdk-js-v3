// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { RestXmlProtocolClientConfig } from "./RestXmlProtocolClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RestXmlProtocolClientConfig) => ({
  apiVersion: "2019-12-16",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Rest Xml Protocol",
  urlParser: config?.urlParser ?? parseUrl,
});
