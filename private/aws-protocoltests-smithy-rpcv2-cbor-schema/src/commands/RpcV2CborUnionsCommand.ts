// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RpcV2CborUnionInputOutput } from "../models/models_0";
import { RpcV2CborUnions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RpcV2CborUnionsCommand}.
 */
export interface RpcV2CborUnionsCommandInput extends RpcV2CborUnionInputOutput {}
/**
 * @public
 *
 * The output of {@link RpcV2CborUnionsCommand}.
 */
export interface RpcV2CborUnionsCommandOutput extends RpcV2CborUnionInputOutput, __MetadataBearer {}

/**
 * This operation uses unions for inputs and outputs.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, RpcV2CborUnionsCommand } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"; // ES Modules import
 * // const { RpcV2ProtocolClient, RpcV2CborUnionsCommand } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"); // CommonJS import
 * // import type { RpcV2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema";
 * const config = {}; // type is RpcV2ProtocolClientConfig
 * const client = new RpcV2ProtocolClient(config);
 * const input = { // RpcV2CborUnionInputOutput
 *   contents: { // RpcV2CborUnion Union: only one key present
 *     stringValue: "STRING_VALUE",
 *     unionValue: { // RpcV2CborNestedUnion Union: only one key present
 *       stringValue: "STRING_VALUE",
 *     },
 *   },
 *   otherValue: "STRING_VALUE",
 * };
 * const command = new RpcV2CborUnionsCommand(input);
 * const response = await client.send(command);
 * // { // RpcV2CborUnionInputOutput
 * //   contents: { // RpcV2CborUnion Union: only one key present
 * //     stringValue: "STRING_VALUE",
 * //     unionValue: { // RpcV2CborNestedUnion Union: only one key present
 * //       stringValue: "STRING_VALUE",
 * //     },
 * //   },
 * //   otherValue: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RpcV2CborUnionsCommandInput - {@link RpcV2CborUnionsCommandInput}
 * @returns {@link RpcV2CborUnionsCommandOutput}
 * @see {@link RpcV2CborUnionsCommandInput} for command's `input` shape.
 * @see {@link RpcV2CborUnionsCommandOutput} for command's `response` shape.
 * @see {@link RpcV2ProtocolClientResolvedConfig | config} for RpcV2ProtocolClient's `config` shape.
 *
 * @throws {@link RpcV2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from RpcV2Protocol service.</p>
 *
 *
 * @public
 */
export class RpcV2CborUnionsCommand extends command<RpcV2CborUnionsCommandInput, RpcV2CborUnionsCommandOutput>(
  _ep0,
  _mw0,
  "RpcV2CborUnions",
  RpcV2CborUnions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RpcV2CborUnionInputOutput;
      output: RpcV2CborUnionInputOutput;
    };
    sdk: {
      input: RpcV2CborUnionsCommandInput;
      output: RpcV2CborUnionsCommandOutput;
    };
  };
}
