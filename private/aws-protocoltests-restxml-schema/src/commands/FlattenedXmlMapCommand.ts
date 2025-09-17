// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FlattenedXmlMapRequest, FlattenedXmlMapResponse } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { FlattenedXmlMap } from "../schemas/schemas_3_Xml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link FlattenedXmlMapCommand}.
 */
export interface FlattenedXmlMapCommandInput extends FlattenedXmlMapRequest {}
/**
 * @public
 *
 * The output of {@link FlattenedXmlMapCommand}.
 */
export interface FlattenedXmlMapCommandOutput extends FlattenedXmlMapResponse, __MetadataBearer {}

/**
 * Flattened maps
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, FlattenedXmlMapCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, FlattenedXmlMapCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // FlattenedXmlMapRequest
 *   myMap: { // FooEnumMap
 *     "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 *   },
 * };
 * const command = new FlattenedXmlMapCommand(input);
 * const response = await client.send(command);
 * // { // FlattenedXmlMapResponse
 * //   myMap: { // FooEnumMap
 * //     "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   },
 * // };
 *
 * ```
 *
 * @param FlattenedXmlMapCommandInput - {@link FlattenedXmlMapCommandInput}
 * @returns {@link FlattenedXmlMapCommandOutput}
 * @see {@link FlattenedXmlMapCommandInput} for command's `input` shape.
 * @see {@link FlattenedXmlMapCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class FlattenedXmlMapCommand extends $Command
  .classBuilder<
    FlattenedXmlMapCommandInput,
    FlattenedXmlMapCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "FlattenedXmlMap", {})
  .n("RestXmlProtocolClient", "FlattenedXmlMapCommand")
  .sc(FlattenedXmlMap)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: FlattenedXmlMapRequest;
      output: FlattenedXmlMapResponse;
    };
    sdk: {
      input: FlattenedXmlMapCommandInput;
      output: FlattenedXmlMapCommandOutput;
    };
  };
}
