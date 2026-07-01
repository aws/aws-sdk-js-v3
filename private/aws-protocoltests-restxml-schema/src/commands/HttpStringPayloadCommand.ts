// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StringPayloadInput } from "../models/models_0";
import { HttpStringPayload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link HttpStringPayloadCommand}.
 */
export interface HttpStringPayloadCommandInput extends StringPayloadInput {}
/**
 * @public
 *
 * The output of {@link HttpStringPayloadCommand}.
 */
export interface HttpStringPayloadCommandOutput extends StringPayloadInput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpStringPayloadCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpStringPayloadCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // StringPayloadInput
 *   payload: "STRING_VALUE",
 * };
 * const command = new HttpStringPayloadCommand(input);
 * const response = await client.send(command);
 * // { // StringPayloadInput
 * //   payload: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param HttpStringPayloadCommandInput - {@link HttpStringPayloadCommandInput}
 * @returns {@link HttpStringPayloadCommandOutput}
 * @see {@link HttpStringPayloadCommandInput} for command's `input` shape.
 * @see {@link HttpStringPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class HttpStringPayloadCommand extends command<HttpStringPayloadCommandInput, HttpStringPayloadCommandOutput>(
  _ep0,
  _mw0,
  "HttpStringPayload",
  HttpStringPayload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StringPayloadInput;
      output: StringPayloadInput;
    };
    sdk: {
      input: HttpStringPayloadCommandInput;
      output: HttpStringPayloadCommandOutput;
    };
  };
}
