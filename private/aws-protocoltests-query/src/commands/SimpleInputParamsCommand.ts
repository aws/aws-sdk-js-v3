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

import { SimpleInputParamsInput } from "../models/models_0";
import { de_SimpleInputParamsCommand, se_SimpleInputParamsCommand } from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SimpleInputParamsCommand}.
 */
export interface SimpleInputParamsCommandInput extends SimpleInputParamsInput {}
/**
 * @public
 *
 * The output of {@link SimpleInputParamsCommand}.
 */
export interface SimpleInputParamsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * This test serializes strings, numbers, and boolean values.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, SimpleInputParamsCommand } from "@aws-sdk/aws-protocoltests-query"; // ES Modules import
 * // const { QueryProtocolClient, SimpleInputParamsCommand } = require("@aws-sdk/aws-protocoltests-query"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = { // SimpleInputParamsInput
 *   Foo: "STRING_VALUE",
 *   Bar: "STRING_VALUE",
 *   Baz: true || false,
 *   Bam: Number("int"),
 *   FloatValue: Number("float"),
 *   Boo: Number("double"),
 *   Qux: "BLOB_VALUE",
 *   FooEnum: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   IntegerEnum: 1 || 2 || 3,
 * };
 * const command = new SimpleInputParamsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SimpleInputParamsCommandInput - {@link SimpleInputParamsCommandInput}
 * @returns {@link SimpleInputParamsCommandOutput}
 * @see {@link SimpleInputParamsCommandInput} for command's `input` shape.
 * @see {@link SimpleInputParamsCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 */
export class SimpleInputParamsCommand extends $Command<
  SimpleInputParamsCommandInput,
  SimpleInputParamsCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: SimpleInputParamsCommandInput) {
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
  ): Handler<SimpleInputParamsCommandInput, SimpleInputParamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "SimpleInputParamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsQuery",
        operation: "SimpleInputParams",
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
  private serialize(input: SimpleInputParamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SimpleInputParamsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SimpleInputParamsCommandOutput> {
    return de_SimpleInputParamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
