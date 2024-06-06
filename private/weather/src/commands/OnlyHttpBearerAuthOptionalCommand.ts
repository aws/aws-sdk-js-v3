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
  .ser(() => {
    throw new Error("No supported protocol was found");
  })
  .de(() => {
    throw new Error("No supported protocol was found");
  })
  .build() {}
