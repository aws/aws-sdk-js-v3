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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GreetingStruct } from "../models/models_0";
import { de_MalformedAcceptWithBodyCommand, se_MalformedAcceptWithBodyCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link MalformedAcceptWithBodyCommand}.
 */
export interface MalformedAcceptWithBodyCommandInput {}
/**
 * @public
 *
 * The output of {@link MalformedAcceptWithBodyCommand}.
 */
export interface MalformedAcceptWithBodyCommandOutput extends GreetingStruct, __MetadataBearer {}

export class MalformedAcceptWithBodyCommand extends $Command<
  MalformedAcceptWithBodyCommandInput,
  MalformedAcceptWithBodyCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: MalformedAcceptWithBodyCommandInput) {
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
  ): Handler<MalformedAcceptWithBodyCommandInput, MalformedAcceptWithBodyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "MalformedAcceptWithBodyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "MalformedAcceptWithBody",
      },
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
  private serialize(input: MalformedAcceptWithBodyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_MalformedAcceptWithBodyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MalformedAcceptWithBodyCommandOutput> {
    return de_MalformedAcceptWithBodyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
