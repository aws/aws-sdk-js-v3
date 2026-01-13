// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { NoInputAndOutputOutput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { NoInputAndOutput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NoInputAndOutputCommand}.
 */
export interface NoInputAndOutputCommandInput {}
/**
 * @public
 *
 * The output of {@link NoInputAndOutputCommand}.
 */
export interface NoInputAndOutputCommandOutput extends NoInputAndOutputOutput, __MetadataBearer {}

/**
 * The example tests how requests and responses are serialized when there's
 * no request or response payload because the operation has no input and the
 * output is empty. While this should be rare, code generators must support
 * this.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, NoInputAndOutputCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, NoInputAndOutputCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new NoInputAndOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NoInputAndOutputCommandInput - {@link NoInputAndOutputCommandInput}
 * @returns {@link NoInputAndOutputCommandOutput}
 * @see {@link NoInputAndOutputCommandInput} for command's `input` shape.
 * @see {@link NoInputAndOutputCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class NoInputAndOutputCommand extends $Command
  .classBuilder<
    NoInputAndOutputCommandInput,
    NoInputAndOutputCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "NoInputAndOutput", {})
  .n("RestJsonProtocolClient", "NoInputAndOutputCommand")
  .sc(NoInputAndOutput$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: NoInputAndOutputCommandInput;
      output: NoInputAndOutputCommandOutput;
    };
  };
}
