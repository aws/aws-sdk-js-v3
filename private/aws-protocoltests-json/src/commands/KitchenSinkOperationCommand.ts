// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { KitchenSink } from "../models/models_0";
import { de_KitchenSinkOperationCommand, se_KitchenSinkOperationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link KitchenSinkOperationCommand}.
 */
export interface KitchenSinkOperationCommandInput extends KitchenSink {}
/**
 * @public
 *
 * The output of {@link KitchenSinkOperationCommand}.
 */
export interface KitchenSinkOperationCommandOutput extends KitchenSink, __MetadataBearer {}

export class KitchenSinkOperationCommand extends $Command<
  KitchenSinkOperationCommandInput,
  KitchenSinkOperationCommandOutput,
  JsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: KitchenSinkOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_KitchenSinkOperationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<KitchenSinkOperationCommandOutput> {
    return de_KitchenSinkOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
