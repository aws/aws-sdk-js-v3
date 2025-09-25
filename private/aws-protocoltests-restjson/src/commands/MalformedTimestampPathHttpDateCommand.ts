// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedTimestampPathHttpDateInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedTimestampPathHttpDate } from "../schemas/schemas_61_MalformedTimestampPathHttpDate";

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
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedTimestampPathHttpDate", {})
  .n("RestJsonProtocolClient", "MalformedTimestampPathHttpDateCommand")
  .sc(MalformedTimestampPathHttpDate)
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
