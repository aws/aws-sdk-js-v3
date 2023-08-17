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
import { OperationWithOptionalInputOutputInput, OperationWithOptionalInputOutputOutput } from "../models/models_0";
import {
  de_OperationWithOptionalInputOutputCommand,
  se_OperationWithOptionalInputOutputCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link OperationWithOptionalInputOutputCommand}.
 */
export interface OperationWithOptionalInputOutputCommandInput extends OperationWithOptionalInputOutputInput {}
/**
 * @public
 *
 * The output of {@link OperationWithOptionalInputOutputCommand}.
 */
export interface OperationWithOptionalInputOutputCommandOutput
  extends OperationWithOptionalInputOutputOutput,
    __MetadataBearer {}

export class OperationWithOptionalInputOutputCommand extends $Command<
  OperationWithOptionalInputOutputCommandInput,
  OperationWithOptionalInputOutputCommandOutput,
  JsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: OperationWithOptionalInputOutputCommandInput) {
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
  ): Handler<OperationWithOptionalInputOutputCommandInput, OperationWithOptionalInputOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JsonProtocolClient";
    const commandName = "OperationWithOptionalInputOutputCommand";
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
  private serialize(
    input: OperationWithOptionalInputOutputCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_OperationWithOptionalInputOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<OperationWithOptionalInputOutputCommandOutput> {
    return de_OperationWithOptionalInputOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
