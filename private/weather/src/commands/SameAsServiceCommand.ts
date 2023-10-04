// smithy-typescript generated code
import { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";
import { SameAsServiceOutput } from "../models/models_0";
import { getSigV4AuthPlugin } from "@aws-sdk/middleware-signing";
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
 * The input for {@link SameAsServiceCommand}.
 */
export interface SameAsServiceCommandInput {}
/**
 * @public
 *
 * The output of {@link SameAsServiceCommand}.
 */
export interface SameAsServiceCommandOutput extends SameAsServiceOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WeatherClient, SameAsServiceCommand } from "@aws-sdk/weather"; // ES Modules import
 * // const { WeatherClient, SameAsServiceCommand } = require("@aws-sdk/weather"); // CommonJS import
 * const client = new WeatherClient(config);
 * const input = {};
 * const command = new SameAsServiceCommand(input);
 * const response = await client.send(command);
 * // { // SameAsServiceOutput
 * //   service: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SameAsServiceCommandInput - {@link SameAsServiceCommandInput}
 * @returns {@link SameAsServiceCommandOutput}
 * @see {@link SameAsServiceCommandInput} for command's `input` shape.
 * @see {@link SameAsServiceCommandOutput} for command's `response` shape.
 * @see {@link WeatherClientResolvedConfig | config} for WeatherClient's `config` shape.
 *
 * @throws {@link WeatherServiceException}
 * <p>Base exception class for all service exceptions from Weather service.</p>
 *
 */
export class SameAsServiceCommand extends $Command<
  SameAsServiceCommandInput,
  SameAsServiceCommandOutput,
  WeatherClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: SameAsServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WeatherClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SameAsServiceCommandInput, SameAsServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getSigV4AuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WeatherClient";
    const commandName = "SameAsServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Weather",
        operation: "SameAsService",
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
  private serialize(input: SameAsServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    throw new Error("No supported protocol was found");
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SameAsServiceCommandOutput> {
    throw new Error("No supported protocol was found");
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
