// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { XmlEmptyStringsRequest, XmlEmptyStringsResponse } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { XmlEmptyStrings } from "../schemas/schemas_15_XmlEmptyStrings";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlEmptyStringsCommand}.
 */
export interface XmlEmptyStringsCommandInput extends XmlEmptyStringsRequest {}
/**
 * @public
 *
 * The output of {@link XmlEmptyStringsCommand}.
 */
export interface XmlEmptyStringsCommandOutput extends XmlEmptyStringsResponse, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlEmptyStringsCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlEmptyStringsCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlEmptyStringsRequest
 *   emptyString: "STRING_VALUE",
 * };
 * const command = new XmlEmptyStringsCommand(input);
 * const response = await client.send(command);
 * // { // XmlEmptyStringsResponse
 * //   emptyString: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param XmlEmptyStringsCommandInput - {@link XmlEmptyStringsCommandInput}
 * @returns {@link XmlEmptyStringsCommandOutput}
 * @see {@link XmlEmptyStringsCommandInput} for command's `input` shape.
 * @see {@link XmlEmptyStringsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class XmlEmptyStringsCommand extends $Command
  .classBuilder<
    XmlEmptyStringsCommandInput,
    XmlEmptyStringsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "XmlEmptyStrings", {})
  .n("RestXmlProtocolClient", "XmlEmptyStringsCommand")
  .sc(XmlEmptyStrings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlEmptyStringsRequest;
      output: XmlEmptyStringsResponse;
    };
    sdk: {
      input: XmlEmptyStringsCommandInput;
      output: XmlEmptyStringsCommandOutput;
    };
  };
}
