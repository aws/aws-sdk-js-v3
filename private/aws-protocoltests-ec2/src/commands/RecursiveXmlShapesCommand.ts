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

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { RecursiveXmlShapesOutput } from "../models/models_0";
import { de_RecursiveXmlShapesCommand, se_RecursiveXmlShapesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RecursiveXmlShapesCommand}.
 */
export interface RecursiveXmlShapesCommandInput {}
/**
 * @public
 *
 * The output of {@link RecursiveXmlShapesCommand}.
 */
export interface RecursiveXmlShapesCommandOutput extends RecursiveXmlShapesOutput, __MetadataBearer {}

/**
 * @public
 * Recursive shapes
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, RecursiveXmlShapesCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, RecursiveXmlShapesCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const input = {};
 * const command = new RecursiveXmlShapesCommand(input);
 * const response = await client.send(command);
 * // { // RecursiveXmlShapesOutput
 * //   nested: { // RecursiveXmlShapesOutputNested1
 * //     foo: "STRING_VALUE",
 * //     nested: { // RecursiveXmlShapesOutputNested2
 * //       bar: "STRING_VALUE",
 * //       recursiveMember: {
 * //         foo: "STRING_VALUE",
 * //         nested: {
 * //           bar: "STRING_VALUE",
 * //           recursiveMember: "<RecursiveXmlShapesOutputNested1>",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RecursiveXmlShapesCommandInput - {@link RecursiveXmlShapesCommandInput}
 * @returns {@link RecursiveXmlShapesCommandOutput}
 * @see {@link RecursiveXmlShapesCommandInput} for command's `input` shape.
 * @see {@link RecursiveXmlShapesCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 */
export class RecursiveXmlShapesCommand extends $Command<
  RecursiveXmlShapesCommandInput,
  RecursiveXmlShapesCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: RecursiveXmlShapesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RecursiveXmlShapesCommandInput, RecursiveXmlShapesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "RecursiveXmlShapesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsEc2",
        operation: "RecursiveXmlShapes",
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
  private serialize(input: RecursiveXmlShapesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RecursiveXmlShapesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecursiveXmlShapesCommandOutput> {
    return de_RecursiveXmlShapesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
