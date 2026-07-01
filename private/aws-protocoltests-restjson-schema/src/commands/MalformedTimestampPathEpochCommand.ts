// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MalformedTimestampPathEpochInput } from "../models/models_0";
import { MalformedTimestampPathEpoch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link MalformedTimestampPathEpochCommand}.
 */
export interface MalformedTimestampPathEpochCommandInput extends MalformedTimestampPathEpochInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampPathEpochCommand}.
 */
export interface MalformedTimestampPathEpochCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampPathEpochCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampPathEpochCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampPathEpochInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampPathEpochCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampPathEpochCommandInput - {@link MalformedTimestampPathEpochCommandInput}
 * @returns {@link MalformedTimestampPathEpochCommandOutput}
 * @see {@link MalformedTimestampPathEpochCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampPathEpochCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedTimestampPathEpochCommand extends command<MalformedTimestampPathEpochCommandInput, MalformedTimestampPathEpochCommandOutput>(
  _ep0,
  _mw0,
  "MalformedTimestampPathEpoch",
  MalformedTimestampPathEpoch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampPathEpochInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampPathEpochCommandInput;
      output: MalformedTimestampPathEpochCommandOutput;
    };
  };
}
