// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { EndpointOperation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EndpointOperationCommand}.
 */
export interface EndpointOperationCommandInput {}
/**
 * @public
 *
 * The output of {@link EndpointOperationCommand}.
 */
export interface EndpointOperationCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, EndpointOperationCommand } from "@aws-sdk/aws-protocoltests-json-10-schema"; // ES Modules import
 * // const { JSONRPC10Client, EndpointOperationCommand } = require("@aws-sdk/aws-protocoltests-json-10-schema"); // CommonJS import
 * // import type { JSONRPC10ClientConfig } from "@aws-sdk/aws-protocoltests-json-10-schema";
 * const config = {}; // type is JSONRPC10ClientConfig
 * const client = new JSONRPC10Client(config);
 * const input = {};
 * const command = new EndpointOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EndpointOperationCommandInput - {@link EndpointOperationCommandInput}
 * @returns {@link EndpointOperationCommandOutput}
 * @see {@link EndpointOperationCommandInput} for command's `input` shape.
 * @see {@link EndpointOperationCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 *
 */
export class EndpointOperationCommand extends $Command
  .classBuilder<
    EndpointOperationCommandInput,
    EndpointOperationCommandOutput,
    JSONRPC10ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JSONRPC10ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("JsonRpc10", "EndpointOperation", {})
  .n("JSONRPC10Client", "EndpointOperationCommand")
  .sc(EndpointOperation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EndpointOperationCommandInput;
      output: EndpointOperationCommandOutput;
    };
  };
}
