// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DocumentTypeInputOutput } from "../models/models_0";
import { de_DocumentTypeCommand, se_DocumentTypeCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 */
export class DocumentTypeCommand extends $Command<
  DocumentTypeCommandInput,
  DocumentTypeCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  /**
   * @public
   */
  constructor(readonly input: DocumentTypeCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DocumentTypeCommandInput, DocumentTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "DocumentTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "DocumentType",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DocumentTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DocumentTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DocumentTypeCommandOutput> {
    return de_DocumentTypeCommand(output, context);
  }
}
