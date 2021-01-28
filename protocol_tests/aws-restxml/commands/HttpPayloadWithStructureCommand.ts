import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { HttpPayloadWithStructureInputOutput } from "../models/models_0";
import {
  deserializeAws_restXmlHttpPayloadWithStructureCommand,
  serializeAws_restXmlHttpPayloadWithStructureCommand,
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

export type HttpPayloadWithStructureCommandInput = HttpPayloadWithStructureInputOutput;
export type HttpPayloadWithStructureCommandOutput = HttpPayloadWithStructureInputOutput & __MetadataBearer;

/**
 * This examples serializes a structure in the payload.
 *
 * Note that serializing a structure changes the wrapper element name
 * to match the targeted structure.
 */
export class HttpPayloadWithStructureCommand extends $Command<
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpPayloadWithStructureCommandInput) {
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
  ): Handler<HttpPayloadWithStructureCommandInput, HttpPayloadWithStructureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpPayloadWithStructureCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpPayloadWithStructureInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: HttpPayloadWithStructureInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpPayloadWithStructureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlHttpPayloadWithStructureCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpPayloadWithStructureCommandOutput> {
    return deserializeAws_restXmlHttpPayloadWithStructureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
