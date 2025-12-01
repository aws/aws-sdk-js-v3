// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { OperationWithNestedStructureInput, OperationWithNestedStructureOutput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { OperationWithNestedStructure } from "../schemas/schemas_0";

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
 * import { RestJsonProtocolClient, OperationWithNestedStructureCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, OperationWithNestedStructureCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
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
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class OperationWithNestedStructureCommand extends $Command
  .classBuilder<
    OperationWithNestedStructureCommandInput,
    OperationWithNestedStructureCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "OperationWithNestedStructure", {})
  .n("RestJsonProtocolClient", "OperationWithNestedStructureCommand")
  .sc(OperationWithNestedStructure)
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
