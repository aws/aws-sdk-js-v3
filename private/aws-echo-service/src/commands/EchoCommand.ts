// smithy-typescript generated code
import { EchoServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EchoServiceClient";
import { EchoInput, EchoOutput } from "../models/models_0";
import { de_EchoCommand, se_EchoCommand } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@smithy/middleware-serde";
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
 */
export class EchoCommand extends $Command
  .classBuilder<
    EchoCommandInput,
    EchoCommandOutput,
    EchoServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: EchoServiceClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("EchoService", "Echo", {})
  .n("EchoServiceClient", "EchoCommand")
  .f(void 0, void 0)
  .ser(se_EchoCommand)
  .de(de_EchoCommand)
  .build() {}
