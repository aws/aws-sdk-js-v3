import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { BodyWithXmlNameInputOutput } from "../models/models_0";
import {
  deserializeAws_restXmlBodyWithXmlNameCommand,
  serializeAws_restXmlBodyWithXmlNameCommand,
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

export interface BodyWithXmlNameCommandInput extends BodyWithXmlNameInputOutput {}
export interface BodyWithXmlNameCommandOutput extends BodyWithXmlNameInputOutput, __MetadataBearer {}

/**
 * The following example serializes a body that uses an XML name,
 * changing the wrapper name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, BodyWithXmlNameCommand } from "@aws-sdk/aws-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, BodyWithXmlNameCommand } = require("@aws-sdk/aws-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new BodyWithXmlNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BodyWithXmlNameCommandInput} for command's `input` shape.
 * @see {@link BodyWithXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BodyWithXmlNameCommand extends $Command<
  BodyWithXmlNameCommandInput,
  BodyWithXmlNameCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BodyWithXmlNameCommandInput) {
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
  ): Handler<BodyWithXmlNameCommandInput, BodyWithXmlNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "BodyWithXmlNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BodyWithXmlNameInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: BodyWithXmlNameInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BodyWithXmlNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlBodyWithXmlNameCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BodyWithXmlNameCommandOutput> {
    return deserializeAws_restXmlBodyWithXmlNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
