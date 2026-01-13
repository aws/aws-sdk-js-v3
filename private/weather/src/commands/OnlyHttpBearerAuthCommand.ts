// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { OnlyHttpBearerAuth$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OnlyHttpBearerAuthCommand}.
 */
export interface OnlyHttpBearerAuthCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlyHttpBearerAuthCommand}.
 */
export interface OnlyHttpBearerAuthCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlyHttpBearerAuthCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, OnlyHttpBearerAuthCommand } = require("@aws-sdk/weather"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/weather";
 * const config = {}; // type is WeatherClientConfig
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlyHttpBearerAuthCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlyHttpBearerAuthCommandInput - {@link OnlyHttpBearerAuthCommandInput}
 * @returns {@link OnlyHttpBearerAuthCommandOutput}
 * @see {@link OnlyHttpBearerAuthCommandInput} for command's `input` shape.
 * @see {@link OnlyHttpBearerAuthCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class OnlyHttpBearerAuthCommand extends $Command
  .classBuilder<
    OnlyHttpBearerAuthCommandInput,
    OnlyHttpBearerAuthCommandOutput,
    WeatherClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Weather", "OnlyHttpBearerAuth", {})
  .n("WeatherClient", "OnlyHttpBearerAuthCommand")
  .sc(OnlyHttpBearerAuth$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlyHttpBearerAuthCommandInput;
      output: OnlyHttpBearerAuthCommandOutput;
    };
  };
}
