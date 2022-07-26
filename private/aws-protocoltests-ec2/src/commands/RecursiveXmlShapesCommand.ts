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
import { RecursiveXmlShapesOutput, RecursiveXmlShapesOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_ec2RecursiveXmlShapesCommand,
  serializeAws_ec2RecursiveXmlShapesCommand,
} from "../protocols/Aws_ec2";

export interface RecursiveXmlShapesCommandInput {}
export interface RecursiveXmlShapesCommandOutput extends RecursiveXmlShapesOutput, __MetadataBearer {}

/**
 * Recursive shapes
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, RecursiveXmlShapesCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, RecursiveXmlShapesCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const command = new RecursiveXmlShapesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RecursiveXmlShapesCommandInput} for command's `input` shape.
 * @see {@link RecursiveXmlShapesCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 */
export class RecursiveXmlShapesCommand extends $Command<
  RecursiveXmlShapesCommandInput,
  RecursiveXmlShapesCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: RecursiveXmlShapesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RecursiveXmlShapesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RecursiveXmlShapesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecursiveXmlShapesCommandOutput> {
    return deserializeAws_ec2RecursiveXmlShapesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
