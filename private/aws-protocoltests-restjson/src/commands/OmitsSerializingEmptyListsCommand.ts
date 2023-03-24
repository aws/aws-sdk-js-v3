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

import { OmitsSerializingEmptyListsInput } from "../models/models_0";
import {
  deserializeAws_restJson1OmitsSerializingEmptyListsCommand,
  serializeAws_restJson1OmitsSerializingEmptyListsCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 *
 * The input for {@link OmitsSerializingEmptyListsCommand}.
 */
export interface OmitsSerializingEmptyListsCommandInput extends OmitsSerializingEmptyListsInput {}
/**
 * @public
 *
 * The output of {@link OmitsSerializingEmptyListsCommand}.
 */
export interface OmitsSerializingEmptyListsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * Omits serializing empty lists. Because empty strings are serilized as
 * `Foo=`, empty lists cannot also be serialized as `Foo=` and instead
 * must be omitted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, OmitsSerializingEmptyListsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, OmitsSerializingEmptyListsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {
 *   queryStringList: [
 *     "STRING_VALUE",
 *   ],
 *   queryIntegerList: [
 *     Number("int"),
 *   ],
 *   queryDoubleList: [
 *     Number("double"),
 *   ],
 *   queryBooleanList: [
 *     true || false,
 *   ],
 *   queryTimestampList: [
 *     new Date("TIMESTAMP"),
 *   ],
 *   queryEnumList: [
 *     "Foo" || "Baz" || "Bar" || "1" || "0",
 *   ],
 *   queryIntegerEnumList: [
 *     1 || 2 || 3,
 *   ],
 * };
 * const command = new OmitsSerializingEmptyListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param OmitsSerializingEmptyListsCommandInput - {@link OmitsSerializingEmptyListsCommandInput}
 * @returns {@link OmitsSerializingEmptyListsCommandOutput}
 * @see {@link OmitsSerializingEmptyListsCommandInput} for command's `input` shape.
 * @see {@link OmitsSerializingEmptyListsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 *
 */
export class OmitsSerializingEmptyListsCommand extends $Command<
  OmitsSerializingEmptyListsCommandInput,
  OmitsSerializingEmptyListsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: OmitsSerializingEmptyListsCommandInput) {
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
  ): Handler<OmitsSerializingEmptyListsCommandInput, OmitsSerializingEmptyListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "OmitsSerializingEmptyListsCommand";
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
  private serialize(input: OmitsSerializingEmptyListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1OmitsSerializingEmptyListsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<OmitsSerializingEmptyListsCommandOutput> {
    return deserializeAws_restJson1OmitsSerializingEmptyListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
