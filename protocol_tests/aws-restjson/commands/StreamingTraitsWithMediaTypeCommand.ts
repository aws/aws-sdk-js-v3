import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { StreamingTraitsWithMediaTypeInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1StreamingTraitsWithMediaTypeCommand,
  serializeAws_restJson1StreamingTraitsWithMediaTypeCommand,
} from "../protocols/Aws_restJson1";
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

export type StreamingTraitsWithMediaTypeCommandInput = Omit<StreamingTraitsWithMediaTypeInputOutput, "blob"> & {
  blob?: StreamingTraitsWithMediaTypeInputOutput["blob"] | string | Uint8Array | Buffer;
};
export type StreamingTraitsWithMediaTypeCommandOutput = StreamingTraitsWithMediaTypeInputOutput & __MetadataBearer;

/**
 * This examples serializes a streaming media-typed blob shape in the request body.
 *
 * This examples uses a `@mediaType` trait on the payload to force a custom
 * content-type to be serialized.
 */
export class StreamingTraitsWithMediaTypeCommand extends $Command<
  StreamingTraitsWithMediaTypeCommandInput,
  StreamingTraitsWithMediaTypeCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StreamingTraitsWithMediaTypeCommandInput) {
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
  ): Handler<StreamingTraitsWithMediaTypeCommandInput, StreamingTraitsWithMediaTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "StreamingTraitsWithMediaTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StreamingTraitsWithMediaTypeInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: StreamingTraitsWithMediaTypeInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StreamingTraitsWithMediaTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StreamingTraitsWithMediaTypeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StreamingTraitsWithMediaTypeCommandOutput> {
    return deserializeAws_restJson1StreamingTraitsWithMediaTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
