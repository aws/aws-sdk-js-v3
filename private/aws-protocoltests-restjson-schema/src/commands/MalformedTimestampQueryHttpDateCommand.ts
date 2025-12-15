// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MalformedTimestampQueryHttpDateInput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { MalformedTimestampQueryHttpDate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedTimestampQueryHttpDateCommand}.
 */
export interface MalformedTimestampQueryHttpDateCommandInput extends MalformedTimestampQueryHttpDateInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampQueryHttpDateCommand}.
 */
export interface MalformedTimestampQueryHttpDateCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampQueryHttpDateCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampQueryHttpDateCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampQueryHttpDateInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampQueryHttpDateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampQueryHttpDateCommandInput - {@link MalformedTimestampQueryHttpDateCommandInput}
 * @returns {@link MalformedTimestampQueryHttpDateCommandOutput}
 * @see {@link MalformedTimestampQueryHttpDateCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampQueryHttpDateCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedTimestampQueryHttpDateCommand extends $Command
  .classBuilder<
    MalformedTimestampQueryHttpDateCommandInput,
    MalformedTimestampQueryHttpDateCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedTimestampQueryHttpDate", {})
  .n("RestJsonProtocolClient", "MalformedTimestampQueryHttpDateCommand")
  .sc(MalformedTimestampQueryHttpDate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampQueryHttpDateInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampQueryHttpDateCommandInput;
      output: MalformedTimestampQueryHttpDateCommandOutput;
    };
  };
}
