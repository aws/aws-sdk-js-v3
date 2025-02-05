// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { HttpPrefixHeadersInResponseInput, HttpPrefixHeadersInResponseOutput } from "../models/models_0";
import {
  de_HttpPrefixHeadersInResponseCommand,
  se_HttpPrefixHeadersInResponseCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, HttpPrefixHeadersInResponseCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPrefixHeadersInResponseCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "HttpPrefixHeadersInResponse", {})
  .n("RestJsonProtocolClient", "HttpPrefixHeadersInResponseCommand")
  .f(void 0, void 0)
  .ser(se_HttpPrefixHeadersInResponseCommand)
  .de(de_HttpPrefixHeadersInResponseCommand)
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
