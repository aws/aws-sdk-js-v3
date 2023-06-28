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

import { JsonIntEnumsInputOutput } from "../models/models_0";
import { de_JsonIntEnumsCommand, se_JsonIntEnumsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link JsonIntEnumsCommand}.
 */
export interface JsonIntEnumsCommandInput extends JsonIntEnumsInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonIntEnumsCommand}.
 */
export interface JsonIntEnumsCommandOutput extends JsonIntEnumsInputOutput, __MetadataBearer {}

/**
 * @public
 * This example serializes intEnums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonIntEnumsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonIntEnumsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // JsonIntEnumsInputOutput
 *   integerEnum1: 1 || 2 || 3,
 *   integerEnum2: 1 || 2 || 3,
 *   integerEnum3: 1 || 2 || 3,
 *   integerEnumList: [ // IntegerEnumList
 *     1 || 2 || 3,
 *   ],
 *   integerEnumSet: [ // IntegerEnumSet
 *     1 || 2 || 3,
 *   ],
 *   integerEnumMap: { // IntegerEnumMap
 *     "<keys>": 1 || 2 || 3,
 *   },
 * };
 * const command = new JsonIntEnumsCommand(input);
 * const response = await client.send(command);
 * // { // JsonIntEnumsInputOutput
 * //   integerEnum1: 1 || 2 || 3,
 * //   integerEnum2: 1 || 2 || 3,
 * //   integerEnum3: 1 || 2 || 3,
 * //   integerEnumList: [ // IntegerEnumList
 * //     1 || 2 || 3,
 * //   ],
 * //   integerEnumSet: [ // IntegerEnumSet
 * //     1 || 2 || 3,
 * //   ],
 * //   integerEnumMap: { // IntegerEnumMap
 * //     "<keys>": 1 || 2 || 3,
 * //   },
 * // };
 *
 * ```
 *
 * @param JsonIntEnumsCommandInput - {@link JsonIntEnumsCommandInput}
 * @returns {@link JsonIntEnumsCommandOutput}
 * @see {@link JsonIntEnumsCommandInput} for command's `input` shape.
 * @see {@link JsonIntEnumsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class JsonIntEnumsCommand extends $Command<
  JsonIntEnumsCommandInput,
  JsonIntEnumsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: JsonIntEnumsCommandInput) {
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
  ): Handler<JsonIntEnumsCommandInput, JsonIntEnumsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "JsonIntEnumsCommand";
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
  private serialize(input: JsonIntEnumsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_JsonIntEnumsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonIntEnumsCommandOutput> {
    return de_JsonIntEnumsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
