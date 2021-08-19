import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { GreetingStruct } from "../models/models_0";
import {
  deserializeAws_restJson1MalformedAcceptWithBodyCommand,
  serializeAws_restJson1MalformedAcceptWithBodyCommand,
} from "../protocols/Aws_restJson1";
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

export interface MalformedAcceptWithBodyCommandInput {}
export interface MalformedAcceptWithBodyCommandOutput extends GreetingStruct, __MetadataBearer {}

export class MalformedAcceptWithBodyCommand extends $Command<
  MalformedAcceptWithBodyCommandInput,
  MalformedAcceptWithBodyCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MalformedAcceptWithBodyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MalformedAcceptWithBodyCommandInput, MalformedAcceptWithBodyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "MalformedAcceptWithBodyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GreetingStruct.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MalformedAcceptWithBodyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1MalformedAcceptWithBodyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MalformedAcceptWithBodyCommandOutput> {
    return deserializeAws_restJson1MalformedAcceptWithBodyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
