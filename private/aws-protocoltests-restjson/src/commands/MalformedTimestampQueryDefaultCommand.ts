// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedTimestampQueryDefaultInput } from "../models/models_0";
import {
  de_MalformedTimestampQueryDefaultCommand,
  se_MalformedTimestampQueryDefaultCommand,
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
 * The input for {@link MalformedTimestampQueryDefaultCommand}.
 */
export interface MalformedTimestampQueryDefaultCommandInput extends MalformedTimestampQueryDefaultInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampQueryDefaultCommand}.
 */
export interface MalformedTimestampQueryDefaultCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampQueryDefaultCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampQueryDefaultCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampQueryDefaultInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampQueryDefaultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampQueryDefaultCommandInput - {@link MalformedTimestampQueryDefaultCommandInput}
 * @returns {@link MalformedTimestampQueryDefaultCommandOutput}
 * @see {@link MalformedTimestampQueryDefaultCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampQueryDefaultCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class MalformedTimestampQueryDefaultCommand extends $Command
  .classBuilder<
    MalformedTimestampQueryDefaultCommandInput,
    MalformedTimestampQueryDefaultCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedTimestampQueryDefault", {})
  .n("RestJsonProtocolClient", "MalformedTimestampQueryDefaultCommand")
  .f(void 0, void 0)
  .ser(se_MalformedTimestampQueryDefaultCommand)
  .de(de_MalformedTimestampQueryDefaultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampQueryDefaultInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampQueryDefaultCommandInput;
      output: MalformedTimestampQueryDefaultCommandOutput;
    };
  };
}
