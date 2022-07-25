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

import {
  HttpPrefixHeadersInResponseInput,
  HttpPrefixHeadersInResponseInputFilterSensitiveLog,
  HttpPrefixHeadersInResponseOutput,
  HttpPrefixHeadersInResponseOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1HttpPrefixHeadersInResponseCommand,
  serializeAws_restJson1HttpPrefixHeadersInResponseCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

export interface HttpPrefixHeadersInResponseCommandInput extends HttpPrefixHeadersInResponseInput {}
export interface HttpPrefixHeadersInResponseCommandOutput extends HttpPrefixHeadersInResponseOutput, __MetadataBearer {}

/**
 * Clients that perform this test extract all headers from the response.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPrefixHeadersInResponseCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPrefixHeadersInResponseCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new HttpPrefixHeadersInResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link HttpPrefixHeadersInResponseCommandInput} for command's `input` shape.
 * @see {@link HttpPrefixHeadersInResponseCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 */
export class HttpPrefixHeadersInResponseCommand extends $Command<
  HttpPrefixHeadersInResponseCommandInput,
  HttpPrefixHeadersInResponseCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpPrefixHeadersInResponseCommandInput) {
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
  ): Handler<HttpPrefixHeadersInResponseCommandInput, HttpPrefixHeadersInResponseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpPrefixHeadersInResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpPrefixHeadersInResponseInputFilterSensitiveLog,
      outputFilterSensitiveLog: HttpPrefixHeadersInResponseOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpPrefixHeadersInResponseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1HttpPrefixHeadersInResponseCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpPrefixHeadersInResponseCommandOutput> {
    return deserializeAws_restJson1HttpPrefixHeadersInResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
