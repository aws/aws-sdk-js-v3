// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { JsonUnionsInput, JsonUnionsOutput } from "../models/models_0";
import { de_JsonUnionsCommand, se_JsonUnionsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link JsonUnionsCommand}.
 */
export interface JsonUnionsCommandInput extends JsonUnionsInput {}
/**
 * @public
 *
 * The output of {@link JsonUnionsCommand}.
 */
export interface JsonUnionsCommandOutput extends JsonUnionsOutput, __MetadataBearer {}

/**
 * This operation uses unions for inputs and outputs.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, JsonUnionsCommand } from "@aws-sdk/aws-protocoltests-json-10"; // ES Modules import
 * // const { JSONRPC10Client, JsonUnionsCommand } = require("@aws-sdk/aws-protocoltests-json-10"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new JSONRPC10Client(config);
 * const input = { // JsonUnionsInput
 *   contents: { // MyUnion Union: only one key present
 *     stringValue: "STRING_VALUE",
 *     booleanValue: true || false,
 *     numberValue: Number("int"),
 *     blobValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     timestampValue: new Date("TIMESTAMP"),
 *     enumValue: "Foo" || "Baz" || "Bar" || "1" || "0",
 *     intEnumValue: 1 || 2 || 3,
 *     listValue: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     mapValue: { // StringMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     structureValue: { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new JsonUnionsCommand(input);
 * const response = await client.send(command);
 * // { // JsonUnionsOutput
 * //   contents: { // MyUnion Union: only one key present
 * //     stringValue: "STRING_VALUE",
 * //     booleanValue: true || false,
 * //     numberValue: Number("int"),
 * //     blobValue: new Uint8Array(),
 * //     timestampValue: new Date("TIMESTAMP"),
 * //     enumValue: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //     intEnumValue: 1 || 2 || 3,
 * //     listValue: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     mapValue: { // StringMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     structureValue: { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param JsonUnionsCommandInput - {@link JsonUnionsCommandInput}
 * @returns {@link JsonUnionsCommandOutput}
 * @see {@link JsonUnionsCommandInput} for command's `input` shape.
 * @see {@link JsonUnionsCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 * @public
 */
export class JsonUnionsCommand extends $Command
  .classBuilder<
    JsonUnionsCommandInput,
    JsonUnionsCommandOutput,
    JSONRPC10ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: JSONRPC10ClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("JsonRpc10", "JsonUnions", {})
  .n("JSONRPC10Client", "JsonUnionsCommand")
  .f(void 0, void 0)
  .ser(se_JsonUnionsCommand)
  .de(de_JsonUnionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: JsonUnionsInput;
      output: JsonUnionsOutput;
    };
    sdk: {
      input: JsonUnionsCommandInput;
      output: JsonUnionsCommandOutput;
    };
  };
}
