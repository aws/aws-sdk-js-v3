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

import { QueryIdempotencyTokenAutoFillInput } from "../models/models_0";
import {
  de_QueryIdempotencyTokenAutoFillCommand,
  se_QueryIdempotencyTokenAutoFillCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link QueryIdempotencyTokenAutoFillCommand}.
 */
export interface QueryIdempotencyTokenAutoFillCommandInput extends QueryIdempotencyTokenAutoFillInput {}
/**
 * @public
 *
 * The output of {@link QueryIdempotencyTokenAutoFillCommand}.
 */
export interface QueryIdempotencyTokenAutoFillCommandOutput extends __MetadataBearer {}

/**
 * @public
 * Automatically adds idempotency tokens.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, QueryIdempotencyTokenAutoFillCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, QueryIdempotencyTokenAutoFillCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // QueryIdempotencyTokenAutoFillInput
 *   token: "STRING_VALUE",
 * };
 * const command = new QueryIdempotencyTokenAutoFillCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryIdempotencyTokenAutoFillCommandInput - {@link QueryIdempotencyTokenAutoFillCommandInput}
 * @returns {@link QueryIdempotencyTokenAutoFillCommandOutput}
 * @see {@link QueryIdempotencyTokenAutoFillCommandInput} for command's `input` shape.
 * @see {@link QueryIdempotencyTokenAutoFillCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class QueryIdempotencyTokenAutoFillCommand extends $Command<
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  /**
   * @public
   */
  constructor(readonly input: QueryIdempotencyTokenAutoFillCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryIdempotencyTokenAutoFillCommandInput, QueryIdempotencyTokenAutoFillCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "QueryIdempotencyTokenAutoFillCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "QueryIdempotencyTokenAutoFill",
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
  private serialize(input: QueryIdempotencyTokenAutoFillCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_QueryIdempotencyTokenAutoFillCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<QueryIdempotencyTokenAutoFillCommandOutput> {
    return de_QueryIdempotencyTokenAutoFillCommand(output, context);
  }
}
