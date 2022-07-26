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

import { HttpPrefixHeadersInputOutput, HttpPrefixHeadersInputOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restXmlHttpPrefixHeadersCommand,
  serializeAws_restXmlHttpPrefixHeadersCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

export interface HttpPrefixHeadersCommandInput extends HttpPrefixHeadersInputOutput {}
export interface HttpPrefixHeadersCommandOutput extends HttpPrefixHeadersInputOutput, __MetadataBearer {}

/**
 * This examples adds headers to the input of a request and response by prefix.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPrefixHeadersCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPrefixHeadersCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new HttpPrefixHeadersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link HttpPrefixHeadersCommandInput} for command's `input` shape.
 * @see {@link HttpPrefixHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 */
export class HttpPrefixHeadersCommand extends $Command<
  HttpPrefixHeadersCommandInput,
  HttpPrefixHeadersCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpPrefixHeadersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<HttpPrefixHeadersCommandInput, HttpPrefixHeadersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpPrefixHeadersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpPrefixHeadersInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: HttpPrefixHeadersInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpPrefixHeadersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlHttpPrefixHeadersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpPrefixHeadersCommandOutput> {
    return deserializeAws_restXmlHttpPrefixHeadersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
