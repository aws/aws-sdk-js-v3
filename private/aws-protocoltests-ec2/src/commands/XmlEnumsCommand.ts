// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { XmlEnumsOutput } from "../models/models_0";
import { XmlEnums } from "../schemas/schemas_1_Xml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlEnumsCommand}.
 */
export interface XmlEnumsCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlEnumsCommand}.
 */
export interface XmlEnumsCommandOutput extends XmlEnumsOutput, __MetadataBearer {}

/**
 * This example serializes enums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, XmlEnumsCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, XmlEnumsCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * // import type { EC2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-ec2";
 * const config = {}; // type is EC2ProtocolClientConfig
 * const client = new EC2ProtocolClient(config);
 * const input = {};
 * const command = new XmlEnumsCommand(input);
 * const response = await client.send(command);
 * // { // XmlEnumsOutput
 * //   fooEnum1: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   fooEnum2: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   fooEnum3: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   fooEnumList: [ // FooEnumList
 * //     "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   ],
 * //   fooEnumSet: [ // FooEnumSet
 * //     "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   ],
 * //   fooEnumMap: { // FooEnumMap
 * //     "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlEnumsCommandInput - {@link XmlEnumsCommandInput}
 * @returns {@link XmlEnumsCommandOutput}
 * @see {@link XmlEnumsCommandInput} for command's `input` shape.
 * @see {@link XmlEnumsCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 *
 * @public
 */
export class XmlEnumsCommand extends $Command
  .classBuilder<
    XmlEnumsCommandInput,
    XmlEnumsCommandOutput,
    EC2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsEc2", "XmlEnums", {})
  .n("EC2ProtocolClient", "XmlEnumsCommand")
  .sc(XmlEnums)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: XmlEnumsOutput;
    };
    sdk: {
      input: XmlEnumsCommandInput;
      output: XmlEnumsCommandOutput;
    };
  };
}
