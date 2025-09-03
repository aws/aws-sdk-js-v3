// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedTimestampHeaderEpochInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedTimestampHeaderEpoch } from "../schemas/schemas_11_MalformedTimestampHeaderEpoch";

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
 * import { RestJsonProtocolClient, MalformedTimestampHeaderEpochCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampHeaderEpochCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedTimestampHeaderEpoch", {})
  .n("RestJsonProtocolClient", "MalformedTimestampHeaderEpochCommand")
  .sc(MalformedTimestampHeaderEpoch)
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
