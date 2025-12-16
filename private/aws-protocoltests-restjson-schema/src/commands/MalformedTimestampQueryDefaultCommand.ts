// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MalformedTimestampQueryDefaultInput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { MalformedTimestampQueryDefault$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedTimestampQueryDefaultCommand}.
 */
export interface MalformedTimestampQueryDefaultCommandInput extends MalformedTimestampQueryDefaultInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampQueryDefaultCommand}.
 */
export interface MalformedTimestampQueryDefaultCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampQueryDefaultCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampQueryDefaultCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampQueryDefaultInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampQueryDefaultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampQueryDefaultCommandInput - {@link MalformedTimestampQueryDefaultCommandInput}
 * @returns {@link MalformedTimestampQueryDefaultCommandOutput}
 * @see {@link MalformedTimestampQueryDefaultCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampQueryDefaultCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedTimestampQueryDefaultCommand extends $Command
  .classBuilder<
    MalformedTimestampQueryDefaultCommandInput,
    MalformedTimestampQueryDefaultCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedTimestampQueryDefault", {})
  .n("RestJsonProtocolClient", "MalformedTimestampQueryDefaultCommand")
  .sc(MalformedTimestampQueryDefault$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampQueryDefaultInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampQueryDefaultCommandInput;
      output: MalformedTimestampQueryDefaultCommandOutput;
    };
  };
}
