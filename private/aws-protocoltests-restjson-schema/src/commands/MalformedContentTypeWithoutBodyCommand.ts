// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { MalformedContentTypeWithoutBody } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedContentTypeWithoutBodyCommand}.
 */
export interface MalformedContentTypeWithoutBodyCommandInput {}
/**
 * @public
 *
 * The output of {@link MalformedContentTypeWithoutBodyCommand}.
 */
export interface MalformedContentTypeWithoutBodyCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedContentTypeWithoutBodyCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedContentTypeWithoutBodyCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new MalformedContentTypeWithoutBodyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedContentTypeWithoutBodyCommandInput - {@link MalformedContentTypeWithoutBodyCommandInput}
 * @returns {@link MalformedContentTypeWithoutBodyCommandOutput}
 * @see {@link MalformedContentTypeWithoutBodyCommandInput} for command's `input` shape.
 * @see {@link MalformedContentTypeWithoutBodyCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedContentTypeWithoutBodyCommand extends $Command
  .classBuilder<
    MalformedContentTypeWithoutBodyCommandInput,
    MalformedContentTypeWithoutBodyCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedContentTypeWithoutBody", {})
  .n("RestJsonProtocolClient", "MalformedContentTypeWithoutBodyCommand")
  .sc(MalformedContentTypeWithoutBody)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: MalformedContentTypeWithoutBodyCommandInput;
      output: MalformedContentTypeWithoutBodyCommandOutput;
    };
  };
}
