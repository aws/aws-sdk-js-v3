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

import { HttpPayloadWithXmlNamespaceAndPrefixInputOutput } from "../models/models_0";
import {
  de_HttpPayloadWithXmlNamespaceAndPrefixCommand,
  se_HttpPayloadWithXmlNamespaceAndPrefixCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithXmlNamespaceAndPrefixCommand}.
 */
export interface HttpPayloadWithXmlNamespaceAndPrefixCommandInput
  extends HttpPayloadWithXmlNamespaceAndPrefixInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithXmlNamespaceAndPrefixCommand}.
 */
export interface HttpPayloadWithXmlNamespaceAndPrefixCommandOutput
  extends HttpPayloadWithXmlNamespaceAndPrefixInputOutput,
    __MetadataBearer {}

/**
 * @public
 * The following example serializes a payload that uses an XML namespace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithXmlNamespaceAndPrefixCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithXmlNamespaceAndPrefixCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPayloadWithXmlNamespaceAndPrefixInputOutput
 *   nested: { // PayloadWithXmlNamespaceAndPrefix
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithXmlNamespaceAndPrefixCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithXmlNamespaceAndPrefixInputOutput
 * //   nested: { // PayloadWithXmlNamespaceAndPrefix
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithXmlNamespaceAndPrefixCommandInput - {@link HttpPayloadWithXmlNamespaceAndPrefixCommandInput}
 * @returns {@link HttpPayloadWithXmlNamespaceAndPrefixCommandOutput}
 * @see {@link HttpPayloadWithXmlNamespaceAndPrefixCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithXmlNamespaceAndPrefixCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class HttpPayloadWithXmlNamespaceAndPrefixCommand extends $Command<
  HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
  HttpPayloadWithXmlNamespaceAndPrefixCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: HttpPayloadWithXmlNamespaceAndPrefixCommandInput) {
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
  ): Handler<HttpPayloadWithXmlNamespaceAndPrefixCommandInput, HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpPayloadWithXmlNamespaceAndPrefixCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "HttpPayloadWithXmlNamespaceAndPrefix",
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
  private serialize(
    input: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_HttpPayloadWithXmlNamespaceAndPrefixCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> {
    return de_HttpPayloadWithXmlNamespaceAndPrefixCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
