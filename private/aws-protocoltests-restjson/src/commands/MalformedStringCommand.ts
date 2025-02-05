// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedStringInput } from "../models/models_0";
import { de_MalformedStringCommand, se_MalformedStringCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedStringCommand}.
 */
export interface MalformedStringCommandInput extends MalformedStringInput {}
/**
 * @public
 *
 * The output of {@link MalformedStringCommand}.
 */
export interface MalformedStringCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedStringCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedStringCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedStringInput
 *   blob: "STRING_VALUE",
 * };
 * const command = new MalformedStringCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedStringCommandInput - {@link MalformedStringCommandInput}
 * @returns {@link MalformedStringCommandOutput}
 * @see {@link MalformedStringCommandInput} for command's `input` shape.
 * @see {@link MalformedStringCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class MalformedStringCommand extends $Command
  .classBuilder<
    MalformedStringCommandInput,
    MalformedStringCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedString", {})
  .n("RestJsonProtocolClient", "MalformedStringCommand")
  .f(void 0, void 0)
  .ser(se_MalformedStringCommand)
  .de(de_MalformedStringCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedStringInput;
      output: {};
    };
    sdk: {
      input: MalformedStringCommandInput;
      output: MalformedStringCommandOutput;
    };
  };
}
