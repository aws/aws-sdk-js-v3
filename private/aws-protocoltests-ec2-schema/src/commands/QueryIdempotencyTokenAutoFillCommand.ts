// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { QueryIdempotencyTokenAutoFillInput } from "../models/models_0";
import { QueryIdempotencyTokenAutoFill } from "../schemas/schemas_13_QueryIdempotencyTokenAutoFill";

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
 * import { EC2ProtocolClient, QueryIdempotencyTokenAutoFillCommand } from "@aws-sdk/aws-protocoltests-ec2-schema"; // ES Modules import
 * // const { EC2ProtocolClient, QueryIdempotencyTokenAutoFillCommand } = require("@aws-sdk/aws-protocoltests-ec2-schema"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
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
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 *
 * @public
 */
export class QueryIdempotencyTokenAutoFillCommand extends $Command
  .classBuilder<
    QueryIdempotencyTokenAutoFillCommandInput,
    QueryIdempotencyTokenAutoFillCommandOutput,
    EC2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsEc2", "QueryIdempotencyTokenAutoFill", {})
  .n("EC2ProtocolClient", "QueryIdempotencyTokenAutoFillCommand")
  .sc(QueryIdempotencyTokenAutoFill)
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
