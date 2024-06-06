// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { XmlAttributesRequest, XmlAttributesResponse } from "../models/models_0";
import { de_XmlAttributesCommand, se_XmlAttributesCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlAttributesCommand}.
 */
export interface XmlAttributesCommandInput extends XmlAttributesRequest {}
/**
 * @public
 *
 * The output of {@link XmlAttributesCommand}.
 */
export interface XmlAttributesCommandOutput extends XmlAttributesResponse, __MetadataBearer {}

/**
 * This example serializes an XML attributes on synthesized document.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlAttributesCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlAttributesCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlAttributesRequest
 *   foo: "STRING_VALUE",
 *   attr: "STRING_VALUE",
 * };
 * const command = new XmlAttributesCommand(input);
 * const response = await client.send(command);
 * // { // XmlAttributesResponse
 * //   foo: "STRING_VALUE",
 * //   attr: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param XmlAttributesCommandInput - {@link XmlAttributesCommandInput}
 * @returns {@link XmlAttributesCommandOutput}
 * @see {@link XmlAttributesCommandInput} for command's `input` shape.
 * @see {@link XmlAttributesCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 * @public
 */
export class XmlAttributesCommand extends $Command
  .classBuilder<
    XmlAttributesCommandInput,
    XmlAttributesCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "XmlAttributes", {})
  .n("RestXmlProtocolClient", "XmlAttributesCommand")
  .f(void 0, void 0)
  .ser(se_XmlAttributesCommand)
  .de(de_XmlAttributesCommand)
  .build() {}
