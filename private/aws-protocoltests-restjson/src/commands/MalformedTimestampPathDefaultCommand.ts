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

import { MalformedTimestampPathDefaultInput } from "../models/models_0";
import {
  de_MalformedTimestampPathDefaultCommand,
  se_MalformedTimestampPathDefaultCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link MalformedTimestampPathDefaultCommand}.
 */
export interface MalformedTimestampPathDefaultCommandInput extends MalformedTimestampPathDefaultInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampPathDefaultCommand}.
 */
export interface MalformedTimestampPathDefaultCommandOutput extends __MetadataBearer {}

export class MalformedTimestampPathDefaultCommand extends $Command<
  MalformedTimestampPathDefaultCommandInput,
  MalformedTimestampPathDefaultCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: MalformedTimestampPathDefaultCommandInput) {
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
  ): Handler<MalformedTimestampPathDefaultCommandInput, MalformedTimestampPathDefaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "MalformedTimestampPathDefaultCommand";
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
  private serialize(input: MalformedTimestampPathDefaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_MalformedTimestampPathDefaultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MalformedTimestampPathDefaultCommandOutput> {
    return de_MalformedTimestampPathDefaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
