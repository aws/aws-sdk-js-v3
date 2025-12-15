// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { QueryIncompatibleOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryIncompatibleOperationCommand}.
 */
export interface QueryIncompatibleOperationCommandInput {}
/**
 * @public
 *
 * The output of {@link QueryIncompatibleOperationCommand}.
 */
export interface QueryIncompatibleOperationCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, QueryIncompatibleOperationCommand } from "@aws-sdk/aws-protocoltests-json-10-schema"; // ES Modules import
 * // const { JSONRPC10Client, QueryIncompatibleOperationCommand } = require("@aws-sdk/aws-protocoltests-json-10-schema"); // CommonJS import
 * // import type { JSONRPC10ClientConfig } from "@aws-sdk/aws-protocoltests-json-10-schema";
 * const config = {}; // type is JSONRPC10ClientConfig
 * const client = new JSONRPC10Client(config);
 * const input = {};
 * const command = new QueryIncompatibleOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryIncompatibleOperationCommandInput - {@link QueryIncompatibleOperationCommandInput}
 * @returns {@link QueryIncompatibleOperationCommandOutput}
 * @see {@link QueryIncompatibleOperationCommandInput} for command's `input` shape.
 * @see {@link QueryIncompatibleOperationCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 *
 */
export class QueryIncompatibleOperationCommand extends $Command
  .classBuilder<
    QueryIncompatibleOperationCommandInput,
    QueryIncompatibleOperationCommandOutput,
    JSONRPC10ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JSONRPC10ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("JsonRpc10", "QueryIncompatibleOperation", {})
  .n("JSONRPC10Client", "QueryIncompatibleOperationCommand")
  .sc(QueryIncompatibleOperation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: QueryIncompatibleOperationCommandInput;
      output: QueryIncompatibleOperationCommandOutput;
    };
  };
}
