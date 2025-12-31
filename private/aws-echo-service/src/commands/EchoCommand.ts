// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EchoServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EchoServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { EchoInput, EchoOutput } from "../models/models_0";
import { Echo$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EchoCommand}.
 */
export interface EchoCommandInput extends EchoInput {}
/**
 * @public
 *
 * The output of {@link EchoCommand}.
 */
export interface EchoCommandOutput extends EchoOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EchoServiceClient, EchoCommand } from "@aws-sdk/aws-echo-service"; // ES Modules import
 * // const { EchoServiceClient, EchoCommand } = require("@aws-sdk/aws-echo-service"); // CommonJS import
 * // import type { EchoServiceClientConfig } from "@aws-sdk/aws-echo-service";
 * const config = {}; // type is EchoServiceClientConfig
 * const client = new EchoServiceClient(config);
 * const input = { // EchoInput
 *   string: "STRING_VALUE",
 * };
 * const command = new EchoCommand(input);
 * const response = await client.send(command);
 * // { // EchoOutput
 * //   string: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EchoCommandInput - {@link EchoCommandInput}
 * @returns {@link EchoCommandOutput}
 * @see {@link EchoCommandInput} for command's `input` shape.
 * @see {@link EchoCommandOutput} for command's `response` shape.
 * @see {@link EchoServiceClientResolvedConfig | config} for EchoServiceClient's `config` shape.
 *
 * @throws {@link PalindromeException} (client fault)
 *  For some reason, this service does not like palindromes!
 *
 * @throws {@link EchoServiceServiceException}
 * <p>Base exception class for all service exceptions from EchoService service.</p>
 *
 *
 */
export class EchoCommand extends $Command
  .classBuilder<
    EchoCommandInput,
    EchoCommandOutput,
    EchoServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EchoServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EchoService", "Echo", {})
  .n("EchoServiceClient", "EchoCommand")
  .sc(Echo$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EchoInput;
      output: EchoOutput;
    };
    sdk: {
      input: EchoCommandInput;
      output: EchoCommandOutput;
    };
  };
}
