import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MediaTypeHeaderInput, MediaTypeHeaderOutput } from "../models/models_0";
import {
  deserializeAws_restJson1MediaTypeHeaderCommand,
  serializeAws_restJson1MediaTypeHeaderCommand,
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

export interface MediaTypeHeaderCommandInput extends MediaTypeHeaderInput {}
export interface MediaTypeHeaderCommandOutput extends MediaTypeHeaderOutput, __MetadataBearer {}

/**
 * This example ensures that mediaType strings are base64 encoded in headers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MediaTypeHeaderCommand } from "@aws-sdk/aws-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MediaTypeHeaderCommand } = require("@aws-sdk/aws-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new MediaTypeHeaderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MediaTypeHeaderCommandInput} for command's `input` shape.
 * @see {@link MediaTypeHeaderCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class MediaTypeHeaderCommand extends $Command<
  MediaTypeHeaderCommandInput,
  MediaTypeHeaderCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MediaTypeHeaderCommandInput) {
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
  ): Handler<MediaTypeHeaderCommandInput, MediaTypeHeaderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "MediaTypeHeaderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MediaTypeHeaderInput.filterSensitiveLog,
      outputFilterSensitiveLog: MediaTypeHeaderOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MediaTypeHeaderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1MediaTypeHeaderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MediaTypeHeaderCommandOutput> {
    return deserializeAws_restJson1MediaTypeHeaderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
