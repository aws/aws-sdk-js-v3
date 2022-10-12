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

import { StreamingTraitsInputOutput, StreamingTraitsInputOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1StreamingTraitsCommand,
  serializeAws_restJson1StreamingTraitsCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

type StreamingTraitsCommandInputType = Omit<StreamingTraitsInputOutput, "blob"> & {
  /**
   * For *`StreamingTraitsInputOutput["blob"]`*, see {@link StreamingTraitsInputOutput.blob}.
   */
  blob?: StreamingTraitsInputOutput["blob"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `StreamingTraitsInputOutput` interface. There are more parameters than `blob` defined in {@link StreamingTraitsInputOutput}
 */
export interface StreamingTraitsCommandInput extends StreamingTraitsCommandInputType {}
export interface StreamingTraitsCommandOutput
  extends __WithSdkStreamMixin<StreamingTraitsInputOutput, "blob">,
    __MetadataBearer {}

/**
 * This examples serializes a streaming blob shape in the request body.
 *
 * In this example, no JSON document is synthesized because the payload is
 * not a structure or a union type.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, StreamingTraitsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, StreamingTraitsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new StreamingTraitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StreamingTraitsCommandInput} for command's `input` shape.
 * @see {@link StreamingTraitsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 */
export class StreamingTraitsCommand extends $Command<
  StreamingTraitsCommandInput,
  StreamingTraitsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StreamingTraitsCommandInput) {
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
  ): Handler<StreamingTraitsCommandInput, StreamingTraitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "StreamingTraitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StreamingTraitsInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: StreamingTraitsInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StreamingTraitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StreamingTraitsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<StreamingTraitsCommandOutput> {
    return deserializeAws_restJson1StreamingTraitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
