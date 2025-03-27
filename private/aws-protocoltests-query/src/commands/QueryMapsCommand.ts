// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { QueryMapsInput } from "../models/models_0";
import { de_QueryMapsCommand, se_QueryMapsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryMapsCommand}.
 */
export interface QueryMapsCommandInput extends QueryMapsInput {}
/**
 * @public
 *
 * The output of {@link QueryMapsCommand}.
 */
export interface QueryMapsCommandOutput extends __MetadataBearer {}

/**
 * This test serializes simple and complex maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, QueryMapsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, QueryMapsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = { // QueryMapsInput
 *   MapArg: { // StringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RenamedMapArg: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ComplexMapArg: { // ComplexMap
 *     "<keys>": { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   },
 *   MapWithXmlMemberName: { // MapWithXmlName
 *     "<keys>": "STRING_VALUE",
 *   },
 *   FlattenedMap: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   FlattenedMapWithXmlName: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MapOfLists: { // MapOfLists
 *     "<keys>": [ // StringList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   NestedStructWithMap: { // NestedStructWithMap
 *     MapArg: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new QueryMapsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryMapsCommandInput - {@link QueryMapsCommandInput}
 * @returns {@link QueryMapsCommandOutput}
 * @see {@link QueryMapsCommandInput} for command's `input` shape.
 * @see {@link QueryMapsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class QueryMapsCommand extends $Command
  .classBuilder<
    QueryMapsCommandInput,
    QueryMapsCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("AwsQuery", "QueryMaps", {})
  .n("QueryProtocolClient", "QueryMapsCommand")
  .f(void 0, void 0)
  .ser(se_QueryMapsCommand)
  .de(de_QueryMapsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryMapsInput;
      output: {};
    };
    sdk: {
      input: QueryMapsCommandInput;
      output: QueryMapsCommandOutput;
    };
  };
}
