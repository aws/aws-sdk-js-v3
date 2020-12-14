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

export type QueryIdempotencyTokenAutoFillCommandInput = QueryIdempotencyTokenAutoFillInput;
export type QueryIdempotencyTokenAutoFillCommandOutput = __MetadataBearer;

/**
 * Automatically adds idempotency tokens.
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
