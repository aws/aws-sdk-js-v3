// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { XmlEmptyBlobsRequest, XmlEmptyBlobsResponse } from "../models/models_0";
import { XmlEmptyBlobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
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
export class XmlEmptyBlobsCommand extends command<XmlEmptyBlobsCommandInput, XmlEmptyBlobsCommandOutput>(
  _ep0,
  _mw0,
  "XmlEmptyBlobs",
  XmlEmptyBlobs$
) {
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
