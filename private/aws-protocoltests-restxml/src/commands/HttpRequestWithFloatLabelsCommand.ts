// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { HttpRequestWithFloatLabelsInput } from "../models/models_0";
import { de_HttpRequestWithFloatLabelsCommand, se_HttpRequestWithFloatLabelsCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

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
 * import { RestXmlProtocolClient, HttpRequestWithFloatLabelsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpRequestWithFloatLabelsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
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
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class HttpRequestWithFloatLabelsCommand extends $Command
  .classBuilder<
    HttpRequestWithFloatLabelsCommandInput,
    HttpRequestWithFloatLabelsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "HttpRequestWithFloatLabels", {})
  .n("RestXmlProtocolClient", "HttpRequestWithFloatLabelsCommand")
  .f(void 0, void 0)
  .ser(se_HttpRequestWithFloatLabelsCommand)
  .de(de_HttpRequestWithFloatLabelsCommand)
  .build() {}
