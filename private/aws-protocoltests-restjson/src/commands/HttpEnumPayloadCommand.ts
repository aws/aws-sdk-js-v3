// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EnumPayloadInput } from "../models/models_0";
import { de_HttpEnumPayloadCommand, se_HttpEnumPayloadCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpEnumPayloadCommand}.
 */
export interface HttpEnumPayloadCommandInput extends EnumPayloadInput {}
/**
 * @public
 *
 * The output of {@link HttpEnumPayloadCommand}.
 */
export interface HttpEnumPayloadCommandOutput extends EnumPayloadInput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpEnumPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpEnumPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // EnumPayloadInput
 *   payload: "enumvalue",
 * };
 * const command = new HttpEnumPayloadCommand(input);
 * const response = await client.send(command);
 * // { // EnumPayloadInput
 * //   payload: "enumvalue",
 * // };
 *
 * ```
 *
 * @param HttpEnumPayloadCommandInput - {@link HttpEnumPayloadCommandInput}
 * @returns {@link HttpEnumPayloadCommandOutput}
 * @see {@link HttpEnumPayloadCommandInput} for command's `input` shape.
 * @see {@link HttpEnumPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class HttpEnumPayloadCommand extends $Command
  .classBuilder<
    HttpEnumPayloadCommandInput,
    HttpEnumPayloadCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "HttpEnumPayload", {})
  .n("RestJsonProtocolClient", "HttpEnumPayloadCommand")
  .f(void 0, void 0)
  .ser(se_HttpEnumPayloadCommand)
  .de(de_HttpEnumPayloadCommand)
  .build() {}
