// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpRequestWithLabelsInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpRequestWithLabels } from "../schemas/schemas_2_Json";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpRequestWithLabelsCommand}.
 */
export interface HttpRequestWithLabelsCommandInput extends HttpRequestWithLabelsInput {}
/**
 * @public
 *
 * The output of {@link HttpRequestWithLabelsCommand}.
 */
export interface HttpRequestWithLabelsCommandOutput extends __MetadataBearer {}

/**
 * The example tests how requests are serialized when there's no input
 * payload but there are HTTP labels.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpRequestWithLabelsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpRequestWithLabelsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpRequestWithLabelsInput
 *   string: "STRING_VALUE", // required
 *   short: Number("short"), // required
 *   integer: Number("int"), // required
 *   long: Number("long"), // required
 *   float: Number("float"), // required
 *   double: Number("double"), // required
 *   boolean: true || false, // required
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new HttpRequestWithLabelsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HttpRequestWithLabelsCommandInput - {@link HttpRequestWithLabelsCommandInput}
 * @returns {@link HttpRequestWithLabelsCommandOutput}
 * @see {@link HttpRequestWithLabelsCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithLabelsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpRequestWithLabelsCommand extends $Command
  .classBuilder<
    HttpRequestWithLabelsCommandInput,
    HttpRequestWithLabelsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpRequestWithLabels", {})
  .n("RestJsonProtocolClient", "HttpRequestWithLabelsCommand")
  .sc(HttpRequestWithLabels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpRequestWithLabelsInput;
      output: {};
    };
    sdk: {
      input: HttpRequestWithLabelsCommandInput;
      output: HttpRequestWithLabelsCommandOutput;
    };
  };
}
