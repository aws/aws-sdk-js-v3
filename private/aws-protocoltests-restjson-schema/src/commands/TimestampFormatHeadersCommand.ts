// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TimestampFormatHeadersIO } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { TimestampFormatHeaders } from "../schemas/schemas_0";

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
 * This example tests how timestamp request and response headers are serialized.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TimestampFormatHeadersCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, TimestampFormatHeadersCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
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
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class TimestampFormatHeadersCommand extends $Command
  .classBuilder<
    TimestampFormatHeadersCommandInput,
    TimestampFormatHeadersCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "TimestampFormatHeaders", {})
  .n("RestJsonProtocolClient", "TimestampFormatHeadersCommand")
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
