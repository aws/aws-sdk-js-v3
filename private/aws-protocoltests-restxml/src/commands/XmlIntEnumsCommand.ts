// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { XmlIntEnumsRequest, XmlIntEnumsResponse } from "../models/models_0";
import { de_XmlIntEnumsCommand, se_XmlIntEnumsCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlIntEnumsCommand}.
 */
export interface XmlIntEnumsCommandInput extends XmlIntEnumsRequest {}
/**
 * @public
 *
 * The output of {@link XmlIntEnumsCommand}.
 */
export interface XmlIntEnumsCommandOutput extends XmlIntEnumsResponse, __MetadataBearer {}

/**
 * This example serializes enums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlIntEnumsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlIntEnumsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlIntEnumsRequest
 *   intEnum1: 1 || 2 || 3,
 *   intEnum2: 1 || 2 || 3,
 *   intEnum3: 1 || 2 || 3,
 *   intEnumList: [ // IntegerEnumList
 *     1 || 2 || 3,
 *   ],
 *   intEnumSet: [ // IntegerEnumSet
 *     1 || 2 || 3,
 *   ],
 *   intEnumMap: { // IntegerEnumMap
 *     "<keys>": 1 || 2 || 3,
 *   },
 * };
 * const command = new XmlIntEnumsCommand(input);
 * const response = await client.send(command);
 * // { // XmlIntEnumsResponse
 * //   intEnum1: 1 || 2 || 3,
 * //   intEnum2: 1 || 2 || 3,
 * //   intEnum3: 1 || 2 || 3,
 * //   intEnumList: [ // IntegerEnumList
 * //     1 || 2 || 3,
 * //   ],
 * //   intEnumSet: [ // IntegerEnumSet
 * //     1 || 2 || 3,
 * //   ],
 * //   intEnumMap: { // IntegerEnumMap
 * //     "<keys>": 1 || 2 || 3,
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlIntEnumsCommandInput - {@link XmlIntEnumsCommandInput}
 * @returns {@link XmlIntEnumsCommandOutput}
 * @see {@link XmlIntEnumsCommandInput} for command's `input` shape.
 * @see {@link XmlIntEnumsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class XmlIntEnumsCommand extends $Command
  .classBuilder<
    XmlIntEnumsCommandInput,
    XmlIntEnumsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "XmlIntEnums", {})
  .n("RestXmlProtocolClient", "XmlIntEnumsCommand")
  .f(void 0, void 0)
  .ser(se_XmlIntEnumsCommand)
  .de(de_XmlIntEnumsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlIntEnumsRequest;
      output: XmlIntEnumsResponse;
    };
    sdk: {
      input: XmlIntEnumsCommandInput;
      output: XmlIntEnumsCommandOutput;
    };
  };
}
