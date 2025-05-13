// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FlattenedXmlMapRequest, FlattenedXmlMapResponse } from "../models/models_0";
import { de_FlattenedXmlMapCommand, se_FlattenedXmlMapCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

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
 * import { RestXmlProtocolClient, FlattenedXmlMapCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, FlattenedXmlMapCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestXml", "FlattenedXmlMap", {})
  .n("RestXmlProtocolClient", "FlattenedXmlMapCommand")
  .f(void 0, void 0)
  .ser(se_FlattenedXmlMapCommand)
  .de(de_FlattenedXmlMapCommand)
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
