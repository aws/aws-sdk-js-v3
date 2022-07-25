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

import { TimestampFormatHeadersIO, TimestampFormatHeadersIOFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1TimestampFormatHeadersCommand,
  serializeAws_restJson1TimestampFormatHeadersCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

export interface TimestampFormatHeadersCommandInput extends TimestampFormatHeadersIO {}
export interface TimestampFormatHeadersCommandOutput extends TimestampFormatHeadersIO, __MetadataBearer {}

/**
 * This example tests how timestamp request and response headers are serialized.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TimestampFormatHeadersCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, TimestampFormatHeadersCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new TimestampFormatHeadersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TimestampFormatHeadersCommandInput} for command's `input` shape.
 * @see {@link TimestampFormatHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 */
export class TimestampFormatHeadersCommand extends $Command<
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TimestampFormatHeadersCommandInput) {
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
  ): Handler<TimestampFormatHeadersCommandInput, TimestampFormatHeadersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "TimestampFormatHeadersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TimestampFormatHeadersIOFilterSensitiveLog,
      outputFilterSensitiveLog: TimestampFormatHeadersIOFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TimestampFormatHeadersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TimestampFormatHeadersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TimestampFormatHeadersCommandOutput> {
    return deserializeAws_restJson1TimestampFormatHeadersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
