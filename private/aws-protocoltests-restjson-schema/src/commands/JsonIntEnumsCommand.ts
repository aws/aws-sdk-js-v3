// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JsonIntEnumsInputOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { JsonIntEnums } from "../schemas/schemas";

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
 * import { RestJsonProtocolClient, JsonIntEnumsCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonIntEnumsCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // JsonIntEnumsInputOutput
 *   integerEnum1: 1 || 2 || 3,
 *   integerEnum2: 1 || 2 || 3,
 *   integerEnum3: 1 || 2 || 3,
 *   integerEnumList: [ // IntegerEnumList
 *     1 || 2 || 3,
 *   ],
 *   integerEnumSet: [ // IntegerEnumSet
 *     1 || 2 || 3,
 *   ],
 *   integerEnumMap: { // IntegerEnumMap
 *     "<keys>": 1 || 2 || 3,
 *   },
 * };
 * const command = new JsonIntEnumsCommand(input);
 * const response = await client.send(command);
 * // { // JsonIntEnumsInputOutput
 * //   integerEnum1: 1 || 2 || 3,
 * //   integerEnum2: 1 || 2 || 3,
 * //   integerEnum3: 1 || 2 || 3,
 * //   integerEnumList: [ // IntegerEnumList
 * //     1 || 2 || 3,
 * //   ],
 * //   integerEnumSet: [ // IntegerEnumSet
 * //     1 || 2 || 3,
 * //   ],
 * //   integerEnumMap: { // IntegerEnumMap
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
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class JsonIntEnumsCommand extends $Command
  .classBuilder<
    JsonIntEnumsCommandInput,
    JsonIntEnumsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "JsonIntEnums", {})
  .n("RestJsonProtocolClient", "JsonIntEnumsCommand")
  .f(void 0, void 0)
  .sc(JsonIntEnums)
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
