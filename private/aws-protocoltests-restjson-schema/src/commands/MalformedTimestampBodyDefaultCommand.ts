// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedTimestampBodyDefaultInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedTimestampBodyDefault } from "../schemas/schemas_46_MalformedTimestampBodyDefault";

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
 * import { RestJsonProtocolClient, MalformedTimestampBodyDefaultCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampBodyDefaultCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedTimestampBodyDefault", {})
  .n("RestJsonProtocolClient", "MalformedTimestampBodyDefaultCommand")
  .sc(MalformedTimestampBodyDefault)
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
