// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { XmlTimestampsOutput } from "../models/models_0";
import { de_XmlTimestampsCommand, se_XmlTimestampsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlTimestampsCommand}.
 */
export interface XmlTimestampsCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlTimestampsCommand}.
 */
export interface XmlTimestampsCommandOutput extends XmlTimestampsOutput, __MetadataBearer {}

/**
 * This tests how timestamps are serialized, including using the
 * default format of date-time and various @timestampFormat trait
 * values.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, XmlTimestampsCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, XmlTimestampsCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * // import type { EC2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-ec2";
 * const config = {}; // type is EC2ProtocolClientConfig
 * const client = new EC2ProtocolClient(config);
 * const input = {};
 * const command = new XmlTimestampsCommand(input);
 * const response = await client.send(command);
 * // { // XmlTimestampsOutput
 * //   normal: new Date("TIMESTAMP"),
 * //   dateTime: new Date("TIMESTAMP"),
 * //   dateTimeOnTarget: new Date("TIMESTAMP"),
 * //   epochSeconds: new Date("TIMESTAMP"),
 * //   epochSecondsOnTarget: new Date("TIMESTAMP"),
 * //   httpDate: new Date("TIMESTAMP"),
 * //   httpDateOnTarget: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param XmlTimestampsCommandInput - {@link XmlTimestampsCommandInput}
 * @returns {@link XmlTimestampsCommandOutput}
 * @see {@link XmlTimestampsCommandInput} for command's `input` shape.
 * @see {@link XmlTimestampsCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 *
 * @public
 */
export class XmlTimestampsCommand extends $Command
  .classBuilder<
    XmlTimestampsCommandInput,
    XmlTimestampsCommandOutput,
    EC2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsEc2", "XmlTimestamps", {})
  .n("EC2ProtocolClient", "XmlTimestampsCommand")
  .f(void 0, void 0)
  .ser(se_XmlTimestampsCommand)
  .de(de_XmlTimestampsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: XmlTimestampsOutput;
    };
    sdk: {
      input: XmlTimestampsCommandInput;
      output: XmlTimestampsCommandOutput;
    };
  };
}
