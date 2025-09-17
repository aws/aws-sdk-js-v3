// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { XmlListsRequest, XmlListsResponse } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { XmlLists } from "../schemas/schemas_3_Xml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlListsCommand}.
 */
export interface XmlListsCommandInput extends XmlListsRequest {}
/**
 * @public
 *
 * The output of {@link XmlListsCommand}.
 */
export interface XmlListsCommandOutput extends XmlListsResponse, __MetadataBearer {}

/**
 * This test case serializes XML lists for the following cases for both
 * input and output:
 *
 * 1. Normal XML lists.
 * 2. Normal XML sets.
 * 3. XML lists of lists.
 * 4. XML lists with @xmlName on its members
 * 5. Flattened XML lists.
 * 6. Flattened XML lists with @xmlName.
 * 7. Flattened XML lists with @xmlNamespace.
 * 8. Lists of structures.
 * 9. Flattened XML list of structures
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlListsCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlListsCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlListsRequest
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
 * const command = new XmlListsCommand(input);
 * const response = await client.send(command);
 * // { // XmlListsResponse
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
 * @param XmlListsCommandInput - {@link XmlListsCommandInput}
 * @returns {@link XmlListsCommandOutput}
 * @see {@link XmlListsCommandInput} for command's `input` shape.
 * @see {@link XmlListsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class XmlListsCommand extends $Command
  .classBuilder<
    XmlListsCommandInput,
    XmlListsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "XmlLists", {})
  .n("RestXmlProtocolClient", "XmlListsCommand")
  .sc(XmlLists)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlListsRequest;
      output: XmlListsResponse;
    };
    sdk: {
      input: XmlListsCommandInput;
      output: XmlListsCommandOutput;
    };
  };
}
