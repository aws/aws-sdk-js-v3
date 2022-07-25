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

import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import {
  PutAndGetInlineDocumentsInputOutput,
  PutAndGetInlineDocumentsInputOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutAndGetInlineDocumentsCommand,
  serializeAws_json1_1PutAndGetInlineDocumentsCommand,
} from "../protocols/Aws_json1_1";

export interface PutAndGetInlineDocumentsCommandInput extends PutAndGetInlineDocumentsInputOutput {}
export interface PutAndGetInlineDocumentsCommandOutput extends PutAndGetInlineDocumentsInputOutput, __MetadataBearer {}

/**
 * This example serializes an inline document as part of the payload.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, PutAndGetInlineDocumentsCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, PutAndGetInlineDocumentsCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const command = new PutAndGetInlineDocumentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAndGetInlineDocumentsCommandInput} for command's `input` shape.
 * @see {@link PutAndGetInlineDocumentsCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 */
export class PutAndGetInlineDocumentsCommand extends $Command<
  PutAndGetInlineDocumentsCommandInput,
  PutAndGetInlineDocumentsCommandOutput,
  JsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAndGetInlineDocumentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: JsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAndGetInlineDocumentsCommandInput, PutAndGetInlineDocumentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JsonProtocolClient";
    const commandName = "PutAndGetInlineDocumentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAndGetInlineDocumentsInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: PutAndGetInlineDocumentsInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAndGetInlineDocumentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAndGetInlineDocumentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAndGetInlineDocumentsCommandOutput> {
    return deserializeAws_json1_1PutAndGetInlineDocumentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
