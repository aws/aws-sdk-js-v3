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

import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { JsonEnumsInputOutput } from "../models/models_0";
import { de_JsonEnumsCommand, se_JsonEnumsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link JsonEnumsCommand}.
 */
export interface JsonEnumsCommandInput extends JsonEnumsInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonEnumsCommand}.
 */
export interface JsonEnumsCommandOutput extends JsonEnumsInputOutput, __MetadataBearer {}

/**
 * @public
 * This example serializes enums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, JsonEnumsCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, JsonEnumsCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const input = { // JsonEnumsInputOutput
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
 * const command = new JsonEnumsCommand(input);
 * const response = await client.send(command);
 * // { // JsonEnumsInputOutput
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
 * @param JsonEnumsCommandInput - {@link JsonEnumsCommandInput}
 * @returns {@link JsonEnumsCommandOutput}
 * @see {@link JsonEnumsCommandInput} for command's `input` shape.
 * @see {@link JsonEnumsCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 */
export class JsonEnumsCommand extends $Command<
  JsonEnumsCommandInput,
  JsonEnumsCommandOutput,
  JsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: JsonEnumsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: JsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<JsonEnumsCommandInput, JsonEnumsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JsonProtocolClient";
    const commandName = "JsonEnumsCommand";
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
  private serialize(input: JsonEnumsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_JsonEnumsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonEnumsCommandOutput> {
    return de_JsonEnumsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
