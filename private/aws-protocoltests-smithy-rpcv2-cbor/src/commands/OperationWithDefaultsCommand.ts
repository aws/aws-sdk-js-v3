// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { OperationWithDefaultsInput, OperationWithDefaultsOutput } from "../models/models_0";
import { de_OperationWithDefaultsCommand, se_OperationWithDefaultsCommand } from "../protocols/Rpcv2cbor";
import { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RpcV2ProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OperationWithDefaultsCommand}.
 */
export interface OperationWithDefaultsCommandInput extends OperationWithDefaultsInput {}
/**
 * @public
 *
 * The output of {@link OperationWithDefaultsCommand}.
 */
export interface OperationWithDefaultsCommandOutput extends OperationWithDefaultsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, OperationWithDefaultsCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor"; // ES Modules import
 * // const { RpcV2ProtocolClient, OperationWithDefaultsCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor"); // CommonJS import
 * const client = new RpcV2ProtocolClient(config);
 * const input = { // OperationWithDefaultsInput
 *   defaults: { // Defaults
 *     defaultString: "STRING_VALUE",
 *     defaultBoolean: true || false,
 *     defaultList: [ // TestStringList
 *       "STRING_VALUE",
 *     ],
 *     defaultTimestamp: new Date("TIMESTAMP"),
 *     defaultBlob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     defaultByte: 0, // BYTE_VALUE
 *     defaultShort: Number("short"),
 *     defaultInteger: Number("int"),
 *     defaultLong: Number("long"),
 *     defaultFloat: Number("float"),
 *     defaultDouble: Number("double"),
 *     defaultMap: { // TestStringMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     defaultEnum: "FOO" || "BAR" || "BAZ",
 *     defaultIntEnum: 1 || 2,
 *     emptyString: "STRING_VALUE",
 *     falseBoolean: true || false,
 *     emptyBlob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     zeroByte: 0, // BYTE_VALUE
 *     zeroShort: Number("short"),
 *     zeroInteger: Number("int"),
 *     zeroLong: Number("long"),
 *     zeroFloat: Number("float"),
 *     zeroDouble: Number("double"),
 *   },
 *   clientOptionalDefaults: { // ClientOptionalDefaults
 *     member: Number("int"),
 *   },
 *   topLevelDefault: "STRING_VALUE",
 *   otherTopLevelDefault: Number("int"),
 * };
 * const command = new OperationWithDefaultsCommand(input);
 * const response = await client.send(command);
 * // { // OperationWithDefaultsOutput
 * //   defaultString: "STRING_VALUE",
 * //   defaultBoolean: true || false,
 * //   defaultList: [ // TestStringList
 * //     "STRING_VALUE",
 * //   ],
 * //   defaultTimestamp: new Date("TIMESTAMP"),
 * //   defaultBlob: new Uint8Array(),
 * //   defaultByte: 0, // BYTE_VALUE
 * //   defaultShort: Number("short"),
 * //   defaultInteger: Number("int"),
 * //   defaultLong: Number("long"),
 * //   defaultFloat: Number("float"),
 * //   defaultDouble: Number("double"),
 * //   defaultMap: { // TestStringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   defaultEnum: "FOO" || "BAR" || "BAZ",
 * //   defaultIntEnum: 1 || 2,
 * //   emptyString: "STRING_VALUE",
 * //   falseBoolean: true || false,
 * //   emptyBlob: new Uint8Array(),
 * //   zeroByte: 0, // BYTE_VALUE
 * //   zeroShort: Number("short"),
 * //   zeroInteger: Number("int"),
 * //   zeroLong: Number("long"),
 * //   zeroFloat: Number("float"),
 * //   zeroDouble: Number("double"),
 * // };
 *
 * ```
 *
 * @param OperationWithDefaultsCommandInput - {@link OperationWithDefaultsCommandInput}
 * @returns {@link OperationWithDefaultsCommandOutput}
 * @see {@link OperationWithDefaultsCommandInput} for command's `input` shape.
 * @see {@link OperationWithDefaultsCommandOutput} for command's `response` shape.
 * @see {@link RpcV2ProtocolClientResolvedConfig | config} for RpcV2ProtocolClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link RpcV2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from RpcV2Protocol service.</p>
 *
 */
export class OperationWithDefaultsCommand extends $Command
  .classBuilder<
    OperationWithDefaultsCommandInput,
    OperationWithDefaultsCommandOutput,
    RpcV2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RpcV2ProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RpcV2Protocol", "OperationWithDefaults", {})
  .n("RpcV2ProtocolClient", "OperationWithDefaultsCommand")
  .f(void 0, void 0)
  .ser(se_OperationWithDefaultsCommand)
  .de(de_OperationWithDefaultsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OperationWithDefaultsInput;
      output: OperationWithDefaultsOutput;
    };
    sdk: {
      input: OperationWithDefaultsCommandInput;
      output: OperationWithDefaultsCommandOutput;
    };
  };
}
