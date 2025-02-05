// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedIntegerInput } from "../models/models_0";
import { de_MalformedIntegerCommand, se_MalformedIntegerCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedIntegerCommand}.
 */
export interface MalformedIntegerCommandInput extends MalformedIntegerInput {}
/**
 * @public
 *
 * The output of {@link MalformedIntegerCommand}.
 */
export interface MalformedIntegerCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedIntegerCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedIntegerCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedIntegerInput
 *   integerInBody: Number("int"),
 *   integerInPath: Number("int"), // required
 *   integerInQuery: Number("int"),
 *   integerInHeader: Number("int"),
 * };
 * const command = new MalformedIntegerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedIntegerCommandInput - {@link MalformedIntegerCommandInput}
 * @returns {@link MalformedIntegerCommandOutput}
 * @see {@link MalformedIntegerCommandInput} for command's `input` shape.
 * @see {@link MalformedIntegerCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class MalformedIntegerCommand extends $Command
  .classBuilder<
    MalformedIntegerCommandInput,
    MalformedIntegerCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedInteger", {})
  .n("RestJsonProtocolClient", "MalformedIntegerCommand")
  .f(void 0, void 0)
  .ser(se_MalformedIntegerCommand)
  .de(de_MalformedIntegerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedIntegerInput;
      output: {};
    };
    sdk: {
      input: MalformedIntegerCommandInput;
      output: MalformedIntegerCommandOutput;
    };
  };
}
