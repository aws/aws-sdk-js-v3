import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { StreamingTraitsRequireLengthInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1StreamingTraitsRequireLengthCommand,
  serializeAws_restJson1StreamingTraitsRequireLengthCommand,
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

export type StreamingTraitsRequireLengthCommandInput = Omit<StreamingTraitsRequireLengthInputOutput, "blob"> & {
  blob?: StreamingTraitsRequireLengthInputOutput["blob"] | string | Uint8Array | Buffer;
};
export type StreamingTraitsRequireLengthCommandOutput = StreamingTraitsRequireLengthInputOutput & __MetadataBearer;

/**
 * This examples serializes a streaming blob shape with a required content
 * length in the request body.
 *
 * In this example, no JSON document is synthesized because the payload is
 * not a structure or a union type.
 */
export class StreamingTraitsRequireLengthCommand extends $Command<
  StreamingTraitsRequireLengthCommandInput,
  StreamingTraitsRequireLengthCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StreamingTraitsRequireLengthCommandInput) {
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
  ): Handler<StreamingTraitsRequireLengthCommandInput, StreamingTraitsRequireLengthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "StreamingTraitsRequireLengthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StreamingTraitsRequireLengthInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: StreamingTraitsRequireLengthInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StreamingTraitsRequireLengthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StreamingTraitsRequireLengthCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StreamingTraitsRequireLengthCommandOutput> {
    return deserializeAws_restJson1StreamingTraitsRequireLengthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
