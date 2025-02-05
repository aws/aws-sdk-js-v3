// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { HttpPayloadWithXmlNamespaceAndPrefixInputOutput } from "../models/models_0";
import {
  de_HttpPayloadWithXmlNamespaceAndPrefixCommand,
  se_HttpPayloadWithXmlNamespaceAndPrefixCommand,
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
 * The input for {@link HttpPayloadWithXmlNamespaceAndPrefixCommand}.
 */
export interface HttpPayloadWithXmlNamespaceAndPrefixCommandInput
  extends HttpPayloadWithXmlNamespaceAndPrefixInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithXmlNamespaceAndPrefixCommand}.
 */
export interface HttpPayloadWithXmlNamespaceAndPrefixCommandOutput
  extends HttpPayloadWithXmlNamespaceAndPrefixInputOutput,
    __MetadataBearer {}

/**
 * The following example serializes a payload that uses an XML namespace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithXmlNamespaceAndPrefixCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithXmlNamespaceAndPrefixCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPayloadWithXmlNamespaceAndPrefixInputOutput
 *   nested: { // PayloadWithXmlNamespaceAndPrefix
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithXmlNamespaceAndPrefixCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithXmlNamespaceAndPrefixInputOutput
 * //   nested: { // PayloadWithXmlNamespaceAndPrefix
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithXmlNamespaceAndPrefixCommandInput - {@link HttpPayloadWithXmlNamespaceAndPrefixCommandInput}
 * @returns {@link HttpPayloadWithXmlNamespaceAndPrefixCommandOutput}
 * @see {@link HttpPayloadWithXmlNamespaceAndPrefixCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithXmlNamespaceAndPrefixCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 * @public
 */
export class HttpPayloadWithXmlNamespaceAndPrefixCommand extends $Command
  .classBuilder<
    HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
    HttpPayloadWithXmlNamespaceAndPrefixCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "HttpPayloadWithXmlNamespaceAndPrefix", {})
  .n("RestXmlProtocolClient", "HttpPayloadWithXmlNamespaceAndPrefixCommand")
  .f(void 0, void 0)
  .ser(se_HttpPayloadWithXmlNamespaceAndPrefixCommand)
  .de(de_HttpPayloadWithXmlNamespaceAndPrefixCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadWithXmlNamespaceAndPrefixInputOutput;
      output: HttpPayloadWithXmlNamespaceAndPrefixInputOutput;
    };
    sdk: {
      input: HttpPayloadWithXmlNamespaceAndPrefixCommandInput;
      output: HttpPayloadWithXmlNamespaceAndPrefixCommandOutput;
    };
  };
}
