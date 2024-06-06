// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { OperationWithRequiredMembersOutput } from "../models/models_0";
import {
  de_OperationWithRequiredMembersCommand,
  se_OperationWithRequiredMembersCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OperationWithRequiredMembersCommand}.
 */
export interface OperationWithRequiredMembersCommandInput {}
/**
 * @public
 *
 * The output of {@link OperationWithRequiredMembersCommand}.
 */
export interface OperationWithRequiredMembersCommandOutput
  extends OperationWithRequiredMembersOutput,
    __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, OperationWithRequiredMembersCommand } from "@aws-sdk/aws-protocoltests-json-10"; // ES Modules import
 * // const { JSONRPC10Client, OperationWithRequiredMembersCommand } = require("@aws-sdk/aws-protocoltests-json-10"); // CommonJS import
 * const client = new JSONRPC10Client(config);
 * const input = {};
 * const command = new OperationWithRequiredMembersCommand(input);
 * const response = await client.send(command);
 * // { // OperationWithRequiredMembersOutput
 * //   requiredString: "STRING_VALUE", // required
 * //   requiredBoolean: true || false, // required
 * //   requiredList: [ // RequiredStringList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   requiredTimestamp: new Date("TIMESTAMP"), // required
 * //   requiredBlob: new Uint8Array(), // required
 * //   requiredByte: 0, // BYTE_VALUE // required
 * //   requiredShort: Number("short"), // required
 * //   requiredInteger: Number("int"), // required
 * //   requiredLong: Number("long"), // required
 * //   requiredFloat: Number("float"), // required
 * //   requiredDouble: Number("double"), // required
 * //   requiredMap: { // RequiredStringMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param OperationWithRequiredMembersCommandInput - {@link OperationWithRequiredMembersCommandInput}
 * @returns {@link OperationWithRequiredMembersCommandOutput}
 * @see {@link OperationWithRequiredMembersCommandInput} for command's `input` shape.
 * @see {@link OperationWithRequiredMembersCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 */
export class OperationWithRequiredMembersCommand extends $Command
  .classBuilder<
    OperationWithRequiredMembersCommandInput,
    OperationWithRequiredMembersCommandOutput,
    JSONRPC10ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: JSONRPC10ClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("JsonRpc10", "OperationWithRequiredMembers", {})
  .n("JSONRPC10Client", "OperationWithRequiredMembersCommand")
  .f(void 0, void 0)
  .ser(se_OperationWithRequiredMembersCommand)
  .de(de_OperationWithRequiredMembersCommand)
  .build() {}
