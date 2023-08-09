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
} from "@smithy/types";

import { HttpPayloadWithStructureInputOutput } from "../models/models_0";
import { de_HttpPayloadWithStructureCommand, se_HttpPayloadWithStructureCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithStructureCommand}.
 */
export interface HttpPayloadWithStructureCommandInput extends HttpPayloadWithStructureInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithStructureCommand}.
 */
export interface HttpPayloadWithStructureCommandOutput extends HttpPayloadWithStructureInputOutput, __MetadataBearer {}

/**
 * @public
 * This examples serializes a structure in the payload.
 *
 * Note that serializing a structure changes the wrapper element name
 * to match the targeted structure.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPayloadWithStructureCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPayloadWithStructureCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpPayloadWithStructureInputOutput
 *   nested: { // NestedPayload
 *     greeting: "STRING_VALUE",
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithStructureCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithStructureInputOutput
 * //   nested: { // NestedPayload
 * //     greeting: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithStructureCommandInput - {@link HttpPayloadWithStructureCommandInput}
 * @returns {@link HttpPayloadWithStructureCommandOutput}
 * @see {@link HttpPayloadWithStructureCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithStructureCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class HttpPayloadWithStructureCommand extends $Command<
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: HttpPayloadWithStructureCommandInput) {
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
  ): Handler<HttpPayloadWithStructureCommandInput, HttpPayloadWithStructureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpPayloadWithStructureCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: HttpPayloadWithStructureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_HttpPayloadWithStructureCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpPayloadWithStructureCommandOutput> {
    return de_HttpPayloadWithStructureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
