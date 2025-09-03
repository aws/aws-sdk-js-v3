// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedTimestampPathDefaultInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedTimestampPathDefault } from "../schemas/schemas_69_MalformedTimestampPathDefault";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedTimestampPathDefaultCommand}.
 */
export interface MalformedTimestampPathDefaultCommandInput extends MalformedTimestampPathDefaultInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampPathDefaultCommand}.
 */
export interface MalformedTimestampPathDefaultCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampPathDefaultCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampPathDefaultCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampPathDefaultInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampPathDefaultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampPathDefaultCommandInput - {@link MalformedTimestampPathDefaultCommandInput}
 * @returns {@link MalformedTimestampPathDefaultCommandOutput}
 * @see {@link MalformedTimestampPathDefaultCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampPathDefaultCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedTimestampPathDefaultCommand extends $Command
  .classBuilder<
    MalformedTimestampPathDefaultCommandInput,
    MalformedTimestampPathDefaultCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedTimestampPathDefault", {})
  .n("RestJsonProtocolClient", "MalformedTimestampPathDefaultCommand")
  .sc(MalformedTimestampPathDefault)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampPathDefaultInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampPathDefaultCommandInput;
      output: MalformedTimestampPathDefaultCommandOutput;
    };
  };
}
