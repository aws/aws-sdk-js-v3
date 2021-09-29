import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { QueryTimestampsInput } from "../models/models_0";
import { deserializeAws_ec2QueryTimestampsCommand, serializeAws_ec2QueryTimestampsCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface QueryTimestampsCommandInput extends QueryTimestampsInput {}
export interface QueryTimestampsCommandOutput extends __MetadataBearer {}

/**
 * This test serializes timestamps.
 *
 * 1. Timestamps are serialized as RFC 3339 date-time values by default.
 * 2. A timestampFormat trait on a member changes the format.
 * 3. A timestampFormat trait on the shape targeted by the member changes the format.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, QueryTimestampsCommand } from "@aws-sdk/aws-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, QueryTimestampsCommand } = require("@aws-sdk/aws-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const command = new QueryTimestampsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryTimestampsCommandInput} for command's `input` shape.
 * @see {@link QueryTimestampsCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class QueryTimestampsCommand extends $Command<
  QueryTimestampsCommandInput,
  QueryTimestampsCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    configuration: EC2ProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryTimestampsCommandInput, QueryTimestampsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "QueryTimestampsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryTimestampsInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QueryTimestampsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2QueryTimestampsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryTimestampsCommandOutput> {
    return deserializeAws_ec2QueryTimestampsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
