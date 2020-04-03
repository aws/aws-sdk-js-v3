import {
  QueryProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../QueryProtocolClient";
import { QueryListsInput } from "../models/index";
import {
  deserializeAws_queryQueryListsCommand,
  serializeAws_queryQueryListsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
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

export type QueryListsCommandInput = QueryListsInput;
export type QueryListsCommandOutput = __MetadataBearer

export class QueryListsCommand extends $Command<QueryListsCommandInput, QueryListsCommandOutput, QueryProtocolClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: QueryListsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryListsCommandInput, QueryListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: QueryListsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryQueryListsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<QueryListsCommandOutput> {
    return deserializeAws_queryQueryListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
