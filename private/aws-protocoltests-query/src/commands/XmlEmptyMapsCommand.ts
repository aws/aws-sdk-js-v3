// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { getSerdePlugin } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { XmlMapsOutput } from "../models/models_0";
import { de_XmlEmptyMapsCommand, se_XmlEmptyMapsCommand } from "../protocols/Aws_query";
import type { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link XmlEmptyMapsCommand}.
 */
export interface XmlEmptyMapsCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlEmptyMapsCommand}.
 */
export interface XmlEmptyMapsCommandOutput extends XmlMapsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlEmptyMapsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, XmlEmptyMapsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new XmlEmptyMapsCommand(input);
 * const response = await client.send(command);
 * // { // XmlMapsOutput
 * //   myMap: { // XmlMapsOutputMap
 * //     "<keys>": { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlEmptyMapsCommandInput - {@link XmlEmptyMapsCommandInput}
 * @returns {@link XmlEmptyMapsCommandOutput}
 * @see {@link XmlEmptyMapsCommandInput} for command's `input` shape.
 * @see {@link XmlEmptyMapsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 */
export class XmlEmptyMapsCommand extends $Command
  .classBuilder<
    XmlEmptyMapsCommandInput,
    XmlEmptyMapsCommandOutput,
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
  .s("AwsQuery", "XmlEmptyMaps", {})
  .n("QueryProtocolClient", "XmlEmptyMapsCommand")
  .f(void 0, void 0)
  .ser(se_XmlEmptyMapsCommand)
  .de(de_XmlEmptyMapsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: XmlMapsOutput;
    };
    sdk: {
      input: XmlEmptyMapsCommandInput;
      output: XmlEmptyMapsCommandOutput;
    };
  };
}
