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
  SdkStream as __SdkStream,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@aws-sdk/types";

import {
  StreamingTraitsWithMediaTypeInputOutput,
  StreamingTraitsWithMediaTypeInputOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StreamingTraitsWithMediaTypeCommand,
  serializeAws_restJson1StreamingTraitsWithMediaTypeCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

type StreamingTraitsWithMediaTypeCommandInputType = Omit<StreamingTraitsWithMediaTypeInputOutput, "blob"> & {
  /**
   * For *`StreamingTraitsWithMediaTypeInputOutput["blob"]`*, see {@link StreamingTraitsWithMediaTypeInputOutput.blob}.
   */
  blob?: StreamingTraitsWithMediaTypeInputOutput["blob"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `StreamingTraitsWithMediaTypeInputOutput` interface. There are more parameters than `blob` defined in {@link StreamingTraitsWithMediaTypeInputOutput}
 */
export interface StreamingTraitsWithMediaTypeCommandInput extends StreamingTraitsWithMediaTypeCommandInputType {}
export interface StreamingTraitsWithMediaTypeCommandOutput
  extends __WithSdkStreamMixin<StreamingTraitsWithMediaTypeInputOutput, "blob">,
    __MetadataBearer {}

/**
 * This examples serializes a streaming media-typed blob shape in the request body.
 *
 * This examples uses a `@mediaType` trait on the payload to force a custom
 * content-type to be serialized.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, StreamingTraitsWithMediaTypeCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, StreamingTraitsWithMediaTypeCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new StreamingTraitsWithMediaTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StreamingTraitsWithMediaTypeCommandInput} for command's `input` shape.
 * @see {@link StreamingTraitsWithMediaTypeCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
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
      inputFilterSensitiveLog: StreamingTraitsWithMediaTypeInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: StreamingTraitsWithMediaTypeInputOutputFilterSensitiveLog,
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
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<StreamingTraitsWithMediaTypeCommandOutput> {
    return deserializeAws_restJson1StreamingTraitsWithMediaTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
