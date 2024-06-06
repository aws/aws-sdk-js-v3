// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedContentTypeWithPayloadInput } from "../models/models_0";
import {
  de_MalformedContentTypeWithPayloadCommand,
  se_MalformedContentTypeWithPayloadCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type MalformedContentTypeWithPayloadCommandInputType = Omit<MalformedContentTypeWithPayloadInput, "payload"> & {
  payload?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link MalformedContentTypeWithPayloadCommand}.
 */
export interface MalformedContentTypeWithPayloadCommandInput extends MalformedContentTypeWithPayloadCommandInputType {}
/**
 * @public
 *
 * The output of {@link MalformedContentTypeWithPayloadCommand}.
 */
export interface MalformedContentTypeWithPayloadCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedContentTypeWithPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedContentTypeWithPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedContentTypeWithPayloadInput
 *   payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new MalformedContentTypeWithPayloadCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedContentTypeWithPayloadCommandInput - {@link MalformedContentTypeWithPayloadCommandInput}
 * @returns {@link MalformedContentTypeWithPayloadCommandOutput}
 * @see {@link MalformedContentTypeWithPayloadCommandInput} for command's `input` shape.
 * @see {@link MalformedContentTypeWithPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class MalformedContentTypeWithPayloadCommand extends $Command
  .classBuilder<
    MalformedContentTypeWithPayloadCommandInput,
    MalformedContentTypeWithPayloadCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedContentTypeWithPayload", {})
  .n("RestJsonProtocolClient", "MalformedContentTypeWithPayloadCommand")
  .f(void 0, void 0)
  .ser(se_MalformedContentTypeWithPayloadCommand)
  .de(de_MalformedContentTypeWithPayloadCommand)
  .build() {}
