// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MalformedTimestampPathHttpDateInput } from "../models/models_0";
import { MalformedTimestampPathHttpDate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link MalformedTimestampPathHttpDateCommand}.
 */
export interface MalformedTimestampPathHttpDateCommandInput extends MalformedTimestampPathHttpDateInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampPathHttpDateCommand}.
 */
export interface MalformedTimestampPathHttpDateCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampPathHttpDateCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampPathHttpDateCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampPathHttpDateInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampPathHttpDateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampPathHttpDateCommandInput - {@link MalformedTimestampPathHttpDateCommandInput}
 * @returns {@link MalformedTimestampPathHttpDateCommandOutput}
 * @see {@link MalformedTimestampPathHttpDateCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampPathHttpDateCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedTimestampPathHttpDateCommand extends command<MalformedTimestampPathHttpDateCommandInput, MalformedTimestampPathHttpDateCommandOutput>(
  _ep0,
  _mw0,
  "MalformedTimestampPathHttpDate",
  MalformedTimestampPathHttpDate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampPathHttpDateInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampPathHttpDateCommandInput;
      output: MalformedTimestampPathHttpDateCommandOutput;
    };
  };
}
