import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { XmlBlobsOutput } from "../models/models_0";
import { deserializeAws_ec2XmlEmptyBlobsCommand, serializeAws_ec2XmlEmptyBlobsCommand } from "../protocols/Aws_ec2";
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

export type XmlEmptyBlobsCommandInput = {};
export type XmlEmptyBlobsCommandOutput = XmlBlobsOutput & __MetadataBearer;

export class XmlEmptyBlobsCommand extends $Command<
  XmlEmptyBlobsCommandInput,
  XmlEmptyBlobsCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: XmlEmptyBlobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<XmlEmptyBlobsCommandInput, XmlEmptyBlobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "XmlEmptyBlobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: XmlBlobsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: XmlEmptyBlobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2XmlEmptyBlobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlEmptyBlobsCommandOutput> {
    return deserializeAws_ec2XmlEmptyBlobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
