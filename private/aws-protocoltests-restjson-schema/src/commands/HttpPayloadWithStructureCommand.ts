// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { HttpPayloadWithStructureInputOutput } from "../models/models_0";
import { HttpPayloadWithStructure$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithStructureCommand}.
 */
export interface HttpPayloadWithStructureCommandInput extends HttpPayloadWithStructureInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithStructureCommand}.
 */
export interface HttpPayloadWithStructureCommandOutput extends HttpPayloadWithStructureInputOutput, __MetadataBearer {}

/**
 * This example serializes a structure in the payload.
 *
 * Note that serializing a structure changes the wrapper element name
 * to match the targeted structure.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPayloadWithStructureCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPayloadWithStructureCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpPayloadWithStructureInputOutput
 *   nested: { // NestedPayload
 *     greeting: "STRING_VALUE",
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithStructureCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithStructureInputOutput
 * //   nested: { // NestedPayload
 * //     greeting: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithStructureCommandInput - {@link HttpPayloadWithStructureCommandInput}
 * @returns {@link HttpPayloadWithStructureCommandOutput}
 * @see {@link HttpPayloadWithStructureCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithStructureCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPayloadWithStructureCommand extends command<HttpPayloadWithStructureCommandInput, HttpPayloadWithStructureCommandOutput>(
  _ep0,
  _mw0,
  "HttpPayloadWithStructure",
  HttpPayloadWithStructure$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadWithStructureInputOutput;
      output: HttpPayloadWithStructureInputOutput;
    };
    sdk: {
      input: HttpPayloadWithStructureCommandInput;
      output: HttpPayloadWithStructureCommandOutput;
    };
  };
}
