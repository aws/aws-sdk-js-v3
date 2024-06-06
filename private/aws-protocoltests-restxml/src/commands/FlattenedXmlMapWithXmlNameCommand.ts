// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { FlattenedXmlMapWithXmlNameRequest, FlattenedXmlMapWithXmlNameResponse } from "../models/models_0";
import { de_FlattenedXmlMapWithXmlNameCommand, se_FlattenedXmlMapWithXmlNameCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

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
export interface FlattenedXmlMapWithXmlNameCommandInput extends FlattenedXmlMapWithXmlNameRequest {}
/**
 * @public
 *
 * The output of {@link FlattenedXmlMapWithXmlNameCommand}.
 */
export interface FlattenedXmlMapWithXmlNameCommandOutput extends FlattenedXmlMapWithXmlNameResponse, __MetadataBearer {}

/**
 * Flattened maps with @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, FlattenedXmlMapWithXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, FlattenedXmlMapWithXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // FlattenedXmlMapWithXmlNameRequest
 *   myMap: { // FlattenedXmlMapWithXmlNameInputOutputMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new FlattenedXmlMapWithXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // FlattenedXmlMapWithXmlNameResponse
 * //   myMap: { // FlattenedXmlMapWithXmlNameInputOutputMap
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
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 * @public
 */
export class FlattenedXmlMapWithXmlNameCommand extends $Command
  .classBuilder<
    FlattenedXmlMapWithXmlNameCommandInput,
    FlattenedXmlMapWithXmlNameCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "FlattenedXmlMapWithXmlName", {})
  .n("RestXmlProtocolClient", "FlattenedXmlMapWithXmlNameCommand")
  .f(void 0, void 0)
  .ser(se_FlattenedXmlMapWithXmlNameCommand)
  .de(de_FlattenedXmlMapWithXmlNameCommand)
  .build() {}
