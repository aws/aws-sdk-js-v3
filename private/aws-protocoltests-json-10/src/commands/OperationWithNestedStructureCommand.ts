// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { OperationWithNestedStructureInput, OperationWithNestedStructureOutput } from "../models/models_0";
import {
  de_OperationWithNestedStructureCommand,
  se_OperationWithNestedStructureCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OperationWithNestedStructureCommand}.
 */
export interface OperationWithNestedStructureCommandInput extends OperationWithNestedStructureInput {}
/**
 * @public
 *
 * The output of {@link OperationWithNestedStructureCommand}.
 */
export interface OperationWithNestedStructureCommandOutput
  extends OperationWithNestedStructureOutput,
    __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, OperationWithNestedStructureCommand } from "@aws-sdk/aws-protocoltests-json-10"; // ES Modules import
 * // const { JSONRPC10Client, OperationWithNestedStructureCommand } = require("@aws-sdk/aws-protocoltests-json-10"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new JSONRPC10Client(config);
 * const input = { // OperationWithNestedStructureInput
 *   topLevel: { // TopLevel
 *     dialog: { // Dialog
 *       language: "STRING_VALUE",
 *       greeting: "STRING_VALUE",
 *       farewell: { // Farewell
 *         phrase: "STRING_VALUE",
 *       },
 *     },
 *     dialogList: [ // DialogList
 *       {
 *         language: "STRING_VALUE",
 *         greeting: "STRING_VALUE",
 *         farewell: {
 *           phrase: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     dialogMap: { // DialogMap
 *       "<keys>": {
 *         language: "STRING_VALUE",
 *         greeting: "STRING_VALUE",
 *         farewell: {
 *           phrase: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new OperationWithNestedStructureCommand(input);
 * const response = await client.send(command);
 * // { // OperationWithNestedStructureOutput
 * //   dialog: { // Dialog
 * //     language: "STRING_VALUE",
 * //     greeting: "STRING_VALUE",
 * //     farewell: { // Farewell
 * //       phrase: "STRING_VALUE",
 * //     },
 * //   },
 * //   dialogList: [ // DialogList
 * //     {
 * //       language: "STRING_VALUE",
 * //       greeting: "STRING_VALUE",
 * //       farewell: {
 * //         phrase: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   dialogMap: { // DialogMap
 * //     "<keys>": {
 * //       language: "STRING_VALUE",
 * //       greeting: "STRING_VALUE",
 * //       farewell: {
 * //         phrase: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param OperationWithNestedStructureCommandInput - {@link OperationWithNestedStructureCommandInput}
 * @returns {@link OperationWithNestedStructureCommandOutput}
 * @see {@link OperationWithNestedStructureCommandInput} for command's `input` shape.
 * @see {@link OperationWithNestedStructureCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 */
export class OperationWithNestedStructureCommand extends $Command
  .classBuilder<
    OperationWithNestedStructureCommandInput,
    OperationWithNestedStructureCommandOutput,
    JSONRPC10ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: JSONRPC10ClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("JsonRpc10", "OperationWithNestedStructure", {})
  .n("JSONRPC10Client", "OperationWithNestedStructureCommand")
  .f(void 0, void 0)
  .ser(se_OperationWithNestedStructureCommand)
  .de(de_OperationWithNestedStructureCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OperationWithNestedStructureInput;
      output: OperationWithNestedStructureOutput;
    };
    sdk: {
      input: OperationWithNestedStructureCommandInput;
      output: OperationWithNestedStructureCommandOutput;
    };
  };
}
