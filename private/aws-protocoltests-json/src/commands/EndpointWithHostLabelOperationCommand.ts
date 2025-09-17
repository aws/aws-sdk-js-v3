// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { HostLabelInput } from "../models/models_0";
import {
  de_EndpointWithHostLabelOperationCommand,
  se_EndpointWithHostLabelOperationCommand,
} from "../protocols/Aws_json1_1";

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
 * import { JsonProtocolClient, EndpointWithHostLabelOperationCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, EndpointWithHostLabelOperationCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * // import type { JsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-json";
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("JsonProtocol", "EndpointWithHostLabelOperation", {})
  .n("JsonProtocolClient", "EndpointWithHostLabelOperationCommand")
  .f(void 0, void 0)
  .ser(se_EndpointWithHostLabelOperationCommand)
  .de(de_EndpointWithHostLabelOperationCommand)
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
