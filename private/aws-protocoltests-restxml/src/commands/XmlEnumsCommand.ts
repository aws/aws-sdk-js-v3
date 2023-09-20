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

import { XmlEnumsInputOutput } from "../models/models_0";
import { de_XmlEnumsCommand, se_XmlEnumsCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link XmlEnumsCommand}.
 */
export interface XmlEnumsCommandInput extends XmlEnumsInputOutput {}
/**
 * @public
 *
 * The output of {@link XmlEnumsCommand}.
 */
export interface XmlEnumsCommandOutput extends XmlEnumsInputOutput, __MetadataBearer {}

/**
 * @public
 * This example serializes enums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlEnumsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlEnumsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlEnumsInputOutput
 *   fooEnum1: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   fooEnum2: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   fooEnum3: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   fooEnumList: [ // FooEnumList
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   fooEnumSet: [ // FooEnumSet
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   fooEnumMap: { // FooEnumMap
 *     "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 *   },
 * };
 * const command = new XmlEnumsCommand(input);
 * const response = await client.send(command);
 * // { // XmlEnumsInputOutput
 * //   fooEnum1: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   fooEnum2: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   fooEnum3: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   fooEnumList: [ // FooEnumList
 * //     "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   ],
 * //   fooEnumSet: [ // FooEnumSet
 * //     "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   ],
 * //   fooEnumMap: { // FooEnumMap
 * //     "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlEnumsCommandInput - {@link XmlEnumsCommandInput}
 * @returns {@link XmlEnumsCommandOutput}
 * @see {@link XmlEnumsCommandInput} for command's `input` shape.
 * @see {@link XmlEnumsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class XmlEnumsCommand extends $Command<
  XmlEnumsCommandInput,
  XmlEnumsCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: XmlEnumsCommandInput) {
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
  ): Handler<XmlEnumsCommandInput, XmlEnumsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "XmlEnumsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "XmlEnums",
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
  private serialize(input: XmlEnumsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_XmlEnumsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlEnumsCommandOutput> {
    return de_XmlEnumsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
