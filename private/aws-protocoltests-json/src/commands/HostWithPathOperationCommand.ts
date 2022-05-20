// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import {
  deserializeAws_json1_1HostWithPathOperationCommand,
  serializeAws_json1_1HostWithPathOperationCommand,
} from "../protocols/Aws_json1_1";

export interface HostWithPathOperationCommandInput {}
export interface HostWithPathOperationCommandOutput extends __MetadataBearer {}

export class HostWithPathOperationCommand extends $Command<
  HostWithPathOperationCommandInput,
  HostWithPathOperationCommandOutput,
  JsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HostWithPathOperationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: JsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<HostWithPathOperationCommandInput, HostWithPathOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JsonProtocolClient";
    const commandName = "HostWithPathOperationCommand";
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

  private serialize(input: HostWithPathOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1HostWithPathOperationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HostWithPathOperationCommandOutput> {
    return deserializeAws_json1_1HostWithPathOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
