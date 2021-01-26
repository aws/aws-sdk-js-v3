import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { XmlAttributesInputOutput } from "../models/models_0";
import {
  deserializeAws_restXmlXmlAttributesCommand,
  serializeAws_restXmlXmlAttributesCommand,
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

export type XmlAttributesCommandInput = XmlAttributesInputOutput;
export type XmlAttributesCommandOutput = XmlAttributesInputOutput & __MetadataBearer;

/**
 * This example serializes an XML attributes on synthesized document.
 */
export class XmlAttributesCommand extends $Command<
  XmlAttributesCommandInput,
  XmlAttributesCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: XmlAttributesCommandInput) {
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
  ): Handler<XmlAttributesCommandInput, XmlAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "XmlAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: XmlAttributesInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: XmlAttributesInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: XmlAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlXmlAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlAttributesCommandOutput> {
    return deserializeAws_restXmlXmlAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
