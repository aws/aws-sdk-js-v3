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

import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { UnionInputOutput, UnionInputOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1JsonUnionsCommand,
  serializeAws_json1_1JsonUnionsCommand,
} from "../protocols/Aws_json1_1";

export interface JsonUnionsCommandInput extends UnionInputOutput {}
export interface JsonUnionsCommandOutput extends UnionInputOutput, __MetadataBearer {}

/**
 * This operation uses unions for inputs and outputs.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, JsonUnionsCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, JsonUnionsCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const command = new JsonUnionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JsonUnionsCommandInput} for command's `input` shape.
 * @see {@link JsonUnionsCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 */
export class JsonUnionsCommand extends $Command<
  JsonUnionsCommandInput,
  JsonUnionsCommandOutput,
  JsonProtocolClientResolvedConfig
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
    configuration: JsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<JsonUnionsCommandInput, JsonUnionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JsonProtocolClient";
    const commandName = "JsonUnionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnionInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: UnionInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: JsonUnionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1JsonUnionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonUnionsCommandOutput> {
    return deserializeAws_json1_1JsonUnionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
