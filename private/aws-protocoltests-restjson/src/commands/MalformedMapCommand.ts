// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedMapInput } from "../models/models_0";
import { de_MalformedMapCommand, se_MalformedMapCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedMapCommand}.
 */
export interface MalformedMapCommandInput extends MalformedMapInput {}
/**
 * @public
 *
 * The output of {@link MalformedMapCommand}.
 */
export interface MalformedMapCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedMapCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedMapCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedMapInput
 *   bodyMap: { // SimpleMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new MalformedMapCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedMapCommandInput - {@link MalformedMapCommandInput}
 * @returns {@link MalformedMapCommandOutput}
 * @see {@link MalformedMapCommandInput} for command's `input` shape.
 * @see {@link MalformedMapCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedMapCommand extends $Command
  .classBuilder<
    MalformedMapCommandInput,
    MalformedMapCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestJson", "MalformedMap", {})
  .n("RestJsonProtocolClient", "MalformedMapCommand")
  .f(void 0, void 0)
  .ser(se_MalformedMapCommand)
  .de(de_MalformedMapCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedMapInput;
      output: {};
    };
    sdk: {
      input: MalformedMapCommandInput;
      output: MalformedMapCommandOutput;
    };
  };
}
