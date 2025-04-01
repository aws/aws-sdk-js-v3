// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { HttpPrefixHeadersInputOutput } from "../models/models_0";
import { de_HttpPrefixHeadersCommand, se_HttpPrefixHeadersCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpPrefixHeadersCommand}.
 */
export interface HttpPrefixHeadersCommandInput extends HttpPrefixHeadersInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPrefixHeadersCommand}.
 */
export interface HttpPrefixHeadersCommandOutput extends HttpPrefixHeadersInputOutput, __MetadataBearer {}

/**
 * This examples adds headers to the input of a request and response by prefix.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPrefixHeadersCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPrefixHeadersCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPrefixHeadersInputOutput
 *   foo: "STRING_VALUE",
 *   fooMap: { // FooPrefixHeaders
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPrefixHeadersCommand(input);
 * const response = await client.send(command);
 * // { // HttpPrefixHeadersInputOutput
 * //   foo: "STRING_VALUE",
 * //   fooMap: { // FooPrefixHeaders
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPrefixHeadersCommandInput - {@link HttpPrefixHeadersCommandInput}
 * @returns {@link HttpPrefixHeadersCommandOutput}
 * @see {@link HttpPrefixHeadersCommandInput} for command's `input` shape.
 * @see {@link HttpPrefixHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPrefixHeadersCommand extends $Command
  .classBuilder<
    HttpPrefixHeadersCommandInput,
    HttpPrefixHeadersCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "HttpPrefixHeaders", {})
  .n("RestXmlProtocolClient", "HttpPrefixHeadersCommand")
  .f(void 0, void 0)
  .ser(se_HttpPrefixHeadersCommand)
  .de(de_HttpPrefixHeadersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPrefixHeadersInputOutput;
      output: HttpPrefixHeadersInputOutput;
    };
    sdk: {
      input: HttpPrefixHeadersCommandInput;
      output: HttpPrefixHeadersCommandOutput;
    };
  };
}
