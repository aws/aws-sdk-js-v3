// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { OperationWithOptionalInputOutputInput, OperationWithOptionalInputOutputOutput } from "../models/models_0";
import { OperationWithOptionalInputOutput } from "../schemas/schemas_1_Operation";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OperationWithOptionalInputOutputCommand}.
 */
export interface OperationWithOptionalInputOutputCommandInput extends OperationWithOptionalInputOutputInput {}
/**
 * @public
 *
 * The output of {@link OperationWithOptionalInputOutputCommand}.
 */
export interface OperationWithOptionalInputOutputCommandOutput
  extends OperationWithOptionalInputOutputOutput,
    __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, OperationWithOptionalInputOutputCommand } from "@aws-sdk/aws-protocoltests-json-schema"; // ES Modules import
 * // const { JsonProtocolClient, OperationWithOptionalInputOutputCommand } = require("@aws-sdk/aws-protocoltests-json-schema"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const input = { // OperationWithOptionalInputOutputInput
 *   Value: "STRING_VALUE",
 * };
 * const command = new OperationWithOptionalInputOutputCommand(input);
 * const response = await client.send(command);
 * // { // OperationWithOptionalInputOutputOutput
 * //   Value: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param OperationWithOptionalInputOutputCommandInput - {@link OperationWithOptionalInputOutputCommandInput}
 * @returns {@link OperationWithOptionalInputOutputCommandOutput}
 * @see {@link OperationWithOptionalInputOutputCommandInput} for command's `input` shape.
 * @see {@link OperationWithOptionalInputOutputCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 */
export class OperationWithOptionalInputOutputCommand extends $Command
  .classBuilder<
    OperationWithOptionalInputOutputCommandInput,
    OperationWithOptionalInputOutputCommandOutput,
    JsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("JsonProtocol", "OperationWithOptionalInputOutput", {})
  .n("JsonProtocolClient", "OperationWithOptionalInputOutputCommand")
  .sc(OperationWithOptionalInputOutput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OperationWithOptionalInputOutputInput;
      output: OperationWithOptionalInputOutputOutput;
    };
    sdk: {
      input: OperationWithOptionalInputOutputCommandInput;
      output: OperationWithOptionalInputOutputCommandOutput;
    };
  };
}
