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

import { ConstantQueryStringInput } from "../models/models_0";
import {
  deserializeAws_restJson1ConstantQueryStringCommand,
  serializeAws_restJson1ConstantQueryStringCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 *
 * The input for {@link ConstantQueryStringCommand}.
 */
export interface ConstantQueryStringCommandInput extends ConstantQueryStringInput {}
/**
 * @public
 *
 * The output of {@link ConstantQueryStringCommand}.
 */
export interface ConstantQueryStringCommandOutput extends __MetadataBearer {}

/**
 * @public
 * This example uses a constant query string parameters and a label.
 * This simply tests that labels and query string parameters are
 * compatible. The fixed query string parameter named "hello" should
 * in no way conflict with the label, `\{hello\}`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, ConstantQueryStringCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, ConstantQueryStringCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // ConstantQueryStringInput
 *   hello: "STRING_VALUE", // required
 * };
 * const command = new ConstantQueryStringCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ConstantQueryStringCommandInput - {@link ConstantQueryStringCommandInput}
 * @returns {@link ConstantQueryStringCommandOutput}
 * @see {@link ConstantQueryStringCommandInput} for command's `input` shape.
 * @see {@link ConstantQueryStringCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 *
 */
export class ConstantQueryStringCommand extends $Command<
  ConstantQueryStringCommandInput,
  ConstantQueryStringCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: ConstantQueryStringCommandInput) {
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
  ): Handler<ConstantQueryStringCommandInput, ConstantQueryStringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "ConstantQueryStringCommand";
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
  private serialize(input: ConstantQueryStringCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ConstantQueryStringCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConstantQueryStringCommandOutput> {
    return deserializeAws_restJson1ConstantQueryStringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
