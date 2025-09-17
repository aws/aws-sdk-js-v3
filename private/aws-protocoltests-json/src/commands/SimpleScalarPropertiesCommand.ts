// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { SimpleScalarPropertiesInputOutput } from "../models/models_0";
import { de_SimpleScalarPropertiesCommand, se_SimpleScalarPropertiesCommand } from "../protocols/Aws_json1_1";

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
export interface SimpleScalarPropertiesCommandInput extends SimpleScalarPropertiesInputOutput {}
/**
 * @public
 *
 * The output of {@link SimpleScalarPropertiesCommand}.
 */
export interface SimpleScalarPropertiesCommandOutput extends SimpleScalarPropertiesInputOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, SimpleScalarPropertiesCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, SimpleScalarPropertiesCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * // import type { JsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-json";
 * const config = {}; // type is JsonProtocolClientConfig
 * const client = new JsonProtocolClient(config);
 * const input = { // SimpleScalarPropertiesInputOutput
 *   floatValue: Number("float"),
 *   doubleValue: Number("double"),
 * };
 * const command = new SimpleScalarPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // SimpleScalarPropertiesInputOutput
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
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 */
export class SimpleScalarPropertiesCommand extends $Command
  .classBuilder<
    SimpleScalarPropertiesCommandInput,
    SimpleScalarPropertiesCommandOutput,
    JsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JsonProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("JsonProtocol", "SimpleScalarProperties", {})
  .n("JsonProtocolClient", "SimpleScalarPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_SimpleScalarPropertiesCommand)
  .de(de_SimpleScalarPropertiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SimpleScalarPropertiesInputOutput;
      output: SimpleScalarPropertiesInputOutput;
    };
    sdk: {
      input: SimpleScalarPropertiesCommandInput;
      output: SimpleScalarPropertiesCommandOutput;
    };
  };
}
