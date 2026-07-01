// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import { OnlyHttpApiKeyAndBearerAuthReversed$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link OnlyHttpApiKeyAndBearerAuthReversedCommand}.
 */
export interface OnlyHttpApiKeyAndBearerAuthReversedCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlyHttpApiKeyAndBearerAuthReversedCommand}.
 */
export interface OnlyHttpApiKeyAndBearerAuthReversedCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlyHttpApiKeyAndBearerAuthReversedCommand } from "@aws-sdk/weather-legacy-auth"; // ES Modules import
 * // const { WeatherClient, OnlyHttpApiKeyAndBearerAuthReversedCommand } = require("@aws-sdk/weather-legacy-auth"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/weather-legacy-auth";
 * const config = {}; // type is WeatherClientConfig
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlyHttpApiKeyAndBearerAuthReversedCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlyHttpApiKeyAndBearerAuthReversedCommandInput - {@link OnlyHttpApiKeyAndBearerAuthReversedCommandInput}
 * @returns {@link OnlyHttpApiKeyAndBearerAuthReversedCommandOutput}
 * @see {@link OnlyHttpApiKeyAndBearerAuthReversedCommandInput} for command's `input` shape.
 * @see {@link OnlyHttpApiKeyAndBearerAuthReversedCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class OnlyHttpApiKeyAndBearerAuthReversedCommand extends command<OnlyHttpApiKeyAndBearerAuthReversedCommandInput, OnlyHttpApiKeyAndBearerAuthReversedCommandOutput>(
  _ep0,
  _mw2,
  "OnlyHttpApiKeyAndBearerAuthReversed",
  OnlyHttpApiKeyAndBearerAuthReversed$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlyHttpApiKeyAndBearerAuthReversedCommandInput;
      output: OnlyHttpApiKeyAndBearerAuthReversedCommandOutput;
    };
  };
}
