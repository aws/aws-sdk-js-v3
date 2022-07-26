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
  HttpPayloadWithMemberXmlNameInputOutput,
  HttpPayloadWithMemberXmlNameInputOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlHttpPayloadWithMemberXmlNameCommand,
  serializeAws_restXmlHttpPayloadWithMemberXmlNameCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

export interface HttpPayloadWithMemberXmlNameCommandInput extends HttpPayloadWithMemberXmlNameInputOutput {}
export interface HttpPayloadWithMemberXmlNameCommandOutput
  extends HttpPayloadWithMemberXmlNameInputOutput,
    __MetadataBearer {}

/**
 * The following example serializes a payload that uses an XML name
 * on the member, changing the wrapper name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithMemberXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithMemberXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new HttpPayloadWithMemberXmlNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link HttpPayloadWithMemberXmlNameCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithMemberXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 */
export class HttpPayloadWithMemberXmlNameCommand extends $Command<
  HttpPayloadWithMemberXmlNameCommandInput,
  HttpPayloadWithMemberXmlNameCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpPayloadWithMemberXmlNameCommandInput) {
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
  ): Handler<HttpPayloadWithMemberXmlNameCommandInput, HttpPayloadWithMemberXmlNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpPayloadWithMemberXmlNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpPayloadWithMemberXmlNameInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: HttpPayloadWithMemberXmlNameInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpPayloadWithMemberXmlNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlHttpPayloadWithMemberXmlNameCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpPayloadWithMemberXmlNameCommandOutput> {
    return deserializeAws_restXmlHttpPayloadWithMemberXmlNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
