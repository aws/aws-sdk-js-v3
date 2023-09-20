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

import { HttpRequestWithLabelsInput } from "../models/models_0";
import { de_HttpRequestWithLabelsCommand, se_HttpRequestWithLabelsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link HttpRequestWithLabelsCommand}.
 */
export interface HttpRequestWithLabelsCommandInput extends HttpRequestWithLabelsInput {}
/**
 * @public
 *
 * The output of {@link HttpRequestWithLabelsCommand}.
 */
export interface HttpRequestWithLabelsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * The example tests how requests are serialized when there's no input
 * payload but there are HTTP labels.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpRequestWithLabelsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpRequestWithLabelsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpRequestWithLabelsInput
 *   string: "STRING_VALUE", // required
 *   short: Number("short"), // required
 *   integer: Number("int"), // required
 *   long: Number("long"), // required
 *   float: Number("float"), // required
 *   double: Number("double"), // required
 *   boolean: true || false, // required
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new HttpRequestWithLabelsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param HttpRequestWithLabelsCommandInput - {@link HttpRequestWithLabelsCommandInput}
 * @returns {@link HttpRequestWithLabelsCommandOutput}
 * @see {@link HttpRequestWithLabelsCommandInput} for command's `input` shape.
 * @see {@link HttpRequestWithLabelsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class HttpRequestWithLabelsCommand extends $Command<
  HttpRequestWithLabelsCommandInput,
  HttpRequestWithLabelsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: HttpRequestWithLabelsCommandInput) {
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
  ): Handler<HttpRequestWithLabelsCommandInput, HttpRequestWithLabelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpRequestWithLabelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "HttpRequestWithLabels",
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
  private serialize(input: HttpRequestWithLabelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_HttpRequestWithLabelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpRequestWithLabelsCommandOutput> {
    return de_HttpRequestWithLabelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
