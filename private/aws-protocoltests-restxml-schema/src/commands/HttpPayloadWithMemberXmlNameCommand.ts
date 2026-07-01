// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { HttpPayloadWithMemberXmlNameInputOutput } from "../models/models_0";
import { HttpPayloadWithMemberXmlName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithMemberXmlNameCommand}.
 */
export interface HttpPayloadWithMemberXmlNameCommandInput extends HttpPayloadWithMemberXmlNameInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithMemberXmlNameCommand}.
 */
export interface HttpPayloadWithMemberXmlNameCommandOutput extends HttpPayloadWithMemberXmlNameInputOutput, __MetadataBearer {}

/**
 * The following example serializes a payload that uses an XML name
 * on the member, changing the wrapper name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithMemberXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithMemberXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPayloadWithMemberXmlNameInputOutput
 *   nested: { // PayloadWithXmlName
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithMemberXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithMemberXmlNameInputOutput
 * //   nested: { // PayloadWithXmlName
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithMemberXmlNameCommandInput - {@link HttpPayloadWithMemberXmlNameCommandInput}
 * @returns {@link HttpPayloadWithMemberXmlNameCommandOutput}
 * @see {@link HttpPayloadWithMemberXmlNameCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithMemberXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPayloadWithMemberXmlNameCommand extends command<HttpPayloadWithMemberXmlNameCommandInput, HttpPayloadWithMemberXmlNameCommandOutput>(
  _ep0,
  _mw0,
  "HttpPayloadWithMemberXmlName",
  HttpPayloadWithMemberXmlName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadWithMemberXmlNameInputOutput;
      output: HttpPayloadWithMemberXmlNameInputOutput;
    };
    sdk: {
      input: HttpPayloadWithMemberXmlNameCommandInput;
      output: HttpPayloadWithMemberXmlNameCommandOutput;
    };
  };
}
