// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { XmlAttributesOnPayloadRequest, XmlAttributesOnPayloadResponse } from "../models/models_0";
import { XmlAttributesOnPayload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link XmlAttributesOnPayloadCommand}.
 */
export interface XmlAttributesOnPayloadCommandInput extends XmlAttributesOnPayloadRequest {}
/**
 * @public
 *
 * The output of {@link XmlAttributesOnPayloadCommand}.
 */
export interface XmlAttributesOnPayloadCommandOutput extends XmlAttributesOnPayloadResponse, __MetadataBearer {}

/**
 * This example serializes an XML attributes on a document targeted by httpPayload.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlAttributesOnPayloadCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlAttributesOnPayloadCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlAttributesOnPayloadRequest
 *   payload: { // XmlAttributesPayloadRequest
 *     foo: "STRING_VALUE",
 *     attr: "STRING_VALUE",
 *   },
 * };
 * const command = new XmlAttributesOnPayloadCommand(input);
 * const response = await client.send(command);
 * // { // XmlAttributesOnPayloadResponse
 * //   payload: { // XmlAttributesPayloadResponse
 * //     foo: "STRING_VALUE",
 * //     attr: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlAttributesOnPayloadCommandInput - {@link XmlAttributesOnPayloadCommandInput}
 * @returns {@link XmlAttributesOnPayloadCommandOutput}
 * @see {@link XmlAttributesOnPayloadCommandInput} for command's `input` shape.
 * @see {@link XmlAttributesOnPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class XmlAttributesOnPayloadCommand extends command<XmlAttributesOnPayloadCommandInput, XmlAttributesOnPayloadCommandOutput>(
  _ep0,
  _mw0,
  "XmlAttributesOnPayload",
  XmlAttributesOnPayload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlAttributesOnPayloadRequest;
      output: XmlAttributesOnPayloadResponse;
    };
    sdk: {
      input: XmlAttributesOnPayloadCommandInput;
      output: XmlAttributesOnPayloadCommandOutput;
    };
  };
}
