import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpPrefixHeadersResponseOutput } from "../models/models_0";
import {
  deserializeAws_restJson1HttpPrefixHeadersResponseCommand,
  serializeAws_restJson1HttpPrefixHeadersResponseCommand,
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

export interface HttpPrefixHeadersResponseCommandInput {}
export interface HttpPrefixHeadersResponseCommandOutput extends HttpPrefixHeadersResponseOutput, __MetadataBearer {}

/**
 * Clients that perform this test extract all headers from the response.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPrefixHeadersResponseCommand } from "@aws-sdk/aws-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPrefixHeadersResponseCommand } = require("@aws-sdk/aws-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new HttpPrefixHeadersResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link HttpPrefixHeadersResponseCommandInput} for command's `input` shape.
 * @see {@link HttpPrefixHeadersResponseCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class HttpPrefixHeadersResponseCommand extends $Command<
  HttpPrefixHeadersResponseCommandInput,
  HttpPrefixHeadersResponseCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpPrefixHeadersResponseCommandInput) {
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
  ): Handler<HttpPrefixHeadersResponseCommandInput, HttpPrefixHeadersResponseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpPrefixHeadersResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: HttpPrefixHeadersResponseOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpPrefixHeadersResponseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1HttpPrefixHeadersResponseCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpPrefixHeadersResponseCommandOutput> {
    return deserializeAws_restJson1HttpPrefixHeadersResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
