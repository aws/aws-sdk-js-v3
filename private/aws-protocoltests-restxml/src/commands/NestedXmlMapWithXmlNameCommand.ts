// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { NestedXmlMapWithXmlNameRequest, NestedXmlMapWithXmlNameResponse } from "../models/models_0";
import { de_NestedXmlMapWithXmlNameCommand, se_NestedXmlMapWithXmlNameCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NestedXmlMapWithXmlNameCommand}.
 */
export interface NestedXmlMapWithXmlNameCommandInput extends NestedXmlMapWithXmlNameRequest {}
/**
 * @public
 *
 * The output of {@link NestedXmlMapWithXmlNameCommand}.
 */
export interface NestedXmlMapWithXmlNameCommandOutput extends NestedXmlMapWithXmlNameResponse, __MetadataBearer {}

/**
 * Nested Xml Maps with key/values with @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, NestedXmlMapWithXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, NestedXmlMapWithXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // NestedXmlMapWithXmlNameRequest
 *   nestedXmlMapWithXmlNameMap: { // NestedXmlMapWithXmlNameMap
 *     "<keys>": { // NestedXmlMapWithXmlNameInnerMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new NestedXmlMapWithXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // NestedXmlMapWithXmlNameResponse
 * //   nestedXmlMapWithXmlNameMap: { // NestedXmlMapWithXmlNameMap
 * //     "<keys>": { // NestedXmlMapWithXmlNameInnerMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param NestedXmlMapWithXmlNameCommandInput - {@link NestedXmlMapWithXmlNameCommandInput}
 * @returns {@link NestedXmlMapWithXmlNameCommandOutput}
 * @see {@link NestedXmlMapWithXmlNameCommandInput} for command's `input` shape.
 * @see {@link NestedXmlMapWithXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class NestedXmlMapWithXmlNameCommand extends $Command
  .classBuilder<
    NestedXmlMapWithXmlNameCommandInput,
    NestedXmlMapWithXmlNameCommandOutput,
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
  .s("RestXml", "NestedXmlMapWithXmlName", {})
  .n("RestXmlProtocolClient", "NestedXmlMapWithXmlNameCommand")
  .f(void 0, void 0)
  .ser(se_NestedXmlMapWithXmlNameCommand)
  .de(de_NestedXmlMapWithXmlNameCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NestedXmlMapWithXmlNameRequest;
      output: NestedXmlMapWithXmlNameResponse;
    };
    sdk: {
      input: NestedXmlMapWithXmlNameCommandInput;
      output: NestedXmlMapWithXmlNameCommandOutput;
    };
  };
}
