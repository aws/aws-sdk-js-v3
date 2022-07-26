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
  PostPlayerActionInput,
  PostPlayerActionInputFilterSensitiveLog,
  PostPlayerActionOutput,
  PostPlayerActionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PostPlayerActionCommand,
  serializeAws_restJson1PostPlayerActionCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

export interface PostPlayerActionCommandInput extends PostPlayerActionInput {}
export interface PostPlayerActionCommandOutput extends PostPlayerActionOutput, __MetadataBearer {}

/**
 * This operation defines a union with a Unit member.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, PostPlayerActionCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, PostPlayerActionCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new PostPlayerActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostPlayerActionCommandInput} for command's `input` shape.
 * @see {@link PostPlayerActionCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 */
export class PostPlayerActionCommand extends $Command<
  PostPlayerActionCommandInput,
  PostPlayerActionCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PostPlayerActionCommandInput) {
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
  ): Handler<PostPlayerActionCommandInput, PostPlayerActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "PostPlayerActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PostPlayerActionInputFilterSensitiveLog,
      outputFilterSensitiveLog: PostPlayerActionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PostPlayerActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PostPlayerActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PostPlayerActionCommandOutput> {
    return deserializeAws_restJson1PostPlayerActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
