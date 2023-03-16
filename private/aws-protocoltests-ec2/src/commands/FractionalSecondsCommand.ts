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
import { FractionalSecondsOutput, FractionalSecondsOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_ec2FractionalSecondsCommand,
  serializeAws_ec2FractionalSecondsCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link FractionalSecondsCommand}.
 */
export interface FractionalSecondsCommandInput {}
/**
 * The output of {@link FractionalSecondsCommand}.
 */
export interface FractionalSecondsCommandOutput extends FractionalSecondsOutput, __MetadataBearer {}

export class FractionalSecondsCommand extends $Command<
  FractionalSecondsCommandInput,
  FractionalSecondsCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FractionalSecondsCommandInput) {
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
  ): Handler<FractionalSecondsCommandInput, FractionalSecondsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "FractionalSecondsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: FractionalSecondsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FractionalSecondsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2FractionalSecondsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FractionalSecondsCommandOutput> {
    return deserializeAws_ec2FractionalSecondsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
