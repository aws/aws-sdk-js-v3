// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { de_EndpointOperationCommand, se_EndpointOperationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EndpointOperationCommand}.
 */
export interface EndpointOperationCommandInput {}
/**
 * @public
 *
 * The output of {@link EndpointOperationCommand}.
 */
export interface EndpointOperationCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, EndpointOperationCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, EndpointOperationCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const input = {};
 * const command = new EndpointOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EndpointOperationCommandInput - {@link EndpointOperationCommandInput}
 * @returns {@link EndpointOperationCommandOutput}
 * @see {@link EndpointOperationCommandInput} for command's `input` shape.
 * @see {@link EndpointOperationCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 */
export class EndpointOperationCommand extends $Command
  .classBuilder<
    EndpointOperationCommandInput,
    EndpointOperationCommandOutput,
    EC2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: EC2ProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("AwsEc2", "EndpointOperation", {})
  .n("EC2ProtocolClient", "EndpointOperationCommand")
  .f(void 0, void 0)
  .ser(se_EndpointOperationCommand)
  .de(de_EndpointOperationCommand)
  .build() {}
