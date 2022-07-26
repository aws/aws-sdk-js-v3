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

import { IgnoresWrappingXmlNameOutput, IgnoresWrappingXmlNameOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryIgnoresWrappingXmlNameCommand,
  serializeAws_queryIgnoresWrappingXmlNameCommand,
} from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

export interface IgnoresWrappingXmlNameCommandInput {}
export interface IgnoresWrappingXmlNameCommandOutput extends IgnoresWrappingXmlNameOutput, __MetadataBearer {}

/**
 * The xmlName trait on the output structure is ignored in AWS Query.
 *
 * The wrapping element is always operation name + "Response", and
 * inside of that wrapper is another wrapper named operation name + "Result".
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, IgnoresWrappingXmlNameCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, IgnoresWrappingXmlNameCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const command = new IgnoresWrappingXmlNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IgnoresWrappingXmlNameCommandInput} for command's `input` shape.
 * @see {@link IgnoresWrappingXmlNameCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 */
export class IgnoresWrappingXmlNameCommand extends $Command<
  IgnoresWrappingXmlNameCommandInput,
  IgnoresWrappingXmlNameCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IgnoresWrappingXmlNameCommandInput) {
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
  ): Handler<IgnoresWrappingXmlNameCommandInput, IgnoresWrappingXmlNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "IgnoresWrappingXmlNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: IgnoresWrappingXmlNameOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: IgnoresWrappingXmlNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryIgnoresWrappingXmlNameCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<IgnoresWrappingXmlNameCommandOutput> {
    return deserializeAws_queryIgnoresWrappingXmlNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
