// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { PutWithContentEncodingInput } from "../models/models_0";
import { PutWithContentEncoding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutWithContentEncodingCommand}.
 */
export interface PutWithContentEncodingCommandInput extends PutWithContentEncodingInput {}
/**
 * @public
 *
 * The output of {@link PutWithContentEncodingCommand}.
 */
export interface PutWithContentEncodingCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, PutWithContentEncodingCommand } from "@aws-sdk/aws-protocoltests-json-10-schema"; // ES Modules import
 * // const { JSONRPC10Client, PutWithContentEncodingCommand } = require("@aws-sdk/aws-protocoltests-json-10-schema"); // CommonJS import
 * // import type { JSONRPC10ClientConfig } from "@aws-sdk/aws-protocoltests-json-10-schema";
 * const config = {}; // type is JSONRPC10ClientConfig
 * const client = new JSONRPC10Client(config);
 * const input = { // PutWithContentEncodingInput
 *   encoding: "STRING_VALUE",
 *   data: "STRING_VALUE",
 * };
 * const command = new PutWithContentEncodingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutWithContentEncodingCommandInput - {@link PutWithContentEncodingCommandInput}
 * @returns {@link PutWithContentEncodingCommandOutput}
 * @see {@link PutWithContentEncodingCommandInput} for command's `input` shape.
 * @see {@link PutWithContentEncodingCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 *
 */
export class PutWithContentEncodingCommand extends command<PutWithContentEncodingCommandInput, PutWithContentEncodingCommandOutput>(
  _ep0,
  _mw1,
  "PutWithContentEncoding",
  PutWithContentEncoding$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutWithContentEncodingInput;
      output: {};
    };
    sdk: {
      input: PutWithContentEncodingCommandInput;
      output: PutWithContentEncodingCommandOutput;
    };
  };
}
