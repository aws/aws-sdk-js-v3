// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { HttpRequestWithGreedyLabelInPathInput } from "../models/models_0";
import {
  de_HttpRequestWithGreedyLabelInPathCommand,
  se_HttpRequestWithGreedyLabelInPathCommand,
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
 * import { RestXmlProtocolClient, HttpRequestWithGreedyLabelInPathCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpRequestWithGreedyLabelInPathCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
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
 */
export class HttpRequestWithGreedyLabelInPathCommand extends $Command
  .classBuilder<
    HttpRequestWithGreedyLabelInPathCommandInput,
    HttpRequestWithGreedyLabelInPathCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "HttpRequestWithGreedyLabelInPath", {})
  .n("RestXmlProtocolClient", "HttpRequestWithGreedyLabelInPathCommand")
  .f(void 0, void 0)
  .ser(se_HttpRequestWithGreedyLabelInPathCommand)
  .de(de_HttpRequestWithGreedyLabelInPathCommand)
  .build() {}
