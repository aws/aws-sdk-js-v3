// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { InputAndOutputWithHeadersIO } from "../models/models_0";
import { de_InputAndOutputWithHeadersCommand, se_InputAndOutputWithHeadersCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InputAndOutputWithHeadersCommand}.
 */
export interface InputAndOutputWithHeadersCommandInput extends InputAndOutputWithHeadersIO {}
/**
 * @public
 *
 * The output of {@link InputAndOutputWithHeadersCommand}.
 */
export interface InputAndOutputWithHeadersCommandOutput extends InputAndOutputWithHeadersIO, __MetadataBearer {}

/**
 * The example tests how requests and responses are serialized when there is
 * no input or output payload but there are HTTP header bindings.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, InputAndOutputWithHeadersCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, InputAndOutputWithHeadersCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // InputAndOutputWithHeadersIO
 *   headerString: "STRING_VALUE",
 *   headerByte: 0, // BYTE_VALUE
 *   headerShort: Number("short"),
 *   headerInteger: Number("int"),
 *   headerLong: Number("long"),
 *   headerFloat: Number("float"),
 *   headerDouble: Number("double"),
 *   headerTrueBool: true || false,
 *   headerFalseBool: true || false,
 *   headerStringList: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   headerStringSet: [ // StringSet
 *     "STRING_VALUE",
 *   ],
 *   headerIntegerList: [ // IntegerList
 *     Number("int"),
 *   ],
 *   headerBooleanList: [ // BooleanList
 *     true || false,
 *   ],
 *   headerTimestampList: [ // TimestampList
 *     new Date("TIMESTAMP"),
 *   ],
 *   headerEnum: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   headerEnumList: [ // FooEnumList
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 * };
 * const command = new InputAndOutputWithHeadersCommand(input);
 * const response = await client.send(command);
 * // { // InputAndOutputWithHeadersIO
 * //   headerString: "STRING_VALUE",
 * //   headerByte: 0, // BYTE_VALUE
 * //   headerShort: Number("short"),
 * //   headerInteger: Number("int"),
 * //   headerLong: Number("long"),
 * //   headerFloat: Number("float"),
 * //   headerDouble: Number("double"),
 * //   headerTrueBool: true || false,
 * //   headerFalseBool: true || false,
 * //   headerStringList: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   headerStringSet: [ // StringSet
 * //     "STRING_VALUE",
 * //   ],
 * //   headerIntegerList: [ // IntegerList
 * //     Number("int"),
 * //   ],
 * //   headerBooleanList: [ // BooleanList
 * //     true || false,
 * //   ],
 * //   headerTimestampList: [ // TimestampList
 * //     new Date("TIMESTAMP"),
 * //   ],
 * //   headerEnum: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   headerEnumList: [ // FooEnumList
 * //     "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   ],
 * // };
 *
 * ```
 *
 * @param InputAndOutputWithHeadersCommandInput - {@link InputAndOutputWithHeadersCommandInput}
 * @returns {@link InputAndOutputWithHeadersCommandOutput}
 * @see {@link InputAndOutputWithHeadersCommandInput} for command's `input` shape.
 * @see {@link InputAndOutputWithHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class InputAndOutputWithHeadersCommand extends $Command
  .classBuilder<
    InputAndOutputWithHeadersCommandInput,
    InputAndOutputWithHeadersCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "InputAndOutputWithHeaders", {})
  .n("RestXmlProtocolClient", "InputAndOutputWithHeadersCommand")
  .f(void 0, void 0)
  .ser(se_InputAndOutputWithHeadersCommand)
  .de(de_InputAndOutputWithHeadersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InputAndOutputWithHeadersIO;
      output: InputAndOutputWithHeadersIO;
    };
    sdk: {
      input: InputAndOutputWithHeadersCommandInput;
      output: InputAndOutputWithHeadersCommandOutput;
    };
  };
}
