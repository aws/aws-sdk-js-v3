import {
  EC2ProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2ProtocolClient";
import { XmlListsOutput } from "../models/index";
import {
  deserializeAws_ec2XmlListsCommand,
  serializeAws_ec2XmlListsCommand,
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

export type XmlListsCommandInput = {}
export type XmlListsCommandOutput = XmlListsOutput & __MetadataBearer;

export class XmlListsCommand extends $Command<XmlListsCommandInput, XmlListsCommandOutput, EC2ProtocolClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: XmlListsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<XmlListsCommandInput, XmlListsCommandOutput> {
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
    input: XmlListsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2XmlListsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<XmlListsCommandOutput> {
    return deserializeAws_ec2XmlListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
