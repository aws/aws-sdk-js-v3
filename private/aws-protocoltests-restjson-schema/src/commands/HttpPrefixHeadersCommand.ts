// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpPrefixHeadersInput, HttpPrefixHeadersOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpPrefixHeaders } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpPrefixHeadersCommand}.
 */
export interface HttpPrefixHeadersCommandInput extends HttpPrefixHeadersInput {}
/**
 * @public
 *
 * The output of {@link HttpPrefixHeadersCommand}.
 */
export interface HttpPrefixHeadersCommandOutput extends HttpPrefixHeadersOutput, __MetadataBearer {}

/**
 * This examples adds headers to the input of a request and response by prefix.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPrefixHeadersCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPrefixHeadersCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpPrefixHeadersInput
 *   foo: "STRING_VALUE",
 *   fooMap: { // StringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPrefixHeadersCommand(input);
 * const response = await client.send(command);
 * // { // HttpPrefixHeadersOutput
 * //   foo: "STRING_VALUE",
 * //   fooMap: { // StringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPrefixHeadersCommandInput - {@link HttpPrefixHeadersCommandInput}
 * @returns {@link HttpPrefixHeadersCommandOutput}
 * @see {@link HttpPrefixHeadersCommandInput} for command's `input` shape.
 * @see {@link HttpPrefixHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPrefixHeadersCommand extends $Command
  .classBuilder<
    HttpPrefixHeadersCommandInput,
    HttpPrefixHeadersCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpPrefixHeaders", {})
  .n("RestJsonProtocolClient", "HttpPrefixHeadersCommand")
  .sc(HttpPrefixHeaders)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPrefixHeadersInput;
      output: HttpPrefixHeadersOutput;
    };
    sdk: {
      input: HttpPrefixHeadersCommandInput;
      output: HttpPrefixHeadersCommandOutput;
    };
  };
}
