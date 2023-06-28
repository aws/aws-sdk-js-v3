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
} from "@smithy/types";

import { HttpPrefixHeadersInputOutput } from "../models/models_0";
import { de_HttpPrefixHeadersCommand, se_HttpPrefixHeadersCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link HttpPrefixHeadersCommand}.
 */
export interface HttpPrefixHeadersCommandInput extends HttpPrefixHeadersInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPrefixHeadersCommand}.
 */
export interface HttpPrefixHeadersCommandOutput extends HttpPrefixHeadersInputOutput, __MetadataBearer {}

/**
 * @public
 * This examples adds headers to the input of a request and response by prefix.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPrefixHeadersCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPrefixHeadersCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPrefixHeadersInputOutput
 *   foo: "STRING_VALUE",
 *   fooMap: { // FooPrefixHeaders
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPrefixHeadersCommand(input);
 * const response = await client.send(command);
 * // { // HttpPrefixHeadersInputOutput
 * //   foo: "STRING_VALUE",
 * //   fooMap: { // FooPrefixHeaders
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPrefixHeadersCommandInput - {@link HttpPrefixHeadersCommandInput}
 * @returns {@link HttpPrefixHeadersCommandOutput}
 * @see {@link HttpPrefixHeadersCommandInput} for command's `input` shape.
 * @see {@link HttpPrefixHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class HttpPrefixHeadersCommand extends $Command<
  HttpPrefixHeadersCommandInput,
  HttpPrefixHeadersCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: HttpPrefixHeadersCommandInput) {
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
  ): Handler<HttpPrefixHeadersCommandInput, HttpPrefixHeadersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpPrefixHeadersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: HttpPrefixHeadersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_HttpPrefixHeadersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpPrefixHeadersCommandOutput> {
    return de_HttpPrefixHeadersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
