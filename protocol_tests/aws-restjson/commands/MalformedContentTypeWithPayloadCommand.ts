import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedContentTypeWithPayloadInput } from "../models/models_0";
import {
  deserializeAws_restJson1MalformedContentTypeWithPayloadCommand,
  serializeAws_restJson1MalformedContentTypeWithPayloadCommand,
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

export interface MalformedContentTypeWithPayloadCommandInput extends MalformedContentTypeWithPayloadInput {}
export interface MalformedContentTypeWithPayloadCommandOutput extends __MetadataBearer {}

export class MalformedContentTypeWithPayloadCommand extends $Command<
  MalformedContentTypeWithPayloadCommandInput,
  MalformedContentTypeWithPayloadCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MalformedContentTypeWithPayloadCommandInput) {
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
  ): Handler<MalformedContentTypeWithPayloadCommandInput, MalformedContentTypeWithPayloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "MalformedContentTypeWithPayloadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MalformedContentTypeWithPayloadInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: MalformedContentTypeWithPayloadCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1MalformedContentTypeWithPayloadCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MalformedContentTypeWithPayloadCommandOutput> {
    return deserializeAws_restJson1MalformedContentTypeWithPayloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
