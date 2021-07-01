import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import {
  deserializeAws_json1_0EndpointOperationCommand,
  serializeAws_json1_0EndpointOperationCommand,
} from "../protocols/Aws_json1_0";
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

export interface EndpointOperationCommandInput {}
export interface EndpointOperationCommandOutput extends __MetadataBearer {}

export class EndpointOperationCommand extends $Command<
  EndpointOperationCommandInput,
  EndpointOperationCommandOutput,
  JSONRPC10ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EndpointOperationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: JSONRPC10ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EndpointOperationCommandInput, EndpointOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JSONRPC10Client";
    const commandName = "EndpointOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EndpointOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0EndpointOperationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EndpointOperationCommandOutput> {
    return deserializeAws_json1_0EndpointOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
