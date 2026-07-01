// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { HttpResponseCodeOutput } from "../models/models_0";
import { HttpResponseCode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link HttpResponseCodeCommand}.
 */
export interface HttpResponseCodeCommandInput {}
/**
 * @public
 *
 * The output of {@link HttpResponseCodeCommand}.
 */
export interface HttpResponseCodeCommandOutput extends HttpResponseCodeOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpResponseCodeCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpResponseCodeCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = {};
 * const command = new HttpResponseCodeCommand(input);
 * const response = await client.send(command);
 * // { // HttpResponseCodeOutput
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param HttpResponseCodeCommandInput - {@link HttpResponseCodeCommandInput}
 * @returns {@link HttpResponseCodeCommandOutput}
 * @see {@link HttpResponseCodeCommandInput} for command's `input` shape.
 * @see {@link HttpResponseCodeCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class HttpResponseCodeCommand extends command<HttpResponseCodeCommandInput, HttpResponseCodeCommandOutput>(
  _ep0,
  _mw0,
  "HttpResponseCode",
  HttpResponseCode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: HttpResponseCodeOutput;
    };
    sdk: {
      input: HttpResponseCodeCommandInput;
      output: HttpResponseCodeCommandOutput;
    };
  };
}
