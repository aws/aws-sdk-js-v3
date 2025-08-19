// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { OperationWithDefaultsInput, OperationWithDefaultsOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { OperationWithDefaults } from "../schemas/schemas";

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
 * import { RestJsonProtocolClient, OperationWithDefaultsCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, OperationWithDefaultsCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
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
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class OperationWithDefaultsCommand extends $Command
  .classBuilder<
    OperationWithDefaultsCommandInput,
    OperationWithDefaultsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "OperationWithDefaults", {})
  .n("RestJsonProtocolClient", "OperationWithDefaultsCommand")
  .sc(OperationWithDefaults)
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
