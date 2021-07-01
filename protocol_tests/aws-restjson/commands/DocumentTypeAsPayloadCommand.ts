import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { DocumentTypeAsPayloadInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DocumentTypeAsPayloadCommand,
  serializeAws_restJson1DocumentTypeAsPayloadCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DocumentTypeAsPayloadCommandInput extends DocumentTypeAsPayloadInputOutput {}
export interface DocumentTypeAsPayloadCommandOutput extends DocumentTypeAsPayloadInputOutput, __MetadataBearer {}

/**
 * This example serializes a document as the entire HTTP payload.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, DocumentTypeAsPayloadCommand } from "@aws-sdk/aws-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, DocumentTypeAsPayloadCommand } = require("@aws-sdk/aws-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new DocumentTypeAsPayloadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DocumentTypeAsPayloadCommandInput} for command's `input` shape.
 * @see {@link DocumentTypeAsPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DocumentTypeAsPayloadCommand extends $Command<
  DocumentTypeAsPayloadCommandInput,
  DocumentTypeAsPayloadCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
      inputFilterSensitiveLog: DocumentTypeAsPayloadInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: DocumentTypeAsPayloadInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DocumentTypeAsPayloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DocumentTypeAsPayloadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DocumentTypeAsPayloadCommandOutput> {
    return deserializeAws_restJson1DocumentTypeAsPayloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
