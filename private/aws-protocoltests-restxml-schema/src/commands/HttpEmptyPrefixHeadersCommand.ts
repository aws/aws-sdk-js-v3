// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HttpEmptyPrefixHeadersInput, HttpEmptyPrefixHeadersOutput } from "../models/models_0";
import type {
  RestXmlProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestXmlProtocolClient";
import { HttpEmptyPrefixHeaders } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpEmptyPrefixHeadersCommand}.
 */
export interface HttpEmptyPrefixHeadersCommandInput extends HttpEmptyPrefixHeadersInput {}
/**
 * @public
 *
 * The output of {@link HttpEmptyPrefixHeadersCommand}.
 */
export interface HttpEmptyPrefixHeadersCommandOutput extends HttpEmptyPrefixHeadersOutput, __MetadataBearer {}

/**
 * Clients that perform this test extract all headers from the response.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpEmptyPrefixHeadersCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpEmptyPrefixHeadersCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpEmptyPrefixHeadersInput
 *   prefixHeaders: { // StringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   specificHeader: "STRING_VALUE",
 * };
 * const command = new HttpEmptyPrefixHeadersCommand(input);
 * const response = await client.send(command);
 * // { // HttpEmptyPrefixHeadersOutput
 * //   prefixHeaders: { // StringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   specificHeader: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param HttpEmptyPrefixHeadersCommandInput - {@link HttpEmptyPrefixHeadersCommandInput}
 * @returns {@link HttpEmptyPrefixHeadersCommandOutput}
 * @see {@link HttpEmptyPrefixHeadersCommandInput} for command's `input` shape.
 * @see {@link HttpEmptyPrefixHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class HttpEmptyPrefixHeadersCommand extends $Command
  .classBuilder<
    HttpEmptyPrefixHeadersCommandInput,
    HttpEmptyPrefixHeadersCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "HttpEmptyPrefixHeaders", {})
  .n("RestXmlProtocolClient", "HttpEmptyPrefixHeadersCommand")
  .sc(HttpEmptyPrefixHeaders)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpEmptyPrefixHeadersInput;
      output: HttpEmptyPrefixHeadersOutput;
    };
    sdk: {
      input: HttpEmptyPrefixHeadersCommandInput;
      output: HttpEmptyPrefixHeadersCommandOutput;
    };
  };
}
