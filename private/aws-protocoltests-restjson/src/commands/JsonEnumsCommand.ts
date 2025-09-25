// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JsonEnumsInputOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { JsonEnums } from "../schemas/schemas_15_Json";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link JsonEnumsCommand}.
 */
export interface JsonEnumsCommandInput extends JsonEnumsInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonEnumsCommand}.
 */
export interface JsonEnumsCommandOutput extends JsonEnumsInputOutput, __MetadataBearer {}

/**
 * This example serializes enums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonEnumsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonEnumsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // JsonEnumsInputOutput
 *   fooEnum1: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   fooEnum2: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   fooEnum3: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   fooEnumList: [ // FooEnumList
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   fooEnumSet: [ // FooEnumSet
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   fooEnumMap: { // FooEnumMap
 *     "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 *   },
 * };
 * const command = new JsonEnumsCommand(input);
 * const response = await client.send(command);
 * // { // JsonEnumsInputOutput
 * //   fooEnum1: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   fooEnum2: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   fooEnum3: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   fooEnumList: [ // FooEnumList
 * //     "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   ],
 * //   fooEnumSet: [ // FooEnumSet
 * //     "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   ],
 * //   fooEnumMap: { // FooEnumMap
 * //     "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   },
 * // };
 *
 * ```
 *
 * @param JsonEnumsCommandInput - {@link JsonEnumsCommandInput}
 * @returns {@link JsonEnumsCommandOutput}
 * @see {@link JsonEnumsCommandInput} for command's `input` shape.
 * @see {@link JsonEnumsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class JsonEnumsCommand extends $Command
  .classBuilder<
    JsonEnumsCommandInput,
    JsonEnumsCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "JsonEnums", {})
  .n("RestJsonProtocolClient", "JsonEnumsCommand")
  .sc(JsonEnums)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: JsonEnumsInputOutput;
      output: JsonEnumsInputOutput;
    };
    sdk: {
      input: JsonEnumsCommandInput;
      output: JsonEnumsCommandOutput;
    };
  };
}
