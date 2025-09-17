// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TimestampFormatHeadersIO } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { TimestampFormatHeaders } from "../schemas/schemas_2_With";

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
 * import { RestXmlProtocolClient, TimestampFormatHeadersCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, TimestampFormatHeadersCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "TimestampFormatHeaders", {})
  .n("RestXmlProtocolClient", "TimestampFormatHeadersCommand")
  .sc(TimestampFormatHeaders)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TimestampFormatHeadersIO;
      output: TimestampFormatHeadersIO;
    };
    sdk: {
      input: TimestampFormatHeadersCommandInput;
      output: TimestampFormatHeadersCommandOutput;
    };
  };
}
