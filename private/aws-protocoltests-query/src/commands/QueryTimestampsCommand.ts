// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { QueryTimestampsInput } from "../models/models_0";
import { de_QueryTimestampsCommand, se_QueryTimestampsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * import { QueryProtocolClient, QueryTimestampsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, QueryTimestampsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
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
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class QueryTimestampsCommand extends $Command
  .classBuilder<
    QueryTimestampsCommandInput,
    QueryTimestampsCommandOutput,
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
  .s("AwsQuery", "QueryTimestamps", {})
  .n("QueryProtocolClient", "QueryTimestampsCommand")
  .f(void 0, void 0)
  .ser(se_QueryTimestampsCommand)
  .de(de_QueryTimestampsCommand)
  .build() {
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
