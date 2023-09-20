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

import { DocumentTypeAsPayloadInputOutput } from "../models/models_0";
import { de_DocumentTypeAsPayloadCommand, se_DocumentTypeAsPayloadCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * This example serializes a document as the entire HTTP payload.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, DocumentTypeAsPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, DocumentTypeAsPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
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
 */
export class DocumentTypeAsPayloadCommand extends $Command<
  DocumentTypeAsPayloadCommandInput,
  DocumentTypeAsPayloadCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: DocumentTypeAsPayloadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DocumentTypeAsPayloadCommandInput, DocumentTypeAsPayloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "DocumentTypeAsPayloadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "DocumentTypeAsPayload",
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
  private serialize(input: DocumentTypeAsPayloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DocumentTypeAsPayloadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DocumentTypeAsPayloadCommandOutput> {
    return de_DocumentTypeAsPayloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
