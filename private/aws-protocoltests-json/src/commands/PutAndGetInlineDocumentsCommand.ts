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

import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { PutAndGetInlineDocumentsInputOutput } from "../models/models_0";
import { de_PutAndGetInlineDocumentsCommand, se_PutAndGetInlineDocumentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutAndGetInlineDocumentsCommand}.
 */
export interface PutAndGetInlineDocumentsCommandInput extends PutAndGetInlineDocumentsInputOutput {}
/**
 * @public
 *
 * The output of {@link PutAndGetInlineDocumentsCommand}.
 */
export interface PutAndGetInlineDocumentsCommandOutput extends PutAndGetInlineDocumentsInputOutput, __MetadataBearer {}

/**
 * @public
 * This example serializes an inline document as part of the payload.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, PutAndGetInlineDocumentsCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, PutAndGetInlineDocumentsCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const input = { // PutAndGetInlineDocumentsInputOutput
 *   inlineDocument: "DOCUMENT_VALUE",
 * };
 * const command = new PutAndGetInlineDocumentsCommand(input);
 * const response = await client.send(command);
 * // { // PutAndGetInlineDocumentsInputOutput
 * //   inlineDocument: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param PutAndGetInlineDocumentsCommandInput - {@link PutAndGetInlineDocumentsCommandInput}
 * @returns {@link PutAndGetInlineDocumentsCommandOutput}
 * @see {@link PutAndGetInlineDocumentsCommandInput} for command's `input` shape.
 * @see {@link PutAndGetInlineDocumentsCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 */
export class PutAndGetInlineDocumentsCommand extends $Command<
  PutAndGetInlineDocumentsCommandInput,
  PutAndGetInlineDocumentsCommandOutput,
  JsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: PutAndGetInlineDocumentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: JsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAndGetInlineDocumentsCommandInput, PutAndGetInlineDocumentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "JsonProtocolClient";
    const commandName = "PutAndGetInlineDocumentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "JsonProtocol",
        operation: "PutAndGetInlineDocuments",
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
  private serialize(input: PutAndGetInlineDocumentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutAndGetInlineDocumentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAndGetInlineDocumentsCommandOutput> {
    return de_PutAndGetInlineDocumentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
