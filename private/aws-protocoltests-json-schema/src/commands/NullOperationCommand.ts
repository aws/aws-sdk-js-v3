// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { NullOperationInputOutput } from "../models/models_0";
import { NullOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link NullOperationCommand}.
 */
export interface NullOperationCommandInput extends NullOperationInputOutput {}
/**
 * @public
 *
 * The output of {@link NullOperationCommand}.
 */
export interface NullOperationCommandOutput extends NullOperationInputOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, NullOperationCommand } from "@aws-sdk/aws-protocoltests-json-schema"; // ES Modules import
 * // const { JsonProtocolClient, NullOperationCommand } = require("@aws-sdk/aws-protocoltests-json-schema"); // CommonJS import
 * // import type { JsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-json-schema";
 * const config = {}; // type is JsonProtocolClientConfig
 * const client = new JsonProtocolClient(config);
 * const input = { // NullOperationInputOutput
 *   string: "STRING_VALUE",
 * };
 * const command = new NullOperationCommand(input);
 * const response = await client.send(command);
 * // { // NullOperationInputOutput
 * //   string: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param NullOperationCommandInput - {@link NullOperationCommandInput}
 * @returns {@link NullOperationCommandOutput}
 * @see {@link NullOperationCommandInput} for command's `input` shape.
 * @see {@link NullOperationCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 */
export class NullOperationCommand extends command<NullOperationCommandInput, NullOperationCommandOutput>(
  _ep0,
  _mw0,
  "NullOperation",
  NullOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NullOperationInputOutput;
      output: NullOperationInputOutput;
    };
    sdk: {
      input: NullOperationCommandInput;
      output: NullOperationCommandOutput;
    };
  };
}
