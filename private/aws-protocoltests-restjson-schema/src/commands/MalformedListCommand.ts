// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedListInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedList } from "../schemas/schemas_47_MalformedList";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedListCommand}.
 */
export interface MalformedListCommandInput extends MalformedListInput {}
/**
 * @public
 *
 * The output of {@link MalformedListCommand}.
 */
export interface MalformedListCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedListCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedListCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedListInput
 *   bodyList: [ // SimpleList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new MalformedListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedListCommandInput - {@link MalformedListCommandInput}
 * @returns {@link MalformedListCommandOutput}
 * @see {@link MalformedListCommandInput} for command's `input` shape.
 * @see {@link MalformedListCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedListCommand extends $Command
  .classBuilder<
    MalformedListCommandInput,
    MalformedListCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedList", {})
  .n("RestJsonProtocolClient", "MalformedListCommand")
  .sc(MalformedList)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedListInput;
      output: {};
    };
    sdk: {
      input: MalformedListCommandInput;
      output: MalformedListCommandOutput;
    };
  };
}
