// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FlattenedXmlMapWithXmlNameOutput } from "../models/models_0";
import { de_FlattenedXmlMapWithXmlNameCommand, se_FlattenedXmlMapWithXmlNameCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link FlattenedXmlMapWithXmlNameCommand}.
 */
export interface FlattenedXmlMapWithXmlNameCommandInput {}
/**
 * @public
 *
 * The output of {@link FlattenedXmlMapWithXmlNameCommand}.
 */
export interface FlattenedXmlMapWithXmlNameCommandOutput extends FlattenedXmlMapWithXmlNameOutput, __MetadataBearer {}

/**
 * Flattened maps with @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, FlattenedXmlMapWithXmlNameCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, FlattenedXmlMapWithXmlNameCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new FlattenedXmlMapWithXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // FlattenedXmlMapWithXmlNameOutput
 * //   myMap: { // FlattenedXmlMapWithXmlNameOutputMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param FlattenedXmlMapWithXmlNameCommandInput - {@link FlattenedXmlMapWithXmlNameCommandInput}
 * @returns {@link FlattenedXmlMapWithXmlNameCommandOutput}
 * @see {@link FlattenedXmlMapWithXmlNameCommandInput} for command's `input` shape.
 * @see {@link FlattenedXmlMapWithXmlNameCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class FlattenedXmlMapWithXmlNameCommand extends $Command
  .classBuilder<
    FlattenedXmlMapWithXmlNameCommandInput,
    FlattenedXmlMapWithXmlNameCommandOutput,
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
  .s("AwsQuery", "FlattenedXmlMapWithXmlName", {})
  .n("QueryProtocolClient", "FlattenedXmlMapWithXmlNameCommand")
  .f(void 0, void 0)
  .ser(se_FlattenedXmlMapWithXmlNameCommand)
  .de(de_FlattenedXmlMapWithXmlNameCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: FlattenedXmlMapWithXmlNameOutput;
    };
    sdk: {
      input: FlattenedXmlMapWithXmlNameCommandInput;
      output: FlattenedXmlMapWithXmlNameCommandOutput;
    };
  };
}
