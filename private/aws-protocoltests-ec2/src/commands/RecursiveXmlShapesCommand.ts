// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RecursiveXmlShapesOutput } from "../models/models_0";
import { de_RecursiveXmlShapesCommand, se_RecursiveXmlShapesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RecursiveXmlShapesCommand}.
 */
export interface RecursiveXmlShapesCommandInput {}
/**
 * @public
 *
 * The output of {@link RecursiveXmlShapesCommand}.
 */
export interface RecursiveXmlShapesCommandOutput extends RecursiveXmlShapesOutput, __MetadataBearer {}

/**
 * Recursive shapes
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, RecursiveXmlShapesCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, RecursiveXmlShapesCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * // import type { EC2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-ec2";
 * const config = {}; // type is EC2ProtocolClientConfig
 * const client = new EC2ProtocolClient(config);
 * const input = {};
 * const command = new RecursiveXmlShapesCommand(input);
 * const response = await client.send(command);
 * // { // RecursiveXmlShapesOutput
 * //   nested: { // RecursiveXmlShapesOutputNested1
 * //     foo: "STRING_VALUE",
 * //     nested: { // RecursiveXmlShapesOutputNested2
 * //       bar: "STRING_VALUE",
 * //       recursiveMember: {
 * //         foo: "STRING_VALUE",
 * //         nested: {
 * //           bar: "STRING_VALUE",
 * //           recursiveMember: "<RecursiveXmlShapesOutputNested1>",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RecursiveXmlShapesCommandInput - {@link RecursiveXmlShapesCommandInput}
 * @returns {@link RecursiveXmlShapesCommandOutput}
 * @see {@link RecursiveXmlShapesCommandInput} for command's `input` shape.
 * @see {@link RecursiveXmlShapesCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 *
 * @public
 */
export class RecursiveXmlShapesCommand extends $Command
  .classBuilder<
    RecursiveXmlShapesCommandInput,
    RecursiveXmlShapesCommandOutput,
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
  .s("AwsEc2", "RecursiveXmlShapes", {})
  .n("EC2ProtocolClient", "RecursiveXmlShapesCommand")
  .f(void 0, void 0)
  .ser(se_RecursiveXmlShapesCommand)
  .de(de_RecursiveXmlShapesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: RecursiveXmlShapesOutput;
    };
    sdk: {
      input: RecursiveXmlShapesCommandInput;
      output: RecursiveXmlShapesCommandOutput;
    };
  };
}
