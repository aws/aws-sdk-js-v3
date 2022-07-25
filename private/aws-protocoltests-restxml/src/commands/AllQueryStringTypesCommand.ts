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

import { AllQueryStringTypesInput, AllQueryStringTypesInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restXmlAllQueryStringTypesCommand,
  serializeAws_restXmlAllQueryStringTypesCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

export interface AllQueryStringTypesCommandInput extends AllQueryStringTypesInput {}
export interface AllQueryStringTypesCommandOutput extends __MetadataBearer {}

/**
 * This example uses all query string types.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, AllQueryStringTypesCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, AllQueryStringTypesCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new AllQueryStringTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllQueryStringTypesCommandInput} for command's `input` shape.
 * @see {@link AllQueryStringTypesCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 */
export class AllQueryStringTypesCommand extends $Command<
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AllQueryStringTypesCommandInput) {
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
  ): Handler<AllQueryStringTypesCommandInput, AllQueryStringTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "AllQueryStringTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AllQueryStringTypesInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AllQueryStringTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlAllQueryStringTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AllQueryStringTypesCommandOutput> {
    return deserializeAws_restXmlAllQueryStringTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
