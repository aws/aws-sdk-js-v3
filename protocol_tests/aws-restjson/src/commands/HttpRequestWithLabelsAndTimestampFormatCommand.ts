import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpRequestWithLabelsAndTimestampFormatInput } from "../models/models_0";
import {
  deserializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommand,
  serializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommand,
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

export interface HttpRequestWithLabelsAndTimestampFormatCommandInput
  extends HttpRequestWithLabelsAndTimestampFormatInput {}
export interface HttpRequestWithLabelsAndTimestampFormatCommandOutput extends __MetadataBearer {}

/**
 * The example tests how requests serialize different timestamp formats in the
 * URI path.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpRequestWithLabelsAndTimestampFormatCommand } from "@aws-sdk/aws-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpRequestWithLabelsAndTimestampFormatCommand } = require("@aws-sdk/aws-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new HttpRequestWithLabelsAndTimestampFormatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link HttpRequestWithLabelsAndTimestampFormatCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithLabelsAndTimestampFormatCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class HttpRequestWithLabelsAndTimestampFormatCommand extends $Command<
  HttpRequestWithLabelsAndTimestampFormatCommandInput,
  HttpRequestWithLabelsAndTimestampFormatCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpRequestWithLabelsAndTimestampFormatCommandInput) {
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
  ): Handler<
    HttpRequestWithLabelsAndTimestampFormatCommandInput,
    HttpRequestWithLabelsAndTimestampFormatCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpRequestWithLabelsAndTimestampFormatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpRequestWithLabelsAndTimestampFormatInput.filterSensitiveLog,
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
    input: HttpRequestWithLabelsAndTimestampFormatCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> {
    return deserializeAws_restJson1HttpRequestWithLabelsAndTimestampFormatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
