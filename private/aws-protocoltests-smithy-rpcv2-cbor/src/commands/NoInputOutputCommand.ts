// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { de_NoInputOutputCommand, se_NoInputOutputCommand } from "../protocols/Rpcv2cbor";
import type { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RpcV2ProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NoInputOutputCommand}.
 */
export interface NoInputOutputCommandInput {}
/**
 * @public
 *
 * The output of {@link NoInputOutputCommand}.
 */
export interface NoInputOutputCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, NoInputOutputCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor"; // ES Modules import
 * // const { RpcV2ProtocolClient, NoInputOutputCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor"); // CommonJS import
 * // import type { RpcV2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor";
 * const config = {}; // type is RpcV2ProtocolClientConfig
 * const client = new RpcV2ProtocolClient(config);
 * const input = {};
 * const command = new NoInputOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NoInputOutputCommandInput - {@link NoInputOutputCommandInput}
 * @returns {@link NoInputOutputCommandOutput}
 * @see {@link NoInputOutputCommandInput} for command's `input` shape.
 * @see {@link NoInputOutputCommandOutput} for command's `response` shape.
 * @see {@link RpcV2ProtocolClientResolvedConfig | config} for RpcV2ProtocolClient's `config` shape.
 *
 * @throws {@link RpcV2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from RpcV2Protocol service.</p>
 *
 *
 */
export class NoInputOutputCommand extends $Command
  .classBuilder<
    NoInputOutputCommandInput,
    NoInputOutputCommandOutput,
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
  .s("RpcV2Protocol", "NoInputOutput", {})
  .n("RpcV2ProtocolClient", "NoInputOutputCommand")
  .f(void 0, void 0)
  .ser(se_NoInputOutputCommand)
  .de(de_NoInputOutputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: NoInputOutputCommandInput;
      output: NoInputOutputCommandOutput;
    };
  };
}
