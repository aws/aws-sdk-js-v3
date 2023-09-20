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

import { RecursiveShapesInputOutput } from "../models/models_0";
import { de_RecursiveShapesCommand, se_RecursiveShapesCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RecursiveShapesCommand}.
 */
export interface RecursiveShapesCommandInput extends RecursiveShapesInputOutput {}
/**
 * @public
 *
 * The output of {@link RecursiveShapesCommand}.
 */
export interface RecursiveShapesCommandOutput extends RecursiveShapesInputOutput, __MetadataBearer {}

/**
 * @public
 * Recursive shapes
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, RecursiveShapesCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, RecursiveShapesCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // RecursiveShapesInputOutput
 *   nested: { // RecursiveShapesInputOutputNested1
 *     foo: "STRING_VALUE",
 *     nested: { // RecursiveShapesInputOutputNested2
 *       bar: "STRING_VALUE",
 *       recursiveMember: {
 *         foo: "STRING_VALUE",
 *         nested: {
 *           bar: "STRING_VALUE",
 *           recursiveMember: "<RecursiveShapesInputOutputNested1>",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new RecursiveShapesCommand(input);
 * const response = await client.send(command);
 * // { // RecursiveShapesInputOutput
 * //   nested: { // RecursiveShapesInputOutputNested1
 * //     foo: "STRING_VALUE",
 * //     nested: { // RecursiveShapesInputOutputNested2
 * //       bar: "STRING_VALUE",
 * //       recursiveMember: {
 * //         foo: "STRING_VALUE",
 * //         nested: {
 * //           bar: "STRING_VALUE",
 * //           recursiveMember: "<RecursiveShapesInputOutputNested1>",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RecursiveShapesCommandInput - {@link RecursiveShapesCommandInput}
 * @returns {@link RecursiveShapesCommandOutput}
 * @see {@link RecursiveShapesCommandInput} for command's `input` shape.
 * @see {@link RecursiveShapesCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class RecursiveShapesCommand extends $Command<
  RecursiveShapesCommandInput,
  RecursiveShapesCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: RecursiveShapesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RecursiveShapesCommandInput, RecursiveShapesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "RecursiveShapesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "RecursiveShapes",
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
  private serialize(input: RecursiveShapesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RecursiveShapesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecursiveShapesCommandOutput> {
    return de_RecursiveShapesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
