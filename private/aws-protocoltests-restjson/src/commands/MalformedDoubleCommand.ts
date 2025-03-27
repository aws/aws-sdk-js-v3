// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedDoubleInput } from "../models/models_0";
import { de_MalformedDoubleCommand, se_MalformedDoubleCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedDoubleCommand}.
 */
export interface MalformedDoubleCommandInput extends MalformedDoubleInput {}
/**
 * @public
 *
 * The output of {@link MalformedDoubleCommand}.
 */
export interface MalformedDoubleCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedDoubleCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedDoubleCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedDoubleInput
 *   doubleInBody: Number("double"),
 *   doubleInPath: Number("double"), // required
 *   doubleInQuery: Number("double"),
 *   doubleInHeader: Number("double"),
 * };
 * const command = new MalformedDoubleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedDoubleCommandInput - {@link MalformedDoubleCommandInput}
 * @returns {@link MalformedDoubleCommandOutput}
 * @see {@link MalformedDoubleCommandInput} for command's `input` shape.
 * @see {@link MalformedDoubleCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedDoubleCommand extends $Command
  .classBuilder<
    MalformedDoubleCommandInput,
    MalformedDoubleCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedDouble", {})
  .n("RestJsonProtocolClient", "MalformedDoubleCommand")
  .f(void 0, void 0)
  .ser(se_MalformedDoubleCommand)
  .de(de_MalformedDoubleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedDoubleInput;
      output: {};
    };
    sdk: {
      input: MalformedDoubleCommandInput;
      output: MalformedDoubleCommandOutput;
    };
  };
}
