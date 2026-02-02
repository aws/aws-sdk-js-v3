// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCurrentTimeOutput } from "../models/models_0";
import type { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCurrentTimeCommand}.
 */
export interface GetCurrentTimeCommandInput {}
/**
 * @public
 *
 * The output of {@link GetCurrentTimeCommand}.
 */
export interface GetCurrentTimeCommandOutput extends GetCurrentTimeOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, GetCurrentTimeCommand } from "@aws-sdk/client-test-weather"; // ES Modules import
 * // const { WeatherClient, GetCurrentTimeCommand } = require("@aws-sdk/client-test-weather"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/client-test-weather";
 * const config = {}; // type is WeatherClientConfig
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new GetCurrentTimeCommand(input);
 * const response = await client.send(command);
 * // { // GetCurrentTimeOutput
 * //   time: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetCurrentTimeCommandInput - {@link GetCurrentTimeCommandInput}
 * @returns {@link GetCurrentTimeCommandOutput}
 * @see {@link GetCurrentTimeCommandInput} for command's `input` shape.
 * @see {@link GetCurrentTimeCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class GetCurrentTimeCommand extends $Command
  .classBuilder<
    GetCurrentTimeCommandInput,
    GetCurrentTimeCommandOutput,
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
  .s("Weather", "GetCurrentTime", {})
  .n("WeatherClient", "GetCurrentTimeCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetCurrentTimeOutput;
    };
    sdk: {
      input: GetCurrentTimeCommandInput;
      output: GetCurrentTimeCommandOutput;
    };
  };
}
