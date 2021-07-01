import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { DocumentTypeInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DocumentTypeCommand,
  serializeAws_restJson1DocumentTypeCommand,
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

export interface DocumentTypeCommandInput extends DocumentTypeInputOutput {}
export interface DocumentTypeCommandOutput extends DocumentTypeInputOutput, __MetadataBearer {}

/**
 * This example serializes a document as part of the payload.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, DocumentTypeCommand } from "@aws-sdk/aws-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, DocumentTypeCommand } = require("@aws-sdk/aws-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new DocumentTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DocumentTypeCommandInput} for command's `input` shape.
 * @see {@link DocumentTypeCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DocumentTypeCommand extends $Command<
  DocumentTypeCommandInput,
  DocumentTypeCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DocumentTypeCommandInput) {
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
      inputFilterSensitiveLog: DocumentTypeInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: DocumentTypeInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DocumentTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DocumentTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DocumentTypeCommandOutput> {
    return deserializeAws_restJson1DocumentTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
