// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { XmlMapWithXmlNamespaceRequest, XmlMapWithXmlNamespaceResponse } from "../models/models_0";
import { XmlMapWithXmlNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link XmlMapWithXmlNamespaceCommand}.
 */
export interface XmlMapWithXmlNamespaceCommandInput extends XmlMapWithXmlNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link XmlMapWithXmlNamespaceCommand}.
 */
export interface XmlMapWithXmlNamespaceCommandOutput extends XmlMapWithXmlNamespaceResponse, __MetadataBearer {}

/**
 * Maps with @xmlNamespace and @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlMapWithXmlNamespaceCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlMapWithXmlNamespaceCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlMapWithXmlNamespaceRequest
 *   myMap: { // XmlMapWithXmlNamespaceInputOutputMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new XmlMapWithXmlNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // XmlMapWithXmlNamespaceResponse
 * //   myMap: { // XmlMapWithXmlNamespaceInputOutputMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlMapWithXmlNamespaceCommandInput - {@link XmlMapWithXmlNamespaceCommandInput}
 * @returns {@link XmlMapWithXmlNamespaceCommandOutput}
 * @see {@link XmlMapWithXmlNamespaceCommandInput} for command's `input` shape.
 * @see {@link XmlMapWithXmlNamespaceCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class XmlMapWithXmlNamespaceCommand extends command<XmlMapWithXmlNamespaceCommandInput, XmlMapWithXmlNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "XmlMapWithXmlNamespace",
  XmlMapWithXmlNamespace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlMapWithXmlNamespaceRequest;
      output: XmlMapWithXmlNamespaceResponse;
    };
    sdk: {
      input: XmlMapWithXmlNamespaceCommandInput;
      output: XmlMapWithXmlNamespaceCommandOutput;
    };
  };
}
