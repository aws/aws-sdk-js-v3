// smithy-typescript generated code
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { XmlAttributesOnPayloadRequest, XmlAttributesOnPayloadResponse } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { XmlAttributesOnPayload } from "../schemas/aws.protocoltests.restxml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * import { RestXmlProtocolClient, XmlAttributesOnPayloadCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlAttributesOnPayloadCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
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
 * @public
 */
export class XmlAttributesOnPayloadCommand extends $Command
  .classBuilder<
    XmlAttributesOnPayloadCommandInput,
    XmlAttributesOnPayloadCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [];
  })
  .s("RestXml", "XmlAttributesOnPayload", {})
  .n("RestXmlProtocolClient", "XmlAttributesOnPayloadCommand")
  .f(void 0, void 0)
  .sc(XmlAttributesOnPayload)
  .build() {
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
