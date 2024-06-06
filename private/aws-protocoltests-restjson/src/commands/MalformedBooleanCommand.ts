// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedBooleanInput } from "../models/models_0";
import { de_MalformedBooleanCommand, se_MalformedBooleanCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, MalformedBooleanCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedBooleanCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
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
 */
export class MalformedBooleanCommand extends $Command
  .classBuilder<
    MalformedBooleanCommandInput,
    MalformedBooleanCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedBoolean", {})
  .n("RestJsonProtocolClient", "MalformedBooleanCommand")
  .f(void 0, void 0)
  .ser(se_MalformedBooleanCommand)
  .de(de_MalformedBooleanCommand)
  .build() {}
