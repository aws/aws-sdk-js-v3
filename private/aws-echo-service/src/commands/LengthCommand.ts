// smithy-typescript generated code
import { EchoServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EchoServiceClient";
import {
  LengthInput,
  LengthInputFilterSensitiveLog,
  LengthOutput,
  LengthOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_restJson1LengthCommand, serializeAws_restJson1LengthCommand } from "../protocols/Aws_restJson1";
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

export interface LengthCommandInput extends LengthInput {}
export interface LengthCommandOutput extends LengthOutput, __MetadataBearer {}

export class LengthCommand extends $Command<LengthCommandInput, LengthCommandOutput, EchoServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: LengthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EchoServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LengthCommandInput, LengthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EchoServiceClient";
    const commandName = "LengthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: LengthInputFilterSensitiveLog,
      outputFilterSensitiveLog: LengthOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: LengthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1LengthCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LengthCommandOutput> {
    return deserializeAws_restJson1LengthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
