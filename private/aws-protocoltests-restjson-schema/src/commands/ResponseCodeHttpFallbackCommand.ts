// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ResponseCodeHttpFallbackInputOutput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { ResponseCodeHttpFallback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResponseCodeHttpFallbackCommand}.
 */
export interface ResponseCodeHttpFallbackCommandInput extends ResponseCodeHttpFallbackInputOutput {}
/**
 * @public
 *
 * The output of {@link ResponseCodeHttpFallbackCommand}.
 */
export interface ResponseCodeHttpFallbackCommandOutput extends ResponseCodeHttpFallbackInputOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, ResponseCodeHttpFallbackCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, ResponseCodeHttpFallbackCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new ResponseCodeHttpFallbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResponseCodeHttpFallbackCommandInput - {@link ResponseCodeHttpFallbackCommandInput}
 * @returns {@link ResponseCodeHttpFallbackCommandOutput}
 * @see {@link ResponseCodeHttpFallbackCommandInput} for command's `input` shape.
 * @see {@link ResponseCodeHttpFallbackCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class ResponseCodeHttpFallbackCommand extends $Command
  .classBuilder<
    ResponseCodeHttpFallbackCommandInput,
    ResponseCodeHttpFallbackCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "ResponseCodeHttpFallback", {})
  .n("RestJsonProtocolClient", "ResponseCodeHttpFallbackCommand")
  .sc(ResponseCodeHttpFallback$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: ResponseCodeHttpFallbackCommandInput;
      output: ResponseCodeHttpFallbackCommandOutput;
    };
  };
}
