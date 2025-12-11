// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { NestedXmlMapsRequest, NestedXmlMapsResponse } from "../models/models_0";
import type {
  RestXmlProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestXmlProtocolClient";
import { NestedXmlMaps } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NestedXmlMapsCommand}.
 */
export interface NestedXmlMapsCommandInput extends NestedXmlMapsRequest {}
/**
 * @public
 *
 * The output of {@link NestedXmlMapsCommand}.
 */
export interface NestedXmlMapsCommandOutput extends NestedXmlMapsResponse, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, NestedXmlMapsCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, NestedXmlMapsCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // NestedXmlMapsRequest
 *   nestedMap: { // NestedMap
 *     "<keys>": { // FooEnumMap
 *       "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 *     },
 *   },
 *   flatNestedMap: {
 *     "<keys>": {
 *       "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 *     },
 *   },
 * };
 * const command = new NestedXmlMapsCommand(input);
 * const response = await client.send(command);
 * // { // NestedXmlMapsResponse
 * //   nestedMap: { // NestedMap
 * //     "<keys>": { // FooEnumMap
 * //       "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 * //     },
 * //   },
 * //   flatNestedMap: {
 * //     "<keys>": {
 * //       "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param NestedXmlMapsCommandInput - {@link NestedXmlMapsCommandInput}
 * @returns {@link NestedXmlMapsCommandOutput}
 * @see {@link NestedXmlMapsCommandInput} for command's `input` shape.
 * @see {@link NestedXmlMapsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class NestedXmlMapsCommand extends $Command
  .classBuilder<
    NestedXmlMapsCommandInput,
    NestedXmlMapsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "NestedXmlMaps", {})
  .n("RestXmlProtocolClient", "NestedXmlMapsCommand")
  .sc(NestedXmlMaps)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NestedXmlMapsRequest;
      output: NestedXmlMapsResponse;
    };
    sdk: {
      input: NestedXmlMapsCommandInput;
      output: NestedXmlMapsCommandOutput;
    };
  };
}
