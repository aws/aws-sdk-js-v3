import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { EmptyInputAndEmptyOutputInput } from "../models/models_0";
import {
  deserializeAws_json1_0EmptyInputAndEmptyOutputCommand,
  serializeAws_json1_0EmptyInputAndEmptyOutputCommand,
} from "../protocols/Aws_json1_0";
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

export interface EmptyInputAndEmptyOutputCommandInput extends EmptyInputAndEmptyOutputInput {}
export interface EmptyInputAndEmptyOutputCommandOutput extends EmptyInputAndEmptyOutputInput, __MetadataBearer {}

/**
 * The example tests how requests and responses are serialized when there's
 * no request or response payload because the operation has an empty input
 * and empty output structure that reuses the same shape. While this should
 * be rare, code generators must support this.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, EmptyInputAndEmptyOutputCommand } from "@aws-sdk/aws-json-10"; // ES Modules import
 * // const { JSONRPC10Client, EmptyInputAndEmptyOutputCommand } = require("@aws-sdk/aws-json-10"); // CommonJS import
 * const client = new JSONRPC10Client(config);
 * const command = new EmptyInputAndEmptyOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EmptyInputAndEmptyOutputCommandInput} for command's `input` shape.
 * @see {@link EmptyInputAndEmptyOutputCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class EmptyInputAndEmptyOutputCommand extends $Command<
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
  JSONRPC10ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EmptyInputAndEmptyOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: JSONRPC10ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EmptyInputAndEmptyOutputCommandInput, EmptyInputAndEmptyOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JSONRPC10Client";
    const commandName = "EmptyInputAndEmptyOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EmptyInputAndEmptyOutputInput.filterSensitiveLog,
      outputFilterSensitiveLog: EmptyInputAndEmptyOutputInput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EmptyInputAndEmptyOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0EmptyInputAndEmptyOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EmptyInputAndEmptyOutputCommandOutput> {
    return deserializeAws_json1_0EmptyInputAndEmptyOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
