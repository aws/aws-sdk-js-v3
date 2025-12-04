// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { XmlMapWithXmlNamespaceRequest, XmlMapWithXmlNamespaceResponse } from "../models/models_0";
import { de_XmlMapWithXmlNamespaceCommand, se_XmlMapWithXmlNamespaceCommand } from "../protocols/Aws_restXml";
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
 * import { RestXmlProtocolClient, XmlMapWithXmlNamespaceCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlMapWithXmlNamespaceCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml";
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
export class XmlMapWithXmlNamespaceCommand extends $Command
  .classBuilder<
    XmlMapWithXmlNamespaceCommandInput,
    XmlMapWithXmlNamespaceCommandOutput,
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
  .s("RestXml", "XmlMapWithXmlNamespace", {})
  .n("RestXmlProtocolClient", "XmlMapWithXmlNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_XmlMapWithXmlNamespaceCommand)
  .de(de_XmlMapWithXmlNamespaceCommand)
  .build() {
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
