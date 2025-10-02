// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { EmptyInputAndEmptyOutputInput, EmptyInputAndEmptyOutputOutput } from "../models/models_0";
import { de_EmptyInputAndEmptyOutputCommand, se_EmptyInputAndEmptyOutputCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EmptyInputAndEmptyOutputCommand}.
 */
export interface EmptyInputAndEmptyOutputCommandInput extends EmptyInputAndEmptyOutputInput {}
/**
 * @public
 *
 * The output of {@link EmptyInputAndEmptyOutputCommand}.
 */
export interface EmptyInputAndEmptyOutputCommandOutput extends EmptyInputAndEmptyOutputOutput, __MetadataBearer {}

/**
 * The example tests how requests and responses are serialized when there's
 * no request or response payload because the operation has an empty input
 * and empty output structure that reuses the same shape. While this should
 * be rare, code generators must support this.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, EmptyInputAndEmptyOutputCommand } from "@aws-sdk/aws-protocoltests-json-10"; // ES Modules import
 * // const { JSONRPC10Client, EmptyInputAndEmptyOutputCommand } = require("@aws-sdk/aws-protocoltests-json-10"); // CommonJS import
 * // import type { JSONRPC10ClientConfig } from "@aws-sdk/aws-protocoltests-json-10";
 * const config = {}; // type is JSONRPC10ClientConfig
 * const client = new JSONRPC10Client(config);
 * const input = {};
 * const command = new EmptyInputAndEmptyOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EmptyInputAndEmptyOutputCommandInput - {@link EmptyInputAndEmptyOutputCommandInput}
 * @returns {@link EmptyInputAndEmptyOutputCommandOutput}
 * @see {@link EmptyInputAndEmptyOutputCommandInput} for command's `input` shape.
 * @see {@link EmptyInputAndEmptyOutputCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 *
 * @public
 */
export class EmptyInputAndEmptyOutputCommand extends $Command
  .classBuilder<
    EmptyInputAndEmptyOutputCommandInput,
    EmptyInputAndEmptyOutputCommandOutput,
    JSONRPC10ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JSONRPC10ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("JsonRpc10", "EmptyInputAndEmptyOutput", {})
  .n("JSONRPC10Client", "EmptyInputAndEmptyOutputCommand")
  .f(void 0, void 0)
  .ser(se_EmptyInputAndEmptyOutputCommand)
  .de(de_EmptyInputAndEmptyOutputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EmptyInputAndEmptyOutputCommandInput;
      output: EmptyInputAndEmptyOutputCommandOutput;
    };
  };
}
