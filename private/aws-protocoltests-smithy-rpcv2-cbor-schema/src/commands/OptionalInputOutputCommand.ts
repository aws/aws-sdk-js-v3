// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SimpleStructure } from "../models/models_0";
import { OptionalInputOutput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { RpcV2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema";
 * const config = {}; // type is RpcV2ProtocolClientConfig
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
export class OptionalInputOutputCommand extends command<OptionalInputOutputCommandInput, OptionalInputOutputCommandOutput>(
  _ep0,
  _mw0,
  "OptionalInputOutput",
  OptionalInputOutput$
) {
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
