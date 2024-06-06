// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { XmlMapsXmlNameRequest, XmlMapsXmlNameResponse } from "../models/models_0";
import { de_XmlMapsXmlNameCommand, se_XmlMapsXmlNameCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlMapsXmlNameCommand}.
 */
export interface XmlMapsXmlNameCommandInput extends XmlMapsXmlNameRequest {}
/**
 * @public
 *
 * The output of {@link XmlMapsXmlNameCommand}.
 */
export interface XmlMapsXmlNameCommandOutput extends XmlMapsXmlNameResponse, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlMapsXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlMapsXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlMapsXmlNameRequest
 *   myMap: { // XmlMapsXmlNameInputOutputMap
 *     "<keys>": { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new XmlMapsXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // XmlMapsXmlNameResponse
 * //   myMap: { // XmlMapsXmlNameInputOutputMap
 * //     "<keys>": { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlMapsXmlNameCommandInput - {@link XmlMapsXmlNameCommandInput}
 * @returns {@link XmlMapsXmlNameCommandOutput}
 * @see {@link XmlMapsXmlNameCommandInput} for command's `input` shape.
 * @see {@link XmlMapsXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class XmlMapsXmlNameCommand extends $Command
  .classBuilder<
    XmlMapsXmlNameCommandInput,
    XmlMapsXmlNameCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "XmlMapsXmlName", {})
  .n("RestXmlProtocolClient", "XmlMapsXmlNameCommand")
  .f(void 0, void 0)
  .ser(se_XmlMapsXmlNameCommand)
  .de(de_XmlMapsXmlNameCommand)
  .build() {}
