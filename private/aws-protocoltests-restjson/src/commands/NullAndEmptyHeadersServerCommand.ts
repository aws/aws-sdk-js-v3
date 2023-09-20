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

import { NullAndEmptyHeadersIO } from "../models/models_0";
import { de_NullAndEmptyHeadersServerCommand, se_NullAndEmptyHeadersServerCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link NullAndEmptyHeadersServerCommand}.
 */
export interface NullAndEmptyHeadersServerCommandInput extends NullAndEmptyHeadersIO {}
/**
 * @public
 *
 * The output of {@link NullAndEmptyHeadersServerCommand}.
 */
export interface NullAndEmptyHeadersServerCommandOutput extends NullAndEmptyHeadersIO, __MetadataBearer {}

/**
 * @public
 * Null and empty headers are not sent over the wire.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, NullAndEmptyHeadersServerCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, NullAndEmptyHeadersServerCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // NullAndEmptyHeadersIO
 *   a: "STRING_VALUE",
 *   b: "STRING_VALUE",
 *   c: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new NullAndEmptyHeadersServerCommand(input);
 * const response = await client.send(command);
 * // { // NullAndEmptyHeadersIO
 * //   a: "STRING_VALUE",
 * //   b: "STRING_VALUE",
 * //   c: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param NullAndEmptyHeadersServerCommandInput - {@link NullAndEmptyHeadersServerCommandInput}
 * @returns {@link NullAndEmptyHeadersServerCommandOutput}
 * @see {@link NullAndEmptyHeadersServerCommandInput} for command's `input` shape.
 * @see {@link NullAndEmptyHeadersServerCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class NullAndEmptyHeadersServerCommand extends $Command<
  NullAndEmptyHeadersServerCommandInput,
  NullAndEmptyHeadersServerCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: NullAndEmptyHeadersServerCommandInput) {
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
  ): Handler<NullAndEmptyHeadersServerCommandInput, NullAndEmptyHeadersServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "NullAndEmptyHeadersServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "NullAndEmptyHeadersServer",
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
  private serialize(input: NullAndEmptyHeadersServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_NullAndEmptyHeadersServerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NullAndEmptyHeadersServerCommandOutput> {
    return de_NullAndEmptyHeadersServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
