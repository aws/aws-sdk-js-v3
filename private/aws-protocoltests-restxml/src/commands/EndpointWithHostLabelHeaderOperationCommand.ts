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

import { HostLabelHeaderInput } from "../models/models_0";
import {
  de_EndpointWithHostLabelHeaderOperationCommand,
  se_EndpointWithHostLabelHeaderOperationCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EndpointWithHostLabelHeaderOperationCommand}.
 */
export interface EndpointWithHostLabelHeaderOperationCommandInput extends HostLabelHeaderInput {}
/**
 * @public
 *
 * The output of {@link EndpointWithHostLabelHeaderOperationCommand}.
 */
export interface EndpointWithHostLabelHeaderOperationCommandOutput extends __MetadataBearer {}

export class EndpointWithHostLabelHeaderOperationCommand extends $Command<
  EndpointWithHostLabelHeaderOperationCommandInput,
  EndpointWithHostLabelHeaderOperationCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: EndpointWithHostLabelHeaderOperationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EndpointWithHostLabelHeaderOperationCommandInput, EndpointWithHostLabelHeaderOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "EndpointWithHostLabelHeaderOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "EndpointWithHostLabelHeaderOperation",
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
  private serialize(
    input: EndpointWithHostLabelHeaderOperationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_EndpointWithHostLabelHeaderOperationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EndpointWithHostLabelHeaderOperationCommandOutput> {
    return de_EndpointWithHostLabelHeaderOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
