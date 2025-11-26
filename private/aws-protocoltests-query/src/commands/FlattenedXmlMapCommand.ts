// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FlattenedXmlMapOutput } from "../models/models_0";
import { de_FlattenedXmlMapCommand, se_FlattenedXmlMapCommand } from "../protocols/Aws_query";
import type { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

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
export interface FlattenedXmlMapCommandInput {}
/**
 * @public
 *
 * The output of {@link FlattenedXmlMapCommand}.
 */
export interface FlattenedXmlMapCommandOutput extends FlattenedXmlMapOutput, __MetadataBearer {}

/**
 * Flattened maps
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, FlattenedXmlMapCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, FlattenedXmlMapCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new FlattenedXmlMapCommand(input);
 * const response = await client.send(command);
 * // { // FlattenedXmlMapOutput
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
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class FlattenedXmlMapCommand extends $Command
  .classBuilder<
    FlattenedXmlMapCommandInput,
    FlattenedXmlMapCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsQuery", "FlattenedXmlMap", {})
  .n("QueryProtocolClient", "FlattenedXmlMapCommand")
  .f(void 0, void 0)
  .ser(se_FlattenedXmlMapCommand)
  .de(de_FlattenedXmlMapCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: FlattenedXmlMapOutput;
    };
    sdk: {
      input: FlattenedXmlMapCommandInput;
      output: FlattenedXmlMapCommandOutput;
    };
  };
}
