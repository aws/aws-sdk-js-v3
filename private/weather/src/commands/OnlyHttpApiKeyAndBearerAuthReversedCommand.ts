// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { OnlyHttpApiKeyAndBearerAuthReversed$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OnlyHttpApiKeyAndBearerAuthReversedCommand}.
 */
export interface OnlyHttpApiKeyAndBearerAuthReversedCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlyHttpApiKeyAndBearerAuthReversedCommand}.
 */
export interface OnlyHttpApiKeyAndBearerAuthReversedCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlyHttpApiKeyAndBearerAuthReversedCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, OnlyHttpApiKeyAndBearerAuthReversedCommand } = require("@aws-sdk/weather"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/weather";
 * const config = {}; // type is WeatherClientConfig
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlyHttpApiKeyAndBearerAuthReversedCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlyHttpApiKeyAndBearerAuthReversedCommandInput - {@link OnlyHttpApiKeyAndBearerAuthReversedCommandInput}
 * @returns {@link OnlyHttpApiKeyAndBearerAuthReversedCommandOutput}
 * @see {@link OnlyHttpApiKeyAndBearerAuthReversedCommandInput} for command's `input` shape.
 * @see {@link OnlyHttpApiKeyAndBearerAuthReversedCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class OnlyHttpApiKeyAndBearerAuthReversedCommand extends $Command
  .classBuilder<
    OnlyHttpApiKeyAndBearerAuthReversedCommandInput,
    OnlyHttpApiKeyAndBearerAuthReversedCommandOutput,
    WeatherClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Weather", "OnlyHttpApiKeyAndBearerAuthReversed", {})
  .n("WeatherClient", "OnlyHttpApiKeyAndBearerAuthReversedCommand")
  .sc(OnlyHttpApiKeyAndBearerAuthReversed$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlyHttpApiKeyAndBearerAuthReversedCommandInput;
      output: OnlyHttpApiKeyAndBearerAuthReversedCommandOutput;
    };
  };
}
