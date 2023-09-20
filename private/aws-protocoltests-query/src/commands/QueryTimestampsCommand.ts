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

import { QueryTimestampsInput } from "../models/models_0";
import { de_QueryTimestampsCommand, se_QueryTimestampsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link QueryTimestampsCommand}.
 */
export interface QueryTimestampsCommandInput extends QueryTimestampsInput {}
/**
 * @public
 *
 * The output of {@link QueryTimestampsCommand}.
 */
export interface QueryTimestampsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * This test serializes timestamps.
 *
 * 1. Timestamps are serialized as RFC 3339 date-time values by default.
 * 2. A timestampFormat trait on a member changes the format.
 * 3. A timestampFormat trait on the shape targeted by the member changes the format.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, QueryTimestampsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, QueryTimestampsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = { // QueryTimestampsInput
 *   normalFormat: new Date("TIMESTAMP"),
 *   epochMember: new Date("TIMESTAMP"),
 *   epochTarget: new Date("TIMESTAMP"),
 * };
 * const command = new QueryTimestampsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryTimestampsCommandInput - {@link QueryTimestampsCommandInput}
 * @returns {@link QueryTimestampsCommandOutput}
 * @see {@link QueryTimestampsCommandInput} for command's `input` shape.
 * @see {@link QueryTimestampsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 */
export class QueryTimestampsCommand extends $Command<
  QueryTimestampsCommandInput,
  QueryTimestampsCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: QueryTimestampsCommandInput) {
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
  ): Handler<QueryTimestampsCommandInput, QueryTimestampsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "QueryTimestampsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsQuery",
        operation: "QueryTimestamps",
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
  private serialize(input: QueryTimestampsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_QueryTimestampsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryTimestampsCommandOutput> {
    return de_QueryTimestampsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
