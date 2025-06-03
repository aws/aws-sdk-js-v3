// smithy-typescript generated code
import { getCompressionPlugin } from "@smithy/middleware-compression";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { PutWithContentEncodingInput } from "../models/models_0";
import { PutWithContentEncoding } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutWithContentEncodingCommand}.
 */
export interface PutWithContentEncodingCommandInput extends PutWithContentEncodingInput {}
/**
 * @public
 *
 * The output of {@link PutWithContentEncodingCommand}.
 */
export interface PutWithContentEncodingCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, PutWithContentEncodingCommand } from "@aws-sdk/aws-protocoltests-json-10-schema"; // ES Modules import
 * // const { JSONRPC10Client, PutWithContentEncodingCommand } = require("@aws-sdk/aws-protocoltests-json-10-schema"); // CommonJS import
 * const client = new JSONRPC10Client(config);
 * const input = { // PutWithContentEncodingInput
 *   encoding: "STRING_VALUE",
 *   data: "STRING_VALUE",
 * };
 * const command = new PutWithContentEncodingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutWithContentEncodingCommandInput - {@link PutWithContentEncodingCommandInput}
 * @returns {@link PutWithContentEncodingCommandOutput}
 * @see {@link PutWithContentEncodingCommandInput} for command's `input` shape.
 * @see {@link PutWithContentEncodingCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 *
 */
export class PutWithContentEncodingCommand extends $Command
  .classBuilder<
    PutWithContentEncodingCommandInput,
    PutWithContentEncodingCommandOutput,
    JSONRPC10ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JSONRPC10ClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getCompressionPlugin(config, {
        encodings: ["gzip"],
      }),
    ];
  })
  .s("JsonRpc10", "PutWithContentEncoding", {})
  .n("JSONRPC10Client", "PutWithContentEncodingCommand")
  .f(void 0, void 0)
  .sc(PutWithContentEncoding)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutWithContentEncodingInput;
      output: {};
    };
    sdk: {
      input: PutWithContentEncodingCommandInput;
      output: PutWithContentEncodingCommandOutput;
    };
  };
}
