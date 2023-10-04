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

import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { OperationWithOptionalInputOutputInput, OperationWithOptionalInputOutputOutput } from "../models/models_0";
import {
  de_OperationWithOptionalInputOutputCommand,
  se_OperationWithOptionalInputOutputCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link OperationWithOptionalInputOutputCommand}.
 */
export interface OperationWithOptionalInputOutputCommandInput extends OperationWithOptionalInputOutputInput {}
/**
 * @public
 *
 * The output of {@link OperationWithOptionalInputOutputCommand}.
 */
export interface OperationWithOptionalInputOutputCommandOutput
  extends OperationWithOptionalInputOutputOutput,
    __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, OperationWithOptionalInputOutputCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, OperationWithOptionalInputOutputCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const input = { // OperationWithOptionalInputOutputInput
 *   Value: "STRING_VALUE",
 * };
 * const command = new OperationWithOptionalInputOutputCommand(input);
 * const response = await client.send(command);
 * // { // OperationWithOptionalInputOutputOutput
 * //   Value: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param OperationWithOptionalInputOutputCommandInput - {@link OperationWithOptionalInputOutputCommandInput}
 * @returns {@link OperationWithOptionalInputOutputCommandOutput}
 * @see {@link OperationWithOptionalInputOutputCommandInput} for command's `input` shape.
 * @see {@link OperationWithOptionalInputOutputCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 */
export class OperationWithOptionalInputOutputCommand extends $Command<
  OperationWithOptionalInputOutputCommandInput,
  OperationWithOptionalInputOutputCommandOutput,
  JsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: OperationWithOptionalInputOutputCommandInput) {
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
  ): Handler<OperationWithOptionalInputOutputCommandInput, OperationWithOptionalInputOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JsonProtocolClient";
    const commandName = "OperationWithOptionalInputOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "JsonProtocol",
        operation: "OperationWithOptionalInputOutput",
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
  private serialize(
    input: OperationWithOptionalInputOutputCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_OperationWithOptionalInputOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<OperationWithOptionalInputOutputCommandOutput> {
    return de_OperationWithOptionalInputOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
