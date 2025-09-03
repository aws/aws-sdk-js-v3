// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SimpleStructure } from "../models/models_0";
import { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RpcV2ProtocolClient";
import { OptionalInputOutput } from "../schemas/schemas_1_Rpc";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OptionalInputOutputCommand}.
 */
export interface OptionalInputOutputCommandInput extends SimpleStructure {}
/**
 * @public
 *
 * The output of {@link OptionalInputOutputCommand}.
 */
export interface OptionalInputOutputCommandOutput extends SimpleStructure, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, OptionalInputOutputCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"; // ES Modules import
 * // const { RpcV2ProtocolClient, OptionalInputOutputCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"); // CommonJS import
 * const client = new RpcV2ProtocolClient(config);
 * const input = { // SimpleStructure
 *   value: "STRING_VALUE",
 * };
 * const command = new OptionalInputOutputCommand(input);
 * const response = await client.send(command);
 * // { // SimpleStructure
 * //   value: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param OptionalInputOutputCommandInput - {@link OptionalInputOutputCommandInput}
 * @returns {@link OptionalInputOutputCommandOutput}
 * @see {@link OptionalInputOutputCommandInput} for command's `input` shape.
 * @see {@link OptionalInputOutputCommandOutput} for command's `response` shape.
 * @see {@link RpcV2ProtocolClientResolvedConfig | config} for RpcV2ProtocolClient's `config` shape.
 *
 * @throws {@link RpcV2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from RpcV2Protocol service.</p>
 *
 *
 */
export class OptionalInputOutputCommand extends $Command
  .classBuilder<
    OptionalInputOutputCommandInput,
    OptionalInputOutputCommandOutput,
    RpcV2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RpcV2ProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RpcV2Protocol", "OptionalInputOutput", {})
  .n("RpcV2ProtocolClient", "OptionalInputOutputCommand")
  .sc(OptionalInputOutput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SimpleStructure;
      output: SimpleStructure;
    };
    sdk: {
      input: OptionalInputOutputCommandInput;
      output: OptionalInputOutputCommandOutput;
    };
  };
}
