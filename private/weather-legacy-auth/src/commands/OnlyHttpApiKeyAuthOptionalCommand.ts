// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import { OnlyHttpApiKeyAuthOptional$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link OnlyHttpApiKeyAuthOptionalCommand}.
 */
export interface OnlyHttpApiKeyAuthOptionalCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlyHttpApiKeyAuthOptionalCommand}.
 */
export interface OnlyHttpApiKeyAuthOptionalCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlyHttpApiKeyAuthOptionalCommand } from "@aws-sdk/weather-legacy-auth"; // ES Modules import
 * // const { WeatherClient, OnlyHttpApiKeyAuthOptionalCommand } = require("@aws-sdk/weather-legacy-auth"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/weather-legacy-auth";
 * const config = {}; // type is WeatherClientConfig
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlyHttpApiKeyAuthOptionalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlyHttpApiKeyAuthOptionalCommandInput - {@link OnlyHttpApiKeyAuthOptionalCommandInput}
 * @returns {@link OnlyHttpApiKeyAuthOptionalCommandOutput}
 * @see {@link OnlyHttpApiKeyAuthOptionalCommandInput} for command's `input` shape.
 * @see {@link OnlyHttpApiKeyAuthOptionalCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class OnlyHttpApiKeyAuthOptionalCommand extends command<OnlyHttpApiKeyAuthOptionalCommandInput, OnlyHttpApiKeyAuthOptionalCommandOutput>(
  _ep0,
  _mw1,
  "OnlyHttpApiKeyAuthOptional",
  OnlyHttpApiKeyAuthOptional$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlyHttpApiKeyAuthOptionalCommandInput;
      output: OnlyHttpApiKeyAuthOptionalCommandOutput;
    };
  };
}
