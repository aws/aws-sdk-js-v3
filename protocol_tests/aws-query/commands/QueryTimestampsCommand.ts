import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import { QueryTimestampsInput } from "../models/models_0";
import {
  deserializeAws_queryQueryTimestampsCommand,
  serializeAws_queryQueryTimestampsCommand,
} from "../protocols/Aws_query";
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

export type QueryTimestampsCommandInput = QueryTimestampsInput;
export type QueryTimestampsCommandOutput = __MetadataBearer;

/**
 * This test serializes timestamps.
 *
 * 1. Timestamps are serialized as RFC 3339 date-time values by default.
 * 2. A timestampFormat trait on a member changes the format.
 * 3. A timestampFormat trait on the shape targeted by the member changes the format.
 */
export class QueryTimestampsCommand extends $Command<
  QueryTimestampsCommandInput,
  QueryTimestampsCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: QueryTimestampsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryTimestampsCommandInput, QueryTimestampsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "QueryTimestampsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryTimestampsInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QueryTimestampsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryQueryTimestampsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryTimestampsCommandOutput> {
    return deserializeAws_queryQueryTimestampsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
