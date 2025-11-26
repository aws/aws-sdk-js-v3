// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { JsonListsInputOutput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { JsonLists } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link JsonListsCommand}.
 */
export interface JsonListsCommandInput extends JsonListsInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonListsCommand}.
 */
export interface JsonListsCommandOutput extends JsonListsInputOutput, __MetadataBearer {}

/**
 * This test case serializes JSON lists for the following cases for both
 * input and output:
 *
 * 1. Normal JSON lists.
 * 2. Normal JSON sets.
 * 3. JSON lists of lists.
 * 4. Lists of structures.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonListsCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonListsCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // JsonListsInputOutput
 *   stringList: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   stringSet: [ // StringSet
 *     "STRING_VALUE",
 *   ],
 *   integerList: [ // IntegerList
 *     Number("int"),
 *   ],
 *   booleanList: [ // BooleanList
 *     true || false,
 *   ],
 *   timestampList: [ // TimestampList
 *     new Date("TIMESTAMP"),
 *   ],
 *   enumList: [ // FooEnumList
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   intEnumList: [ // IntegerEnumList
 *     1 || 2 || 3,
 *   ],
 *   nestedStringList: [ // NestedStringList
 *     [
 *       "STRING_VALUE",
 *     ],
 *   ],
 *   structureList: [ // StructureList
 *     { // StructureListMember
 *       a: "STRING_VALUE",
 *       b: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new JsonListsCommand(input);
 * const response = await client.send(command);
 * // { // JsonListsInputOutput
 * //   stringList: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   stringSet: [ // StringSet
 * //     "STRING_VALUE",
 * //   ],
 * //   integerList: [ // IntegerList
 * //     Number("int"),
 * //   ],
 * //   booleanList: [ // BooleanList
 * //     true || false,
 * //   ],
 * //   timestampList: [ // TimestampList
 * //     new Date("TIMESTAMP"),
 * //   ],
 * //   enumList: [ // FooEnumList
 * //     "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   ],
 * //   intEnumList: [ // IntegerEnumList
 * //     1 || 2 || 3,
 * //   ],
 * //   nestedStringList: [ // NestedStringList
 * //     [
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * //   structureList: [ // StructureList
 * //     { // StructureListMember
 * //       a: "STRING_VALUE",
 * //       b: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param JsonListsCommandInput - {@link JsonListsCommandInput}
 * @returns {@link JsonListsCommandOutput}
 * @see {@link JsonListsCommandInput} for command's `input` shape.
 * @see {@link JsonListsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class JsonListsCommand extends $Command
  .classBuilder<
    JsonListsCommandInput,
    JsonListsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "JsonLists", {})
  .n("RestJsonProtocolClient", "JsonListsCommand")
  .sc(JsonLists)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: JsonListsInputOutput;
      output: JsonListsInputOutput;
    };
    sdk: {
      input: JsonListsCommandInput;
      output: JsonListsCommandOutput;
    };
  };
}
