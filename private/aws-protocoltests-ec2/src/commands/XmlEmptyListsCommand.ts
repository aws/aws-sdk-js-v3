// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { XmlListsOutput } from "../models/models_0";
import { de_XmlEmptyListsCommand, se_XmlEmptyListsCommand } from "../protocols/Aws_ec2";

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
 * import { EC2ProtocolClient, XmlEmptyListsCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, XmlEmptyListsCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
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
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 */
export class XmlEmptyListsCommand extends $Command
  .classBuilder<
    XmlEmptyListsCommandInput,
    XmlEmptyListsCommandOutput,
    EC2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: EC2ProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("AwsEc2", "XmlEmptyLists", {})
  .n("EC2ProtocolClient", "XmlEmptyListsCommand")
  .f(void 0, void 0)
  .ser(se_XmlEmptyListsCommand)
  .de(de_XmlEmptyListsCommand)
  .build() {}
