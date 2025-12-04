// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HttpPrefixHeadersInputOutput } from "../models/models_0";
import { de_HttpPrefixHeadersCommand, se_HttpPrefixHeadersCommand } from "../protocols/Aws_restXml";
import type {
  RestXmlProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestXmlProtocolClient";

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
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml";
 * const config = {}; // type is RestXmlProtocolClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
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
