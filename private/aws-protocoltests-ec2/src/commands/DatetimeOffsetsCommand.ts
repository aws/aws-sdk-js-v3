// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { DatetimeOffsetsOutput } from "../models/models_0";
import { de_DatetimeOffsetsCommand, se_DatetimeOffsetsCommand } from "../protocols/Aws_ec2";

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
 * import { EC2ProtocolClient, DatetimeOffsetsCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, DatetimeOffsetsCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
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
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 */
export class DatetimeOffsetsCommand extends $Command
  .classBuilder<
    DatetimeOffsetsCommandInput,
    DatetimeOffsetsCommandOutput,
    EC2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: EC2ProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("AwsEc2", "DatetimeOffsets", {})
  .n("EC2ProtocolClient", "DatetimeOffsetsCommand")
  .f(void 0, void 0)
  .ser(se_DatetimeOffsetsCommand)
  .de(de_DatetimeOffsetsCommand)
  .build() {}
