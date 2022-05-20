// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EchoServiceClientConfig } from "./EchoServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EchoServiceClientConfig) => ({
  apiVersion: "2018-05-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  urlParser: config?.urlParser ?? parseUrl,
});
