// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InputAndOutputWithHeadersIO } from "../models/models_0";
import { de_InputAndOutputWithHeadersCommand, se_InputAndOutputWithHeadersCommand } from "../protocols/Aws_restJson1";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, InputAndOutputWithHeadersCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, InputAndOutputWithHeadersCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
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
 *   headerIntegerEnum: 1 || 2 || 3,
 *   headerIntegerEnumList: [ // IntegerEnumList
 *     1 || 2 || 3,
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
 * //   headerIntegerEnum: 1 || 2 || 3,
 * //   headerIntegerEnumList: [ // IntegerEnumList
 * //     1 || 2 || 3,
 * //   ],
 * // };
 *
 * ```
 *
 * @param InputAndOutputWithHeadersCommandInput - {@link InputAndOutputWithHeadersCommandInput}
 * @returns {@link InputAndOutputWithHeadersCommandOutput}
 * @see {@link InputAndOutputWithHeadersCommandInput} for command's `input` shape.
 * @see {@link InputAndOutputWithHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class InputAndOutputWithHeadersCommand extends $Command
  .classBuilder<
    InputAndOutputWithHeadersCommandInput,
    InputAndOutputWithHeadersCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestJson", "InputAndOutputWithHeaders", {})
  .n("RestJsonProtocolClient", "InputAndOutputWithHeadersCommand")
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
