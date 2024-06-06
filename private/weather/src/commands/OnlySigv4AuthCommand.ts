// smithy-typescript generated code
import { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";
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
 * The input for {@link OnlySigv4AuthCommand}.
 */
export interface OnlySigv4AuthCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlySigv4AuthCommand}.
 */
export interface OnlySigv4AuthCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlySigv4AuthCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, OnlySigv4AuthCommand } = require("@aws-sdk/weather"); // CommonJS import
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlySigv4AuthCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlySigv4AuthCommandInput - {@link OnlySigv4AuthCommandInput}
 * @returns {@link OnlySigv4AuthCommandOutput}
 * @see {@link OnlySigv4AuthCommandInput} for command's `input` shape.
 * @see {@link OnlySigv4AuthCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 */
export class OnlySigv4AuthCommand extends $Command
  .classBuilder<
    OnlySigv4AuthCommandInput,
    OnlySigv4AuthCommandOutput,
    WeatherClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize), getSigV4AuthPlugin(config)];
  })
  .s("Weather", "OnlySigv4Auth", {})
  .n("WeatherClient", "OnlySigv4AuthCommand")
  .f(void 0, void 0)
  .ser(() => {
    throw new Error("No supported protocol was found");
  })
  .de(() => {
    throw new Error("No supported protocol was found");
  })
  .build() {}
