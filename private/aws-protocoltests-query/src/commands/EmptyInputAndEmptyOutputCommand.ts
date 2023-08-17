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

import { EmptyInputAndEmptyOutputInput, EmptyInputAndEmptyOutputOutput } from "../models/models_0";
import { de_EmptyInputAndEmptyOutputCommand, se_EmptyInputAndEmptyOutputCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EmptyInputAndEmptyOutputCommand}.
 */
export interface EmptyInputAndEmptyOutputCommandInput extends EmptyInputAndEmptyOutputInput {}
/**
 * @public
 *
 * The output of {@link EmptyInputAndEmptyOutputCommand}.
 */
export interface EmptyInputAndEmptyOutputCommandOutput extends EmptyInputAndEmptyOutputOutput, __MetadataBearer {}

/**
 * @public
 * The example tests how requests and responses are serialized when there's
 * no request or response members.
 *
 * While this should be rare, code generators must support this.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, EmptyInputAndEmptyOutputCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, EmptyInputAndEmptyOutputCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new EmptyInputAndEmptyOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EmptyInputAndEmptyOutputCommandInput - {@link EmptyInputAndEmptyOutputCommandInput}
 * @returns {@link EmptyInputAndEmptyOutputCommandOutput}
 * @see {@link EmptyInputAndEmptyOutputCommandInput} for command's `input` shape.
 * @see {@link EmptyInputAndEmptyOutputCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 */
export class EmptyInputAndEmptyOutputCommand extends $Command<
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: EmptyInputAndEmptyOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EmptyInputAndEmptyOutputCommandInput, EmptyInputAndEmptyOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "EmptyInputAndEmptyOutputCommand";
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
  private serialize(input: EmptyInputAndEmptyOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EmptyInputAndEmptyOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EmptyInputAndEmptyOutputCommandOutput> {
    return de_EmptyInputAndEmptyOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
