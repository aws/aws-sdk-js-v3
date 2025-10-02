// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StringPayloadInput } from "../models/models_0";
import { de_HttpStringPayloadCommand, se_HttpStringPayloadCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

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
 * import { RestXmlProtocolClient, HttpStringPayloadCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpStringPayloadCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
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
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class HttpStringPayloadCommand extends $Command
  .classBuilder<
    HttpStringPayloadCommandInput,
    HttpStringPayloadCommandOutput,
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
  .s("RestXml", "HttpStringPayload", {})
  .n("RestXmlProtocolClient", "HttpStringPayloadCommand")
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
