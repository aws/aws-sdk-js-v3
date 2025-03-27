// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedTimestampBodyDateTimeInput } from "../models/models_0";
import {
  de_MalformedTimestampBodyDateTimeCommand,
  se_MalformedTimestampBodyDateTimeCommand,
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
 * The input for {@link MalformedTimestampBodyDateTimeCommand}.
 */
export interface MalformedTimestampBodyDateTimeCommandInput extends MalformedTimestampBodyDateTimeInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampBodyDateTimeCommand}.
 */
export interface MalformedTimestampBodyDateTimeCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampBodyDateTimeCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampBodyDateTimeCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampBodyDateTimeInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampBodyDateTimeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampBodyDateTimeCommandInput - {@link MalformedTimestampBodyDateTimeCommandInput}
 * @returns {@link MalformedTimestampBodyDateTimeCommandOutput}
 * @see {@link MalformedTimestampBodyDateTimeCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampBodyDateTimeCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedTimestampBodyDateTimeCommand extends $Command
  .classBuilder<
    MalformedTimestampBodyDateTimeCommandInput,
    MalformedTimestampBodyDateTimeCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedTimestampBodyDateTime", {})
  .n("RestJsonProtocolClient", "MalformedTimestampBodyDateTimeCommand")
  .f(void 0, void 0)
  .ser(se_MalformedTimestampBodyDateTimeCommand)
  .de(de_MalformedTimestampBodyDateTimeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampBodyDateTimeInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampBodyDateTimeCommandInput;
      output: MalformedTimestampBodyDateTimeCommandOutput;
    };
  };
}
