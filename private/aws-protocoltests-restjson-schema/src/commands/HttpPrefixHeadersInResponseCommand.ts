// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpPrefixHeadersInResponseInput, HttpPrefixHeadersInResponseOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpPrefixHeadersInResponse } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpPrefixHeadersInResponseCommand}.
 */
export interface HttpPrefixHeadersInResponseCommandInput extends HttpPrefixHeadersInResponseInput {}
/**
 * @public
 *
 * The output of {@link HttpPrefixHeadersInResponseCommand}.
 */
export interface HttpPrefixHeadersInResponseCommandOutput extends HttpPrefixHeadersInResponseOutput, __MetadataBearer {}

/**
 * Clients that perform this test extract all headers from the response.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPrefixHeadersInResponseCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPrefixHeadersInResponseCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new HttpPrefixHeadersInResponseCommand(input);
 * const response = await client.send(command);
 * // { // HttpPrefixHeadersInResponseOutput
 * //   prefixHeaders: { // StringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPrefixHeadersInResponseCommandInput - {@link HttpPrefixHeadersInResponseCommandInput}
 * @returns {@link HttpPrefixHeadersInResponseCommandOutput}
 * @see {@link HttpPrefixHeadersInResponseCommandInput} for command's `input` shape.
 * @see {@link HttpPrefixHeadersInResponseCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPrefixHeadersInResponseCommand extends $Command
  .classBuilder<
    HttpPrefixHeadersInResponseCommandInput,
    HttpPrefixHeadersInResponseCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpPrefixHeadersInResponse", {})
  .n("RestJsonProtocolClient", "HttpPrefixHeadersInResponseCommand")
  .f(void 0, void 0)
  .sc(HttpPrefixHeadersInResponse)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: HttpPrefixHeadersInResponseOutput;
    };
    sdk: {
      input: HttpPrefixHeadersInResponseCommandInput;
      output: HttpPrefixHeadersInResponseCommandOutput;
    };
  };
}
