// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SparseJsonListsInputOutput } from "../models/models_0";
import { SparseJsonLists$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SparseJsonListsCommand}.
 */
export interface SparseJsonListsCommandInput extends SparseJsonListsInputOutput {}
/**
 * @public
 *
 * The output of {@link SparseJsonListsCommand}.
 */
export interface SparseJsonListsCommandOutput extends SparseJsonListsInputOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, SparseJsonListsCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, SparseJsonListsCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // SparseJsonListsInputOutput
 *   sparseStringList: [ // SparseStringList
 *     "STRING_VALUE",
 *   ],
 *   sparseShortList: [ // SparseShortList
 *     Number("short"),
 *   ],
 * };
 * const command = new SparseJsonListsCommand(input);
 * const response = await client.send(command);
 * // { // SparseJsonListsInputOutput
 * //   sparseStringList: [ // SparseStringList
 * //     "STRING_VALUE",
 * //   ],
 * //   sparseShortList: [ // SparseShortList
 * //     Number("short"),
 * //   ],
 * // };
 *
 * ```
 *
 * @param SparseJsonListsCommandInput - {@link SparseJsonListsCommandInput}
 * @returns {@link SparseJsonListsCommandOutput}
 * @see {@link SparseJsonListsCommandInput} for command's `input` shape.
 * @see {@link SparseJsonListsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class SparseJsonListsCommand extends command<SparseJsonListsCommandInput, SparseJsonListsCommandOutput>(
  _ep0,
  _mw0,
  "SparseJsonLists",
  SparseJsonLists$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SparseJsonListsInputOutput;
      output: SparseJsonListsInputOutput;
    };
    sdk: {
      input: SparseJsonListsCommandInput;
      output: SparseJsonListsCommandOutput;
    };
  };
}
