// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedRequestBodyInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedRequestBody } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedRequestBodyCommand}.
 */
export interface MalformedRequestBodyCommandInput extends MalformedRequestBodyInput {}
/**
 * @public
 *
 * The output of {@link MalformedRequestBodyCommand}.
 */
export interface MalformedRequestBodyCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedRequestBodyCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedRequestBodyCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedRequestBodyInput
 *   int: Number("int"),
 *   float: Number("float"),
 * };
 * const command = new MalformedRequestBodyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedRequestBodyCommandInput - {@link MalformedRequestBodyCommandInput}
 * @returns {@link MalformedRequestBodyCommandOutput}
 * @see {@link MalformedRequestBodyCommandInput} for command's `input` shape.
 * @see {@link MalformedRequestBodyCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedRequestBodyCommand extends $Command
  .classBuilder<
    MalformedRequestBodyCommandInput,
    MalformedRequestBodyCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedRequestBody", {})
  .n("RestJsonProtocolClient", "MalformedRequestBodyCommand")
  .sc(MalformedRequestBody)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedRequestBodyInput;
      output: {};
    };
    sdk: {
      input: MalformedRequestBodyCommandInput;
      output: MalformedRequestBodyCommandOutput;
    };
  };
}
