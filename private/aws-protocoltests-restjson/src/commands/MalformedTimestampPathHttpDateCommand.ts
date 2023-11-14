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

import { MalformedTimestampPathHttpDateInput } from "../models/models_0";
import {
  de_MalformedTimestampPathHttpDateCommand,
  se_MalformedTimestampPathHttpDateCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link MalformedTimestampPathHttpDateCommand}.
 */
export interface MalformedTimestampPathHttpDateCommandInput extends MalformedTimestampPathHttpDateInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampPathHttpDateCommand}.
 */
export interface MalformedTimestampPathHttpDateCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedTimestampPathHttpDateCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedTimestampPathHttpDateCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedTimestampPathHttpDateInput
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new MalformedTimestampPathHttpDateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedTimestampPathHttpDateCommandInput - {@link MalformedTimestampPathHttpDateCommandInput}
 * @returns {@link MalformedTimestampPathHttpDateCommandOutput}
 * @see {@link MalformedTimestampPathHttpDateCommandInput} for command's `input` shape.
 * @see {@link MalformedTimestampPathHttpDateCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 */
export class MalformedTimestampPathHttpDateCommand extends $Command<
  MalformedTimestampPathHttpDateCommandInput,
  MalformedTimestampPathHttpDateCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  /**
   * @public
   */
  constructor(readonly input: MalformedTimestampPathHttpDateCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MalformedTimestampPathHttpDateCommandInput, MalformedTimestampPathHttpDateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "MalformedTimestampPathHttpDateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestJson",
        operation: "MalformedTimestampPathHttpDate",
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
  private serialize(
    input: MalformedTimestampPathHttpDateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_MalformedTimestampPathHttpDateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MalformedTimestampPathHttpDateCommandOutput> {
    return de_MalformedTimestampPathHttpDateCommand(output, context);
  }
}
