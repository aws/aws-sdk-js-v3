// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MediaTypeHeaderInput, MediaTypeHeaderOutput } from "../models/models_0";
import { de_MediaTypeHeaderCommand, se_MediaTypeHeaderCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MediaTypeHeaderCommand}.
 */
export interface MediaTypeHeaderCommandInput extends MediaTypeHeaderInput {}
/**
 * @public
 *
 * The output of {@link MediaTypeHeaderCommand}.
 */
export interface MediaTypeHeaderCommandOutput extends MediaTypeHeaderOutput, __MetadataBearer {}

/**
 * This example ensures that mediaType strings are base64 encoded in headers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MediaTypeHeaderCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MediaTypeHeaderCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MediaTypeHeaderInput
 *   json: "STRING_VALUE",
 * };
 * const command = new MediaTypeHeaderCommand(input);
 * const response = await client.send(command);
 * // { // MediaTypeHeaderOutput
 * //   json: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MediaTypeHeaderCommandInput - {@link MediaTypeHeaderCommandInput}
 * @returns {@link MediaTypeHeaderCommandOutput}
 * @see {@link MediaTypeHeaderCommandInput} for command's `input` shape.
 * @see {@link MediaTypeHeaderCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 * @public
 */
export class MediaTypeHeaderCommand extends $Command
  .classBuilder<
    MediaTypeHeaderCommandInput,
    MediaTypeHeaderCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MediaTypeHeader", {})
  .n("RestJsonProtocolClient", "MediaTypeHeaderCommand")
  .f(void 0, void 0)
  .ser(se_MediaTypeHeaderCommand)
  .de(de_MediaTypeHeaderCommand)
  .build() {}
