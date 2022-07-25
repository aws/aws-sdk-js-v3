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

import { HttpPayloadTraitsInputOutput, HttpPayloadTraitsInputOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restXmlHttpPayloadTraitsCommand,
  serializeAws_restXmlHttpPayloadTraitsCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

export interface HttpPayloadTraitsCommandInput extends HttpPayloadTraitsInputOutput {}
export interface HttpPayloadTraitsCommandOutput extends HttpPayloadTraitsInputOutput, __MetadataBearer {}

/**
 * This examples serializes a blob shape in the payload.
 *
 * In this example, no XML document is synthesized because the payload is
 * not a structure or a union type.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadTraitsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadTraitsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new HttpPayloadTraitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link HttpPayloadTraitsCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadTraitsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 */
export class HttpPayloadTraitsCommand extends $Command<
  HttpPayloadTraitsCommandInput,
  HttpPayloadTraitsCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpPayloadTraitsCommandInput) {
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
  ): Handler<HttpPayloadTraitsCommandInput, HttpPayloadTraitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpPayloadTraitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpPayloadTraitsInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: HttpPayloadTraitsInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpPayloadTraitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlHttpPayloadTraitsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpPayloadTraitsCommandOutput> {
    return deserializeAws_restXmlHttpPayloadTraitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
