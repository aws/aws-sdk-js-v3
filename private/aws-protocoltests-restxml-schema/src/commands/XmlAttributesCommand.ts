// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { XmlAttributesRequest, XmlAttributesResponse } from "../models/models_0";
import { XmlAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * import { RestXmlProtocolClient, XmlAttributesCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlAttributesCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
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
 *
 * @public
 */
export class XmlAttributesCommand extends command<XmlAttributesCommandInput, XmlAttributesCommandOutput>(
  _ep0,
  _mw0,
  "XmlAttributes",
  XmlAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlAttributesRequest;
      output: XmlAttributesResponse;
    };
    sdk: {
      input: XmlAttributesCommandInput;
      output: XmlAttributesCommandOutput;
    };
  };
}
