// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { QueryListsInput } from "../models/models_0";
import { de_QueryListsCommand, se_QueryListsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

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
 * import { QueryProtocolClient, QueryListsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, QueryListsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = { // QueryListsInput
 *   ListArg: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   ComplexListArg: [ // GreetingList
 *     { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   ],
 *   FlattenedListArg: [
 *     "STRING_VALUE",
 *   ],
 *   ListArgWithXmlNameMember: [ // ListWithXmlName
 *     "STRING_VALUE",
 *   ],
 *   FlattenedListArgWithXmlName: [
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
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class QueryListsCommand extends $Command
  .classBuilder<
    QueryListsCommandInput,
    QueryListsCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsQuery", "QueryLists", {})
  .n("QueryProtocolClient", "QueryListsCommand")
  .f(void 0, void 0)
  .ser(se_QueryListsCommand)
  .de(de_QueryListsCommand)
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
