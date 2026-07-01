// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { Float16Output } from "../models/models_0";
import { Float16$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link Float16Command}.
 */
export interface Float16CommandInput {}
/**
 * @public
 *
 * The output of {@link Float16Command}.
 */
export interface Float16CommandOutput extends Float16Output, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RpcV2ProtocolClient, Float16Command } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"; // ES Modules import
 * // const { RpcV2ProtocolClient, Float16Command } = require("@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema"); // CommonJS import
 * // import type { RpcV2ProtocolClientConfig } from "@aws-sdk/aws-protocoltests-smithy-rpcv2-cbor-schema";
 * const config = {}; // type is RpcV2ProtocolClientConfig
 * const client = new RpcV2ProtocolClient(config);
 * const input = {};
 * const command = new Float16Command(input);
 * const response = await client.send(command);
 * // { // Float16Output
 * //   value: Number("double"),
 * // };
 *
 * ```
 *
 * @param Float16CommandInput - {@link Float16CommandInput}
 * @returns {@link Float16CommandOutput}
 * @see {@link Float16CommandInput} for command's `input` shape.
 * @see {@link Float16CommandOutput} for command's `response` shape.
 * @see {@link RpcV2ProtocolClientResolvedConfig | config} for RpcV2ProtocolClient's `config` shape.
 *
 * @throws {@link RpcV2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from RpcV2Protocol service.</p>
 *
 *
 */
export class Float16Command extends command<Float16CommandInput, Float16CommandOutput>(
  _ep0,
  _mw0,
  "Float16",
  Float16$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: Float16Output;
    };
    sdk: {
      input: Float16CommandInput;
      output: Float16CommandOutput;
    };
  };
}
