// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GreetingWithErrorsInput, GreetingWithErrorsOutput } from "../models/models_0";
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
export interface GreetingWithErrorsCommandInput extends GreetingWithErrorsInput {}
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
 * 3. A ComplexError error.
 *
 * Implementations must be able to successfully take a response and
 * properly deserialize successful and error responses.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, GreetingWithErrorsCommand } from "@aws-sdk/aws-protocoltests-json-10-schema"; // ES Modules import
 * // const { JSONRPC10Client, GreetingWithErrorsCommand } = require("@aws-sdk/aws-protocoltests-json-10-schema"); // CommonJS import
 * // import type { JSONRPC10ClientConfig } from "@aws-sdk/aws-protocoltests-json-10-schema";
 * const config = {}; // type is JSONRPC10ClientConfig
 * const client = new JSONRPC10Client(config);
 * const input = { // GreetingWithErrorsInput
 *   greeting: "STRING_VALUE",
 * };
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
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link InvalidGreeting} (client fault)
 *  This error is thrown when an invalid greeting value is provided.
 *
 * @throws {@link ComplexError} (client fault)
 *  This error is thrown when a request is invalid.
 *
 * @throws {@link FooError} (server fault)
 *  This error has test cases that test some of the dark corners of Amazon service
 * framework history. It should only be implemented by clients.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
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
      input: GreetingWithErrorsInput;
      output: GreetingWithErrorsOutput;
    };
    sdk: {
      input: GreetingWithErrorsCommandInput;
      output: GreetingWithErrorsCommandOutput;
    };
  };
}
