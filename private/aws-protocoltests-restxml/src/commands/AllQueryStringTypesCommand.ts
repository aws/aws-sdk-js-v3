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

import { AllQueryStringTypesInput } from "../models/models_0";
import { de_AllQueryStringTypesCommand, se_AllQueryStringTypesCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AllQueryStringTypesCommand}.
 */
export interface AllQueryStringTypesCommandInput extends AllQueryStringTypesInput {}
/**
 * @public
 *
 * The output of {@link AllQueryStringTypesCommand}.
 */
export interface AllQueryStringTypesCommandOutput extends __MetadataBearer {}

/**
 * @public
 * This example uses all query string types.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, AllQueryStringTypesCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, AllQueryStringTypesCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // AllQueryStringTypesInput
 *   queryString: "STRING_VALUE",
 *   queryStringList: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   queryStringSet: [ // StringSet
 *     "STRING_VALUE",
 *   ],
 *   queryByte: "BYTE_VALUE",
 *   queryShort: Number("short"),
 *   queryInteger: Number("int"),
 *   queryIntegerList: [ // IntegerList
 *     Number("int"),
 *   ],
 *   queryIntegerSet: [ // IntegerSet
 *     Number("int"),
 *   ],
 *   queryLong: Number("long"),
 *   queryFloat: Number("float"),
 *   queryDouble: Number("double"),
 *   queryDoubleList: [ // DoubleList
 *     Number("double"),
 *   ],
 *   queryBoolean: true || false,
 *   queryBooleanList: [ // BooleanList
 *     true || false,
 *   ],
 *   queryTimestamp: new Date("TIMESTAMP"),
 *   queryTimestampList: [ // TimestampList
 *     new Date("TIMESTAMP"),
 *   ],
 *   queryEnum: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   queryEnumList: [ // FooEnumList
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   queryIntegerEnum: 1 || 2 || 3,
 *   queryIntegerEnumList: [ // IntegerEnumList
 *     1 || 2 || 3,
 *   ],
 *   queryParamsMapOfStrings: { // StringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new AllQueryStringTypesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AllQueryStringTypesCommandInput - {@link AllQueryStringTypesCommandInput}
 * @returns {@link AllQueryStringTypesCommandOutput}
 * @see {@link AllQueryStringTypesCommandInput} for command's `input` shape.
 * @see {@link AllQueryStringTypesCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class AllQueryStringTypesCommand extends $Command<
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: AllQueryStringTypesCommandInput) {
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
  ): Handler<AllQueryStringTypesCommandInput, AllQueryStringTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "AllQueryStringTypesCommand";
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
  private serialize(input: AllQueryStringTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AllQueryStringTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AllQueryStringTypesCommandOutput> {
    return de_AllQueryStringTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
