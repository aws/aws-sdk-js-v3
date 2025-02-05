// smithy-typescript generated code
import { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";
import { de_OnlyHttpBearerAuthOptionalCommand, se_OnlyHttpBearerAuthOptionalCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link OnlyHttpBearerAuthOptionalCommand}.
 */
export interface OnlyHttpBearerAuthOptionalCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlyHttpBearerAuthOptionalCommand}.
 */
export interface OnlyHttpBearerAuthOptionalCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlyHttpBearerAuthOptionalCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, OnlyHttpBearerAuthOptionalCommand } = require("@aws-sdk/weather"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlyHttpBearerAuthOptionalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlyHttpBearerAuthOptionalCommandInput - {@link OnlyHttpBearerAuthOptionalCommandInput}
 * @returns {@link OnlyHttpBearerAuthOptionalCommandOutput}
 * @see {@link OnlyHttpBearerAuthOptionalCommandInput} for command's `input` shape.
 * @see {@link OnlyHttpBearerAuthOptionalCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 */
export class OnlyHttpBearerAuthOptionalCommand extends $Command
  .classBuilder<
    OnlyHttpBearerAuthOptionalCommandInput,
    OnlyHttpBearerAuthOptionalCommandOutput,
    WeatherClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("Weather", "OnlyHttpBearerAuthOptional", {})
  .n("WeatherClient", "OnlyHttpBearerAuthOptionalCommand")
  .f(void 0, void 0)
  .ser(se_OnlyHttpBearerAuthOptionalCommand)
  .de(de_OnlyHttpBearerAuthOptionalCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlyHttpBearerAuthOptionalCommandInput;
      output: OnlyHttpBearerAuthOptionalCommandOutput;
    };
  };
}
