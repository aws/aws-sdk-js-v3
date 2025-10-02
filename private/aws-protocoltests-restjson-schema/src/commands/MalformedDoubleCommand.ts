// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedDoubleInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedDouble } from "../schemas/schemas_28_With";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedDoubleCommand}.
 */
export interface MalformedDoubleCommandInput extends MalformedDoubleInput {}
/**
 * @public
 *
 * The output of {@link MalformedDoubleCommand}.
 */
export interface MalformedDoubleCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedDoubleCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedDoubleCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedDoubleInput
 *   doubleInBody: Number("double"),
 *   doubleInPath: Number("double"), // required
 *   doubleInQuery: Number("double"),
 *   doubleInHeader: Number("double"),
 * };
 * const command = new MalformedDoubleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedDoubleCommandInput - {@link MalformedDoubleCommandInput}
 * @returns {@link MalformedDoubleCommandOutput}
 * @see {@link MalformedDoubleCommandInput} for command's `input` shape.
 * @see {@link MalformedDoubleCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedDoubleCommand extends $Command
  .classBuilder<
    MalformedDoubleCommandInput,
    MalformedDoubleCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedDouble", {})
  .n("RestJsonProtocolClient", "MalformedDoubleCommand")
  .sc(MalformedDouble)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedDoubleInput;
      output: {};
    };
    sdk: {
      input: MalformedDoubleCommandInput;
      output: MalformedDoubleCommandOutput;
    };
  };
}
