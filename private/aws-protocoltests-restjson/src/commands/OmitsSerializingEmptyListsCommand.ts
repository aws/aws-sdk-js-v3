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

import { OmitsSerializingEmptyListsInput, OmitsSerializingEmptyListsInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1OmitsSerializingEmptyListsCommand,
  serializeAws_restJson1OmitsSerializingEmptyListsCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * The input for {@link OmitsSerializingEmptyListsCommand}.
 */
export interface OmitsSerializingEmptyListsCommandInput extends OmitsSerializingEmptyListsInput {}
/**
 * The output of {@link OmitsSerializingEmptyListsCommand}.
 */
export interface OmitsSerializingEmptyListsCommandOutput extends __MetadataBearer {}

/**
 * Omits serializing empty lists. Because empty strings are serilized as
 * `Foo=`, empty lists cannot also be serialized as `Foo=` and instead
 * must be omitted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, OmitsSerializingEmptyListsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, OmitsSerializingEmptyListsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new OmitsSerializingEmptyListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
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
      inputFilterSensitiveLog: OmitsSerializingEmptyListsInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: OmitsSerializingEmptyListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1OmitsSerializingEmptyListsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<OmitsSerializingEmptyListsCommandOutput> {
    return deserializeAws_restJson1OmitsSerializingEmptyListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
