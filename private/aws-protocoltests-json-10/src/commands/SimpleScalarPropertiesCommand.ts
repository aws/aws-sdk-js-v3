// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import type { SimpleScalarPropertiesInput, SimpleScalarPropertiesOutput } from "../models/models_0";
import { de_SimpleScalarPropertiesCommand, se_SimpleScalarPropertiesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SimpleScalarPropertiesCommand}.
 */
export interface SimpleScalarPropertiesCommandInput extends SimpleScalarPropertiesInput {}
/**
 * @public
 *
 * The output of {@link SimpleScalarPropertiesCommand}.
 */
export interface SimpleScalarPropertiesCommandOutput extends SimpleScalarPropertiesOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, SimpleScalarPropertiesCommand } from "@aws-sdk/aws-protocoltests-json-10"; // ES Modules import
 * // const { JSONRPC10Client, SimpleScalarPropertiesCommand } = require("@aws-sdk/aws-protocoltests-json-10"); // CommonJS import
 * // import type { JSONRPC10ClientConfig } from "@aws-sdk/aws-protocoltests-json-10";
 * const config = {}; // type is JSONRPC10ClientConfig
 * const client = new JSONRPC10Client(config);
 * const input = { // SimpleScalarPropertiesInput
 *   floatValue: Number("float"),
 *   doubleValue: Number("double"),
 * };
 * const command = new SimpleScalarPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // SimpleScalarPropertiesOutput
 * //   floatValue: Number("float"),
 * //   doubleValue: Number("double"),
 * // };
 *
 * ```
 *
 * @param SimpleScalarPropertiesCommandInput - {@link SimpleScalarPropertiesCommandInput}
 * @returns {@link SimpleScalarPropertiesCommandOutput}
 * @see {@link SimpleScalarPropertiesCommandInput} for command's `input` shape.
 * @see {@link SimpleScalarPropertiesCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 *
 */
export class SimpleScalarPropertiesCommand extends $Command
  .classBuilder<
    SimpleScalarPropertiesCommandInput,
    SimpleScalarPropertiesCommandOutput,
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
  .s("JsonRpc10", "SimpleScalarProperties", {})
  .n("JSONRPC10Client", "SimpleScalarPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_SimpleScalarPropertiesCommand)
  .de(de_SimpleScalarPropertiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SimpleScalarPropertiesInput;
      output: SimpleScalarPropertiesOutput;
    };
    sdk: {
      input: SimpleScalarPropertiesCommandInput;
      output: SimpleScalarPropertiesCommandOutput;
    };
  };
}
