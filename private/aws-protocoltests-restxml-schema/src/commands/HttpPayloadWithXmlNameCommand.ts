// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { HttpPayloadWithXmlNameInputOutput } from "../models/models_0";
import { HttpPayloadWithXmlName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithXmlNameCommand}.
 */
export interface HttpPayloadWithXmlNameCommandInput extends HttpPayloadWithXmlNameInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithXmlNameCommand}.
 */
export interface HttpPayloadWithXmlNameCommandOutput extends HttpPayloadWithXmlNameInputOutput, __MetadataBearer {}

/**
 * The following example serializes a payload that uses an XML name,
 * changing the wrapper name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPayloadWithXmlNameInputOutput
 *   nested: { // PayloadWithXmlName
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithXmlNameInputOutput
 * //   nested: { // PayloadWithXmlName
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithXmlNameCommandInput - {@link HttpPayloadWithXmlNameCommandInput}
 * @returns {@link HttpPayloadWithXmlNameCommandOutput}
 * @see {@link HttpPayloadWithXmlNameCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPayloadWithXmlNameCommand extends command<HttpPayloadWithXmlNameCommandInput, HttpPayloadWithXmlNameCommandOutput>(
  _ep0,
  _mw0,
  "HttpPayloadWithXmlName",
  HttpPayloadWithXmlName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadWithXmlNameInputOutput;
      output: HttpPayloadWithXmlNameInputOutput;
    };
    sdk: {
      input: HttpPayloadWithXmlNameCommandInput;
      output: HttpPayloadWithXmlNameCommandOutput;
    };
  };
}
