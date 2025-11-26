// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RpcV2CborSparseMapsInputOutput } from "../models/models_0";
import { de_RpcV2CborSparseMapsCommand, se_RpcV2CborSparseMapsCommand } from "../protocols/Rpcv2cbor";
import type { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RpcV2ProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RpcV2CborSparseMapsCommand}.
 */
export interface RpcV2CborSparseMapsCommandInput extends RpcV2CborSparseMapsInputOutput {}
/**
 * @public
 *
 * The output of {@link RpcV2CborSparseMapsCommand}.
 */
export interface RpcV2CborSparseMapsCommandOutput extends RpcV2CborSparseMapsInputOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, RpcV2CborSparseMapsCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor"; // ES Modules import
 * // const { RpcV2ProtocolClient, RpcV2CborSparseMapsCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor"); // CommonJS import
 * // import type { RpcV2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor";
 * const config = {}; // type is RpcV2ProtocolClientConfig
 * const client = new RpcV2ProtocolClient(config);
 * const input = { // RpcV2CborSparseMapsInputOutput
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
 * const command = new RpcV2CborSparseMapsCommand(input);
 * const response = await client.send(command);
 * // { // RpcV2CborSparseMapsInputOutput
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
 * @param RpcV2CborSparseMapsCommandInput - {@link RpcV2CborSparseMapsCommandInput}
 * @returns {@link RpcV2CborSparseMapsCommandOutput}
 * @see {@link RpcV2CborSparseMapsCommandInput} for command's `input` shape.
 * @see {@link RpcV2CborSparseMapsCommandOutput} for command's `response` shape.
 * @see {@link RpcV2ProtocolClientResolvedConfig | config} for RpcV2ProtocolClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link RpcV2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from RpcV2Protocol service.</p>
 *
 *
 */
export class RpcV2CborSparseMapsCommand extends $Command
  .classBuilder<
    RpcV2CborSparseMapsCommandInput,
    RpcV2CborSparseMapsCommandOutput,
    RpcV2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RpcV2ProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RpcV2Protocol", "RpcV2CborSparseMaps", {})
  .n("RpcV2ProtocolClient", "RpcV2CborSparseMapsCommand")
  .f(void 0, void 0)
  .ser(se_RpcV2CborSparseMapsCommand)
  .de(de_RpcV2CborSparseMapsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RpcV2CborSparseMapsInputOutput;
      output: RpcV2CborSparseMapsInputOutput;
    };
    sdk: {
      input: RpcV2CborSparseMapsCommandInput;
      output: RpcV2CborSparseMapsCommandOutput;
    };
  };
}
