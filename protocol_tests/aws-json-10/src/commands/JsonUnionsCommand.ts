import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { UnionInputOutput } from "../models/models_0";
import {
  deserializeAws_json1_0JsonUnionsCommand,
  serializeAws_json1_0JsonUnionsCommand,
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

export interface JsonUnionsCommandInput extends UnionInputOutput {}
export interface JsonUnionsCommandOutput extends UnionInputOutput, __MetadataBearer {}

/**
 * This operation uses unions for inputs and outputs.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, JsonUnionsCommand } from "@aws-sdk/aws-json-10"; // ES Modules import
 * // const { JSONRPC10Client, JsonUnionsCommand } = require("@aws-sdk/aws-json-10"); // CommonJS import
 * const client = new JSONRPC10Client(config);
 * const command = new JsonUnionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JsonUnionsCommandInput} for command's `input` shape.
 * @see {@link JsonUnionsCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class JsonUnionsCommand extends $Command<
  JsonUnionsCommandInput,
  JsonUnionsCommandOutput,
  JSONRPC10ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: JsonUnionsCommandInput) {
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
  ): Handler<JsonUnionsCommandInput, JsonUnionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JSONRPC10Client";
    const commandName = "JsonUnionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnionInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: UnionInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: JsonUnionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0JsonUnionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonUnionsCommandOutput> {
    return deserializeAws_json1_0JsonUnionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
