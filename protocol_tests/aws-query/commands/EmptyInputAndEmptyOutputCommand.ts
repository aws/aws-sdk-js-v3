import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import { EmptyInputAndEmptyOutputInput, EmptyInputAndEmptyOutputOutput } from "../models/models_0";
import {
  deserializeAws_queryEmptyInputAndEmptyOutputCommand,
  serializeAws_queryEmptyInputAndEmptyOutputCommand,
} from "../protocols/Aws_query";
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

export type EmptyInputAndEmptyOutputCommandInput = EmptyInputAndEmptyOutputInput;
export type EmptyInputAndEmptyOutputCommandOutput = EmptyInputAndEmptyOutputOutput & __MetadataBearer;

/**
 * The example tests how requests and responses are serialized when there's
 * no request or response members.
 *
 * While this should be rare, code generators must support this.
 */
export class EmptyInputAndEmptyOutputCommand extends $Command<
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EmptyInputAndEmptyOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EmptyInputAndEmptyOutputCommandInput, EmptyInputAndEmptyOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "EmptyInputAndEmptyOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EmptyInputAndEmptyOutputInput.filterSensitiveLog,
      outputFilterSensitiveLog: EmptyInputAndEmptyOutputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EmptyInputAndEmptyOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryEmptyInputAndEmptyOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EmptyInputAndEmptyOutputCommandOutput> {
    return deserializeAws_queryEmptyInputAndEmptyOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
