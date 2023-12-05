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

import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { OperationWithRequiredMembersOutput } from "../models/models_0";
import {
  de_OperationWithRequiredMembersCommand,
  se_OperationWithRequiredMembersCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link OperationWithRequiredMembersCommand}.
 */
export interface OperationWithRequiredMembersCommandInput {}
/**
 * @public
 *
 * The output of {@link OperationWithRequiredMembersCommand}.
 */
export interface OperationWithRequiredMembersCommandOutput
  extends OperationWithRequiredMembersOutput,
    __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, OperationWithRequiredMembersCommand } from "@aws-sdk/aws-protocoltests-json-10"; // ES Modules import
 * // const { JSONRPC10Client, OperationWithRequiredMembersCommand } = require("@aws-sdk/aws-protocoltests-json-10"); // CommonJS import
 * const client = new JSONRPC10Client(config);
 * const input = {};
 * const command = new OperationWithRequiredMembersCommand(input);
 * const response = await client.send(command);
 * // { // OperationWithRequiredMembersOutput
 * //   requiredString: "STRING_VALUE", // required
 * //   requiredBoolean: true || false, // required
 * //   requiredList: [ // RequiredStringList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   requiredTimestamp: new Date("TIMESTAMP"), // required
 * //   requiredBlob: "BLOB_VALUE", // required
 * //   requiredByte: "BYTE_VALUE", // required
 * //   requiredShort: Number("short"), // required
 * //   requiredInteger: Number("int"), // required
 * //   requiredLong: Number("long"), // required
 * //   requiredFloat: Number("float"), // required
 * //   requiredDouble: Number("double"), // required
 * //   requiredMap: { // RequiredStringMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param OperationWithRequiredMembersCommandInput - {@link OperationWithRequiredMembersCommandInput}
 * @returns {@link OperationWithRequiredMembersCommandOutput}
 * @see {@link OperationWithRequiredMembersCommandInput} for command's `input` shape.
 * @see {@link OperationWithRequiredMembersCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 */
export class OperationWithRequiredMembersCommand extends $Command<
  OperationWithRequiredMembersCommandInput,
  OperationWithRequiredMembersCommandOutput,
  JSONRPC10ClientResolvedConfig
> {
  /**
   * @public
   */
  constructor(readonly input: OperationWithRequiredMembersCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: JSONRPC10ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<OperationWithRequiredMembersCommandInput, OperationWithRequiredMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JSONRPC10Client";
    const commandName = "OperationWithRequiredMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "JsonRpc10",
        operation: "OperationWithRequiredMembers",
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
  private serialize(input: OperationWithRequiredMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_OperationWithRequiredMembersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<OperationWithRequiredMembersCommandOutput> {
    return de_OperationWithRequiredMembersCommand(output, context);
  }
}
