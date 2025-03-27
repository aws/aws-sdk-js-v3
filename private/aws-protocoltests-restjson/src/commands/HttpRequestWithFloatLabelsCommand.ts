// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { HttpRequestWithFloatLabelsInput } from "../models/models_0";
import { de_HttpRequestWithFloatLabelsCommand, se_HttpRequestWithFloatLabelsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpRequestWithFloatLabelsCommand}.
 */
export interface HttpRequestWithFloatLabelsCommandInput extends HttpRequestWithFloatLabelsInput {}
/**
 * @public
 *
 * The output of {@link HttpRequestWithFloatLabelsCommand}.
 */
export interface HttpRequestWithFloatLabelsCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpRequestWithFloatLabelsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpRequestWithFloatLabelsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpRequestWithFloatLabelsInput
 *   float: Number("float"), // required
 *   double: Number("double"), // required
 * };
 * const command = new HttpRequestWithFloatLabelsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HttpRequestWithFloatLabelsCommandInput - {@link HttpRequestWithFloatLabelsCommandInput}
 * @returns {@link HttpRequestWithFloatLabelsCommandOutput}
 * @see {@link HttpRequestWithFloatLabelsCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithFloatLabelsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class HttpRequestWithFloatLabelsCommand extends $Command
  .classBuilder<
    HttpRequestWithFloatLabelsCommandInput,
    HttpRequestWithFloatLabelsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "HttpRequestWithFloatLabels", {})
  .n("RestJsonProtocolClient", "HttpRequestWithFloatLabelsCommand")
  .f(void 0, void 0)
  .ser(se_HttpRequestWithFloatLabelsCommand)
  .de(de_HttpRequestWithFloatLabelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpRequestWithFloatLabelsInput;
      output: {};
    };
    sdk: {
      input: HttpRequestWithFloatLabelsCommandInput;
      output: HttpRequestWithFloatLabelsCommandOutput;
    };
  };
}
