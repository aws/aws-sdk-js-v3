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

import { XmlBlobsOutput } from "../models/models_0";
import { de_XmlEmptyBlobsCommand, se_XmlEmptyBlobsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link XmlEmptyBlobsCommand}.
 */
export interface XmlEmptyBlobsCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlEmptyBlobsCommand}.
 */
export interface XmlEmptyBlobsCommandOutput extends XmlBlobsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlEmptyBlobsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, XmlEmptyBlobsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new XmlEmptyBlobsCommand(input);
 * const response = await client.send(command);
 * // { // XmlBlobsOutput
 * //   data: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param XmlEmptyBlobsCommandInput - {@link XmlEmptyBlobsCommandInput}
 * @returns {@link XmlEmptyBlobsCommandOutput}
 * @see {@link XmlEmptyBlobsCommandInput} for command's `input` shape.
 * @see {@link XmlEmptyBlobsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 */
export class XmlEmptyBlobsCommand extends $Command<
  XmlEmptyBlobsCommandInput,
  XmlEmptyBlobsCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  /**
   * @public
   */
  constructor(readonly input: XmlEmptyBlobsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<XmlEmptyBlobsCommandInput, XmlEmptyBlobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "XmlEmptyBlobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsQuery",
        operation: "XmlEmptyBlobs",
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
  private serialize(input: XmlEmptyBlobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_XmlEmptyBlobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlEmptyBlobsCommandOutput> {
    return de_XmlEmptyBlobsCommand(output, context);
  }
}
