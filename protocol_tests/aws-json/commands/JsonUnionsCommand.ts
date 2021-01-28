import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { UnionInputOutput } from "../models/models_0";
import {
  deserializeAws_json1_1JsonUnionsCommand,
  serializeAws_json1_1JsonUnionsCommand,
} from "../protocols/Aws_json1_1";
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

export type JsonUnionsCommandInput = UnionInputOutput;
export type JsonUnionsCommandOutput = UnionInputOutput & __MetadataBearer;

/**
 * This operation uses unions for inputs and outputs.
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
    return serializeAws_json1_1JsonUnionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonUnionsCommandOutput> {
    return deserializeAws_json1_1JsonUnionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
