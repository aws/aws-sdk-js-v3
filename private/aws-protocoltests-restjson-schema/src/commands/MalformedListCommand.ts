// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MalformedListInput } from "../models/models_0";
import { MalformedList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link MalformedListCommand}.
 */
export interface MalformedListCommandInput extends MalformedListInput {}
/**
 * @public
 *
 * The output of {@link MalformedListCommand}.
 */
export interface MalformedListCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedListCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedListCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedListInput
 *   bodyList: [ // SimpleList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new MalformedListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedListCommandInput - {@link MalformedListCommandInput}
 * @returns {@link MalformedListCommandOutput}
 * @see {@link MalformedListCommandInput} for command's `input` shape.
 * @see {@link MalformedListCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedListCommand extends command<MalformedListCommandInput, MalformedListCommandOutput>(
  _ep0,
  _mw0,
  "MalformedList",
  MalformedList$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedListInput;
      output: {};
    };
    sdk: {
      input: MalformedListCommandInput;
      output: MalformedListCommandOutput;
    };
  };
}
