// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  de_MalformedContentTypeWithoutBodyCommand,
  se_MalformedContentTypeWithoutBodyCommand,
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
 * import { RestJsonProtocolClient, MalformedContentTypeWithoutBodyCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedContentTypeWithoutBodyCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
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
 */
export class MalformedContentTypeWithoutBodyCommand extends $Command
  .classBuilder<
    MalformedContentTypeWithoutBodyCommandInput,
    MalformedContentTypeWithoutBodyCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedContentTypeWithoutBody", {})
  .n("RestJsonProtocolClient", "MalformedContentTypeWithoutBodyCommand")
  .f(void 0, void 0)
  .ser(se_MalformedContentTypeWithoutBodyCommand)
  .de(de_MalformedContentTypeWithoutBodyCommand)
  .build() {}
