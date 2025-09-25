// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JsonMapsInputOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { JsonMaps } from "../schemas/schemas_2_Json";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link JsonMapsCommand}.
 */
export interface JsonMapsCommandInput extends JsonMapsInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonMapsCommand}.
 */
export interface JsonMapsCommandOutput extends JsonMapsInputOutput, __MetadataBearer {}

/**
 * The example tests basic map serialization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonMapsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonMapsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // JsonMapsInputOutput
 *   denseStructMap: { // DenseStructMap
 *     "<keys>": { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   },
 *   denseNumberMap: { // DenseNumberMap
 *     "<keys>": Number("int"),
 *   },
 *   denseBooleanMap: { // DenseBooleanMap
 *     "<keys>": true || false,
 *   },
 *   denseStringMap: { // DenseStringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   denseSetMap: { // DenseSetMap
 *     "<keys>": [ // StringSet
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new JsonMapsCommand(input);
 * const response = await client.send(command);
 * // { // JsonMapsInputOutput
 * //   denseStructMap: { // DenseStructMap
 * //     "<keys>": { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * //   denseNumberMap: { // DenseNumberMap
 * //     "<keys>": Number("int"),
 * //   },
 * //   denseBooleanMap: { // DenseBooleanMap
 * //     "<keys>": true || false,
 * //   },
 * //   denseStringMap: { // DenseStringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   denseSetMap: { // DenseSetMap
 * //     "<keys>": [ // StringSet
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param JsonMapsCommandInput - {@link JsonMapsCommandInput}
 * @returns {@link JsonMapsCommandOutput}
 * @see {@link JsonMapsCommandInput} for command's `input` shape.
 * @see {@link JsonMapsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class JsonMapsCommand extends $Command
  .classBuilder<
    JsonMapsCommandInput,
    JsonMapsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "JsonMaps", {})
  .n("RestJsonProtocolClient", "JsonMapsCommand")
  .sc(JsonMaps)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: JsonMapsInputOutput;
      output: JsonMapsInputOutput;
    };
    sdk: {
      input: JsonMapsCommandInput;
      output: JsonMapsCommandOutput;
    };
  };
}
