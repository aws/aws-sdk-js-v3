// smithy-typescript generated code
import { NoOpLogger } from "@aws-sdk/smithy-client";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";

import { defaultRegionInfoProvider } from "./endpoints";
import { RestXmlProtocolClientConfig } from "./RestXmlProtocolClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RestXmlProtocolClientConfig) => ({
  apiVersion: "2019-12-16",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? new NoOpLogger(),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Rest Xml Protocol",
  urlParser: config?.urlParser ?? parseUrl,
});
