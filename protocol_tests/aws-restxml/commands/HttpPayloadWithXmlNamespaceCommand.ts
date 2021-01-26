import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { HttpPayloadWithXmlNamespaceInputOutput } from "../models/models_0";
import {
  deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommand,
  serializeAws_restXmlHttpPayloadWithXmlNamespaceCommand,
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

export type HttpPayloadWithXmlNamespaceCommandInput = HttpPayloadWithXmlNamespaceInputOutput;
export type HttpPayloadWithXmlNamespaceCommandOutput = HttpPayloadWithXmlNamespaceInputOutput & __MetadataBearer;

/**
 * The following example serializes a payload that uses an XML namespace.
 */
export class HttpPayloadWithXmlNamespaceCommand extends $Command<
  HttpPayloadWithXmlNamespaceCommandInput,
  HttpPayloadWithXmlNamespaceCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpPayloadWithXmlNamespaceCommandInput) {
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
  ): Handler<HttpPayloadWithXmlNamespaceCommandInput, HttpPayloadWithXmlNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpPayloadWithXmlNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpPayloadWithXmlNamespaceInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: HttpPayloadWithXmlNamespaceInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpPayloadWithXmlNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlHttpPayloadWithXmlNamespaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpPayloadWithXmlNamespaceCommandOutput> {
    return deserializeAws_restXmlHttpPayloadWithXmlNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
