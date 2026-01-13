// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import type { OperationWithRequiredMembersWithDefaultsOutput } from "../models/models_0";
import { OperationWithRequiredMembersWithDefaults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OperationWithRequiredMembersWithDefaultsCommand}.
 */
export interface OperationWithRequiredMembersWithDefaultsCommandInput {}
/**
 * @public
 *
 * The output of {@link OperationWithRequiredMembersWithDefaultsCommand}.
 */
export interface OperationWithRequiredMembersWithDefaultsCommandOutput extends OperationWithRequiredMembersWithDefaultsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, OperationWithRequiredMembersWithDefaultsCommand } from "@aws-sdk/aws-protocoltests-json-10-schema"; // ES Modules import
 * // const { JSONRPC10Client, OperationWithRequiredMembersWithDefaultsCommand } = require("@aws-sdk/aws-protocoltests-json-10-schema"); // CommonJS import
 * // import type { JSONRPC10ClientConfig } from "@aws-sdk/aws-protocoltests-json-10-schema";
 * const config = {}; // type is JSONRPC10ClientConfig
 * const client = new JSONRPC10Client(config);
 * const input = {};
 * const command = new OperationWithRequiredMembersWithDefaultsCommand(input);
 * const response = await client.send(command);
 * // { // OperationWithRequiredMembersWithDefaultsOutput
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
 * //   requiredEnum: "FOO" || "BAR" || "BAZ", // required
 * //   requiredIntEnum: 1 || 2, // required
 * // };
 *
 * ```
 *
 * @param OperationWithRequiredMembersWithDefaultsCommandInput - {@link OperationWithRequiredMembersWithDefaultsCommandInput}
 * @returns {@link OperationWithRequiredMembersWithDefaultsCommandOutput}
 * @see {@link OperationWithRequiredMembersWithDefaultsCommandInput} for command's `input` shape.
 * @see {@link OperationWithRequiredMembersWithDefaultsCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 *
 */
export class OperationWithRequiredMembersWithDefaultsCommand extends $Command
  .classBuilder<
    OperationWithRequiredMembersWithDefaultsCommandInput,
    OperationWithRequiredMembersWithDefaultsCommandOutput,
    JSONRPC10ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JSONRPC10ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("JsonRpc10", "OperationWithRequiredMembersWithDefaults", {})
  .n("JSONRPC10Client", "OperationWithRequiredMembersWithDefaultsCommand")
  .sc(OperationWithRequiredMembersWithDefaults$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: OperationWithRequiredMembersWithDefaultsOutput;
    };
    sdk: {
      input: OperationWithRequiredMembersWithDefaultsCommandInput;
      output: OperationWithRequiredMembersWithDefaultsCommandOutput;
    };
  };
}
