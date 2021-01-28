import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { InlineDocumentInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1InlineDocumentCommand,
  serializeAws_restJson1InlineDocumentCommand,
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

export type InlineDocumentCommandInput = InlineDocumentInputOutput;
export type InlineDocumentCommandOutput = InlineDocumentInputOutput & __MetadataBearer;

/**
 * This example serializes an inline document as part of the payload.
 */
export class InlineDocumentCommand extends $Command<
  InlineDocumentCommandInput,
  InlineDocumentCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InlineDocumentCommandInput) {
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
  ): Handler<InlineDocumentCommandInput, InlineDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "InlineDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InlineDocumentInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: InlineDocumentInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InlineDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InlineDocumentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InlineDocumentCommandOutput> {
    return deserializeAws_restJson1InlineDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
