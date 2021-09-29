import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { HostLabelInput } from "../models/models_0";
import {
  deserializeAws_json1_0EndpointWithHostLabelOperationCommand,
  serializeAws_json1_0EndpointWithHostLabelOperationCommand,
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

export interface EndpointWithHostLabelOperationCommandInput extends HostLabelInput {}
export interface EndpointWithHostLabelOperationCommandOutput extends __MetadataBearer {}

export class EndpointWithHostLabelOperationCommand extends $Command<
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
  JSONRPC10ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EndpointWithHostLabelOperationCommandInput) {
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
  ): Handler<EndpointWithHostLabelOperationCommandInput, EndpointWithHostLabelOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JSONRPC10Client";
    const commandName = "EndpointWithHostLabelOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HostLabelInput.filterSensitiveLog,
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
    input: EndpointWithHostLabelOperationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0EndpointWithHostLabelOperationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EndpointWithHostLabelOperationCommandOutput> {
    return deserializeAws_json1_0EndpointWithHostLabelOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
