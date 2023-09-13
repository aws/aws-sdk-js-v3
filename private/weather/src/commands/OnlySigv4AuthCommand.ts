// smithy-typescript generated code
import { ServiceInputTypes, ServiceOutputTypes, WeatherClientResolvedConfig } from "../WeatherClient";
import { getSigV4AuthPlugin } from "@aws-sdk/middleware-signing";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
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
 * The input for {@link OnlySigv4AuthCommand}.
 */
export interface OnlySigv4AuthCommandInput {}
/**
 * @public
 *
 * The output of {@link OnlySigv4AuthCommand}.
 */
export interface OnlySigv4AuthCommandOutput extends __MetadataBearer {}

export class OnlySigv4AuthCommand extends $Command<
  OnlySigv4AuthCommandInput,
  OnlySigv4AuthCommandOutput,
  WeatherClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: OnlySigv4AuthCommandInput) {
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
  ): Handler<OnlySigv4AuthCommandInput, OnlySigv4AuthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getSigV4AuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WeatherClient";
    const commandName = "OnlySigv4AuthCommand";
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
  private serialize(input: OnlySigv4AuthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    throw new Error("No supported protocol was found");
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<OnlySigv4AuthCommandOutput> {
    throw new Error("No supported protocol was found");
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
