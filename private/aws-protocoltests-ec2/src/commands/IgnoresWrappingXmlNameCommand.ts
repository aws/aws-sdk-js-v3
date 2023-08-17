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
} from "@smithy/types";

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { IgnoresWrappingXmlNameOutput } from "../models/models_0";
import { de_IgnoresWrappingXmlNameCommand, se_IgnoresWrappingXmlNameCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link IgnoresWrappingXmlNameCommand}.
 */
export interface IgnoresWrappingXmlNameCommandInput {}
/**
 * @public
 *
 * The output of {@link IgnoresWrappingXmlNameCommand}.
 */
export interface IgnoresWrappingXmlNameCommandOutput extends IgnoresWrappingXmlNameOutput, __MetadataBearer {}

/**
 * @public
 * The xmlName trait on the output structure is ignored in AWS Query.
 *
 * The wrapping element is always operation name + "Response".
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, IgnoresWrappingXmlNameCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, IgnoresWrappingXmlNameCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const input = {};
 * const command = new IgnoresWrappingXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // IgnoresWrappingXmlNameOutput
 * //   foo: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param IgnoresWrappingXmlNameCommandInput - {@link IgnoresWrappingXmlNameCommandInput}
 * @returns {@link IgnoresWrappingXmlNameCommandOutput}
 * @see {@link IgnoresWrappingXmlNameCommandInput} for command's `input` shape.
 * @see {@link IgnoresWrappingXmlNameCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 */
export class IgnoresWrappingXmlNameCommand extends $Command<
  IgnoresWrappingXmlNameCommandInput,
  IgnoresWrappingXmlNameCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: IgnoresWrappingXmlNameCommandInput) {
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
  ): Handler<IgnoresWrappingXmlNameCommandInput, IgnoresWrappingXmlNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "IgnoresWrappingXmlNameCommand";
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
  private serialize(input: IgnoresWrappingXmlNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_IgnoresWrappingXmlNameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<IgnoresWrappingXmlNameCommandOutput> {
    return de_IgnoresWrappingXmlNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
