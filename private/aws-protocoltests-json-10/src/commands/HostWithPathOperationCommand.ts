// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { de_HostWithPathOperationCommand, se_HostWithPathOperationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HostWithPathOperationCommand}.
 */
export interface HostWithPathOperationCommandInput {}
/**
 * @public
 *
 * The output of {@link HostWithPathOperationCommand}.
 */
export interface HostWithPathOperationCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, HostWithPathOperationCommand } from "@aws-sdk/aws-protocoltests-json-10"; // ES Modules import
 * // const { JSONRPC10Client, HostWithPathOperationCommand } = require("@aws-sdk/aws-protocoltests-json-10"); // CommonJS import
 * const client = new JSONRPC10Client(config);
 * const input = {};
 * const command = new HostWithPathOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HostWithPathOperationCommandInput - {@link HostWithPathOperationCommandInput}
 * @returns {@link HostWithPathOperationCommandOutput}
 * @see {@link HostWithPathOperationCommandInput} for command's `input` shape.
 * @see {@link HostWithPathOperationCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 */
export class HostWithPathOperationCommand extends $Command
  .classBuilder<
    HostWithPathOperationCommandInput,
    HostWithPathOperationCommandOutput,
    JSONRPC10ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: JSONRPC10ClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("JsonRpc10", "HostWithPathOperation", {})
  .n("JSONRPC10Client", "HostWithPathOperationCommand")
  .f(void 0, void 0)
  .ser(se_HostWithPathOperationCommand)
  .de(de_HostWithPathOperationCommand)
  .build() {}
