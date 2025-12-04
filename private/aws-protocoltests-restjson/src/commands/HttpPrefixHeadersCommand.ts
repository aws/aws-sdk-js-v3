// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HttpPrefixHeadersInput, HttpPrefixHeadersOutput } from "../models/models_0";
import { de_HttpPrefixHeadersCommand, se_HttpPrefixHeadersCommand } from "../protocols/Aws_restJson1";
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
 * import { RestJsonProtocolClient, HttpPrefixHeadersCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPrefixHeadersCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestJson", "HttpPrefixHeaders", {})
  .n("RestJsonProtocolClient", "HttpPrefixHeadersCommand")
  .f(void 0, void 0)
  .ser(se_HttpPrefixHeadersCommand)
  .de(de_HttpPrefixHeadersCommand)
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
