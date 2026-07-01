// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { HttpRequestWithFloatLabelsInput } from "../models/models_0";
import { HttpRequestWithFloatLabels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link HttpRequestWithFloatLabelsCommand}.
 */
export interface HttpRequestWithFloatLabelsCommandInput extends HttpRequestWithFloatLabelsInput {}
/**
 * @public
 *
 * The output of {@link HttpRequestWithFloatLabelsCommand}.
 */
export interface HttpRequestWithFloatLabelsCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpRequestWithFloatLabelsCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpRequestWithFloatLabelsCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpRequestWithFloatLabelsInput
 *   float: Number("float"), // required
 *   double: Number("double"), // required
 * };
 * const command = new HttpRequestWithFloatLabelsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HttpRequestWithFloatLabelsCommandInput - {@link HttpRequestWithFloatLabelsCommandInput}
 * @returns {@link HttpRequestWithFloatLabelsCommandOutput}
 * @see {@link HttpRequestWithFloatLabelsCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithFloatLabelsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class HttpRequestWithFloatLabelsCommand extends command<HttpRequestWithFloatLabelsCommandInput, HttpRequestWithFloatLabelsCommandOutput>(
  _ep0,
  _mw0,
  "HttpRequestWithFloatLabels",
  HttpRequestWithFloatLabels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpRequestWithFloatLabelsInput;
      output: {};
    };
    sdk: {
      input: HttpRequestWithFloatLabelsCommandInput;
      output: HttpRequestWithFloatLabelsCommandOutput;
    };
  };
}
