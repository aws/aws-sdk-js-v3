// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PostPlayerActionInput, PostPlayerActionOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { PostPlayerAction } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PostPlayerActionCommand}.
 */
export interface PostPlayerActionCommandInput extends PostPlayerActionInput {}
/**
 * @public
 *
 * The output of {@link PostPlayerActionCommand}.
 */
export interface PostPlayerActionCommandOutput extends PostPlayerActionOutput, __MetadataBearer {}

/**
 * This operation defines a union with a Unit member.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, PostPlayerActionCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, PostPlayerActionCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // PostPlayerActionInput
 *   action: { // PlayerAction Union: only one key present
 *     quit: {},
 *   },
 * };
 * const command = new PostPlayerActionCommand(input);
 * const response = await client.send(command);
 * // { // PostPlayerActionOutput
 * //   action: { // PlayerAction Union: only one key present
 * //     quit: {},
 * //   },
 * // };
 *
 * ```
 *
 * @param PostPlayerActionCommandInput - {@link PostPlayerActionCommandInput}
 * @returns {@link PostPlayerActionCommandOutput}
 * @see {@link PostPlayerActionCommandInput} for command's `input` shape.
 * @see {@link PostPlayerActionCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class PostPlayerActionCommand extends $Command
  .classBuilder<
    PostPlayerActionCommandInput,
    PostPlayerActionCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "PostPlayerAction", {})
  .n("RestJsonProtocolClient", "PostPlayerActionCommand")
  .sc(PostPlayerAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PostPlayerActionInput;
      output: PostPlayerActionOutput;
    };
    sdk: {
      input: PostPlayerActionCommandInput;
      output: PostPlayerActionCommandOutput;
    };
  };
}
