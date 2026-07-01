// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import { OnlySigv4AuthOptional$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * import { WeatherClient, OnlySigv4AuthOptionalCommand } from "@aws-sdk/weather-legacy-auth"; // ES Modules import
 * // const { WeatherClient, OnlySigv4AuthOptionalCommand } = require("@aws-sdk/weather-legacy-auth"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/weather-legacy-auth";
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
export class OnlySigv4AuthOptionalCommand extends command<OnlySigv4AuthOptionalCommandInput, OnlySigv4AuthOptionalCommandOutput>(
  _ep0,
  _mw1,
  "OnlySigv4AuthOptional",
  OnlySigv4AuthOptional$
) {
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
