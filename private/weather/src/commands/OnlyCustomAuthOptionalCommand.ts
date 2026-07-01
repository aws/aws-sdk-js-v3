// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { OnlyCustomAuthOptional$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link OnlyCustomAuthOptionalCommand}.
 */
export interface OnlyCustomAuthOptionalCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlyCustomAuthOptionalCommand}.
 */
export interface OnlyCustomAuthOptionalCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlyCustomAuthOptionalCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, OnlyCustomAuthOptionalCommand } = require("@aws-sdk/weather"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/weather";
 * const config = {}; // type is WeatherClientConfig
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlyCustomAuthOptionalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlyCustomAuthOptionalCommandInput - {@link OnlyCustomAuthOptionalCommandInput}
 * @returns {@link OnlyCustomAuthOptionalCommandOutput}
 * @see {@link OnlyCustomAuthOptionalCommandInput} for command's `input` shape.
 * @see {@link OnlyCustomAuthOptionalCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class OnlyCustomAuthOptionalCommand extends command<OnlyCustomAuthOptionalCommandInput, OnlyCustomAuthOptionalCommandOutput>(
  _ep0,
  _mw0,
  "OnlyCustomAuthOptional",
  OnlyCustomAuthOptional$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlyCustomAuthOptionalCommandInput;
      output: OnlyCustomAuthOptionalCommandOutput;
    };
  };
}
