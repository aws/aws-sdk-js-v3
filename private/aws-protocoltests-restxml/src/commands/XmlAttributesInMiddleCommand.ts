// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { XmlAttributesInMiddleRequest, XmlAttributesInMiddleResponse } from "../models/models_0";
import { de_XmlAttributesInMiddleCommand, se_XmlAttributesInMiddleCommand } from "../protocols/Aws_restXml";
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
 * The input for {@link XmlAttributesInMiddleCommand}.
 */
export interface XmlAttributesInMiddleCommandInput extends XmlAttributesInMiddleRequest {}
/**
 * @public
 *
 * The output of {@link XmlAttributesInMiddleCommand}.
 */
export interface XmlAttributesInMiddleCommandOutput extends XmlAttributesInMiddleResponse, __MetadataBearer {}

/**
 * This example serializes an XML attribute on a payload when it's defined in the middle of the member list.
 * This tests that implementations correctly write attributes immediately after the element start tag,
 * which is critical for languages like C# where attribute writing must happen before child elements.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlAttributesInMiddleCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlAttributesInMiddleCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlAttributesInMiddleRequest
 *   payload: { // XmlAttributesInMiddlePayloadRequest
 *     foo: "STRING_VALUE",
 *     attr: "STRING_VALUE",
 *     baz: "STRING_VALUE",
 *   },
 * };
 * const command = new XmlAttributesInMiddleCommand(input);
 * const response = await client.send(command);
 * // { // XmlAttributesInMiddleResponse
 * //   payload: { // XmlAttributesInMiddlePayloadResponse
 * //     foo: "STRING_VALUE",
 * //     attr: "STRING_VALUE",
 * //     baz: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlAttributesInMiddleCommandInput - {@link XmlAttributesInMiddleCommandInput}
 * @returns {@link XmlAttributesInMiddleCommandOutput}
 * @see {@link XmlAttributesInMiddleCommandInput} for command's `input` shape.
 * @see {@link XmlAttributesInMiddleCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class XmlAttributesInMiddleCommand extends $Command
  .classBuilder<
    XmlAttributesInMiddleCommandInput,
    XmlAttributesInMiddleCommandOutput,
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
  .s("RestXml", "XmlAttributesInMiddle", {})
  .n("RestXmlProtocolClient", "XmlAttributesInMiddleCommand")
  .f(void 0, void 0)
  .ser(se_XmlAttributesInMiddleCommand)
  .de(de_XmlAttributesInMiddleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlAttributesInMiddleRequest;
      output: XmlAttributesInMiddleResponse;
    };
    sdk: {
      input: XmlAttributesInMiddleCommandInput;
      output: XmlAttributesInMiddleCommandOutput;
    };
  };
}
