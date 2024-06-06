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
 * import { WeatherClient, OnlyHttpApiKeyAndBearerAuthReversedCommand } from "@aws-sdk/weather-experimental-identity-and-auth"; // ES Modules import
 * // const { WeatherClient, OnlyHttpApiKeyAndBearerAuthReversedCommand } = require("@aws-sdk/weather-experimental-identity-and-auth"); // CommonJS import
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
 */
export class OnlyHttpApiKeyAndBearerAuthReversedCommand extends $Command
  .classBuilder<
    OnlyHttpApiKeyAndBearerAuthReversedCommandInput,
    OnlyHttpApiKeyAndBearerAuthReversedCommandOutput,
    WeatherClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("Weather", "OnlyHttpApiKeyAndBearerAuthReversed", {})
  .n("WeatherClient", "OnlyHttpApiKeyAndBearerAuthReversedCommand")
  .f(void 0, void 0)
  .ser(() => {
    throw new Error("No supported protocol was found");
  })
  .de(() => {
    throw new Error("No supported protocol was found");
  })
  .build() {}
