// smithy-typescript generated code
import { EchoServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EchoServiceClient";
import { EchoInput, EchoInputFilterSensitiveLog, EchoOutput, EchoOutputFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_restJson1EchoCommand, serializeAws_restJson1EchoCommand } from "../protocols/Aws_restJson1";
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

export interface EchoCommandInput extends EchoInput {}
export interface EchoCommandOutput extends EchoOutput, __MetadataBearer {}

export class EchoCommand extends $Command<EchoCommandInput, EchoCommandOutput, EchoServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EchoCommandInput) {
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
  ): Handler<EchoCommandInput, EchoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EchoServiceClient";
    const commandName = "EchoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EchoInputFilterSensitiveLog,
      outputFilterSensitiveLog: EchoOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EchoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1EchoCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EchoCommandOutput> {
    return deserializeAws_restJson1EchoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
