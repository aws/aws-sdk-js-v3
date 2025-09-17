// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedTimestampHeaderEpochInput } from "../models/models_0";
import {
  de_MalformedTimestampHeaderEpochCommand,
  se_MalformedTimestampHeaderEpochCommand,
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
 * The input for {@link MalformedTimestampHeaderEpochCommand}.
 */
export interface MalformedTimestampHeaderEpochCommandInput extends MalformedTimestampHeaderEpochInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampHeaderEpochCommand}.
 */
export interface MalformedTimestampHeaderEpochCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampHeaderEpochCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampHeaderEpochCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampHeaderEpochInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampHeaderEpochCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampHeaderEpochCommandInput - {@link MalformedTimestampHeaderEpochCommandInput}
 * @returns {@link MalformedTimestampHeaderEpochCommandOutput}
 * @see {@link MalformedTimestampHeaderEpochCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampHeaderEpochCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedTimestampHeaderEpochCommand extends $Command
  .classBuilder<
    MalformedTimestampHeaderEpochCommandInput,
    MalformedTimestampHeaderEpochCommandOutput,
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
  .s("RestJson", "MalformedTimestampHeaderEpoch", {})
  .n("RestJsonProtocolClient", "MalformedTimestampHeaderEpochCommand")
  .f(void 0, void 0)
  .ser(se_MalformedTimestampHeaderEpochCommand)
  .de(de_MalformedTimestampHeaderEpochCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampHeaderEpochInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampHeaderEpochCommandInput;
      output: MalformedTimestampHeaderEpochCommandOutput;
    };
  };
}
