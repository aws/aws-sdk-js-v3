// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { XmlMapsXmlNameOutput } from "../models/models_0";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import { XmlMapsXmlName } from "../schemas/schemas_6_Maps";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlMapsXmlNameCommand}.
 */
export interface XmlMapsXmlNameCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlMapsXmlNameCommand}.
 */
export interface XmlMapsXmlNameCommandOutput extends XmlMapsXmlNameOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlMapsXmlNameCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, XmlMapsXmlNameCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new XmlMapsXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // XmlMapsXmlNameOutput
 * //   myMap: { // XmlMapsXmlNameOutputMap
 * //     "<keys>": { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlMapsXmlNameCommandInput - {@link XmlMapsXmlNameCommandInput}
 * @returns {@link XmlMapsXmlNameCommandOutput}
 * @see {@link XmlMapsXmlNameCommandInput} for command's `input` shape.
 * @see {@link XmlMapsXmlNameCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 */
export class XmlMapsXmlNameCommand extends $Command
  .classBuilder<
    XmlMapsXmlNameCommandInput,
    XmlMapsXmlNameCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsQuery", "XmlMapsXmlName", {})
  .n("QueryProtocolClient", "XmlMapsXmlNameCommand")
  .sc(XmlMapsXmlName)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: XmlMapsXmlNameOutput;
    };
    sdk: {
      input: XmlMapsXmlNameCommandInput;
      output: XmlMapsXmlNameCommandOutput;
    };
  };
}
