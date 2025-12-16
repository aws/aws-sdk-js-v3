// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MalformedAcceptWithGenericStringOutput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { MalformedAcceptWithGenericString$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedAcceptWithGenericStringCommand}.
 */
export interface MalformedAcceptWithGenericStringCommandInput {}
/**
 * @public
 *
 * The output of {@link MalformedAcceptWithGenericStringCommand}.
 */
export interface MalformedAcceptWithGenericStringCommandOutput
  extends MalformedAcceptWithGenericStringOutput,
    __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedAcceptWithGenericStringCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedAcceptWithGenericStringCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new MalformedAcceptWithGenericStringCommand(input);
 * const response = await client.send(command);
 * // { // MalformedAcceptWithGenericStringOutput
 * //   payload: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MalformedAcceptWithGenericStringCommandInput - {@link MalformedAcceptWithGenericStringCommandInput}
 * @returns {@link MalformedAcceptWithGenericStringCommandOutput}
 * @see {@link MalformedAcceptWithGenericStringCommandInput} for command's `input` shape.
 * @see {@link MalformedAcceptWithGenericStringCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedAcceptWithGenericStringCommand extends $Command
  .classBuilder<
    MalformedAcceptWithGenericStringCommandInput,
    MalformedAcceptWithGenericStringCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedAcceptWithGenericString", {})
  .n("RestJsonProtocolClient", "MalformedAcceptWithGenericStringCommand")
  .sc(MalformedAcceptWithGenericString$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: MalformedAcceptWithGenericStringOutput;
    };
    sdk: {
      input: MalformedAcceptWithGenericStringCommandInput;
      output: MalformedAcceptWithGenericStringCommandOutput;
    };
  };
}
