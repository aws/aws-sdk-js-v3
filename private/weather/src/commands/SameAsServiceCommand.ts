// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SameAsServiceOutput } from "../models/models_0";
import { SameAsService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * import { WeatherClient, SameAsServiceCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, SameAsServiceCommand } = require("@aws-sdk/weather"); // CommonJS import
 * // import type { WeatherClientConfig } from "@aws-sdk/weather";
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
export class SameAsServiceCommand extends command<SameAsServiceCommandInput, SameAsServiceCommandOutput>(
  _ep0,
  _mw0,
  "SameAsService",
  SameAsService$
) {
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
