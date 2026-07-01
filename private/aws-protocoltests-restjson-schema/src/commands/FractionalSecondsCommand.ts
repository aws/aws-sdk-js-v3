// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { FractionalSecondsOutput } from "../models/models_0";
import { FractionalSeconds$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link FractionalSecondsCommand}.
 */
export interface FractionalSecondsCommandInput {}
/**
 * @public
 *
 * The output of {@link FractionalSecondsCommand}.
 */
export interface FractionalSecondsCommandOutput extends FractionalSecondsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, FractionalSecondsCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, FractionalSecondsCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new FractionalSecondsCommand(input);
 * const response = await client.send(command);
 * // { // FractionalSecondsOutput
 * //   datetime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param FractionalSecondsCommandInput - {@link FractionalSecondsCommandInput}
 * @returns {@link FractionalSecondsCommandOutput}
 * @see {@link FractionalSecondsCommandInput} for command's `input` shape.
 * @see {@link FractionalSecondsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class FractionalSecondsCommand extends command<FractionalSecondsCommandInput, FractionalSecondsCommandOutput>(
  _ep0,
  _mw0,
  "FractionalSeconds",
  FractionalSeconds$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: FractionalSecondsOutput;
    };
    sdk: {
      input: FractionalSecondsCommandInput;
      output: FractionalSecondsCommandOutput;
    };
  };
}
