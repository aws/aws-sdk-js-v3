// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MalformedFloatInput } from "../models/models_0";
import { de_MalformedFloatCommand, se_MalformedFloatCommand } from "../protocols/Aws_restJson1";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, MalformedFloatCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedFloatCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestJson", "MalformedFloat", {})
  .n("RestJsonProtocolClient", "MalformedFloatCommand")
  .f(void 0, void 0)
  .ser(se_MalformedFloatCommand)
  .de(de_MalformedFloatCommand)
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
