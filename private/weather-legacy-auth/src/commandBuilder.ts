// smithy-typescript generated code
import { getSigV4AuthPlugin } from "@aws-sdk/middleware-signing";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import { getHttpApiKeyAuthPlugin } from "./middleware/HttpApiKeyAuth";
import type { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "./WeatherClient";


/**
 * @internal
 */
export const command = makeBuilder<WeatherClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "Weather", "WeatherClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
  getSigV4AuthPlugin(config),
];

/**
 * @internal
 */
export const _mw1 = (Command: any, cs: any, config: any, o: any) => [
];

/**
 * @internal
 */
export const _mw2 = (Command: any, cs: any, config: any, o: any) => [
  getSigV4AuthPlugin(config),
  getHttpApiKeyAuthPlugin(config, {
    in: "header",
    name: "X-Api-Key",
  }),
];
