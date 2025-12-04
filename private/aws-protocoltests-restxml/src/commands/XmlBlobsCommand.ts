// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { XmlBlobsRequest, XmlBlobsResponse } from "../models/models_0";
import { de_XmlBlobsCommand, se_XmlBlobsCommand } from "../protocols/Aws_restXml";
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
 * The input for {@link XmlBlobsCommand}.
 */
export interface XmlBlobsCommandInput extends XmlBlobsRequest {}
/**
 * @public
 *
 * The output of {@link XmlBlobsCommand}.
 */
export interface XmlBlobsCommandOutput extends XmlBlobsResponse, __MetadataBearer {}

/**
 * Blobs are base64 encoded
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlBlobsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlBlobsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlBlobsRequest
 *   data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new XmlBlobsCommand(input);
 * const response = await client.send(command);
 * // { // XmlBlobsResponse
 * //   data: new Uint8Array(),
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
 *
 * @public
 */
export class XmlBlobsCommand extends $Command
  .classBuilder<
    XmlBlobsCommandInput,
    XmlBlobsCommandOutput,
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
  .s("RestXml", "XmlBlobs", {})
  .n("RestXmlProtocolClient", "XmlBlobsCommand")
  .f(void 0, void 0)
  .ser(se_XmlBlobsCommand)
  .de(de_XmlBlobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlBlobsRequest;
      output: XmlBlobsResponse;
    };
    sdk: {
      input: XmlBlobsCommandInput;
      output: XmlBlobsCommandOutput;
    };
  };
}
