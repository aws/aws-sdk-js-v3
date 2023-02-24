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
  PostUnionWithJsonNameInput,
  PostUnionWithJsonNameInputFilterSensitiveLog,
  PostUnionWithJsonNameOutput,
  PostUnionWithJsonNameOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PostUnionWithJsonNameCommand,
  serializeAws_restJson1PostUnionWithJsonNameCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

export interface PostUnionWithJsonNameCommandInput extends PostUnionWithJsonNameInput {}
export interface PostUnionWithJsonNameCommandOutput extends PostUnionWithJsonNameOutput, __MetadataBearer {}

/**
 * This operation defines a union that uses jsonName on some members.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, PostUnionWithJsonNameCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, PostUnionWithJsonNameCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new PostUnionWithJsonNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostUnionWithJsonNameCommandInput} for command's `input` shape.
 * @see {@link PostUnionWithJsonNameCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 */
export class PostUnionWithJsonNameCommand extends $Command<
  PostUnionWithJsonNameCommandInput,
  PostUnionWithJsonNameCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PostUnionWithJsonNameCommandInput) {
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
  ): Handler<PostUnionWithJsonNameCommandInput, PostUnionWithJsonNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "PostUnionWithJsonNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PostUnionWithJsonNameInputFilterSensitiveLog,
      outputFilterSensitiveLog: PostUnionWithJsonNameOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PostUnionWithJsonNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PostUnionWithJsonNameCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PostUnionWithJsonNameCommandOutput> {
    return deserializeAws_restJson1PostUnionWithJsonNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
