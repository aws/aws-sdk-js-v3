// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpRequestWithLabelsAndTimestampFormatInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpRequestWithLabelsAndTimestampFormat } from "../schemas/schemas";

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
 * import { RestJsonProtocolClient, HttpRequestWithLabelsAndTimestampFormatCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpRequestWithLabelsAndTimestampFormatCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
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
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpRequestWithLabelsAndTimestampFormatCommand extends $Command
  .classBuilder<
    HttpRequestWithLabelsAndTimestampFormatCommandInput,
    HttpRequestWithLabelsAndTimestampFormatCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpRequestWithLabelsAndTimestampFormat", {})
  .n("RestJsonProtocolClient", "HttpRequestWithLabelsAndTimestampFormatCommand")
  .sc(HttpRequestWithLabelsAndTimestampFormat)
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
