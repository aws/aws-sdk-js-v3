// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DatetimeOffsetsOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { DatetimeOffsets } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DatetimeOffsetsCommand}.
 */
export interface DatetimeOffsetsCommandInput {}
/**
 * @public
 *
 * The output of {@link DatetimeOffsetsCommand}.
 */
export interface DatetimeOffsetsCommandOutput extends DatetimeOffsetsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, DatetimeOffsetsCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, DatetimeOffsetsCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new DatetimeOffsetsCommand(input);
 * const response = await client.send(command);
 * // { // DatetimeOffsetsOutput
 * //   datetime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DatetimeOffsetsCommandInput - {@link DatetimeOffsetsCommandInput}
 * @returns {@link DatetimeOffsetsCommandOutput}
 * @see {@link DatetimeOffsetsCommandInput} for command's `input` shape.
 * @see {@link DatetimeOffsetsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class DatetimeOffsetsCommand extends $Command
  .classBuilder<
    DatetimeOffsetsCommandInput,
    DatetimeOffsetsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "DatetimeOffsets", {})
  .n("RestJsonProtocolClient", "DatetimeOffsetsCommand")
  .f(void 0, void 0)
  .sc(DatetimeOffsets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DatetimeOffsetsOutput;
    };
    sdk: {
      input: DatetimeOffsetsCommandInput;
      output: DatetimeOffsetsCommandOutput;
    };
  };
}
