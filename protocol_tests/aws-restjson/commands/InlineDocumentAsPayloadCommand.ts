import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { InlineDocumentAsPayloadInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1InlineDocumentAsPayloadCommand,
  serializeAws_restJson1InlineDocumentAsPayloadCommand,
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

export type InlineDocumentAsPayloadCommandInput = InlineDocumentAsPayloadInputOutput;
export type InlineDocumentAsPayloadCommandOutput = InlineDocumentAsPayloadInputOutput & __MetadataBearer;

/**
 * This example serializes an inline document as the entire HTTP payload.
 */
export class InlineDocumentAsPayloadCommand extends $Command<
  InlineDocumentAsPayloadCommandInput,
  InlineDocumentAsPayloadCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InlineDocumentAsPayloadCommandInput) {
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
  ): Handler<InlineDocumentAsPayloadCommandInput, InlineDocumentAsPayloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "InlineDocumentAsPayloadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InlineDocumentAsPayloadInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: InlineDocumentAsPayloadInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InlineDocumentAsPayloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InlineDocumentAsPayloadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InlineDocumentAsPayloadCommandOutput> {
    return deserializeAws_restJson1InlineDocumentAsPayloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
