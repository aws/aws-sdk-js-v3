// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { SimpleScalarXmlPropertiesOutput } from "../models/models_0";
import { de_SimpleScalarXmlPropertiesCommand, se_SimpleScalarXmlPropertiesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SimpleScalarXmlPropertiesCommand}.
 */
export interface SimpleScalarXmlPropertiesCommandInput {}
/**
 * @public
 *
 * The output of {@link SimpleScalarXmlPropertiesCommand}.
 */
export interface SimpleScalarXmlPropertiesCommandOutput extends SimpleScalarXmlPropertiesOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, SimpleScalarXmlPropertiesCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, SimpleScalarXmlPropertiesCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const input = {};
 * const command = new SimpleScalarXmlPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // SimpleScalarXmlPropertiesOutput
 * //   stringValue: "STRING_VALUE",
 * //   emptyStringValue: "STRING_VALUE",
 * //   trueBooleanValue: true || false,
 * //   falseBooleanValue: true || false,
 * //   byteValue: 0, // BYTE_VALUE
 * //   shortValue: Number("short"),
 * //   integerValue: Number("int"),
 * //   longValue: Number("long"),
 * //   floatValue: Number("float"),
 * //   doubleValue: Number("double"),
 * // };
 *
 * ```
 *
 * @param SimpleScalarXmlPropertiesCommandInput - {@link SimpleScalarXmlPropertiesCommandInput}
 * @returns {@link SimpleScalarXmlPropertiesCommandOutput}
 * @see {@link SimpleScalarXmlPropertiesCommandInput} for command's `input` shape.
 * @see {@link SimpleScalarXmlPropertiesCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 */
export class SimpleScalarXmlPropertiesCommand extends $Command
  .classBuilder<
    SimpleScalarXmlPropertiesCommandInput,
    SimpleScalarXmlPropertiesCommandOutput,
    EC2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: EC2ProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("AwsEc2", "SimpleScalarXmlProperties", {})
  .n("EC2ProtocolClient", "SimpleScalarXmlPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_SimpleScalarXmlPropertiesCommand)
  .de(de_SimpleScalarXmlPropertiesCommand)
  .build() {}
