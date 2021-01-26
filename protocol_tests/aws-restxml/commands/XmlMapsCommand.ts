import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { XmlMapsInputOutput } from "../models/models_0";
import { deserializeAws_restXmlXmlMapsCommand, serializeAws_restXmlXmlMapsCommand } from "../protocols/Aws_restXml";
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

export type XmlMapsCommandInput = XmlMapsInputOutput;
export type XmlMapsCommandOutput = XmlMapsInputOutput & __MetadataBearer;

/**
 * The example tests basic map serialization.
 */
export class XmlMapsCommand extends $Command<
  XmlMapsCommandInput,
  XmlMapsCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: XmlMapsCommandInput) {
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
  ): Handler<XmlMapsCommandInput, XmlMapsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "XmlMapsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: XmlMapsInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: XmlMapsInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: XmlMapsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlXmlMapsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlMapsCommandOutput> {
    return deserializeAws_restXmlXmlMapsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
