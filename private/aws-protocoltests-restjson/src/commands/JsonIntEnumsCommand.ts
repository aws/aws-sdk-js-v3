// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { JsonIntEnumsInputOutput } from "../models/models_0";
import { de_JsonIntEnumsCommand, se_JsonIntEnumsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, JsonIntEnumsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonIntEnumsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "JsonIntEnums", {})
  .n("RestJsonProtocolClient", "JsonIntEnumsCommand")
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
