import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import { NestedStructuresInput } from "../models/models_0";
import {
  deserializeAws_queryNestedStructuresCommand,
  serializeAws_queryNestedStructuresCommand,
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

export type NestedStructuresCommandInput = NestedStructuresInput;
export type NestedStructuresCommandOutput = __MetadataBearer;

/**
 * This test serializes nested and recursive structure members.
 */
export class NestedStructuresCommand extends $Command<
  NestedStructuresCommandInput,
  NestedStructuresCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NestedStructuresCommandInput) {
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
  ): Handler<NestedStructuresCommandInput, NestedStructuresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "NestedStructuresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NestedStructuresInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NestedStructuresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryNestedStructuresCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NestedStructuresCommandOutput> {
    return deserializeAws_queryNestedStructuresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
