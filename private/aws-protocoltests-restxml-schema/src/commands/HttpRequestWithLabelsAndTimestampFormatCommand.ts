// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { HttpRequestWithLabelsAndTimestampFormatInput } from "../models/models_0";
import { HttpRequestWithLabelsAndTimestampFormat$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link HttpRequestWithLabelsAndTimestampFormatCommand}.
 */
export interface HttpRequestWithLabelsAndTimestampFormatCommandInput extends HttpRequestWithLabelsAndTimestampFormatInput {}
/**
 * @public
 *
 * The output of {@link HttpRequestWithLabelsAndTimestampFormatCommand}.
 */
export interface HttpRequestWithLabelsAndTimestampFormatCommandOutput extends __MetadataBearer {}

/**
 * The example tests how requests serialize different timestamp formats in the
 * URI path.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpRequestWithLabelsAndTimestampFormatCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpRequestWithLabelsAndTimestampFormatCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpRequestWithLabelsAndTimestampFormatInput
 *   memberEpochSeconds: new Date("TIMESTAMP"), // required
 *   memberHttpDate: new Date("TIMESTAMP"), // required
 *   memberDateTime: new Date("TIMESTAMP"), // required
 *   defaultFormat: new Date("TIMESTAMP"), // required
 *   targetEpochSeconds: new Date("TIMESTAMP"), // required
 *   targetHttpDate: new Date("TIMESTAMP"), // required
 *   targetDateTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new HttpRequestWithLabelsAndTimestampFormatCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HttpRequestWithLabelsAndTimestampFormatCommandInput - {@link HttpRequestWithLabelsAndTimestampFormatCommandInput}
 * @returns {@link HttpRequestWithLabelsAndTimestampFormatCommandOutput}
 * @see {@link HttpRequestWithLabelsAndTimestampFormatCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithLabelsAndTimestampFormatCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class HttpRequestWithLabelsAndTimestampFormatCommand extends command<HttpRequestWithLabelsAndTimestampFormatCommandInput, HttpRequestWithLabelsAndTimestampFormatCommandOutput>(
  _ep0,
  _mw0,
  "HttpRequestWithLabelsAndTimestampFormat",
  HttpRequestWithLabelsAndTimestampFormat$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpRequestWithLabelsAndTimestampFormatInput;
      output: {};
    };
    sdk: {
      input: HttpRequestWithLabelsAndTimestampFormatCommandInput;
      output: HttpRequestWithLabelsAndTimestampFormatCommandOutput;
    };
  };
}
