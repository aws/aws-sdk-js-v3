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

import { JsonListsInputOutput, JsonListsInputOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1JsonListsCommand,
  serializeAws_restJson1JsonListsCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

export interface JsonListsCommandInput extends JsonListsInputOutput {}
export interface JsonListsCommandOutput extends JsonListsInputOutput, __MetadataBearer {}

/**
 * This test case serializes JSON lists for the following cases for both
 * input and output:
 *
 * 1. Normal JSON lists.
 * 2. Normal JSON sets.
 * 3. JSON lists of lists.
 * 4. Lists of structures.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, JsonListsCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, JsonListsCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new JsonListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JsonListsCommandInput} for command's `input` shape.
 * @see {@link JsonListsCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 */
export class JsonListsCommand extends $Command<
  JsonListsCommandInput,
  JsonListsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: JsonListsCommandInput) {
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
  ): Handler<JsonListsCommandInput, JsonListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "JsonListsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: JsonListsInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: JsonListsInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: JsonListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1JsonListsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonListsCommandOutput> {
    return deserializeAws_restJson1JsonListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
