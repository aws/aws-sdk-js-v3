// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import type { OperationWithOptionalInputOutputInput, OperationWithOptionalInputOutputOutput } from "../models/models_0";
import {
  de_OperationWithOptionalInputOutputCommand,
  se_OperationWithOptionalInputOutputCommand,
} from "../protocols/Aws_json1_1";

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
 * import { JsonProtocolClient, OperationWithOptionalInputOutputCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, OperationWithOptionalInputOutputCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * // import type { JsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-json";
 * const config = {}; // type is JsonProtocolClientConfig
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("JsonProtocol", "OperationWithOptionalInputOutput", {})
  .n("JsonProtocolClient", "OperationWithOptionalInputOutputCommand")
  .f(void 0, void 0)
  .ser(se_OperationWithOptionalInputOutputCommand)
  .de(de_OperationWithOptionalInputOutputCommand)
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
