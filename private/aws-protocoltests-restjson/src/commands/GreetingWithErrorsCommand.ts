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

import { GreetingWithErrorsOutput } from "../models/models_0";
import { de_GreetingWithErrorsCommand, se_GreetingWithErrorsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GreetingWithErrorsCommand}.
 */
export interface GreetingWithErrorsCommandInput {}
/**
 * @public
 *
 * The output of {@link GreetingWithErrorsCommand}.
 */
export interface GreetingWithErrorsCommandOutput extends GreetingWithErrorsOutput, __MetadataBearer {}

/**
 * @public
 * This operation has four possible return values:
 *
 * 1. A successful response in the form of GreetingWithErrorsOutput
 * 2. An InvalidGreeting error.
 * 3. A BadRequest error.
 * 4. A FooError.
 *
 * Implementations must be able to successfully take a response and
 * properly (de)serialize successful and error responses based on the
 * the presence of the
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, GreetingWithErrorsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, GreetingWithErrorsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new GreetingWithErrorsCommand(input);
 * const response = await client.send(command);
 * // { // GreetingWithErrorsOutput
 * //   greeting: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GreetingWithErrorsCommandInput - {@link GreetingWithErrorsCommandInput}
 * @returns {@link GreetingWithErrorsCommandOutput}
 * @see {@link GreetingWithErrorsCommandInput} for command's `input` shape.
 * @see {@link GreetingWithErrorsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link FooError} (server fault)
 *  This error has test cases that test some of the dark corners of Amazon service
 * framework history. It should only be implemented by clients.
 *
 * @throws {@link ComplexError} (client fault)
 *  This error is thrown when a request is invalid.
 *
 * @throws {@link InvalidGreeting} (client fault)
 *  This error is thrown when an invalid greeting value is provided.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class GreetingWithErrorsCommand extends $Command<
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: GreetingWithErrorsCommandInput) {
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
  ): Handler<GreetingWithErrorsCommandInput, GreetingWithErrorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "GreetingWithErrorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "GreetingWithErrors",
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
  private serialize(input: GreetingWithErrorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GreetingWithErrorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GreetingWithErrorsCommandOutput> {
    return de_GreetingWithErrorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
