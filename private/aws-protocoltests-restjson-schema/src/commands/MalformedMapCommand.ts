// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedMapInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedMap } from "../schemas/schemas_38_MalformedMap";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedMapCommand}.
 */
export interface MalformedMapCommandInput extends MalformedMapInput {}
/**
 * @public
 *
 * The output of {@link MalformedMapCommand}.
 */
export interface MalformedMapCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedMapCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedMapCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedMapInput
 *   bodyMap: { // SimpleMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new MalformedMapCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedMapCommandInput - {@link MalformedMapCommandInput}
 * @returns {@link MalformedMapCommandOutput}
 * @see {@link MalformedMapCommandInput} for command's `input` shape.
 * @see {@link MalformedMapCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedMapCommand extends $Command
  .classBuilder<
    MalformedMapCommandInput,
    MalformedMapCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedMap", {})
  .n("RestJsonProtocolClient", "MalformedMapCommand")
  .sc(MalformedMap)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedMapInput;
      output: {};
    };
    sdk: {
      input: MalformedMapCommandInput;
      output: MalformedMapCommandOutput;
    };
  };
}
