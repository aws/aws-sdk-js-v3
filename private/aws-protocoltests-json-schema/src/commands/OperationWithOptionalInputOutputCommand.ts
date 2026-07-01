// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { OperationWithOptionalInputOutputInput, OperationWithOptionalInputOutputOutput } from "../models/models_0";
import { OperationWithOptionalInputOutput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link OperationWithOptionalInputOutputCommand}.
 */
export interface OperationWithOptionalInputOutputCommandInput extends OperationWithOptionalInputOutputInput {}
/**
 * @public
 *
 * The output of {@link OperationWithOptionalInputOutputCommand}.
 */
export interface OperationWithOptionalInputOutputCommandOutput extends OperationWithOptionalInputOutputOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, OperationWithOptionalInputOutputCommand } from "@aws-sdk/aws-protocoltests-json-schema"; // ES Modules import
 * // const { JsonProtocolClient, OperationWithOptionalInputOutputCommand } = require("@aws-sdk/aws-protocoltests-json-schema"); // CommonJS import
 * // import type { JsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-json-schema";
 * const config = {}; // type is JsonProtocolClientConfig
 * const client = new JsonProtocolClient(config);
 * const input = { // OperationWithOptionalInputOutputInput
 *   Value: "STRING_VALUE",
 * };
 * const command = new OperationWithOptionalInputOutputCommand(input);
 * const response = await client.send(command);
 * // { // OperationWithOptionalInputOutputOutput
 * //   Value: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param OperationWithOptionalInputOutputCommandInput - {@link OperationWithOptionalInputOutputCommandInput}
 * @returns {@link OperationWithOptionalInputOutputCommandOutput}
 * @see {@link OperationWithOptionalInputOutputCommandInput} for command's `input` shape.
 * @see {@link OperationWithOptionalInputOutputCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 */
export class OperationWithOptionalInputOutputCommand extends command<OperationWithOptionalInputOutputCommandInput, OperationWithOptionalInputOutputCommandOutput>(
  _ep0,
  _mw0,
  "OperationWithOptionalInputOutput",
  OperationWithOptionalInputOutput$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OperationWithOptionalInputOutputInput;
      output: OperationWithOptionalInputOutputOutput;
    };
    sdk: {
      input: OperationWithOptionalInputOutputCommandInput;
      output: OperationWithOptionalInputOutputCommandOutput;
    };
  };
}
