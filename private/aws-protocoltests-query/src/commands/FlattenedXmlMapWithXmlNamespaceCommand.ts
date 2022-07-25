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
  FlattenedXmlMapWithXmlNamespaceOutput,
  FlattenedXmlMapWithXmlNamespaceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryFlattenedXmlMapWithXmlNamespaceCommand,
  serializeAws_queryFlattenedXmlMapWithXmlNamespaceCommand,
} from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

export interface FlattenedXmlMapWithXmlNamespaceCommandInput {}
export interface FlattenedXmlMapWithXmlNamespaceCommandOutput
  extends FlattenedXmlMapWithXmlNamespaceOutput,
    __MetadataBearer {}

/**
 * Flattened maps with @xmlNamespace and @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, FlattenedXmlMapWithXmlNamespaceCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, FlattenedXmlMapWithXmlNamespaceCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const command = new FlattenedXmlMapWithXmlNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FlattenedXmlMapWithXmlNamespaceCommandInput} for command's `input` shape.
 * @see {@link FlattenedXmlMapWithXmlNamespaceCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 */
export class FlattenedXmlMapWithXmlNamespaceCommand extends $Command<
  FlattenedXmlMapWithXmlNamespaceCommandInput,
  FlattenedXmlMapWithXmlNamespaceCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FlattenedXmlMapWithXmlNamespaceCommandInput) {
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
  ): Handler<FlattenedXmlMapWithXmlNamespaceCommandInput, FlattenedXmlMapWithXmlNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "FlattenedXmlMapWithXmlNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: FlattenedXmlMapWithXmlNamespaceOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: FlattenedXmlMapWithXmlNamespaceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryFlattenedXmlMapWithXmlNamespaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> {
    return deserializeAws_queryFlattenedXmlMapWithXmlNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
