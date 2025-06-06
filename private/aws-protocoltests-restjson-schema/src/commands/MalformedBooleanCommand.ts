// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedBooleanInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedBoolean } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedBooleanCommand}.
 */
export interface MalformedBooleanCommandInput extends MalformedBooleanInput {}
/**
 * @public
 *
 * The output of {@link MalformedBooleanCommand}.
 */
export interface MalformedBooleanCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedBooleanCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedBooleanCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedBooleanInput
 *   booleanInBody: true || false,
 *   booleanInPath: true || false, // required
 *   booleanInQuery: true || false,
 *   booleanInHeader: true || false,
 * };
 * const command = new MalformedBooleanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedBooleanCommandInput - {@link MalformedBooleanCommandInput}
 * @returns {@link MalformedBooleanCommandOutput}
 * @see {@link MalformedBooleanCommandInput} for command's `input` shape.
 * @see {@link MalformedBooleanCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedBooleanCommand extends $Command
  .classBuilder<
    MalformedBooleanCommandInput,
    MalformedBooleanCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedBoolean", {})
  .n("RestJsonProtocolClient", "MalformedBooleanCommand")
  .f(void 0, void 0)
  .sc(MalformedBoolean)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedBooleanInput;
      output: {};
    };
    sdk: {
      input: MalformedBooleanCommandInput;
      output: MalformedBooleanCommandOutput;
    };
  };
}
