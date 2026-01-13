// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SparseJsonMapsInputOutput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { SparseJsonMaps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SparseJsonMapsCommand}.
 */
export interface SparseJsonMapsCommandInput extends SparseJsonMapsInputOutput {}
/**
 * @public
 *
 * The output of {@link SparseJsonMapsCommand}.
 */
export interface SparseJsonMapsCommandOutput extends SparseJsonMapsInputOutput, __MetadataBearer {}

/**
 * This example tests sparse map serialization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, SparseJsonMapsCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, SparseJsonMapsCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // SparseJsonMapsInputOutput
 *   sparseStructMap: { // SparseStructMap
 *     "<keys>": { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   },
 *   sparseNumberMap: { // SparseNumberMap
 *     "<keys>": Number("int"),
 *   },
 *   sparseBooleanMap: { // SparseBooleanMap
 *     "<keys>": true || false,
 *   },
 *   sparseStringMap: { // SparseStringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   sparseSetMap: { // SparseSetMap
 *     "<keys>": [ // StringSet
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new SparseJsonMapsCommand(input);
 * const response = await client.send(command);
 * // { // SparseJsonMapsInputOutput
 * //   sparseStructMap: { // SparseStructMap
 * //     "<keys>": { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * //   sparseNumberMap: { // SparseNumberMap
 * //     "<keys>": Number("int"),
 * //   },
 * //   sparseBooleanMap: { // SparseBooleanMap
 * //     "<keys>": true || false,
 * //   },
 * //   sparseStringMap: { // SparseStringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   sparseSetMap: { // SparseSetMap
 * //     "<keys>": [ // StringSet
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param SparseJsonMapsCommandInput - {@link SparseJsonMapsCommandInput}
 * @returns {@link SparseJsonMapsCommandOutput}
 * @see {@link SparseJsonMapsCommandInput} for command's `input` shape.
 * @see {@link SparseJsonMapsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class SparseJsonMapsCommand extends $Command
  .classBuilder<
    SparseJsonMapsCommandInput,
    SparseJsonMapsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "SparseJsonMaps", {})
  .n("RestJsonProtocolClient", "SparseJsonMapsCommand")
  .sc(SparseJsonMaps$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SparseJsonMapsInputOutput;
      output: SparseJsonMapsInputOutput;
    };
    sdk: {
      input: SparseJsonMapsCommandInput;
      output: SparseJsonMapsCommandOutput;
    };
  };
}
