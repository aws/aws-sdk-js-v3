// smithy-typescript generated code
import { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";
import { getHttpApiKeyAuthPlugin } from "../middleware/HttpApiKeyAuth";
import { getSigV4AuthPlugin } from "@aws-sdk/middleware-signing";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * import { WeatherClient, OnlyHttpApiKeyAuthCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, OnlyHttpApiKeyAuthCommand } = require("@aws-sdk/weather"); // CommonJS import
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
 */
export class OnlyHttpApiKeyAuthCommand extends $Command
  .classBuilder<
    OnlyHttpApiKeyAuthCommandInput,
    OnlyHttpApiKeyAuthCommandOutput,
    WeatherClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: WeatherClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getSigV4AuthPlugin(config),
      getHttpApiKeyAuthPlugin(config, { in: "header", name: "X-Api-Key" }),
    ];
  })
  .s("Weather", "OnlyHttpApiKeyAuth", {})
  .n("WeatherClient", "OnlyHttpApiKeyAuthCommand")
  .f(void 0, void 0)
  .ser(() => {
    throw new Error("No supported protocol was found");
  })
  .de(() => {
    throw new Error("No supported protocol was found");
  })
  .build() {}
