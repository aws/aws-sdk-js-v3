// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreetingWithErrorsOutput } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { GreetingWithErrors } from "../schemas/schemas_8_GreetingWithErrors";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GreetingWithErrorsCommand}.
 */
export interface GreetingWithErrorsCommandInput {}
/**
 * @public
 *
 * The output of {@link GreetingWithErrorsCommand}.
 */
export interface GreetingWithErrorsCommandOutput extends GreetingWithErrorsOutput, __MetadataBearer {}

/**
 * This operation has three possible return values:
 *
 * 1. A successful response in the form of GreetingWithErrorsOutput
 * 2. An InvalidGreeting error.
 * 3. A BadRequest error.
 *
 * Implementations must be able to successfully take a response and
 * properly (de)serialize successful and error responses based on the
 * the presence of the
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, GreetingWithErrorsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, GreetingWithErrorsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = {};
 * const command = new GreetingWithErrorsCommand(input);
 * const response = await client.send(command);
 * // { // GreetingWithErrorsOutput
 * //   greeting: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GreetingWithErrorsCommandInput - {@link GreetingWithErrorsCommandInput}
 * @returns {@link GreetingWithErrorsCommandOutput}
 * @see {@link GreetingWithErrorsCommandInput} for command's `input` shape.
 * @see {@link GreetingWithErrorsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link InvalidGreeting} (client fault)
 *  This error is thrown when an invalid greeting value is provided.
 *
 * @throws {@link ComplexError} (client fault)
 *  This error is thrown when a request is invalid.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class GreetingWithErrorsCommand extends $Command
  .classBuilder<
    GreetingWithErrorsCommandInput,
    GreetingWithErrorsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "GreetingWithErrors", {})
  .n("RestXmlProtocolClient", "GreetingWithErrorsCommand")
  .sc(GreetingWithErrors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GreetingWithErrorsOutput;
    };
    sdk: {
      input: GreetingWithErrorsCommandInput;
      output: GreetingWithErrorsCommandOutput;
    };
  };
}
