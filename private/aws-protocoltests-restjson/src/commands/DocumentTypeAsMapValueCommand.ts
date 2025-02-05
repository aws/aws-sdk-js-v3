// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocumentTypeAsMapValueInputOutput } from "../models/models_0";
import { de_DocumentTypeAsMapValueCommand, se_DocumentTypeAsMapValueCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DocumentTypeAsMapValueCommand}.
 */
export interface DocumentTypeAsMapValueCommandInput extends DocumentTypeAsMapValueInputOutput {}
/**
 * @public
 *
 * The output of {@link DocumentTypeAsMapValueCommand}.
 */
export interface DocumentTypeAsMapValueCommandOutput extends DocumentTypeAsMapValueInputOutput, __MetadataBearer {}

/**
 * This example serializes documents as the value of maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, DocumentTypeAsMapValueCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, DocumentTypeAsMapValueCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // DocumentTypeAsMapValueInputOutput
 *   docValuedMap: { // DocumentValuedMap
 *     "<keys>": "DOCUMENT_VALUE",
 *   },
 * };
 * const command = new DocumentTypeAsMapValueCommand(input);
 * const response = await client.send(command);
 * // { // DocumentTypeAsMapValueInputOutput
 * //   docValuedMap: { // DocumentValuedMap
 * //     "<keys>": "DOCUMENT_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DocumentTypeAsMapValueCommandInput - {@link DocumentTypeAsMapValueCommandInput}
 * @returns {@link DocumentTypeAsMapValueCommandOutput}
 * @see {@link DocumentTypeAsMapValueCommandInput} for command's `input` shape.
 * @see {@link DocumentTypeAsMapValueCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 * @public
 */
export class DocumentTypeAsMapValueCommand extends $Command
  .classBuilder<
    DocumentTypeAsMapValueCommandInput,
    DocumentTypeAsMapValueCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "DocumentTypeAsMapValue", {})
  .n("RestJsonProtocolClient", "DocumentTypeAsMapValueCommand")
  .f(void 0, void 0)
  .ser(se_DocumentTypeAsMapValueCommand)
  .de(de_DocumentTypeAsMapValueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DocumentTypeAsMapValueInputOutput;
      output: DocumentTypeAsMapValueInputOutput;
    };
    sdk: {
      input: DocumentTypeAsMapValueCommandInput;
      output: DocumentTypeAsMapValueCommandOutput;
    };
  };
}
