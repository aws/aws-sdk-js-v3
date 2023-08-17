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

import { de_UnitInputAndOutputCommand, se_UnitInputAndOutputCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UnitInputAndOutputCommand}.
 */
export interface UnitInputAndOutputCommandInput {}
/**
 * @public
 *
 * The output of {@link UnitInputAndOutputCommand}.
 */
export interface UnitInputAndOutputCommandOutput extends __MetadataBearer {}

/**
 * @public
 * This test is similar to NoInputAndNoOutput, but uses explicit Unit types.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, UnitInputAndOutputCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, UnitInputAndOutputCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new UnitInputAndOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnitInputAndOutputCommandInput - {@link UnitInputAndOutputCommandInput}
 * @returns {@link UnitInputAndOutputCommandOutput}
 * @see {@link UnitInputAndOutputCommandInput} for command's `input` shape.
 * @see {@link UnitInputAndOutputCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class UnitInputAndOutputCommand extends $Command<
  UnitInputAndOutputCommandInput,
  UnitInputAndOutputCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: UnitInputAndOutputCommandInput) {
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
  ): Handler<UnitInputAndOutputCommandInput, UnitInputAndOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "UnitInputAndOutputCommand";
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
  private serialize(input: UnitInputAndOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UnitInputAndOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnitInputAndOutputCommandOutput> {
    return de_UnitInputAndOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
