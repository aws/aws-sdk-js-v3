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

import { HttpPayloadWithUnionInputOutput } from "../models/models_0";
import { de_HttpPayloadWithUnionCommand, se_HttpPayloadWithUnionCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithUnionCommand}.
 */
export interface HttpPayloadWithUnionCommandInput extends HttpPayloadWithUnionInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithUnionCommand}.
 */
export interface HttpPayloadWithUnionCommandOutput extends HttpPayloadWithUnionInputOutput, __MetadataBearer {}

/**
 * @public
 * This example serializes a union in the payload.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPayloadWithUnionCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPayloadWithUnionCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpPayloadWithUnionInputOutput
 *   nested: { // UnionPayload Union: only one key present
 *     greeting: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithUnionCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithUnionInputOutput
 * //   nested: { // UnionPayload Union: only one key present
 * //     greeting: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithUnionCommandInput - {@link HttpPayloadWithUnionCommandInput}
 * @returns {@link HttpPayloadWithUnionCommandOutput}
 * @see {@link HttpPayloadWithUnionCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithUnionCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class HttpPayloadWithUnionCommand extends $Command<
  HttpPayloadWithUnionCommandInput,
  HttpPayloadWithUnionCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: HttpPayloadWithUnionCommandInput) {
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
  ): Handler<HttpPayloadWithUnionCommandInput, HttpPayloadWithUnionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpPayloadWithUnionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "HttpPayloadWithUnion",
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
  private serialize(input: HttpPayloadWithUnionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_HttpPayloadWithUnionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpPayloadWithUnionCommandOutput> {
    return de_HttpPayloadWithUnionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
