import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { XmlAttributesOnPayloadInputOutput } from "../models/models_0";
import {
  deserializeAws_restXmlXmlAttributesOnPayloadCommand,
  serializeAws_restXmlXmlAttributesOnPayloadCommand,
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

export type XmlAttributesOnPayloadCommandInput = XmlAttributesOnPayloadInputOutput;
export type XmlAttributesOnPayloadCommandOutput = XmlAttributesOnPayloadInputOutput & __MetadataBearer;

/**
 * This example serializes an XML attributes on a document targeted by httpPayload.
 */
export class XmlAttributesOnPayloadCommand extends $Command<
  XmlAttributesOnPayloadCommandInput,
  XmlAttributesOnPayloadCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: XmlAttributesOnPayloadCommandInput) {
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
  ): Handler<XmlAttributesOnPayloadCommandInput, XmlAttributesOnPayloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "XmlAttributesOnPayloadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: XmlAttributesOnPayloadInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: XmlAttributesOnPayloadInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: XmlAttributesOnPayloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlXmlAttributesOnPayloadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlAttributesOnPayloadCommandOutput> {
    return deserializeAws_restXmlXmlAttributesOnPayloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
