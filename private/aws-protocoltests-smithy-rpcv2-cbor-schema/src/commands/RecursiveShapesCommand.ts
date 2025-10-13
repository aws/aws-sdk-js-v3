// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RecursiveShapesInputOutput } from "../models/models_0";
import { RpcV2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RpcV2ProtocolClient";
import { RecursiveShapes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RecursiveShapesCommand}.
 */
export interface RecursiveShapesCommandInput extends RecursiveShapesInputOutput {}
/**
 * @public
 *
 * The output of {@link RecursiveShapesCommand}.
 */
export interface RecursiveShapesCommandOutput extends RecursiveShapesInputOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, RecursiveShapesCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"; // ES Modules import
 * // const { RpcV2ProtocolClient, RecursiveShapesCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"); // CommonJS import
 * // import type { RpcV2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema";
 * const config = {}; // type is RpcV2ProtocolClientConfig
 * const client = new RpcV2ProtocolClient(config);
 * const input = { // RecursiveShapesInputOutput
 *   nested: { // RecursiveShapesInputOutputNested1
 *     foo: "STRING_VALUE",
 *     nested: { // RecursiveShapesInputOutputNested2
 *       bar: "STRING_VALUE",
 *       recursiveMember: {
 *         foo: "STRING_VALUE",
 *         nested: {
 *           bar: "STRING_VALUE",
 *           recursiveMember: "<RecursiveShapesInputOutputNested1>",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new RecursiveShapesCommand(input);
 * const response = await client.send(command);
 * // { // RecursiveShapesInputOutput
 * //   nested: { // RecursiveShapesInputOutputNested1
 * //     foo: "STRING_VALUE",
 * //     nested: { // RecursiveShapesInputOutputNested2
 * //       bar: "STRING_VALUE",
 * //       recursiveMember: {
 * //         foo: "STRING_VALUE",
 * //         nested: {
 * //           bar: "STRING_VALUE",
 * //           recursiveMember: "<RecursiveShapesInputOutputNested1>",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RecursiveShapesCommandInput - {@link RecursiveShapesCommandInput}
 * @returns {@link RecursiveShapesCommandOutput}
 * @see {@link RecursiveShapesCommandInput} for command's `input` shape.
 * @see {@link RecursiveShapesCommandOutput} for command's `response` shape.
 * @see {@link RpcV2ProtocolClientResolvedConfig | config} for RpcV2ProtocolClient's `config` shape.
 *
 * @throws {@link RpcV2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from RpcV2Protocol service.</p>
 *
 *
 */
export class RecursiveShapesCommand extends $Command
  .classBuilder<
    RecursiveShapesCommandInput,
    RecursiveShapesCommandOutput,
    RpcV2ProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RpcV2ProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RpcV2Protocol", "RecursiveShapes", {})
  .n("RpcV2ProtocolClient", "RecursiveShapesCommand")
  .sc(RecursiveShapes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RecursiveShapesInputOutput;
      output: RecursiveShapesInputOutput;
    };
    sdk: {
      input: RecursiveShapesCommandInput;
      output: RecursiveShapesCommandOutput;
    };
  };
}
