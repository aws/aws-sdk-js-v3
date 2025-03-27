// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { JsonEnumsInputOutput } from "../models/models_0";
import { de_JsonEnumsCommand, se_JsonEnumsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link JsonEnumsCommand}.
 */
export interface JsonEnumsCommandInput extends JsonEnumsInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonEnumsCommand}.
 */
export interface JsonEnumsCommandOutput extends JsonEnumsInputOutput, __MetadataBearer {}

/**
 * This example serializes enums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonEnumsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonEnumsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // JsonEnumsInputOutput
 *   fooEnum1: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   fooEnum2: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   fooEnum3: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   fooEnumList: [ // FooEnumList
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   fooEnumSet: [ // FooEnumSet
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   fooEnumMap: { // FooEnumMap
 *     "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 *   },
 * };
 * const command = new JsonEnumsCommand(input);
 * const response = await client.send(command);
 * // { // JsonEnumsInputOutput
 * //   fooEnum1: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   fooEnum2: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   fooEnum3: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   fooEnumList: [ // FooEnumList
 * //     "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   ],
 * //   fooEnumSet: [ // FooEnumSet
 * //     "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   ],
 * //   fooEnumMap: { // FooEnumMap
 * //     "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   },
 * // };
 *
 * ```
 *
 * @param JsonEnumsCommandInput - {@link JsonEnumsCommandInput}
 * @returns {@link JsonEnumsCommandOutput}
 * @see {@link JsonEnumsCommandInput} for command's `input` shape.
 * @see {@link JsonEnumsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class JsonEnumsCommand extends $Command
  .classBuilder<
    JsonEnumsCommandInput,
    JsonEnumsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "JsonEnums", {})
  .n("RestJsonProtocolClient", "JsonEnumsCommand")
  .f(void 0, void 0)
  .ser(se_JsonEnumsCommand)
  .de(de_JsonEnumsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: JsonEnumsInputOutput;
      output: JsonEnumsInputOutput;
    };
    sdk: {
      input: JsonEnumsCommandInput;
      output: JsonEnumsCommandOutput;
    };
  };
}
