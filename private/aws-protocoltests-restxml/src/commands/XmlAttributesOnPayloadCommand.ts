// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { XmlAttributesOnPayloadRequest, XmlAttributesOnPayloadResponse } from "../models/models_0";
import { de_XmlAttributesOnPayloadCommand, se_XmlAttributesOnPayloadCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

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
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml";
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
export class XmlAttributesOnPayloadCommand extends $Command
  .classBuilder<
    XmlAttributesOnPayloadCommandInput,
    XmlAttributesOnPayloadCommandOutput,
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
  .s("RestXml", "XmlAttributesOnPayload", {})
  .n("RestXmlProtocolClient", "XmlAttributesOnPayloadCommand")
  .f(void 0, void 0)
  .ser(se_XmlAttributesOnPayloadCommand)
  .de(de_XmlAttributesOnPayloadCommand)
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
