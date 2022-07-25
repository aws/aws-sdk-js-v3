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

import {
  MalformedTimestampHeaderEpochInput,
  MalformedTimestampHeaderEpochInputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1MalformedTimestampHeaderEpochCommand,
  serializeAws_restJson1MalformedTimestampHeaderEpochCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

export interface MalformedTimestampHeaderEpochCommandInput extends MalformedTimestampHeaderEpochInput {}
export interface MalformedTimestampHeaderEpochCommandOutput extends __MetadataBearer {}

export class MalformedTimestampHeaderEpochCommand extends $Command<
  MalformedTimestampHeaderEpochCommandInput,
  MalformedTimestampHeaderEpochCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MalformedTimestampHeaderEpochCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MalformedTimestampHeaderEpochCommandInput, MalformedTimestampHeaderEpochCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "MalformedTimestampHeaderEpochCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MalformedTimestampHeaderEpochInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MalformedTimestampHeaderEpochCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1MalformedTimestampHeaderEpochCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MalformedTimestampHeaderEpochCommandOutput> {
    return deserializeAws_restJson1MalformedTimestampHeaderEpochCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
