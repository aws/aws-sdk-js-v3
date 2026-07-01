// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MalformedTimestampHeaderEpochInput } from "../models/models_0";
import { MalformedTimestampHeaderEpoch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link MalformedTimestampHeaderEpochCommand}.
 */
export interface MalformedTimestampHeaderEpochCommandInput extends MalformedTimestampHeaderEpochInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampHeaderEpochCommand}.
 */
export interface MalformedTimestampHeaderEpochCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampHeaderEpochCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampHeaderEpochCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampHeaderEpochInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampHeaderEpochCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampHeaderEpochCommandInput - {@link MalformedTimestampHeaderEpochCommandInput}
 * @returns {@link MalformedTimestampHeaderEpochCommandOutput}
 * @see {@link MalformedTimestampHeaderEpochCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampHeaderEpochCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedTimestampHeaderEpochCommand extends command<MalformedTimestampHeaderEpochCommandInput, MalformedTimestampHeaderEpochCommandOutput>(
  _ep0,
  _mw0,
  "MalformedTimestampHeaderEpoch",
  MalformedTimestampHeaderEpoch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedTimestampHeaderEpochInput;
      output: {};
    };
    sdk: {
      input: MalformedTimestampHeaderEpochCommandInput;
      output: MalformedTimestampHeaderEpochCommandOutput;
    };
  };
}
