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

import { BodyWithXmlNameInputOutput } from "../models/models_0";
import { de_BodyWithXmlNameCommand, se_BodyWithXmlNameCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BodyWithXmlNameCommand}.
 */
export interface BodyWithXmlNameCommandInput extends BodyWithXmlNameInputOutput {}
/**
 * @public
 *
 * The output of {@link BodyWithXmlNameCommand}.
 */
export interface BodyWithXmlNameCommandOutput extends BodyWithXmlNameInputOutput, __MetadataBearer {}

/**
 * @public
 * The following example serializes a body that uses an XML name,
 * changing the wrapper name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, BodyWithXmlNameCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, BodyWithXmlNameCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // BodyWithXmlNameInputOutput
 *   nested: { // PayloadWithXmlName
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new BodyWithXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // BodyWithXmlNameInputOutput
 * //   nested: { // PayloadWithXmlName
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param BodyWithXmlNameCommandInput - {@link BodyWithXmlNameCommandInput}
 * @returns {@link BodyWithXmlNameCommandOutput}
 * @see {@link BodyWithXmlNameCommandInput} for command's `input` shape.
 * @see {@link BodyWithXmlNameCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class BodyWithXmlNameCommand extends $Command<
  BodyWithXmlNameCommandInput,
  BodyWithXmlNameCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: BodyWithXmlNameCommandInput) {
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
  ): Handler<BodyWithXmlNameCommandInput, BodyWithXmlNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "BodyWithXmlNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "BodyWithXmlName",
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
  private serialize(input: BodyWithXmlNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BodyWithXmlNameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BodyWithXmlNameCommandOutput> {
    return de_BodyWithXmlNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
