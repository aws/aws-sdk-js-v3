// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DatetimeOffsetsOutput } from "../models/models_0";
import { DatetimeOffsets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DatetimeOffsetsCommand}.
 */
export interface DatetimeOffsetsCommandInput {}
/**
 * @public
 *
 * The output of {@link DatetimeOffsetsCommand}.
 */
export interface DatetimeOffsetsCommandOutput extends DatetimeOffsetsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, DatetimeOffsetsCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, DatetimeOffsetsCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new DatetimeOffsetsCommand(input);
 * const response = await client.send(command);
 * // { // DatetimeOffsetsOutput
 * //   datetime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DatetimeOffsetsCommandInput - {@link DatetimeOffsetsCommandInput}
 * @returns {@link DatetimeOffsetsCommandOutput}
 * @see {@link DatetimeOffsetsCommandInput} for command's `input` shape.
 * @see {@link DatetimeOffsetsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 */
export class DatetimeOffsetsCommand extends command<DatetimeOffsetsCommandInput, DatetimeOffsetsCommandOutput>(
  _ep0,
  _mw0,
  "DatetimeOffsets",
  DatetimeOffsets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DatetimeOffsetsOutput;
    };
    sdk: {
      input: DatetimeOffsetsCommandInput;
      output: DatetimeOffsetsCommandOutput;
    };
  };
}
