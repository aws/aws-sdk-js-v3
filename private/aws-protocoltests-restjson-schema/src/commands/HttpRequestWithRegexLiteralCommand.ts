// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpRequestWithRegexLiteralInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpRequestWithRegexLiteral } from "../schemas/schemas_1_HttpRequestWithRegexLiteral";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpRequestWithRegexLiteralCommand}.
 */
export interface HttpRequestWithRegexLiteralCommandInput extends HttpRequestWithRegexLiteralInput {}
/**
 * @public
 *
 * The output of {@link HttpRequestWithRegexLiteralCommand}.
 */
export interface HttpRequestWithRegexLiteralCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpRequestWithRegexLiteralCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpRequestWithRegexLiteralCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpRequestWithRegexLiteralInput
 *   str: "STRING_VALUE", // required
 * };
 * const command = new HttpRequestWithRegexLiteralCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HttpRequestWithRegexLiteralCommandInput - {@link HttpRequestWithRegexLiteralCommandInput}
 * @returns {@link HttpRequestWithRegexLiteralCommandOutput}
 * @see {@link HttpRequestWithRegexLiteralCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithRegexLiteralCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class HttpRequestWithRegexLiteralCommand extends $Command
  .classBuilder<
    HttpRequestWithRegexLiteralCommandInput,
    HttpRequestWithRegexLiteralCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpRequestWithRegexLiteral", {})
  .n("RestJsonProtocolClient", "HttpRequestWithRegexLiteralCommand")
  .sc(HttpRequestWithRegexLiteral)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpRequestWithRegexLiteralInput;
      output: {};
    };
    sdk: {
      input: HttpRequestWithRegexLiteralCommandInput;
      output: HttpRequestWithRegexLiteralCommandOutput;
    };
  };
}
