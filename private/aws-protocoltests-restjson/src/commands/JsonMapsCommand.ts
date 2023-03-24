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

import { JsonMapsInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1JsonMapsCommand,
  serializeAws_restJson1JsonMapsCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
 * const input = {
 *   denseStructMap: {
 *     "<keys>": {
 *       hi: "STRING_VALUE",
 *     },
 *   },
 *   sparseStructMap: {
 *     "<keys>": {
 *       hi: "STRING_VALUE",
 *     },
 *   },
 *   denseNumberMap: {
 *     "<keys>": Number("int"),
 *   },
 *   denseBooleanMap: {
 *     "<keys>": true || false,
 *   },
 *   denseStringMap: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   sparseNumberMap: {
 *     "<keys>": Number("int"),
 *   },
 *   sparseBooleanMap: {
 *     "<keys>": true || false,
 *   },
 *   sparseStringMap: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   denseSetMap: {
 *     "<keys>": [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   sparseSetMap: {
 *     "<keys>": [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new JsonMapsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param JsonMapsCommandInput - {@link JsonMapsCommandInput}
 * @returns {@link JsonMapsCommandOutput}
 * @see {@link JsonMapsCommandInput} for command's `input` shape.
 * @see {@link JsonMapsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
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
    return serializeAws_restJson1JsonMapsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonMapsCommandOutput> {
    return deserializeAws_restJson1JsonMapsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
