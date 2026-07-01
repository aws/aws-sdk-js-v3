// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { XmlBlobsRequest, XmlBlobsResponse } from "../models/models_0";
import { XmlBlobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * import { RestXmlProtocolClient, XmlBlobsCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlBlobsCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
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
export class XmlBlobsCommand extends command<XmlBlobsCommandInput, XmlBlobsCommandOutput>(
  _ep0,
  _mw0,
  "XmlBlobs",
  XmlBlobs$
) {
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
