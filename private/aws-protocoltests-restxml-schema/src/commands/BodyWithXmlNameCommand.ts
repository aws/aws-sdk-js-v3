// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BodyWithXmlNameInputOutput } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { BodyWithXmlName } from "../schemas/schemas";

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
 * import { RestXmlProtocolClient, BodyWithXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, BodyWithXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "BodyWithXmlName", {})
  .n("RestXmlProtocolClient", "BodyWithXmlNameCommand")
  .sc(BodyWithXmlName)
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
