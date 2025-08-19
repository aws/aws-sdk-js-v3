// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpRequestWithGreedyLabelInPathInput } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { HttpRequestWithGreedyLabelInPath } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpRequestWithGreedyLabelInPathCommand}.
 */
export interface HttpRequestWithGreedyLabelInPathCommandInput extends HttpRequestWithGreedyLabelInPathInput {}
/**
 * @public
 *
 * The output of {@link HttpRequestWithGreedyLabelInPathCommand}.
 */
export interface HttpRequestWithGreedyLabelInPathCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpRequestWithGreedyLabelInPathCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpRequestWithGreedyLabelInPathCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpRequestWithGreedyLabelInPathInput
 *   foo: "STRING_VALUE", // required
 *   baz: "STRING_VALUE", // required
 * };
 * const command = new HttpRequestWithGreedyLabelInPathCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HttpRequestWithGreedyLabelInPathCommandInput - {@link HttpRequestWithGreedyLabelInPathCommandInput}
 * @returns {@link HttpRequestWithGreedyLabelInPathCommandOutput}
 * @see {@link HttpRequestWithGreedyLabelInPathCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithGreedyLabelInPathCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class HttpRequestWithGreedyLabelInPathCommand extends $Command
  .classBuilder<
    HttpRequestWithGreedyLabelInPathCommandInput,
    HttpRequestWithGreedyLabelInPathCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "HttpRequestWithGreedyLabelInPath", {})
  .n("RestXmlProtocolClient", "HttpRequestWithGreedyLabelInPathCommand")
  .sc(HttpRequestWithGreedyLabelInPath)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpRequestWithGreedyLabelInPathInput;
      output: {};
    };
    sdk: {
      input: HttpRequestWithGreedyLabelInPathCommandInput;
      output: HttpRequestWithGreedyLabelInPathCommandOutput;
    };
  };
}
