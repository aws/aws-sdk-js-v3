// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FractionalSecondsOutput } from "../models/models_0";
import { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RpcV2ProtocolClient";
import { FractionalSeconds } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link FractionalSecondsCommand}.
 */
export interface FractionalSecondsCommandInput {}
/**
 * @public
 *
 * The output of {@link FractionalSecondsCommand}.
 */
export interface FractionalSecondsCommandOutput extends FractionalSecondsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, FractionalSecondsCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"; // ES Modules import
 * // const { RpcV2ProtocolClient, FractionalSecondsCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"); // CommonJS import
 * // import type { RpcV2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema";
 * const config = {}; // type is RpcV2ProtocolClientConfig
 * const client = new RpcV2ProtocolClient(config);
 * const input = {};
 * const command = new FractionalSecondsCommand(input);
 * const response = await client.send(command);
 * // { // FractionalSecondsOutput
 * //   datetime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param FractionalSecondsCommandInput - {@link FractionalSecondsCommandInput}
 * @returns {@link FractionalSecondsCommandOutput}
 * @see {@link FractionalSecondsCommandInput} for command's `input` shape.
 * @see {@link FractionalSecondsCommandOutput} for command's `response` shape.
 * @see {@link RpcV2ProtocolClientResolvedConfig | config} for RpcV2ProtocolClient's `config` shape.
 *
 * @throws {@link RpcV2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from RpcV2Protocol service.</p>
 *
 *
 */
export class FractionalSecondsCommand extends $Command
  .classBuilder<
    FractionalSecondsCommandInput,
    FractionalSecondsCommandOutput,
    RpcV2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RpcV2ProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RpcV2Protocol", "FractionalSeconds", {})
  .n("RpcV2ProtocolClient", "FractionalSecondsCommand")
  .sc(FractionalSeconds)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: FractionalSecondsOutput;
    };
    sdk: {
      input: FractionalSecondsCommandInput;
      output: FractionalSecondsCommandOutput;
    };
  };
}
