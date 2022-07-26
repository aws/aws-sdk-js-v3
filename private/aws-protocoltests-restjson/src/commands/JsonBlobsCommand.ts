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
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { JsonBlobsInputOutput, JsonBlobsInputOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1JsonBlobsCommand,
  serializeAws_restJson1JsonBlobsCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

export interface JsonBlobsCommandInput extends JsonBlobsInputOutput {}
export interface JsonBlobsCommandOutput extends JsonBlobsInputOutput, __MetadataBearer {}

/**
 * Blobs are base64 encoded
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonBlobsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonBlobsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new JsonBlobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JsonBlobsCommandInput} for command's `input` shape.
 * @see {@link JsonBlobsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 */
export class JsonBlobsCommand extends $Command<
  JsonBlobsCommandInput,
  JsonBlobsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: JsonBlobsCommandInput) {
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
  ): Handler<JsonBlobsCommandInput, JsonBlobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "JsonBlobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: JsonBlobsInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: JsonBlobsInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: JsonBlobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1JsonBlobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonBlobsCommandOutput> {
    return deserializeAws_restJson1JsonBlobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
