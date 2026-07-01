// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getCompressionPlugin } from "@smithy/middleware-compression";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./RestJsonProtocolClient";


/**
 * @internal
 */
export const command = makeBuilder<RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "RestJson", "RestJsonProtocolClient", getEndpointPlugin);

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
  getEventStreamPlugin(config),
];

/**
 * @internal
 */
export const _mw2 = (Command: any, cs: any, config: any, o: any) => [
  getApplyMd5BodyChecksumPlugin(config),
];

/**
 * @internal
 */
export const _mw3 = (Command: any, cs: any, config: any, o: any) => [
  getCompressionPlugin(config, {
    encodings: ["gzip"],
  }),
];
