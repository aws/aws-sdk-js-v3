// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { RpcV2CborDenseMapsInputOutput } from "../models/models_0";
import { de_RpcV2CborDenseMapsCommand, se_RpcV2CborDenseMapsCommand } from "../protocols/Rpcv2cbor";
import { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RpcV2ProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RpcV2CborDenseMapsCommand}.
 */
export interface RpcV2CborDenseMapsCommandInput extends RpcV2CborDenseMapsInputOutput {}
/**
 * @public
 *
 * The output of {@link RpcV2CborDenseMapsCommand}.
 */
export interface RpcV2CborDenseMapsCommandOutput extends RpcV2CborDenseMapsInputOutput, __MetadataBearer {}

/**
 * The example tests basic map serialization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, RpcV2CborDenseMapsCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor"; // ES Modules import
 * // const { RpcV2ProtocolClient, RpcV2CborDenseMapsCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor"); // CommonJS import
 * const client = new RpcV2ProtocolClient(config);
 * const input = { // RpcV2CborDenseMapsInputOutput
 *   denseStructMap: { // DenseStructMap
 *     "<keys>": { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   },
 *   denseNumberMap: { // DenseNumberMap
 *     "<keys>": Number("int"),
 *   },
 *   denseBooleanMap: { // DenseBooleanMap
 *     "<keys>": true || false,
 *   },
 *   denseStringMap: { // DenseStringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   denseSetMap: { // DenseSetMap
 *     "<keys>": [ // StringSet
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new RpcV2CborDenseMapsCommand(input);
 * const response = await client.send(command);
 * // { // RpcV2CborDenseMapsInputOutput
 * //   denseStructMap: { // DenseStructMap
 * //     "<keys>": { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * //   denseNumberMap: { // DenseNumberMap
 * //     "<keys>": Number("int"),
 * //   },
 * //   denseBooleanMap: { // DenseBooleanMap
 * //     "<keys>": true || false,
 * //   },
 * //   denseStringMap: { // DenseStringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   denseSetMap: { // DenseSetMap
 * //     "<keys>": [ // StringSet
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param RpcV2CborDenseMapsCommandInput - {@link RpcV2CborDenseMapsCommandInput}
 * @returns {@link RpcV2CborDenseMapsCommandOutput}
 * @see {@link RpcV2CborDenseMapsCommandInput} for command's `input` shape.
 * @see {@link RpcV2CborDenseMapsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class RpcV2CborDenseMapsCommand extends $Command
  .classBuilder<
    RpcV2CborDenseMapsCommandInput,
    RpcV2CborDenseMapsCommandOutput,
    RpcV2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RpcV2ProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RpcV2Protocol", "RpcV2CborDenseMaps", {})
  .n("RpcV2ProtocolClient", "RpcV2CborDenseMapsCommand")
  .f(void 0, void 0)
  .ser(se_RpcV2CborDenseMapsCommand)
  .de(de_RpcV2CborDenseMapsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RpcV2CborDenseMapsInputOutput;
      output: RpcV2CborDenseMapsInputOutput;
    };
    sdk: {
      input: RpcV2CborDenseMapsCommandInput;
      output: RpcV2CborDenseMapsCommandOutput;
    };
  };
}
