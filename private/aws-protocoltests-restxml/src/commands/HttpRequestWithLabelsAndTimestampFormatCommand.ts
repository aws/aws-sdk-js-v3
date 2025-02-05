// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { HttpRequestWithLabelsAndTimestampFormatInput } from "../models/models_0";
import {
  de_HttpRequestWithLabelsAndTimestampFormatCommand,
  se_HttpRequestWithLabelsAndTimestampFormatCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpRequestWithLabelsAndTimestampFormatCommand}.
 */
export interface HttpRequestWithLabelsAndTimestampFormatCommandInput
  extends HttpRequestWithLabelsAndTimestampFormatInput {}
/**
 * @public
 *
 * The output of {@link HttpRequestWithLabelsAndTimestampFormatCommand}.
 */
export interface HttpRequestWithLabelsAndTimestampFormatCommandOutput extends __MetadataBearer {}

/**
 * The example tests how requests serialize different timestamp formats in the
 * URI path.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpRequestWithLabelsAndTimestampFormatCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpRequestWithLabelsAndTimestampFormatCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpRequestWithLabelsAndTimestampFormatInput
 *   memberEpochSeconds: new Date("TIMESTAMP"), // required
 *   memberHttpDate: new Date("TIMESTAMP"), // required
 *   memberDateTime: new Date("TIMESTAMP"), // required
 *   defaultFormat: new Date("TIMESTAMP"), // required
 *   targetEpochSeconds: new Date("TIMESTAMP"), // required
 *   targetHttpDate: new Date("TIMESTAMP"), // required
 *   targetDateTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new HttpRequestWithLabelsAndTimestampFormatCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HttpRequestWithLabelsAndTimestampFormatCommandInput - {@link HttpRequestWithLabelsAndTimestampFormatCommandInput}
 * @returns {@link HttpRequestWithLabelsAndTimestampFormatCommandOutput}
 * @see {@link HttpRequestWithLabelsAndTimestampFormatCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithLabelsAndTimestampFormatCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 * @public
 */
export class HttpRequestWithLabelsAndTimestampFormatCommand extends $Command
  .classBuilder<
    HttpRequestWithLabelsAndTimestampFormatCommandInput,
    HttpRequestWithLabelsAndTimestampFormatCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "HttpRequestWithLabelsAndTimestampFormat", {})
  .n("RestXmlProtocolClient", "HttpRequestWithLabelsAndTimestampFormatCommand")
  .f(void 0, void 0)
  .ser(se_HttpRequestWithLabelsAndTimestampFormatCommand)
  .de(de_HttpRequestWithLabelsAndTimestampFormatCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpRequestWithLabelsAndTimestampFormatInput;
      output: {};
    };
    sdk: {
      input: HttpRequestWithLabelsAndTimestampFormatCommandInput;
      output: HttpRequestWithLabelsAndTimestampFormatCommandOutput;
    };
  };
}
