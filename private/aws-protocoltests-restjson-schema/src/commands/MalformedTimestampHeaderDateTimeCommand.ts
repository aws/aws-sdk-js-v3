// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MalformedTimestampHeaderDateTimeInput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { MalformedTimestampHeaderDateTime } from "../schemas/schemas_0";

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
 * import { RestJsonProtocolClient, MalformedTimestampHeaderDateTimeCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampHeaderDateTimeCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedTimestampHeaderDateTime", {})
  .n("RestJsonProtocolClient", "MalformedTimestampHeaderDateTimeCommand")
  .sc(MalformedTimestampHeaderDateTime)
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
