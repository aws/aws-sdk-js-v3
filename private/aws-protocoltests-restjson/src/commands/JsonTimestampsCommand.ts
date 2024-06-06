// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { JsonTimestampsInputOutput } from "../models/models_0";
import { de_JsonTimestampsCommand, se_JsonTimestampsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link JsonTimestampsCommand}.
 */
export interface JsonTimestampsCommandInput extends JsonTimestampsInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonTimestampsCommand}.
 */
export interface JsonTimestampsCommandOutput extends JsonTimestampsInputOutput, __MetadataBearer {}

/**
 * This tests how timestamps are serialized, including using the
 * default format of date-time and various @timestampFormat trait
 * values.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonTimestampsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonTimestampsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // JsonTimestampsInputOutput
 *   normal: new Date("TIMESTAMP"),
 *   dateTime: new Date("TIMESTAMP"),
 *   dateTimeOnTarget: new Date("TIMESTAMP"),
 *   epochSeconds: new Date("TIMESTAMP"),
 *   epochSecondsOnTarget: new Date("TIMESTAMP"),
 *   httpDate: new Date("TIMESTAMP"),
 *   httpDateOnTarget: new Date("TIMESTAMP"),
 * };
 * const command = new JsonTimestampsCommand(input);
 * const response = await client.send(command);
 * // { // JsonTimestampsInputOutput
 * //   normal: new Date("TIMESTAMP"),
 * //   dateTime: new Date("TIMESTAMP"),
 * //   dateTimeOnTarget: new Date("TIMESTAMP"),
 * //   epochSeconds: new Date("TIMESTAMP"),
 * //   epochSecondsOnTarget: new Date("TIMESTAMP"),
 * //   httpDate: new Date("TIMESTAMP"),
 * //   httpDateOnTarget: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param JsonTimestampsCommandInput - {@link JsonTimestampsCommandInput}
 * @returns {@link JsonTimestampsCommandOutput}
 * @see {@link JsonTimestampsCommandInput} for command's `input` shape.
 * @see {@link JsonTimestampsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 * @public
 */
export class JsonTimestampsCommand extends $Command
  .classBuilder<
    JsonTimestampsCommandInput,
    JsonTimestampsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "JsonTimestamps", {})
  .n("RestJsonProtocolClient", "JsonTimestampsCommand")
  .f(void 0, void 0)
  .ser(se_JsonTimestampsCommand)
  .de(de_JsonTimestampsCommand)
  .build() {}
