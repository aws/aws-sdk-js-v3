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

import { JsonMapsInputOutput } from "../models/models_0";
import { de_JsonMapsCommand, se_JsonMapsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link JsonMapsCommand}.
 */
export interface JsonMapsCommandInput extends JsonMapsInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonMapsCommand}.
 */
export interface JsonMapsCommandOutput extends JsonMapsInputOutput, __MetadataBearer {}

/**
 * @public
 * The example tests basic map serialization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonMapsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonMapsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // JsonMapsInputOutput
 *   denseStructMap: { // DenseStructMap
 *     "<keys>": { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   },
 *   sparseStructMap: { // SparseStructMap
 *     "<keys>": {
 *       hi: "STRING_VALUE",
 *     },
 *   },
 *   denseNumberMap: { // DenseNumberMap
 *     "<keys>": Number("int"),
 *   },
 *   denseBooleanMap: { // DenseBooleanMap
 *     "<keys>": true || false,
 *   },
 *   denseStringMap: { // DenseStringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   sparseNumberMap: { // SparseNumberMap
 *     "<keys>": Number("int"),
 *   },
 *   sparseBooleanMap: { // SparseBooleanMap
 *     "<keys>": true || false,
 *   },
 *   sparseStringMap: { // SparseStringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   denseSetMap: { // DenseSetMap
 *     "<keys>": [ // StringSet
 *       "STRING_VALUE",
 *     ],
 *   },
 *   sparseSetMap: { // SparseSetMap
 *     "<keys>": [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new JsonMapsCommand(input);
 * const response = await client.send(command);
 * // { // JsonMapsInputOutput
 * //   denseStructMap: { // DenseStructMap
 * //     "<keys>": { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * //   sparseStructMap: { // SparseStructMap
 * //     "<keys>": {
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * //   denseNumberMap: { // DenseNumberMap
 * //     "<keys>": Number("int"),
 * //   },
 * //   denseBooleanMap: { // DenseBooleanMap
 * //     "<keys>": true || false,
 * //   },
 * //   denseStringMap: { // DenseStringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   sparseNumberMap: { // SparseNumberMap
 * //     "<keys>": Number("int"),
 * //   },
 * //   sparseBooleanMap: { // SparseBooleanMap
 * //     "<keys>": true || false,
 * //   },
 * //   sparseStringMap: { // SparseStringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   denseSetMap: { // DenseSetMap
 * //     "<keys>": [ // StringSet
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   sparseSetMap: { // SparseSetMap
 * //     "<keys>": [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param JsonMapsCommandInput - {@link JsonMapsCommandInput}
 * @returns {@link JsonMapsCommandOutput}
 * @see {@link JsonMapsCommandInput} for command's `input` shape.
 * @see {@link JsonMapsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class JsonMapsCommand extends $Command<
  JsonMapsCommandInput,
  JsonMapsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: JsonMapsCommandInput) {
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
  ): Handler<JsonMapsCommandInput, JsonMapsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "JsonMapsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "JsonMaps",
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
  private serialize(input: JsonMapsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_JsonMapsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonMapsCommandOutput> {
    return de_JsonMapsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
