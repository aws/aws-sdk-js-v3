// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { QueryListsInput } from "../models/models_0";
import { QueryLists } from "../schemas/schemas_6_Lists";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryListsCommand}.
 */
export interface QueryListsCommandInput extends QueryListsInput {}
/**
 * @public
 *
 * The output of {@link QueryListsCommand}.
 */
export interface QueryListsCommandOutput extends __MetadataBearer {}

/**
 * This test serializes simple and complex lists.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, QueryListsCommand } from "@aws-sdk/aws-protocoltests-ec2-schema"; // ES Modules import
 * // const { EC2ProtocolClient, QueryListsCommand } = require("@aws-sdk/aws-protocoltests-ec2-schema"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const input = { // QueryListsInput
 *   ListArg: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   ComplexListArg: [ // GreetingList
 *     { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   ],
 *   ListArgWithXmlNameMember: [ // ListWithXmlName
 *     "STRING_VALUE",
 *   ],
 *   ListArgWithXmlName: [
 *     "STRING_VALUE",
 *   ],
 *   NestedWithList: { // NestedStructWithList
 *     ListArg: [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new QueryListsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryListsCommandInput - {@link QueryListsCommandInput}
 * @returns {@link QueryListsCommandOutput}
 * @see {@link QueryListsCommandInput} for command's `input` shape.
 * @see {@link QueryListsCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 *
 * @public
 */
export class QueryListsCommand extends $Command
  .classBuilder<
    QueryListsCommandInput,
    QueryListsCommandOutput,
    EC2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsEc2", "QueryLists", {})
  .n("EC2ProtocolClient", "QueryListsCommand")
  .sc(QueryLists)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryListsInput;
      output: {};
    };
    sdk: {
      input: QueryListsCommandInput;
      output: QueryListsCommandOutput;
    };
  };
}
