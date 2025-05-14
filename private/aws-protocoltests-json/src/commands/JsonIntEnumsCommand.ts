// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { JsonIntEnumsInputOutput } from "../models/models_0";
import { de_JsonIntEnumsCommand, se_JsonIntEnumsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link JsonIntEnumsCommand}.
 */
export interface JsonIntEnumsCommandInput extends JsonIntEnumsInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonIntEnumsCommand}.
 */
export interface JsonIntEnumsCommandOutput extends JsonIntEnumsInputOutput, __MetadataBearer {}

/**
 * This example serializes intEnums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, JsonIntEnumsCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, JsonIntEnumsCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const input = { // JsonIntEnumsInputOutput
 *   intEnum1: 1 || 2 || 3,
 *   intEnum2: 1 || 2 || 3,
 *   intEnum3: 1 || 2 || 3,
 *   intEnumList: [ // IntegerEnumList
 *     1 || 2 || 3,
 *   ],
 *   intEnumSet: [ // IntegerEnumSet
 *     1 || 2 || 3,
 *   ],
 *   intEnumMap: { // IntegerEnumMap
 *     "<keys>": 1 || 2 || 3,
 *   },
 * };
 * const command = new JsonIntEnumsCommand(input);
 * const response = await client.send(command);
 * // { // JsonIntEnumsInputOutput
 * //   intEnum1: 1 || 2 || 3,
 * //   intEnum2: 1 || 2 || 3,
 * //   intEnum3: 1 || 2 || 3,
 * //   intEnumList: [ // IntegerEnumList
 * //     1 || 2 || 3,
 * //   ],
 * //   intEnumSet: [ // IntegerEnumSet
 * //     1 || 2 || 3,
 * //   ],
 * //   intEnumMap: { // IntegerEnumMap
 * //     "<keys>": 1 || 2 || 3,
 * //   },
 * // };
 *
 * ```
 *
 * @param JsonIntEnumsCommandInput - {@link JsonIntEnumsCommandInput}
 * @returns {@link JsonIntEnumsCommandOutput}
 * @see {@link JsonIntEnumsCommandInput} for command's `input` shape.
 * @see {@link JsonIntEnumsCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 * @public
 */
export class JsonIntEnumsCommand extends $Command
  .classBuilder<
    JsonIntEnumsCommandInput,
    JsonIntEnumsCommandOutput,
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
  .s("JsonProtocol", "JsonIntEnums", {})
  .n("JsonProtocolClient", "JsonIntEnumsCommand")
  .f(void 0, void 0)
  .ser(se_JsonIntEnumsCommand)
  .de(de_JsonIntEnumsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: JsonIntEnumsInputOutput;
      output: JsonIntEnumsInputOutput;
    };
    sdk: {
      input: JsonIntEnumsCommandInput;
      output: JsonIntEnumsCommandOutput;
    };
  };
}
