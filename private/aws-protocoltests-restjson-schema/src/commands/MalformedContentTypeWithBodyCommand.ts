// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreetingStruct } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedContentTypeWithBody } from "../schemas/schemas_32_Json";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedContentTypeWithBodyCommand}.
 */
export interface MalformedContentTypeWithBodyCommandInput extends GreetingStruct {}
/**
 * @public
 *
 * The output of {@link MalformedContentTypeWithBodyCommand}.
 */
export interface MalformedContentTypeWithBodyCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedContentTypeWithBodyCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedContentTypeWithBodyCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // GreetingStruct
 *   hi: "STRING_VALUE",
 * };
 * const command = new MalformedContentTypeWithBodyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedContentTypeWithBodyCommandInput - {@link MalformedContentTypeWithBodyCommandInput}
 * @returns {@link MalformedContentTypeWithBodyCommandOutput}
 * @see {@link MalformedContentTypeWithBodyCommandInput} for command's `input` shape.
 * @see {@link MalformedContentTypeWithBodyCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedContentTypeWithBodyCommand extends $Command
  .classBuilder<
    MalformedContentTypeWithBodyCommandInput,
    MalformedContentTypeWithBodyCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedContentTypeWithBody", {})
  .n("RestJsonProtocolClient", "MalformedContentTypeWithBodyCommand")
  .sc(MalformedContentTypeWithBody)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GreetingStruct;
      output: {};
    };
    sdk: {
      input: MalformedContentTypeWithBodyCommandInput;
      output: MalformedContentTypeWithBodyCommandOutput;
    };
  };
}
