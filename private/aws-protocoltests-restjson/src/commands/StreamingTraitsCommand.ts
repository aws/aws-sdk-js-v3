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
  SMITHY_CONTEXT_KEY,
  StreamingBlobPayloadInputTypes,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { StreamingTraitsInputOutput, StreamingTraitsInputOutputFilterSensitiveLog } from "../models/models_0";
import { de_StreamingTraitsCommand, se_StreamingTraitsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StreamingTraitsCommand}.
 */
export interface StreamingTraitsCommandInput extends Omit<StreamingTraitsInputOutput, "blob"> {
  blob?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link StreamingTraitsCommand}.
 */
export interface StreamingTraitsCommandOutput extends Omit<StreamingTraitsInputOutput, "blob">, __MetadataBearer {
  blob?: StreamingBlobPayloadOutputTypes;
}

/**
 * @public
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
 * const input = { // StreamingTraitsInputOutput
 *   foo: "STRING_VALUE",
 *   blob: "STREAMING_BLOB_VALUE",
 * };
 * const command = new StreamingTraitsCommand(input);
 * const response = await client.send(command);
 * // { // StreamingTraitsInputOutput
 * //   foo: "STRING_VALUE",
 * //   blob: "STREAMING_BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param StreamingTraitsCommandInput - {@link StreamingTraitsCommandInput}
 * @returns {@link StreamingTraitsCommandOutput}
 * @see {@link StreamingTraitsCommandInput} for command's `input` shape.
 * @see {@link StreamingTraitsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class StreamingTraitsCommand extends $Command<
  StreamingTraitsCommandInput,
  StreamingTraitsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  /**
   * @public
   */
  constructor(readonly input: StreamingTraitsCommandInput) {
    super();
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
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "StreamingTraits",
      },
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
  private serialize(input: StreamingTraitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StreamingTraitsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<StreamingTraitsCommandOutput> {
    return de_StreamingTraitsCommand(output, context);
  }
}
