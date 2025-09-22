// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpRequestWithFloatLabelsInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpRequestWithFloatLabels } from "../schemas/schemas_5_With";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpRequestWithFloatLabelsCommand}.
 */
export interface HttpRequestWithFloatLabelsCommandInput extends HttpRequestWithFloatLabelsInput {}
/**
 * @public
 *
 * The output of {@link HttpRequestWithFloatLabelsCommand}.
 */
export interface HttpRequestWithFloatLabelsCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpRequestWithFloatLabelsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpRequestWithFloatLabelsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpRequestWithFloatLabelsInput
 *   float: Number("float"), // required
 *   double: Number("double"), // required
 * };
 * const command = new HttpRequestWithFloatLabelsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HttpRequestWithFloatLabelsCommandInput - {@link HttpRequestWithFloatLabelsCommandInput}
 * @returns {@link HttpRequestWithFloatLabelsCommandOutput}
 * @see {@link HttpRequestWithFloatLabelsCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithFloatLabelsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class HttpRequestWithFloatLabelsCommand extends $Command
  .classBuilder<
    HttpRequestWithFloatLabelsCommandInput,
    HttpRequestWithFloatLabelsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpRequestWithFloatLabels", {})
  .n("RestJsonProtocolClient", "HttpRequestWithFloatLabelsCommand")
  .sc(HttpRequestWithFloatLabels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpRequestWithFloatLabelsInput;
      output: {};
    };
    sdk: {
      input: HttpRequestWithFloatLabelsCommandInput;
      output: HttpRequestWithFloatLabelsCommandOutput;
    };
  };
}
