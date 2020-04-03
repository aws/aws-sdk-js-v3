import {
  QueryProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../QueryProtocolClient";
import { XmlTimestampsOutput } from "../models/index";
import {
  deserializeAws_queryXmlTimestampsCommand,
  serializeAws_queryXmlTimestampsCommand,
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

export type XmlTimestampsCommandInput = {}
export type XmlTimestampsCommandOutput = XmlTimestampsOutput & __MetadataBearer;

export class XmlTimestampsCommand extends $Command<XmlTimestampsCommandInput, XmlTimestampsCommandOutput, QueryProtocolClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: XmlTimestampsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<XmlTimestampsCommandInput, XmlTimestampsCommandOutput> {
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
    input: XmlTimestampsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryXmlTimestampsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<XmlTimestampsCommandOutput> {
    return deserializeAws_queryXmlTimestampsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
