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

import { QueryParamsAsStringListMapInput } from "../models/models_0";
import { de_QueryParamsAsStringListMapCommand, se_QueryParamsAsStringListMapCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link QueryParamsAsStringListMapCommand}.
 */
export interface QueryParamsAsStringListMapCommandInput extends QueryParamsAsStringListMapInput {}
/**
 * @public
 *
 * The output of {@link QueryParamsAsStringListMapCommand}.
 */
export interface QueryParamsAsStringListMapCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, QueryParamsAsStringListMapCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, QueryParamsAsStringListMapCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // QueryParamsAsStringListMapInput
 *   qux: "STRING_VALUE",
 *   foo: { // StringListMap
 *     "<keys>": [ // StringList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new QueryParamsAsStringListMapCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryParamsAsStringListMapCommandInput - {@link QueryParamsAsStringListMapCommandInput}
 * @returns {@link QueryParamsAsStringListMapCommandOutput}
 * @see {@link QueryParamsAsStringListMapCommandInput} for command's `input` shape.
 * @see {@link QueryParamsAsStringListMapCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class QueryParamsAsStringListMapCommand extends $Command<
  QueryParamsAsStringListMapCommandInput,
  QueryParamsAsStringListMapCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: QueryParamsAsStringListMapCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryParamsAsStringListMapCommandInput, QueryParamsAsStringListMapCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "QueryParamsAsStringListMapCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RestXml",
        operation: "QueryParamsAsStringListMap",
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
  private serialize(input: QueryParamsAsStringListMapCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_QueryParamsAsStringListMapCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<QueryParamsAsStringListMapCommandOutput> {
    return de_QueryParamsAsStringListMapCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
