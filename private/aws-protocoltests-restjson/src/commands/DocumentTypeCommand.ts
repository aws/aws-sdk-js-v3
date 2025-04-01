// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocumentTypeInputOutput } from "../models/models_0";
import { de_DocumentTypeCommand, se_DocumentTypeCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DocumentTypeCommand}.
 */
export interface DocumentTypeCommandInput extends DocumentTypeInputOutput {}
/**
 * @public
 *
 * The output of {@link DocumentTypeCommand}.
 */
export interface DocumentTypeCommandOutput extends DocumentTypeInputOutput, __MetadataBearer {}

/**
 * This example serializes a document as part of the payload.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, DocumentTypeCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, DocumentTypeCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // DocumentTypeInputOutput
 *   stringValue: "STRING_VALUE",
 *   documentValue: "DOCUMENT_VALUE",
 * };
 * const command = new DocumentTypeCommand(input);
 * const response = await client.send(command);
 * // { // DocumentTypeInputOutput
 * //   stringValue: "STRING_VALUE",
 * //   documentValue: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param DocumentTypeCommandInput - {@link DocumentTypeCommandInput}
 * @returns {@link DocumentTypeCommandOutput}
 * @see {@link DocumentTypeCommandInput} for command's `input` shape.
 * @see {@link DocumentTypeCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class DocumentTypeCommand extends $Command
  .classBuilder<
    DocumentTypeCommandInput,
    DocumentTypeCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "DocumentType", {})
  .n("RestJsonProtocolClient", "DocumentTypeCommand")
  .f(void 0, void 0)
  .ser(se_DocumentTypeCommand)
  .de(de_DocumentTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DocumentTypeInputOutput;
      output: DocumentTypeInputOutput;
    };
    sdk: {
      input: DocumentTypeCommandInput;
      output: DocumentTypeCommandOutput;
    };
  };
}
