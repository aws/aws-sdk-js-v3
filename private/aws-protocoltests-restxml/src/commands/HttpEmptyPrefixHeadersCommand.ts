// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpEmptyPrefixHeadersInput, HttpEmptyPrefixHeadersOutput } from "../models/models_0";
import { de_HttpEmptyPrefixHeadersCommand, se_HttpEmptyPrefixHeadersCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpEmptyPrefixHeadersCommand}.
 */
export interface HttpEmptyPrefixHeadersCommandInput extends HttpEmptyPrefixHeadersInput {}
/**
 * @public
 *
 * The output of {@link HttpEmptyPrefixHeadersCommand}.
 */
export interface HttpEmptyPrefixHeadersCommandOutput extends HttpEmptyPrefixHeadersOutput, __MetadataBearer {}

/**
 * Clients that perform this test extract all headers from the response.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpEmptyPrefixHeadersCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpEmptyPrefixHeadersCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpEmptyPrefixHeadersInput
 *   prefixHeaders: { // StringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   specificHeader: "STRING_VALUE",
 * };
 * const command = new HttpEmptyPrefixHeadersCommand(input);
 * const response = await client.send(command);
 * // { // HttpEmptyPrefixHeadersOutput
 * //   prefixHeaders: { // StringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   specificHeader: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param HttpEmptyPrefixHeadersCommandInput - {@link HttpEmptyPrefixHeadersCommandInput}
 * @returns {@link HttpEmptyPrefixHeadersCommandOutput}
 * @see {@link HttpEmptyPrefixHeadersCommandInput} for command's `input` shape.
 * @see {@link HttpEmptyPrefixHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class HttpEmptyPrefixHeadersCommand extends $Command
  .classBuilder<
    HttpEmptyPrefixHeadersCommandInput,
    HttpEmptyPrefixHeadersCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestXml", "HttpEmptyPrefixHeaders", {})
  .n("RestXmlProtocolClient", "HttpEmptyPrefixHeadersCommand")
  .f(void 0, void 0)
  .ser(se_HttpEmptyPrefixHeadersCommand)
  .de(de_HttpEmptyPrefixHeadersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpEmptyPrefixHeadersInput;
      output: HttpEmptyPrefixHeadersOutput;
    };
    sdk: {
      input: HttpEmptyPrefixHeadersCommandInput;
      output: HttpEmptyPrefixHeadersCommandOutput;
    };
  };
}
