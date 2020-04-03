import {
  EC2ProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2ProtocolClient";
import { QueryTimestampsInput } from "../models/index";
import {
  deserializeAws_ec2QueryTimestampsCommand,
  serializeAws_ec2QueryTimestampsCommand,
} from "../protocols/Aws_ec2";
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

export type QueryTimestampsCommandInput = QueryTimestampsInput;
export type QueryTimestampsCommandOutput = __MetadataBearer

export class QueryTimestampsCommand extends $Command<QueryTimestampsCommandInput, QueryTimestampsCommandOutput, EC2ProtocolClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: QueryTimestampsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryTimestampsCommandInput, QueryTimestampsCommandOutput> {
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
    input: QueryTimestampsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2QueryTimestampsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<QueryTimestampsCommandOutput> {
    return deserializeAws_ec2QueryTimestampsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
