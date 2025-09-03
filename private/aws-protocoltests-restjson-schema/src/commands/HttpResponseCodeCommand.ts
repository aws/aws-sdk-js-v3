// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpResponseCodeOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpResponseCode } from "../schemas/schemas_26_HttpResponseCode";

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
 * import { RestJsonProtocolClient, HttpResponseCodeCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpResponseCodeCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpResponseCode", {})
  .n("RestJsonProtocolClient", "HttpResponseCodeCommand")
  .sc(HttpResponseCode)
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
