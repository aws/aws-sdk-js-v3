// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  HttpRequestWithGreedyLabelInPathInput,
  HttpRequestWithGreedyLabelInPathInputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand,
  serializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

export interface HttpRequestWithGreedyLabelInPathCommandInput extends HttpRequestWithGreedyLabelInPathInput {}
export interface HttpRequestWithGreedyLabelInPathCommandOutput extends __MetadataBearer {}

export class HttpRequestWithGreedyLabelInPathCommand extends $Command<
  HttpRequestWithGreedyLabelInPathCommandInput,
  HttpRequestWithGreedyLabelInPathCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpRequestWithGreedyLabelInPathCommandInput) {
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
  ): Handler<HttpRequestWithGreedyLabelInPathCommandInput, HttpRequestWithGreedyLabelInPathCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpRequestWithGreedyLabelInPathCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpRequestWithGreedyLabelInPathInputFilterSensitiveLog,
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
    input: HttpRequestWithGreedyLabelInPathCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpRequestWithGreedyLabelInPathCommandOutput> {
    return deserializeAws_restXmlHttpRequestWithGreedyLabelInPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
