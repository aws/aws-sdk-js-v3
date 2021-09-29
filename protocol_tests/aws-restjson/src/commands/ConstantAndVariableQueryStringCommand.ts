import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { ConstantAndVariableQueryStringInput } from "../models/models_0";
import {
  deserializeAws_restJson1ConstantAndVariableQueryStringCommand,
  serializeAws_restJson1ConstantAndVariableQueryStringCommand,
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

export interface ConstantAndVariableQueryStringCommandInput extends ConstantAndVariableQueryStringInput {}
export interface ConstantAndVariableQueryStringCommandOutput extends __MetadataBearer {}

/**
 * This example uses fixed query string params and variable query string params.
 * The fixed query string parameters and variable parameters must both be
 * serialized (implementations may need to merge them together).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, ConstantAndVariableQueryStringCommand } from "@aws-sdk/aws-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, ConstantAndVariableQueryStringCommand } = require("@aws-sdk/aws-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new ConstantAndVariableQueryStringCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConstantAndVariableQueryStringCommandInput} for command's `input` shape.
 * @see {@link ConstantAndVariableQueryStringCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ConstantAndVariableQueryStringCommand extends $Command<
  ConstantAndVariableQueryStringCommandInput,
  ConstantAndVariableQueryStringCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConstantAndVariableQueryStringCommandInput) {
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
  ): Handler<ConstantAndVariableQueryStringCommandInput, ConstantAndVariableQueryStringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "ConstantAndVariableQueryStringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConstantAndVariableQueryStringInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ConstantAndVariableQueryStringCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ConstantAndVariableQueryStringCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ConstantAndVariableQueryStringCommandOutput> {
    return deserializeAws_restJson1ConstantAndVariableQueryStringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
