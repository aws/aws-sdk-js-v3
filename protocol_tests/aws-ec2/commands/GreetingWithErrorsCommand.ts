import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { GreetingWithErrorsOutput } from "../models/models_0";
import {
  deserializeAws_ec2GreetingWithErrorsCommand,
  serializeAws_ec2GreetingWithErrorsCommand,
} from "../protocols/Aws_ec2";
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

export type GreetingWithErrorsCommandInput = {};
export type GreetingWithErrorsCommandOutput = GreetingWithErrorsOutput & __MetadataBearer;

/**
 * This operation has three possible return values:
 *
 * 1. A successful response in the form of GreetingWithErrorsOutput
 * 2. An InvalidGreeting error.
 * 3. A BadRequest error.
 */
export class GreetingWithErrorsCommand extends $Command<
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GreetingWithErrorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GreetingWithErrorsCommandInput, GreetingWithErrorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "GreetingWithErrorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GreetingWithErrorsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GreetingWithErrorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GreetingWithErrorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GreetingWithErrorsCommandOutput> {
    return deserializeAws_ec2GreetingWithErrorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
