// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ResponseCodeRequiredOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { ResponseCodeRequired } from "../schemas/schemas_16_ResponseCodeRequired";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResponseCodeRequiredCommand}.
 */
export interface ResponseCodeRequiredCommandInput {}
/**
 * @public
 *
 * The output of {@link ResponseCodeRequiredCommand}.
 */
export interface ResponseCodeRequiredCommandOutput extends ResponseCodeRequiredOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, ResponseCodeRequiredCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, ResponseCodeRequiredCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new ResponseCodeRequiredCommand(input);
 * const response = await client.send(command);
 * // { // ResponseCodeRequiredOutput
 * //   responseCode: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ResponseCodeRequiredCommandInput - {@link ResponseCodeRequiredCommandInput}
 * @returns {@link ResponseCodeRequiredCommandOutput}
 * @see {@link ResponseCodeRequiredCommandInput} for command's `input` shape.
 * @see {@link ResponseCodeRequiredCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class ResponseCodeRequiredCommand extends $Command
  .classBuilder<
    ResponseCodeRequiredCommandInput,
    ResponseCodeRequiredCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "ResponseCodeRequired", {})
  .n("RestJsonProtocolClient", "ResponseCodeRequiredCommand")
  .sc(ResponseCodeRequired)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ResponseCodeRequiredOutput;
    };
    sdk: {
      input: ResponseCodeRequiredCommandInput;
      output: ResponseCodeRequiredCommandOutput;
    };
  };
}
