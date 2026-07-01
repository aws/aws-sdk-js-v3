// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { OnlySigv4Auth$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * import { WeatherClient, OnlySigv4AuthCommand } from "@aws-sdk/weather-legacy-auth"; // ES Modules import
 * // const { WeatherClient, OnlySigv4AuthCommand } = require("@aws-sdk/weather-legacy-auth"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/weather-legacy-auth";
 * const config = {}; // type is WeatherClientConfig
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
 *
 */
export class OnlySigv4AuthCommand extends command<OnlySigv4AuthCommandInput, OnlySigv4AuthCommandOutput>(
  _ep0,
  _mw0,
  "OnlySigv4Auth",
  OnlySigv4Auth$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlySigv4AuthCommandInput;
      output: OnlySigv4AuthCommandOutput;
    };
  };
}
