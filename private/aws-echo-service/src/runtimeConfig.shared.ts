// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";
import { EchoServiceClientConfig } from "./EchoServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EchoServiceClientConfig) => ({
  apiVersion: "2018-05-10",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  urlParser: config?.urlParser ?? parseUrl,
});
