// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreetingStruct } from "../models/models_0";
import { de_MalformedAcceptWithBodyCommand, se_MalformedAcceptWithBodyCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedAcceptWithBodyCommand}.
 */
export interface MalformedAcceptWithBodyCommandInput {}
/**
 * @public
 *
 * The output of {@link MalformedAcceptWithBodyCommand}.
 */
export interface MalformedAcceptWithBodyCommandOutput extends GreetingStruct, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedAcceptWithBodyCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedAcceptWithBodyCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new MalformedAcceptWithBodyCommand(input);
 * const response = await client.send(command);
 * // { // GreetingStruct
 * //   hi: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MalformedAcceptWithBodyCommandInput - {@link MalformedAcceptWithBodyCommandInput}
 * @returns {@link MalformedAcceptWithBodyCommandOutput}
 * @see {@link MalformedAcceptWithBodyCommandInput} for command's `input` shape.
 * @see {@link MalformedAcceptWithBodyCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedAcceptWithBodyCommand extends $Command
  .classBuilder<
    MalformedAcceptWithBodyCommandInput,
    MalformedAcceptWithBodyCommandOutput,
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
  .s("RestJson", "MalformedAcceptWithBody", {})
  .n("RestJsonProtocolClient", "MalformedAcceptWithBodyCommand")
  .f(void 0, void 0)
  .ser(se_MalformedAcceptWithBodyCommand)
  .de(de_MalformedAcceptWithBodyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GreetingStruct;
    };
    sdk: {
      input: MalformedAcceptWithBodyCommandInput;
      output: MalformedAcceptWithBodyCommandOutput;
    };
  };
}
