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

import { PostUnionWithJsonNameInput, PostUnionWithJsonNameOutput } from "../models/models_0";
import { de_PostUnionWithJsonNameCommand, se_PostUnionWithJsonNameCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PostUnionWithJsonNameCommand}.
 */
export interface PostUnionWithJsonNameCommandInput extends PostUnionWithJsonNameInput {}
/**
 * @public
 *
 * The output of {@link PostUnionWithJsonNameCommand}.
 */
export interface PostUnionWithJsonNameCommandOutput extends PostUnionWithJsonNameOutput, __MetadataBearer {}

/**
 * @public
 * This operation defines a union that uses jsonName on some members.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, PostUnionWithJsonNameCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, PostUnionWithJsonNameCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // PostUnionWithJsonNameInput
 *   value: { // UnionWithJsonName Union: only one key present
 *     foo: "STRING_VALUE",
 *     bar: "STRING_VALUE",
 *     baz: "STRING_VALUE",
 *   },
 * };
 * const command = new PostUnionWithJsonNameCommand(input);
 * const response = await client.send(command);
 * // { // PostUnionWithJsonNameOutput
 * //   value: { // UnionWithJsonName Union: only one key present
 * //     foo: "STRING_VALUE",
 * //     bar: "STRING_VALUE",
 * //     baz: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PostUnionWithJsonNameCommandInput - {@link PostUnionWithJsonNameCommandInput}
 * @returns {@link PostUnionWithJsonNameCommandOutput}
 * @see {@link PostUnionWithJsonNameCommandInput} for command's `input` shape.
 * @see {@link PostUnionWithJsonNameCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class PostUnionWithJsonNameCommand extends $Command<
  PostUnionWithJsonNameCommandInput,
  PostUnionWithJsonNameCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "PostUnionWithJsonName",
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
  private serialize(input: PostUnionWithJsonNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PostUnionWithJsonNameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PostUnionWithJsonNameCommandOutput> {
    return de_PostUnionWithJsonNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
