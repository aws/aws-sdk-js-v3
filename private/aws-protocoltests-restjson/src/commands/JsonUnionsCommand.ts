// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { UnionInputOutput } from "../models/models_0";
import { de_JsonUnionsCommand, se_JsonUnionsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
export interface JsonUnionsCommandInput extends UnionInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonUnionsCommand}.
 */
export interface JsonUnionsCommandOutput extends UnionInputOutput, __MetadataBearer {}

/**
 * This operation uses unions for inputs and outputs.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonUnionsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonUnionsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // UnionInputOutput
 *   contents: { // MyUnion Union: only one key present
 *     stringValue: "STRING_VALUE",
 *     booleanValue: true || false,
 *     numberValue: Number("int"),
 *     blobValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     timestampValue: new Date("TIMESTAMP"),
 *     enumValue: "Foo" || "Baz" || "Bar" || "1" || "0",
 *     listValue: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     mapValue: { // StringMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     structureValue: { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *     renamedStructureValue: { // GreetingStruct
 *       salutation: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new JsonUnionsCommand(input);
 * const response = await client.send(command);
 * // { // UnionInputOutput
 * //   contents: { // MyUnion Union: only one key present
 * //     stringValue: "STRING_VALUE",
 * //     booleanValue: true || false,
 * //     numberValue: Number("int"),
 * //     blobValue: new Uint8Array(),
 * //     timestampValue: new Date("TIMESTAMP"),
 * //     enumValue: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //     listValue: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     mapValue: { // StringMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     structureValue: { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //     renamedStructureValue: { // GreetingStruct
 * //       salutation: "STRING_VALUE",
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
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 * @public
 */
export class JsonUnionsCommand extends $Command
  .classBuilder<
    JsonUnionsCommandInput,
    JsonUnionsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "JsonUnions", {})
  .n("RestJsonProtocolClient", "JsonUnionsCommand")
  .f(void 0, void 0)
  .ser(se_JsonUnionsCommand)
  .de(de_JsonUnionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnionInputOutput;
      output: UnionInputOutput;
    };
    sdk: {
      input: JsonUnionsCommandInput;
      output: JsonUnionsCommandOutput;
    };
  };
}
