// smithy-typescript generated code
import { EchoServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EchoServiceClient";
import { EchoInput, EchoOutput } from "../models/models_0";
import { de_EchoCommand, se_EchoCommand } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SMITHY_CONTEXT_KEY,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EchoCommand}.
 */
export interface EchoCommandInput extends EchoInput {}
/**
 * @public
 *
 * The output of {@link EchoCommand}.
 */
export interface EchoCommandOutput extends EchoOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EchoServiceClient, EchoCommand } from "@aws-sdk/aws-echo-service"; // ES Modules import
 * // const { EchoServiceClient, EchoCommand } = require("@aws-sdk/aws-echo-service"); // CommonJS import
 * const client = new EchoServiceClient(config);
 * const input = { // EchoInput
 *   string: "STRING_VALUE",
 * };
 * const command = new EchoCommand(input);
 * const response = await client.send(command);
 * // { // EchoOutput
 * //   string: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EchoCommandInput - {@link EchoCommandInput}
 * @returns {@link EchoCommandOutput}
 * @see {@link EchoCommandInput} for command's `input` shape.
 * @see {@link EchoCommandOutput} for command's `response` shape.
 * @see {@link EchoServiceClientResolvedConfig | config} for EchoServiceClient's `config` shape.
 *
 * @throws {@link PalindromeException} (client fault)
 *  For some reason, this service does not like palindromes!
 *
 * @throws {@link EchoServiceServiceException}
 * <p>Base exception class for all service exceptions from EchoService service.</p>
 *
 */
export class EchoCommand extends $Command<EchoCommandInput, EchoCommandOutput, EchoServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: EchoCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EchoServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EchoCommandInput, EchoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EchoServiceClient";
    const commandName = "EchoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "EchoService",
        operation: "Echo",
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
  private serialize(input: EchoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EchoCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EchoCommandOutput> {
    return de_EchoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
