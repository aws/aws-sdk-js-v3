// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AllQueryStringTypesInput } from "../models/models_0";
import { de_AllQueryStringTypesCommand, se_AllQueryStringTypesCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AllQueryStringTypesCommand}.
 */
export interface AllQueryStringTypesCommandInput extends AllQueryStringTypesInput {}
/**
 * @public
 *
 * The output of {@link AllQueryStringTypesCommand}.
 */
export interface AllQueryStringTypesCommandOutput extends __MetadataBearer {}

/**
 * This example uses all query string types.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, AllQueryStringTypesCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, AllQueryStringTypesCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // AllQueryStringTypesInput
 *   queryString: "STRING_VALUE",
 *   queryStringList: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   queryStringSet: [ // StringSet
 *     "STRING_VALUE",
 *   ],
 *   queryByte: 0, // BYTE_VALUE
 *   queryShort: Number("short"),
 *   queryInteger: Number("int"),
 *   queryIntegerList: [ // IntegerList
 *     Number("int"),
 *   ],
 *   queryIntegerSet: [ // IntegerSet
 *     Number("int"),
 *   ],
 *   queryLong: Number("long"),
 *   queryFloat: Number("float"),
 *   queryDouble: Number("double"),
 *   queryDoubleList: [ // DoubleList
 *     Number("double"),
 *   ],
 *   queryBoolean: true || false,
 *   queryBooleanList: [ // BooleanList
 *     true || false,
 *   ],
 *   queryTimestamp: new Date("TIMESTAMP"),
 *   queryTimestampList: [ // TimestampList
 *     new Date("TIMESTAMP"),
 *   ],
 *   queryEnum: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   queryEnumList: [ // FooEnumList
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   queryIntegerEnum: 1 || 2 || 3,
 *   queryIntegerEnumList: [ // IntegerEnumList
 *     1 || 2 || 3,
 *   ],
 *   queryParamsMapOfStringList: { // StringListMap
 *     "<keys>": [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new AllQueryStringTypesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AllQueryStringTypesCommandInput - {@link AllQueryStringTypesCommandInput}
 * @returns {@link AllQueryStringTypesCommandOutput}
 * @see {@link AllQueryStringTypesCommandInput} for command's `input` shape.
 * @see {@link AllQueryStringTypesCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 * @public
 */
export class AllQueryStringTypesCommand extends $Command
  .classBuilder<
    AllQueryStringTypesCommandInput,
    AllQueryStringTypesCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "AllQueryStringTypes", {})
  .n("RestJsonProtocolClient", "AllQueryStringTypesCommand")
  .f(void 0, void 0)
  .ser(se_AllQueryStringTypesCommand)
  .de(de_AllQueryStringTypesCommand)
  .build() {}
