// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EmptyStructure } from "../models/models_0";
import type { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RpcV2ProtocolClient";
import { EmptyInputOutput } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EmptyInputOutputCommand}.
 */
export interface EmptyInputOutputCommandInput extends EmptyStructure {}
/**
 * @public
 *
 * The output of {@link EmptyInputOutputCommand}.
 */
export interface EmptyInputOutputCommandOutput extends EmptyStructure, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, EmptyInputOutputCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"; // ES Modules import
 * // const { RpcV2ProtocolClient, EmptyInputOutputCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"); // CommonJS import
 * // import type { RpcV2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema";
 * const config = {}; // type is RpcV2ProtocolClientConfig
 * const client = new RpcV2ProtocolClient(config);
 * const input = {};
 * const command = new EmptyInputOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EmptyInputOutputCommandInput - {@link EmptyInputOutputCommandInput}
 * @returns {@link EmptyInputOutputCommandOutput}
 * @see {@link EmptyInputOutputCommandInput} for command's `input` shape.
 * @see {@link EmptyInputOutputCommandOutput} for command's `response` shape.
 * @see {@link RpcV2ProtocolClientResolvedConfig | config} for RpcV2ProtocolClient's `config` shape.
 *
 * @throws {@link RpcV2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from RpcV2Protocol service.</p>
 *
 *
 */
export class EmptyInputOutputCommand extends $Command
  .classBuilder<
    EmptyInputOutputCommandInput,
    EmptyInputOutputCommandOutput,
    RpcV2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RpcV2ProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RpcV2Protocol", "EmptyInputOutput", {})
  .n("RpcV2ProtocolClient", "EmptyInputOutputCommand")
  .sc(EmptyInputOutput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EmptyInputOutputCommandInput;
      output: EmptyInputOutputCommandOutput;
    };
  };
}
