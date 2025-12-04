// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DocumentTypeAsMapValueInputOutput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { DocumentTypeAsMapValue } from "../schemas/schemas_0";

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
 * import { RestJsonProtocolClient, DocumentTypeAsMapValueCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, DocumentTypeAsMapValueCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "DocumentTypeAsMapValue", {})
  .n("RestJsonProtocolClient", "DocumentTypeAsMapValueCommand")
  .sc(DocumentTypeAsMapValue)
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
