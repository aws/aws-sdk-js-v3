// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { SparseNullsOperationInputOutput } from "../models/models_0";
import { de_SparseNullsOperationCommand, se_SparseNullsOperationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SparseNullsOperationCommand}.
 */
export interface SparseNullsOperationCommandInput extends SparseNullsOperationInputOutput {}
/**
 * @public
 *
 * The output of {@link SparseNullsOperationCommand}.
 */
export interface SparseNullsOperationCommandOutput extends SparseNullsOperationInputOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, SparseNullsOperationCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, SparseNullsOperationCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const input = { // SparseNullsOperationInputOutput
 *   sparseStringList: [ // SparseStringList
 *     "STRING_VALUE",
 *   ],
 *   sparseStringMap: { // SparseStringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SparseNullsOperationCommand(input);
 * const response = await client.send(command);
 * // { // SparseNullsOperationInputOutput
 * //   sparseStringList: [ // SparseStringList
 * //     "STRING_VALUE",
 * //   ],
 * //   sparseStringMap: { // SparseStringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param SparseNullsOperationCommandInput - {@link SparseNullsOperationCommandInput}
 * @returns {@link SparseNullsOperationCommandOutput}
 * @see {@link SparseNullsOperationCommandInput} for command's `input` shape.
 * @see {@link SparseNullsOperationCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 */
export class SparseNullsOperationCommand extends $Command
  .classBuilder<
    SparseNullsOperationCommandInput,
    SparseNullsOperationCommandOutput,
    JsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: JsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("JsonProtocol", "SparseNullsOperation", {})
  .n("JsonProtocolClient", "SparseNullsOperationCommand")
  .f(void 0, void 0)
  .ser(se_SparseNullsOperationCommand)
  .de(de_SparseNullsOperationCommand)
  .build() {}
