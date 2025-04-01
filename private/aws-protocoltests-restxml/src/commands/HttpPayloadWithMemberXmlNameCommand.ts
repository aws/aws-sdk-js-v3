// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { HttpPayloadWithMemberXmlNameInputOutput } from "../models/models_0";
import {
  de_HttpPayloadWithMemberXmlNameCommand,
  se_HttpPayloadWithMemberXmlNameCommand,
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
 * The input for {@link HttpPayloadWithMemberXmlNameCommand}.
 */
export interface HttpPayloadWithMemberXmlNameCommandInput extends HttpPayloadWithMemberXmlNameInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithMemberXmlNameCommand}.
 */
export interface HttpPayloadWithMemberXmlNameCommandOutput
  extends HttpPayloadWithMemberXmlNameInputOutput,
    __MetadataBearer {}

/**
 * The following example serializes a payload that uses an XML name
 * on the member, changing the wrapper name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithMemberXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithMemberXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPayloadWithMemberXmlNameInputOutput
 *   nested: { // PayloadWithXmlName
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithMemberXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithMemberXmlNameInputOutput
 * //   nested: { // PayloadWithXmlName
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithMemberXmlNameCommandInput - {@link HttpPayloadWithMemberXmlNameCommandInput}
 * @returns {@link HttpPayloadWithMemberXmlNameCommandOutput}
 * @see {@link HttpPayloadWithMemberXmlNameCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithMemberXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPayloadWithMemberXmlNameCommand extends $Command
  .classBuilder<
    HttpPayloadWithMemberXmlNameCommandInput,
    HttpPayloadWithMemberXmlNameCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "HttpPayloadWithMemberXmlName", {})
  .n("RestXmlProtocolClient", "HttpPayloadWithMemberXmlNameCommand")
  .f(void 0, void 0)
  .ser(se_HttpPayloadWithMemberXmlNameCommand)
  .de(de_HttpPayloadWithMemberXmlNameCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadWithMemberXmlNameInputOutput;
      output: HttpPayloadWithMemberXmlNameInputOutput;
    };
    sdk: {
      input: HttpPayloadWithMemberXmlNameCommandInput;
      output: HttpPayloadWithMemberXmlNameCommandOutput;
    };
  };
}
