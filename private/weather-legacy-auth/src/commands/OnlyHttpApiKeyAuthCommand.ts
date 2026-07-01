// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import { OnlyHttpApiKeyAuth$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link OnlyHttpApiKeyAuthCommand}.
 */
export interface OnlyHttpApiKeyAuthCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlyHttpApiKeyAuthCommand}.
 */
export interface OnlyHttpApiKeyAuthCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlyHttpApiKeyAuthCommand } from "@aws-sdk/weather-legacy-auth"; // ES Modules import
 * // const { WeatherClient, OnlyHttpApiKeyAuthCommand } = require("@aws-sdk/weather-legacy-auth"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/weather-legacy-auth";
 * const config = {}; // type is WeatherClientConfig
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlyHttpApiKeyAuthCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlyHttpApiKeyAuthCommandInput - {@link OnlyHttpApiKeyAuthCommandInput}
 * @returns {@link OnlyHttpApiKeyAuthCommandOutput}
 * @see {@link OnlyHttpApiKeyAuthCommandInput} for command's `input` shape.
 * @see {@link OnlyHttpApiKeyAuthCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class OnlyHttpApiKeyAuthCommand extends command<OnlyHttpApiKeyAuthCommandInput, OnlyHttpApiKeyAuthCommandOutput>(
  _ep0,
  _mw2,
  "OnlyHttpApiKeyAuth",
  OnlyHttpApiKeyAuth$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlyHttpApiKeyAuthCommandInput;
      output: OnlyHttpApiKeyAuthCommandOutput;
    };
  };
}
