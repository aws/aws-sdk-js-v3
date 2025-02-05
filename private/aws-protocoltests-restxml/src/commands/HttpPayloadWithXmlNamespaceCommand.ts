// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { HttpPayloadWithXmlNamespaceInputOutput } from "../models/models_0";
import { de_HttpPayloadWithXmlNamespaceCommand, se_HttpPayloadWithXmlNamespaceCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithXmlNamespaceCommand}.
 */
export interface HttpPayloadWithXmlNamespaceCommandInput extends HttpPayloadWithXmlNamespaceInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithXmlNamespaceCommand}.
 */
export interface HttpPayloadWithXmlNamespaceCommandOutput
  extends HttpPayloadWithXmlNamespaceInputOutput,
    __MetadataBearer {}

/**
 * The following example serializes a payload that uses an XML namespace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithXmlNamespaceCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithXmlNamespaceCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPayloadWithXmlNamespaceInputOutput
 *   nested: { // PayloadWithXmlNamespace
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithXmlNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithXmlNamespaceInputOutput
 * //   nested: { // PayloadWithXmlNamespace
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithXmlNamespaceCommandInput - {@link HttpPayloadWithXmlNamespaceCommandInput}
 * @returns {@link HttpPayloadWithXmlNamespaceCommandOutput}
 * @see {@link HttpPayloadWithXmlNamespaceCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithXmlNamespaceCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 * @public
 */
export class HttpPayloadWithXmlNamespaceCommand extends $Command
  .classBuilder<
    HttpPayloadWithXmlNamespaceCommandInput,
    HttpPayloadWithXmlNamespaceCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "HttpPayloadWithXmlNamespace", {})
  .n("RestXmlProtocolClient", "HttpPayloadWithXmlNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_HttpPayloadWithXmlNamespaceCommand)
  .de(de_HttpPayloadWithXmlNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadWithXmlNamespaceInputOutput;
      output: HttpPayloadWithXmlNamespaceInputOutput;
    };
    sdk: {
      input: HttpPayloadWithXmlNamespaceCommandInput;
      output: HttpPayloadWithXmlNamespaceCommandOutput;
    };
  };
}
