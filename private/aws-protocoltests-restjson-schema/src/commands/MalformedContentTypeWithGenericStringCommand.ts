// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MalformedContentTypeWithGenericStringInput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { MalformedContentTypeWithGenericString$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedContentTypeWithGenericStringCommand}.
 */
export interface MalformedContentTypeWithGenericStringCommandInput extends MalformedContentTypeWithGenericStringInput {}
/**
 * @public
 *
 * The output of {@link MalformedContentTypeWithGenericStringCommand}.
 */
export interface MalformedContentTypeWithGenericStringCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedContentTypeWithGenericStringCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedContentTypeWithGenericStringCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedContentTypeWithGenericStringInput
 *   payload: "STRING_VALUE",
 * };
 * const command = new MalformedContentTypeWithGenericStringCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedContentTypeWithGenericStringCommandInput - {@link MalformedContentTypeWithGenericStringCommandInput}
 * @returns {@link MalformedContentTypeWithGenericStringCommandOutput}
 * @see {@link MalformedContentTypeWithGenericStringCommandInput} for command's `input` shape.
 * @see {@link MalformedContentTypeWithGenericStringCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedContentTypeWithGenericStringCommand extends $Command
  .classBuilder<
    MalformedContentTypeWithGenericStringCommandInput,
    MalformedContentTypeWithGenericStringCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedContentTypeWithGenericString", {})
  .n("RestJsonProtocolClient", "MalformedContentTypeWithGenericStringCommand")
  .sc(MalformedContentTypeWithGenericString$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedContentTypeWithGenericStringInput;
      output: {};
    };
    sdk: {
      input: MalformedContentTypeWithGenericStringCommandInput;
      output: MalformedContentTypeWithGenericStringCommandOutput;
    };
  };
}
