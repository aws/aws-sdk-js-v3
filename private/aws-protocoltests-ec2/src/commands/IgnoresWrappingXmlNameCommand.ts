// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { IgnoresWrappingXmlNameOutput } from "../models/models_0";
import { de_IgnoresWrappingXmlNameCommand, se_IgnoresWrappingXmlNameCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link IgnoresWrappingXmlNameCommand}.
 */
export interface IgnoresWrappingXmlNameCommandInput {}
/**
 * @public
 *
 * The output of {@link IgnoresWrappingXmlNameCommand}.
 */
export interface IgnoresWrappingXmlNameCommandOutput extends IgnoresWrappingXmlNameOutput, __MetadataBearer {}

/**
 * The xmlName trait on the output structure is ignored in AWS Query.
 *
 * The wrapping element is always operation name + "Response".
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, IgnoresWrappingXmlNameCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, IgnoresWrappingXmlNameCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * // import type { EC2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-ec2";
 * const config = {}; // type is EC2ProtocolClientConfig
 * const client = new EC2ProtocolClient(config);
 * const input = {};
 * const command = new IgnoresWrappingXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // IgnoresWrappingXmlNameOutput
 * //   foo: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param IgnoresWrappingXmlNameCommandInput - {@link IgnoresWrappingXmlNameCommandInput}
 * @returns {@link IgnoresWrappingXmlNameCommandOutput}
 * @see {@link IgnoresWrappingXmlNameCommandInput} for command's `input` shape.
 * @see {@link IgnoresWrappingXmlNameCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 *
 * @public
 */
export class IgnoresWrappingXmlNameCommand extends $Command
  .classBuilder<
    IgnoresWrappingXmlNameCommandInput,
    IgnoresWrappingXmlNameCommandOutput,
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
  .s("AwsEc2", "IgnoresWrappingXmlName", {})
  .n("EC2ProtocolClient", "IgnoresWrappingXmlNameCommand")
  .f(void 0, void 0)
  .ser(se_IgnoresWrappingXmlNameCommand)
  .de(de_IgnoresWrappingXmlNameCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: IgnoresWrappingXmlNameOutput;
    };
    sdk: {
      input: IgnoresWrappingXmlNameCommandInput;
      output: IgnoresWrappingXmlNameCommandOutput;
    };
  };
}
