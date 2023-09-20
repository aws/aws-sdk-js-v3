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

import { HttpPrefixHeadersInResponseInput, HttpPrefixHeadersInResponseOutput } from "../models/models_0";
import {
  de_HttpPrefixHeadersInResponseCommand,
  se_HttpPrefixHeadersInResponseCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link HttpPrefixHeadersInResponseCommand}.
 */
export interface HttpPrefixHeadersInResponseCommandInput extends HttpPrefixHeadersInResponseInput {}
/**
 * @public
 *
 * The output of {@link HttpPrefixHeadersInResponseCommand}.
 */
export interface HttpPrefixHeadersInResponseCommandOutput extends HttpPrefixHeadersInResponseOutput, __MetadataBearer {}

/**
 * @public
 * Clients that perform this test extract all headers from the response.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPrefixHeadersInResponseCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPrefixHeadersInResponseCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new HttpPrefixHeadersInResponseCommand(input);
 * const response = await client.send(command);
 * // { // HttpPrefixHeadersInResponseOutput
 * //   prefixHeaders: { // StringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPrefixHeadersInResponseCommandInput - {@link HttpPrefixHeadersInResponseCommandInput}
 * @returns {@link HttpPrefixHeadersInResponseCommandOutput}
 * @see {@link HttpPrefixHeadersInResponseCommandInput} for command's `input` shape.
 * @see {@link HttpPrefixHeadersInResponseCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class HttpPrefixHeadersInResponseCommand extends $Command<
  HttpPrefixHeadersInResponseCommandInput,
  HttpPrefixHeadersInResponseCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: HttpPrefixHeadersInResponseCommandInput) {
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
  ): Handler<HttpPrefixHeadersInResponseCommandInput, HttpPrefixHeadersInResponseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpPrefixHeadersInResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "HttpPrefixHeadersInResponse",
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
  private serialize(input: HttpPrefixHeadersInResponseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_HttpPrefixHeadersInResponseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpPrefixHeadersInResponseCommandOutput> {
    return de_HttpPrefixHeadersInResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
