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

import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import {
  SimpleScalarPropertiesInput,
  SimpleScalarPropertiesInputFilterSensitiveLog,
  SimpleScalarPropertiesOutput,
  SimpleScalarPropertiesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0SimpleScalarPropertiesCommand,
  serializeAws_json1_0SimpleScalarPropertiesCommand,
} from "../protocols/Aws_json1_0";

export interface SimpleScalarPropertiesCommandInput extends SimpleScalarPropertiesInput {}
export interface SimpleScalarPropertiesCommandOutput extends SimpleScalarPropertiesOutput, __MetadataBearer {}

export class SimpleScalarPropertiesCommand extends $Command<
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
  JSONRPC10ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SimpleScalarPropertiesCommandInput) {
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
  ): Handler<SimpleScalarPropertiesCommandInput, SimpleScalarPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JSONRPC10Client";
    const commandName = "SimpleScalarPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SimpleScalarPropertiesInputFilterSensitiveLog,
      outputFilterSensitiveLog: SimpleScalarPropertiesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SimpleScalarPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0SimpleScalarPropertiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SimpleScalarPropertiesCommandOutput> {
    return deserializeAws_json1_0SimpleScalarPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
