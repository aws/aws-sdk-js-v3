// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedLongInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedLong } from "../schemas/schemas_51_With";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedLongCommand}.
 */
export interface MalformedLongCommandInput extends MalformedLongInput {}
/**
 * @public
 *
 * The output of {@link MalformedLongCommand}.
 */
export interface MalformedLongCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedLongCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedLongCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedLongInput
 *   longInBody: Number("long"),
 *   longInPath: Number("long"), // required
 *   longInQuery: Number("long"),
 *   longInHeader: Number("long"),
 * };
 * const command = new MalformedLongCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedLongCommandInput - {@link MalformedLongCommandInput}
 * @returns {@link MalformedLongCommandOutput}
 * @see {@link MalformedLongCommandInput} for command's `input` shape.
 * @see {@link MalformedLongCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedLongCommand extends $Command
  .classBuilder<
    MalformedLongCommandInput,
    MalformedLongCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedLong", {})
  .n("RestJsonProtocolClient", "MalformedLongCommand")
  .sc(MalformedLong)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedLongInput;
      output: {};
    };
    sdk: {
      input: MalformedLongCommandInput;
      output: MalformedLongCommandOutput;
    };
  };
}
