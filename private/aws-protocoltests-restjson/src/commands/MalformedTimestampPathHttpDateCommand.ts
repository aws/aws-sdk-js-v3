// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedTimestampPathHttpDateInput } from "../models/models_0";
import {
  de_MalformedTimestampPathHttpDateCommand,
  se_MalformedTimestampPathHttpDateCommand,
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
 * The input for {@link MalformedTimestampPathHttpDateCommand}.
 */
export interface MalformedTimestampPathHttpDateCommandInput extends MalformedTimestampPathHttpDateInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampPathHttpDateCommand}.
 */
export interface MalformedTimestampPathHttpDateCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampPathHttpDateCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampPathHttpDateCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampPathHttpDateInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampPathHttpDateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampPathHttpDateCommandInput - {@link MalformedTimestampPathHttpDateCommandInput}
 * @returns {@link MalformedTimestampPathHttpDateCommandOutput}
 * @see {@link MalformedTimestampPathHttpDateCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampPathHttpDateCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedTimestampPathHttpDateCommand extends $Command
  .classBuilder<
    MalformedTimestampPathHttpDateCommandInput,
    MalformedTimestampPathHttpDateCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestJson", "MalformedTimestampPathHttpDate", {})
  .n("RestJsonProtocolClient", "MalformedTimestampPathHttpDateCommand")
  .f(void 0, void 0)
  .ser(se_MalformedTimestampPathHttpDateCommand)
  .de(de_MalformedTimestampPathHttpDateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampPathHttpDateInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampPathHttpDateCommandInput;
      output: MalformedTimestampPathHttpDateCommandOutput;
    };
  };
}
