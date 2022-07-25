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

import { XmlMapsOutput, XmlMapsOutputFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_queryXmlMapsCommand, serializeAws_queryXmlMapsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

export interface XmlMapsCommandInput {}
export interface XmlMapsCommandOutput extends XmlMapsOutput, __MetadataBearer {}

/**
 * The example tests basic map serialization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlMapsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, XmlMapsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const command = new XmlMapsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link XmlMapsCommandInput} for command's `input` shape.
 * @see {@link XmlMapsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 */
export class XmlMapsCommand extends $Command<
  XmlMapsCommandInput,
  XmlMapsCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: XmlMapsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<XmlMapsCommandInput, XmlMapsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "XmlMapsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: XmlMapsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: XmlMapsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryXmlMapsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlMapsCommandOutput> {
    return deserializeAws_queryXmlMapsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
