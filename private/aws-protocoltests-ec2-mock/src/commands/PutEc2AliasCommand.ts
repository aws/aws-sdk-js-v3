// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { Ec2MockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Ec2MockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutEc2AliasRequest } from "../models/models_0";
import { PutEc2Alias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEc2AliasCommand}.
 */
export interface PutEc2AliasCommandInput extends PutEc2AliasRequest {}
/**
 * @public
 *
 * The output of {@link PutEc2AliasCommand}.
 */
export interface PutEc2AliasCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Ec2MockClient, PutEc2AliasCommand } from "@aws-sdk/aws-protocoltests-ec2-mock"; // ES Modules import
 * // const { Ec2MockClient, PutEc2AliasCommand } = require("@aws-sdk/aws-protocoltests-ec2-mock"); // CommonJS import
 * // import type { Ec2MockClientConfig } from "@aws-sdk/aws-protocoltests-ec2-mock";
 * const config = {}; // type is Ec2MockClientConfig
 * const client = new Ec2MockClient(config);
 * const input = { // PutEc2AliasRequest
 *   alias: { // Ec2Alias
 *     ec2MemberNameWithAliases: "STRING_VALUE",
 *     ec2MemberNameWithOnlyXmlAlias: "STRING_VALUE",
 *     ec2MemberNameWithOnlyEc2Alias: "STRING_VALUE",
 *     ec2MemberNameWithNoAlias: "STRING_VALUE",
 *   },
 * };
 * const command = new PutEc2AliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutEc2AliasCommandInput - {@link PutEc2AliasCommandInput}
 * @returns {@link PutEc2AliasCommandOutput}
 * @see {@link PutEc2AliasCommandInput} for command's `input` shape.
 * @see {@link PutEc2AliasCommandOutput} for command's `response` shape.
 * @see {@link Ec2MockClientResolvedConfig | config} for Ec2MockClient's `config` shape.
 *
 * @throws {@link Ec2MockServiceException}
 * <p>Base exception class for all service exceptions from Ec2Mock service.</p>
 *
 *
 */
export class PutEc2AliasCommand extends $Command
  .classBuilder<
    PutEc2AliasCommandInput,
    PutEc2AliasCommandOutput,
    Ec2MockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Ec2MockClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ec2Mock", "PutEc2Alias", {})
  .n("Ec2MockClient", "PutEc2AliasCommand")
  .sc(PutEc2Alias$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEc2AliasRequest;
      output: {};
    };
    sdk: {
      input: PutEc2AliasCommandInput;
      output: PutEc2AliasCommandOutput;
    };
  };
}
