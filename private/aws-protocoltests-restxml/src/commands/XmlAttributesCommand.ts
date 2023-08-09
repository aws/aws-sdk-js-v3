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

import { XmlAttributesInputOutput } from "../models/models_0";
import { de_XmlAttributesCommand, se_XmlAttributesCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link XmlAttributesCommand}.
 */
export interface XmlAttributesCommandInput extends XmlAttributesInputOutput {}
/**
 * @public
 *
 * The output of {@link XmlAttributesCommand}.
 */
export interface XmlAttributesCommandOutput extends XmlAttributesInputOutput, __MetadataBearer {}

/**
 * @public
 * This example serializes an XML attributes on synthesized document.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlAttributesCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlAttributesCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlAttributesInputOutput
 *   foo: "STRING_VALUE",
 *   attr: "STRING_VALUE",
 * };
 * const command = new XmlAttributesCommand(input);
 * const response = await client.send(command);
 * // { // XmlAttributesInputOutput
 * //   foo: "STRING_VALUE",
 * //   attr: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param XmlAttributesCommandInput - {@link XmlAttributesCommandInput}
 * @returns {@link XmlAttributesCommandOutput}
 * @see {@link XmlAttributesCommandInput} for command's `input` shape.
 * @see {@link XmlAttributesCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class XmlAttributesCommand extends $Command<
  XmlAttributesCommandInput,
  XmlAttributesCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: XmlAttributesCommandInput) {
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
  ): Handler<XmlAttributesCommandInput, XmlAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "XmlAttributesCommand";
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
  private serialize(input: XmlAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_XmlAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlAttributesCommandOutput> {
    return de_XmlAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
