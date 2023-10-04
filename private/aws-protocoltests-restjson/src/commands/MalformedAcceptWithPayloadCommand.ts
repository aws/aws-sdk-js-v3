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
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { MalformedAcceptWithPayloadOutput } from "../models/models_0";
import { de_MalformedAcceptWithPayloadCommand, se_MalformedAcceptWithPayloadCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link MalformedAcceptWithPayloadCommand}.
 */
export interface MalformedAcceptWithPayloadCommandInput {}
/**
 * @public
 */
export type MalformedAcceptWithPayloadCommandOutputType = Omit<MalformedAcceptWithPayloadOutput, "payload"> & {
  payload?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link MalformedAcceptWithPayloadCommand}.
 */
export interface MalformedAcceptWithPayloadCommandOutput
  extends MalformedAcceptWithPayloadCommandOutputType,
    __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedAcceptWithPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedAcceptWithPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new MalformedAcceptWithPayloadCommand(input);
 * const response = await client.send(command);
 * // { // MalformedAcceptWithPayloadOutput
 * //   payload: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param MalformedAcceptWithPayloadCommandInput - {@link MalformedAcceptWithPayloadCommandInput}
 * @returns {@link MalformedAcceptWithPayloadCommandOutput}
 * @see {@link MalformedAcceptWithPayloadCommandInput} for command's `input` shape.
 * @see {@link MalformedAcceptWithPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class MalformedAcceptWithPayloadCommand extends $Command<
  MalformedAcceptWithPayloadCommandInput,
  MalformedAcceptWithPayloadCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: MalformedAcceptWithPayloadCommandInput) {
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
  ): Handler<MalformedAcceptWithPayloadCommandInput, MalformedAcceptWithPayloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "MalformedAcceptWithPayloadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "MalformedAcceptWithPayload",
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
  private serialize(input: MalformedAcceptWithPayloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_MalformedAcceptWithPayloadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MalformedAcceptWithPayloadCommandOutput> {
    return de_MalformedAcceptWithPayloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
