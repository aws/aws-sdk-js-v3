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

import { JsonTimestampsInputOutput } from "../models/models_0";
import { de_JsonTimestampsCommand, se_JsonTimestampsCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link JsonTimestampsCommand}.
 */
export interface JsonTimestampsCommandInput extends JsonTimestampsInputOutput {}
/**
 * @public
 *
 * The output of {@link JsonTimestampsCommand}.
 */
export interface JsonTimestampsCommandOutput extends JsonTimestampsInputOutput, __MetadataBearer {}

/**
 * @public
 * This tests how timestamps are serialized, including using the
 * default format of date-time and various @timestampFormat trait
 * values.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonTimestampsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonTimestampsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // JsonTimestampsInputOutput
 *   normal: new Date("TIMESTAMP"),
 *   dateTime: new Date("TIMESTAMP"),
 *   dateTimeOnTarget: new Date("TIMESTAMP"),
 *   epochSeconds: new Date("TIMESTAMP"),
 *   epochSecondsOnTarget: new Date("TIMESTAMP"),
 *   httpDate: new Date("TIMESTAMP"),
 *   httpDateOnTarget: new Date("TIMESTAMP"),
 * };
 * const command = new JsonTimestampsCommand(input);
 * const response = await client.send(command);
 * // { // JsonTimestampsInputOutput
 * //   normal: new Date("TIMESTAMP"),
 * //   dateTime: new Date("TIMESTAMP"),
 * //   dateTimeOnTarget: new Date("TIMESTAMP"),
 * //   epochSeconds: new Date("TIMESTAMP"),
 * //   epochSecondsOnTarget: new Date("TIMESTAMP"),
 * //   httpDate: new Date("TIMESTAMP"),
 * //   httpDateOnTarget: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param JsonTimestampsCommandInput - {@link JsonTimestampsCommandInput}
 * @returns {@link JsonTimestampsCommandOutput}
 * @see {@link JsonTimestampsCommandInput} for command's `input` shape.
 * @see {@link JsonTimestampsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class JsonTimestampsCommand extends $Command<
  JsonTimestampsCommandInput,
  JsonTimestampsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: JsonTimestampsCommandInput) {
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
  ): Handler<JsonTimestampsCommandInput, JsonTimestampsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "JsonTimestampsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "JsonTimestamps",
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
  private serialize(input: JsonTimestampsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_JsonTimestampsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonTimestampsCommandOutput> {
    return de_JsonTimestampsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
