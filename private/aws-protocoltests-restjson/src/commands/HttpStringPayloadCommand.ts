// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { StringPayloadInput } from "../models/models_0";
import { de_HttpStringPayloadCommand, se_HttpStringPayloadCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpStringPayloadCommand}.
 */
export interface HttpStringPayloadCommandInput extends StringPayloadInput {}
/**
 * @public
 *
 * The output of {@link HttpStringPayloadCommand}.
 */
export interface HttpStringPayloadCommandOutput extends StringPayloadInput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpStringPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpStringPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // StringPayloadInput
 *   payload: "STRING_VALUE",
 * };
 * const command = new HttpStringPayloadCommand(input);
 * const response = await client.send(command);
 * // { // StringPayloadInput
 * //   payload: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param HttpStringPayloadCommandInput - {@link HttpStringPayloadCommandInput}
 * @returns {@link HttpStringPayloadCommandOutput}
 * @see {@link HttpStringPayloadCommandInput} for command's `input` shape.
 * @see {@link HttpStringPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class HttpStringPayloadCommand extends $Command
  .classBuilder<
    HttpStringPayloadCommandInput,
    HttpStringPayloadCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "HttpStringPayload", {})
  .n("RestJsonProtocolClient", "HttpStringPayloadCommand")
  .f(void 0, void 0)
  .ser(se_HttpStringPayloadCommand)
  .de(de_HttpStringPayloadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StringPayloadInput;
      output: StringPayloadInput;
    };
    sdk: {
      input: HttpStringPayloadCommandInput;
      output: HttpStringPayloadCommandOutput;
    };
  };
}
