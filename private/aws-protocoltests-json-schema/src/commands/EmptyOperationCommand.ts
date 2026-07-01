// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { EmptyOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EmptyOperationCommand}.
 */
export interface EmptyOperationCommandInput {}
/**
 * @public
 *
 * The output of {@link EmptyOperationCommand}.
 */
export interface EmptyOperationCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, EmptyOperationCommand } from "@aws-sdk/aws-protocoltests-json-schema"; // ES Modules import
 * // const { JsonProtocolClient, EmptyOperationCommand } = require("@aws-sdk/aws-protocoltests-json-schema"); // CommonJS import
 * // import type { JsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-json-schema";
 * const config = {}; // type is JsonProtocolClientConfig
 * const client = new JsonProtocolClient(config);
 * const input = {};
 * const command = new EmptyOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EmptyOperationCommandInput - {@link EmptyOperationCommandInput}
 * @returns {@link EmptyOperationCommandOutput}
 * @see {@link EmptyOperationCommandInput} for command's `input` shape.
 * @see {@link EmptyOperationCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 */
export class EmptyOperationCommand extends command<EmptyOperationCommandInput, EmptyOperationCommandOutput>(
  _ep0,
  _mw0,
  "EmptyOperation",
  EmptyOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EmptyOperationCommandInput;
      output: EmptyOperationCommandOutput;
    };
  };
}
