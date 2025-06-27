// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HostLabelHeaderInput } from "../models/models_0";
import {
  de_EndpointWithHostLabelHeaderOperationCommand,
  se_EndpointWithHostLabelHeaderOperationCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EndpointWithHostLabelHeaderOperationCommand}.
 */
export interface EndpointWithHostLabelHeaderOperationCommandInput extends HostLabelHeaderInput {}
/**
 * @public
 *
 * The output of {@link EndpointWithHostLabelHeaderOperationCommand}.
 */
export interface EndpointWithHostLabelHeaderOperationCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, EndpointWithHostLabelHeaderOperationCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, EndpointWithHostLabelHeaderOperationCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HostLabelHeaderInput
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new EndpointWithHostLabelHeaderOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EndpointWithHostLabelHeaderOperationCommandInput - {@link EndpointWithHostLabelHeaderOperationCommandInput}
 * @returns {@link EndpointWithHostLabelHeaderOperationCommandOutput}
 * @see {@link EndpointWithHostLabelHeaderOperationCommandInput} for command's `input` shape.
 * @see {@link EndpointWithHostLabelHeaderOperationCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class EndpointWithHostLabelHeaderOperationCommand extends $Command
  .classBuilder<
    EndpointWithHostLabelHeaderOperationCommandInput,
    EndpointWithHostLabelHeaderOperationCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestXml", "EndpointWithHostLabelHeaderOperation", {})
  .n("RestXmlProtocolClient", "EndpointWithHostLabelHeaderOperationCommand")
  .f(void 0, void 0)
  .ser(se_EndpointWithHostLabelHeaderOperationCommand)
  .de(de_EndpointWithHostLabelHeaderOperationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HostLabelHeaderInput;
      output: {};
    };
    sdk: {
      input: EndpointWithHostLabelHeaderOperationCommandInput;
      output: EndpointWithHostLabelHeaderOperationCommandOutput;
    };
  };
}
