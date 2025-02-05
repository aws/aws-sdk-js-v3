// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedTimestampHeaderDateTimeInput } from "../models/models_0";
import {
  de_MalformedTimestampHeaderDateTimeCommand,
  se_MalformedTimestampHeaderDateTimeCommand,
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
 * The input for {@link MalformedTimestampHeaderDateTimeCommand}.
 */
export interface MalformedTimestampHeaderDateTimeCommandInput extends MalformedTimestampHeaderDateTimeInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampHeaderDateTimeCommand}.
 */
export interface MalformedTimestampHeaderDateTimeCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampHeaderDateTimeCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampHeaderDateTimeCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampHeaderDateTimeInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampHeaderDateTimeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampHeaderDateTimeCommandInput - {@link MalformedTimestampHeaderDateTimeCommandInput}
 * @returns {@link MalformedTimestampHeaderDateTimeCommandOutput}
 * @see {@link MalformedTimestampHeaderDateTimeCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampHeaderDateTimeCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class MalformedTimestampHeaderDateTimeCommand extends $Command
  .classBuilder<
    MalformedTimestampHeaderDateTimeCommandInput,
    MalformedTimestampHeaderDateTimeCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedTimestampHeaderDateTime", {})
  .n("RestJsonProtocolClient", "MalformedTimestampHeaderDateTimeCommand")
  .f(void 0, void 0)
  .ser(se_MalformedTimestampHeaderDateTimeCommand)
  .de(de_MalformedTimestampHeaderDateTimeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampHeaderDateTimeInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampHeaderDateTimeCommandInput;
      output: MalformedTimestampHeaderDateTimeCommandOutput;
    };
  };
}
