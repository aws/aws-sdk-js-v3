// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { XmlEmptyMapsRequest, XmlEmptyMapsResponse } from "../models/models_0";
import { de_XmlEmptyMapsCommand, se_XmlEmptyMapsCommand } from "../protocols/Aws_restXml";
import type {
  RestXmlProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestXmlProtocolClient";

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
export interface XmlEmptyMapsCommandInput extends XmlEmptyMapsRequest {}
/**
 * @public
 *
 * The output of {@link XmlEmptyMapsCommand}.
 */
export interface XmlEmptyMapsCommandOutput extends XmlEmptyMapsResponse, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlEmptyMapsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlEmptyMapsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlEmptyMapsRequest
 *   myMap: { // XmlMapsInputOutputMap
 *     "<keys>": { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new XmlEmptyMapsCommand(input);
 * const response = await client.send(command);
 * // { // XmlEmptyMapsResponse
 * //   myMap: { // XmlMapsInputOutputMap
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
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class XmlEmptyMapsCommand extends $Command
  .classBuilder<
    XmlEmptyMapsCommandInput,
    XmlEmptyMapsCommandOutput,
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
  .s("RestXml", "XmlEmptyMaps", {})
  .n("RestXmlProtocolClient", "XmlEmptyMapsCommand")
  .f(void 0, void 0)
  .ser(se_XmlEmptyMapsCommand)
  .de(de_XmlEmptyMapsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlEmptyMapsRequest;
      output: XmlEmptyMapsResponse;
    };
    sdk: {
      input: XmlEmptyMapsCommandInput;
      output: XmlEmptyMapsCommandOutput;
    };
  };
}
