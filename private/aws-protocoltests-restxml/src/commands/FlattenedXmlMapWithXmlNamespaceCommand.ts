// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { FlattenedXmlMapWithXmlNamespaceOutput } from "../models/models_0";
import {
  de_FlattenedXmlMapWithXmlNamespaceCommand,
  se_FlattenedXmlMapWithXmlNamespaceCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link FlattenedXmlMapWithXmlNamespaceCommand}.
 */
export interface FlattenedXmlMapWithXmlNamespaceCommandInput {}
/**
 * @public
 *
 * The output of {@link FlattenedXmlMapWithXmlNamespaceCommand}.
 */
export interface FlattenedXmlMapWithXmlNamespaceCommandOutput
  extends FlattenedXmlMapWithXmlNamespaceOutput,
    __MetadataBearer {}

/**
 * @public
 * Flattened maps with @xmlNamespace and @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, FlattenedXmlMapWithXmlNamespaceCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, FlattenedXmlMapWithXmlNamespaceCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = {};
 * const command = new FlattenedXmlMapWithXmlNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // FlattenedXmlMapWithXmlNamespaceOutput
 * //   myMap: { // FlattenedXmlMapWithXmlNamespaceOutputMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param FlattenedXmlMapWithXmlNamespaceCommandInput - {@link FlattenedXmlMapWithXmlNamespaceCommandInput}
 * @returns {@link FlattenedXmlMapWithXmlNamespaceCommandOutput}
 * @see {@link FlattenedXmlMapWithXmlNamespaceCommandInput} for command's `input` shape.
 * @see {@link FlattenedXmlMapWithXmlNamespaceCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class FlattenedXmlMapWithXmlNamespaceCommand extends $Command<
  FlattenedXmlMapWithXmlNamespaceCommandInput,
  FlattenedXmlMapWithXmlNamespaceCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
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
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FlattenedXmlMapWithXmlNamespaceCommandInput, FlattenedXmlMapWithXmlNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "FlattenedXmlMapWithXmlNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: FlattenedXmlMapWithXmlNamespaceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_FlattenedXmlMapWithXmlNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<FlattenedXmlMapWithXmlNamespaceCommandOutput> {
    return de_FlattenedXmlMapWithXmlNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
