// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { XmlTimestampsRequest, XmlTimestampsResponse } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { XmlTimestamps } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlTimestampsCommand}.
 */
export interface XmlTimestampsCommandInput extends XmlTimestampsRequest {}
/**
 * @public
 *
 * The output of {@link XmlTimestampsCommand}.
 */
export interface XmlTimestampsCommandOutput extends XmlTimestampsResponse, __MetadataBearer {}

/**
 * This tests how timestamps are serialized, including using the
 * default format of date-time and various @timestampFormat trait
 * values.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlTimestampsCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlTimestampsCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlTimestampsRequest
 *   normal: new Date("TIMESTAMP"),
 *   dateTime: new Date("TIMESTAMP"),
 *   dateTimeOnTarget: new Date("TIMESTAMP"),
 *   epochSeconds: new Date("TIMESTAMP"),
 *   epochSecondsOnTarget: new Date("TIMESTAMP"),
 *   httpDate: new Date("TIMESTAMP"),
 *   httpDateOnTarget: new Date("TIMESTAMP"),
 * };
 * const command = new XmlTimestampsCommand(input);
 * const response = await client.send(command);
 * // { // XmlTimestampsResponse
 * //   normal: new Date("TIMESTAMP"),
 * //   dateTime: new Date("TIMESTAMP"),
 * //   dateTimeOnTarget: new Date("TIMESTAMP"),
 * //   epochSeconds: new Date("TIMESTAMP"),
 * //   epochSecondsOnTarget: new Date("TIMESTAMP"),
 * //   httpDate: new Date("TIMESTAMP"),
 * //   httpDateOnTarget: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param XmlTimestampsCommandInput - {@link XmlTimestampsCommandInput}
 * @returns {@link XmlTimestampsCommandOutput}
 * @see {@link XmlTimestampsCommandInput} for command's `input` shape.
 * @see {@link XmlTimestampsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class XmlTimestampsCommand extends $Command
  .classBuilder<
    XmlTimestampsCommandInput,
    XmlTimestampsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "XmlTimestamps", {})
  .n("RestXmlProtocolClient", "XmlTimestampsCommand")
  .f(void 0, void 0)
  .sc(XmlTimestamps)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlTimestampsRequest;
      output: XmlTimestampsResponse;
    };
    sdk: {
      input: XmlTimestampsCommandInput;
      output: XmlTimestampsCommandOutput;
    };
  };
}
