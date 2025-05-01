// smithy-typescript generated code
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedStringInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedString } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedStringCommand}.
 */
export interface MalformedStringCommandInput extends MalformedStringInput {}
/**
 * @public
 *
 * The output of {@link MalformedStringCommand}.
 */
export interface MalformedStringCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedStringCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedStringCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedStringInput
 *   blob: "STRING_VALUE",
 * };
 * const command = new MalformedStringCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedStringCommandInput - {@link MalformedStringCommandInput}
 * @returns {@link MalformedStringCommandOutput}
 * @see {@link MalformedStringCommandInput} for command's `input` shape.
 * @see {@link MalformedStringCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedStringCommand extends $Command
  .classBuilder<
    MalformedStringCommandInput,
    MalformedStringCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [];
  })
  .s("RestJson", "MalformedString", {})
  .n("RestJsonProtocolClient", "MalformedStringCommand")
  .f(void 0, void 0)
  .sc(MalformedString)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedStringInput;
      output: {};
    };
    sdk: {
      input: MalformedStringCommandInput;
      output: MalformedStringCommandOutput;
    };
  };
}
