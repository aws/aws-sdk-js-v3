// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { XmlListsOutput } from "../models/models_0";
import type { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import { XmlEmptyLists } from "../schemas/schemas_0";

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
export interface XmlEmptyListsCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlEmptyListsCommand}.
 */
export interface XmlEmptyListsCommandOutput extends XmlListsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlEmptyListsCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, XmlEmptyListsCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new XmlEmptyListsCommand(input);
 * const response = await client.send(command);
 * // { // XmlListsOutput
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
 * // };
 *
 * ```
 *
 * @param XmlEmptyListsCommandInput - {@link XmlEmptyListsCommandInput}
 * @returns {@link XmlEmptyListsCommandOutput}
 * @see {@link XmlEmptyListsCommandInput} for command's `input` shape.
 * @see {@link XmlEmptyListsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 */
export class XmlEmptyListsCommand extends $Command
  .classBuilder<
    XmlEmptyListsCommandInput,
    XmlEmptyListsCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsQuery", "XmlEmptyLists", {})
  .n("QueryProtocolClient", "XmlEmptyListsCommand")
  .sc(XmlEmptyLists)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: XmlListsOutput;
    };
    sdk: {
      input: XmlEmptyListsCommandInput;
      output: XmlEmptyListsCommandOutput;
    };
  };
}
