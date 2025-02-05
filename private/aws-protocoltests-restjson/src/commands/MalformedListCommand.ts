// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedListInput } from "../models/models_0";
import { de_MalformedListCommand, se_MalformedListCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedListCommand}.
 */
export interface MalformedListCommandInput extends MalformedListInput {}
/**
 * @public
 *
 * The output of {@link MalformedListCommand}.
 */
export interface MalformedListCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedListCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedListCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedListInput
 *   bodyList: [ // SimpleList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new MalformedListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedListCommandInput - {@link MalformedListCommandInput}
 * @returns {@link MalformedListCommandOutput}
 * @see {@link MalformedListCommandInput} for command's `input` shape.
 * @see {@link MalformedListCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class MalformedListCommand extends $Command
  .classBuilder<
    MalformedListCommandInput,
    MalformedListCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedList", {})
  .n("RestJsonProtocolClient", "MalformedListCommand")
  .f(void 0, void 0)
  .ser(se_MalformedListCommand)
  .de(de_MalformedListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedListInput;
      output: {};
    };
    sdk: {
      input: MalformedListCommandInput;
      output: MalformedListCommandOutput;
    };
  };
}
