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

import { TestPayloadStructureInputOutput, TestPayloadStructureInputOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1TestPayloadStructureCommand,
  serializeAws_restJson1TestPayloadStructureCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

export interface TestPayloadStructureCommandInput extends TestPayloadStructureInputOutput {}
export interface TestPayloadStructureCommandOutput extends TestPayloadStructureInputOutput, __MetadataBearer {}

/**
 * This example operation serializes a payload targeting a structure.
 *
 * This enforces the same requirements as TestBodyStructure
 * but with the body specified by the @httpPayload trait.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TestPayloadStructureCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, TestPayloadStructureCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new TestPayloadStructureCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestPayloadStructureCommandInput} for command's `input` shape.
 * @see {@link TestPayloadStructureCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 */
export class TestPayloadStructureCommand extends $Command<
  TestPayloadStructureCommandInput,
  TestPayloadStructureCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestPayloadStructureCommandInput) {
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
  ): Handler<TestPayloadStructureCommandInput, TestPayloadStructureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "TestPayloadStructureCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestPayloadStructureInputOutputFilterSensitiveLog,
      outputFilterSensitiveLog: TestPayloadStructureInputOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestPayloadStructureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TestPayloadStructureCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestPayloadStructureCommandOutput> {
    return deserializeAws_restJson1TestPayloadStructureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
