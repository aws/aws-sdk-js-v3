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

import {
  EmptyInputAndEmptyOutputInput,
  EmptyInputAndEmptyOutputInputFilterSensitiveLog,
  EmptyInputAndEmptyOutputOutput,
  EmptyInputAndEmptyOutputOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1EmptyInputAndEmptyOutputCommand,
  serializeAws_restJson1EmptyInputAndEmptyOutputCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

export interface EmptyInputAndEmptyOutputCommandInput extends EmptyInputAndEmptyOutputInput {}
export interface EmptyInputAndEmptyOutputCommandOutput extends EmptyInputAndEmptyOutputOutput, __MetadataBearer {}

/**
 * The example tests how requests and responses are serialized when there's
 * no request or response payload because the operation has an empty input
 * and empty output structure that reuses the same shape. While this should
 * be rare, code generators must support this.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, EmptyInputAndEmptyOutputCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, EmptyInputAndEmptyOutputCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new EmptyInputAndEmptyOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EmptyInputAndEmptyOutputCommandInput} for command's `input` shape.
 * @see {@link EmptyInputAndEmptyOutputCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 */
export class EmptyInputAndEmptyOutputCommand extends $Command<
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EmptyInputAndEmptyOutputCommandInput) {
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
  ): Handler<EmptyInputAndEmptyOutputCommandInput, EmptyInputAndEmptyOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "EmptyInputAndEmptyOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EmptyInputAndEmptyOutputInputFilterSensitiveLog,
      outputFilterSensitiveLog: EmptyInputAndEmptyOutputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EmptyInputAndEmptyOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1EmptyInputAndEmptyOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EmptyInputAndEmptyOutputCommandOutput> {
    return deserializeAws_restJson1EmptyInputAndEmptyOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
