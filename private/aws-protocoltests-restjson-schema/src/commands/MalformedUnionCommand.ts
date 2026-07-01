// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MalformedUnionInput } from "../models/models_0";
import { MalformedUnion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link MalformedUnionCommand}.
 */
export interface MalformedUnionCommandInput extends MalformedUnionInput {}
/**
 * @public
 *
 * The output of {@link MalformedUnionCommand}.
 */
export interface MalformedUnionCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedUnionCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedUnionCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedUnionInput
 *   union: { // SimpleUnion Union: only one key present
 *     int: Number("int"),
 *     string: "STRING_VALUE",
 *   },
 * };
 * const command = new MalformedUnionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedUnionCommandInput - {@link MalformedUnionCommandInput}
 * @returns {@link MalformedUnionCommandOutput}
 * @see {@link MalformedUnionCommandInput} for command's `input` shape.
 * @see {@link MalformedUnionCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedUnionCommand extends command<MalformedUnionCommandInput, MalformedUnionCommandOutput>(
  _ep0,
  _mw0,
  "MalformedUnion",
  MalformedUnion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedUnionInput;
      output: {};
    };
    sdk: {
      input: MalformedUnionCommandInput;
      output: MalformedUnionCommandOutput;
    };
  };
}
