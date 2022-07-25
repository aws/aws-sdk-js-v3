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

import { NullAndEmptyHeadersIO, NullAndEmptyHeadersIOFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restXmlNullAndEmptyHeadersClientCommand,
  serializeAws_restXmlNullAndEmptyHeadersClientCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

export interface NullAndEmptyHeadersClientCommandInput extends NullAndEmptyHeadersIO {}
export interface NullAndEmptyHeadersClientCommandOutput extends NullAndEmptyHeadersIO, __MetadataBearer {}

/**
 * Null and empty headers are not sent over the wire.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, NullAndEmptyHeadersClientCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, NullAndEmptyHeadersClientCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new NullAndEmptyHeadersClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NullAndEmptyHeadersClientCommandInput} for command's `input` shape.
 * @see {@link NullAndEmptyHeadersClientCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 */
export class NullAndEmptyHeadersClientCommand extends $Command<
  NullAndEmptyHeadersClientCommandInput,
  NullAndEmptyHeadersClientCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NullAndEmptyHeadersClientCommandInput) {
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
  ): Handler<NullAndEmptyHeadersClientCommandInput, NullAndEmptyHeadersClientCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "NullAndEmptyHeadersClientCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NullAndEmptyHeadersIOFilterSensitiveLog,
      outputFilterSensitiveLog: NullAndEmptyHeadersIOFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NullAndEmptyHeadersClientCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlNullAndEmptyHeadersClientCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NullAndEmptyHeadersClientCommandOutput> {
    return deserializeAws_restXmlNullAndEmptyHeadersClientCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
