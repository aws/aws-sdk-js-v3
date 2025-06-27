// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpRequestWithLabelsInput } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { HttpRequestWithLabels } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpRequestWithLabelsCommand}.
 */
export interface HttpRequestWithLabelsCommandInput extends HttpRequestWithLabelsInput {}
/**
 * @public
 *
 * The output of {@link HttpRequestWithLabelsCommand}.
 */
export interface HttpRequestWithLabelsCommandOutput extends __MetadataBearer {}

/**
 * The example tests how requests are serialized when there's no input
 * payload but there are HTTP labels.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpRequestWithLabelsCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpRequestWithLabelsCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpRequestWithLabelsInput
 *   string: "STRING_VALUE", // required
 *   short: Number("short"), // required
 *   integer: Number("int"), // required
 *   long: Number("long"), // required
 *   float: Number("float"), // required
 *   double: Number("double"), // required
 *   boolean: true || false, // required
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new HttpRequestWithLabelsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HttpRequestWithLabelsCommandInput - {@link HttpRequestWithLabelsCommandInput}
 * @returns {@link HttpRequestWithLabelsCommandOutput}
 * @see {@link HttpRequestWithLabelsCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithLabelsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class HttpRequestWithLabelsCommand extends $Command
  .classBuilder<
    HttpRequestWithLabelsCommandInput,
    HttpRequestWithLabelsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "HttpRequestWithLabels", {})
  .n("RestXmlProtocolClient", "HttpRequestWithLabelsCommand")
  .f(void 0, void 0)
  .sc(HttpRequestWithLabels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpRequestWithLabelsInput;
      output: {};
    };
    sdk: {
      input: HttpRequestWithLabelsCommandInput;
      output: HttpRequestWithLabelsCommandOutput;
    };
  };
}
