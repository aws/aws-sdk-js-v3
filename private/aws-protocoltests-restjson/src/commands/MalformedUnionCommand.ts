// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedUnionInput } from "../models/models_0";
import { de_MalformedUnionCommand, se_MalformedUnionCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedUnionCommand}.
 */
export interface MalformedUnionCommandInput extends MalformedUnionInput {}
/**
 * @public
 *
 * The output of {@link MalformedUnionCommand}.
 */
export interface MalformedUnionCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedUnionCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedUnionCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedUnionInput
 *   union: { // SimpleUnion Union: only one key present
 *     int: Number("int"),
 *     string: "STRING_VALUE",
 *   },
 * };
 * const command = new MalformedUnionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedUnionCommandInput - {@link MalformedUnionCommandInput}
 * @returns {@link MalformedUnionCommandOutput}
 * @see {@link MalformedUnionCommandInput} for command's `input` shape.
 * @see {@link MalformedUnionCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class MalformedUnionCommand extends $Command
  .classBuilder<
    MalformedUnionCommandInput,
    MalformedUnionCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedUnion", {})
  .n("RestJsonProtocolClient", "MalformedUnionCommand")
  .f(void 0, void 0)
  .ser(se_MalformedUnionCommand)
  .de(de_MalformedUnionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedUnionInput;
      output: {};
    };
    sdk: {
      input: MalformedUnionCommandInput;
      output: MalformedUnionCommandOutput;
    };
  };
}
