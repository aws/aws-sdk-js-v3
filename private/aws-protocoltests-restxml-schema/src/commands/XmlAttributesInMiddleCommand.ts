// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { XmlAttributesInMiddleRequest, XmlAttributesInMiddleResponse } from "../models/models_0";
import type {
  RestXmlProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestXmlProtocolClient";
import { XmlAttributesInMiddle$ } from "../schemas/schemas_0";

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
 * import { RestXmlProtocolClient, XmlAttributesInMiddleCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlAttributesInMiddleCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "XmlAttributesInMiddle", {})
  .n("RestXmlProtocolClient", "XmlAttributesInMiddleCommand")
  .sc(XmlAttributesInMiddle$)
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
