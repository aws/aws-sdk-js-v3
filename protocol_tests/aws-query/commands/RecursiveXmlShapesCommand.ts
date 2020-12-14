import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import { RecursiveXmlShapesOutput } from "../models/models_0";
import {
  deserializeAws_queryRecursiveXmlShapesCommand,
  serializeAws_queryRecursiveXmlShapesCommand,
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

export type RecursiveXmlShapesCommandInput = {};
export type RecursiveXmlShapesCommandOutput = RecursiveXmlShapesOutput & __MetadataBearer;

/**
 * Recursive shapes
 */
export class RecursiveXmlShapesCommand extends $Command<
  RecursiveXmlShapesCommandInput,
  RecursiveXmlShapesCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RecursiveXmlShapesCommandInput) {
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
  ): Handler<RecursiveXmlShapesCommandInput, RecursiveXmlShapesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "RecursiveXmlShapesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: RecursiveXmlShapesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RecursiveXmlShapesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRecursiveXmlShapesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecursiveXmlShapesCommandOutput> {
    return deserializeAws_queryRecursiveXmlShapesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
