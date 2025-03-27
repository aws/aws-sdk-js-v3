// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EmptyStructure } from "../models/models_0";
import { de_EmptyInputOutputCommand, se_EmptyInputOutputCommand } from "../protocols/Rpcv2cbor";
import { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RpcV2ProtocolClient";

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
 * import { RpcV2ProtocolClient, EmptyInputOutputCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor"; // ES Modules import
 * // const { RpcV2ProtocolClient, EmptyInputOutputCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor"); // CommonJS import
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
  .m(function (this: any, Command: any, cs: any, config: RpcV2ProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RpcV2Protocol", "EmptyInputOutput", {})
  .n("RpcV2ProtocolClient", "EmptyInputOutputCommand")
  .f(void 0, void 0)
  .ser(se_EmptyInputOutputCommand)
  .de(de_EmptyInputOutputCommand)
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
