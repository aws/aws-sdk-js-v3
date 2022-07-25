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

import { TestPayloadBlobInputOutput, TestPayloadBlobInputOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1TestPayloadBlobCommand,
  serializeAws_restJson1TestPayloadBlobCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

export interface TestPayloadBlobCommandInput extends TestPayloadBlobInputOutput {}
export interface TestPayloadBlobCommandOutput extends TestPayloadBlobInputOutput, __MetadataBearer {}

/**
 * This example operation serializes a payload targeting a blob.
 *
 * The Blob shape is not structured content and we cannot
 * make assumptions about what data will be sent. This test ensures
 * only a generic "Content-Type: application/octet-stream" header
 * is used, and that we are not treating an empty body as an
 * empty JSON document.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TestPayloadBlobCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, TestPayloadBlobCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new TestPayloadBlobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestPayloadBlobCommandInput} for command's `input` shape.
 * @see {@link TestPayloadBlobCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 */
export class TestPayloadBlobCommand extends $Command<
  TestPayloadBlobCommandInput,
  TestPayloadBlobCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestPayloadBlobCommandInput) {
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
  ): Handler<TestPayloadBlobCommandInput, TestPayloadBlobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "TestPayloadBlobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestPayloadBlobInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: TestPayloadBlobInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestPayloadBlobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TestPayloadBlobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestPayloadBlobCommandOutput> {
    return deserializeAws_restJson1TestPayloadBlobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
