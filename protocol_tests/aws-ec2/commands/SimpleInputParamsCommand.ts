import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { SimpleInputParamsInput } from "../models/models_0";
import {
  deserializeAws_ec2SimpleInputParamsCommand,
  serializeAws_ec2SimpleInputParamsCommand,
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

export interface SimpleInputParamsCommandInput extends SimpleInputParamsInput {}
export interface SimpleInputParamsCommandOutput extends __MetadataBearer {}

/**
 * This test serializes strings, numbers, and boolean values.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, SimpleInputParamsCommand } from "@aws-sdk/aws-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, SimpleInputParamsCommand } = require("@aws-sdk/aws-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const command = new SimpleInputParamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SimpleInputParamsCommandInput} for command's `input` shape.
 * @see {@link SimpleInputParamsCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SimpleInputParamsCommand extends $Command<
  SimpleInputParamsCommandInput,
  SimpleInputParamsCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SimpleInputParamsCommandInput) {
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
  ): Handler<SimpleInputParamsCommandInput, SimpleInputParamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "SimpleInputParamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SimpleInputParamsInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SimpleInputParamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2SimpleInputParamsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SimpleInputParamsCommandOutput> {
    return deserializeAws_ec2SimpleInputParamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
