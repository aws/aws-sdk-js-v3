// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpRequestWithGreedyLabelInPathInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpRequestWithGreedyLabelInPath } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpRequestWithGreedyLabelInPathCommand}.
 */
export interface HttpRequestWithGreedyLabelInPathCommandInput extends HttpRequestWithGreedyLabelInPathInput {}
/**
 * @public
 *
 * The output of {@link HttpRequestWithGreedyLabelInPathCommand}.
 */
export interface HttpRequestWithGreedyLabelInPathCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpRequestWithGreedyLabelInPathCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpRequestWithGreedyLabelInPathCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpRequestWithGreedyLabelInPathInput
 *   foo: "STRING_VALUE", // required
 *   baz: "STRING_VALUE", // required
 * };
 * const command = new HttpRequestWithGreedyLabelInPathCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HttpRequestWithGreedyLabelInPathCommandInput - {@link HttpRequestWithGreedyLabelInPathCommandInput}
 * @returns {@link HttpRequestWithGreedyLabelInPathCommandOutput}
 * @see {@link HttpRequestWithGreedyLabelInPathCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithGreedyLabelInPathCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class HttpRequestWithGreedyLabelInPathCommand extends $Command
  .classBuilder<
    HttpRequestWithGreedyLabelInPathCommandInput,
    HttpRequestWithGreedyLabelInPathCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpRequestWithGreedyLabelInPath", {})
  .n("RestJsonProtocolClient", "HttpRequestWithGreedyLabelInPathCommand")
  .sc(HttpRequestWithGreedyLabelInPath)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpRequestWithGreedyLabelInPathInput;
      output: {};
    };
    sdk: {
      input: HttpRequestWithGreedyLabelInPathCommandInput;
      output: HttpRequestWithGreedyLabelInPathCommandOutput;
    };
  };
}
