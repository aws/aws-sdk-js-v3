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

import { HttpRequestWithLabelsInput, HttpRequestWithLabelsInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restXmlHttpRequestWithLabelsCommand,
  serializeAws_restXmlHttpRequestWithLabelsCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

export interface HttpRequestWithLabelsCommandInput extends HttpRequestWithLabelsInput {}
export interface HttpRequestWithLabelsCommandOutput extends __MetadataBearer {}

/**
 * The example tests how requests are serialized when there's no input
 * payload but there are HTTP labels.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpRequestWithLabelsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpRequestWithLabelsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new HttpRequestWithLabelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link HttpRequestWithLabelsCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithLabelsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 */
export class HttpRequestWithLabelsCommand extends $Command<
  HttpRequestWithLabelsCommandInput,
  HttpRequestWithLabelsCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpRequestWithLabelsCommandInput) {
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
  ): Handler<HttpRequestWithLabelsCommandInput, HttpRequestWithLabelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpRequestWithLabelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpRequestWithLabelsInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpRequestWithLabelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlHttpRequestWithLabelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpRequestWithLabelsCommandOutput> {
    return deserializeAws_restXmlHttpRequestWithLabelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
