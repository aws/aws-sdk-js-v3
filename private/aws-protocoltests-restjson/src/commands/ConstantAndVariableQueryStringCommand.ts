// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConstantAndVariableQueryStringInput } from "../models/models_0";
import {
  de_ConstantAndVariableQueryStringCommand,
  se_ConstantAndVariableQueryStringCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, ConstantAndVariableQueryStringCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, ConstantAndVariableQueryStringCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
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
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class ConstantAndVariableQueryStringCommand extends $Command
  .classBuilder<
    ConstantAndVariableQueryStringCommandInput,
    ConstantAndVariableQueryStringCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "ConstantAndVariableQueryString", {})
  .n("RestJsonProtocolClient", "ConstantAndVariableQueryStringCommand")
  .f(void 0, void 0)
  .ser(se_ConstantAndVariableQueryStringCommand)
  .de(de_ConstantAndVariableQueryStringCommand)
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
