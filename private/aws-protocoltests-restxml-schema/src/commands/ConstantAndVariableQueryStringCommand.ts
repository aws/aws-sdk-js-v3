// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ConstantAndVariableQueryStringInput } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { ConstantAndVariableQueryString } from "../schemas/schemas_21_ConstantAndVariableQueryString";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConstantAndVariableQueryStringCommand}.
 */
export interface ConstantAndVariableQueryStringCommandInput extends ConstantAndVariableQueryStringInput {}
/**
 * @public
 *
 * The output of {@link ConstantAndVariableQueryStringCommand}.
 */
export interface ConstantAndVariableQueryStringCommandOutput extends __MetadataBearer {}

/**
 * This example uses fixed query string params and variable query string params.
 * The fixed query string parameters and variable parameters must both be
 * serialized (implementations may need to merge them together).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, ConstantAndVariableQueryStringCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, ConstantAndVariableQueryStringCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // ConstantAndVariableQueryStringInput
 *   baz: "STRING_VALUE",
 *   maybeSet: "STRING_VALUE",
 * };
 * const command = new ConstantAndVariableQueryStringCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ConstantAndVariableQueryStringCommandInput - {@link ConstantAndVariableQueryStringCommandInput}
 * @returns {@link ConstantAndVariableQueryStringCommandOutput}
 * @see {@link ConstantAndVariableQueryStringCommandInput} for command's `input` shape.
 * @see {@link ConstantAndVariableQueryStringCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class ConstantAndVariableQueryStringCommand extends $Command
  .classBuilder<
    ConstantAndVariableQueryStringCommandInput,
    ConstantAndVariableQueryStringCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "ConstantAndVariableQueryString", {})
  .n("RestXmlProtocolClient", "ConstantAndVariableQueryStringCommand")
  .sc(ConstantAndVariableQueryString)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConstantAndVariableQueryStringInput;
      output: {};
    };
    sdk: {
      input: ConstantAndVariableQueryStringCommandInput;
      output: ConstantAndVariableQueryStringCommandOutput;
    };
  };
}
