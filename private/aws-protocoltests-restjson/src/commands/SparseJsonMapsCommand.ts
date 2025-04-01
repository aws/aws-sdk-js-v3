// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { SparseJsonMapsInputOutput } from "../models/models_0";
import { de_SparseJsonMapsCommand, se_SparseJsonMapsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SparseJsonMapsCommand}.
 */
export interface SparseJsonMapsCommandInput extends SparseJsonMapsInputOutput {}
/**
 * @public
 *
 * The output of {@link SparseJsonMapsCommand}.
 */
export interface SparseJsonMapsCommandOutput extends SparseJsonMapsInputOutput, __MetadataBearer {}

/**
 * This example tests sparse map serialization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, SparseJsonMapsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, SparseJsonMapsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // SparseJsonMapsInputOutput
 *   sparseStructMap: { // SparseStructMap
 *     "<keys>": { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   },
 *   sparseNumberMap: { // SparseNumberMap
 *     "<keys>": Number("int"),
 *   },
 *   sparseBooleanMap: { // SparseBooleanMap
 *     "<keys>": true || false,
 *   },
 *   sparseStringMap: { // SparseStringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   sparseSetMap: { // SparseSetMap
 *     "<keys>": [ // StringSet
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new SparseJsonMapsCommand(input);
 * const response = await client.send(command);
 * // { // SparseJsonMapsInputOutput
 * //   sparseStructMap: { // SparseStructMap
 * //     "<keys>": { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * //   sparseNumberMap: { // SparseNumberMap
 * //     "<keys>": Number("int"),
 * //   },
 * //   sparseBooleanMap: { // SparseBooleanMap
 * //     "<keys>": true || false,
 * //   },
 * //   sparseStringMap: { // SparseStringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   sparseSetMap: { // SparseSetMap
 * //     "<keys>": [ // StringSet
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param SparseJsonMapsCommandInput - {@link SparseJsonMapsCommandInput}
 * @returns {@link SparseJsonMapsCommandOutput}
 * @see {@link SparseJsonMapsCommandInput} for command's `input` shape.
 * @see {@link SparseJsonMapsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class SparseJsonMapsCommand extends $Command
  .classBuilder<
    SparseJsonMapsCommandInput,
    SparseJsonMapsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "SparseJsonMaps", {})
  .n("RestJsonProtocolClient", "SparseJsonMapsCommand")
  .f(void 0, void 0)
  .ser(se_SparseJsonMapsCommand)
  .de(de_SparseJsonMapsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SparseJsonMapsInputOutput;
      output: SparseJsonMapsInputOutput;
    };
    sdk: {
      input: SparseJsonMapsCommandInput;
      output: SparseJsonMapsCommandOutput;
    };
  };
}
