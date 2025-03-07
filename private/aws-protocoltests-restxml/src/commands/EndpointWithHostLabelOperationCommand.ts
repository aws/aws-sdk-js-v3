// smithy-typescript generated code
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EndpointWithHostLabelOperationRequest } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { EndpointWithHostLabelOperation } from "../schemas/aws.protocoltests.restxml";

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
export interface EndpointWithHostLabelOperationCommandInput extends EndpointWithHostLabelOperationRequest {}
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
 * import { RestXmlProtocolClient, EndpointWithHostLabelOperationCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, EndpointWithHostLabelOperationCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // EndpointWithHostLabelOperationRequest
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
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class EndpointWithHostLabelOperationCommand extends $Command
  .classBuilder<
    EndpointWithHostLabelOperationCommandInput,
    EndpointWithHostLabelOperationCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [];
  })
  .s("RestXml", "EndpointWithHostLabelOperation", {})
  .n("RestXmlProtocolClient", "EndpointWithHostLabelOperationCommand")
  .f(void 0, void 0)
  .sc(EndpointWithHostLabelOperation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EndpointWithHostLabelOperationRequest;
      output: {};
    };
    sdk: {
      input: EndpointWithHostLabelOperationCommandInput;
      output: EndpointWithHostLabelOperationCommandOutput;
    };
  };
}
