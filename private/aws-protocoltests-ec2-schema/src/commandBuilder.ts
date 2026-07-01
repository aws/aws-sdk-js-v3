// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { getCompressionPlugin } from "@smithy/middleware-compression";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./EC2ProtocolClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AwsEc2", "EC2ProtocolClient", getEndpointPlugin);

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
