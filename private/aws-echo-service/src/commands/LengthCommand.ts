// smithy-typescript generated code
import { EchoServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EchoServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { LengthInput, LengthOutput } from "../models/models_0";
import { Length } from "../schemas/schemas_1_";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link LengthCommand}.
 */
export interface LengthCommandInput extends LengthInput {}
/**
 * @public
 *
 * The output of {@link LengthCommand}.
 */
export interface LengthCommandOutput extends LengthOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EchoServiceClient, LengthCommand } from "@aws-sdk/aws-echo-service"; // ES Modules import
 * // const { EchoServiceClient, LengthCommand } = require("@aws-sdk/aws-echo-service"); // CommonJS import
 * // import type { EchoServiceClientConfig } from "@aws-sdk/aws-echo-service";
 * const config = {}; // type is EchoServiceClientConfig
 * const client = new EchoServiceClient(config);
 * const input = { // LengthInput
 *   string: "STRING_VALUE", // required
 * };
 * const command = new LengthCommand(input);
 * const response = await client.send(command);
 * // { // LengthOutput
 * //   length: Number("int"),
 * // };
 *
 * ```
 *
 * @param LengthCommandInput - {@link LengthCommandInput}
 * @returns {@link LengthCommandOutput}
 * @see {@link LengthCommandInput} for command's `input` shape.
 * @see {@link LengthCommandOutput} for command's `response` shape.
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
export class LengthCommand extends $Command
  .classBuilder<
    LengthCommandInput,
    LengthCommandOutput,
    EchoServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EchoServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EchoService", "Length", {})
  .n("EchoServiceClient", "LengthCommand")
  .sc(Length)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: LengthInput;
      output: LengthOutput;
    };
    sdk: {
      input: LengthCommandInput;
      output: LengthCommandOutput;
    };
  };
}
