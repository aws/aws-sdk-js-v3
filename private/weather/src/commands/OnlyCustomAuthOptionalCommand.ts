// smithy-typescript generated code
import { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";
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
 * The input for {@link OnlyCustomAuthOptionalCommand}.
 */
export interface OnlyCustomAuthOptionalCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlyCustomAuthOptionalCommand}.
 */
export interface OnlyCustomAuthOptionalCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlyCustomAuthOptionalCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, OnlyCustomAuthOptionalCommand } = require("@aws-sdk/weather"); // CommonJS import
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlyCustomAuthOptionalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlyCustomAuthOptionalCommandInput - {@link OnlyCustomAuthOptionalCommandInput}
 * @returns {@link OnlyCustomAuthOptionalCommandOutput}
 * @see {@link OnlyCustomAuthOptionalCommandInput} for command's `input` shape.
 * @see {@link OnlyCustomAuthOptionalCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 */
export class OnlyCustomAuthOptionalCommand extends $Command
  .classBuilder<
    OnlyCustomAuthOptionalCommandInput,
    OnlyCustomAuthOptionalCommandOutput,
    WeatherClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("Weather", "OnlyCustomAuthOptional", {})
  .n("WeatherClient", "OnlyCustomAuthOptionalCommand")
  .f(void 0, void 0)
  .ser(() => {
    throw new Error("No supported protocol was found");
  })
  .de(() => {
    throw new Error("No supported protocol was found");
  })
  .build() {}
