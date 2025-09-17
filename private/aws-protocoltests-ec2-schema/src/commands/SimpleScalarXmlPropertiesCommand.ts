// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SimpleScalarXmlPropertiesOutput } from "../models/models_0";
import { SimpleScalarXmlProperties } from "../schemas/schemas_2_Xml";

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
 * import { EC2ProtocolClient, SimpleScalarXmlPropertiesCommand } from "@aws-sdk/aws-protocoltests-ec2-schema"; // ES Modules import
 * // const { EC2ProtocolClient, SimpleScalarXmlPropertiesCommand } = require("@aws-sdk/aws-protocoltests-ec2-schema"); // CommonJS import
 * // import type { EC2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-ec2-schema";
 * const config = {}; // type is EC2ProtocolClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsEc2", "SimpleScalarXmlProperties", {})
  .n("EC2ProtocolClient", "SimpleScalarXmlPropertiesCommand")
  .sc(SimpleScalarXmlProperties)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: SimpleScalarXmlPropertiesOutput;
    };
    sdk: {
      input: SimpleScalarXmlPropertiesCommandInput;
      output: SimpleScalarXmlPropertiesCommandOutput;
    };
  };
}
