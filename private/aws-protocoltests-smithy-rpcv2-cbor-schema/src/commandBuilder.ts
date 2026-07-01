// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./RpcV2ProtocolClient";


/**
 * @internal
 */
export const command = makeBuilder<RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "RpcV2Protocol", "RpcV2ProtocolClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
