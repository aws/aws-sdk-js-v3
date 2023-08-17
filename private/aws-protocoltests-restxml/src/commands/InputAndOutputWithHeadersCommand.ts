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

import { InputAndOutputWithHeadersIO } from "../models/models_0";
import { de_InputAndOutputWithHeadersCommand, se_InputAndOutputWithHeadersCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InputAndOutputWithHeadersCommand}.
 */
export interface InputAndOutputWithHeadersCommandInput extends InputAndOutputWithHeadersIO {}
/**
 * @public
 *
 * The output of {@link InputAndOutputWithHeadersCommand}.
 */
export interface InputAndOutputWithHeadersCommandOutput extends InputAndOutputWithHeadersIO, __MetadataBearer {}

/**
 * @public
 * The example tests how requests and responses are serialized when there is
 * no input or output payload but there are HTTP header bindings.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, InputAndOutputWithHeadersCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, InputAndOutputWithHeadersCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // InputAndOutputWithHeadersIO
 *   headerString: "STRING_VALUE",
 *   headerByte: "BYTE_VALUE",
 *   headerShort: Number("short"),
 *   headerInteger: Number("int"),
 *   headerLong: Number("long"),
 *   headerFloat: Number("float"),
 *   headerDouble: Number("double"),
 *   headerTrueBool: true || false,
 *   headerFalseBool: true || false,
 *   headerStringList: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   headerStringSet: [ // StringSet
 *     "STRING_VALUE",
 *   ],
 *   headerIntegerList: [ // IntegerList
 *     Number("int"),
 *   ],
 *   headerBooleanList: [ // BooleanList
 *     true || false,
 *   ],
 *   headerTimestampList: [ // TimestampList
 *     new Date("TIMESTAMP"),
 *   ],
 *   headerEnum: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   headerEnumList: [ // FooEnumList
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 * };
 * const command = new InputAndOutputWithHeadersCommand(input);
 * const response = await client.send(command);
 * // { // InputAndOutputWithHeadersIO
 * //   headerString: "STRING_VALUE",
 * //   headerByte: "BYTE_VALUE",
 * //   headerShort: Number("short"),
 * //   headerInteger: Number("int"),
 * //   headerLong: Number("long"),
 * //   headerFloat: Number("float"),
 * //   headerDouble: Number("double"),
 * //   headerTrueBool: true || false,
 * //   headerFalseBool: true || false,
 * //   headerStringList: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   headerStringSet: [ // StringSet
 * //     "STRING_VALUE",
 * //   ],
 * //   headerIntegerList: [ // IntegerList
 * //     Number("int"),
 * //   ],
 * //   headerBooleanList: [ // BooleanList
 * //     true || false,
 * //   ],
 * //   headerTimestampList: [ // TimestampList
 * //     new Date("TIMESTAMP"),
 * //   ],
 * //   headerEnum: "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   headerEnumList: [ // FooEnumList
 * //     "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   ],
 * // };
 *
 * ```
 *
 * @param InputAndOutputWithHeadersCommandInput - {@link InputAndOutputWithHeadersCommandInput}
 * @returns {@link InputAndOutputWithHeadersCommandOutput}
 * @see {@link InputAndOutputWithHeadersCommandInput} for command's `input` shape.
 * @see {@link InputAndOutputWithHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class InputAndOutputWithHeadersCommand extends $Command<
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: InputAndOutputWithHeadersCommandInput) {
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
  ): Handler<InputAndOutputWithHeadersCommandInput, InputAndOutputWithHeadersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "InputAndOutputWithHeadersCommand";
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
  private serialize(input: InputAndOutputWithHeadersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InputAndOutputWithHeadersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InputAndOutputWithHeadersCommandOutput> {
    return de_InputAndOutputWithHeadersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
