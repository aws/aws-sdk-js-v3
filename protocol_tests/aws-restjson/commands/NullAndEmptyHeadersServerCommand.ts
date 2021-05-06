import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { NullAndEmptyHeadersIO } from "../models/models_0";
import {
  deserializeAws_restJson1NullAndEmptyHeadersServerCommand,
  serializeAws_restJson1NullAndEmptyHeadersServerCommand,
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

export interface NullAndEmptyHeadersServerCommandInput extends NullAndEmptyHeadersIO {}
export interface NullAndEmptyHeadersServerCommandOutput extends NullAndEmptyHeadersIO, __MetadataBearer {}

/**
 * Null and empty headers are not sent over the wire.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, NullAndEmptyHeadersServerCommand } from "@aws-sdk/aws-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, NullAndEmptyHeadersServerCommand } = require("@aws-sdk/aws-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new NullAndEmptyHeadersServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NullAndEmptyHeadersServerCommandInput} for command's `input` shape.
 * @see {@link NullAndEmptyHeadersServerCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class NullAndEmptyHeadersServerCommand extends $Command<
  NullAndEmptyHeadersServerCommandInput,
  NullAndEmptyHeadersServerCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NullAndEmptyHeadersServerCommandInput) {
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
  ): Handler<NullAndEmptyHeadersServerCommandInput, NullAndEmptyHeadersServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "NullAndEmptyHeadersServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NullAndEmptyHeadersIO.filterSensitiveLog,
      outputFilterSensitiveLog: NullAndEmptyHeadersIO.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NullAndEmptyHeadersServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1NullAndEmptyHeadersServerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NullAndEmptyHeadersServerCommandOutput> {
    return deserializeAws_restJson1NullAndEmptyHeadersServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
