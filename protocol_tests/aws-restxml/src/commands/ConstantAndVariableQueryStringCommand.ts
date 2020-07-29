import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { ConstantAndVariableQueryStringInput } from "../models/index";
import {
  deserializeAws_restXmlConstantAndVariableQueryStringCommand,
  serializeAws_restXmlConstantAndVariableQueryStringCommand,
} from "../protocols/Aws_restXml";
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

export type ConstantAndVariableQueryStringCommandInput = ConstantAndVariableQueryStringInput;
export type ConstantAndVariableQueryStringCommandOutput = __MetadataBearer;

export class ConstantAndVariableQueryStringCommand extends $Command<
  ConstantAndVariableQueryStringCommandInput,
  ConstantAndVariableQueryStringCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConstantAndVariableQueryStringCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConstantAndVariableQueryStringCommandInput, ConstantAndVariableQueryStringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ConstantAndVariableQueryStringCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlConstantAndVariableQueryStringCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ConstantAndVariableQueryStringCommandOutput> {
    return deserializeAws_restXmlConstantAndVariableQueryStringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
