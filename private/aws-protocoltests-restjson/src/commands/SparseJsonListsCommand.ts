// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { SparseJsonListsInputOutput } from "../models/models_0";
import { de_SparseJsonListsCommand, se_SparseJsonListsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SparseJsonListsCommand}.
 */
export interface SparseJsonListsCommandInput extends SparseJsonListsInputOutput {}
/**
 * @public
 *
 * The output of {@link SparseJsonListsCommand}.
 */
export interface SparseJsonListsCommandOutput extends SparseJsonListsInputOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, SparseJsonListsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, SparseJsonListsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // SparseJsonListsInputOutput
 *   sparseStringList: [ // SparseStringList
 *     "STRING_VALUE",
 *   ],
 *   sparseShortList: [ // SparseShortList
 *     Number("short"),
 *   ],
 * };
 * const command = new SparseJsonListsCommand(input);
 * const response = await client.send(command);
 * // { // SparseJsonListsInputOutput
 * //   sparseStringList: [ // SparseStringList
 * //     "STRING_VALUE",
 * //   ],
 * //   sparseShortList: [ // SparseShortList
 * //     Number("short"),
 * //   ],
 * // };
 *
 * ```
 *
 * @param SparseJsonListsCommandInput - {@link SparseJsonListsCommandInput}
 * @returns {@link SparseJsonListsCommandOutput}
 * @see {@link SparseJsonListsCommandInput} for command's `input` shape.
 * @see {@link SparseJsonListsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class SparseJsonListsCommand extends $Command
  .classBuilder<
    SparseJsonListsCommandInput,
    SparseJsonListsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "SparseJsonLists", {})
  .n("RestJsonProtocolClient", "SparseJsonListsCommand")
  .f(void 0, void 0)
  .ser(se_SparseJsonListsCommand)
  .de(de_SparseJsonListsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SparseJsonListsInputOutput;
      output: SparseJsonListsInputOutput;
    };
    sdk: {
      input: SparseJsonListsCommandInput;
      output: SparseJsonListsCommandOutput;
    };
  };
}
