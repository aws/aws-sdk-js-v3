// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HostLabelHeaderInput } from "../models/models_0";
import type {
  RestXmlProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestXmlProtocolClient";
import { EndpointWithHostLabelHeaderOperation$ } from "../schemas/schemas_0";

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
 * import { RestXmlProtocolClient, EndpointWithHostLabelHeaderOperationCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, EndpointWithHostLabelHeaderOperationCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "EndpointWithHostLabelHeaderOperation", {})
  .n("RestXmlProtocolClient", "EndpointWithHostLabelHeaderOperationCommand")
  .sc(EndpointWithHostLabelHeaderOperation$)
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
