// smithy-typescript generated code
import { getSigV4AuthPlugin } from "@aws-sdk/middleware-signing";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SameAsServiceOutput } from "../models/models_0";
import { de_SameAsServiceCommand, se_SameAsServiceCommand } from "../protocols/Aws_restJson1";
import type { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";

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
 * import { WeatherClient, SameAsServiceCommand } from "@aws-sdk/weather-legacy-auth"; // ES Modules import
 * // const { WeatherClient, SameAsServiceCommand } = require("@aws-sdk/weather-legacy-auth"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/weather-legacy-auth";
 * const config = {}; // type is WeatherClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getSigV4AuthPlugin(config),
    ];
  })
  .s("Weather", "SameAsService", {})
  .n("WeatherClient", "SameAsServiceCommand")
  .f(void 0, void 0)
  .ser(se_SameAsServiceCommand)
  .de(de_SameAsServiceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: SameAsServiceOutput;
    };
    sdk: {
      input: SameAsServiceCommandInput;
      output: SameAsServiceCommandOutput;
    };
  };
}
