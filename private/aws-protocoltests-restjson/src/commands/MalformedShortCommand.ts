// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedShortInput } from "../models/models_0";
import { de_MalformedShortCommand, se_MalformedShortCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedShortCommand}.
 */
export interface MalformedShortCommandInput extends MalformedShortInput {}
/**
 * @public
 *
 * The output of {@link MalformedShortCommand}.
 */
export interface MalformedShortCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedShortCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedShortCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedShortInput
 *   shortInBody: Number("short"),
 *   shortInPath: Number("short"), // required
 *   shortInQuery: Number("short"),
 *   shortInHeader: Number("short"),
 * };
 * const command = new MalformedShortCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedShortCommandInput - {@link MalformedShortCommandInput}
 * @returns {@link MalformedShortCommandOutput}
 * @see {@link MalformedShortCommandInput} for command's `input` shape.
 * @see {@link MalformedShortCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedShortCommand extends $Command
  .classBuilder<
    MalformedShortCommandInput,
    MalformedShortCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedShort", {})
  .n("RestJsonProtocolClient", "MalformedShortCommand")
  .f(void 0, void 0)
  .ser(se_MalformedShortCommand)
  .de(de_MalformedShortCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedShortInput;
      output: {};
    };
    sdk: {
      input: MalformedShortCommandInput;
      output: MalformedShortCommandOutput;
    };
  };
}
