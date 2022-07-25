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

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { GreetingWithErrorsOutput, GreetingWithErrorsOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_ec2GreetingWithErrorsCommand,
  serializeAws_ec2GreetingWithErrorsCommand,
} from "../protocols/Aws_ec2";

export interface GreetingWithErrorsCommandInput {}
export interface GreetingWithErrorsCommandOutput extends GreetingWithErrorsOutput, __MetadataBearer {}

/**
 * This operation has three possible return values:
 *
 * 1. A successful response in the form of GreetingWithErrorsOutput
 * 2. An InvalidGreeting error.
 * 3. A BadRequest error.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, GreetingWithErrorsCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, GreetingWithErrorsCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const command = new GreetingWithErrorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GreetingWithErrorsCommandInput} for command's `input` shape.
 * @see {@link GreetingWithErrorsCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
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
      outputFilterSensitiveLog: GreetingWithErrorsOutputFilterSensitiveLog,
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
