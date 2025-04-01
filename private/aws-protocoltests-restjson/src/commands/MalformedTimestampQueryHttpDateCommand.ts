// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedTimestampQueryHttpDateInput } from "../models/models_0";
import {
  de_MalformedTimestampQueryHttpDateCommand,
  se_MalformedTimestampQueryHttpDateCommand,
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
 * import { RestJsonProtocolClient, MalformedTimestampQueryHttpDateCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampQueryHttpDateCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
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
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedTimestampQueryHttpDate", {})
  .n("RestJsonProtocolClient", "MalformedTimestampQueryHttpDateCommand")
  .f(void 0, void 0)
  .ser(se_MalformedTimestampQueryHttpDateCommand)
  .de(de_MalformedTimestampQueryHttpDateCommand)
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
