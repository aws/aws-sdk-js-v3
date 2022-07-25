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
  HttpRequestWithLabelsAndTimestampFormatInput,
  HttpRequestWithLabelsAndTimestampFormatInputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand,
  serializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

export interface HttpRequestWithLabelsAndTimestampFormatCommandInput
  extends HttpRequestWithLabelsAndTimestampFormatInput {}
export interface HttpRequestWithLabelsAndTimestampFormatCommandOutput extends __MetadataBearer {}

/**
 * The example tests how requests serialize different timestamp formats in the
 * URI path.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpRequestWithLabelsAndTimestampFormatCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpRequestWithLabelsAndTimestampFormatCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new HttpRequestWithLabelsAndTimestampFormatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link HttpRequestWithLabelsAndTimestampFormatCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithLabelsAndTimestampFormatCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 */
export class HttpRequestWithLabelsAndTimestampFormatCommand extends $Command<
  HttpRequestWithLabelsAndTimestampFormatCommandInput,
  HttpRequestWithLabelsAndTimestampFormatCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpRequestWithLabelsAndTimestampFormatCommandInput) {
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
  ): Handler<
    HttpRequestWithLabelsAndTimestampFormatCommandInput,
    HttpRequestWithLabelsAndTimestampFormatCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpRequestWithLabelsAndTimestampFormatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpRequestWithLabelsAndTimestampFormatInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: HttpRequestWithLabelsAndTimestampFormatCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput> {
    return deserializeAws_restXmlHttpRequestWithLabelsAndTimestampFormatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
