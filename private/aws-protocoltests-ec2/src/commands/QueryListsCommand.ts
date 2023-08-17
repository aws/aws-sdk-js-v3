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

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { QueryListsInput } from "../models/models_0";
import { de_QueryListsCommand, se_QueryListsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link QueryListsCommand}.
 */
export interface QueryListsCommandInput extends QueryListsInput {}
/**
 * @public
 *
 * The output of {@link QueryListsCommand}.
 */
export interface QueryListsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * This test serializes simple and complex lists.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, QueryListsCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, QueryListsCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const input = { // QueryListsInput
 *   ListArg: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   ComplexListArg: [ // GreetingList
 *     { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   ],
 *   ListArgWithXmlNameMember: [ // ListWithXmlName
 *     "STRING_VALUE",
 *   ],
 *   ListArgWithXmlName: [
 *     "STRING_VALUE",
 *   ],
 *   NestedWithList: { // NestedStructWithList
 *     ListArg: [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new QueryListsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryListsCommandInput - {@link QueryListsCommandInput}
 * @returns {@link QueryListsCommandOutput}
 * @see {@link QueryListsCommandInput} for command's `input` shape.
 * @see {@link QueryListsCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 */
export class QueryListsCommand extends $Command<
  QueryListsCommandInput,
  QueryListsCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: QueryListsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryListsCommandInput, QueryListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "QueryListsCommand";
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
  private serialize(input: QueryListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_QueryListsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryListsCommandOutput> {
    return de_QueryListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
