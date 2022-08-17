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
  MalformedAcceptWithGenericStringOutput,
  MalformedAcceptWithGenericStringOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1MalformedAcceptWithGenericStringCommand,
  serializeAws_restJson1MalformedAcceptWithGenericStringCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

export interface MalformedAcceptWithGenericStringCommandInput {}
export interface MalformedAcceptWithGenericStringCommandOutput
  extends MalformedAcceptWithGenericStringOutput,
    __MetadataBearer {}

export class MalformedAcceptWithGenericStringCommand extends $Command<
  MalformedAcceptWithGenericStringCommandInput,
  MalformedAcceptWithGenericStringCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MalformedAcceptWithGenericStringCommandInput) {
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
  ): Handler<MalformedAcceptWithGenericStringCommandInput, MalformedAcceptWithGenericStringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "MalformedAcceptWithGenericStringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: MalformedAcceptWithGenericStringOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: MalformedAcceptWithGenericStringCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1MalformedAcceptWithGenericStringCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MalformedAcceptWithGenericStringCommandOutput> {
    return deserializeAws_restJson1MalformedAcceptWithGenericStringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
