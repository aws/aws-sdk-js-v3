// smithy-typescript generated code
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpChecksumRequiredInputOutput } from "../models/models_0";
import { de_HttpChecksumRequiredCommand, se_HttpChecksumRequiredCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpChecksumRequiredCommand}.
 */
export interface HttpChecksumRequiredCommandInput extends HttpChecksumRequiredInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpChecksumRequiredCommand}.
 */
export interface HttpChecksumRequiredCommandOutput extends HttpChecksumRequiredInputOutput, __MetadataBearer {}

/**
 * This example tests httpChecksumRequired trait
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpChecksumRequiredCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpChecksumRequiredCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpChecksumRequiredInputOutput
 *   foo: "STRING_VALUE",
 * };
 * const command = new HttpChecksumRequiredCommand(input);
 * const response = await client.send(command);
 * // { // HttpChecksumRequiredInputOutput
 * //   foo: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param HttpChecksumRequiredCommandInput - {@link HttpChecksumRequiredCommandInput}
 * @returns {@link HttpChecksumRequiredCommandOutput}
 * @see {@link HttpChecksumRequiredCommandInput} for command's `input` shape.
 * @see {@link HttpChecksumRequiredCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpChecksumRequiredCommand extends $Command
  .classBuilder<
    HttpChecksumRequiredCommandInput,
    HttpChecksumRequiredCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("RestJson", "HttpChecksumRequired", {})
  .n("RestJsonProtocolClient", "HttpChecksumRequiredCommand")
  .f(void 0, void 0)
  .ser(se_HttpChecksumRequiredCommand)
  .de(de_HttpChecksumRequiredCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpChecksumRequiredInputOutput;
      output: HttpChecksumRequiredInputOutput;
    };
    sdk: {
      input: HttpChecksumRequiredCommandInput;
      output: HttpChecksumRequiredCommandOutput;
    };
  };
}
