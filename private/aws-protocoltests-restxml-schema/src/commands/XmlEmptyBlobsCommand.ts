// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { XmlEmptyBlobsRequest, XmlEmptyBlobsResponse } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { XmlEmptyBlobs } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlEmptyBlobsCommand}.
 */
export interface XmlEmptyBlobsCommandInput extends XmlEmptyBlobsRequest {}
/**
 * @public
 *
 * The output of {@link XmlEmptyBlobsCommand}.
 */
export interface XmlEmptyBlobsCommandOutput extends XmlEmptyBlobsResponse, __MetadataBearer {}

/**
 * Blobs are base64 encoded
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlEmptyBlobsCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlEmptyBlobsCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlEmptyBlobsRequest
 *   data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new XmlEmptyBlobsCommand(input);
 * const response = await client.send(command);
 * // { // XmlEmptyBlobsResponse
 * //   data: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param XmlEmptyBlobsCommandInput - {@link XmlEmptyBlobsCommandInput}
 * @returns {@link XmlEmptyBlobsCommandOutput}
 * @see {@link XmlEmptyBlobsCommandInput} for command's `input` shape.
 * @see {@link XmlEmptyBlobsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class XmlEmptyBlobsCommand extends $Command
  .classBuilder<
    XmlEmptyBlobsCommandInput,
    XmlEmptyBlobsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "XmlEmptyBlobs", {})
  .n("RestXmlProtocolClient", "XmlEmptyBlobsCommand")
  .sc(XmlEmptyBlobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlEmptyBlobsRequest;
      output: XmlEmptyBlobsResponse;
    };
    sdk: {
      input: XmlEmptyBlobsCommandInput;
      output: XmlEmptyBlobsCommandOutput;
    };
  };
}
