// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { OmitsSerializingEmptyListsInput } from "../models/models_0";
import { de_OmitsSerializingEmptyListsCommand, se_OmitsSerializingEmptyListsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OmitsSerializingEmptyListsCommand}.
 */
export interface OmitsSerializingEmptyListsCommandInput extends OmitsSerializingEmptyListsInput {}
/**
 * @public
 *
 * The output of {@link OmitsSerializingEmptyListsCommand}.
 */
export interface OmitsSerializingEmptyListsCommandOutput extends __MetadataBearer {}

/**
 * Omits serializing empty lists. Because empty strings are serilized as
 * `Foo=`, empty lists cannot also be serialized as `Foo=` and instead
 * must be omitted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, OmitsSerializingEmptyListsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, OmitsSerializingEmptyListsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // OmitsSerializingEmptyListsInput
 *   queryStringList: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   queryIntegerList: [ // IntegerList
 *     Number("int"),
 *   ],
 *   queryDoubleList: [ // DoubleList
 *     Number("double"),
 *   ],
 *   queryBooleanList: [ // BooleanList
 *     true || false,
 *   ],
 *   queryTimestampList: [ // TimestampList
 *     new Date("TIMESTAMP"),
 *   ],
 *   queryEnumList: [ // FooEnumList
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   queryIntegerEnumList: [ // IntegerEnumList
 *     1 || 2 || 3,
 *   ],
 * };
 * const command = new OmitsSerializingEmptyListsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OmitsSerializingEmptyListsCommandInput - {@link OmitsSerializingEmptyListsCommandInput}
 * @returns {@link OmitsSerializingEmptyListsCommandOutput}
 * @see {@link OmitsSerializingEmptyListsCommandInput} for command's `input` shape.
 * @see {@link OmitsSerializingEmptyListsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class OmitsSerializingEmptyListsCommand extends $Command
  .classBuilder<
    OmitsSerializingEmptyListsCommandInput,
    OmitsSerializingEmptyListsCommandOutput,
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
  .s("RestJson", "OmitsSerializingEmptyLists", {})
  .n("RestJsonProtocolClient", "OmitsSerializingEmptyListsCommand")
  .f(void 0, void 0)
  .ser(se_OmitsSerializingEmptyListsCommand)
  .de(de_OmitsSerializingEmptyListsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OmitsSerializingEmptyListsInput;
      output: {};
    };
    sdk: {
      input: OmitsSerializingEmptyListsCommandInput;
      output: OmitsSerializingEmptyListsCommandOutput;
    };
  };
}
