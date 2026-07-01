// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { QueryTimestampsInput } from "../models/models_0";
import { QueryTimestamps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link QueryTimestampsCommand}.
 */
export interface QueryTimestampsCommandInput extends QueryTimestampsInput {}
/**
 * @public
 *
 * The output of {@link QueryTimestampsCommand}.
 */
export interface QueryTimestampsCommandOutput extends __MetadataBearer {}

/**
 * This test serializes timestamps.
 *
 * 1. Timestamps are serialized as RFC 3339 date-time values by default.
 * 2. A timestampFormat trait on a member changes the format.
 * 3. A timestampFormat trait on the shape targeted by the member changes the format.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, QueryTimestampsCommand } from "@aws-sdk/aws-protocoltests-ec2-schema"; // ES Modules import
 * // const { EC2ProtocolClient, QueryTimestampsCommand } = require("@aws-sdk/aws-protocoltests-ec2-schema"); // CommonJS import
 * // import type { EC2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-ec2-schema";
 * const config = {}; // type is EC2ProtocolClientConfig
 * const client = new EC2ProtocolClient(config);
 * const input = { // QueryTimestampsInput
 *   normalFormat: new Date("TIMESTAMP"),
 *   epochMember: new Date("TIMESTAMP"),
 *   epochTarget: new Date("TIMESTAMP"),
 * };
 * const command = new QueryTimestampsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryTimestampsCommandInput - {@link QueryTimestampsCommandInput}
 * @returns {@link QueryTimestampsCommandOutput}
 * @see {@link QueryTimestampsCommandInput} for command's `input` shape.
 * @see {@link QueryTimestampsCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 *
 * @public
 */
export class QueryTimestampsCommand extends command<QueryTimestampsCommandInput, QueryTimestampsCommandOutput>(
  _ep0,
  _mw0,
  "QueryTimestamps",
  QueryTimestamps$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryTimestampsInput;
      output: {};
    };
    sdk: {
      input: QueryTimestampsCommandInput;
      output: QueryTimestampsCommandOutput;
    };
  };
}
