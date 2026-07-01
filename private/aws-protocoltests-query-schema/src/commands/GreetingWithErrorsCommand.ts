// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GreetingWithErrorsOutput } from "../models/models_0";
import { GreetingWithErrors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GreetingWithErrorsCommand}.
 */
export interface GreetingWithErrorsCommandInput {}
/**
 * @public
 *
 * The output of {@link GreetingWithErrorsCommand}.
 */
export interface GreetingWithErrorsCommandOutput extends GreetingWithErrorsOutput, __MetadataBearer {}

/**
 * This operation has three possible return values:
 *
 * 1. A successful response in the form of GreetingWithErrorsOutput
 * 2. An InvalidGreeting error.
 * 3. A BadRequest error.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, GreetingWithErrorsCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, GreetingWithErrorsCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new GreetingWithErrorsCommand(input);
 * const response = await client.send(command);
 * // { // GreetingWithErrorsOutput
 * //   greeting: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GreetingWithErrorsCommandInput - {@link GreetingWithErrorsCommandInput}
 * @returns {@link GreetingWithErrorsCommandOutput}
 * @see {@link GreetingWithErrorsCommandInput} for command's `input` shape.
 * @see {@link GreetingWithErrorsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link InvalidGreeting} (client fault)
 *  This error is thrown when an invalid greeting value is provided.
 *
 * @throws {@link ComplexError} (client fault)
 *  This error is thrown when a request is invalid.
 *
 * @throws {@link CustomCodeError} (client fault)
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class GreetingWithErrorsCommand extends command<GreetingWithErrorsCommandInput, GreetingWithErrorsCommandOutput>(
  _ep0,
  _mw0,
  "GreetingWithErrors",
  GreetingWithErrors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GreetingWithErrorsOutput;
    };
    sdk: {
      input: GreetingWithErrorsCommandInput;
      output: GreetingWithErrorsCommandOutput;
    };
  };
}
