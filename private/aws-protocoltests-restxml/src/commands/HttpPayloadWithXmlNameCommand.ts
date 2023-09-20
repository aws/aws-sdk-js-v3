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

import { HttpPayloadWithXmlNameInputOutput } from "../models/models_0";
import { de_HttpPayloadWithXmlNameCommand, se_HttpPayloadWithXmlNameCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithXmlNameCommand}.
 */
export interface HttpPayloadWithXmlNameCommandInput extends HttpPayloadWithXmlNameInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithXmlNameCommand}.
 */
export interface HttpPayloadWithXmlNameCommandOutput extends HttpPayloadWithXmlNameInputOutput, __MetadataBearer {}

/**
 * @public
 * The following example serializes a payload that uses an XML name,
 * changing the wrapper name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPayloadWithXmlNameInputOutput
 *   nested: { // PayloadWithXmlName
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithXmlNameInputOutput
 * //   nested: { // PayloadWithXmlName
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithXmlNameCommandInput - {@link HttpPayloadWithXmlNameCommandInput}
 * @returns {@link HttpPayloadWithXmlNameCommandOutput}
 * @see {@link HttpPayloadWithXmlNameCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class HttpPayloadWithXmlNameCommand extends $Command<
  HttpPayloadWithXmlNameCommandInput,
  HttpPayloadWithXmlNameCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: HttpPayloadWithXmlNameCommandInput) {
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
  ): Handler<HttpPayloadWithXmlNameCommandInput, HttpPayloadWithXmlNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpPayloadWithXmlNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "HttpPayloadWithXmlName",
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
  private serialize(input: HttpPayloadWithXmlNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_HttpPayloadWithXmlNameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpPayloadWithXmlNameCommandOutput> {
    return de_HttpPayloadWithXmlNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
