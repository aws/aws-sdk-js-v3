// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { de_UnitInputAndOutputCommand, se_UnitInputAndOutputCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnitInputAndOutputCommand}.
 */
export interface UnitInputAndOutputCommandInput {}
/**
 * @public
 *
 * The output of {@link UnitInputAndOutputCommand}.
 */
export interface UnitInputAndOutputCommandOutput extends __MetadataBearer {}

/**
 * This test is similar to NoInputAndNoOutput, but uses explicit Unit types.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, UnitInputAndOutputCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, UnitInputAndOutputCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new UnitInputAndOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnitInputAndOutputCommandInput - {@link UnitInputAndOutputCommandInput}
 * @returns {@link UnitInputAndOutputCommandOutput}
 * @see {@link UnitInputAndOutputCommandInput} for command's `input` shape.
 * @see {@link UnitInputAndOutputCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 * @public
 */
export class UnitInputAndOutputCommand extends $Command
  .classBuilder<
    UnitInputAndOutputCommandInput,
    UnitInputAndOutputCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "UnitInputAndOutput", {})
  .n("RestJsonProtocolClient", "UnitInputAndOutputCommand")
  .f(void 0, void 0)
  .ser(se_UnitInputAndOutputCommand)
  .de(de_UnitInputAndOutputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: UnitInputAndOutputCommandInput;
      output: UnitInputAndOutputCommandOutput;
    };
  };
}
