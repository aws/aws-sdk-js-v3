// smithy-typescript generated code
import { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";
import { SameAsServiceOutput } from "../models/models_0";
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
 * The input for {@link SameAsServiceCommand}.
 */
export interface SameAsServiceCommandInput {}
/**
 * @public
 *
 * The output of {@link SameAsServiceCommand}.
 */
export interface SameAsServiceCommandOutput extends SameAsServiceOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, SameAsServiceCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, SameAsServiceCommand } = require("@aws-sdk/weather"); // CommonJS import
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new SameAsServiceCommand(input);
 * const response = await client.send(command);
 * // { // SameAsServiceOutput
 * //   service: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SameAsServiceCommandInput - {@link SameAsServiceCommandInput}
 * @returns {@link SameAsServiceCommandOutput}
 * @see {@link SameAsServiceCommandInput} for command's `input` shape.
 * @see {@link SameAsServiceCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 */
export class SameAsServiceCommand extends $Command
  .classBuilder<
    SameAsServiceCommandInput,
    SameAsServiceCommandOutput,
    WeatherClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize), getSigV4AuthPlugin(config)];
  })
  .s("Weather", "SameAsService", {})
  .n("WeatherClient", "SameAsServiceCommand")
  .f(void 0, void 0)
  .ser(() => {
    throw new Error("No supported protocol was found");
  })
  .de(() => {
    throw new Error("No supported protocol was found");
  })
  .build() {}
