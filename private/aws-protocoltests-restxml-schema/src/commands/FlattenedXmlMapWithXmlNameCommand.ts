// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { FlattenedXmlMapWithXmlNameRequest, FlattenedXmlMapWithXmlNameResponse } from "../models/models_0";
import { FlattenedXmlMapWithXmlName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link FlattenedXmlMapWithXmlNameCommand}.
 */
export interface FlattenedXmlMapWithXmlNameCommandInput extends FlattenedXmlMapWithXmlNameRequest {}
/**
 * @public
 *
 * The output of {@link FlattenedXmlMapWithXmlNameCommand}.
 */
export interface FlattenedXmlMapWithXmlNameCommandOutput extends FlattenedXmlMapWithXmlNameResponse, __MetadataBearer {}

/**
 * Flattened maps with @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, FlattenedXmlMapWithXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, FlattenedXmlMapWithXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // FlattenedXmlMapWithXmlNameRequest
 *   myMap: { // FlattenedXmlMapWithXmlNameInputOutputMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new FlattenedXmlMapWithXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // FlattenedXmlMapWithXmlNameResponse
 * //   myMap: { // FlattenedXmlMapWithXmlNameInputOutputMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param FlattenedXmlMapWithXmlNameCommandInput - {@link FlattenedXmlMapWithXmlNameCommandInput}
 * @returns {@link FlattenedXmlMapWithXmlNameCommandOutput}
 * @see {@link FlattenedXmlMapWithXmlNameCommandInput} for command's `input` shape.
 * @see {@link FlattenedXmlMapWithXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class FlattenedXmlMapWithXmlNameCommand extends command<FlattenedXmlMapWithXmlNameCommandInput, FlattenedXmlMapWithXmlNameCommandOutput>(
  _ep0,
  _mw0,
  "FlattenedXmlMapWithXmlName",
  FlattenedXmlMapWithXmlName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: FlattenedXmlMapWithXmlNameRequest;
      output: FlattenedXmlMapWithXmlNameResponse;
    };
    sdk: {
      input: FlattenedXmlMapWithXmlNameCommandInput;
      output: FlattenedXmlMapWithXmlNameCommandOutput;
    };
  };
}
