// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { NoInputAndOutputInput, NoInputAndOutputOutput } from "../models/models_0";
import { NoInputAndOutput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link NoInputAndOutputCommand}.
 */
export interface NoInputAndOutputCommandInput extends NoInputAndOutputInput {}
/**
 * @public
 *
 * The output of {@link NoInputAndOutputCommand}.
 */
export interface NoInputAndOutputCommandOutput extends NoInputAndOutputOutput, __MetadataBearer {}

/**
 * The example tests how requests and responses are serialized when there's
 * no request payload or response members.
 *
 * While this should be rare, code generators must support this.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, NoInputAndOutputCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, NoInputAndOutputCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new NoInputAndOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NoInputAndOutputCommandInput - {@link NoInputAndOutputCommandInput}
 * @returns {@link NoInputAndOutputCommandOutput}
 * @see {@link NoInputAndOutputCommandInput} for command's `input` shape.
 * @see {@link NoInputAndOutputCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class NoInputAndOutputCommand extends command<NoInputAndOutputCommandInput, NoInputAndOutputCommandOutput>(
  _ep0,
  _mw0,
  "NoInputAndOutput",
  NoInputAndOutput$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: NoInputAndOutputCommandInput;
      output: NoInputAndOutputCommandOutput;
    };
  };
}
