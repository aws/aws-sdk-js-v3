// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedFloatInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedFloat } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedFloatCommand}.
 */
export interface MalformedFloatCommandInput extends MalformedFloatInput {}
/**
 * @public
 *
 * The output of {@link MalformedFloatCommand}.
 */
export interface MalformedFloatCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedFloatCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedFloatCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedFloatInput
 *   floatInBody: Number("float"),
 *   floatInPath: Number("float"), // required
 *   floatInQuery: Number("float"),
 *   floatInHeader: Number("float"),
 * };
 * const command = new MalformedFloatCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedFloatCommandInput - {@link MalformedFloatCommandInput}
 * @returns {@link MalformedFloatCommandOutput}
 * @see {@link MalformedFloatCommandInput} for command's `input` shape.
 * @see {@link MalformedFloatCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedFloatCommand extends $Command
  .classBuilder<
    MalformedFloatCommandInput,
    MalformedFloatCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedFloat", {})
  .n("RestJsonProtocolClient", "MalformedFloatCommand")
  .sc(MalformedFloat)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedFloatInput;
      output: {};
    };
    sdk: {
      input: MalformedFloatCommandInput;
      output: MalformedFloatCommandOutput;
    };
  };
}
