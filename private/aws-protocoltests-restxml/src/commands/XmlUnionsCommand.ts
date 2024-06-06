// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { XmlUnionsRequest, XmlUnionsResponse } from "../models/models_0";
import { de_XmlUnionsCommand, se_XmlUnionsCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link XmlUnionsCommand}.
 */
export interface XmlUnionsCommandInput extends XmlUnionsRequest {}
/**
 * @public
 *
 * The output of {@link XmlUnionsCommand}.
 */
export interface XmlUnionsCommandOutput extends XmlUnionsResponse, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlUnionsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlUnionsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlUnionsRequest
 *   unionValue: { // XmlUnionShape Union: only one key present
 *     stringValue: "STRING_VALUE",
 *     booleanValue: true || false,
 *     byteValue: 0, // BYTE_VALUE
 *     shortValue: Number("short"),
 *     integerValue: Number("int"),
 *     longValue: Number("long"),
 *     floatValue: Number("float"),
 *     doubleValue: Number("double"),
 *     unionValue: {//  Union: only one key present
 *       stringValue: "STRING_VALUE",
 *       booleanValue: true || false,
 *       byteValue: 0, // BYTE_VALUE
 *       shortValue: Number("short"),
 *       integerValue: Number("int"),
 *       longValue: Number("long"),
 *       floatValue: Number("float"),
 *       doubleValue: Number("double"),
 *       unionValue: "<XmlUnionShape>",
 *       structValue: { // XmlNestedUnionStruct
 *         stringValue: "STRING_VALUE",
 *         booleanValue: true || false,
 *         byteValue: 0, // BYTE_VALUE
 *         shortValue: Number("short"),
 *         integerValue: Number("int"),
 *         longValue: Number("long"),
 *         floatValue: Number("float"),
 *         doubleValue: Number("double"),
 *       },
 *     },
 *     structValue: {
 *       stringValue: "STRING_VALUE",
 *       booleanValue: true || false,
 *       byteValue: 0, // BYTE_VALUE
 *       shortValue: Number("short"),
 *       integerValue: Number("int"),
 *       longValue: Number("long"),
 *       floatValue: Number("float"),
 *       doubleValue: Number("double"),
 *     },
 *   },
 * };
 * const command = new XmlUnionsCommand(input);
 * const response = await client.send(command);
 * // { // XmlUnionsResponse
 * //   unionValue: { // XmlUnionShape Union: only one key present
 * //     stringValue: "STRING_VALUE",
 * //     booleanValue: true || false,
 * //     byteValue: 0, // BYTE_VALUE
 * //     shortValue: Number("short"),
 * //     integerValue: Number("int"),
 * //     longValue: Number("long"),
 * //     floatValue: Number("float"),
 * //     doubleValue: Number("double"),
 * //     unionValue: {//  Union: only one key present
 * //       stringValue: "STRING_VALUE",
 * //       booleanValue: true || false,
 * //       byteValue: 0, // BYTE_VALUE
 * //       shortValue: Number("short"),
 * //       integerValue: Number("int"),
 * //       longValue: Number("long"),
 * //       floatValue: Number("float"),
 * //       doubleValue: Number("double"),
 * //       unionValue: "<XmlUnionShape>",
 * //       structValue: { // XmlNestedUnionStruct
 * //         stringValue: "STRING_VALUE",
 * //         booleanValue: true || false,
 * //         byteValue: 0, // BYTE_VALUE
 * //         shortValue: Number("short"),
 * //         integerValue: Number("int"),
 * //         longValue: Number("long"),
 * //         floatValue: Number("float"),
 * //         doubleValue: Number("double"),
 * //       },
 * //     },
 * //     structValue: {
 * //       stringValue: "STRING_VALUE",
 * //       booleanValue: true || false,
 * //       byteValue: 0, // BYTE_VALUE
 * //       shortValue: Number("short"),
 * //       integerValue: Number("int"),
 * //       longValue: Number("long"),
 * //       floatValue: Number("float"),
 * //       doubleValue: Number("double"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlUnionsCommandInput - {@link XmlUnionsCommandInput}
 * @returns {@link XmlUnionsCommandOutput}
 * @see {@link XmlUnionsCommandInput} for command's `input` shape.
 * @see {@link XmlUnionsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class XmlUnionsCommand extends $Command
  .classBuilder<
    XmlUnionsCommandInput,
    XmlUnionsCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "XmlUnions", {})
  .n("RestXmlProtocolClient", "XmlUnionsCommand")
  .f(void 0, void 0)
  .ser(se_XmlUnionsCommand)
  .de(de_XmlUnionsCommand)
  .build() {}
