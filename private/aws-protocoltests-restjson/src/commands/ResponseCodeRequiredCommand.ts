// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ResponseCodeRequiredOutput } from "../models/models_0";
import { de_ResponseCodeRequiredCommand, se_ResponseCodeRequiredCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, ResponseCodeRequiredCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, ResponseCodeRequiredCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
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
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "ResponseCodeRequired", {})
  .n("RestJsonProtocolClient", "ResponseCodeRequiredCommand")
  .f(void 0, void 0)
  .ser(se_ResponseCodeRequiredCommand)
  .de(de_ResponseCodeRequiredCommand)
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
