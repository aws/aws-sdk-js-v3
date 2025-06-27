// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { EmptyOperation } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class EmptyOperationCommand extends $Command
  .classBuilder<
    EmptyOperationCommandInput,
    EmptyOperationCommandOutput,
    JsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("JsonProtocol", "EmptyOperation", {})
  .n("JsonProtocolClient", "EmptyOperationCommand")
  .f(void 0, void 0)
  .sc(EmptyOperation)
  .build() {
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
