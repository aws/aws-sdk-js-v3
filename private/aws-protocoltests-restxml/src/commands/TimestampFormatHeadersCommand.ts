// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { TimestampFormatHeadersIO } from "../models/models_0";
import { de_TimestampFormatHeadersCommand, se_TimestampFormatHeadersCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TimestampFormatHeadersCommand}.
 */
export interface TimestampFormatHeadersCommandInput extends TimestampFormatHeadersIO {}
/**
 * @public
 *
 * The output of {@link TimestampFormatHeadersCommand}.
 */
export interface TimestampFormatHeadersCommandOutput extends TimestampFormatHeadersIO, __MetadataBearer {}

/**
 * The example tests how timestamp request and response headers are serialized.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, TimestampFormatHeadersCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, TimestampFormatHeadersCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // TimestampFormatHeadersIO
 *   memberEpochSeconds: new Date("TIMESTAMP"),
 *   memberHttpDate: new Date("TIMESTAMP"),
 *   memberDateTime: new Date("TIMESTAMP"),
 *   defaultFormat: new Date("TIMESTAMP"),
 *   targetEpochSeconds: new Date("TIMESTAMP"),
 *   targetHttpDate: new Date("TIMESTAMP"),
 *   targetDateTime: new Date("TIMESTAMP"),
 * };
 * const command = new TimestampFormatHeadersCommand(input);
 * const response = await client.send(command);
 * // { // TimestampFormatHeadersIO
 * //   memberEpochSeconds: new Date("TIMESTAMP"),
 * //   memberHttpDate: new Date("TIMESTAMP"),
 * //   memberDateTime: new Date("TIMESTAMP"),
 * //   defaultFormat: new Date("TIMESTAMP"),
 * //   targetEpochSeconds: new Date("TIMESTAMP"),
 * //   targetHttpDate: new Date("TIMESTAMP"),
 * //   targetDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param TimestampFormatHeadersCommandInput - {@link TimestampFormatHeadersCommandInput}
 * @returns {@link TimestampFormatHeadersCommandOutput}
 * @see {@link TimestampFormatHeadersCommandInput} for command's `input` shape.
 * @see {@link TimestampFormatHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 * @public
 */
export class TimestampFormatHeadersCommand extends $Command
  .classBuilder<
    TimestampFormatHeadersCommandInput,
    TimestampFormatHeadersCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "TimestampFormatHeaders", {})
  .n("RestXmlProtocolClient", "TimestampFormatHeadersCommand")
  .f(void 0, void 0)
  .ser(se_TimestampFormatHeadersCommand)
  .de(de_TimestampFormatHeadersCommand)
  .build() {}
