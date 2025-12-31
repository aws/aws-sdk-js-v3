// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { OnlySigv4AuthOptional$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OnlySigv4AuthOptionalCommand}.
 */
export interface OnlySigv4AuthOptionalCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlySigv4AuthOptionalCommand}.
 */
export interface OnlySigv4AuthOptionalCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlySigv4AuthOptionalCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, OnlySigv4AuthOptionalCommand } = require("@aws-sdk/weather"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/weather";
 * const config = {}; // type is WeatherClientConfig
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlySigv4AuthOptionalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlySigv4AuthOptionalCommandInput - {@link OnlySigv4AuthOptionalCommandInput}
 * @returns {@link OnlySigv4AuthOptionalCommandOutput}
 * @see {@link OnlySigv4AuthOptionalCommandInput} for command's `input` shape.
 * @see {@link OnlySigv4AuthOptionalCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class OnlySigv4AuthOptionalCommand extends $Command
  .classBuilder<
    OnlySigv4AuthOptionalCommandInput,
    OnlySigv4AuthOptionalCommandOutput,
    WeatherClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Weather", "OnlySigv4AuthOptional", {})
  .n("WeatherClient", "OnlySigv4AuthOptionalCommand")
  .sc(OnlySigv4AuthOptional$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlySigv4AuthOptionalCommandInput;
      output: OnlySigv4AuthOptionalCommandOutput;
    };
  };
}
