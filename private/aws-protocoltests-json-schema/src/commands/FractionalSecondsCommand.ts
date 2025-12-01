// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import type { FractionalSecondsOutput } from "../models/models_0";
import { FractionalSeconds } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link FractionalSecondsCommand}.
 */
export interface FractionalSecondsCommandInput {}
/**
 * @public
 *
 * The output of {@link FractionalSecondsCommand}.
 */
export interface FractionalSecondsCommandOutput extends FractionalSecondsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, FractionalSecondsCommand } from "@aws-sdk/aws-protocoltests-json-schema"; // ES Modules import
 * // const { JsonProtocolClient, FractionalSecondsCommand } = require("@aws-sdk/aws-protocoltests-json-schema"); // CommonJS import
 * // import type { JsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-json-schema";
 * const config = {}; // type is JsonProtocolClientConfig
 * const client = new JsonProtocolClient(config);
 * const input = {};
 * const command = new FractionalSecondsCommand(input);
 * const response = await client.send(command);
 * // { // FractionalSecondsOutput
 * //   datetime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param FractionalSecondsCommandInput - {@link FractionalSecondsCommandInput}
 * @returns {@link FractionalSecondsCommandOutput}
 * @see {@link FractionalSecondsCommandInput} for command's `input` shape.
 * @see {@link FractionalSecondsCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 */
export class FractionalSecondsCommand extends $Command
  .classBuilder<
    FractionalSecondsCommandInput,
    FractionalSecondsCommandOutput,
    JsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("JsonProtocol", "FractionalSeconds", {})
  .n("JsonProtocolClient", "FractionalSecondsCommand")
  .sc(FractionalSeconds)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: FractionalSecondsOutput;
    };
    sdk: {
      input: FractionalSecondsCommandInput;
      output: FractionalSecondsCommandOutput;
    };
  };
}
