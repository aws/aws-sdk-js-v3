// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { getCompressionPlugin } from "@smithy/middleware-compression";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./JSONRPC10Client";


/**
 * @internal
 */
export const command = makeBuilder<JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "JsonRpc10", "JSONRPC10Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];

/**
 * @internal
 */
export const _mw1 = (Command: any, cs: any, config: any, o: any) => [
  getCompressionPlugin(config, {
    encodings: ["gzip"],
  }),
];
