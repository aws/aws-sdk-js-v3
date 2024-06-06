// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedContentTypeWithGenericStringInput } from "../models/models_0";
import {
  de_MalformedContentTypeWithGenericStringCommand,
  se_MalformedContentTypeWithGenericStringCommand,
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
 * import { RestJsonProtocolClient, MalformedContentTypeWithGenericStringCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedContentTypeWithGenericStringCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
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
 */
export class MalformedContentTypeWithGenericStringCommand extends $Command
  .classBuilder<
    MalformedContentTypeWithGenericStringCommandInput,
    MalformedContentTypeWithGenericStringCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedContentTypeWithGenericString", {})
  .n("RestJsonProtocolClient", "MalformedContentTypeWithGenericStringCommand")
  .f(void 0, void 0)
  .ser(se_MalformedContentTypeWithGenericStringCommand)
  .de(de_MalformedContentTypeWithGenericStringCommand)
  .build() {}
