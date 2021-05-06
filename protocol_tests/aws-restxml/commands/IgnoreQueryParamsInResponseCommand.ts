import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { IgnoreQueryParamsInResponseOutput } from "../models/models_0";
import {
  deserializeAws_restXmlIgnoreQueryParamsInResponseCommand,
  serializeAws_restXmlIgnoreQueryParamsInResponseCommand,
} from "../protocols/Aws_restXml";
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

export interface IgnoreQueryParamsInResponseCommandInput {}
export interface IgnoreQueryParamsInResponseCommandOutput extends IgnoreQueryParamsInResponseOutput, __MetadataBearer {}

/**
 * This example ensures that query string bound request parameters are
 * serialized in the body of responses if the structure is used in both
 * the request and response.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, IgnoreQueryParamsInResponseCommand } from "@aws-sdk/aws-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, IgnoreQueryParamsInResponseCommand } = require("@aws-sdk/aws-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new IgnoreQueryParamsInResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IgnoreQueryParamsInResponseCommandInput} for command's `input` shape.
 * @see {@link IgnoreQueryParamsInResponseCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class IgnoreQueryParamsInResponseCommand extends $Command<
  IgnoreQueryParamsInResponseCommandInput,
  IgnoreQueryParamsInResponseCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IgnoreQueryParamsInResponseCommandInput) {
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
  ): Handler<IgnoreQueryParamsInResponseCommandInput, IgnoreQueryParamsInResponseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "IgnoreQueryParamsInResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: IgnoreQueryParamsInResponseOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: IgnoreQueryParamsInResponseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlIgnoreQueryParamsInResponseCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<IgnoreQueryParamsInResponseCommandOutput> {
    return deserializeAws_restXmlIgnoreQueryParamsInResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
