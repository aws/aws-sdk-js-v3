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
import { JsonEnumsInputOutput, JsonEnumsInputOutputFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_json1_1JsonEnumsCommand, serializeAws_json1_1JsonEnumsCommand } from "../protocols/Aws_json1_1";

export interface JsonEnumsCommandInput extends JsonEnumsInputOutput {}
export interface JsonEnumsCommandOutput extends JsonEnumsInputOutput, __MetadataBearer {}

/**
 * This example serializes enums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, JsonEnumsCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, JsonEnumsCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const command = new JsonEnumsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JsonEnumsCommandInput} for command's `input` shape.
 * @see {@link JsonEnumsCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 */
export class JsonEnumsCommand extends $Command<
  JsonEnumsCommandInput,
  JsonEnumsCommandOutput,
  JsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: JsonEnumsCommandInput) {
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
  ): Handler<JsonEnumsCommandInput, JsonEnumsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JsonProtocolClient";
    const commandName = "JsonEnumsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: JsonEnumsInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: JsonEnumsInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: JsonEnumsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1JsonEnumsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonEnumsCommandOutput> {
    return deserializeAws_json1_1JsonEnumsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
