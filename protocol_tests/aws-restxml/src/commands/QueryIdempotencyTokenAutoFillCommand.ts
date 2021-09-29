import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { QueryIdempotencyTokenAutoFillInput } from "../models/models_0";
import {
  deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommand,
  serializeAws_restXmlQueryIdempotencyTokenAutoFillCommand,
} from "../protocols/Aws_restXml";
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

export interface QueryIdempotencyTokenAutoFillCommandInput extends QueryIdempotencyTokenAutoFillInput {}
export interface QueryIdempotencyTokenAutoFillCommandOutput extends __MetadataBearer {}

/**
 * Automatically adds idempotency tokens.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, QueryIdempotencyTokenAutoFillCommand } from "@aws-sdk/aws-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, QueryIdempotencyTokenAutoFillCommand } = require("@aws-sdk/aws-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new QueryIdempotencyTokenAutoFillCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryIdempotencyTokenAutoFillCommandInput} for command's `input` shape.
 * @see {@link QueryIdempotencyTokenAutoFillCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class QueryIdempotencyTokenAutoFillCommand extends $Command<
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: QueryIdempotencyTokenAutoFillCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryIdempotencyTokenAutoFillCommandInput, QueryIdempotencyTokenAutoFillCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "QueryIdempotencyTokenAutoFillCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryIdempotencyTokenAutoFillInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QueryIdempotencyTokenAutoFillCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlQueryIdempotencyTokenAutoFillCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<QueryIdempotencyTokenAutoFillCommandOutput> {
    return deserializeAws_restXmlQueryIdempotencyTokenAutoFillCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
