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

import { TestBodyStructureInputOutput } from "../models/models_0";
import { de_TestBodyStructureCommand, se_TestBodyStructureCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestBodyStructureCommand}.
 */
export interface TestBodyStructureCommandInput extends TestBodyStructureInputOutput {}
/**
 * @public
 *
 * The output of {@link TestBodyStructureCommand}.
 */
export interface TestBodyStructureCommandOutput extends TestBodyStructureInputOutput, __MetadataBearer {}

/**
 * @public
 * This example operation serializes a structure in the HTTP body.
 *
 * It should ensure Content-Type: application/json is
 * used in all requests and that an "empty" body is
 * an empty JSON document (\{\}).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TestBodyStructureCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, TestBodyStructureCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // TestBodyStructureInputOutput
 *   testId: "STRING_VALUE",
 *   testConfig: { // TestConfig
 *     timeout: Number("int"),
 *   },
 * };
 * const command = new TestBodyStructureCommand(input);
 * const response = await client.send(command);
 * // { // TestBodyStructureInputOutput
 * //   testId: "STRING_VALUE",
 * //   testConfig: { // TestConfig
 * //     timeout: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param TestBodyStructureCommandInput - {@link TestBodyStructureCommandInput}
 * @returns {@link TestBodyStructureCommandOutput}
 * @see {@link TestBodyStructureCommandInput} for command's `input` shape.
 * @see {@link TestBodyStructureCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class TestBodyStructureCommand extends $Command<
  TestBodyStructureCommandInput,
  TestBodyStructureCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: TestBodyStructureCommandInput) {
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
  ): Handler<TestBodyStructureCommandInput, TestBodyStructureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "TestBodyStructureCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "TestBodyStructure",
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
  private serialize(input: TestBodyStructureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestBodyStructureCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestBodyStructureCommandOutput> {
    return de_TestBodyStructureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
