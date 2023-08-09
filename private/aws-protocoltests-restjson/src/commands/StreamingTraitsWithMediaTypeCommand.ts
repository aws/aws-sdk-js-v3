// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  StreamingBlobPayloadInputTypes,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import {
  StreamingTraitsWithMediaTypeInputOutput,
  StreamingTraitsWithMediaTypeInputOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_StreamingTraitsWithMediaTypeCommand,
  se_StreamingTraitsWithMediaTypeCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StreamingTraitsWithMediaTypeCommand}.
 */
export interface StreamingTraitsWithMediaTypeCommandInput
  extends Omit<StreamingTraitsWithMediaTypeInputOutput, "blob"> {
  blob?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link StreamingTraitsWithMediaTypeCommand}.
 */
export interface StreamingTraitsWithMediaTypeCommandOutput
  extends Omit<StreamingTraitsWithMediaTypeInputOutput, "blob">,
    __MetadataBearer {
  blob?: StreamingBlobPayloadOutputTypes;
}

/**
 * @public
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
 * const input = { // StreamingTraitsWithMediaTypeInputOutput
 *   foo: "STRING_VALUE",
 *   blob: "STREAMING_BLOB_VALUE",
 * };
 * const command = new StreamingTraitsWithMediaTypeCommand(input);
 * const response = await client.send(command);
 * // { // StreamingTraitsWithMediaTypeInputOutput
 * //   foo: "STRING_VALUE",
 * //   blob: "STREAMING_BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param StreamingTraitsWithMediaTypeCommandInput - {@link StreamingTraitsWithMediaTypeCommandInput}
 * @returns {@link StreamingTraitsWithMediaTypeCommandOutput}
 * @see {@link StreamingTraitsWithMediaTypeCommandInput} for command's `input` shape.
 * @see {@link StreamingTraitsWithMediaTypeCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class StreamingTraitsWithMediaTypeCommand extends $Command<
  StreamingTraitsWithMediaTypeCommandInput,
  StreamingTraitsWithMediaTypeCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
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

  /**
   * @internal
   */
  private serialize(input: StreamingTraitsWithMediaTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StreamingTraitsWithMediaTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<StreamingTraitsWithMediaTypeCommandOutput> {
    return de_StreamingTraitsWithMediaTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
