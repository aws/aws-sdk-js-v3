// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpPayloadWithXmlNameInputOutput } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { HttpPayloadWithXmlName } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithXmlNameCommand}.
 */
export interface HttpPayloadWithXmlNameCommandInput extends HttpPayloadWithXmlNameInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithXmlNameCommand}.
 */
export interface HttpPayloadWithXmlNameCommandOutput extends HttpPayloadWithXmlNameInputOutput, __MetadataBearer {}

/**
 * The following example serializes a payload that uses an XML name,
 * changing the wrapper name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPayloadWithXmlNameInputOutput
 *   nested: { // PayloadWithXmlName
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithXmlNameInputOutput
 * //   nested: { // PayloadWithXmlName
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithXmlNameCommandInput - {@link HttpPayloadWithXmlNameCommandInput}
 * @returns {@link HttpPayloadWithXmlNameCommandOutput}
 * @see {@link HttpPayloadWithXmlNameCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPayloadWithXmlNameCommand extends $Command
  .classBuilder<
    HttpPayloadWithXmlNameCommandInput,
    HttpPayloadWithXmlNameCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "HttpPayloadWithXmlName", {})
  .n("RestXmlProtocolClient", "HttpPayloadWithXmlNameCommand")
  .sc(HttpPayloadWithXmlName)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadWithXmlNameInputOutput;
      output: HttpPayloadWithXmlNameInputOutput;
    };
    sdk: {
      input: HttpPayloadWithXmlNameCommandInput;
      output: HttpPayloadWithXmlNameCommandOutput;
    };
  };
}
