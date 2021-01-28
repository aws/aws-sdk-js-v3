import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { ConstantQueryStringInput } from "../models/models_0";
import {
  deserializeAws_restJson1ConstantQueryStringCommand,
  serializeAws_restJson1ConstantQueryStringCommand,
} from "../protocols/Aws_restJson1";
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

export type ConstantQueryStringCommandInput = ConstantQueryStringInput;
export type ConstantQueryStringCommandOutput = __MetadataBearer;

/**
 * This example uses a constant query string parameters and a label.
 * This simply tests that labels and query string parameters are
 * compatible. The fixed query string parameter named "hello" should
 * in no way conflict with the label, `{hello}`.
 */
export class ConstantQueryStringCommand extends $Command<
  ConstantQueryStringCommandInput,
  ConstantQueryStringCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConstantQueryStringCommandInput) {
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
  ): Handler<ConstantQueryStringCommandInput, ConstantQueryStringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "ConstantQueryStringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConstantQueryStringInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConstantQueryStringCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ConstantQueryStringCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConstantQueryStringCommandOutput> {
    return deserializeAws_restJson1ConstantQueryStringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
