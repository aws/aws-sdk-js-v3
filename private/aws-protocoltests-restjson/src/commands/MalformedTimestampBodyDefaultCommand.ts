// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedTimestampBodyDefaultInput } from "../models/models_0";
import {
  de_MalformedTimestampBodyDefaultCommand,
  se_MalformedTimestampBodyDefaultCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedTimestampBodyDefaultCommand}.
 */
export interface MalformedTimestampBodyDefaultCommandInput extends MalformedTimestampBodyDefaultInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampBodyDefaultCommand}.
 */
export interface MalformedTimestampBodyDefaultCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampBodyDefaultCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampBodyDefaultCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampBodyDefaultInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampBodyDefaultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampBodyDefaultCommandInput - {@link MalformedTimestampBodyDefaultCommandInput}
 * @returns {@link MalformedTimestampBodyDefaultCommandOutput}
 * @see {@link MalformedTimestampBodyDefaultCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampBodyDefaultCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class MalformedTimestampBodyDefaultCommand extends $Command
  .classBuilder<
    MalformedTimestampBodyDefaultCommandInput,
    MalformedTimestampBodyDefaultCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedTimestampBodyDefault", {})
  .n("RestJsonProtocolClient", "MalformedTimestampBodyDefaultCommand")
  .f(void 0, void 0)
  .ser(se_MalformedTimestampBodyDefaultCommand)
  .de(de_MalformedTimestampBodyDefaultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampBodyDefaultInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampBodyDefaultCommandInput;
      output: MalformedTimestampBodyDefaultCommandOutput;
    };
  };
}
