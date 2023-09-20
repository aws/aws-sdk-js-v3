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

import { TestPayloadStructureInputOutput } from "../models/models_0";
import { de_TestPayloadStructureCommand, se_TestPayloadStructureCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestPayloadStructureCommand}.
 */
export interface TestPayloadStructureCommandInput extends TestPayloadStructureInputOutput {}
/**
 * @public
 *
 * The output of {@link TestPayloadStructureCommand}.
 */
export interface TestPayloadStructureCommandOutput extends TestPayloadStructureInputOutput, __MetadataBearer {}

/**
 * @public
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
 * const input = { // TestPayloadStructureInputOutput
 *   testId: "STRING_VALUE",
 *   payloadConfig: { // PayloadConfig
 *     data: Number("int"),
 *   },
 * };
 * const command = new TestPayloadStructureCommand(input);
 * const response = await client.send(command);
 * // { // TestPayloadStructureInputOutput
 * //   testId: "STRING_VALUE",
 * //   payloadConfig: { // PayloadConfig
 * //     data: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param TestPayloadStructureCommandInput - {@link TestPayloadStructureCommandInput}
 * @returns {@link TestPayloadStructureCommandOutput}
 * @see {@link TestPayloadStructureCommandInput} for command's `input` shape.
 * @see {@link TestPayloadStructureCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class TestPayloadStructureCommand extends $Command<
  TestPayloadStructureCommandInput,
  TestPayloadStructureCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "TestPayloadStructure",
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
  private serialize(input: TestPayloadStructureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestPayloadStructureCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestPayloadStructureCommandOutput> {
    return de_TestPayloadStructureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
