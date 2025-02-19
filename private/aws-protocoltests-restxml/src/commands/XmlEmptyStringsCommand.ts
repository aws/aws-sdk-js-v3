// smithy-typescript generated code
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { XmlEmptyStringsRequest, XmlEmptyStringsResponse } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { XmlEmptyStrings } from "../schemas/aws.protocoltests.restxml";

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
 * import { RestXmlProtocolClient, XmlEmptyStringsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlEmptyStringsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
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
 */
export class XmlEmptyStringsCommand extends $Command
  .classBuilder<
    XmlEmptyStringsCommandInput,
    XmlEmptyStringsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [];
  })
  .s("RestXml", "XmlEmptyStrings", {})
  .n("RestXmlProtocolClient", "XmlEmptyStringsCommand")
  .f(void 0, void 0)
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
