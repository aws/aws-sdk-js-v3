// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { QueryIdempotencyTokenAutoFillInput } from "../models/models_0";
import {
  de_QueryIdempotencyTokenAutoFillCommand,
  se_QueryIdempotencyTokenAutoFillCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryIdempotencyTokenAutoFillCommand}.
 */
export interface QueryIdempotencyTokenAutoFillCommandInput extends QueryIdempotencyTokenAutoFillInput {}
/**
 * @public
 *
 * The output of {@link QueryIdempotencyTokenAutoFillCommand}.
 */
export interface QueryIdempotencyTokenAutoFillCommandOutput extends __MetadataBearer {}

/**
 * Automatically adds idempotency tokens.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, QueryIdempotencyTokenAutoFillCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, QueryIdempotencyTokenAutoFillCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // QueryIdempotencyTokenAutoFillInput
 *   token: "STRING_VALUE",
 * };
 * const command = new QueryIdempotencyTokenAutoFillCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryIdempotencyTokenAutoFillCommandInput - {@link QueryIdempotencyTokenAutoFillCommandInput}
 * @returns {@link QueryIdempotencyTokenAutoFillCommandOutput}
 * @see {@link QueryIdempotencyTokenAutoFillCommandInput} for command's `input` shape.
 * @see {@link QueryIdempotencyTokenAutoFillCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class QueryIdempotencyTokenAutoFillCommand extends $Command
  .classBuilder<
    QueryIdempotencyTokenAutoFillCommandInput,
    QueryIdempotencyTokenAutoFillCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "QueryIdempotencyTokenAutoFill", {})
  .n("RestXmlProtocolClient", "QueryIdempotencyTokenAutoFillCommand")
  .f(void 0, void 0)
  .ser(se_QueryIdempotencyTokenAutoFillCommand)
  .de(de_QueryIdempotencyTokenAutoFillCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryIdempotencyTokenAutoFillInput;
      output: {};
    };
    sdk: {
      input: QueryIdempotencyTokenAutoFillCommandInput;
      output: QueryIdempotencyTokenAutoFillCommandOutput;
    };
  };
}
