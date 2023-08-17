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

import { XmlMapsOutput } from "../models/models_0";
import { de_XmlMapsCommand, se_XmlMapsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link XmlMapsCommand}.
 */
export interface XmlMapsCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlMapsCommand}.
 */
export interface XmlMapsCommandOutput extends XmlMapsOutput, __MetadataBearer {}

/**
 * @public
 * The example tests basic map serialization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlMapsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, XmlMapsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new XmlMapsCommand(input);
 * const response = await client.send(command);
 * // { // XmlMapsOutput
 * //   myMap: { // XmlMapsOutputMap
 * //     "<keys>": { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlMapsCommandInput - {@link XmlMapsCommandInput}
 * @returns {@link XmlMapsCommandOutput}
 * @see {@link XmlMapsCommandInput} for command's `input` shape.
 * @see {@link XmlMapsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 */
export class XmlMapsCommand extends $Command<
  XmlMapsCommandInput,
  XmlMapsCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: XmlMapsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<XmlMapsCommandInput, XmlMapsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "XmlMapsCommand";
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
  private serialize(input: XmlMapsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_XmlMapsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlMapsCommandOutput> {
    return de_XmlMapsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
