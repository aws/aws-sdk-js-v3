// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { RecursiveShapesRequest, RecursiveShapesResponse } from "../models/models_0";
import { de_RecursiveShapesCommand, se_RecursiveShapesCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RecursiveShapesCommand}.
 */
export interface RecursiveShapesCommandInput extends RecursiveShapesRequest {}
/**
 * @public
 *
 * The output of {@link RecursiveShapesCommand}.
 */
export interface RecursiveShapesCommandOutput extends RecursiveShapesResponse, __MetadataBearer {}

/**
 * Recursive shapes
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, RecursiveShapesCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, RecursiveShapesCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // RecursiveShapesRequest
 *   nested: { // RecursiveShapesInputOutputNested1
 *     foo: "STRING_VALUE",
 *     nested: { // RecursiveShapesInputOutputNested2
 *       bar: "STRING_VALUE",
 *       recursiveMember: {
 *         foo: "STRING_VALUE",
 *         nested: {
 *           bar: "STRING_VALUE",
 *           recursiveMember: "<RecursiveShapesInputOutputNested1>",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new RecursiveShapesCommand(input);
 * const response = await client.send(command);
 * // { // RecursiveShapesResponse
 * //   nested: { // RecursiveShapesInputOutputNested1
 * //     foo: "STRING_VALUE",
 * //     nested: { // RecursiveShapesInputOutputNested2
 * //       bar: "STRING_VALUE",
 * //       recursiveMember: {
 * //         foo: "STRING_VALUE",
 * //         nested: {
 * //           bar: "STRING_VALUE",
 * //           recursiveMember: "<RecursiveShapesInputOutputNested1>",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RecursiveShapesCommandInput - {@link RecursiveShapesCommandInput}
 * @returns {@link RecursiveShapesCommandOutput}
 * @see {@link RecursiveShapesCommandInput} for command's `input` shape.
 * @see {@link RecursiveShapesCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 * @public
 */
export class RecursiveShapesCommand extends $Command
  .classBuilder<
    RecursiveShapesCommandInput,
    RecursiveShapesCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "RecursiveShapes", {})
  .n("RestXmlProtocolClient", "RecursiveShapesCommand")
  .f(void 0, void 0)
  .ser(se_RecursiveShapesCommand)
  .de(de_RecursiveShapesCommand)
  .build() {}
