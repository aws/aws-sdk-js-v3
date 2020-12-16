import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpPrefixHeadersInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1HttpPrefixHeadersCommand,
  serializeAws_restJson1HttpPrefixHeadersCommand,
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

export type HttpPrefixHeadersCommandInput = HttpPrefixHeadersInputOutput;
export type HttpPrefixHeadersCommandOutput = HttpPrefixHeadersInputOutput & __MetadataBearer;

/**
 * This examples adds headers to the input of a request and response by prefix.
 */
export class HttpPrefixHeadersCommand extends $Command<
  HttpPrefixHeadersCommandInput,
  HttpPrefixHeadersCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpPrefixHeadersCommandInput) {
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
  ): Handler<HttpPrefixHeadersCommandInput, HttpPrefixHeadersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpPrefixHeadersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpPrefixHeadersInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: HttpPrefixHeadersInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpPrefixHeadersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1HttpPrefixHeadersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpPrefixHeadersCommandOutput> {
    return deserializeAws_restJson1HttpPrefixHeadersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
