import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { HttpRequestWithFloatLabelsInput } from "../models/models_0";
import {
  deserializeAws_restXmlHttpRequestWithFloatLabelsCommand,
  serializeAws_restXmlHttpRequestWithFloatLabelsCommand,
} from "../protocols/Aws_restXml";
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

export interface HttpRequestWithFloatLabelsCommandInput extends HttpRequestWithFloatLabelsInput {}
export interface HttpRequestWithFloatLabelsCommandOutput extends __MetadataBearer {}

export class HttpRequestWithFloatLabelsCommand extends $Command<
  HttpRequestWithFloatLabelsCommandInput,
  HttpRequestWithFloatLabelsCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpRequestWithFloatLabelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<HttpRequestWithFloatLabelsCommandInput, HttpRequestWithFloatLabelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpRequestWithFloatLabelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpRequestWithFloatLabelsInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpRequestWithFloatLabelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlHttpRequestWithFloatLabelsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpRequestWithFloatLabelsCommandOutput> {
    return deserializeAws_restXmlHttpRequestWithFloatLabelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
