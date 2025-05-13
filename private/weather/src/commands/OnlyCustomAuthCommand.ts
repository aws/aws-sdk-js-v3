// smithy-typescript generated code
import { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_OnlyCustomAuthCommand, se_OnlyCustomAuthCommand } from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OnlyCustomAuthCommand}.
 */
export interface OnlyCustomAuthCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlyCustomAuthCommand}.
 */
export interface OnlyCustomAuthCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlyCustomAuthCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, OnlyCustomAuthCommand } = require("@aws-sdk/weather"); // CommonJS import
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlyCustomAuthCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlyCustomAuthCommandInput - {@link OnlyCustomAuthCommandInput}
 * @returns {@link OnlyCustomAuthCommandOutput}
 * @see {@link OnlyCustomAuthCommandInput} for command's `input` shape.
 * @see {@link OnlyCustomAuthCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class OnlyCustomAuthCommand extends $Command
  .classBuilder<
    OnlyCustomAuthCommandInput,
    OnlyCustomAuthCommandOutput,
    WeatherClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Weather", "OnlyCustomAuth", {})
  .n("WeatherClient", "OnlyCustomAuthCommand")
  .f(void 0, void 0)
  .ser(se_OnlyCustomAuthCommand)
  .de(de_OnlyCustomAuthCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlyCustomAuthCommandInput;
      output: OnlyCustomAuthCommandOutput;
    };
  };
}
