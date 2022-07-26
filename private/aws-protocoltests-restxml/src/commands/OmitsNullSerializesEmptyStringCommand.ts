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
  OmitsNullSerializesEmptyStringInput,
  OmitsNullSerializesEmptyStringInputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlOmitsNullSerializesEmptyStringCommand,
  serializeAws_restXmlOmitsNullSerializesEmptyStringCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

export interface OmitsNullSerializesEmptyStringCommandInput extends OmitsNullSerializesEmptyStringInput {}
export interface OmitsNullSerializesEmptyStringCommandOutput extends __MetadataBearer {}

/**
 * Omits null, but serializes empty string value.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, OmitsNullSerializesEmptyStringCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, OmitsNullSerializesEmptyStringCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new OmitsNullSerializesEmptyStringCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link OmitsNullSerializesEmptyStringCommandInput} for command's `input` shape.
 * @see {@link OmitsNullSerializesEmptyStringCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 */
export class OmitsNullSerializesEmptyStringCommand extends $Command<
  OmitsNullSerializesEmptyStringCommandInput,
  OmitsNullSerializesEmptyStringCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: OmitsNullSerializesEmptyStringCommandInput) {
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
  ): Handler<OmitsNullSerializesEmptyStringCommandInput, OmitsNullSerializesEmptyStringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "OmitsNullSerializesEmptyStringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: OmitsNullSerializesEmptyStringInputFilterSensitiveLog,
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
    input: OmitsNullSerializesEmptyStringCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlOmitsNullSerializesEmptyStringCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<OmitsNullSerializesEmptyStringCommandOutput> {
    return deserializeAws_restXmlOmitsNullSerializesEmptyStringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
