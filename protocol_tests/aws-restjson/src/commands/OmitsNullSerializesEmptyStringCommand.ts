import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { OmitsNullSerializesEmptyStringInput } from "../models/models_0";
import {
  deserializeAws_restJson1OmitsNullSerializesEmptyStringCommand,
  serializeAws_restJson1OmitsNullSerializesEmptyStringCommand,
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

export interface OmitsNullSerializesEmptyStringCommandInput extends OmitsNullSerializesEmptyStringInput {}
export interface OmitsNullSerializesEmptyStringCommandOutput extends __MetadataBearer {}

/**
 * Omits null, but serializes empty string value.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, OmitsNullSerializesEmptyStringCommand } from "@aws-sdk/aws-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, OmitsNullSerializesEmptyStringCommand } = require("@aws-sdk/aws-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new OmitsNullSerializesEmptyStringCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link OmitsNullSerializesEmptyStringCommandInput} for command's `input` shape.
 * @see {@link OmitsNullSerializesEmptyStringCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class OmitsNullSerializesEmptyStringCommand extends $Command<
  OmitsNullSerializesEmptyStringCommandInput,
  OmitsNullSerializesEmptyStringCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: OmitsNullSerializesEmptyStringCommandInput) {
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
  ): Handler<OmitsNullSerializesEmptyStringCommandInput, OmitsNullSerializesEmptyStringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "OmitsNullSerializesEmptyStringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: OmitsNullSerializesEmptyStringInput.filterSensitiveLog,
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
    input: OmitsNullSerializesEmptyStringCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1OmitsNullSerializesEmptyStringCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<OmitsNullSerializesEmptyStringCommandOutput> {
    return deserializeAws_restJson1OmitsNullSerializesEmptyStringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
