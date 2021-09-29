import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import {
  deserializeAws_restJson1NoInputAndNoOutputCommand,
  serializeAws_restJson1NoInputAndNoOutputCommand,
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

export interface NoInputAndNoOutputCommandInput {}
export interface NoInputAndNoOutputCommandOutput extends __MetadataBearer {}

/**
 * The example tests how requests and responses are serialized when there's
 * no request or response payload because the operation has no input or output.
 * While this should be rare, code generators must support this.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, NoInputAndNoOutputCommand } from "@aws-sdk/aws-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, NoInputAndNoOutputCommand } = require("@aws-sdk/aws-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new NoInputAndNoOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NoInputAndNoOutputCommandInput} for command's `input` shape.
 * @see {@link NoInputAndNoOutputCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class NoInputAndNoOutputCommand extends $Command<
  NoInputAndNoOutputCommandInput,
  NoInputAndNoOutputCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NoInputAndNoOutputCommandInput) {
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
  ): Handler<NoInputAndNoOutputCommandInput, NoInputAndNoOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "NoInputAndNoOutputCommand";
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

  private serialize(input: NoInputAndNoOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1NoInputAndNoOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NoInputAndNoOutputCommandOutput> {
    return deserializeAws_restJson1NoInputAndNoOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
