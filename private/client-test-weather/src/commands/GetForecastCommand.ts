// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetForecastInput, GetForecastOutput } from "../models/models_0";
import type { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetForecastCommand}.
 */
export interface GetForecastCommandInput extends GetForecastInput {}
/**
 * @public
 *
 * The output of {@link GetForecastCommand}.
 */
export interface GetForecastCommandOutput extends GetForecastOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, GetForecastCommand } from "@aws-sdk/client-test-weather"; // ES Modules import
 * // const { WeatherClient, GetForecastCommand } = require("@aws-sdk/client-test-weather"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/client-test-weather";
 * const config = {}; // type is WeatherClientConfig
 * const client = new WeatherClient(config);
 * const input = { // GetForecastInput
 *   cityId: "STRING_VALUE", // required
 * };
 * const command = new GetForecastCommand(input);
 * const response = await client.send(command);
 * // { // GetForecastOutput
 * //   chanceOfRain: Number("float"),
 * // };
 *
 * ```
 *
 * @param GetForecastCommandInput - {@link GetForecastCommandInput}
 * @returns {@link GetForecastCommandOutput}
 * @see {@link GetForecastCommandInput} for command's `input` shape.
 * @see {@link GetForecastCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class GetForecastCommand extends $Command
  .classBuilder<
    GetForecastCommandInput,
    GetForecastCommandOutput,
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
  .s("Weather", "GetForecast", {})
  .n("WeatherClient", "GetForecastCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetForecastInput;
      output: GetForecastOutput;
    };
    sdk: {
      input: GetForecastCommandInput;
      output: GetForecastCommandOutput;
    };
  };
}
