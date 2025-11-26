// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MalformedTimestampPathDefaultInput } from "../models/models_0";
import {
  de_MalformedTimestampPathDefaultCommand,
  se_MalformedTimestampPathDefaultCommand,
} from "../protocols/Aws_restJson1";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, MalformedTimestampPathDefaultCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampPathDefaultCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestJson", "MalformedTimestampPathDefault", {})
  .n("RestJsonProtocolClient", "MalformedTimestampPathDefaultCommand")
  .f(void 0, void 0)
  .ser(se_MalformedTimestampPathDefaultCommand)
  .de(de_MalformedTimestampPathDefaultCommand)
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
