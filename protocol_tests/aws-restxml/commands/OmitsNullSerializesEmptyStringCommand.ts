import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { OmitsNullSerializesEmptyStringInput } from "../models/models_0";
import {
  deserializeAws_restXmlOmitsNullSerializesEmptyStringCommand,
  serializeAws_restXmlOmitsNullSerializesEmptyStringCommand,
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

export type OmitsNullSerializesEmptyStringCommandInput = OmitsNullSerializesEmptyStringInput;
export type OmitsNullSerializesEmptyStringCommandOutput = __MetadataBearer;

/**
 * Omits null, but serializes empty string value.
 */
export class OmitsNullSerializesEmptyStringCommand extends $Command<
  OmitsNullSerializesEmptyStringCommandInput,
  OmitsNullSerializesEmptyStringCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: OmitsNullSerializesEmptyStringCommandInput) {
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
  ): Handler<OmitsNullSerializesEmptyStringCommandInput, OmitsNullSerializesEmptyStringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "OmitsNullSerializesEmptyStringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: OmitsNullSerializesEmptyStringInput.filterSensitiveLog,
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
    input: OmitsNullSerializesEmptyStringCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlOmitsNullSerializesEmptyStringCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<OmitsNullSerializesEmptyStringCommandOutput> {
    return deserializeAws_restXmlOmitsNullSerializesEmptyStringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
