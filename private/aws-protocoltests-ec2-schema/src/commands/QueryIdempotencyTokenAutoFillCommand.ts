// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { QueryIdempotencyTokenAutoFillInput } from "../models/models_0";
import { QueryIdempotencyTokenAutoFill$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { EC2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-ec2-schema";
 * const config = {}; // type is EC2ProtocolClientConfig
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
export class QueryIdempotencyTokenAutoFillCommand extends command<QueryIdempotencyTokenAutoFillCommandInput, QueryIdempotencyTokenAutoFillCommandOutput>(
  _ep0,
  _mw0,
  "QueryIdempotencyTokenAutoFill",
  QueryIdempotencyTokenAutoFill$
) {
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
