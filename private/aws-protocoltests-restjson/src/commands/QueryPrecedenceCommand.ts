// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { QueryPrecedenceInput } from "../models/models_0";
import { de_QueryPrecedenceCommand, se_QueryPrecedenceCommand } from "../protocols/Aws_restJson1";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryPrecedenceCommand}.
 */
export interface QueryPrecedenceCommandInput extends QueryPrecedenceInput {}
/**
 * @public
 *
 * The output of {@link QueryPrecedenceCommand}.
 */
export interface QueryPrecedenceCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, QueryPrecedenceCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, QueryPrecedenceCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // QueryPrecedenceInput
 *   foo: "STRING_VALUE",
 *   baz: { // StringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new QueryPrecedenceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryPrecedenceCommandInput - {@link QueryPrecedenceCommandInput}
 * @returns {@link QueryPrecedenceCommandOutput}
 * @see {@link QueryPrecedenceCommandInput} for command's `input` shape.
 * @see {@link QueryPrecedenceCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class QueryPrecedenceCommand extends $Command
  .classBuilder<
    QueryPrecedenceCommandInput,
    QueryPrecedenceCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestJson", "QueryPrecedence", {})
  .n("RestJsonProtocolClient", "QueryPrecedenceCommand")
  .f(void 0, void 0)
  .ser(se_QueryPrecedenceCommand)
  .de(de_QueryPrecedenceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryPrecedenceInput;
      output: {};
    };
    sdk: {
      input: QueryPrecedenceCommandInput;
      output: QueryPrecedenceCommandOutput;
    };
  };
}
