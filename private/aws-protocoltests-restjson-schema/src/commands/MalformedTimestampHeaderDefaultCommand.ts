// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedTimestampHeaderDefaultInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedTimestampHeaderDefault } from "../schemas/schemas_58_MalformedTimestampHeaderDefault";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedTimestampHeaderDefaultCommand}.
 */
export interface MalformedTimestampHeaderDefaultCommandInput extends MalformedTimestampHeaderDefaultInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampHeaderDefaultCommand}.
 */
export interface MalformedTimestampHeaderDefaultCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampHeaderDefaultCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampHeaderDefaultCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampHeaderDefaultInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampHeaderDefaultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampHeaderDefaultCommandInput - {@link MalformedTimestampHeaderDefaultCommandInput}
 * @returns {@link MalformedTimestampHeaderDefaultCommandOutput}
 * @see {@link MalformedTimestampHeaderDefaultCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampHeaderDefaultCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedTimestampHeaderDefaultCommand extends $Command
  .classBuilder<
    MalformedTimestampHeaderDefaultCommandInput,
    MalformedTimestampHeaderDefaultCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedTimestampHeaderDefault", {})
  .n("RestJsonProtocolClient", "MalformedTimestampHeaderDefaultCommand")
  .sc(MalformedTimestampHeaderDefault)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampHeaderDefaultInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampHeaderDefaultCommandInput;
      output: MalformedTimestampHeaderDefaultCommandOutput;
    };
  };
}
