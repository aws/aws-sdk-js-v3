// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import type { HostLabelInput } from "../models/models_0";
import { EndpointWithHostLabelOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EndpointWithHostLabelOperationCommand}.
 */
export interface EndpointWithHostLabelOperationCommandInput extends HostLabelInput {}
/**
 * @public
 *
 * The output of {@link EndpointWithHostLabelOperationCommand}.
 */
export interface EndpointWithHostLabelOperationCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, EndpointWithHostLabelOperationCommand } from "@aws-sdk/aws-protocoltests-json-schema"; // ES Modules import
 * // const { JsonProtocolClient, EndpointWithHostLabelOperationCommand } = require("@aws-sdk/aws-protocoltests-json-schema"); // CommonJS import
 * // import type { JsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-json-schema";
 * const config = {}; // type is JsonProtocolClientConfig
 * const client = new JsonProtocolClient(config);
 * const input = { // HostLabelInput
 *   label: "STRING_VALUE", // required
 * };
 * const command = new EndpointWithHostLabelOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EndpointWithHostLabelOperationCommandInput - {@link EndpointWithHostLabelOperationCommandInput}
 * @returns {@link EndpointWithHostLabelOperationCommandOutput}
 * @see {@link EndpointWithHostLabelOperationCommandInput} for command's `input` shape.
 * @see {@link EndpointWithHostLabelOperationCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 */
export class EndpointWithHostLabelOperationCommand extends $Command
  .classBuilder<
    EndpointWithHostLabelOperationCommandInput,
    EndpointWithHostLabelOperationCommandOutput,
    JsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("JsonProtocol", "EndpointWithHostLabelOperation", {})
  .n("JsonProtocolClient", "EndpointWithHostLabelOperationCommand")
  .sc(EndpointWithHostLabelOperation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HostLabelInput;
      output: {};
    };
    sdk: {
      input: EndpointWithHostLabelOperationCommandInput;
      output: EndpointWithHostLabelOperationCommandOutput;
    };
  };
}
