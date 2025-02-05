// smithy-typescript generated code
import { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";
import { de_OnlyCustomAuthCommand, se_OnlyCustomAuthCommand } from "../protocols/Aws_restJson1";
import { getSigV4AuthPlugin } from "@aws-sdk/middleware-signing";
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
 * import { WeatherClient, OnlyCustomAuthCommand } from "@aws-sdk/weather-legacy-auth"; // ES Modules import
 * // const { WeatherClient, OnlyCustomAuthCommand } = require("@aws-sdk/weather-legacy-auth"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 */
export class OnlyCustomAuthCommand extends $Command
  .classBuilder<
    OnlyCustomAuthCommandInput,
    OnlyCustomAuthCommandOutput,
    WeatherClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize), getSigV4AuthPlugin(config)];
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
