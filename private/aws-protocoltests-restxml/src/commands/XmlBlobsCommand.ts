// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { XmlBlobsInputOutput } from "../models/models_0";
import { de_XmlBlobsCommand, se_XmlBlobsCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link XmlBlobsCommand}.
 */
export interface XmlBlobsCommandInput extends XmlBlobsInputOutput {}
/**
 * @public
 *
 * The output of {@link XmlBlobsCommand}.
 */
export interface XmlBlobsCommandOutput extends XmlBlobsInputOutput, __MetadataBearer {}

/**
 * @public
 * Blobs are base64 encoded
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlBlobsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlBlobsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlBlobsInputOutput
 *   data: "BLOB_VALUE",
 * };
 * const command = new XmlBlobsCommand(input);
 * const response = await client.send(command);
 * // { // XmlBlobsInputOutput
 * //   data: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param XmlBlobsCommandInput - {@link XmlBlobsCommandInput}
 * @returns {@link XmlBlobsCommandOutput}
 * @see {@link XmlBlobsCommandInput} for command's `input` shape.
 * @see {@link XmlBlobsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class XmlBlobsCommand extends $Command
  .classBuilder<
    XmlBlobsCommandInput,
    XmlBlobsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any /*Command*/, Command: any /*static*/, config: RestXmlProtocolClientResolvedConfig) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "XmlBlobs", {})
  .n("RestXmlProtocolClient", "XmlBlobsCommand")
  .f(void 0, void 0)
  .ser(se_XmlBlobsCommand)
  .de(de_XmlBlobsCommand)
  .build() {}
