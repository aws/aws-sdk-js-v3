// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { NestedXmlMapWithXmlNameRequest, NestedXmlMapWithXmlNameResponse } from "../models/models_0";
import { NestedXmlMapWithXmlName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link NestedXmlMapWithXmlNameCommand}.
 */
export interface NestedXmlMapWithXmlNameCommandInput extends NestedXmlMapWithXmlNameRequest {}
/**
 * @public
 *
 * The output of {@link NestedXmlMapWithXmlNameCommand}.
 */
export interface NestedXmlMapWithXmlNameCommandOutput extends NestedXmlMapWithXmlNameResponse, __MetadataBearer {}

/**
 * Nested Xml Maps with key/values with @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, NestedXmlMapWithXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, NestedXmlMapWithXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // NestedXmlMapWithXmlNameRequest
 *   nestedXmlMapWithXmlNameMap: { // NestedXmlMapWithXmlNameMap
 *     "<keys>": { // NestedXmlMapWithXmlNameInnerMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new NestedXmlMapWithXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // NestedXmlMapWithXmlNameResponse
 * //   nestedXmlMapWithXmlNameMap: { // NestedXmlMapWithXmlNameMap
 * //     "<keys>": { // NestedXmlMapWithXmlNameInnerMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param NestedXmlMapWithXmlNameCommandInput - {@link NestedXmlMapWithXmlNameCommandInput}
 * @returns {@link NestedXmlMapWithXmlNameCommandOutput}
 * @see {@link NestedXmlMapWithXmlNameCommandInput} for command's `input` shape.
 * @see {@link NestedXmlMapWithXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class NestedXmlMapWithXmlNameCommand extends command<NestedXmlMapWithXmlNameCommandInput, NestedXmlMapWithXmlNameCommandOutput>(
  _ep0,
  _mw0,
  "NestedXmlMapWithXmlName",
  NestedXmlMapWithXmlName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NestedXmlMapWithXmlNameRequest;
      output: NestedXmlMapWithXmlNameResponse;
    };
    sdk: {
      input: NestedXmlMapWithXmlNameCommandInput;
      output: NestedXmlMapWithXmlNameCommandOutput;
    };
  };
}
