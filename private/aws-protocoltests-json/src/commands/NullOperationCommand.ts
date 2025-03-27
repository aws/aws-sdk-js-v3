// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { NullOperationInputOutput } from "../models/models_0";
import { de_NullOperationCommand, se_NullOperationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NullOperationCommand}.
 */
export interface NullOperationCommandInput extends NullOperationInputOutput {}
/**
 * @public
 *
 * The output of {@link NullOperationCommand}.
 */
export interface NullOperationCommandOutput extends NullOperationInputOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, NullOperationCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, NullOperationCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const input = { // NullOperationInputOutput
 *   string: "STRING_VALUE",
 * };
 * const command = new NullOperationCommand(input);
 * const response = await client.send(command);
 * // { // NullOperationInputOutput
 * //   string: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param NullOperationCommandInput - {@link NullOperationCommandInput}
 * @returns {@link NullOperationCommandOutput}
 * @see {@link NullOperationCommandInput} for command's `input` shape.
 * @see {@link NullOperationCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 */
export class NullOperationCommand extends $Command
  .classBuilder<
    NullOperationCommandInput,
    NullOperationCommandOutput,
    JsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: JsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("JsonProtocol", "NullOperation", {})
  .n("JsonProtocolClient", "NullOperationCommand")
  .f(void 0, void 0)
  .ser(se_NullOperationCommand)
  .de(de_NullOperationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NullOperationInputOutput;
      output: NullOperationInputOutput;
    };
    sdk: {
      input: NullOperationCommandInput;
      output: NullOperationCommandOutput;
    };
  };
}
