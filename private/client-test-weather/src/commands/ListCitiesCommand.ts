// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCitiesInput, ListCitiesOutput } from "../models/models_0";
import type { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCitiesCommand}.
 */
export interface ListCitiesCommandInput extends ListCitiesInput {}
/**
 * @public
 *
 * The output of {@link ListCitiesCommand}.
 */
export interface ListCitiesCommandOutput extends ListCitiesOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, ListCitiesCommand } from "@aws-sdk/client-test-weather"; // ES Modules import
 * // const { WeatherClient, ListCitiesCommand } = require("@aws-sdk/client-test-weather"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/client-test-weather";
 * const config = {}; // type is WeatherClientConfig
 * const client = new WeatherClient(config);
 * const input = { // ListCitiesInput
 *   nextToken: "STRING_VALUE",
 *   pageSize: Number("int"),
 * };
 * const command = new ListCitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListCitiesOutput
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // CitySummaries // required
 * //     { // CitySummary
 * //       cityId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCitiesCommandInput - {@link ListCitiesCommandInput}
 * @returns {@link ListCitiesCommandOutput}
 * @see {@link ListCitiesCommandInput} for command's `input` shape.
 * @see {@link ListCitiesCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class ListCitiesCommand extends $Command
  .classBuilder<
    ListCitiesCommandInput,
    ListCitiesCommandOutput,
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
  .s("Weather", "ListCities", {})
  .n("WeatherClient", "ListCitiesCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCitiesInput;
      output: ListCitiesOutput;
    };
    sdk: {
      input: ListCitiesCommandInput;
      output: ListCitiesCommandOutput;
    };
  };
}
