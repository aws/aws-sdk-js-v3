// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StringPayloadInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpStringPayload } from "../schemas/schemas";

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
 * import { RestJsonProtocolClient, HttpStringPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpStringPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpStringPayload", {})
  .n("RestJsonProtocolClient", "HttpStringPayloadCommand")
  .sc(HttpStringPayload)
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
