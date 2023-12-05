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
import { OperationWithDefaultsInput, OperationWithDefaultsOutput } from "../models/models_0";
import { de_OperationWithDefaultsCommand, se_OperationWithDefaultsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link OperationWithDefaultsCommand}.
 */
export interface OperationWithDefaultsCommandInput extends OperationWithDefaultsInput {}
/**
 * @public
 *
 * The output of {@link OperationWithDefaultsCommand}.
 */
export interface OperationWithDefaultsCommandOutput extends OperationWithDefaultsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JSONRPC10Client, OperationWithDefaultsCommand } from "@aws-sdk/aws-protocoltests-json-10"; // ES Modules import
 * // const { JSONRPC10Client, OperationWithDefaultsCommand } = require("@aws-sdk/aws-protocoltests-json-10"); // CommonJS import
 * const client = new JSONRPC10Client(config);
 * const input = { // OperationWithDefaultsInput
 *   defaults: { // Defaults
 *     defaultString: "STRING_VALUE",
 *     defaultBoolean: true || false,
 *     defaultList: [ // TestStringList
 *       "STRING_VALUE",
 *     ],
 *     defaultDocumentMap: "DOCUMENT_VALUE",
 *     defaultDocumentString: "DOCUMENT_VALUE",
 *     defaultDocumentBoolean: "DOCUMENT_VALUE",
 *     defaultDocumentList: "DOCUMENT_VALUE",
 *     defaultNullDocument: "DOCUMENT_VALUE",
 *     defaultTimestamp: new Date("TIMESTAMP"),
 *     defaultBlob: "BLOB_VALUE",
 *     defaultByte: "BYTE_VALUE",
 *     defaultShort: Number("short"),
 *     defaultInteger: Number("int"),
 *     defaultLong: Number("long"),
 *     defaultFloat: Number("float"),
 *     defaultDouble: Number("double"),
 *     defaultMap: { // TestStringMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     defaultEnum: "FOO" || "BAR" || "BAZ",
 *     defaultIntEnum: 1 || 2,
 *   },
 *   topLevelDefault: "STRING_VALUE",
 * };
 * const command = new OperationWithDefaultsCommand(input);
 * const response = await client.send(command);
 * // { // OperationWithDefaultsOutput
 * //   defaultString: "STRING_VALUE",
 * //   defaultBoolean: true || false,
 * //   defaultList: [ // TestStringList
 * //     "STRING_VALUE",
 * //   ],
 * //   defaultDocumentMap: "DOCUMENT_VALUE",
 * //   defaultDocumentString: "DOCUMENT_VALUE",
 * //   defaultDocumentBoolean: "DOCUMENT_VALUE",
 * //   defaultDocumentList: "DOCUMENT_VALUE",
 * //   defaultNullDocument: "DOCUMENT_VALUE",
 * //   defaultTimestamp: new Date("TIMESTAMP"),
 * //   defaultBlob: "BLOB_VALUE",
 * //   defaultByte: "BYTE_VALUE",
 * //   defaultShort: Number("short"),
 * //   defaultInteger: Number("int"),
 * //   defaultLong: Number("long"),
 * //   defaultFloat: Number("float"),
 * //   defaultDouble: Number("double"),
 * //   defaultMap: { // TestStringMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   defaultEnum: "FOO" || "BAR" || "BAZ",
 * //   defaultIntEnum: 1 || 2,
 * // };
 *
 * ```
 *
 * @param OperationWithDefaultsCommandInput - {@link OperationWithDefaultsCommandInput}
 * @returns {@link OperationWithDefaultsCommandOutput}
 * @see {@link OperationWithDefaultsCommandInput} for command's `input` shape.
 * @see {@link OperationWithDefaultsCommandOutput} for command's `response` shape.
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 */
export class OperationWithDefaultsCommand extends $Command<
  OperationWithDefaultsCommandInput,
  OperationWithDefaultsCommandOutput,
  JSONRPC10ClientResolvedConfig
> {
  /**
   * @public
   */
  constructor(readonly input: OperationWithDefaultsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: JSONRPC10ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<OperationWithDefaultsCommandInput, OperationWithDefaultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JSONRPC10Client";
    const commandName = "OperationWithDefaultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "JsonRpc10",
        operation: "OperationWithDefaults",
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
  private serialize(input: OperationWithDefaultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_OperationWithDefaultsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<OperationWithDefaultsCommandOutput> {
    return de_OperationWithDefaultsCommand(output, context);
  }
}
