// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AllQueryStringTypesInput } from "../models/models_0";
import {
  deserializeAws_restJson1AllQueryStringTypesCommand,
  serializeAws_restJson1AllQueryStringTypesCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, AllQueryStringTypesCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, AllQueryStringTypesCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {
 *   queryString: "STRING_VALUE",
 *   queryStringList: [
 *     "STRING_VALUE",
 *   ],
 *   queryStringSet: [
 *     "STRING_VALUE",
 *   ],
 *   queryByte: "BYTE_VALUE",
 *   queryShort: Number("short"),
 *   queryInteger: Number("int"),
 *   queryIntegerList: [
 *     Number("int"),
 *   ],
 *   queryIntegerSet: [
 *     Number("int"),
 *   ],
 *   queryLong: Number("long"),
 *   queryFloat: Number("float"),
 *   queryDouble: Number("double"),
 *   queryDoubleList: [
 *     Number("double"),
 *   ],
 *   queryBoolean: true || false,
 *   queryBooleanList: [
 *     true || false,
 *   ],
 *   queryTimestamp: new Date("TIMESTAMP"),
 *   queryTimestampList: [
 *     new Date("TIMESTAMP"),
 *   ],
 *   queryEnum: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   queryEnumList: [
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   queryIntegerEnum: 1 || 2 || 3,
 *   queryIntegerEnumList: [
 *     1 || 2 || 3,
 *   ],
 *   queryParamsMapOfStringList: {
 *     "<keys>": [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new AllQueryStringTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AllQueryStringTypesCommandInput - {@link AllQueryStringTypesCommandInput}
 * @returns {@link AllQueryStringTypesCommandOutput}
 * @see {@link AllQueryStringTypesCommandInput} for command's `input` shape.
 * @see {@link AllQueryStringTypesCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 *
 */
export class AllQueryStringTypesCommand extends $Command<
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput,
  RestJsonProtocolClientResolvedConfig
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
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AllQueryStringTypesCommandInput, AllQueryStringTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
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
    return serializeAws_restJson1AllQueryStringTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AllQueryStringTypesCommandOutput> {
    return deserializeAws_restJson1AllQueryStringTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
