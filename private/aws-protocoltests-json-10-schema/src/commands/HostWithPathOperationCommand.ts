// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { HostWithPathOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * import { JSONRPC10Client, HostWithPathOperationCommand } from "@aws-sdk/aws-protocoltests-json-10-schema"; // ES Modules import
 * // const { JSONRPC10Client, HostWithPathOperationCommand } = require("@aws-sdk/aws-protocoltests-json-10-schema"); // CommonJS import
 * // import type { JSONRPC10ClientConfig } from "@aws-sdk/aws-protocoltests-json-10-schema";
 * const config = {}; // type is JSONRPC10ClientConfig
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
 *
 */
export class HostWithPathOperationCommand extends command<HostWithPathOperationCommandInput, HostWithPathOperationCommandOutput>(
  _ep0,
  _mw0,
  "HostWithPathOperation",
  HostWithPathOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: HostWithPathOperationCommandInput;
      output: HostWithPathOperationCommandOutput;
    };
  };
}
