import {
  QueryProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../QueryProtocolClient";
import { IgnoresWrappingXmlNameOutput } from "../models/index";
import {
  deserializeAws_queryIgnoresWrappingXmlNameCommand,
  serializeAws_queryIgnoresWrappingXmlNameCommand,
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

export type IgnoresWrappingXmlNameCommandInput = {}
export type IgnoresWrappingXmlNameCommandOutput = IgnoresWrappingXmlNameOutput & __MetadataBearer;

export class IgnoresWrappingXmlNameCommand extends $Command<IgnoresWrappingXmlNameCommandInput, IgnoresWrappingXmlNameCommandOutput, QueryProtocolClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IgnoresWrappingXmlNameCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<IgnoresWrappingXmlNameCommandInput, IgnoresWrappingXmlNameCommandOutput> {
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
    input: IgnoresWrappingXmlNameCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryIgnoresWrappingXmlNameCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<IgnoresWrappingXmlNameCommandOutput> {
    return deserializeAws_queryIgnoresWrappingXmlNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
