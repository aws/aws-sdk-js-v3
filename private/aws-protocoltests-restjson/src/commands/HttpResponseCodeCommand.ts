// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HttpResponseCodeOutput } from "../models/models_0";
import { de_HttpResponseCodeCommand, se_HttpResponseCodeCommand } from "../protocols/Aws_restJson1";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpResponseCodeCommand}.
 */
export interface HttpResponseCodeCommandInput {}
/**
 * @public
 *
 * The output of {@link HttpResponseCodeCommand}.
 */
export interface HttpResponseCodeCommandOutput extends HttpResponseCodeOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpResponseCodeCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpResponseCodeCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new HttpResponseCodeCommand(input);
 * const response = await client.send(command);
 * // { // HttpResponseCodeOutput
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param HttpResponseCodeCommandInput - {@link HttpResponseCodeCommandInput}
 * @returns {@link HttpResponseCodeCommandOutput}
 * @see {@link HttpResponseCodeCommandInput} for command's `input` shape.
 * @see {@link HttpResponseCodeCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class HttpResponseCodeCommand extends $Command
  .classBuilder<
    HttpResponseCodeCommandInput,
    HttpResponseCodeCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestJson", "HttpResponseCode", {})
  .n("RestJsonProtocolClient", "HttpResponseCodeCommand")
  .f(void 0, void 0)
  .ser(se_HttpResponseCodeCommand)
  .de(de_HttpResponseCodeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: HttpResponseCodeOutput;
    };
    sdk: {
      input: HttpResponseCodeCommandInput;
      output: HttpResponseCodeCommandOutput;
    };
  };
}
