// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConstantQueryStringInput } from "../models/models_0";
import { de_ConstantQueryStringCommand, se_ConstantQueryStringCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConstantQueryStringCommand}.
 */
export interface ConstantQueryStringCommandInput extends ConstantQueryStringInput {}
/**
 * @public
 *
 * The output of {@link ConstantQueryStringCommand}.
 */
export interface ConstantQueryStringCommandOutput extends __MetadataBearer {}

/**
 * This example uses a constant query string parameters and a label.
 * This simply tests that labels and query string parameters are
 * compatible. The fixed query string parameter named "hello" should
 * in no way conflict with the label, `\{hello\}`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, ConstantQueryStringCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, ConstantQueryStringCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // ConstantQueryStringInput
 *   hello: "STRING_VALUE", // required
 * };
 * const command = new ConstantQueryStringCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ConstantQueryStringCommandInput - {@link ConstantQueryStringCommandInput}
 * @returns {@link ConstantQueryStringCommandOutput}
 * @see {@link ConstantQueryStringCommandInput} for command's `input` shape.
 * @see {@link ConstantQueryStringCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 * @public
 */
export class ConstantQueryStringCommand extends $Command
  .classBuilder<
    ConstantQueryStringCommandInput,
    ConstantQueryStringCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "ConstantQueryString", {})
  .n("RestJsonProtocolClient", "ConstantQueryStringCommand")
  .f(void 0, void 0)
  .ser(se_ConstantQueryStringCommand)
  .de(de_ConstantQueryStringCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConstantQueryStringInput;
      output: {};
    };
    sdk: {
      input: ConstantQueryStringCommandInput;
      output: ConstantQueryStringCommandOutput;
    };
  };
}
