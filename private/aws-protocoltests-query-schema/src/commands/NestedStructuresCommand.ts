// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { NestedStructuresInput } from "../models/models_0";
import { NestedStructures$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link NestedStructuresCommand}.
 */
export interface NestedStructuresCommandInput extends NestedStructuresInput {}
/**
 * @public
 *
 * The output of {@link NestedStructuresCommand}.
 */
export interface NestedStructuresCommandOutput extends __MetadataBearer {}

/**
 * This test serializes nested and recursive structure members.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, NestedStructuresCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, NestedStructuresCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = { // NestedStructuresInput
 *   Nested: { // StructArg
 *     StringArg: "STRING_VALUE",
 *     OtherArg: true || false,
 *     RecursiveArg: {
 *       StringArg: "STRING_VALUE",
 *       OtherArg: true || false,
 *       RecursiveArg: "<StructArg>",
 *     },
 *   },
 * };
 * const command = new NestedStructuresCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NestedStructuresCommandInput - {@link NestedStructuresCommandInput}
 * @returns {@link NestedStructuresCommandOutput}
 * @see {@link NestedStructuresCommandInput} for command's `input` shape.
 * @see {@link NestedStructuresCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class NestedStructuresCommand extends command<NestedStructuresCommandInput, NestedStructuresCommandOutput>(
  _ep0,
  _mw0,
  "NestedStructures",
  NestedStructures$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NestedStructuresInput;
      output: {};
    };
    sdk: {
      input: NestedStructuresCommandInput;
      output: NestedStructuresCommandOutput;
    };
  };
}
