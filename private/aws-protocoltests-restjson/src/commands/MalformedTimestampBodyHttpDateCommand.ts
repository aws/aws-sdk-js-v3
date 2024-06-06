// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedTimestampBodyHttpDateInput } from "../models/models_0";
import {
  de_MalformedTimestampBodyHttpDateCommand,
  se_MalformedTimestampBodyHttpDateCommand,
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
 * The input for {@link MalformedTimestampBodyHttpDateCommand}.
 */
export interface MalformedTimestampBodyHttpDateCommandInput extends MalformedTimestampBodyHttpDateInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampBodyHttpDateCommand}.
 */
export interface MalformedTimestampBodyHttpDateCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampBodyHttpDateCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampBodyHttpDateCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampBodyHttpDateInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampBodyHttpDateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampBodyHttpDateCommandInput - {@link MalformedTimestampBodyHttpDateCommandInput}
 * @returns {@link MalformedTimestampBodyHttpDateCommandOutput}
 * @see {@link MalformedTimestampBodyHttpDateCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampBodyHttpDateCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class MalformedTimestampBodyHttpDateCommand extends $Command
  .classBuilder<
    MalformedTimestampBodyHttpDateCommandInput,
    MalformedTimestampBodyHttpDateCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedTimestampBodyHttpDate", {})
  .n("RestJsonProtocolClient", "MalformedTimestampBodyHttpDateCommand")
  .f(void 0, void 0)
  .ser(se_MalformedTimestampBodyHttpDateCommand)
  .de(de_MalformedTimestampBodyHttpDateCommand)
  .build() {}
