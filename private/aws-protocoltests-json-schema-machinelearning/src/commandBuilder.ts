// smithy-typescript generated code
import { getPredictEndpointPlugin } from "@aws-sdk/middleware-sdk-machinelearning";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  MachineLearningClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./MachineLearningClient";


/**
 * @internal
 */
export const command = makeBuilder<MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonML_20141212", "MachineLearningClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
  getPredictEndpointPlugin(config),
];
