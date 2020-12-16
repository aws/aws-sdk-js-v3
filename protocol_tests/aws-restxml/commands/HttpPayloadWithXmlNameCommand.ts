import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { HttpPayloadWithXmlNameInputOutput } from "../models/models_0";
import {
  deserializeAws_restXmlHttpPayloadWithXmlNameCommand,
  serializeAws_restXmlHttpPayloadWithXmlNameCommand,
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

export type HttpPayloadWithXmlNameCommandInput = HttpPayloadWithXmlNameInputOutput;
export type HttpPayloadWithXmlNameCommandOutput = HttpPayloadWithXmlNameInputOutput & __MetadataBearer;

/**
 * The following example serializes a payload that uses an XML name,
 * changing the wrapper name.
 */
export class HttpPayloadWithXmlNameCommand extends $Command<
  HttpPayloadWithXmlNameCommandInput,
  HttpPayloadWithXmlNameCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpPayloadWithXmlNameCommandInput) {
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
  ): Handler<HttpPayloadWithXmlNameCommandInput, HttpPayloadWithXmlNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpPayloadWithXmlNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpPayloadWithXmlNameInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: HttpPayloadWithXmlNameInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpPayloadWithXmlNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlHttpPayloadWithXmlNameCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpPayloadWithXmlNameCommandOutput> {
    return deserializeAws_restXmlHttpPayloadWithXmlNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
