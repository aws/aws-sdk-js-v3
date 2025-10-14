// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedIntegerInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedInteger } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedIntegerCommand}.
 */
export interface MalformedIntegerCommandInput extends MalformedIntegerInput {}
/**
 * @public
 *
 * The output of {@link MalformedIntegerCommand}.
 */
export interface MalformedIntegerCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedIntegerCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedIntegerCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedIntegerInput
 *   integerInBody: Number("int"),
 *   integerInPath: Number("int"), // required
 *   integerInQuery: Number("int"),
 *   integerInHeader: Number("int"),
 * };
 * const command = new MalformedIntegerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedIntegerCommandInput - {@link MalformedIntegerCommandInput}
 * @returns {@link MalformedIntegerCommandOutput}
 * @see {@link MalformedIntegerCommandInput} for command's `input` shape.
 * @see {@link MalformedIntegerCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedIntegerCommand extends $Command
  .classBuilder<
    MalformedIntegerCommandInput,
    MalformedIntegerCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedInteger", {})
  .n("RestJsonProtocolClient", "MalformedIntegerCommand")
  .sc(MalformedInteger)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedIntegerInput;
      output: {};
    };
    sdk: {
      input: MalformedIntegerCommandInput;
      output: MalformedIntegerCommandOutput;
    };
  };
}
