// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedLongInput } from "../models/models_0";
import { de_MalformedLongCommand, se_MalformedLongCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedLongCommand}.
 */
export interface MalformedLongCommandInput extends MalformedLongInput {}
/**
 * @public
 *
 * The output of {@link MalformedLongCommand}.
 */
export interface MalformedLongCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedLongCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedLongCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedLongInput
 *   longInBody: Number("long"),
 *   longInPath: Number("long"), // required
 *   longInQuery: Number("long"),
 *   longInHeader: Number("long"),
 * };
 * const command = new MalformedLongCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedLongCommandInput - {@link MalformedLongCommandInput}
 * @returns {@link MalformedLongCommandOutput}
 * @see {@link MalformedLongCommandInput} for command's `input` shape.
 * @see {@link MalformedLongCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class MalformedLongCommand extends $Command
  .classBuilder<
    MalformedLongCommandInput,
    MalformedLongCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedLong", {})
  .n("RestJsonProtocolClient", "MalformedLongCommand")
  .f(void 0, void 0)
  .ser(se_MalformedLongCommand)
  .de(de_MalformedLongCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedLongInput;
      output: {};
    };
    sdk: {
      input: MalformedLongCommandInput;
      output: MalformedLongCommandOutput;
    };
  };
}
