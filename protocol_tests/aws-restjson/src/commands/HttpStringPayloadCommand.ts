import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { StringPayloadInput } from "../models/models_0";
import {
  deserializeAws_restJson1HttpStringPayloadCommand,
  serializeAws_restJson1HttpStringPayloadCommand,
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

export interface HttpStringPayloadCommandInput extends StringPayloadInput {}
export interface HttpStringPayloadCommandOutput extends StringPayloadInput, __MetadataBearer {}

export class HttpStringPayloadCommand extends $Command<
  HttpStringPayloadCommandInput,
  HttpStringPayloadCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpStringPayloadCommandInput) {
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
  ): Handler<HttpStringPayloadCommandInput, HttpStringPayloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpStringPayloadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StringPayloadInput.filterSensitiveLog,
      outputFilterSensitiveLog: StringPayloadInput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpStringPayloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1HttpStringPayloadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpStringPayloadCommandOutput> {
    return deserializeAws_restJson1HttpStringPayloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
