// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { OnlyCustomAuth$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link OnlyCustomAuthCommand}.
 */
export interface OnlyCustomAuthCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlyCustomAuthCommand}.
 */
export interface OnlyCustomAuthCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlyCustomAuthCommand } from "@aws-sdk/weather-legacy-auth"; // ES Modules import
 * // const { WeatherClient, OnlyCustomAuthCommand } = require("@aws-sdk/weather-legacy-auth"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/weather-legacy-auth";
 * const config = {}; // type is WeatherClientConfig
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlyCustomAuthCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlyCustomAuthCommandInput - {@link OnlyCustomAuthCommandInput}
 * @returns {@link OnlyCustomAuthCommandOutput}
 * @see {@link OnlyCustomAuthCommandInput} for command's `input` shape.
 * @see {@link OnlyCustomAuthCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class OnlyCustomAuthCommand extends command<OnlyCustomAuthCommandInput, OnlyCustomAuthCommandOutput>(
  _ep0,
  _mw0,
  "OnlyCustomAuth",
  OnlyCustomAuth$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlyCustomAuthCommandInput;
      output: OnlyCustomAuthCommandOutput;
    };
  };
}
