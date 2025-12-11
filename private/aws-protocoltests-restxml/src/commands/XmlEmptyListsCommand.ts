// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { XmlEmptyListsRequest, XmlEmptyListsResponse } from "../models/models_0";
import { de_XmlEmptyListsCommand, se_XmlEmptyListsCommand } from "../protocols/Aws_restXml";
import type {
  RestXmlProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlEmptyListsCommand}.
 */
export interface XmlEmptyListsCommandInput extends XmlEmptyListsRequest {}
/**
 * @public
 *
 * The output of {@link XmlEmptyListsCommand}.
 */
export interface XmlEmptyListsCommandOutput extends XmlEmptyListsResponse, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlEmptyListsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlEmptyListsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlEmptyListsRequest
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
 *   renamedListMembers: [ // RenamedListMembers
 *     "STRING_VALUE",
 *   ],
 *   flattenedList: [
 *     "STRING_VALUE",
 *   ],
 *   flattenedList2: [
 *     "STRING_VALUE",
 *   ],
 *   flattenedListWithMemberNamespace: [ // ListWithMemberNamespace
 *     "STRING_VALUE",
 *   ],
 *   flattenedListWithNamespace: [ // ListWithNamespace
 *     "STRING_VALUE",
 *   ],
 *   structureList: [ // StructureList
 *     { // StructureListMember
 *       a: "STRING_VALUE",
 *       b: "STRING_VALUE",
 *     },
 *   ],
 *   flattenedStructureList: [
 *     {
 *       a: "STRING_VALUE",
 *       b: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new XmlEmptyListsCommand(input);
 * const response = await client.send(command);
 * // { // XmlEmptyListsResponse
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
 * //   renamedListMembers: [ // RenamedListMembers
 * //     "STRING_VALUE",
 * //   ],
 * //   flattenedList: [
 * //     "STRING_VALUE",
 * //   ],
 * //   flattenedList2: [
 * //     "STRING_VALUE",
 * //   ],
 * //   flattenedListWithMemberNamespace: [ // ListWithMemberNamespace
 * //     "STRING_VALUE",
 * //   ],
 * //   flattenedListWithNamespace: [ // ListWithNamespace
 * //     "STRING_VALUE",
 * //   ],
 * //   structureList: [ // StructureList
 * //     { // StructureListMember
 * //       a: "STRING_VALUE",
 * //       b: "STRING_VALUE",
 * //     },
 * //   ],
 * //   flattenedStructureList: [
 * //     {
 * //       a: "STRING_VALUE",
 * //       b: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param XmlEmptyListsCommandInput - {@link XmlEmptyListsCommandInput}
 * @returns {@link XmlEmptyListsCommandOutput}
 * @see {@link XmlEmptyListsCommandInput} for command's `input` shape.
 * @see {@link XmlEmptyListsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class XmlEmptyListsCommand extends $Command
  .classBuilder<
    XmlEmptyListsCommandInput,
    XmlEmptyListsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestXml", "XmlEmptyLists", {})
  .n("RestXmlProtocolClient", "XmlEmptyListsCommand")
  .f(void 0, void 0)
  .ser(se_XmlEmptyListsCommand)
  .de(de_XmlEmptyListsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlEmptyListsRequest;
      output: XmlEmptyListsResponse;
    };
    sdk: {
      input: XmlEmptyListsCommandInput;
      output: XmlEmptyListsCommandOutput;
    };
  };
}
