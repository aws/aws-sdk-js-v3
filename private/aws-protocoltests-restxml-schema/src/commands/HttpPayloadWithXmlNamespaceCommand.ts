// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { HttpPayloadWithXmlNamespaceInputOutput } from "../models/models_0";
import { HttpPayloadWithXmlNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithXmlNamespaceCommand}.
 */
export interface HttpPayloadWithXmlNamespaceCommandInput extends HttpPayloadWithXmlNamespaceInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithXmlNamespaceCommand}.
 */
export interface HttpPayloadWithXmlNamespaceCommandOutput extends HttpPayloadWithXmlNamespaceInputOutput, __MetadataBearer {}

/**
 * The following example serializes a payload that uses an XML namespace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithXmlNamespaceCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithXmlNamespaceCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPayloadWithXmlNamespaceInputOutput
 *   nested: { // PayloadWithXmlNamespace
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithXmlNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithXmlNamespaceInputOutput
 * //   nested: { // PayloadWithXmlNamespace
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithXmlNamespaceCommandInput - {@link HttpPayloadWithXmlNamespaceCommandInput}
 * @returns {@link HttpPayloadWithXmlNamespaceCommandOutput}
 * @see {@link HttpPayloadWithXmlNamespaceCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithXmlNamespaceCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPayloadWithXmlNamespaceCommand extends command<HttpPayloadWithXmlNamespaceCommandInput, HttpPayloadWithXmlNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "HttpPayloadWithXmlNamespace",
  HttpPayloadWithXmlNamespace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadWithXmlNamespaceInputOutput;
      output: HttpPayloadWithXmlNamespaceInputOutput;
    };
    sdk: {
      input: HttpPayloadWithXmlNamespaceCommandInput;
      output: HttpPayloadWithXmlNamespaceCommandOutput;
    };
  };
}
