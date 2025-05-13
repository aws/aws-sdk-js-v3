// smithy-typescript generated code
import { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  de_OnlyHttpApiKeyAndBearerAuthCommand,
  se_OnlyHttpApiKeyAndBearerAuthCommand,
} from "../protocols/Aws_restJson1";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
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
 * The input for {@link OnlyHttpApiKeyAndBearerAuthCommand}.
 */
export interface OnlyHttpApiKeyAndBearerAuthCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlyHttpApiKeyAndBearerAuthCommand}.
 */
export interface OnlyHttpApiKeyAndBearerAuthCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, OnlyHttpApiKeyAndBearerAuthCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, OnlyHttpApiKeyAndBearerAuthCommand } = require("@aws-sdk/weather"); // CommonJS import
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new OnlyHttpApiKeyAndBearerAuthCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OnlyHttpApiKeyAndBearerAuthCommandInput - {@link OnlyHttpApiKeyAndBearerAuthCommandInput}
 * @returns {@link OnlyHttpApiKeyAndBearerAuthCommandOutput}
 * @see {@link OnlyHttpApiKeyAndBearerAuthCommandInput} for command's `input` shape.
 * @see {@link OnlyHttpApiKeyAndBearerAuthCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 *
 */
export class OnlyHttpApiKeyAndBearerAuthCommand extends $Command
  .classBuilder<
    OnlyHttpApiKeyAndBearerAuthCommandInput,
    OnlyHttpApiKeyAndBearerAuthCommandOutput,
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
  .s("Weather", "OnlyHttpApiKeyAndBearerAuth", {})
  .n("WeatherClient", "OnlyHttpApiKeyAndBearerAuthCommand")
  .f(void 0, void 0)
  .ser(se_OnlyHttpApiKeyAndBearerAuthCommand)
  .de(de_OnlyHttpApiKeyAndBearerAuthCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: OnlyHttpApiKeyAndBearerAuthCommandInput;
      output: OnlyHttpApiKeyAndBearerAuthCommandOutput;
    };
  };
}
