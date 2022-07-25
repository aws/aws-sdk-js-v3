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
import { KitchenSink, KitchenSinkFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1KitchenSinkOperationCommand,
  serializeAws_json1_1KitchenSinkOperationCommand,
} from "../protocols/Aws_json1_1";

export interface KitchenSinkOperationCommandInput extends KitchenSink {}
export interface KitchenSinkOperationCommandOutput extends KitchenSink, __MetadataBearer {}

export class KitchenSinkOperationCommand extends $Command<
  KitchenSinkOperationCommandInput,
  KitchenSinkOperationCommandOutput,
  JsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: KitchenSinkOperationCommandInput) {
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
  ): Handler<KitchenSinkOperationCommandInput, KitchenSinkOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JsonProtocolClient";
    const commandName = "KitchenSinkOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: KitchenSinkFilterSensitiveLog,
      outputFilterSensitiveLog: KitchenSinkFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: KitchenSinkOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1KitchenSinkOperationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<KitchenSinkOperationCommandOutput> {
    return deserializeAws_json1_1KitchenSinkOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
