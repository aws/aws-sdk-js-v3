// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreetingWithErrorsOutput } from "../models/models_0";
import type { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RpcV2ProtocolClient";
import { GreetingWithErrors } from "../schemas/schemas_0";

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
 * 3. A ComplexError error.
 *
 * Implementations must be able to successfully take a response and
 * properly deserialize successful and error responses.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, GreetingWithErrorsCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"; // ES Modules import
 * // const { RpcV2ProtocolClient, GreetingWithErrorsCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"); // CommonJS import
 * // import type { RpcV2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema";
 * const config = {}; // type is RpcV2ProtocolClientConfig
 * const client = new RpcV2ProtocolClient(config);
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
 * @see {@link RpcV2ProtocolClientResolvedConfig | config} for RpcV2ProtocolClient's `config` shape.
 *
 * @throws {@link InvalidGreeting} (client fault)
 *  This error is thrown when an invalid greeting value is provided.
 *
 * @throws {@link ComplexError} (client fault)
 *  This error is thrown when a request is invalid.
 *
 * @throws {@link RpcV2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from RpcV2Protocol service.</p>
 *
 *
 * @public
 */
export class GreetingWithErrorsCommand extends $Command
  .classBuilder<
    GreetingWithErrorsCommandInput,
    GreetingWithErrorsCommandOutput,
    RpcV2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RpcV2ProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RpcV2Protocol", "GreetingWithErrors", {})
  .n("RpcV2ProtocolClient", "GreetingWithErrorsCommand")
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
