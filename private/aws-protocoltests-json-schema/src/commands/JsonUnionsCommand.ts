// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { UnionInputOutput } from "../models/models_0";
import { JsonUnions } from "../schemas/schemas";

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
 * import { JsonProtocolClient, JsonUnionsCommand } from "@aws-sdk/aws-protocoltests-json-schema"; // ES Modules import
 * // const { JsonProtocolClient, JsonUnionsCommand } = require("@aws-sdk/aws-protocoltests-json-schema"); // CommonJS import
 * const client = new JsonProtocolClient(config);
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
 * //   },
 * // };
 *
 * ```
 *
 * @param JsonUnionsCommandInput - {@link JsonUnionsCommandInput}
 * @returns {@link JsonUnionsCommandOutput}
 * @see {@link JsonUnionsCommandInput} for command's `input` shape.
 * @see {@link JsonUnionsCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 * @public
 */
export class JsonUnionsCommand extends $Command
  .classBuilder<
    JsonUnionsCommandInput,
    JsonUnionsCommandOutput,
    JsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("JsonProtocol", "JsonUnions", {})
  .n("JsonProtocolClient", "JsonUnionsCommand")
  .sc(JsonUnions)
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
