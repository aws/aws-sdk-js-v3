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

import { PostPlayerActionInput, PostPlayerActionOutput } from "../models/models_0";
import { de_PostPlayerActionCommand, se_PostPlayerActionCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PostPlayerActionCommand}.
 */
export interface PostPlayerActionCommandInput extends PostPlayerActionInput {}
/**
 * @public
 *
 * The output of {@link PostPlayerActionCommand}.
 */
export interface PostPlayerActionCommandOutput extends PostPlayerActionOutput, __MetadataBearer {}

/**
 * @public
 * This operation defines a union with a Unit member.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, PostPlayerActionCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, PostPlayerActionCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // PostPlayerActionInput
 *   action: { // PlayerAction Union: only one key present
 *     quit: {},
 *   },
 * };
 * const command = new PostPlayerActionCommand(input);
 * const response = await client.send(command);
 * // { // PostPlayerActionOutput
 * //   action: { // PlayerAction Union: only one key present
 * //     quit: {},
 * //   },
 * // };
 *
 * ```
 *
 * @param PostPlayerActionCommandInput - {@link PostPlayerActionCommandInput}
 * @returns {@link PostPlayerActionCommandOutput}
 * @see {@link PostPlayerActionCommandInput} for command's `input` shape.
 * @see {@link PostPlayerActionCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class PostPlayerActionCommand extends $Command<
  PostPlayerActionCommandInput,
  PostPlayerActionCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "PostPlayerAction",
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
  private serialize(input: PostPlayerActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PostPlayerActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PostPlayerActionCommandOutput> {
    return de_PostPlayerActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
