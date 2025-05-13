// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DatetimeOffsetsOutput } from "../models/models_0";
import { de_DatetimeOffsetsCommand, se_DatetimeOffsetsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

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
 * import { QueryProtocolClient, DatetimeOffsetsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, DatetimeOffsetsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
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
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 */
export class DatetimeOffsetsCommand extends $Command
  .classBuilder<
    DatetimeOffsetsCommandInput,
    DatetimeOffsetsCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsQuery", "DatetimeOffsets", {})
  .n("QueryProtocolClient", "DatetimeOffsetsCommand")
  .f(void 0, void 0)
  .ser(se_DatetimeOffsetsCommand)
  .de(de_DatetimeOffsetsCommand)
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
