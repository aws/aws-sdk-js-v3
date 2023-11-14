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

import { TimestampFormatHeadersIO } from "../models/models_0";
import { de_TimestampFormatHeadersCommand, se_TimestampFormatHeadersCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TimestampFormatHeadersCommand}.
 */
export interface TimestampFormatHeadersCommandInput extends TimestampFormatHeadersIO {}
/**
 * @public
 *
 * The output of {@link TimestampFormatHeadersCommand}.
 */
export interface TimestampFormatHeadersCommandOutput extends TimestampFormatHeadersIO, __MetadataBearer {}

/**
 * @public
 * The example tests how timestamp request and response headers are serialized.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, TimestampFormatHeadersCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, TimestampFormatHeadersCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // TimestampFormatHeadersIO
 *   memberEpochSeconds: new Date("TIMESTAMP"),
 *   memberHttpDate: new Date("TIMESTAMP"),
 *   memberDateTime: new Date("TIMESTAMP"),
 *   defaultFormat: new Date("TIMESTAMP"),
 *   targetEpochSeconds: new Date("TIMESTAMP"),
 *   targetHttpDate: new Date("TIMESTAMP"),
 *   targetDateTime: new Date("TIMESTAMP"),
 * };
 * const command = new TimestampFormatHeadersCommand(input);
 * const response = await client.send(command);
 * // { // TimestampFormatHeadersIO
 * //   memberEpochSeconds: new Date("TIMESTAMP"),
 * //   memberHttpDate: new Date("TIMESTAMP"),
 * //   memberDateTime: new Date("TIMESTAMP"),
 * //   defaultFormat: new Date("TIMESTAMP"),
 * //   targetEpochSeconds: new Date("TIMESTAMP"),
 * //   targetHttpDate: new Date("TIMESTAMP"),
 * //   targetDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param TimestampFormatHeadersCommandInput - {@link TimestampFormatHeadersCommandInput}
 * @returns {@link TimestampFormatHeadersCommandOutput}
 * @see {@link TimestampFormatHeadersCommandInput} for command's `input` shape.
 * @see {@link TimestampFormatHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class TimestampFormatHeadersCommand extends $Command<
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  /**
   * @public
   */
  constructor(readonly input: TimestampFormatHeadersCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TimestampFormatHeadersCommandInput, TimestampFormatHeadersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "TimestampFormatHeadersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "TimestampFormatHeaders",
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
  private serialize(input: TimestampFormatHeadersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TimestampFormatHeadersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TimestampFormatHeadersCommandOutput> {
    return de_TimestampFormatHeadersCommand(output, context);
  }
}
