// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { XmlMapsOutput } from "../models/models_0";
import { de_XmlMapsCommand, se_XmlMapsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlMapsCommand}.
 */
export interface XmlMapsCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlMapsCommand}.
 */
export interface XmlMapsCommandOutput extends XmlMapsOutput, __MetadataBearer {}

/**
 * The example tests basic map serialization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlMapsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, XmlMapsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new XmlMapsCommand(input);
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
 * @param XmlMapsCommandInput - {@link XmlMapsCommandInput}
 * @returns {@link XmlMapsCommandOutput}
 * @see {@link XmlMapsCommandInput} for command's `input` shape.
 * @see {@link XmlMapsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class XmlMapsCommand extends $Command
  .classBuilder<
    XmlMapsCommandInput,
    XmlMapsCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("AwsQuery", "XmlMaps", {})
  .n("QueryProtocolClient", "XmlMapsCommand")
  .f(void 0, void 0)
  .ser(se_XmlMapsCommand)
  .de(de_XmlMapsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: XmlMapsOutput;
    };
    sdk: {
      input: XmlMapsCommandInput;
      output: XmlMapsCommandOutput;
    };
  };
}
