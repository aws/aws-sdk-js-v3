// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { HttpPayloadWithUnionInputOutput } from "../models/models_0";
import { HttpPayloadWithUnion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithUnionCommand}.
 */
export interface HttpPayloadWithUnionCommandInput extends HttpPayloadWithUnionInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithUnionCommand}.
 */
export interface HttpPayloadWithUnionCommandOutput extends HttpPayloadWithUnionInputOutput, __MetadataBearer {}

/**
 * This example serializes a union in the payload.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPayloadWithUnionCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPayloadWithUnionCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpPayloadWithUnionInputOutput
 *   nested: { // UnionPayload Union: only one key present
 *     greeting: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithUnionCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithUnionInputOutput
 * //   nested: { // UnionPayload Union: only one key present
 * //     greeting: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithUnionCommandInput - {@link HttpPayloadWithUnionCommandInput}
 * @returns {@link HttpPayloadWithUnionCommandOutput}
 * @see {@link HttpPayloadWithUnionCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithUnionCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPayloadWithUnionCommand extends command<HttpPayloadWithUnionCommandInput, HttpPayloadWithUnionCommandOutput>(
  _ep0,
  _mw0,
  "HttpPayloadWithUnion",
  HttpPayloadWithUnion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadWithUnionInputOutput;
      output: HttpPayloadWithUnionInputOutput;
    };
    sdk: {
      input: HttpPayloadWithUnionCommandInput;
      output: HttpPayloadWithUnionCommandOutput;
    };
  };
}
