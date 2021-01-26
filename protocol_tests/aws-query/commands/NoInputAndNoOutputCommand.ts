import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import {
  deserializeAws_queryNoInputAndNoOutputCommand,
  serializeAws_queryNoInputAndNoOutputCommand,
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

export type NoInputAndNoOutputCommandInput = {};
export type NoInputAndNoOutputCommandOutput = __MetadataBearer;

/**
 * The example tests how requests and responses are serialized when there's
 * no request or response payload because the operation has no input or output.
 *
 * While this should be rare, code generators must support this.
 */
export class NoInputAndNoOutputCommand extends $Command<
  NoInputAndNoOutputCommandInput,
  NoInputAndNoOutputCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NoInputAndNoOutputCommandInput) {
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
  ): Handler<NoInputAndNoOutputCommandInput, NoInputAndNoOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "NoInputAndNoOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NoInputAndNoOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryNoInputAndNoOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NoInputAndNoOutputCommandOutput> {
    return deserializeAws_queryNoInputAndNoOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
