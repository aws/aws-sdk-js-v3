// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedTimestampPathEpochInput } from "../models/models_0";
import {
  de_MalformedTimestampPathEpochCommand,
  se_MalformedTimestampPathEpochCommand,
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
 * The input for {@link MalformedTimestampPathEpochCommand}.
 */
export interface MalformedTimestampPathEpochCommandInput extends MalformedTimestampPathEpochInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampPathEpochCommand}.
 */
export interface MalformedTimestampPathEpochCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampPathEpochCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampPathEpochCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampPathEpochInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampPathEpochCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampPathEpochCommandInput - {@link MalformedTimestampPathEpochCommandInput}
 * @returns {@link MalformedTimestampPathEpochCommandOutput}
 * @see {@link MalformedTimestampPathEpochCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampPathEpochCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedTimestampPathEpochCommand extends $Command
  .classBuilder<
    MalformedTimestampPathEpochCommandInput,
    MalformedTimestampPathEpochCommandOutput,
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
  .s("RestJson", "MalformedTimestampPathEpoch", {})
  .n("RestJsonProtocolClient", "MalformedTimestampPathEpochCommand")
  .f(void 0, void 0)
  .ser(se_MalformedTimestampPathEpochCommand)
  .de(de_MalformedTimestampPathEpochCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampPathEpochInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampPathEpochCommandInput;
      output: MalformedTimestampPathEpochCommandOutput;
    };
  };
}
