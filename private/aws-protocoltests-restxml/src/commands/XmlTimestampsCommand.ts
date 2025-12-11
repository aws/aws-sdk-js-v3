// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { XmlTimestampsRequest, XmlTimestampsResponse } from "../models/models_0";
import { de_XmlTimestampsCommand, se_XmlTimestampsCommand } from "../protocols/Aws_restXml";
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
 * import { RestXmlProtocolClient, XmlTimestampsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlTimestampsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml";
 * const config = {}; // type is RestXmlProtocolClientConfig
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestXml", "XmlTimestamps", {})
  .n("RestXmlProtocolClient", "XmlTimestampsCommand")
  .f(void 0, void 0)
  .ser(se_XmlTimestampsCommand)
  .de(de_XmlTimestampsCommand)
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
