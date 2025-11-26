// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { NestedStructuresInput } from "../models/models_0";
import { de_NestedStructuresCommand, se_NestedStructuresCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NestedStructuresCommand}.
 */
export interface NestedStructuresCommandInput extends NestedStructuresInput {}
/**
 * @public
 *
 * The output of {@link NestedStructuresCommand}.
 */
export interface NestedStructuresCommandOutput extends __MetadataBearer {}

/**
 * This test serializes nested and recursive structure members.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, NestedStructuresCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, NestedStructuresCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * // import type { EC2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-ec2";
 * const config = {}; // type is EC2ProtocolClientConfig
 * const client = new EC2ProtocolClient(config);
 * const input = { // NestedStructuresInput
 *   Nested: { // StructArg
 *     StringArg: "STRING_VALUE",
 *     OtherArg: true || false,
 *     RecursiveArg: {
 *       StringArg: "STRING_VALUE",
 *       OtherArg: true || false,
 *       RecursiveArg: "<StructArg>",
 *     },
 *   },
 * };
 * const command = new NestedStructuresCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NestedStructuresCommandInput - {@link NestedStructuresCommandInput}
 * @returns {@link NestedStructuresCommandOutput}
 * @see {@link NestedStructuresCommandInput} for command's `input` shape.
 * @see {@link NestedStructuresCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 *
 * @public
 */
export class NestedStructuresCommand extends $Command
  .classBuilder<
    NestedStructuresCommandInput,
    NestedStructuresCommandOutput,
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
  .s("AwsEc2", "NestedStructures", {})
  .n("EC2ProtocolClient", "NestedStructuresCommand")
  .f(void 0, void 0)
  .ser(se_NestedStructuresCommand)
  .de(de_NestedStructuresCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NestedStructuresInput;
      output: {};
    };
    sdk: {
      input: NestedStructuresCommandInput;
      output: NestedStructuresCommandOutput;
    };
  };
}
