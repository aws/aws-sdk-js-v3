// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MalformedTimestampQueryEpochInput } from "../models/models_0";
import {
  de_MalformedTimestampQueryEpochCommand,
  se_MalformedTimestampQueryEpochCommand,
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
 * The input for {@link MalformedTimestampQueryEpochCommand}.
 */
export interface MalformedTimestampQueryEpochCommandInput extends MalformedTimestampQueryEpochInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampQueryEpochCommand}.
 */
export interface MalformedTimestampQueryEpochCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampQueryEpochCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampQueryEpochCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampQueryEpochInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampQueryEpochCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampQueryEpochCommandInput - {@link MalformedTimestampQueryEpochCommandInput}
 * @returns {@link MalformedTimestampQueryEpochCommandOutput}
 * @see {@link MalformedTimestampQueryEpochCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampQueryEpochCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedTimestampQueryEpochCommand extends $Command
  .classBuilder<
    MalformedTimestampQueryEpochCommandInput,
    MalformedTimestampQueryEpochCommandOutput,
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
  .s("RestJson", "MalformedTimestampQueryEpoch", {})
  .n("RestJsonProtocolClient", "MalformedTimestampQueryEpochCommand")
  .f(void 0, void 0)
  .ser(se_MalformedTimestampQueryEpochCommand)
  .de(de_MalformedTimestampQueryEpochCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampQueryEpochInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampQueryEpochCommandInput;
      output: MalformedTimestampQueryEpochCommandOutput;
    };
  };
}
