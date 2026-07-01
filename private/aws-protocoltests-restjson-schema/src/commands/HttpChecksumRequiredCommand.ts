// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type { HttpChecksumRequiredInputOutput } from "../models/models_0";
import { HttpChecksumRequired$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link HttpChecksumRequiredCommand}.
 */
export interface HttpChecksumRequiredCommandInput extends HttpChecksumRequiredInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpChecksumRequiredCommand}.
 */
export interface HttpChecksumRequiredCommandOutput extends HttpChecksumRequiredInputOutput, __MetadataBearer {}

/**
 * This example tests httpChecksumRequired trait
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpChecksumRequiredCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpChecksumRequiredCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpChecksumRequiredInputOutput
 *   foo: "STRING_VALUE",
 * };
 * const command = new HttpChecksumRequiredCommand(input);
 * const response = await client.send(command);
 * // { // HttpChecksumRequiredInputOutput
 * //   foo: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param HttpChecksumRequiredCommandInput - {@link HttpChecksumRequiredCommandInput}
 * @returns {@link HttpChecksumRequiredCommandOutput}
 * @see {@link HttpChecksumRequiredCommandInput} for command's `input` shape.
 * @see {@link HttpChecksumRequiredCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpChecksumRequiredCommand extends command<HttpChecksumRequiredCommandInput, HttpChecksumRequiredCommandOutput>(
  _ep0,
  _mw2,
  "HttpChecksumRequired",
  HttpChecksumRequired$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpChecksumRequiredInputOutput;
      output: HttpChecksumRequiredInputOutput;
    };
    sdk: {
      input: HttpChecksumRequiredCommandInput;
      output: HttpChecksumRequiredCommandOutput;
    };
  };
}
