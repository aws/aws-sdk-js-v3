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

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { XmlIntEnumsOutput, XmlIntEnumsOutputFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_ec2XmlIntEnumsCommand, serializeAws_ec2XmlIntEnumsCommand } from "../protocols/Aws_ec2";

export interface XmlIntEnumsCommandInput {}
export interface XmlIntEnumsCommandOutput extends XmlIntEnumsOutput, __MetadataBearer {}

/**
 * This example serializes intEnums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, XmlIntEnumsCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, XmlIntEnumsCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const command = new XmlIntEnumsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link XmlIntEnumsCommandInput} for command's `input` shape.
 * @see {@link XmlIntEnumsCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 */
export class XmlIntEnumsCommand extends $Command<
  XmlIntEnumsCommandInput,
  XmlIntEnumsCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: XmlIntEnumsCommandInput) {
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
  ): Handler<XmlIntEnumsCommandInput, XmlIntEnumsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "XmlIntEnumsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: XmlIntEnumsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: XmlIntEnumsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2XmlIntEnumsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlIntEnumsCommandOutput> {
    return deserializeAws_ec2XmlIntEnumsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
