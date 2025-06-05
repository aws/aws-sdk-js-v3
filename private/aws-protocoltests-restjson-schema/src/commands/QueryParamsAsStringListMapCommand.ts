// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { QueryParamsAsStringListMapInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { QueryParamsAsStringListMap } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryParamsAsStringListMapCommand}.
 */
export interface QueryParamsAsStringListMapCommandInput extends QueryParamsAsStringListMapInput {}
/**
 * @public
 *
 * The output of {@link QueryParamsAsStringListMapCommand}.
 */
export interface QueryParamsAsStringListMapCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, QueryParamsAsStringListMapCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, QueryParamsAsStringListMapCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // QueryParamsAsStringListMapInput
 *   qux: "STRING_VALUE",
 *   foo: { // StringListMap
 *     "<keys>": [ // StringList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new QueryParamsAsStringListMapCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryParamsAsStringListMapCommandInput - {@link QueryParamsAsStringListMapCommandInput}
 * @returns {@link QueryParamsAsStringListMapCommandOutput}
 * @see {@link QueryParamsAsStringListMapCommandInput} for command's `input` shape.
 * @see {@link QueryParamsAsStringListMapCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class QueryParamsAsStringListMapCommand extends $Command
  .classBuilder<
    QueryParamsAsStringListMapCommandInput,
    QueryParamsAsStringListMapCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "QueryParamsAsStringListMap", {})
  .n("RestJsonProtocolClient", "QueryParamsAsStringListMapCommand")
  .f(void 0, void 0)
  .sc(QueryParamsAsStringListMap)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryParamsAsStringListMapInput;
      output: {};
    };
    sdk: {
      input: QueryParamsAsStringListMapCommandInput;
      output: QueryParamsAsStringListMapCommandOutput;
    };
  };
}
