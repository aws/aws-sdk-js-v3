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
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
  StreamingBlobPayloadInputTypes,
} from "@smithy/types";

import {
  StreamingTraitsRequireLengthInput,
  StreamingTraitsRequireLengthInputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_StreamingTraitsRequireLengthCommand,
  se_StreamingTraitsRequireLengthCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StreamingTraitsRequireLengthCommand}.
 */
export interface StreamingTraitsRequireLengthCommandInput extends Omit<StreamingTraitsRequireLengthInput, "blob"> {
  blob?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link StreamingTraitsRequireLengthCommand}.
 */
export interface StreamingTraitsRequireLengthCommandOutput extends __MetadataBearer {}

/**
 * @public
 * This examples serializes a streaming blob shape with a required content
 * length in the request body.
 *
 * In this example, no JSON document is synthesized because the payload is
 * not a structure or a union type.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, StreamingTraitsRequireLengthCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, StreamingTraitsRequireLengthCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // StreamingTraitsRequireLengthInput
 *   foo: "STRING_VALUE",
 *   blob: "STREAMING_BLOB_VALUE",
 * };
 * const command = new StreamingTraitsRequireLengthCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StreamingTraitsRequireLengthCommandInput - {@link StreamingTraitsRequireLengthCommandInput}
 * @returns {@link StreamingTraitsRequireLengthCommandOutput}
 * @see {@link StreamingTraitsRequireLengthCommandInput} for command's `input` shape.
 * @see {@link StreamingTraitsRequireLengthCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class StreamingTraitsRequireLengthCommand extends $Command<
  StreamingTraitsRequireLengthCommandInput,
  StreamingTraitsRequireLengthCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
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
      inputFilterSensitiveLog: StreamingTraitsRequireLengthInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "StreamingTraitsRequireLength",
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
  private serialize(input: StreamingTraitsRequireLengthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StreamingTraitsRequireLengthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StreamingTraitsRequireLengthCommandOutput> {
    return de_StreamingTraitsRequireLengthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
