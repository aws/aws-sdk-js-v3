import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { IgnoresWrappingXmlNameOutput } from "../models/models_0";
import {
  deserializeAws_ec2IgnoresWrappingXmlNameCommand,
  serializeAws_ec2IgnoresWrappingXmlNameCommand,
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

export interface IgnoresWrappingXmlNameCommandInput {}
export interface IgnoresWrappingXmlNameCommandOutput extends IgnoresWrappingXmlNameOutput, __MetadataBearer {}

/**
 * The xmlName trait on the output structure is ignored in AWS Query.
 *
 * The wrapping element is always operation name + "Response".
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, IgnoresWrappingXmlNameCommand } from "@aws-sdk/aws-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, IgnoresWrappingXmlNameCommand } = require("@aws-sdk/aws-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const command = new IgnoresWrappingXmlNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IgnoresWrappingXmlNameCommandInput} for command's `input` shape.
 * @see {@link IgnoresWrappingXmlNameCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class IgnoresWrappingXmlNameCommand extends $Command<
  IgnoresWrappingXmlNameCommandInput,
  IgnoresWrappingXmlNameCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IgnoresWrappingXmlNameCommandInput) {
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
  ): Handler<IgnoresWrappingXmlNameCommandInput, IgnoresWrappingXmlNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "IgnoresWrappingXmlNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: IgnoresWrappingXmlNameOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: IgnoresWrappingXmlNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2IgnoresWrappingXmlNameCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<IgnoresWrappingXmlNameCommandOutput> {
    return deserializeAws_ec2IgnoresWrappingXmlNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
