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

import { XmlNamespacesOutput } from "../models/models_0";
import { de_XmlNamespacesCommand, se_XmlNamespacesCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link XmlNamespacesCommand}.
 */
export interface XmlNamespacesCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlNamespacesCommand}.
 */
export interface XmlNamespacesCommandOutput extends XmlNamespacesOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlNamespacesCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, XmlNamespacesCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new XmlNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // XmlNamespacesOutput
 * //   nested: { // XmlNamespaceNested
 * //     foo: "STRING_VALUE",
 * //     values: [ // XmlNamespacedList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlNamespacesCommandInput - {@link XmlNamespacesCommandInput}
 * @returns {@link XmlNamespacesCommandOutput}
 * @see {@link XmlNamespacesCommandInput} for command's `input` shape.
 * @see {@link XmlNamespacesCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 */
export class XmlNamespacesCommand extends $Command<
  XmlNamespacesCommandInput,
  XmlNamespacesCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  /**
   * @public
   */
  constructor(readonly input: XmlNamespacesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<XmlNamespacesCommandInput, XmlNamespacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "XmlNamespacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsQuery",
        operation: "XmlNamespaces",
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
  private serialize(input: XmlNamespacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_XmlNamespacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlNamespacesCommandOutput> {
    return de_XmlNamespacesCommand(output, context);
  }
}
