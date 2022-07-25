// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { SimpleScalarXmlPropertiesOutput, SimpleScalarXmlPropertiesOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_ec2SimpleScalarXmlPropertiesCommand,
  serializeAws_ec2SimpleScalarXmlPropertiesCommand,
} from "../protocols/Aws_ec2";

export interface SimpleScalarXmlPropertiesCommandInput {}
export interface SimpleScalarXmlPropertiesCommandOutput extends SimpleScalarXmlPropertiesOutput, __MetadataBearer {}

export class SimpleScalarXmlPropertiesCommand extends $Command<
  SimpleScalarXmlPropertiesCommandInput,
  SimpleScalarXmlPropertiesCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SimpleScalarXmlPropertiesCommandInput) {
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
  ): Handler<SimpleScalarXmlPropertiesCommandInput, SimpleScalarXmlPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "SimpleScalarXmlPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: SimpleScalarXmlPropertiesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SimpleScalarXmlPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2SimpleScalarXmlPropertiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SimpleScalarXmlPropertiesCommandOutput> {
    return deserializeAws_ec2SimpleScalarXmlPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
