// smithy-typescript generated code
import { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";
import { de_OnlyHttpApiKeyAuthOptionalCommand, se_OnlyHttpApiKeyAuthOptionalCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link OnlyHttpApiKeyAuthOptionalCommand}.
 */
export interface OnlyHttpApiKeyAuthOptionalCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlyHttpApiKeyAuthOptionalCommand}.
 */
export interface OnlyHttpApiKeyAuthOptionalCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlyHttpApiKeyAuthOptionalCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, OnlyHttpApiKeyAuthOptionalCommand } = require("@aws-sdk/weather"); // CommonJS import
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlyHttpApiKeyAuthOptionalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlyHttpApiKeyAuthOptionalCommandInput - {@link OnlyHttpApiKeyAuthOptionalCommandInput}
 * @returns {@link OnlyHttpApiKeyAuthOptionalCommandOutput}
 * @see {@link OnlyHttpApiKeyAuthOptionalCommandInput} for command's `input` shape.
 * @see {@link OnlyHttpApiKeyAuthOptionalCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 */
export class OnlyHttpApiKeyAuthOptionalCommand extends $Command
  .classBuilder<
    OnlyHttpApiKeyAuthOptionalCommandInput,
    OnlyHttpApiKeyAuthOptionalCommandOutput,
    WeatherClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("Weather", "OnlyHttpApiKeyAuthOptional", {})
  .n("WeatherClient", "OnlyHttpApiKeyAuthOptionalCommand")
  .f(void 0, void 0)
  .ser(se_OnlyHttpApiKeyAuthOptionalCommand)
  .de(de_OnlyHttpApiKeyAuthOptionalCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlyHttpApiKeyAuthOptionalCommandInput;
      output: OnlyHttpApiKeyAuthOptionalCommandOutput;
    };
  };
}
