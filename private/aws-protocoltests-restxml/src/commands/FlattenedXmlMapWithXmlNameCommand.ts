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
  FlattenedXmlMapWithXmlNameInputOutput,
  FlattenedXmlMapWithXmlNameInputOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommand,
  serializeAws_restXmlFlattenedXmlMapWithXmlNameCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

export interface FlattenedXmlMapWithXmlNameCommandInput extends FlattenedXmlMapWithXmlNameInputOutput {}
export interface FlattenedXmlMapWithXmlNameCommandOutput
  extends FlattenedXmlMapWithXmlNameInputOutput,
    __MetadataBearer {}

/**
 * Flattened maps with @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, FlattenedXmlMapWithXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, FlattenedXmlMapWithXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new FlattenedXmlMapWithXmlNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FlattenedXmlMapWithXmlNameCommandInput} for command's `input` shape.
 * @see {@link FlattenedXmlMapWithXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 */
export class FlattenedXmlMapWithXmlNameCommand extends $Command<
  FlattenedXmlMapWithXmlNameCommandInput,
  FlattenedXmlMapWithXmlNameCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FlattenedXmlMapWithXmlNameCommandInput) {
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
  ): Handler<FlattenedXmlMapWithXmlNameCommandInput, FlattenedXmlMapWithXmlNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "FlattenedXmlMapWithXmlNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: FlattenedXmlMapWithXmlNameInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: FlattenedXmlMapWithXmlNameInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FlattenedXmlMapWithXmlNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlFlattenedXmlMapWithXmlNameCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<FlattenedXmlMapWithXmlNameCommandOutput> {
    return deserializeAws_restXmlFlattenedXmlMapWithXmlNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
