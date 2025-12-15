// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { XmlMapsOutput } from "../models/models_0";
import type { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import { XmlEmptyMaps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * import { QueryProtocolClient, XmlEmptyMapsCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, XmlEmptyMapsCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsQuery", "XmlEmptyMaps", {})
  .n("QueryProtocolClient", "XmlEmptyMapsCommand")
  .sc(XmlEmptyMaps$)
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
