// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { GreetingStruct } from "../models/models_0";
import {
  de_MalformedContentTypeWithBodyCommand,
  se_MalformedContentTypeWithBodyCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, MalformedContentTypeWithBodyCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedContentTypeWithBodyCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
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
 */
export class MalformedContentTypeWithBodyCommand extends $Command
  .classBuilder<
    MalformedContentTypeWithBodyCommandInput,
    MalformedContentTypeWithBodyCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedContentTypeWithBody", {})
  .n("RestJsonProtocolClient", "MalformedContentTypeWithBodyCommand")
  .f(void 0, void 0)
  .ser(se_MalformedContentTypeWithBodyCommand)
  .de(de_MalformedContentTypeWithBodyCommand)
  .build() {}
