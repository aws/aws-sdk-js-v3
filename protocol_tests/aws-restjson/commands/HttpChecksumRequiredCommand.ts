import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpChecksumRequiredInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1HttpChecksumRequiredCommand,
  serializeAws_restJson1HttpChecksumRequiredCommand,
} from "../protocols/Aws_restJson1";
import { getApplyMd5BodyChecksumPlugin } from "@aws-sdk/middleware-apply-body-checksum";
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

export interface HttpChecksumRequiredCommandInput extends HttpChecksumRequiredInputOutput {}
export interface HttpChecksumRequiredCommandOutput extends HttpChecksumRequiredInputOutput, __MetadataBearer {}

/**
 * This example tests httpChecksumRequired trait
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpChecksumRequiredCommand } from "@aws-sdk/aws-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpChecksumRequiredCommand } = require("@aws-sdk/aws-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new HttpChecksumRequiredCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link HttpChecksumRequiredCommandInput} for command's `input` shape.
 * @see {@link HttpChecksumRequiredCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class HttpChecksumRequiredCommand extends $Command<
  HttpChecksumRequiredCommandInput,
  HttpChecksumRequiredCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpChecksumRequiredCommandInput) {
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
  ): Handler<HttpChecksumRequiredCommandInput, HttpChecksumRequiredCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpChecksumRequiredCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpChecksumRequiredInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: HttpChecksumRequiredInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpChecksumRequiredCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1HttpChecksumRequiredCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpChecksumRequiredCommandOutput> {
    return deserializeAws_restJson1HttpChecksumRequiredCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
