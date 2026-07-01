// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DocumentTypeAsPayloadInputOutput } from "../models/models_0";
import { DocumentTypeAsPayload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DocumentTypeAsPayloadCommand}.
 */
export interface DocumentTypeAsPayloadCommandInput extends DocumentTypeAsPayloadInputOutput {}
/**
 * @public
 *
 * The output of {@link DocumentTypeAsPayloadCommand}.
 */
export interface DocumentTypeAsPayloadCommandOutput extends DocumentTypeAsPayloadInputOutput, __MetadataBearer {}

/**
 * This example serializes a document as the entire HTTP payload.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, DocumentTypeAsPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, DocumentTypeAsPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // DocumentTypeAsPayloadInputOutput
 *   documentValue: "DOCUMENT_VALUE",
 * };
 * const command = new DocumentTypeAsPayloadCommand(input);
 * const response = await client.send(command);
 * // { // DocumentTypeAsPayloadInputOutput
 * //   documentValue: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param DocumentTypeAsPayloadCommandInput - {@link DocumentTypeAsPayloadCommandInput}
 * @returns {@link DocumentTypeAsPayloadCommandOutput}
 * @see {@link DocumentTypeAsPayloadCommandInput} for command's `input` shape.
 * @see {@link DocumentTypeAsPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class DocumentTypeAsPayloadCommand extends command<DocumentTypeAsPayloadCommandInput, DocumentTypeAsPayloadCommandOutput>(
  _ep0,
  _mw0,
  "DocumentTypeAsPayload",
  DocumentTypeAsPayload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DocumentTypeAsPayloadInputOutput;
      output: DocumentTypeAsPayloadInputOutput;
    };
    sdk: {
      input: DocumentTypeAsPayloadCommandInput;
      output: DocumentTypeAsPayloadCommandOutput;
    };
  };
}
