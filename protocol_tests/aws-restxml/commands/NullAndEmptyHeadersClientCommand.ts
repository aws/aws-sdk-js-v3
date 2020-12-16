import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { NullAndEmptyHeadersIO } from "../models/models_0";
import {
  deserializeAws_restXmlNullAndEmptyHeadersClientCommand,
  serializeAws_restXmlNullAndEmptyHeadersClientCommand,
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

export type NullAndEmptyHeadersClientCommandInput = NullAndEmptyHeadersIO;
export type NullAndEmptyHeadersClientCommandOutput = NullAndEmptyHeadersIO & __MetadataBearer;

/**
 * Null and empty headers are not sent over the wire.
 */
export class NullAndEmptyHeadersClientCommand extends $Command<
  NullAndEmptyHeadersClientCommandInput,
  NullAndEmptyHeadersClientCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NullAndEmptyHeadersClientCommandInput) {
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
  ): Handler<NullAndEmptyHeadersClientCommandInput, NullAndEmptyHeadersClientCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "NullAndEmptyHeadersClientCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NullAndEmptyHeadersIO.filterSensitiveLog,
      outputFilterSensitiveLog: NullAndEmptyHeadersIO.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NullAndEmptyHeadersClientCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlNullAndEmptyHeadersClientCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NullAndEmptyHeadersClientCommandOutput> {
    return deserializeAws_restXmlNullAndEmptyHeadersClientCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
