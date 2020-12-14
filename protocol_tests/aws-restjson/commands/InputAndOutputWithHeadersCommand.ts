import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { InputAndOutputWithHeadersIO } from "../models/models_0";
import {
  deserializeAws_restJson1InputAndOutputWithHeadersCommand,
  serializeAws_restJson1InputAndOutputWithHeadersCommand,
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

export type InputAndOutputWithHeadersCommandInput = InputAndOutputWithHeadersIO;
export type InputAndOutputWithHeadersCommandOutput = InputAndOutputWithHeadersIO & __MetadataBearer;

/**
 * The example tests how requests and responses are serialized when there is
 * no input or output payload but there are HTTP header bindings.
 */
export class InputAndOutputWithHeadersCommand extends $Command<
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InputAndOutputWithHeadersCommandInput) {
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
  ): Handler<InputAndOutputWithHeadersCommandInput, InputAndOutputWithHeadersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "InputAndOutputWithHeadersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InputAndOutputWithHeadersIO.filterSensitiveLog,
      outputFilterSensitiveLog: InputAndOutputWithHeadersIO.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InputAndOutputWithHeadersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InputAndOutputWithHeadersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InputAndOutputWithHeadersCommandOutput> {
    return deserializeAws_restJson1InputAndOutputWithHeadersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
