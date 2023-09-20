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

import { HttpPayloadWithMemberXmlNameInputOutput } from "../models/models_0";
import {
  de_HttpPayloadWithMemberXmlNameCommand,
  se_HttpPayloadWithMemberXmlNameCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithMemberXmlNameCommand}.
 */
export interface HttpPayloadWithMemberXmlNameCommandInput extends HttpPayloadWithMemberXmlNameInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithMemberXmlNameCommand}.
 */
export interface HttpPayloadWithMemberXmlNameCommandOutput
  extends HttpPayloadWithMemberXmlNameInputOutput,
    __MetadataBearer {}

/**
 * @public
 * The following example serializes a payload that uses an XML name
 * on the member, changing the wrapper name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithMemberXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithMemberXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPayloadWithMemberXmlNameInputOutput
 *   nested: { // PayloadWithXmlName
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithMemberXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithMemberXmlNameInputOutput
 * //   nested: { // PayloadWithXmlName
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithMemberXmlNameCommandInput - {@link HttpPayloadWithMemberXmlNameCommandInput}
 * @returns {@link HttpPayloadWithMemberXmlNameCommandOutput}
 * @see {@link HttpPayloadWithMemberXmlNameCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithMemberXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class HttpPayloadWithMemberXmlNameCommand extends $Command<
  HttpPayloadWithMemberXmlNameCommandInput,
  HttpPayloadWithMemberXmlNameCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: HttpPayloadWithMemberXmlNameCommandInput) {
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
  ): Handler<HttpPayloadWithMemberXmlNameCommandInput, HttpPayloadWithMemberXmlNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpPayloadWithMemberXmlNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "HttpPayloadWithMemberXmlName",
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
  private serialize(input: HttpPayloadWithMemberXmlNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_HttpPayloadWithMemberXmlNameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpPayloadWithMemberXmlNameCommandOutput> {
    return de_HttpPayloadWithMemberXmlNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
