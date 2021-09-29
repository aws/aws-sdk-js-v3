import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { EmptyInputAndEmptyOutputInput, EmptyInputAndEmptyOutputOutput } from "../models/models_0";
import {
  deserializeAws_ec2EmptyInputAndEmptyOutputCommand,
  serializeAws_ec2EmptyInputAndEmptyOutputCommand,
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

export interface EmptyInputAndEmptyOutputCommandInput extends EmptyInputAndEmptyOutputInput {}
export interface EmptyInputAndEmptyOutputCommandOutput extends EmptyInputAndEmptyOutputOutput, __MetadataBearer {}

/**
 * The example tests how requests and responses are serialized when there's
 * no request or response members.
 *
 * While this should be rare, code generators must support this.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, EmptyInputAndEmptyOutputCommand } from "@aws-sdk/aws-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, EmptyInputAndEmptyOutputCommand } = require("@aws-sdk/aws-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const command = new EmptyInputAndEmptyOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EmptyInputAndEmptyOutputCommandInput} for command's `input` shape.
 * @see {@link EmptyInputAndEmptyOutputCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class EmptyInputAndEmptyOutputCommand extends $Command<
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EmptyInputAndEmptyOutputCommandInput) {
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
  ): Handler<EmptyInputAndEmptyOutputCommandInput, EmptyInputAndEmptyOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "EmptyInputAndEmptyOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EmptyInputAndEmptyOutputInput.filterSensitiveLog,
      outputFilterSensitiveLog: EmptyInputAndEmptyOutputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EmptyInputAndEmptyOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2EmptyInputAndEmptyOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EmptyInputAndEmptyOutputCommandOutput> {
    return deserializeAws_ec2EmptyInputAndEmptyOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
