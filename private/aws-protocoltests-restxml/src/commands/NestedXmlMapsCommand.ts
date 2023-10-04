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

import { NestedXmlMapsInputOutput } from "../models/models_0";
import { de_NestedXmlMapsCommand, se_NestedXmlMapsCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link NestedXmlMapsCommand}.
 */
export interface NestedXmlMapsCommandInput extends NestedXmlMapsInputOutput {}
/**
 * @public
 *
 * The output of {@link NestedXmlMapsCommand}.
 */
export interface NestedXmlMapsCommandOutput extends NestedXmlMapsInputOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, NestedXmlMapsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, NestedXmlMapsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // NestedXmlMapsInputOutput
 *   nestedMap: { // NestedMap
 *     "<keys>": { // FooEnumMap
 *       "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 *     },
 *   },
 *   flatNestedMap: {
 *     "<keys>": {
 *       "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 *     },
 *   },
 * };
 * const command = new NestedXmlMapsCommand(input);
 * const response = await client.send(command);
 * // { // NestedXmlMapsInputOutput
 * //   nestedMap: { // NestedMap
 * //     "<keys>": { // FooEnumMap
 * //       "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 * //     },
 * //   },
 * //   flatNestedMap: {
 * //     "<keys>": {
 * //       "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param NestedXmlMapsCommandInput - {@link NestedXmlMapsCommandInput}
 * @returns {@link NestedXmlMapsCommandOutput}
 * @see {@link NestedXmlMapsCommandInput} for command's `input` shape.
 * @see {@link NestedXmlMapsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class NestedXmlMapsCommand extends $Command<
  NestedXmlMapsCommandInput,
  NestedXmlMapsCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: NestedXmlMapsCommandInput) {
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
  ): Handler<NestedXmlMapsCommandInput, NestedXmlMapsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "NestedXmlMapsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "NestedXmlMaps",
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
  private serialize(input: NestedXmlMapsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_NestedXmlMapsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NestedXmlMapsCommandOutput> {
    return de_NestedXmlMapsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
