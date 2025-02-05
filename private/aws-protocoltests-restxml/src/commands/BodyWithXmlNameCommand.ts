// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BodyWithXmlNameInputOutput } from "../models/models_0";
import { de_BodyWithXmlNameCommand, se_BodyWithXmlNameCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BodyWithXmlNameCommand}.
 */
export interface BodyWithXmlNameCommandInput extends BodyWithXmlNameInputOutput {}
/**
 * @public
 *
 * The output of {@link BodyWithXmlNameCommand}.
 */
export interface BodyWithXmlNameCommandOutput extends BodyWithXmlNameInputOutput, __MetadataBearer {}

/**
 * The following example serializes a body that uses an XML name,
 * changing the wrapper name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, BodyWithXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, BodyWithXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestXmlProtocolClient(config);
 * const input = { // BodyWithXmlNameInputOutput
 *   nested: { // PayloadWithXmlName
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new BodyWithXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // BodyWithXmlNameInputOutput
 * //   nested: { // PayloadWithXmlName
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param BodyWithXmlNameCommandInput - {@link BodyWithXmlNameCommandInput}
 * @returns {@link BodyWithXmlNameCommandOutput}
 * @see {@link BodyWithXmlNameCommandInput} for command's `input` shape.
 * @see {@link BodyWithXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 * @public
 */
export class BodyWithXmlNameCommand extends $Command
  .classBuilder<
    BodyWithXmlNameCommandInput,
    BodyWithXmlNameCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "BodyWithXmlName", {})
  .n("RestXmlProtocolClient", "BodyWithXmlNameCommand")
  .f(void 0, void 0)
  .ser(se_BodyWithXmlNameCommand)
  .de(de_BodyWithXmlNameCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BodyWithXmlNameInputOutput;
      output: BodyWithXmlNameInputOutput;
    };
    sdk: {
      input: BodyWithXmlNameCommandInput;
      output: BodyWithXmlNameCommandOutput;
    };
  };
}
