// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import type { OperationWithDefaultsInput, OperationWithDefaultsOutput } from "../models/models_0";
import { OperationWithDefaults$ } from "../schemas/schemas_0";

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
 * import { JSONRPC10Client, OperationWithDefaultsCommand } from "@aws-sdk/aws-protocoltests-json-10-schema"; // ES Modules import
 * // const { JSONRPC10Client, OperationWithDefaultsCommand } = require("@aws-sdk/aws-protocoltests-json-10-schema"); // CommonJS import
 * // import type { JSONRPC10ClientConfig } from "@aws-sdk/aws-protocoltests-json-10-schema";
 * const config = {}; // type is JSONRPC10ClientConfig
 * const client = new JSONRPC10Client(config);
 * const input = { // OperationWithDefaultsInput
 *   defaults: { // Defaults
 *     defaultString: "STRING_VALUE",
 *     defaultBoolean: true || false,
 *     defaultList: [ // TestStringList
 *       "STRING_VALUE",
 *     ],
 *     defaultDocumentMap: "DOCUMENT_VALUE",
 *     defaultDocumentString: "DOCUMENT_VALUE",
 *     defaultDocumentBoolean: "DOCUMENT_VALUE",
 *     defaultDocumentList: "DOCUMENT_VALUE",
 *     defaultNullDocument: "DOCUMENT_VALUE",
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
 * //   defaultDocumentMap: "DOCUMENT_VALUE",
 * //   defaultDocumentString: "DOCUMENT_VALUE",
 * //   defaultDocumentBoolean: "DOCUMENT_VALUE",
 * //   defaultDocumentList: "DOCUMENT_VALUE",
 * //   defaultNullDocument: "DOCUMENT_VALUE",
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
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 *
 */
export class OperationWithDefaultsCommand extends $Command
  .classBuilder<
    OperationWithDefaultsCommandInput,
    OperationWithDefaultsCommandOutput,
    JSONRPC10ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JSONRPC10ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("JsonRpc10", "OperationWithDefaults", {})
  .n("JSONRPC10Client", "OperationWithDefaultsCommand")
  .sc(OperationWithDefaults$)
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
