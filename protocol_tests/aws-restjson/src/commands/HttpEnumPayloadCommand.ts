import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { EnumPayloadInput } from "../models/models_0";
import {
  deserializeAws_restJson1HttpEnumPayloadCommand,
  serializeAws_restJson1HttpEnumPayloadCommand,
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

export interface HttpEnumPayloadCommandInput extends EnumPayloadInput {}
export interface HttpEnumPayloadCommandOutput extends EnumPayloadInput, __MetadataBearer {}

export class HttpEnumPayloadCommand extends $Command<
  HttpEnumPayloadCommandInput,
  HttpEnumPayloadCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpEnumPayloadCommandInput) {
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
  ): Handler<HttpEnumPayloadCommandInput, HttpEnumPayloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpEnumPayloadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnumPayloadInput.filterSensitiveLog,
      outputFilterSensitiveLog: EnumPayloadInput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpEnumPayloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1HttpEnumPayloadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpEnumPayloadCommandOutput> {
    return deserializeAws_restJson1HttpEnumPayloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
