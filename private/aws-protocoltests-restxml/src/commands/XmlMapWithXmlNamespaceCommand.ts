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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { XmlMapWithXmlNamespaceInputOutput } from "../models/models_0";
import { de_XmlMapWithXmlNamespaceCommand, se_XmlMapWithXmlNamespaceCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link XmlMapWithXmlNamespaceCommand}.
 */
export interface XmlMapWithXmlNamespaceCommandInput extends XmlMapWithXmlNamespaceInputOutput {}
/**
 * @public
 *
 * The output of {@link XmlMapWithXmlNamespaceCommand}.
 */
export interface XmlMapWithXmlNamespaceCommandOutput extends XmlMapWithXmlNamespaceInputOutput, __MetadataBearer {}

/**
 * @public
 * Maps with @xmlNamespace and @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlMapWithXmlNamespaceCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlMapWithXmlNamespaceCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlMapWithXmlNamespaceInputOutput
 *   myMap: { // XmlMapWithXmlNamespaceInputOutputMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new XmlMapWithXmlNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // XmlMapWithXmlNamespaceInputOutput
 * //   myMap: { // XmlMapWithXmlNamespaceInputOutputMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlMapWithXmlNamespaceCommandInput - {@link XmlMapWithXmlNamespaceCommandInput}
 * @returns {@link XmlMapWithXmlNamespaceCommandOutput}
 * @see {@link XmlMapWithXmlNamespaceCommandInput} for command's `input` shape.
 * @see {@link XmlMapWithXmlNamespaceCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class XmlMapWithXmlNamespaceCommand extends $Command<
  XmlMapWithXmlNamespaceCommandInput,
  XmlMapWithXmlNamespaceCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: XmlMapWithXmlNamespaceCommandInput) {
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
  ): Handler<XmlMapWithXmlNamespaceCommandInput, XmlMapWithXmlNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "XmlMapWithXmlNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "XmlMapWithXmlNamespace",
      },
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
  private serialize(input: XmlMapWithXmlNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_XmlMapWithXmlNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlMapWithXmlNamespaceCommandOutput> {
    return de_XmlMapWithXmlNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
